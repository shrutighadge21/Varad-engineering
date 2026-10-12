import os
import fitz
import numpy as np
from PIL import Image
from scipy.ndimage import label

pdf_path = r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\a2f2d862-c88f-4c03-ad6e-f8455c1404df\.user_uploaded\media_1791787602129.pdf'
if not os.path.exists(pdf_path):
    raise FileNotFoundError(f"PDF not found at: {pdf_path}")

doc = fitz.open(pdf_path)
print(f"Successfully opened PDF with {len(doc)} pages.")

catalogue_dir = r'C:\Users\HeY MG\Desktop\Varad Engineering\public\images\catalogue'
services_dir = r'C:\Users\HeY MG\Desktop\Varad Engineering\public\images\services'
expertise_dir = r'C:\Users\HeY MG\Desktop\Varad Engineering\public\images\expertise'

os.makedirs(catalogue_dir, exist_ok=True)
os.makedirs(services_dir, exist_ok=True)
os.makedirs(expertise_dir, exist_ok=True)

def extract_page_image(page_num):
    page = doc[page_num - 1]
    img_list = page.get_images()
    if not img_list:
        raise ValueError(f"No images on page {page_num}")
    xref = img_list[0][0]
    base_image = doc.extract_image(xref)
    im = Image.open(fitz.io.BytesIO(base_image['image'])).convert('RGB')
    return im

def clean_and_frame_product(im, target_size=(800, 600), pad_ratio=0.10, is_circle=False):
    arr = np.array(im).astype(float)
    
    # Calculate background reference color from the 4 outer corner regions
    c_tl = arr[:8, :8].mean(axis=(0,1))
    c_tr = arr[:8, -8:].mean(axis=(0,1))
    c_bl = arr[-8:, :8].mean(axis=(0,1))
    c_br = arr[-8:, -8:].mean(axis=(0,1))
    bg_ref = (c_tl + c_tr + c_bl + c_br) / 4.0
    
    color_diff = np.sqrt(np.sum((arr - bg_ref)**2, axis=2))
    
    # Initial foreground detection
    fg_mask = color_diff > 14.0
    
    # Remove small isolated speckles (e.g. CAD origin markers or scan noise)
    labeled, num_features = label(fg_mask)
    for feat_idx in range(1, num_features + 1):
        area = np.sum(labeled == feat_idx)
        if area < 500: # Disconnected artifacts < 500 pixels
            color_diff[labeled == feat_idx] = 0.0
            
    fg_mask_clean = color_diff > 14.0
    y_idx, x_idx = np.where(fg_mask_clean)
    if len(y_idx) == 0:
        raise ValueError("No foreground detected in image")
        
    ymin, ymax = y_idx.min(), y_idx.max()
    xmin, xmax = x_idx.min(), x_idx.max()
    
    # Add small margin around bounding box to protect outer bevels
    m_y = max(4, int((ymax - ymin) * 0.02))
    m_x = max(4, int((xmax - xmin) * 0.02))
    ymin = max(0, ymin - m_y)
    ymax = min(im.height, ymax + m_y)
    xmin = max(0, xmin - m_x)
    xmax = min(im.width, xmax + m_x)
    
    crop_arr = arr[ymin:ymax, xmin:xmax]
    crop_diff = color_diff[ymin:ymax, xmin:xmax]
    
    # Smooth alpha feathering on edges
    alpha = np.clip((crop_diff - 4.0) / (22.0 - 4.0), 0.0, 1.0) * 255.0
    alpha = alpha.astype(np.uint8)
    
    rgb = np.clip(crop_arr, 0, 255).astype(np.uint8)
    rgba = np.dstack([rgb, alpha])
    crop_im = Image.fromarray(rgba, 'RGBA')
    
    tw, th = target_size
    actual_pad = max(pad_ratio, 0.16) if is_circle else pad_ratio
    
    max_w = int(tw * (1 - actual_pad * 2))
    max_h = int(th * (1 - actual_pad * 2))
    scale = min(max_w / crop_im.width, max_h / crop_im.height)
    nw, nh = int(crop_im.width * scale), int(crop_im.height * scale)
    
    resized = crop_im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', target_size, (255, 255, 255, 0))
    offset_x = (tw - nw) // 2
    offset_y = (th - nh) // 2
    canvas.paste(resized, (offset_x, offset_y), resized)
    return canvas

# 1. Extract from PDF & Save to catalogue/
tasks = [
    # Services & Products
    {
        'page': 1, # Page 1: 80x80x16mm Palm Connector
        'name': 'Palm Connector',
        'feat_files': [
            os.path.join(catalogue_dir, 'catalogue-01-connectors.png'),
            os.path.join(services_dir, 'hardware-01-connectors.png')
        ],
        'thumb_files': [
            os.path.join(catalogue_dir, 'thumb-01-connectors.png'),
            os.path.join(services_dir, 'thumb-01-connectors.png')
        ]
    },
    {
        'page': 10, # Page 10: BPI Support Clamp Single Connector
        'name': 'BPI Support Clamp',
        'feat_files': [
            os.path.join(catalogue_dir, 'catalogue-02-clamps.png'),
            os.path.join(services_dir, 'hardware-02-clamps.png')
        ],
        'thumb_files': [
            os.path.join(catalogue_dir, 'thumb-02-clamps.png'),
            os.path.join(services_dir, 'thumb-02-clamps.png')
        ]
    },
    {
        'page': 18, # Page 18: Expansion Type Terminal Connector on CB/PG Isolator to suit 4" IPS Tube
        'name': 'Expansion Terminal Connector (4" IPS Tube to CB/PG)',
        'feat_files': [
            os.path.join(catalogue_dir, 'catalogue-03-terminals.png'),
            os.path.join(services_dir, 'hardware-03-terminals.png')
        ],
        'thumb_files': [
            os.path.join(catalogue_dir, 'thumb-03-terminals.png'),
            os.path.join(services_dir, 'thumb-03-terminals.png')
        ]
    },
    {
        'page': 35, # Page 35: Suspension Hardware for Twin Conductor
        'name': 'Suspension Hardware String (Twin Conductor)',
        'feat_files': [
            os.path.join(catalogue_dir, 'catalogue-04-suspension.png'),
            os.path.join(services_dir, 'hardware-04-suspension.png')
        ],
        'thumb_files': [
            os.path.join(catalogue_dir, 'thumb-04-suspension.png'),
            os.path.join(services_dir, 'thumb-04-suspension.png')
        ]
    },
    {
        'page': 29, # Page 29: U Type Connecting Plates for Breaker
        'name': 'U Type Connecting Plates for Breaker',
        'feat_files': [
            os.path.join(catalogue_dir, 'catalogue-05-custom.png'),
            os.path.join(services_dir, 'hardware-05-custom.png')
        ],
        'thumb_files': [
            os.path.join(catalogue_dir, 'thumb-05-custom.png'),
            os.path.join(services_dir, 'thumb-05-custom.png')
        ]
    }
]

print("\n--- Processing Manufactured Products Images ---")
for t in tasks:
    raw_img = extract_page_image(t['page'])
    feat = clean_and_frame_product(raw_img, (800, 600), pad_ratio=0.10)
    thumb = clean_and_frame_product(raw_img, (280, 210), pad_ratio=0.08)
    for p in t['feat_files']:
        feat.save(p, 'PNG', optimize=True)
        print(f"  Saved featured: {os.path.basename(p)}")
    for p in t['thumb_files']:
        thumb.save(p, 'PNG', optimize=True)
        print(f"  Saved thumb: {os.path.basename(p)}")

# 2. Expertise Nodes (Circular)
expertise_tasks = [
    {
        'page': 1, # Page 1: 80x80x16mm Palm Connector
        'name': 'Electrical Connectors',
        'dest': [
            os.path.join(catalogue_dir, 'expertise-01-connectors.png'),
            os.path.join(expertise_dir, 'node-1-connectors.png')
        ]
    },
    {
        'page': 15, # Page 15: Through Type Bus Post Clamp Suitable for 4" IPS Tube
        'name': 'Clamps & Support Systems',
        'dest': [
            os.path.join(catalogue_dir, 'expertise-02-clamps.png'),
            os.path.join(expertise_dir, 'node-2-clamps.png')
        ]
    },
    {
        'page': 18, # Page 18: Expansion Type Terminal Connector on CB/PG
        'name': 'Terminal Connections & Equipment Hardware',
        'dest': [
            os.path.join(catalogue_dir, 'expertise-03-terminals.png'),
            os.path.join(expertise_dir, 'node-3-terminals.png')
        ]
    },
    {
        'page': 35, # Page 35: Suspension Hardware for Twin Conductor
        'name': 'Suspension & Tension Hardware',
        'dest': [
            os.path.join(catalogue_dir, 'expertise-04-suspension.png'),
            os.path.join(expertise_dir, 'node-4-suspension.png')
        ]
    },
    {
        'page': 39, # Page 39: Flexible Copper Earth Bond
        'name': 'Earthing Components',
        'dest': [
            os.path.join(catalogue_dir, 'expertise-05-earthing.png'),
            os.path.join(expertise_dir, 'node-5-earthing.png')
        ]
    },
    {
        'page': 29, # Page 29: U Type Connecting Plates for Breaker
        'name': 'Custom Engineering Solutions',
        'dest': [
            os.path.join(catalogue_dir, 'expertise-06-custom.png'),
            os.path.join(expertise_dir, 'node-6-custom.png')
        ]
    }
]

print("\n--- Processing Areas of Expertise Node Images ---")
for t in expertise_tasks:
    raw_img = extract_page_image(t['page'])
    node = clean_and_frame_product(raw_img, (380, 380), pad_ratio=0.15, is_circle=True)
    for p in t['dest']:
        node.save(p, 'PNG', optimize=True)
        print(f"  Saved node: {os.path.basename(p)} for {t['name']}")

print("\nALL CATALOGUE IMAGES EXTRACTED AND SAVED SUCCESSFULLY.")

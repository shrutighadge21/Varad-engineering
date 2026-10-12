import os
import numpy as np
from PIL import Image
from scipy.ndimage import label

extracted_dir = r'C:\Users\HeY MG\Desktop\Varad Engineering\scripts\extracted_pdf_images'
services_dir = r'C:\Users\HeY MG\Desktop\Varad Engineering\public\images\services'
expertise_dir = r'C:\Users\HeY MG\Desktop\Varad Engineering\public\images\expertise'

os.makedirs(services_dir, exist_ok=True)
os.makedirs(expertise_dir, exist_ok=True)

def process_product_image(src_path, target_size=(800, 600), pad_ratio=0.10, is_circle_target=False):
    im = Image.open(src_path).convert('RGB')
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
        if area < 500: # Remove tiny disconnected components
            color_diff[labeled == feat_idx] = 0.0
            
    fg_mask_clean = color_diff > 14.0
    y_idx, x_idx = np.where(fg_mask_clean)
    if len(y_idx) == 0:
        raise ValueError(f"No foreground detected in {src_path}")
        
    ymin, ymax = y_idx.min(), y_idx.max()
    xmin, xmax = x_idx.min(), x_idx.max()
    
    # Add small margin around bounding box
    m_y = max(4, int((ymax - ymin) * 0.02))
    m_x = max(4, int((xmax - xmin) * 0.02))
    ymin = max(0, ymin - m_y)
    ymax = min(im.height, ymax + m_y)
    xmin = max(0, xmin - m_x)
    xmax = min(im.width, xmax + m_x)
    
    crop_arr = arr[ymin:ymax, xmin:xmax]
    crop_diff = color_diff[ymin:ymax, xmin:xmax]
    
    # Smooth alpha feathering on edges:
    # diff <= 4 -> alpha 0
    # diff >= 22 -> alpha 255
    alpha = np.clip((crop_diff - 4.0) / (22.0 - 4.0), 0.0, 1.0) * 255.0
    alpha = alpha.astype(np.uint8)
    
    rgb = np.clip(crop_arr, 0, 255).astype(np.uint8)
    rgba = np.dstack([rgb, alpha])
    crop_im = Image.fromarray(rgba, 'RGBA')
    
    # Placement on target canvas
    tw, th = target_size
    
    # If circular target, pad slightly more so corners of the product fit within circle
    actual_pad = pad_ratio
    if is_circle_target:
        # circle radius R = min(tw, th) / 2
        # max diagonal allowed = 2 * R * 0.82
        actual_pad = max(pad_ratio, 0.16)
        
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

# 1. SERVICES SECTION ASSETS
services_mapping = [
    {
        'id': '01-connectors',
        'page': 1, # Page 1: 80x80x16mm Palm Connector
        'name': 'Palm Connector (80x80x16mm)'
    },
    {
        'id': '02-clamps',
        'page': 10, # Page 10: BPI Support Clamp Single Connector
        'name': 'BPI Support Clamp Single Connector'
    },
    {
        'id': '03-terminals',
        'page': 21, # Page 21: Rigid Type Terminal Connector 4" IPS to CT Plate Type
        'name': 'Rigid Terminal Connector for 4" IPS Tube to CT'
    },
    {
        'id': '04-suspension',
        'page': 35, # Page 35: Suspension Hardware for Twin Conductor
        'name': 'Suspension Hardware for Twin Conductor'
    },
    {
        'id': '05-custom',
        'page': 29, # Page 29: U Type Connecting Plates for Breaker
        'name': 'U Type Connecting Plates for Breaker'
    }
]

print("=== Generating Services Section Assets ===")
for item in services_mapping:
    src_file = os.path.join(extracted_dir, f"page_{item['page']:02d}_img_1.jpeg")
    
    # Main featured image (800x600)
    feat_img = process_product_image(src_file, target_size=(800, 600), pad_ratio=0.10)
    feat_dest = os.path.join(services_dir, f"hardware-{item['id']}.png")
    feat_img.save(feat_dest, 'PNG', optimize=True)
    print(f"  Saved featured: {os.path.basename(feat_dest)} from Page {item['page']} ({item['name']})")
    
    # Thumbnail image (280x210)
    thumb_img = process_product_image(src_file, target_size=(280, 210), pad_ratio=0.08)
    thumb_dest = os.path.join(services_dir, f"thumb-{item['id']}.png")
    thumb_img.save(thumb_dest, 'PNG', optimize=True)
    print(f"  Saved thumbnail: {os.path.basename(thumb_dest)}")

# 2. EXPERTISE SECTION ASSETS
expertise_mapping = [
    {
        'file': 'node-1-connectors.png',
        'exp_file': 'exp-01-connectors.png',
        'page': 1, # Page 1: 80x80x16mm Palm Connector
        'category': 'Electrical Connectors'
    },
    {
        'file': 'node-2-clamps.png',
        'exp_file': 'exp-03-clamps.png',
        'page': 15, # Page 15: Through Type Bus Post Clamp Suitable for 4" IPS Tube
        'category': 'Clamps & Support Systems'
    },
    {
        'file': 'node-3-terminals.png',
        'exp_file': 'exp-05-terminals.png',
        'page': 21, # Page 21: Rigid Terminal Connector for 4" IPS Tube to CT
        'category': 'Terminal Connections & Equipment Hardware'
    },
    {
        'file': 'node-4-suspension.png',
        'exp_file': 'exp-02-suspension.png',
        'page': 35, # Page 35: Suspension Hardware for Twin Conductor
        'category': 'Suspension & Tension Hardware'
    },
    {
        'file': 'node-5-earthing.png',
        'exp_file': 'exp-04-earthing.png',
        'page': 39, # Page 39: Flexible Copper Earth Bond
        'category': 'Earthing Components'
    },
    {
        'file': 'node-6-custom.png',
        'exp_file': 'exp-06-custom.png',
        'page': 29, # Page 29: U Type Connecting Plates for Breaker
        'category': 'Custom Engineering Solutions'
    }
]

print("\n=== Generating Expertise Section Assets ===")
for item in expertise_mapping:
    src_file = os.path.join(extracted_dir, f"page_{item['page']:02d}_img_1.jpeg")
    
    # Circular avatar node image (380x380)
    node_img = process_product_image(src_file, target_size=(380, 380), pad_ratio=0.16, is_circle_target=True)
    node_dest = os.path.join(expertise_dir, item['file'])
    node_img.save(node_dest, 'PNG', optimize=True)
    print(f"  Saved node: {item['file']} from Page {item['page']} for {item['category']}")
    
    # Also save exp-xx counterpart
    exp_dest = os.path.join(expertise_dir, item['exp_file'])
    node_img.save(exp_dest, 'PNG', optimize=True)

print("\nAll assets successfully generated!")

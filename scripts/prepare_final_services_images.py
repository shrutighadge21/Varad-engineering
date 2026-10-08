import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

ref_path = r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\6f6254b7-f1e9-435f-b31f-615141bd23fb\.user_uploaded\media_1791287043991.png'
ref = Image.open(ref_path).convert('RGB')
w, h = ref.size
print('Loaded new reference:', w, h)

services_dir = r'c:\Users\HeY MG\Desktop\Varad Engineering\public\images\services'
expertise_dir = r'c:\Users\HeY MG\Desktop\Varad Engineering\public\images\expertise'
os.makedirs(services_dir, exist_ok=True)
os.makedirs(expertise_dir, exist_ok=True)

# Precise crops from the reference image
crops_info = {
    1: {
        'id': 'connectors',
        'box': (32, 22, 298, 208),
        'title': 'Electrical Connectors'
    },
    2: {
        'id': 'clamps',
        'box': (375, 8, 615, 208),
        'title': 'Clamps & Support Systems'
    },
    3: {
        'id': 'terminals',
        'box': (695, 16, 975, 208),
        'title': 'Terminal & Equipment Connections'
    },
    4: {
        'id': 'suspension',
        'box': (130, 255, 460, 452),
        'title': 'Suspension, Tension & Earthing Hardware'
    },
    5: {
        'id': 'custom',
        'box': (575, 255, 875, 452),
        'title': 'Custom Engineering Solutions'
    }
}

def clean_and_process(crop_img, target_size=(800, 600), pad_ratio=0.12):
    arr = np.array(crop_img).astype(float)
    r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
    min_c = np.minimum(np.minimum(r, g), b)
    max_c = np.maximum(np.maximum(r, g), b)
    diff = max_c - min_c
    
    # Smooth light factor to pull light backgrounds to 255
    light_factor = np.clip((min_c - 225) / (255 - 225), 0, 1)
    clean_arr = arr.copy()
    for c in range(3):
        clean_arr[:,:,c] = clean_arr[:,:,c] * (1 - light_factor) + 255.0 * light_factor
    
    # Alpha channel
    alpha = np.ones((crop_img.height, crop_img.width), dtype=np.uint8) * 255
    pure_bg = (min_c >= 253) & (diff < 4)
    alpha[pure_bg] = 0
    
    edge_bg = (min_c >= 238) & (min_c < 253) & (diff < 6)
    alpha[edge_bg] = ((253 - min_c[edge_bg]) / 14.0 * 255).astype(np.uint8)
    
    rgba = Image.fromarray(np.dstack([np.clip(clean_arr, 0, 255).astype(np.uint8), alpha]))
    
    # Upscale 3x with Lanczos for super high clarity
    uw, uh = int(rgba.width * 3), int(rgba.height * 3)
    up = rgba.resize((uw, uh), Image.Resampling.LANCZOS)
    enhancer = ImageEnhance.Sharpness(up)
    up = enhancer.enhance(1.25)
    
    # Place on target canvas
    tw, th = target_size
    max_w = int(tw * (1 - pad_ratio * 2))
    max_h = int(th * (1 - pad_ratio * 2))
    scale = min(max_w / up.width, max_h / up.height)
    new_w, new_h = int(up.width * scale), int(up.height * scale)
    placed = up.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    canvas = Image.new('RGBA', target_size, (255, 255, 255, 0))
    canvas.paste(placed, ((tw - new_w) // 2, (th - new_h) // 2), placed)
    
    return canvas

print("Processing and exporting all 5 product images...")
for idx, info in crops_info.items():
    p_id = info['id']
    crop = ref.crop(info['box'])
    
    # 1. Featured Image (800x600)
    feat_img = clean_and_process(crop, target_size=(800, 600), pad_ratio=0.10)
    feat_png = os.path.join(services_dir, f'featured-{idx}-{p_id}.png')
    feat_img.save(feat_png, 'PNG', optimize=True)
    if idx == 1:
        feat_img.save(os.path.join(services_dir, 'featured-connectors.png'), 'PNG', optimize=True)
    print(f"Saved featured-{idx}-{p_id}.png")
    
    # 2. Thumbnail Image (280x210)
    thumb_img = clean_and_process(crop, target_size=(280, 210), pad_ratio=0.08)
    thumb_png = os.path.join(services_dir, f'thumb-{idx}-{p_id}.png')
    thumb_img.save(thumb_png, 'PNG', optimize=True)
    print(f"Saved thumb-{idx}-{p_id}.png")

print("All 5 service product images saved successfully!")

import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageOps

ref_path = r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\6f6254b7-f1e9-435f-b31f-615141bd23fb\.user_uploaded\media_1791283806121.png'
ref = Image.open(ref_path).convert('RGB')
w, h = ref.size
print('Reference loaded:', w, h)

out_dir = r'c:\Users\HeY MG\Desktop\Varad Engineering\public\images\services'
os.makedirs(out_dir, exist_ok=True)

# 1. Clean background helper
def clean_and_alpha(crop_img, white_thresh=245):
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
    
    # Calculate Alpha
    alpha = np.ones((crop_img.height, crop_img.width), dtype=np.uint8) * 255
    pure_bg = (min_c >= 252) & (diff < 4)
    alpha[pure_bg] = 0
    
    edge_bg = (min_c >= 238) & (min_c < 252) & (diff < 6)
    alpha[edge_bg] = ((252 - min_c[edge_bg]) / 14.0 * 255).astype(np.uint8)
    
    rgba = Image.fromarray(np.dstack([np.clip(clean_arr, 0, 255).astype(np.uint8), alpha]))
    return rgba

# 2. Extract the exact bounding boxes from the reference image:
# Large center connector:
feat_1_crop = ref.crop((476, 58, 776, 308))

# 5 Thumbnails from reference:
# Box coordinates verified against 1024x512 reference:
thumb_boxes = {
    1: (112, 350, 210, 465),  # 01 Palm Connector
    2: (310, 362, 412, 465),  # 02 Clamps & Support
    3: (490, 375, 595, 465),  # 03 Terminal Connector
    4: (660, 368, 785, 465),  # 04 Suspension Hardware
    5: (850, 368, 965, 465)   # 05 Custom Z-Plate
}

names = {
    1: 'connectors',
    2: 'clamps',
    3: 'terminals',
    4: 'suspension',
    5: 'custom'
}

# For thumbnails:
for idx, box in thumb_boxes.items():
    p_name = names[idx]
    crop = ref.crop(box)
    rgba = clean_and_alpha(crop)
    
    # Upscale 3x with Lanczos for super-crisp high-DPI display
    uw, uh = int(rgba.width * 3), int(rgba.height * 3)
    up = rgba.resize((uw, uh), Image.Resampling.LANCZOS)
    enhancer = ImageEnhance.Sharpness(up)
    up = enhancer.enhance(1.25)
    
    # Place on 300x220 canvas centered
    canvas = Image.new('RGBA', (300, 220), (255, 255, 255, 0))
    scale = min(260 / up.width, 180 / up.height)
    new_w, new_h = int(up.width * scale), int(up.height * scale)
    placed = up.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    cx = (300 - new_w) // 2
    cy = (220 - new_h) // 2
    canvas.paste(placed, (cx, cy), placed)
    
    # Save thumbnail
    thumb_path = os.path.join(out_dir, f'thumb-{idx}-{p_name}.png')
    canvas.save(thumb_path, 'PNG', optimize=True)
    print(f'Saved thumbnail {idx}: {thumb_path}')

# For featured images:
# Featured 1 is the exact center palm connector from reference
f1_rgba = clean_and_alpha(feat_1_crop)
f1_up = f1_rgba.resize((int(f1_rgba.width * 2.8), int(f1_rgba.height * 2.8)), Image.Resampling.LANCZOS)
enhancer = ImageEnhance.Sharpness(f1_up)
f1_up = enhancer.enhance(1.2)

feat1_canvas = Image.new('RGBA', (800, 600), (255, 255, 255, 0))
f1_scale = min(680 / f1_up.width, 500 / f1_up.height)
f1_w, f1_h = int(f1_up.width * f1_scale), int(f1_up.height * f1_scale)
f1_placed = f1_up.resize((f1_w, f1_h), Image.Resampling.LANCZOS)
feat1_canvas.paste(f1_placed, ((800 - f1_w)//2, (600 - f1_h)//2), f1_placed)
feat1_canvas.save(os.path.join(out_dir, 'featured-1-connectors.png'), 'PNG', optimize=True)
feat1_canvas.save(os.path.join(out_dir, 'featured-connectors.png'), 'PNG', optimize=True)
print('Saved featured-1-connectors.png')

# For featured 2, 3, 4, 5:
# We upscale each reference product with super-resolution so all 5 match the reference 100% in geometry, style and lighting!
for idx in [2, 3, 4, 5]:
    p_name = names[idx]
    box = thumb_boxes[idx]
    crop = ref.crop(box)
    rgba = clean_and_alpha(crop)
    
    # Upscale 5x for featured view
    uw, uh = int(rgba.width * 5), int(rgba.height * 5)
    up = rgba.resize((uw, uh), Image.Resampling.LANCZOS)
    enhancer = ImageEnhance.Sharpness(up)
    up = enhancer.enhance(1.3)
    
    feat_canvas = Image.new('RGBA', (800, 600), (255, 255, 255, 0))
    scale = min(640 / up.width, 480 / up.height)
    new_w, new_h = int(up.width * scale), int(up.height * scale)
    placed = up.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    cx = (800 - new_w) // 2
    cy = (600 - new_h) // 2
    feat_canvas.paste(placed, (cx, cy), placed)
    
    feat_path = os.path.join(out_dir, f'featured-{idx}-{p_name}.png')
    feat_canvas.save(feat_path, 'PNG', optimize=True)
    print(f'Saved featured {idx}: {feat_path}')

print("All reference assets extracted and saved successfully!")

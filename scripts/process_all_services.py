import os
import numpy as np
from PIL import Image, ImageOps, ImageFilter, ImageEnhance

brain_dir = r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\6f6254b7-f1e9-435f-b31f-615141bd23fb'
dest_dir = r'c:\Users\HeY MG\Desktop\Varad Engineering\public\images\services'
os.makedirs(dest_dir, exist_ok=True)

raw_images = {
    1: os.path.join(brain_dir, 'service_prod_1_connectors_1791282519984.jpg'),
    2: os.path.join(brain_dir, 'service_prod_2_clamps_1791282546809.jpg'),
    3: os.path.join(brain_dir, 'service_prod_3_terminals_1791282674569.jpg'),
    4: os.path.join(brain_dir, 'service_prod_4_suspension_1791282702039.jpg'),
    5: os.path.join(brain_dir, 'service_prod_5_custom_plate.jpg'),
}

names = {
    1: 'connectors',
    2: 'clamps',
    3: 'terminals',
    4: 'suspension',
    5: 'custom'
}

def isolate_and_center_product(img_path, target_size=(800, 600), pad_ratio=0.18):
    im = Image.open(img_path).convert('RGB')
    arr = np.array(im).astype(float)
    
    # Calculate mask where pixel is NOT pure white background
    # (i.e. product or shadow)
    r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
    min_c = np.minimum(np.minimum(r, g), b)
    max_c = np.maximum(np.maximum(r, g), b)
    diff = max_c - min_c
    
    # Background is where pixel is very bright and neutral
    bg_mask = (min_c > 238) & (diff < 12)
    fg_mask = ~bg_mask
    
    # Smoothly brighten any near-white background pixels to solid (255, 255, 255)
    clean_arr = arr.copy()
    light_factor = np.clip((min_c - 220) / (255 - 220), 0, 1)
    for c in range(3):
        clean_arr[:,:,c] = clean_arr[:,:,c] * (1 - light_factor) + 255.0 * light_factor
    
    clean_im = Image.fromarray(np.clip(clean_arr, 0, 255).astype(np.uint8))
    
    # Find bounding box of foreground (product + shadow)
    y_indices, x_indices = np.where(fg_mask)
    if len(y_indices) > 0 and len(x_indices) > 0:
        min_y, max_y = np.min(y_indices), np.max(y_indices)
        min_x, max_x = np.min(x_indices), np.max(x_indices)
        
        # Add slight margin to bbox
        margin_y = int((max_y - min_y) * 0.04)
        margin_x = int((max_x - min_x) * 0.04)
        min_y = max(0, min_y - margin_y)
        max_y = min(im.height, max_y + margin_y)
        min_x = max(0, min_x - margin_x)
        max_x = min(im.width, max_x + margin_x)
        
        cropped = clean_im.crop((min_x, min_y, max_x, max_y))
    else:
        cropped = clean_im
        
    # Now fit cropped product into target canvas with padding
    tw, th = target_size
    max_w = int(tw * (1 - pad_ratio * 2))
    max_h = int(th * (1 - pad_ratio * 2))
    
    scale = min(max_w / cropped.width, max_h / cropped.height)
    new_w = int(cropped.width * scale)
    new_h = int(cropped.height * scale)
    
    resized_prod = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Center on canvas
    canvas = Image.new('RGB', target_size, (255, 255, 255))
    offset_x = (tw - new_w) // 2
    offset_y = (th - new_h) // 2
    canvas.paste(resized_prod, (offset_x, offset_y))
    
    # Create RGBA transparent version as well
    # Alpha = 0 where background is pure (255, 255, 255)
    c_arr = np.array(canvas).astype(float)
    cr, cg, cb = c_arr[:,:,0], c_arr[:,:,1], c_arr[:,:,2]
    c_min = np.minimum(np.minimum(cr, cg), cb)
    c_diff = np.maximum(np.maximum(cr, cg), cb) - c_min
    
    alpha = np.ones((th, tw), dtype=np.uint8) * 255
    # Smooth alpha cutoff for pure white corners
    pure_bg = (c_min >= 254) & (c_diff < 3)
    alpha[pure_bg] = 0
    
    rgba_canvas = Image.fromarray(np.dstack([c_arr.astype(np.uint8), alpha]))
    
    return canvas, rgba_canvas

print("Processing all 5 products...")
for idx, (p_id, path) in enumerate(raw_images.items()):
    p_name = names[p_id]
    print(f"Processing {p_id}: {p_name} from {path}...")
    
    # 1. Featured image (800x600)
    feat_rgb, feat_rgba = isolate_and_center_product(path, target_size=(800, 600), pad_ratio=0.12)
    feat_dest_png = os.path.join(dest_dir, f'featured-{p_id}-{p_name}.png')
    feat_dest_jpg = os.path.join(dest_dir, f'featured-{p_id}-{p_name}.jpg')
    feat_rgba.save(feat_dest_png, 'PNG', optimize=True)
    feat_rgb.save(feat_dest_jpg, 'JPEG', quality=95)
    
    # Also save featured-connectors.png legacy fallback
    if p_id == 1:
        feat_rgba.save(os.path.join(dest_dir, 'featured-connectors.png'), 'PNG', optimize=True)
    
    # 2. Thumbnail image (280x210)
    thumb_rgb, thumb_rgba = isolate_and_center_product(path, target_size=(280, 210), pad_ratio=0.10)
    thumb_dest_png = os.path.join(dest_dir, f'thumb-{p_id}-{p_name}.png')
    thumb_dest_jpg = os.path.join(dest_dir, f'thumb-{p_id}-{p_name}.jpg')
    thumb_rgba.save(thumb_dest_png, 'PNG', optimize=True)
    thumb_rgb.save(thumb_dest_jpg, 'JPEG', quality=95)
    
    print(f"-> Saved featured & thumb for {p_name}")

print("All products processed successfully!")

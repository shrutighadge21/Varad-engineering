import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

ref_path = r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\6f6254b7-f1e9-435f-b31f-615141bd23fb\.user_uploaded\media_1791285095856.png'
ref = Image.open(ref_path).convert('RGB')
w, h = ref.size
print('Reference image size:', w, h)

out_dir = r'c:\Users\HeY MG\Desktop\Varad Engineering\public\images\expertise'
os.makedirs(out_dir, exist_ok=True)

# 1. Extract transmission tower watermark on left
# Left region is x: 0 to 220, y: 0 to 512
tower_crop = ref.crop((0, 0, 260, 512))
t_arr = np.array(tower_crop).astype(float)
t_r, t_g, t_b = t_arr[:,:,0], t_arr[:,:,1], t_arr[:,:,2]
t_min = np.minimum(np.minimum(t_r, t_g), t_b)

# Fade right side to transparent
alpha_t = np.clip((255 - t_min) * 1.6, 0, 255).astype(np.uint8)
# Horizontal gradient fade on right 30%
for x in range(tower_crop.width):
    if x > tower_crop.width * 0.6:
        fade = (tower_crop.width - x) / (tower_crop.width * 0.4)
        alpha_t[:, x] = (alpha_t[:, x] * max(0, min(1, fade))).astype(np.uint8)

tower_rgba = Image.fromarray(np.dstack([t_arr.astype(np.uint8), alpha_t]))
tower_rgba = tower_rgba.resize((int(tower_rgba.width * 1.5), int(tower_rgba.height * 1.5)), Image.Resampling.LANCZOS)
tower_rgba.save(os.path.join(out_dir, 'tower-watermark.png'), 'PNG')
print('Saved tower-watermark.png')

# 2. Extract and enhance the 6 circular product images from the reference image
# Precise circular crops:
nodes_info = [
    {
        'id': 'connectors',
        'file': 'node-1-connectors.png',
        'box': (536, 68, 644, 176),
        'title': 'Electrical Connectors'
    },
    {
        'id': 'suspension',
        'file': 'node-4-suspension.png',
        'box': (733, 72, 842, 181),
        'title': 'Suspension & Tension Hardware'
    },
    {
        'id': 'clamps',
        'file': 'node-2-clamps.png',
        'box': (493, 198, 602, 307),
        'title': 'Clamps & Support Systems'
    },
    {
        'id': 'earthing',
        'file': 'node-5-earthing.png',
        'box': (778, 203, 887, 312),
        'title': 'Earthing Components'
    },
    {
        'id': 'terminals',
        'file': 'node-3-terminals.png',
        'box': (538, 318, 647, 427),
        'title': 'Terminal Connections & Equipment Hardware'
    },
    {
        'id': 'custom',
        'file': 'node-6-custom.png',
        'box': (733, 323, 842, 432),
        'title': 'Custom Engineering Solutions'
    }
]

for node in nodes_info:
    crop = ref.crop(node['box'])
    # Upscale 3.5x with Lanczos for super high-resolution circular display
    uw, uh = int(crop.width * 3.5), int(crop.height * 3.5)
    up = crop.resize((uw, uh), Image.Resampling.LANCZOS)
    
    # Enhance sharpness
    enhancer = ImageEnhance.Sharpness(up)
    up = enhancer.enhance(1.25)
    
    # Create circular mask with soft anti-aliased border
    mask = Image.new('L', (uw, uh), 0)
    from PIL import ImageDraw
    d = ImageDraw.Draw(mask)
    d.ellipse((6, 6, uw-6, uh-6), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1.5))
    
    # Clean background inside circle to pure white
    arr = np.array(up).astype(float)
    min_c = np.minimum(np.minimum(arr[:,:,0], arr[:,:,1]), arr[:,:,2])
    diff = np.maximum(np.maximum(arr[:,:,0], arr[:,:,1]), arr[:,:,2]) - min_c
    
    light_factor = np.clip((min_c - 225) / (255 - 225), 0, 1)
    for c in range(3):
        arr[:,:,c] = arr[:,:,c] * (1 - light_factor) + 255.0 * light_factor
        
    cleaned = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    
    rgba = Image.new('RGBA', (uw, uh), (255, 255, 255, 0))
    rgba.paste(cleaned, (0, 0), mask)
    
    dest_path = os.path.join(out_dir, node['file'])
    rgba.save(dest_path, 'PNG', optimize=True)
    print(f'Saved {node["file"]} ({uw}x{uh}) for {node["title"]}')

print('All expertise assets prepared successfully!')

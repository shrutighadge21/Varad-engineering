import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

ref_path = r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\6f6254b7-f1e9-435f-b31f-615141bd23fb\.user_uploaded\media_1791288430168.png'
ref = Image.open(ref_path).convert('RGB')
w, h = ref.size
print('Loaded expertise reference image:', w, h)

exp_dir = r'c:\Users\HeY MG\Desktop\Varad Engineering\public\images\expertise'
os.makedirs(exp_dir, exist_ok=True)

# 1. Clean background transmission tower watermark on left
# x: 0 to 240, y: 0 to 512
tower_crop = ref.crop((0, 0, 240, 512))
t_arr = np.array(tower_crop).astype(float)
t_r, t_g, t_b = t_arr[:,:,0], t_arr[:,:,1], t_arr[:,:,2]
t_min = np.minimum(np.minimum(t_r, t_g), t_b)

alpha_t = np.clip((255 - t_min) * 1.5, 0, 255).astype(np.uint8)
for x in range(tower_crop.width):
    if x > tower_crop.width * 0.5:
        fade = (tower_crop.width - x) / (tower_crop.width * 0.5)
        alpha_t[:, x] = (alpha_t[:, x] * max(0, min(1, fade))).astype(np.uint8)

tower_rgba = Image.fromarray(np.dstack([t_arr.astype(np.uint8), alpha_t]))
tower_rgba = tower_rgba.resize((int(tower_rgba.width * 1.5), int(tower_rgba.height * 1.5)), Image.Resampling.LANCZOS)
tower_rgba.save(os.path.join(exp_dir, 'tower-pylon-bg.png'), 'PNG', optimize=True)
print('Saved tower-pylon-bg.png')

# 2. Extract the 6 circular product nodes from the reference image:
# Node 1: Top-Left (Electrical Connectors): x: 525 to 640, y: 110 to 225
# Node 2: Top-Right (Suspension & Tension): x: 715 to 830, y: 110 to 225
# Node 3: Mid-Left (Clamps & Support Systems): x: 470 to 585, y: 220 to 335
# Node 4: Mid-Right (Earthing Components): x: 770 to 885, y: 220 to 335
# Node 5: Bottom-Left (Terminal Connections): x: 520 to 635, y: 330 to 445
# Node 6: Bottom-Right (Custom Engineering): x: 720 to 835, y: 330 to 445

nodes = [
    {
        'key': 'connectors',
        'file': 'exp-01-connectors.png',
        'box': (525, 115, 638, 228),
        'title': 'Electrical Connectors'
    },
    {
        'key': 'suspension',
        'file': 'exp-02-suspension.png',
        'box': (715, 115, 828, 228),
        'title': 'Suspension & Tension Hardware'
    },
    {
        'key': 'clamps',
        'file': 'exp-03-clamps.png',
        'box': (470, 222, 583, 335),
        'title': 'Clamps & Support Systems'
    },
    {
        'key': 'earthing',
        'file': 'exp-04-earthing.png',
        'box': (772, 222, 885, 335),
        'title': 'Earthing Components'
    },
    {
        'key': 'terminals',
        'file': 'exp-05-terminals.png',
        'box': (522, 332, 635, 445),
        'title': 'Terminal Connections & Equipment Hardware'
    },
    {
        'key': 'custom',
        'file': 'exp-06-custom.png',
        'box': (722, 332, 835, 445),
        'title': 'Custom Engineering Solutions'
    }
]

for node in nodes:
    crop = ref.crop(node['box'])
    
    # Upscale 3x with Lanczos for super-crisp resolution
    uw, uh = int(crop.width * 3), int(crop.height * 3)
    up = crop.resize((uw, uh), Image.Resampling.LANCZOS)
    enhancer = ImageEnhance.Sharpness(up)
    up = enhancer.enhance(1.25)
    
    # Create circular mask
    from PIL import ImageDraw
    mask = Image.new('L', (uw, uh), 0)
    d = ImageDraw.Draw(mask)
    d.ellipse((4, 4, uw-4, uh-4), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1.2))
    
    arr = np.array(up).astype(float)
    min_c = np.minimum(np.minimum(arr[:,:,0], arr[:,:,1]), arr[:,:,2])
    diff = np.maximum(np.maximum(arr[:,:,0], arr[:,:,1]), arr[:,:,2]) - min_c
    
    light_factor = np.clip((min_c - 225) / (255 - 225), 0, 1)
    for c in range(3):
        arr[:,:,c] = arr[:,:,c] * (1 - light_factor) + 255.0 * light_factor
        
    cleaned = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    rgba = Image.new('RGBA', (uw, uh), (255, 255, 255, 0))
    rgba.paste(cleaned, (0, 0), mask)
    
    dest_path = os.path.join(exp_dir, node['file'])
    rgba.save(dest_path, 'PNG', optimize=True)
    print(f"Saved: {node['file']} ({uw}x{uh}) for {node['title']}")

print('All expertise assets extracted and prepared cleanly!')

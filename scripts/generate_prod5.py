import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import math

def create_stepped_z_plate(width=1200, height=900):
    # Create canvas
    img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    
    # We will draw a stepped Z-bracket connecting plate in 3D isometric perspective:
    # 1. Lower horizontal plate (with 4 bolt holes)
    # 2. Slanted vertical riser transition plate
    # 3. Upper horizontal plate (with 6 bolt holes)
    # 4. Machined aluminium texture, metallic specular gradient, bevelled edges, and soft shadow
    
    # Shadow layer
    shadow_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)
    
    # Projected contact shadow on the floor
    # Coordinates for the shadow on the ground
    shadow_poly = [
        (250, 720),
        (560, 760),
        (1020, 680),
        (1060, 630),
        (880, 560),
        (620, 550),
        (320, 640)
    ]
    shadow_draw.polygon(shadow_poly, fill=(50, 50, 60, 70))
    # Soften shadow with multi-pass Gaussian blur
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(radius=28))
    
    # Main model layer (supersampled at 2x for ultra sharpness)
    sw, sh = width * 2, height * 2
    model_img = Image.new('RGBA', (sw, sh), (255, 255, 255, 0))
    m_draw = ImageDraw.Draw(model_img)
    
    # Define 3D vertices for the stepped Z-plate
    # Thickness t = 40 (supersampled)
    # Let's define key facets:
    # Part A: Lower tab (flat)
    # Part B: Slanted riser
    # Part C: Upper tab (flat)
    # Part D: Side thickness edges
    
    # Let's define coordinates at 2x scale:
    # Lower plate top face:
    lp_p1 = (520, 1420) # front left
    lp_p2 = (880, 1260) # front right
    lp_p3 = (980, 1140) # bend right
    lp_p4 = (640, 1280) # bend left
    
    # Slanted riser top face:
    sr_p1 = lp_p4
    sr_p2 = lp_p3
    sr_p3 = (1380, 780) # top bend right
    sr_p4 = (1080, 890) # top bend left
    
    # Upper plate top face:
    up_p1 = sr_p4
    up_p2 = sr_p3
    up_p3 = (1820, 620) # top far right
    up_p4 = (1560, 720) # top far left
    
    # Thickness offset down: dx=0, dy=70
    dy = 75
    
    # Draw lower front edge (thickness)
    lp_f1 = (lp_p1[0], lp_p1[1] + dy)
    lp_f2 = (lp_p2[0], lp_p2[1] + dy)
    m_draw.polygon([lp_p1, lp_p2, lp_f2, lp_f1], fill=(160, 165, 172, 255))
    
    # Draw lower right side edge
    lp_r1 = (lp_p3[0], lp_p3[1] + dy)
    m_draw.polygon([lp_p2, lp_p3, lp_r1, lp_f2], fill=(135, 140, 148, 255))
    
    # Draw riser right side edge
    sr_r1 = (sr_p3[0], sr_p3[1] + dy)
    m_draw.polygon([lp_p3, sr_p3, sr_r1, lp_r1], fill=(120, 125, 132, 255))
    
    # Draw upper right side edge
    up_r1 = (up_p3[0], up_p3[1] + dy)
    m_draw.polygon([sr_p3, up_p3, up_r1, sr_r1], fill=(145, 150, 158, 255))
    
    # Draw upper far right edge
    up_b1 = (up_p4[0], up_p4[1] + dy)
    m_draw.polygon([up_p3, up_p4, up_b1, up_r1], fill=(110, 115, 122, 255))
    
    # Draw main top surfaces with metallic shading:
    # 1. Lower plate top
    m_draw.polygon([lp_p1, lp_p2, lp_p3, lp_p4], fill=(215, 218, 222, 255))
    
    # 2. Slanted riser top (catches highlight from top-left studio light)
    m_draw.polygon([sr_p1, sr_p2, sr_p3, sr_p4], fill=(235, 238, 242, 255))
    
    # 3. Upper plate top
    m_draw.polygon([up_p1, up_p2, up_p3, up_p4], fill=(210, 214, 218, 255))
    
    # Add bevel highlights (bright lines on chamfered edges)
    m_draw.line([lp_p1, lp_p2], fill=(250, 252, 255, 255), width=4)
    m_draw.line([lp_p1, lp_p4], fill=(245, 248, 252, 255), width=3)
    m_draw.line([sr_p1, sr_p4], fill=(255, 255, 255, 255), width=5)
    m_draw.line([sr_p4, up_p4], fill=(240, 243, 247, 255), width=3)
    m_draw.line([sr_p2, sr_p3], fill=(255, 255, 255, 255), width=4)
    m_draw.line([lp_p4, lp_p3], fill=(200, 203, 208, 255), width=3)
    
    # Draw counterbored bolt holes in lower plate (2 holes)
    # Elliptical holes projected in isometric perspective
    def draw_hole(center, r_x, r_y, angle_deg=-25, depth=45):
        cx, cy = center
        # Draw hole cavity (dark cylinder inside)
        cavity_poly = []
        for a in range(0, 360, 15):
            rad = math.radians(a)
            # isometric tilt
            x = cx + r_x * math.cos(rad) * math.cos(math.radians(angle_deg)) - r_y * math.sin(rad) * math.sin(math.radians(angle_deg))
            y = cy + r_x * math.cos(rad) * math.sin(math.radians(angle_deg)) + r_y * math.sin(rad) * math.cos(math.radians(angle_deg))
            cavity_poly.append((x, y))
        
        # Inner depth shadow
        m_draw.polygon([(p[0], p[1] + depth*0.6) for p in cavity_poly], fill=(80, 85, 92, 255))
        # Inner wall gradient
        m_draw.polygon(cavity_poly, fill=(50, 52, 58, 255))
        # Outer rim highlight
        for i in range(len(cavity_poly)-1):
            m_draw.line([cavity_poly[i], cavity_poly[i+1]], fill=(170, 175, 182, 255), width=2)
            
    # Holes on lower plate
    draw_hole((680, 1360), 38, 22, -22, 50)
    draw_hole((840, 1280), 38, 22, -22, 50)
    
    # Holes on upper plate (grid of 6 holes: 2 rows of 3)
    # Row 1 (front)
    draw_hole((1220, 890), 36, 20, -22, 45)
    draw_hole((1380, 810), 36, 20, -22, 45)
    draw_hole((1540, 730), 36, 20, -22, 45)
    # Row 2 (back)
    draw_hole((1340, 810), 34, 19, -22, 45)
    draw_hole((1500, 730), 34, 19, -22, 45)
    draw_hole((1660, 650), 34, 19, -22, 45)
    
    # Side mounting holes on vertical face
    def draw_side_hole(center, r_x, r_y):
        cx, cy = center
        poly = []
        for a in range(0, 360, 15):
            rad = math.radians(a)
            x = cx + r_x * math.cos(rad)
            y = cy + r_y * math.sin(rad) + 0.3 * r_x * math.cos(rad)
            poly.append((x, y))
        m_draw.polygon(poly, fill=(70, 74, 80, 255))
        m_draw.line(poly + [poly[0]], fill=(160, 165, 170, 255), width=2)
        
    draw_side_hole((1180, 830 + dy*0.4), 22, 14)
    draw_side_hole((1320, 760 + dy*0.4), 22, 14)

    # Downscale supersampled model to target resolution with Lanczos
    model_res = model_img.resize((width, height), Image.Resampling.LANCZOS)
    
    # Add subtle brushed metal grain texture
    np_model = np.array(model_res).astype(float)
    noise = np.random.normal(0, 4.0, (height, width, 1))
    np_model[:, :, :3] = np.clip(np_model[:, :, :3] + noise, 0, 255)
    model_textured = Image.fromarray(np_model.astype(np.uint8))
    
    # Composite final image on pure white background
    final_canvas = Image.new('RGB', (width, height), (255, 255, 255))
    final_canvas.paste(shadow_img, (0, 0), shadow_img)
    final_canvas.paste(model_textured, (0, 0), model_textured)
    
    return final_canvas

if __name__ == '__main__':
    res = create_stepped_z_plate(1200, 900)
    res.save(r'C:\Users\HeY MG\.gemini\antigravity-ide\brain\6f6254b7-f1e9-435f-b31f-615141bd23fb\service_prod_5_custom_plate.jpg', quality=95)
    print('Generated service_prod_5_custom_plate.jpg successfully!')

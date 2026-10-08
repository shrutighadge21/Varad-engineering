import React from 'react';

interface ProductVisualProps {
  type: 'palm-connector' | 'clamps-bpi' | 'terminal-4ips' | 'suspension-hardware' | 'transformer-clamp' | 'custom-plates' | 'earthing-bond' | 'pg-clamp';
  className?: string;
  isFloating?: boolean;
  interactive?: boolean;
  lighting?: 'studio' | 'dusk' | 'minimal';
}

export default function ProductVisual({
  type,
  className = '',
  isFloating = false,
  interactive = false
}: ProductVisualProps) {
  // Base SVG rendering for precision 3D CAD industrial models
  return (
    <div
      className={`relative flex items-center justify-center select-none ${
        isFloating ? 'animate-anti-gravity' : ''
      } ${interactive ? 'transition-transform duration-500 hover:scale-105 hover:-translate-y-2' : ''} ${className}`}
    >
      {/* 1. PALM CONNECTOR (Hero Object & Electrical Connectors) */}
      {(type === 'palm-connector') && (
        <svg viewBox="0 0 500 400" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" fill="none">
          <defs>
            <linearGradient id="aluMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="35%" stopColor="#CBD5E1" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="aluPlateTop" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="aluBevel" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="aluHole" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="60%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="aluCylinder" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#F1F5F9" />
              <stop offset="30%" stopColor="#CBD5E1" />
              <stop offset="65%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <pattern id="knurlPattern" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M0 6 L6 0 M0 0 L6 6" stroke="#475569" strokeWidth="0.8" opacity="0.35" />
            </pattern>
            <radialGradient id="shadowGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Dynamic Soft Shadow Beneath */}
          <ellipse cx="250" cy="360" rx="170" ry="24" fill="url(#shadowGlow)" />

          {/* 3D CAD PALM CONNECTOR ISOMETRIC */}
          <g transform="translate(40, 20) rotate(-8 250 200)">
            {/* Cylinder / Conductor Sleeve Barrel (Upper Right) */}
            <g>
              {/* Sleeve Shadow / Transition Base */}
              <ellipse cx="325" cy="115" rx="36" ry="18" fill="#334155" />
              {/* Sleeve Body */}
              <path
                d="M290,110 L370,55 C378,50 395,54 402,62 L402,65 C408,74 404,88 392,97 L315,152 Z"
                fill="url(#aluCylinder)"
              />
              {/* Knurled Texture Area */}
              <path
                d="M320,90 L378,50 C384,46 398,49 403,56 L403,58 C408,66 405,78 395,85 L338,126 Z"
                fill="url(#knurlPattern)"
              />
              {/* Sleeve Rim Opening (Top Right) */}
              <ellipse cx="388" cy="72" rx="18" ry="12" fill="#1E293B" stroke="#CBD5E1" strokeWidth="2" />
              <ellipse cx="388" cy="72" rx="14" ry="9" fill="#0F172A" />

              {/* Conductor Inspection Weep Hole */}
              <ellipse cx="280" cy="122" rx="4.5" ry="3" fill="#0F172A" stroke="#CBD5E1" strokeWidth="1" />

              {/* Chamfered Neck Transition from Cylinder to Palm */}
              <path
                d="M260,132 C260,110 290,105 315,125 C318,138 310,155 285,165 C268,160 260,148 260,132 Z"
                fill="url(#aluMain)"
              />
            </g>

            {/* Flat Palm Plate 3D (Lower Left) */}
            <g>
              {/* Palm Plate Bottom Thickness / Side Extrusion */}
              <path
                d="M100,240 L210,165 L275,150 L275,172 L210,188 L100,265 Z"
                fill="#475569"
              />
              <path
                d="M100,265 L175,320 L275,245 L275,172 L210,188 L100,265 Z"
                fill="#334155"
              />

              {/* Palm Plate Front Chamfer Bevel */}
              <polygon points="98,240 174,295 174,320 98,265" fill="#64748B" />
              <polygon points="174,295 275,220 275,245 174,320" fill="#475569" />

              {/* Palm Plate Top Machined Face */}
              <polygon
                points="100,240 210,165 275,150 275,220 175,295 100,240"
                fill="url(#aluPlateTop)"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeOpacity="0.7"
              />

              {/* 4 NEMA Terminal Mounting Holes (Precision CNC Milled) */}
              {/* Hole 1 (Top Left) */}
              <g transform="translate(155, 195)">
                <ellipse cx="0" cy="0" rx="10" ry="6" fill="url(#aluHole)" stroke="#CBD5E1" strokeWidth="1" />
                <ellipse cx="0" cy="1" rx="8" ry="4.5" fill="#090D16" />
                <path d="M-8,1 C-4,4 4,4 8,1" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" fill="none" />
              </g>

              {/* Hole 2 (Top Right) */}
              <g transform="translate(210, 180)">
                <ellipse cx="0" cy="0" rx="10" ry="6" fill="url(#aluHole)" stroke="#CBD5E1" strokeWidth="1" />
                <ellipse cx="0" cy="1" rx="8" ry="4.5" fill="#090D16" />
                <path d="M-8,1 C-4,4 4,4 8,1" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" fill="none" />
              </g>

              {/* Hole 3 (Bottom Left) */}
              <g transform="translate(140, 240)">
                <ellipse cx="0" cy="0" rx="10" ry="6" fill="url(#aluHole)" stroke="#CBD5E1" strokeWidth="1" />
                <ellipse cx="0" cy="1" rx="8" ry="4.5" fill="#090D16" />
                <path d="M-8,1 C-4,4 4,4 8,1" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" fill="none" />
              </g>

              {/* Hole 4 (Bottom Right) */}
              <g transform="translate(195, 225)">
                <ellipse cx="0" cy="0" rx="10" ry="6" fill="url(#aluHole)" stroke="#CBD5E1" strokeWidth="1" />
                <ellipse cx="0" cy="1" rx="8" ry="4.5" fill="#090D16" />
                <path d="M-8,1 C-4,4 4,4 8,1" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" fill="none" />
              </g>

              {/* Surface Machining Specular Highlights */}
              <line x1="105" y1="241" x2="205" y2="168" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
              <line x1="175" y1="295" x2="272" y2="222" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
            </g>
          </g>
        </svg>
      )}

      {/* 2. BPI SUPPORT CLAMPS & POST SYSTEMS */}
      {(type === 'clamps-bpi') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="clampBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="60%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="boltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="280" rx="120" ry="16" fill="#000000" opacity="0.4" />
          {/* Base Plate with mounting arc slots */}
          <ellipse cx="200" cy="220" rx="80" ry="32" fill="url(#clampBaseGrad)" stroke="#CBD5E1" strokeWidth="2" />
          <ellipse cx="160" cy="220" rx="14" ry="6" fill="#1E293B" />
          <ellipse cx="240" cy="220" rx="14" ry="6" fill="#1E293B" />
          {/* Left Upright & Clamp Cap */}
          <g transform="translate(100, 90)">
            <path d="M30,130 L30,40 C30,15 70,15 70,40 L70,130" fill="url(#clampBaseGrad)" stroke="#64748B" strokeWidth="2" />
            <circle cx="50" cy="50" r="22" fill="#1E293B" />
            <circle cx="50" cy="50" r="18" fill="#F1F5F9" opacity="0.2" />
            {/* Top Cap */}
            <path d="M20,35 C20,10 80,10 80,35 L75,45 L25,45 Z" fill="#94A3B8" stroke="#F8FAFC" strokeWidth="1.5" />
            {/* Clamping Bolts */}
            <rect x="22" y="25" width="8" height="24" rx="2" fill="url(#boltGrad)" />
            <rect x="70" y="25" width="8" height="24" rx="2" fill="url(#boltGrad)" />
          </g>
          {/* Right Upright & Clamp Cap */}
          <g transform="translate(200, 90)">
            <path d="M30,130 L30,40 C30,15 70,15 70,40 L70,130" fill="url(#clampBaseGrad)" stroke="#64748B" strokeWidth="2" />
            <circle cx="50" cy="50" r="22" fill="#1E293B" />
            <circle cx="50" cy="50" r="18" fill="#F1F5F9" opacity="0.2" />
            {/* Top Cap */}
            <path d="M20,35 C20,10 80,10 80,35 L75,45 L25,45 Z" fill="#94A3B8" stroke="#F8FAFC" strokeWidth="1.5" />
            {/* Clamping Bolts */}
            <rect x="22" y="25" width="8" height="24" rx="2" fill="url(#boltGrad)" />
            <rect x="70" y="25" width="8" height="24" rx="2" fill="url(#boltGrad)" />
          </g>
        </svg>
      )}

      {/* 3. TERMINAL & EQUIPMENT CONNECTIONS (4" IPS Tube) */}
      {(type === 'terminal-4ips') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="termAlu" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="termCopper" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="270" rx="110" ry="14" fill="#000000" opacity="0.4" />
          {/* Main 4" IPS Tube Collar */}
          <g transform="translate(140, 100)">
            <ellipse cx="60" cy="40" rx="38" ry="24" fill="#1E293B" stroke="#94A3B8" strokeWidth="3" />
            <path d="M22,40 L22,90 C22,106 98,106 98,90 L98,40" fill="url(#termAlu)" stroke="#64748B" strokeWidth="2" />
            <ellipse cx="60" cy="40" rx="28" ry="16" fill="#0F172A" />
            {/* Clamping Flanges & Studs */}
            <rect x="8" y="55" width="16" height="12" rx="2" fill="#94A3B8" />
            <rect x="96" y="55" width="16" height="12" rx="2" fill="#94A3B8" />
          </g>
          {/* Left Lateral Conductor Arm */}
          <g transform="translate(30, 120)">
            <rect x="20" y="20" width="90" height="16" rx="8" fill="url(#termCopper)" />
            <circle cx="20" cy="28" r="18" fill="url(#termAlu)" stroke="#CBD5E1" strokeWidth="2" />
            <ellipse cx="20" cy="28" rx="8" ry="6" fill="#0F172A" />
          </g>
          {/* Right Lateral Conductor Arm */}
          <g transform="translate(260, 120)">
            <rect x="0" y="20" width="90" height="16" rx="8" fill="url(#termCopper)" />
            <circle cx="90" cy="28" r="18" fill="url(#termAlu)" stroke="#CBD5E1" strokeWidth="2" />
            <ellipse cx="90" cy="28" rx="8" ry="6" fill="#0F172A" />
          </g>
        </svg>
      )}

      {/* 4. SUSPENSION & TENSION HARDWARE */}
      {(type === 'suspension-hardware') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="steelHook" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="290" rx="90" ry="12" fill="#000000" opacity="0.35" />
          {/* Forged Steel Hook at Top */}
          <path
            d="M200,25 C185,25 175,38 175,52 C175,68 190,75 200,85 C208,75 212,65 210,50 C208,35 195,30 188,40"
            stroke="url(#steelHook)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="200" cy="95" r="8" fill="#475569" stroke="#CBD5E1" strokeWidth="2" />
          {/* Triangular Heavy Steel Yoke Plate */}
          <polygon points="200,105 130,190 270,190" fill="url(#steelHook)" stroke="#64748B" strokeWidth="2" />
          <circle cx="200" cy="125" r="5" fill="#1E293B" />
          <circle cx="150" cy="175" r="6" fill="#1E293B" />
          <circle cx="250" cy="175" r="6" fill="#1E293B" />
          {/* Dual Conductor Suspension Saddles */}
          {/* Left Saddle */}
          <g transform="translate(100, 190)">
            <path d="M30,0 L30,45 C15,55 0,75 0,85 L60,85 C60,75 45,55 30,45 Z" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M-10,80 Q30,65 70,80" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
          </g>
          {/* Right Saddle */}
          <g transform="translate(240, 190)">
            <path d="M30,0 L30,45 C15,55 0,75 0,85 L60,85 C60,75 45,55 30,45 Z" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="2" />
            <path d="M-10,80 Q30,65 70,80" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
          </g>
        </svg>
      )}

      {/* 5. TRANSFORMER BUSHING CLAMP (Golden Copper/Brass) */}
      {(type === 'transformer-clamp') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="35%" stopColor="#F59E0B" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="brassTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="270" rx="100" ry="14" fill="#000000" opacity="0.4" />
          {/* Angled Brass Spade Terminal Pad */}
          <g transform="translate(80, 110)">
            <polygon points="40,90 140,40 180,70 80,120" fill="url(#brassTop)" stroke="#FEF3C7" strokeWidth="1.5" />
            <polygon points="40,90 80,120 80,140 40,110" fill="#B45309" />
            <polygon points="80,120 180,70 180,90 80,140" fill="#78350F" />
            {/* 4 Holes */}
            <circle cx="85" cy="85" r="6" fill="#451A03" />
            <circle cx="120" cy="68" r="6" fill="#451A03" />
            <circle cx="105" cy="102" r="6" fill="#451A03" />
            <circle cx="140" cy="85" r="6" fill="#451A03" />
          </g>
          {/* Vertical Bushing Stud Clamp */}
          <g transform="translate(200, 60)">
            <path d="M30,30 C30,10 70,10 70,30 L70,90 L30,90 Z" fill="url(#brassGrad)" stroke="#FDE68A" strokeWidth="1.5" />
            <circle cx="50" cy="35" r="14" fill="#451A03" />
            <rect x="25" y="50" width="8" height="20" rx="2" fill="#FEF3C7" />
            <rect x="67" y="50" width="8" height="20" rx="2" fill="#FEF3C7" />
          </g>
        </svg>
      )}

      {/* 6. CUSTOM U-TYPE CONNECTING PLATE */}
      {(type === 'custom-plates') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="uPlateAlu" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="40%" stopColor="#CBD5E1" />
              <stop offset="80%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="275" rx="100" ry="14" fill="#000000" opacity="0.35" />
          {/* 3D Heavy U-Bent Aluminum Channel Plate */}
          <g transform="translate(70, 70)">
            <path
              d="M50,30 L90,10 L90,150 L200,100 L200,10 L240,30 L240,150 L80,210 L50,180 Z"
              fill="url(#uPlateAlu)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            {/* Terminal Hole Matrix Left */}
            <circle cx="70" cy="60" r="4" fill="#1E293B" />
            <circle cx="70" cy="90" r="4" fill="#1E293B" />
            <circle cx="70" cy="120" r="4" fill="#1E293B" />
            {/* Terminal Hole Matrix Base */}
            <circle cx="120" cy="170" r="4" fill="#1E293B" />
            <circle cx="150" cy="155" r="4" fill="#1E293B" />
            {/* Terminal Hole Matrix Right */}
            <circle cx="220" cy="60" r="4" fill="#1E293B" />
            <circle cx="220" cy="90" r="4" fill="#1E293B" />
            <circle cx="220" cy="120" r="4" fill="#1E293B" />
          </g>
        </svg>
      )}

      {/* 7. FLEXIBLE COPPER EARTH BOND */}
      {(type === 'earthing-bond') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="earthCu" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <pattern id="braid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 8 L8 0 M0 0 L8 8" stroke="#D97706" strokeWidth="1.2" />
            </pattern>
          </defs>
          <ellipse cx="200" cy="260" rx="110" ry="12" fill="#000000" opacity="0.3" />
          {/* Braided Copper Cable */}
          <path
            d="M60,180 Q200,90 320,130"
            stroke="url(#earthCu)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M60,180 Q200,90 320,130"
            stroke="url(#braid)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Lug */}
          <circle cx="50" cy="185" r="16" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="50" cy="185" r="7" fill="#0F172A" />
          {/* Right Lug & Stud */}
          <circle cx="330" cy="132" r="16" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="330" cy="132" r="7" fill="#0F172A" />
          <rect x="325" y="115" width="10" height="24" rx="2" fill="#475569" />
        </svg>
      )}

      {/* 8. PG CLAMP */}
      {(type === 'pg-clamp') && (
        <svg viewBox="0 0 400 320" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
          <defs>
            <linearGradient id="pgAlu" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="60%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="260" rx="100" ry="14" fill="#000000" opacity="0.4" />
          {/* Extruded Parallel Block */}
          <g transform="translate(100, 100)">
            <rect x="0" y="30" width="200" height="60" rx="12" fill="url(#pgAlu)" stroke="#CBD5E1" strokeWidth="2" />
            {/* Dual Conductor Channels */}
            <circle cx="10" cy="60" r="14" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="10" cy="60" r="10" fill="#334155" />
            <circle cx="45" cy="60" r="14" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="45" cy="60" r="10" fill="#334155" />
            {/* 3 High-Tensile Bolts */}
            <rect x="60" y="10" width="14" height="35" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
            <rect x="110" y="10" width="14" height="35" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
            <rect x="160" y="10" width="14" height="35" rx="3" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
          </g>
        </svg>
      )}
    </div>
  );
}

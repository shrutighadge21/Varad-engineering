'use client';

import React from 'react';
import Image from 'next/image';
import VaradLogo from './VaradLogo';

interface ExpertiseSectionProps {
  onExploreCategory?: (categoryId: string) => void;
}

export default function ExpertiseSection({ onExploreCategory }: ExpertiseSectionProps) {
  const categories = [
    {
      id: 'connectors',
      title: 'Electrical Connectors',
      shortTitle: 'Electrical Connectors',
      image: '/images/expertise/node-1-connectors.png',
      alt: 'Varad Engineering Electrical Connectors'
    },
    {
      id: 'suspension-tension',
      title: 'Suspension & Tension Hardware',
      shortTitle: 'Suspension & Tension Hardware',
      image: '/images/expertise/node-4-suspension.png',
      alt: 'Varad Engineering Suspension & Tension Hardware'
    },
    {
      id: 'clamps',
      title: 'Clamps & Support Systems',
      shortTitle: 'Clamps & Support Systems',
      image: '/images/expertise/node-2-clamps.png',
      alt: 'Varad Engineering Clamps & Support Systems'
    },
    {
      id: 'earthing',
      title: 'Earthing Components',
      shortTitle: 'Earthing Components',
      image: '/images/expertise/node-5-earthing.png',
      alt: 'Varad Engineering Earthing Components'
    },
    {
      id: 'terminals',
      title: 'Terminal Connections & Equipment Hardware',
      shortTitle: 'Terminal Connections & Equipment Hardware',
      image: '/images/expertise/node-3-terminals.png',
      alt: 'Varad Engineering Terminal Connections & Equipment Hardware'
    },
    {
      id: 'custom',
      title: 'Custom Engineering Solutions',
      shortTitle: 'Custom Engineering Solutions',
      image: '/images/expertise/node-6-custom.png',
      alt: 'Varad Engineering Custom Engineering Solutions'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    if (onExploreCategory) {
      onExploreCategory(categoryId);
    }
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white text-neutral-900 relative overflow-hidden">
      {/* Pure Vector Transmission Tower Lattice Outline (0 text, 0 bitmaps, 100% clean vector art) */}
      <div className="absolute left-0 top-0 bottom-0 w-44 sm:w-56 lg:w-72 pointer-events-none opacity-[0.04] text-neutral-900 select-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          preserveAspectRatio="xMinYMid meet"
          aria-hidden="true"
        >
          {/* Top Peak */}
          <path d="M150 40 L150 20 M135 40 L165 40" strokeWidth="2" />
          {/* Main Tower Legs */}
          <line x1="140" y1="40" x2="60" y2="760" strokeWidth="2" />
          <line x1="160" y1="40" x2="240" y2="760" strokeWidth="2" />
          <line x1="60" y1="760" x2="40" y2="800" strokeWidth="2.5" />
          <line x1="240" y1="760" x2="260" y2="800" strokeWidth="2.5" />
          {/* Top Crossarm */}
          <line x1="90" y1="120" x2="210" y2="120" strokeWidth="2" />
          <line x1="145" y1="70" x2="90" y2="120" strokeWidth="1.5" />
          <line x1="155" y1="70" x2="210" y2="120" strokeWidth="1.5" />
          <line x1="90" y1="120" x2="90" y2="150" strokeWidth="1.5" />
          <line x1="210" y1="120" x2="210" y2="150" strokeWidth="1.5" />
          {/* Middle Crossarm */}
          <line x1="60" y1="220" x2="240" y2="220" strokeWidth="2.5" />
          <line x1="140" y1="160" x2="60" y2="220" strokeWidth="1.5" />
          <line x1="160" y1="160" x2="240" y2="220" strokeWidth="1.5" />
          <line x1="60" y1="220" x2="60" y2="260" strokeWidth="1.5" />
          <line x1="240" y1="220" x2="240" y2="260" strokeWidth="1.5" />
          {/* Bottom Crossarm */}
          <line x1="75" y1="340" x2="225" y2="340" strokeWidth="2" />
          <line x1="135" y1="270" x2="75" y2="340" strokeWidth="1.5" />
          <line x1="165" y1="270" x2="225" y2="340" strokeWidth="1.5" />
          <line x1="75" y1="340" x2="75" y2="380" strokeWidth="1.5" />
          <line x1="225" y1="340" x2="225" y2="380" strokeWidth="1.5" />
          {/* Internal Lattice Webbing */}
          <line x1="135" y1="70" x2="165" y2="70" strokeWidth="1.5" />
          <line x1="130" y1="120" x2="170" y2="120" strokeWidth="1.5" />
          <line x1="125" y1="170" x2="175" y2="170" strokeWidth="1.5" />
          <line x1="120" y1="220" x2="180" y2="220" strokeWidth="1.5" />
          <line x1="115" y1="280" x2="185" y2="280" strokeWidth="1.5" />
          <line x1="110" y1="340" x2="190" y2="340" strokeWidth="1.5" />
          <line x1="102" y1="410" x2="198" y2="410" strokeWidth="1.5" />
          <line x1="94" y1="490" x2="206" y2="490" strokeWidth="1.5" />
          <line x1="84" y1="580" x2="216" y2="580" strokeWidth="1.5" />
          <line x1="72" y1="680" x2="228" y2="680" strokeWidth="1.5" />
          {/* Diagonal Bracing Pattern */}
          <line x1="135" y1="70" x2="170" y2="120" strokeWidth="1" />
          <line x1="165" y1="70" x2="130" y2="120" strokeWidth="1" />
          <line x1="130" y1="120" x2="175" y2="170" strokeWidth="1" />
          <line x1="170" y1="120" x2="125" y2="170" strokeWidth="1" />
          <line x1="125" y1="170" x2="180" y2="220" strokeWidth="1" />
          <line x1="175" y1="170" x2="120" y2="220" strokeWidth="1" />
          <line x1="120" y1="220" x2="185" y2="280" strokeWidth="1" />
          <line x1="180" y1="220" x2="115" y2="280" strokeWidth="1" />
          <line x1="115" y1="280" x2="190" y2="340" strokeWidth="1" />
          <line x1="185" y1="280" x2="110" y2="340" strokeWidth="1" />
          <line x1="110" y1="340" x2="198" y2="410" strokeWidth="1" />
          <line x1="190" y1="340" x2="102" y2="410" strokeWidth="1" />
          <line x1="102" y1="410" x2="206" y2="490" strokeWidth="1" />
          <line x1="198" y1="410" x2="94" y2="490" strokeWidth="1" />
          <line x1="94" y1="490" x2="216" y2="580" strokeWidth="1" />
          <line x1="206" y1="490" x2="84" y2="580" strokeWidth="1" />
          <line x1="84" y1="580" x2="228" y2="680" strokeWidth="1" />
          <line x1="216" y1="580" x2="72" y2="680" strokeWidth="1" />
          <line x1="72" y1="680" x2="240" y2="760" strokeWidth="1" />
          <line x1="228" y1="680" x2="60" y2="760" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* =========================================================================
              1. LEFT SIDE: INTRODUCTION (Exactly ONE instance, clean and static)
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-5">
            {/* Small Red Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24]">
              <span className="w-6 h-0.5 bg-[#E31E24]" />
              <span>OUR AREAS OF EXPERTISE</span>
            </div>

            {/* Large Bold Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.14] tracking-tight font-sans">
              Complete Solutions <br />
              for Electrical <br />
              <span className="text-[#E31E24]">Infrastructure</span>
            </h2>

            {/* Clean Supporting Paragraph */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
              From conductor connections to support and custom-built products, we deliver reliable solutions for diverse power infrastructure needs.
            </p>
          </div>

          {/* =========================================================================
              2. RIGHT SIDE: CIRCULAR EXPERTISE ECOSYSTEM (Desktop & Tablet)
             ========================================================================= */}
          <div className="lg:col-span-7 flex items-center justify-center">
            {/* Desktop / Tablet Radial Diagram */}
            <div className="hidden md:block relative w-[620px] h-[500px] lg:w-[680px] lg:h-[540px]">
              {/* Background Connecting Circle SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 680 540"
                fill="none"
              >
                {/* Thin Main Connecting Orbit Ring */}
                <circle
                  cx="340"
                  cy="270"
                  r="200"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                />

                {/* Subtle Radial Connecting Spokes to Nodes */}
                <line x1="340" y1="270" x2="200" y2="115" stroke="#F1F5F9" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="340" y1="270" x2="480" y2="115" stroke="#F1F5F9" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="340" y1="270" x2="150" y2="270" stroke="#F1F5F9" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="340" y1="270" x2="530" y2="270" stroke="#F1F5F9" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="340" y1="270" x2="200" y2="425" stroke="#F1F5F9" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="340" y1="270" x2="480" y2="425" stroke="#F1F5F9" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Subtle Red Accent Dots on Outer Ring */}
                <circle cx="340" cy="70" r="3" fill="#E31E24" />
                <circle cx="340" cy="470" r="3" fill="#E31E24" />
              </svg>

              {/* Central Varad Engineering Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-neutral-100 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105">
                {/* Red Circular Accent Ring with Dashes and 6 Accent Dots */}
                <svg className="absolute -inset-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] pointer-events-none" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="94"
                    fill="none"
                    stroke="#E31E24"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                    strokeOpacity="0.8"
                  />
                  {/* 6 Accent Dots targeting the 6 nodes */}
                  <circle cx="40" cy="40" r="2.5" fill="#E31E24" />
                  <circle cx="160" cy="40" r="2.5" fill="#E31E24" />
                  <circle cx="6" cy="100" r="2.5" fill="#E31E24" />
                  <circle cx="194" cy="100" r="2.5" fill="#E31E24" />
                  <circle cx="40" cy="160" r="2.5" fill="#E31E24" />
                  <circle cx="160" cy="160" r="2.5" fill="#E31E24" />
                </svg>

                {/* Varad Red Ganesha + VE Logo */}
                <div className="w-11 h-11 flex items-center justify-center mb-1">
                  <VaradLogo size="sm" priority />
                </div>
                <span className="font-extrabold text-xs tracking-wider text-[#0f172a] leading-tight">
                  VARAD
                </span>
                <span className="font-semibold text-[10px] tracking-widest text-[#E31E24] leading-tight">
                  ENGINEERING
                </span>
              </div>

              {/* ---------------------------------------------------------------------
                  6 Radial Expertise Categories (Desktop / Tablet)
                 --------------------------------------------------------------------- */}
              {/* 1. Top-Left: Electrical Connectors */}
              <div
                onClick={() => handleCategoryClick('connectors')}
                className="absolute top-6 left-10 lg:left-12 z-30 flex items-center gap-3 cursor-pointer group"
              >
                <div className="text-right">
                  <div className="text-xs lg:text-sm font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                    Electrical <br /> Connectors
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-0.5 bg-neutral-300 group-hover:bg-[#E31E24] transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                </div>
                <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-white border border-neutral-200/90 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-2.5 transform group-hover:scale-105">
                  <Image
                    src="/images/expertise/node-1-connectors.png"
                    alt="Electrical Connectors"
                    width={85}
                    height={85}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* 2. Top-Right: Suspension & Tension Hardware */}
              <div
                onClick={() => handleCategoryClick('suspension-tension')}
                className="absolute top-6 right-6 lg:right-8 z-30 flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-white border border-neutral-200/90 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-2.5 transform group-hover:scale-105">
                  <Image
                    src="/images/expertise/node-4-suspension.png"
                    alt="Suspension & Tension Hardware"
                    width={85}
                    height={85}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                  <span className="w-3 h-0.5 bg-neutral-300 group-hover:bg-[#E31E24] transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-xs lg:text-sm font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                    Suspension & <br /> Tension Hardware
                  </div>
                </div>
              </div>

              {/* 3. Middle-Left: Clamps & Support Systems */}
              <div
                onClick={() => handleCategoryClick('clamps')}
                className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-0 z-30 flex items-center gap-3 cursor-pointer group"
              >
                <div className="text-right">
                  <div className="text-xs lg:text-sm font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                    Clamps & <br /> Support Systems
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-0.5 bg-neutral-300 group-hover:bg-[#E31E24] transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                </div>
                <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-white border border-neutral-200/90 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-2.5 transform group-hover:scale-105">
                  <Image
                    src="/images/expertise/node-2-clamps.png"
                    alt="Clamps & Support Systems"
                    width={85}
                    height={85}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* 4. Middle-Right: Earthing Components */}
              <div
                onClick={() => handleCategoryClick('earthing')}
                className="absolute top-1/2 -translate-y-1/2 right-10 lg:right-12 z-30 flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-white border border-neutral-200/90 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-2.5 transform group-hover:scale-105">
                  <Image
                    src="/images/expertise/node-5-earthing.png"
                    alt="Earthing Components"
                    width={85}
                    height={85}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                  <span className="w-3 h-0.5 bg-neutral-300 group-hover:bg-[#E31E24] transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-xs lg:text-sm font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                    Earthing <br /> Components
                  </div>
                </div>
              </div>

              {/* 5. Bottom-Left: Terminal Connections & Equipment Hardware */}
              <div
                onClick={() => handleCategoryClick('terminals')}
                className="absolute bottom-6 left-4 lg:left-6 z-30 flex items-center gap-3 cursor-pointer group"
              >
                <div className="text-right">
                  <div className="text-xs lg:text-sm font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                    Terminal Connections <br /> & Equipment Hardware
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-0.5 bg-neutral-300 group-hover:bg-[#E31E24] transition-colors" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                </div>
                <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-white border border-neutral-200/90 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-2.5 transform group-hover:scale-105">
                  <Image
                    src="/images/expertise/node-3-terminals.png"
                    alt="Terminal Connections & Equipment Hardware"
                    width={85}
                    height={85}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* 6. Bottom-Right: Custom Engineering Solutions */}
              <div
                onClick={() => handleCategoryClick('custom')}
                className="absolute bottom-6 right-6 lg:right-8 z-30 flex items-center gap-3 cursor-pointer group"
              >
                <div className="w-20 h-20 lg:w-[90px] lg:h-[90px] rounded-full bg-white border border-neutral-200/90 group-hover:border-[#E31E24] shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center p-2.5 transform group-hover:scale-105">
                  <Image
                    src="/images/expertise/node-6-custom.png"
                    alt="Custom Engineering Solutions"
                    width={85}
                    height={85}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                  <span className="w-3 h-0.5 bg-neutral-300 group-hover:bg-[#E31E24] transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-xs lg:text-sm font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                    Custom <br /> Engineering Solutions
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================================
                MOBILE COMPACT GRID (< md)
               ===================================================================== */}
            <div className="md:hidden w-full space-y-6">
              {/* Central Mobile Emblem */}
              <div className="mx-auto w-32 h-32 rounded-full bg-white shadow-md border-2 border-red-100 flex flex-col items-center justify-center p-3 text-center">
                <div className="w-8 h-8 flex items-center justify-center mb-1">
                  <VaradLogo size="sm" priority />
                </div>
                <span className="font-extrabold text-[11px] tracking-wider text-[#0f172a] leading-tight">
                  VARAD
                </span>
                <span className="font-semibold text-[9px] tracking-widest text-[#E31E24] leading-tight">
                  ENGINEERING
                </span>
              </div>

              {/* 6 Categories in Clean 2-Column Touch Grid */}
              <div className="grid grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="bg-white border border-neutral-200/90 rounded-xl p-3 flex flex-col items-center text-center shadow-xs active:border-[#E31E24] active:scale-98 transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center p-2 mb-2 group-hover:border-[#E31E24] transition-colors">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        width={56}
                        height={56}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#0f172a] group-hover:text-[#E31E24] transition-colors leading-tight">
                      {cat.shortTitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


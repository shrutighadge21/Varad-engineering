'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function ServicesSection({ onSelectCategory }: ServicesSectionProps) {
  const services = [
    {
      id: 'connectors',
      number: '01',
      title: 'Electrical Connectors',
      description: 'Palm connectors, C.T. connectors, T connectors and more for reliable electrical transmission.',
      featuredImage: '/images/services/hardware-01-connectors.png',
      thumbnail: '/images/services/thumb-01-connectors.png',
      alt: 'Varad Engineering Palm Connectors and Electrical Connectors'
    },
    {
      id: 'clamps',
      number: '02',
      title: 'Clamps & Support Systems',
      description: 'BPI support clamps, bus post clamps, and angular clamps for substation busbar retention.',
      featuredImage: '/images/services/hardware-02-clamps.png',
      thumbnail: '/images/services/thumb-02-clamps.png',
      alt: 'Varad Engineering BPI Support Clamps and Clamping Systems'
    },
    {
      id: 'terminals',
      number: '03',
      title: 'Terminal & Equipment Connections',
      description: 'Rigid and expansion terminal connectors linking 4" IPS aluminium tubes to CT, CVT and switchgear.',
      featuredImage: '/images/services/hardware-03-terminals.png',
      thumbnail: '/images/services/thumb-03-terminals.png',
      alt: 'Varad Engineering IPS Tube Terminal Connectors and Equipment Terminals'
    },
    {
      id: 'suspension-tension',
      number: '04',
      title: 'Suspension, Tension & Earthing Hardware',
      description: 'Suspension hardware strings, dead-end tension assemblies, spacers and flexible earthing bonds.',
      featuredImage: '/images/services/hardware-04-suspension.png',
      thumbnail: '/images/services/thumb-04-suspension.png',
      alt: 'Varad Engineering Suspension and Tension String Hardware Assemblies'
    },
    {
      id: 'custom',
      number: '05',
      title: 'Custom Engineering Solutions',
      description: 'Custom-built connectors, U-type breaker plates, and bespoke hardware fabricated as per client specifications.',
      featuredImage: '/images/services/hardware-05-custom.png',
      thumbnail: '/images/services/thumb-05-custom.png',
      alt: 'Varad Engineering Custom Tooling and Fabricated Engineering Products'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];

  const handleExplore = () => {
    if (onSelectCategory) {
      onSelectCategory(activeService.id);
    } else {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-12 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            TOP FEATURED AREA: Left Title, Center 3D Product Visual, Right Details
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-10 sm:mb-12 lg:mb-12">
          {/* 1. Left Side: Section Title & Description */}
          <div className="lg:col-span-4 space-y-5">
            {/* Small Red Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24]">
              <span className="w-6 h-0.5 bg-[#E31E24]" />
              <span>OUR SERVICES</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.12] tracking-tight font-sans">
              Our Engineering <br />
              <span className="text-[#E31E24]">Solutions</span>
            </h2>

            {/* Supporting Subtext */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-sm">
              A wide range of precision-engineered products for transmission, substation and electrical infrastructure.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                onClick={handleExplore}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E31E24] hover:bg-[#C9181E] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. Center: Large 3D Product Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
            {/* Subtle technical concentric ring accents */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-red-100/60 pointer-events-none" />
            <div className="absolute w-80 h-80 sm:w-[380px] sm:h-[380px] rounded-full border border-red-50/50 pointer-events-none" />
            <div className="absolute w-2 h-2 rounded-full bg-[#E31E24] -top-1 right-20 hidden sm:block opacity-70" />

            {/* Featured Product Image with smooth transition */}
            <div
              key={activeService.id}
              className="relative w-full max-w-[420px] aspect-[4/3] flex items-center justify-center transition-all duration-500 transform animate-fade-in"
            >
              <Image
                src={activeService.featuredImage}
                alt={activeService.alt}
                width={600}
                height={450}
                priority
                className="max-h-[280px] sm:max-h-[320px] w-auto h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
              />
            </div>
          </div>

          {/* 3. Right Side: Active Service Breakdown */}
          <div className="lg:col-span-3 space-y-4 max-w-sm">
            {/* Service Number with subtle lines */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E31E24] uppercase tracking-widest">
              <span className="w-4 h-0.5 bg-neutral-300" />
              <span>{activeService.number}</span>
              <span className="w-4 h-0.5 bg-neutral-300" />
            </div>

            {/* Active Service Title */}
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#0f172a] leading-tight tracking-tight">
              {activeService.title}
            </h3>

            {/* Active Service Short Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {activeService.description}
            </p>

            {/* View Products link */}
            <div className="pt-1">
              <button
                onClick={() => onSelectCategory && onSelectCategory(activeService.id)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-[#E31E24] transition-colors group cursor-pointer"
              >
                <span className="underline underline-offset-4">View Products</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E31E24]" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM SERVICE NAVIGATION: 5 Interactive Categories matching reference
           ========================================================================= */}
        <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x snap-mandatory">
          {services.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group relative flex-shrink-0 w-[220px] sm:w-[240px] lg:w-auto snap-start rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-2 border-[#E31E24] bg-white shadow-md'
                    : 'border border-neutral-200/90 bg-white hover:border-neutral-300 hover:shadow-sm'
                }`}
              >
                {/* Top Row: Number */}
                <div className="mb-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      isSelected ? 'text-[#E31E24]' : 'text-neutral-400'
                    }`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Middle: Title */}
                <div className="mb-4 min-h-[38px]">
                  <h4
                    className={`text-sm sm:text-[15px] font-bold leading-snug tracking-tight transition-colors ${
                      isSelected ? 'text-[#0f172a]' : 'text-neutral-800 group-hover:text-neutral-950'
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>

                {/* Bottom Row: Circular arrow on left, thumbnail image on right */}
                <div className="flex items-end justify-between gap-2 pt-3 border-t border-neutral-100">
                  {/* Circular Arrow Button */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isSelected
                        ? 'bg-[#E31E24] text-white shadow-sm'
                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200 group-hover:text-neutral-800'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative w-20 h-14 flex items-center justify-end">
                    <Image
                      src={item.thumbnail}
                      alt={item.alt}
                      width={100}
                      height={75}
                      className="max-h-12 max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

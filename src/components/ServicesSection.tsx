'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServicesSectionProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function ServicesSection({ onSelectCategory }: ServicesSectionProps) {
  const services = [
    {
      id: 'substation-clamps-connectors',
      title: 'Substation Clamps & Connectors',
      description: 'Precision-engineered palm connectors, CT connectors, T-connectors, PG clamps, spacers, and support clamps for high-voltage substations.',
      featuredImage: '/images/products/substation-clamps/100-100-12.png',
      thumbnail: '/images/products/substation-clamps/80-80-12.png',
      alt: 'Varad Engineering Substation Clamps and Connectors'
    },
    {
      id: 'substation-hardware',
      title: 'Substation Hardware',
      description: 'Complete tension and suspension hardware assemblies, D-shackle fittings, and drop-type hardware for substation gantries.',
      featuredImage: '/images/products/substation-hardware/single to single tension hardware.png',
      thumbnail: '/images/products/substation-hardware/single to single suspension hardware.png',
      alt: 'Varad Engineering Substation Tension and Suspension Hardware'
    },
    {
      id: 'earthwire-hardware',
      title: 'Earthwire Hardware',
      description: 'Hot-dip galvanized steel tension clamps, suspension clamp assemblies, and flexible copper bonding straps for ground wire and shielding.',
      featuredImage: '/images/catalogue/catalogue-04-suspension.png',
      thumbnail: '/images/catalogue/expertise-05-earthing.png',
      alt: 'Varad Engineering Earthwire Hardware and Grounding Components'
    },
    {
      id: 'bimetallic-sheets-sleeves',
      title: 'Bimetallic Sheets & Sleeves',
      description: 'Friction-welded copper-aluminium transition plates and compression sleeves designed to eliminate galvanic corrosion.',
      featuredImage: '/images/catalogue/catalogue-05-custom.png',
      thumbnail: '/images/catalogue/expertise-06-custom.png',
      alt: 'Varad Engineering Bimetallic Transition Sheets and Sleeves'
    },
    {
      id: 'transmission-line-hardware',
      title: 'Transmission Line Hardware',
      description: 'Single and double string suspension and tension assemblies, 0.4 series line hardware, and high-performance HTLS hardware systems.',
      featuredImage: '/images/products/htls-hardware/htls hardware set.png',
      thumbnail: '/images/products/htls-hardware/drake_aluminium_dead_end.png',
      alt: 'Varad Engineering Transmission Line Hardware and HTLS Assemblies'
    },
    {
      id: 'clamps-connectors-400kv-above',
      title: 'Clamps & Connectors for 400 kV and Above',
      description: 'Heavy-duty quad and twin T-connectors, rigid tube clamps, corona bells, bushing clamps, and BPI supports for 400kV+ EHV switchyards.',
      featuredImage: '/images/products/400kv-clamps-connectors/t connector single to quad conductor horizontal.png',
      thumbnail: '/images/products/400kv-clamps-connectors/rigid_connector_ips_tube.png',
      alt: 'Varad Engineering 400kV and Above Clamps and Connectors'
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];

  return (
    <section id="products" className="pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-12 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            TOP FEATURED AREA: Left Title, Center Product Visual, Right Details
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center mb-10 sm:mb-12 lg:mb-12">
          {/* 1. Left Side: Section Title & Description */}
          <div className="lg:col-span-4 space-y-5">
            {/* Small Red Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24]">
              <span className="w-6 h-0.5 bg-[#E31E24]" />
              <span>OUR PRODUCTS</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-[1.12] tracking-tight font-sans">
              Our Manufactured <br />
              <span className="text-[#E31E24]">Products</span>
            </h2>

            {/* Supporting Subtext */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-sm">
              A wide range of precision-engineered products for transmission, substation and electrical infrastructure.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Link
                href={`/products?category=${activeService.id}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#E31E24] hover:bg-[#C9181E] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 2. Center: Large Product Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
            {/* Technical concentric ring accents */}
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
            {/* Active Category Title */}
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#0f172a] leading-tight tracking-tight">
              {activeService.title}
            </h3>

            {/* Active Category Short Description */}
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {activeService.description}
            </p>

            {/* View Products link */}
            <div className="pt-1">
              <Link
                href={`/products?category=${activeService.id}`}
                onClick={() => onSelectCategory && onSelectCategory(activeService.id)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-[#E31E24] transition-colors group cursor-pointer"
              >
                <span className="underline underline-offset-4">View Products</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E31E24]" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CATEGORY NAVIGATION: 6 Interactive Categories matching Products page
           ========================================================================= */}
        <div className="flex lg:grid lg:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto pb-3 lg:pb-0 scrollbar-none snap-x snap-mandatory">
          {services.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group relative flex-shrink-0 w-[200px] sm:w-[220px] lg:w-auto snap-start rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-2 border-[#E31E24] bg-white shadow-md'
                    : 'border border-neutral-200/90 bg-white hover:border-neutral-300 hover:shadow-sm'
                }`}
              >
                {/* Title */}
                <div className="mb-4 min-h-[44px]">
                  <h4
                    className={`text-xs sm:text-[14px] font-bold leading-snug tracking-tight transition-colors ${
                      isSelected ? 'text-[#0f172a]' : 'text-neutral-800 group-hover:text-neutral-950'
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>

                {/* Bottom Row: Circular arrow on left, thumbnail image on right */}
                <div className="flex items-end justify-between gap-2 pt-3 border-t border-neutral-100">
                  {/* Circular Arrow Link */}
                  <Link
                    href={`/products?category=${item.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectCategory) onSelectCategory(item.id);
                    }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isSelected
                        ? 'bg-[#E31E24] text-white shadow-sm hover:bg-[#C9181E]'
                        : 'bg-neutral-100 text-neutral-500 group-hover:bg-[#E31E24] group-hover:text-white'
                    }`}
                    aria-label={`View ${item.title}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Thumbnail Image */}
                  <div className="relative w-16 h-12 sm:w-20 sm:h-14 flex items-center justify-end">
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

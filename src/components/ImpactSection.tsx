'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ImpactCard {
  number: string;
  metric: string;
  titleLines: [string, string];
  description: string;
  imageSrc: string;
  imageAlt: string;
  theme: 'red' | 'white' | 'light' | 'dark';
  // Proportional stepped staircase styling configurations
  imageHeightClass: string;
  cardMinHeightClass: string;
  metricSizeClass: string;
  titleSizeClass: string;
  descSizeClass: string;
  numSizeClass: string;
  paddingClass: string;
}

const impactCards: ImpactCard[] = [
  {
    number: '01',
    metric: '23+',
    titleLines: ['YEARS OF', 'EXPERIENCE'],
    description: 'Established in 2003 with continuous manufacturing reliability.',
    imageSrc: '/images/impact/impact-01-transmission.jpg',
    imageAlt: 'High-voltage electrical power transmission lattice tower infrastructure',
    theme: 'red',
    // 100% Height — TALLEST
    imageHeightClass: 'h-36 sm:h-40 lg:h-44 -mb-6 lg:-mb-7',
    cardMinHeightClass: 'min-h-[250px] sm:min-h-[265px] lg:min-h-[280px]',
    metricSizeClass: 'text-4xl sm:text-5xl lg:text-[46px]',
    titleSizeClass: 'text-xs sm:text-[13px]',
    descSizeClass: 'text-[11px] sm:text-xs',
    numSizeClass: 'text-4xl sm:text-5xl',
    paddingClass: 'p-5 sm:p-5.5 pt-2.5'
  },
  {
    number: '02',
    metric: 'Wide',
    titleLines: ['PRODUCT', 'PORTFOLIO'],
    description: 'Comprehensive range of connectors, clamps, substation hardware and custom engineering solutions.',
    imageSrc: '/images/impact/impact-02-connector.jpg',
    imageAlt: 'Precision manufactured high-voltage electrical connector assembly',
    theme: 'white',
    // ~88-90% Height — SLIGHTLY SHORTER
    imageHeightClass: 'h-32 sm:h-36 lg:h-38 -mb-5 lg:-mb-6',
    cardMinHeightClass: 'min-h-[230px] sm:min-h-[245px] lg:min-h-[255px]',
    metricSizeClass: 'text-3xl sm:text-4xl lg:text-[38px]',
    titleSizeClass: 'text-xs sm:text-[13px]',
    descSizeClass: 'text-[11px] sm:text-xs',
    numSizeClass: 'text-4xl sm:text-5xl',
    paddingClass: 'p-4.5 sm:p-5 pt-2'
  },
  {
    number: '03',
    metric: 'Multiple',
    titleLines: ['INDUSTRIES', 'SERVED'],
    description: 'High-voltage transmission lines, substations and critical electrical infrastructure industries.',
    imageSrc: '/images/impact/impact-03-substation.jpg',
    imageAlt: 'High-voltage electrical substation transformer and radiator unit',
    theme: 'light',
    // ~78-80% Height — SHORTER
    imageHeightClass: 'h-28 sm:h-32 lg:h-34 -mb-4 lg:-mb-5',
    cardMinHeightClass: 'min-h-[210px] sm:min-h-[225px] lg:min-h-[232px]',
    metricSizeClass: 'text-3xl sm:text-[34px] lg:text-[34px]',
    titleSizeClass: 'text-xs sm:text-[12.5px]',
    descSizeClass: 'text-[11px] sm:text-xs',
    numSizeClass: 'text-3xl sm:text-4xl',
    paddingClass: 'p-4 sm:p-4.5 pt-2'
  },
  {
    number: '04',
    metric: 'Custom',
    titleLines: ['ENGINEERING', 'SOLUTIONS'],
    description: 'Tested & approved by C.P.R.I. for mission-critical applications.',
    imageSrc: '/images/impact/impact-04-custom.jpg',
    imageAlt: 'Custom high-voltage substation switchgear and engineering hardware',
    theme: 'dark',
    // ~68-70% Height — SHORTEST
    imageHeightClass: 'h-24 sm:h-28 lg:h-30 -mb-4 lg:-mb-4',
    cardMinHeightClass: 'min-h-[190px] sm:min-h-[205px] lg:min-h-[210px]',
    metricSizeClass: 'text-2xl sm:text-3xl lg:text-[30px]',
    titleSizeClass: 'text-[11px] sm:text-xs',
    descSizeClass: 'text-[10.5px] sm:text-[11.5px]',
    numSizeClass: 'text-3xl sm:text-4xl',
    paddingClass: 'p-3.5 sm:p-4 pt-1.5'
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="relative pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-18 bg-[#fbfbfb] text-neutral-900 overflow-hidden border-t border-neutral-200/60">
      {/* Subtle Background Architectural Grid / Transmission Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06] mix-blend-multiply overflow-hidden z-0">
        <Image
          src="/images/slide-substation.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center grayscale contrast-125 scale-105"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            SECTION HEADER: Compact Eyebrow, Tight Headline & Subtitle
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-2.5">
          {/* Eyebrow with Red Flanking Lines */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#0f172a]">
            <span className="w-6 sm:w-8 h-[2px] bg-[#E31E24]" />
            <span>OUR IMPACT & SCALE</span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#E31E24]" />
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0f172a] leading-[1.15] tracking-tight font-sans">
            Supporting Infrastructure <br />
            <span className="text-[#E31E24]">Across Industries</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl mx-auto pt-0.5 font-normal">
            Our components are trusted in transmission lines, substations and critical electrical infrastructure projects across India.
          </p>
        </div>

        {/* =========================================================================
            4-CARD DESCENDING STAIRCASE COMPOSITION (ALIGNED AT BOTTOM)
            Card 01 (Tallest) → Card 02 → Card 03 → Card 04 (Shortest)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 items-end">
          {impactCards.map((card) => {
            const isRed = card.theme === 'red';
            const isDark = card.theme === 'dark';
            const isLight = card.theme === 'light';

            return (
              <div
                key={card.number}
                className="group relative flex flex-col justify-end transition-all duration-300 hover:-translate-y-1"
              >
                {/* Stepped Floating Realistic Equipment Image (Follows Staircase Height) */}
                <div
                  className={`relative z-20 w-full flex items-end justify-center pointer-events-none ${card.imageHeightClass}`}
                >
                  <div className="relative w-full h-full max-w-[220px] sm:max-w-[240px] flex items-end justify-center">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      width={420}
                      height={320}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="max-h-full w-auto object-contain mix-blend-multiply drop-shadow-[0_10px_16px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Stepped Card Body Container (Aligned Bottom, Descending Top Edge) */}
                <div
                  className={`relative z-10 rounded-b-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isRed
                      ? 'bg-gradient-to-b from-[#E31E24] to-[#C9181E] text-white shadow-md shadow-red-950/15'
                      : isDark
                      ? 'bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white shadow-md shadow-slate-950/20 border border-slate-700/70'
                      : isLight
                      ? 'bg-[#f3f4f6] text-neutral-900 border border-neutral-200/90 shadow-xs hover:shadow-sm'
                      : 'bg-white text-neutral-900 border border-neutral-200/90 shadow-xs hover:shadow-sm'
                  }`}
                >
                  {/* Angled Faceted Top Cap */}
                  <div className="relative w-full h-8 sm:h-9 overflow-hidden">
                    <svg
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                      className="absolute inset-0 w-full h-full"
                    >
                      {isRed ? (
                        <>
                          <polygon points="0,20 0,0 100,6 100,20" fill="#E31E24" />
                          <line x1="0" y1="0" x2="100" y2="6" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
                          <line x1="20" y1="1.2" x2="10" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                          <line x1="45" y1="2.7" x2="35" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                          <line x1="70" y1="4.2" x2="60" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                          <line x1="90" y1="5.4" x2="85" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                        </>
                      ) : isDark ? (
                        <>
                          <polygon points="0,20 0,0 100,6 100,20" fill="#1e293b" />
                          <line x1="0" y1="0" x2="100" y2="6" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                        </>
                      ) : isLight ? (
                        <>
                          <polygon points="0,20 0,0 100,6 100,20" fill="#f3f4f6" />
                          <line x1="0" y1="0" x2="100" y2="6" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
                        </>
                      ) : (
                        <>
                          <polygon points="0,20 0,0 100,6 100,20" fill="#ffffff" />
                          <line x1="0" y1="0" x2="100" y2="6" stroke="rgba(0,0,0,0.1)" strokeWidth="0.8" />
                        </>
                      )}
                    </svg>
                  </div>

                  {/* Card Content Area with Stepped Proportional Min-Height */}
                  <div
                    className={`${card.paddingClass} ${card.cardMinHeightClass} flex flex-col justify-between`}
                  >
                    <div className="space-y-2.5">
                      {/* Dominant Metric */}
                      <div>
                        <span
                          className={`block font-black font-sans tracking-tight leading-none ${
                            isRed || isDark ? 'text-white' : 'text-[#0f172a]'
                          } ${card.metricSizeClass}`}
                        >
                          {card.metric}
                        </span>
                      </div>

                      {/* Card Sub-Heading (2 uppercase bold lines) */}
                      <div className="space-y-0.5">
                        <h3
                          className={`font-black uppercase tracking-wider leading-tight ${
                            isRed || isDark ? 'text-white' : 'text-[#0f172a]'
                          } ${card.titleSizeClass}`}
                        >
                          <span className="block">{card.titleLines[0]}</span>
                          <span className="block">{card.titleLines[1]}</span>
                        </h3>
                      </div>

                      {/* Red / White Accent Divider Line */}
                      <div
                        className={`w-6 h-[2px] ${
                          isRed ? 'bg-white/40' : 'bg-[#E31E24]'
                        }`}
                      />

                      {/* Description */}
                      <p
                        className={`leading-relaxed font-normal ${
                          isRed
                            ? 'text-red-50/95'
                            : isDark
                            ? 'text-slate-300'
                            : 'text-neutral-600'
                        } ${card.descSizeClass}`}
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Row: Accent Arrow on Left, Translucent Large Number on Right */}
                    <div className="pt-3 mt-2 flex items-end justify-between">
                      {/* Arrow Icon */}
                      <div
                        className={`transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isRed ? 'text-white/80' : 'text-[#E31E24]'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
                      </div>

                      {/* Giant Translucent Stepped Number */}
                      <span
                        className={`font-black font-sans leading-none select-none tracking-tighter ${
                          isRed
                            ? 'text-red-950/20'
                            : isDark
                            ? 'text-white/10'
                            : 'text-neutral-300/70'
                        } ${card.numSizeClass}`}
                      >
                        {card.number}
                      </span>
                    </div>
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

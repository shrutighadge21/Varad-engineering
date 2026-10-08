'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onOpenEnquiry?: () => void;
}

export default function CTASection({ onOpenEnquiry }: CTASectionProps) {
  return (
    <section className="relative w-full bg-white text-neutral-900 overflow-hidden border-t border-neutral-200/80">
      <div className="relative max-w-[1440px] mx-auto min-h-[340px] lg:min-h-[390px] flex flex-col justify-center">
        {/* Right Side Background Image with Subtle Smooth Left Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[56%] pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/cta-substation-sunset.jpg"
            alt="High-voltage electrical substation and power transmission towers at golden hour"
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className="object-cover object-center"
            priority
          />

          {/* Smooth Left-to-Right Gradient Overlay for Clean Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent sm:via-white/60 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent lg:hidden" />

          {/* Subtle Varad Red Diagonal Accent Wedge in Bottom-Right (Matching Reference) */}
          <div
            className="absolute bottom-0 right-0 w-64 sm:w-96 lg:w-[420px] h-28 sm:h-36 lg:h-44 pointer-events-none opacity-90 hidden sm:block"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(227, 30, 36, 0.88) 40%, rgba(185, 28, 28, 0.96) 100%)',
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
            }}
          />
        </div>

        {/* Content Container (Left-Aligned, Clean & Spacious with 6–8% Padding) */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-14 lg:py-16 max-w-xl lg:max-w-2xl">
          {/* Eyebrow with Leading Red Accent Line */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f172a] mb-3">
            <span className="w-7 sm:w-8 h-[2px] bg-[#E31E24]" />
            <span>LET'S BUILD A STRONGER TOMORROW</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.12] tracking-tight font-sans text-[#0f172a]">
            Ready to Power <br />
            <span className="text-[#E31E24]">Your Next Project?</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-lg">
            Partner with Varad Engineering for high-quality electrical connectors, substation hardware and custom engineering solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary Button */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/95 hover:bg-neutral-50 text-[#0f172a] font-bold text-sm border-2 border-[#0f172a]/80 hover:border-[#0f172a] shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

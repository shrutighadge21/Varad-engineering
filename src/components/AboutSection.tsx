'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Factory, Users, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 lg:py-20 bg-white text-neutral-900 overflow-hidden border-t border-neutral-100">
      {/* Subtle Background Architectural Grid / Transmission Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.05] mix-blend-multiply overflow-hidden z-0">
        <Image
          src="/images/slide-substation.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center grayscale contrast-125"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            TOP ROW: Left Text Content + Right 3-Panel Slanted Industrial Collage
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Paragraph & CTA (~45% width) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Red Eyebrow with Dash */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0f172a]">
              <span className="w-7 h-[2px] bg-[#E31E24]" />
              <span>ABOUT VARAD ENGINEERING</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0f172a] leading-[1.12] tracking-tight font-sans">
              Engineering <br className="hidden sm:block" />
              Experience <br />
              <span className="text-[#E31E24]">You Can Rely On</span>
            </h2>

            {/* Concise Supporting Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-lg">
              Varad Engineering is a Pune-based manufacturer of precision-engineered electrical connectors, clamps, conductor fittings and custom-built engineering products for power transmission and substation applications.
            </p>

            {/* Primary Action Button linking to /about */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3-Panel Slanted Parallelogram Collage with Red Accents (~55% width) */}
          <div className="lg:col-span-7 w-full flex items-center justify-center pt-4 lg:pt-0">
            <div className="relative flex items-center justify-center gap-3 sm:gap-4.5 w-full max-w-[620px] lg:max-w-none">
              {/* -------------------------------------------------------------
                  Panel 1: Precision Electrical Connector (Left)
                 ------------------------------------------------------------- */}
              <div className="relative w-[31%] h-[240px] sm:h-[280px] lg:h-[310px] self-center">
                {/* Red Slash Accent Badge on Top-Left */}
                <div className="absolute -top-3 -left-2 sm:-left-3 w-3 sm:w-3.5 h-14 sm:h-18 bg-[#E31E24] -skew-x-12 rounded-xs z-20 shadow-md pointer-events-none" />

                <div className="relative w-full h-full -skew-x-12 overflow-hidden rounded-xl bg-neutral-100 shadow-md border border-neutral-200/90 transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative w-[140%] h-[120%] -left-[20%] -top-[10%] skew-x-12">
                    <Image
                      src="/images/about/about-panel-1-connector.jpg"
                      alt="Varad Engineering Heavy Duty Electrical Connector Terminal Assembly"
                      fill
                      sizes="(max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  Panel 2: High-Voltage Substation Infrastructure (Center — Dominant)
                 ------------------------------------------------------------- */}
              <div className="relative w-[38%] h-[280px] sm:h-[330px] lg:h-[370px] z-10">
                <div className="relative w-full h-full -skew-x-12 overflow-hidden rounded-xl bg-neutral-100 shadow-xl border-2 border-white ring-1 ring-neutral-200/90 transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative w-[140%] h-[120%] -left-[20%] -top-[10%] skew-x-12">
                    <Image
                      src="/images/about/about-panel-2-substation.jpg"
                      alt="High-Voltage Electrical Substation & Transmission Towers"
                      fill
                      sizes="(max-width: 1024px) 40vw, 24vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  Panel 3: Transmission Conductor Suspension Clamp (Right)
                 ------------------------------------------------------------- */}
              <div className="relative w-[31%] h-[230px] sm:h-[270px] lg:h-[300px] self-center">
                {/* Red Slash Accent Badge on Bottom-Left */}
                <div className="absolute -bottom-3 -left-2 sm:-left-3 w-3 sm:w-3.5 h-14 sm:h-18 bg-[#E31E24] -skew-x-12 rounded-xs z-20 shadow-md pointer-events-none" />

                <div className="relative w-full h-full -skew-x-12 overflow-hidden rounded-xl bg-neutral-100 shadow-md border border-neutral-200/90 transition-transform duration-500 hover:scale-[1.02]">
                  <div className="relative w-[140%] h-[120%] -left-[20%] -top-[10%] skew-x-12">
                    <Image
                      src="/images/about/about-panel-3-conductor.jpg"
                      alt="Transmission Line Conductor Suspension Clamp and Hardware Assembly"
                      fill
                      sizes="(max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ROW: 3 Authentic Credibility Stats (2003, 23+ Years, CPRI)
           ========================================================================= */}
        <div className="mt-10 lg:mt-14 pt-6 lg:pt-8 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl">
          {/* Stat 1: Established 2003 */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-red-50 text-[#E31E24] flex items-center justify-center flex-shrink-0">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#0f172a] font-sans leading-none tracking-tight">
                2003
              </span>
              <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">
                ESTABLISHED
              </span>
            </div>
          </div>

          {/* Stat 2: 23+ Years Experience */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-red-50 text-[#E31E24] flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#0f172a] font-sans leading-none tracking-tight">
                23+ YEARS
              </span>
              <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">
                MANUFACTURING EXPERIENCE
              </span>
            </div>
          </div>

          {/* Stat 3: CPRI Tested & Approved */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-red-50 text-[#E31E24] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black text-[#0f172a] font-sans leading-none tracking-tight">
                CPRI
              </span>
              <span className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-1">
                TESTED &amp; APPROVED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

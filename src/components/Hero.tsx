'use client';

import React, { useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback (video remains muted so will play automatically)
      });
    }
  }, []);

  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden min-h-[360px] sm:min-h-[460px] lg:min-h-[660px] flex items-center">
      {/* Background Substation Video with Exact-Match Frame 0 Poster */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 transition-opacity duration-500"
      >
        <source src="/videos/substation-background.mp4" type="video/mp4" />
      </video>

      {/* Subtle Left-Side Gradient Overlay (Enhanced contrast on mobile for crystal clear text readability) */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/30 sm:from-slate-950/80 sm:via-slate-950/25 sm:to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-3.5 sm:space-y-5 lg:space-y-6">
          {/* Category / Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <span className="w-6 sm:w-8 h-0.5 bg-[#E31E24] shadow-[0_1px_3px_rgba(0,0,0,0.8)]" />
            <span>Power Transmission & Infrastructure</span>
          </div>

          {/* Large Bold Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.15] sm:leading-[1.1] font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <span className="block drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">Engineering Connections.</span>
            <span className="block text-[#E31E24] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Powering Infrastructure.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-xs sm:text-base lg:text-lg text-slate-100 font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            Precision-engineered electrical connectors, clamps and custom-built solutions for power transmission and electrical infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

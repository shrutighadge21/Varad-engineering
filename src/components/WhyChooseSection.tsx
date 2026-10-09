'use client';

import React from 'react';
import Image from 'next/image';
import { Award, PackageCheck, Wrench, Layers } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Award,
      number: '01',
      title: 'Established Experience',
      description: 'Over 23 years of dedicated manufacturing expertise since 2003, serving high-voltage transmission projects with unwavering reliability.'
    },
    {
      icon: PackageCheck,
      number: '02',
      title: 'Wide Product Range',
      description: 'A comprehensive portfolio of precision connectors, support clamps, terminal fittings, and suspension hardware assemblies.'
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Custom Engineering',
      description: 'In-house capability to develop custom-built products and bespoke tooling tailored to exact client engineering specifications.'
    },
    {
      icon: Layers,
      number: '04',
      title: 'Quality Materials',
      description: 'Manufactured using high-conductivity Aluminium Alloy, Electrolytic Copper, Brass, and Hot-Dip Galvanized Mild Steel.'
    }
  ];

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-slate-100 text-neutral-900 relative overflow-hidden border-t border-slate-200">
      {/* High-Quality Electrical Substation & Transmission Power Infrastructure Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/why-choose-bg.jpg"
          alt="Electrical Substation and Power Transmission Infrastructure"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        {/* Controlled 38-42% semi-transparent overlay balancing clear infrastructure visibility with crisp text contrast */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E31E24]">
            <span className="w-8 sm:w-10 h-0.5 bg-[#E31E24]" />
            <span>WHY CHOOSE VARAD</span>
            <span className="w-8 sm:w-10 h-0.5 bg-[#E31E24]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0B192C] leading-tight tracking-tight font-sans">
            Built on Strength. <span className="text-[#E31E24]">Driven by Precision.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
            Engineering excellence, verified material standards, and rapid custom manufacturing for mission-critical power networks.
          </p>
        </div>

        {/* 4 Feature Columns with Minimal Translucent White Backdrops for Enhanced Contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {features.map((feature) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-[2px] border border-white/80 hover:bg-white/85 hover:border-red-100 hover:shadow-md transition-all duration-300"
              >
                {/* Number */}
                <span className="text-xs font-mono font-bold text-slate-500 mb-2">
                  {feature.number}
                </span>

                {/* Circular Icon Badge */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#E31E24] mb-4 group-hover:scale-110 group-hover:border-[#E31E24] group-hover:shadow-md transition-all duration-300">
                  <IconComp className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Heading */}
                <h3 className="text-base sm:text-lg font-bold text-[#0B192C] tracking-tight mb-2.5 group-hover:text-[#E31E24] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13.5px] text-slate-800 font-medium leading-relaxed max-w-[260px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

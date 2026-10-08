'use client';

import React from 'react';
import { Award, PackageCheck, Wrench, Layers, ShieldCheck } from 'lucide-react';

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
    <section id="why-choose" className="py-16 lg:py-24 bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24]">
            <span className="w-6 h-0.5 bg-[#E31E24]" />
            <span>WHY CHOOSE VARAD</span>
            <span className="w-6 h-0.5 bg-[#E31E24]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-tight tracking-tight font-sans">
            Built on Strength. <span className="text-[#E31E24]">Driven by Precision.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Engineering excellence, verified material standards, and rapid custom manufacturing for mission-critical power networks.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white border border-neutral-200/90 hover:border-red-200 rounded-2xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  {/* Top Row: Icon and Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center transition-colors group-hover:bg-[#E31E24] group-hover:text-white">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {feature.number}
                    </span>
                  </div>

                  {/* Heading & Text */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-[#0f172a] tracking-tight group-hover:text-[#E31E24] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Verified Standard Tag */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                  <span>Verified Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

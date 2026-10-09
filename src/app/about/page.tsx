'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import {
  Cog,
  ShieldCheck,
  Wrench,
  Cpu,
  Zap,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function AboutPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const journeyMilestones = [
    {
      year: '2003',
      title: 'Foundation',
      description: 'Established Varad Engineering with a vision to serve the power infrastructure sector.',
      image: '/images/impact/impact-02-connector.jpg',
      imageAlt: 'Varad Engineering Foundation - Electrical Connectors and Clamps',
      staggerClass: 'lg:mt-36 xl:mt-40'
    },
    {
      year: '2010',
      title: 'Strengthening Capabilities',
      description: 'Expanded our manufacturing capabilities to meet growing industry demands.',
      image: '/images/slide-manufacturing.jpg',
      imageAlt: 'Strengthened In-House Precision Manufacturing Capabilities',
      staggerClass: 'lg:mt-28 xl:mt-30'
    },
    {
      year: '2016',
      title: 'Broader Product Range',
      description: 'Diversified our portfolio with advanced electrical connectors and substation hardware.',
      image: '/images/slide-products.jpg',
      imageAlt: 'Broader Product Portfolio - Substation Connectors and Hardware',
      staggerClass: 'lg:mt-20 xl:mt-20'
    },
    {
      year: '2020',
      title: 'Strengthened Infrastructure',
      description: 'Enhanced manufacturing processes for better efficiency and quality.',
      image: '/images/varad-plant.jpg',
      imageAlt: 'Strengthened Plant Infrastructure and Modern Production Floor',
      staggerClass: 'lg:mt-10 xl:mt-10'
    },
    {
      year: 'Today',
      title: 'Continuing Forward',
      description: 'Committed to delivering reliable and customized solutions for a stronger tomorrow.',
      image: '/images/cta-substation-sunset.jpg',
      imageAlt: 'Varad Engineering Continuing Forward - Power Transmission Infrastructure',
      staggerClass: 'lg:mt-0 xl:mt-0'
    }
  ];

  const approachSteps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Study project requirements and application needs.'
    },
    {
      number: '02',
      title: 'Engineer',
      description: 'Develop the right technical solution.'
    },
    {
      number: '03',
      title: 'Manufacture',
      description: 'Produce with precision and consistency.'
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Ensure timely supply and ongoing support.'
    }
  ];

  const capabilities = [
    {
      icon: Cog,
      label: 'Advanced Manufacturing'
    },
    {
      icon: Cpu,
      label: 'Precision Engineering'
    },
    {
      icon: ShieldCheck,
      label: 'Quality Processes'
    },
    {
      icon: Wrench,
      label: 'Customized Solutions'
    }
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#E31E24] selection:text-white">
      {/* 1. Sticky Site Header */}
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* =========================================================================
          SECTION 1: ABOUT US HERO (Compact Cinematic Dark Industrial Presentation ~52vh)
         ========================================================================= */}
      <section className="relative w-full bg-[#040812] text-white overflow-hidden min-h-[48vh] sm:min-h-[50vh] lg:min-h-[52vh] max-h-[580px] flex flex-col justify-between">
        {/* Authentic Industrial Background Image */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/slide-transmission.jpg"
            alt="Varad Engineering High-Voltage Power Transmission and Substation Infrastructure"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-45 mix-blend-luminosity scale-105"
            priority
          />
          {/* Subtle Dark Navy Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050b17]/90 via-[#060e20]/75 to-[#040814]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050b17]/50 to-[#040812]/90" />
        </div>

        {/* Centered Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-2 sm:pb-3 text-center w-full my-auto">
          {/* Small Eyebrow with Red Underline Accent */}
          <div className="inline-flex flex-col items-center mb-2.5 sm:mb-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E31E24]">
              ABOUT VARAD ENGINEERING
            </span>
            <span className="w-8 sm:w-10 h-[2px] bg-[#E31E24] mt-1.5 rounded-full" />
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-white leading-[1.12] sm:leading-[1.14] font-sans drop-shadow-md">
            <span className="block">ENGINEERING</span>
            <span className="block">
              <span className="text-[#E31E24]">RELIABILITY</span> FOR
            </span>
            <span className="block">A STRONGER TOMORROW</span>
          </h1>

          {/* Supporting Company Summary */}
          <p className="mt-3 sm:mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
            For over two decades, Varad Engineering has been manufacturing high-quality electrical connectors, clamps and custom-built solutions for India's power infrastructure.
          </p>

          {/* Minimal Scroll to Explore Indicator */}
          <div className="mt-4 sm:mt-5 flex flex-col items-center justify-center">
            <a
              href="#who-we-are"
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll to explore Who We Are section"
            >
              <span>SCROLL TO EXPLORE</span>
              <span className="text-[#E31E24] font-bold group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </div>

        {/* Organic Curved White Upward Transition into Next Section */}
        <div className="relative w-full z-10 overflow-hidden leading-none select-none pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-8 sm:h-10 lg:h-12 block text-white"
            aria-hidden="true"
          >
            <path
              d="M 0,0 L 0,60 L 1440,60 L 1440,38 L 460,38 C 390,38 370,0 300,0 L 0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHO WE ARE (Light Studio Presentation & 2003 / 23+ Stats)
         ========================================================================= */}
      <section id="who-we-are" className="py-14 sm:py-16 lg:py-20 bg-white text-neutral-900 relative overflow-hidden">
        {/* Subtle Background Power Transmission Watermark & Light Diagonal Bands */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Faint Transmission Towers in Background */}
          <div className="absolute bottom-0 right-10 sm:right-1/4 w-full sm:w-[600px] lg:w-[750px] h-60 sm:h-72 lg:h-[320px] opacity-12 mix-blend-multiply">
            <Image
              src="/images/slide-transmission.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover object-bottom grayscale contrast-125"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
          </div>

          {/* Subtle Technical Architectural Diagonal Bands in Top-Right */}
          <div
            className="absolute top-0 right-0 w-[480px] h-full opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(226, 232, 240, 0.6) 40%, rgba(226, 232, 240, 0.6) 55%, transparent 55%, transparent 65%, rgba(241, 245, 249, 0.8) 65%, rgba(241, 245, 249, 0.8) 85%, transparent 85%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Main Grid: Left Story (~44%) + Right Studio Product & Stats (~56%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center min-h-[480px] lg:min-h-[500px]">
            
            {/* Left Column: Eyebrow, Heading, Description, 4 Principles (lg:col-span-5 xl:col-span-5) */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6 lg:pr-2 relative z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <span className="w-5 h-[2px] bg-[#E31E24] rounded-full" />
                <span className="text-slate-400 font-normal">01 /</span>
                <span className="text-[#E31E24]">WHO WE ARE</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0B132B] leading-[1.12] tracking-tight font-sans">
                Built on Engineering. <br />
                <span>Driven by <span className="text-[#E31E24]">Purpose.</span></span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                Varad Engineering is a trusted manufacturer of precision-engineered electrical connectors, clamps and substation hardware. With a strong focus on quality, reliability and customized solutions, we support India's power transmission and distribution infrastructure.
              </p>

              {/* Engineering Highlights (Compact Row of 4 Principles) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 pt-2 border-t border-slate-100">
                {/* 01 Precision Engineering */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#E31E24]">
                    <Cog className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Precision
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Engineering
                    </span>
                  </div>
                </div>

                {/* 02 Reliable Performance */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#E31E24]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Reliable
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Performance
                    </span>
                  </div>
                </div>

                {/* 03 Customized Solutions */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#E31E24]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Customized
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Solutions
                    </span>
                  </div>
                </div>

                {/* 04 Powering a Stronger India */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#E31E24]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      Powering
                    </span>
                    <span className="block text-[11px] sm:text-xs font-bold text-[#0B132B] leading-tight">
                      a Stronger India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Light Studio Product + Slanted Red Accent + 2003/23+ Stats (lg:col-span-7 xl:col-span-7) */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 z-10">
              
              {/* Product Visual Container with Slanted Red Accent */}
              <div className="relative flex-1 flex items-center justify-center w-full max-w-[460px] lg:max-w-[500px] h-[340px] sm:h-[380px] lg:h-[420px]">
                
                {/* Dynamic Slanted Varad Red Accent Bar */}
                <div
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-3 sm:w-3.5 h-28 sm:h-36 bg-[#E31E24] shadow-sm rounded-xs z-10"
                  style={{
                    transform: 'translateY(-50%) skewX(-14deg)'
                  }}
                  aria-hidden="true"
                />

                {/* Authentic Heavy Duty Bolted Clamp Product with Soft Ground Shadow */}
                <div className="relative w-full h-full pl-6 sm:pl-8 flex items-center justify-center">
                  <div className="relative w-full h-full drop-shadow-[0_20px_30px_rgba(15,23,42,0.14)] transition-transform duration-700 hover:scale-104">
                    <Image
                      src="/images/about/about-panel-1-connector.jpg"
                      alt="Varad Engineering Heavy Duty Bolted Electrical Connector Clamp"
                      fill
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-contain object-center"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Far-Right Statistics Block: 2003 Established & 23+ Years of Experience */}
              <div className="w-full lg:w-auto flex flex-row lg:flex-col justify-center lg:justify-center items-center lg:items-start gap-8 lg:gap-0 lg:space-y-6 lg:pl-6 xl:pl-8 lg:border-l lg:border-slate-200/80 shrink-0 text-left">
                {/* 2003 Established */}
                <div>
                  <span className="block text-3xl sm:text-4xl lg:text-[42px] font-black text-[#E31E24] font-sans leading-none tracking-tight">
                    2003
                  </span>
                  <span className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1.5">
                    ESTABLISHED
                  </span>
                </div>

                {/* Subtle Divider (Desktop: horizontal, Mobile: vertical) */}
                <div className="hidden lg:block w-8 h-[1.5px] bg-slate-200" />
                <div className="block lg:hidden w-[1px] h-10 bg-slate-200" />

                {/* 23+ Years of Experience */}
                <div>
                  <span className="block text-3xl sm:text-4xl lg:text-[42px] font-black text-[#E31E24] font-sans leading-none tracking-tight">
                    23+
                  </span>
                  <span className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1.5">
                    YEARS OF EXPERIENCE
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: OUR JOURNEY (Option 1: Editorial Timeline - Ascending Layout)
         ========================================================================= */}
      <section id="our-journey" className="py-16 lg:py-24 bg-white text-neutral-900 relative overflow-hidden border-t border-slate-100">
        {/* Subtle Lower-Left Industrial Transmission Landscape */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-80 sm:w-96 lg:w-[460px] h-60 sm:h-72 lg:h-[320px] opacity-25 mix-blend-multiply">
            <Image
              src="/images/slide-transmission.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover object-bottom-left grayscale contrast-125"
              aria-hidden="true"
            />
            {/* Soft Edge Blending Masks */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white" />
          </div>
          {/* Subtle Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Desktop & Widescreen Editorial Layout (lg+) */}
          <div className="hidden lg:flex lg:flex-row lg:items-start lg:justify-between gap-6 xl:gap-10">
            {/* Left Column: Eyebrow, Large Heading & Intro Text */}
            <div className="w-[300px] xl:w-[350px] shrink-0 pt-2 relative z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E31E24]">
                <span className="w-5 h-[2px] bg-[#E31E24] rounded-full" />
                <span>OUR JOURNEY</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl xl:text-[42px] font-black text-[#0B132B] leading-[1.12] tracking-tight font-sans mt-3.5 mb-4">
                A Legacy of <br />
                <span className="text-[#0B132B]">Engineering Excellence</span>
              </h2>

              {/* Paragraph */}
              <p className="text-sm xl:text-[15px] text-slate-600 leading-relaxed font-normal">
                From our foundation in 2003 to becoming a trusted partner in power infrastructure, our journey has been driven by quality, innovation and customer trust.
              </p>
            </div>

            {/* Right Column: Rising Editorial Timeline Track */}
            <div className="flex-1 relative z-10 min-h-[460px] flex items-stretch">
              {/* Ascending Timeline Smooth Connecting Curve SVG */}
              <svg
                viewBox="0 0 1000 480"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                aria-hidden="true"
              >
                <path
                  d="M 0,299 C 33,292 66,286 100,279 C 166,266 233,252 300,239 C 366,226 433,212 500,199 C 566,186 633,172 700,159 C 766,146 833,132 900,119 C 933,112 966,106 1000,99"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* 5 Milestone Columns Arranged in Progressive Ascending Steps */}
              <div className="grid grid-cols-5 gap-3.5 xl:gap-5 w-full relative z-10">
                {journeyMilestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className={`flex flex-col group transition-all duration-300 ${milestone.staggerClass}`}
                  >
                    {/* Milestone Image Thumbnail */}
                    <div className="relative w-full aspect-[16/10] max-h-[105px] rounded-xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-100 mb-3 group-hover:shadow-lg group-hover:border-[#E31E24]/50 transition-all duration-300">
                      <Image
                        src={milestone.image}
                        alt={milestone.imageAlt}
                        fill
                        sizes="(max-width: 1280px) 15vw, 180px"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Milestone Red Node */}
                    <div className="relative flex items-center justify-center my-1.5 z-10">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#E31E24] ring-4 ring-white shadow-xs group-hover:scale-135 transition-transform duration-300" />
                    </div>

                    {/* Content Below Node */}
                    <div className="pt-2 text-left">
                      <span className="block text-base xl:text-lg font-black text-[#E31E24] font-sans tracking-tight leading-none mb-1">
                        {milestone.year}
                      </span>
                      <h3 className="text-xs xl:text-[13px] font-extrabold text-[#0B132B] leading-snug mb-1.5 line-clamp-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[11px] xl:text-xs text-slate-600 leading-relaxed font-normal">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet & Mobile Clean Vertical / Responsive Flow (< lg) */}
          <div className="lg:hidden space-y-10">
            {/* Header Block */}
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24]">
                <span className="w-5 h-[2px] bg-[#E31E24] rounded-full" />
                <span>OUR JOURNEY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] leading-tight tracking-tight font-sans">
                A Legacy of <br />
                <span className="text-[#0B132B]">Engineering Excellence</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                From our foundation in 2003 to becoming a trusted partner in power infrastructure, our journey has been driven by quality, innovation and customer trust.
              </p>
            </div>

            {/* Vertical Milestone Flow with Vertical Connecting Line */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 ml-3 sm:ml-4 space-y-9 sm:space-y-10">
              {journeyMilestones.map((milestone) => (
                <div key={milestone.year} className="relative group">
                  {/* Red Circular Marker Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#E31E24] ring-4 ring-white shadow-xs" />

                  {/* Thumbnail Image */}
                  <div className="relative w-40 sm:w-48 aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-slate-200/90 bg-slate-100 mb-3">
                    <Image
                      src={milestone.image}
                      alt={milestone.imageAlt}
                      fill
                      sizes="200px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <span className="block text-lg sm:text-xl font-black text-[#E31E24] font-sans leading-none tracking-tight mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0B132B] mb-1 leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg font-normal">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENGINEERING & MANUFACTURING (OUR CAPABILITIES)
         ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white text-neutral-900 relative overflow-hidden border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Number, Eyebrow, Heading & Paragraph (~42%) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Number Badge & Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extralight text-neutral-300 tracking-tighter">03</span>
                <span className="text-xl text-[#E31E24] font-light">/</span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24]">
                  OUR CAPABILITIES
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0f172a] leading-[1.16] tracking-tight font-sans">
                Engineering <br />
                <span className="text-[#0f172a]">with Precision</span>
              </h2>

              {/* Paragraph */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-md">
                Our in-house manufacturing capabilities, modern infrastructure and skilled team enable us to deliver high-performance electrical components that meet industry standards.
              </p>
            </div>

            {/* Middle Column: Slanted CNC Manufacturing Image (~42%) */}
            <div className="lg:col-span-4 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-[16/11]">
                {/* Red Geometric Diagonal Accent Line */}
                <div
                  className="absolute -inset-2.5 pointer-events-none rounded-xl z-0"
                  style={{
                    border: '2px solid rgba(227, 30, 36, 0.45)',
                    clipPath: 'polygon(12% 0, 100% 0, 88% 100%, 0 100%)'
                  }}
                />

                {/* Slanted Image Container */}
                <div
                  className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-100 shadow-xl border border-neutral-200 z-10"
                  style={{
                    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)'
                  }}
                >
                  <Image
                    src="/images/slide-manufacturing.jpg"
                    alt="Precision Engineering and High Voltage Hardware Manufacturing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: 4 Capability Feature Items (~16%) */}
            <div className="lg:col-span-3 space-y-4 pt-4 lg:pt-0">
              {capabilities.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-neutral-50/80 border border-neutral-200/80 hover:border-red-200 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[#E31E24] flex items-center justify-center flex-shrink-0">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#0f172a] leading-tight">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR APPROACH (Dark Navy Horizontal Connected Process)
         ========================================================================= */}
      <section className="py-16 lg:py-22 bg-[#060c18] text-white relative overflow-hidden border-t border-slate-800/80">
        {/* Subtle Background Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none opacity-[0.05] mix-blend-screen overflow-hidden z-0">
          <Image
            src="/images/slide-substation.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center filter invert grayscale"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-16 pb-6 border-b border-slate-800/70">
            <div className="lg:col-span-6 space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31E24]">
                <span className="w-5 h-0.5 bg-[#E31E24]" />
                <span>OUR APPROACH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-white leading-[1.16] tracking-tight font-sans">
                From Requirements <br />
                <span className="text-white">to Reliable Solutions</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-lg">
                We work closely with our customers to understand their requirements and deliver engineered solutions that ensure safety, reliability and long-term performance in power infrastructure projects.
              </p>
            </div>
          </div>

          {/* Bottom 4-Step Connected Horizontal Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {approachSteps.map((step, idx) => {
              const isLast = idx === approachSteps.length - 1;
              return (
                <div key={step.number} className="relative flex flex-col justify-between group">
                  <div>
                    {/* Top Row: Circular Red Number & Arrow */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-full border-2 border-[#E31E24] bg-slate-900 text-white flex items-center justify-center font-bold font-mono text-sm group-hover:bg-[#E31E24] transition-colors shadow-xs">
                        {step.number}
                      </div>

                      {/* Connecting Arrow for Desktop */}
                      {!isLast && (
                        <div className="hidden lg:flex items-center text-slate-600 flex-1 px-3">
                          <div className="w-full h-[1px] bg-slate-800" />
                          <ArrowRight className="w-4 h-4 ml-1 text-slate-600 flex-shrink-0" />
                        </div>
                      )}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-[#E31E24] transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CTA SECTION (Reuses Home CTA component)
         ========================================================================= */}
      <CTASection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* =========================================================================
          SECTION 7: FOOTER (Reuses Home Footer component)
         ========================================================================= */}
      <Footer />

      {/* RFQ / Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </main>
  );
}

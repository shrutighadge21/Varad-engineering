'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VaradLogo from './VaradLogo';
import { COMPANY_DETAILS } from '@/data/products';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  ArrowUp,
  User
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Areas of Expertise', href: '/#expertise' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const serviceLinks = [
    { label: 'Connectors & Clamps', href: '/#services' },
    { label: 'Substation Hardware', href: '/#services' },
    { label: 'Transmission Line Hardware', href: '/#services' },
    { label: 'Custom Engineering Solutions', href: '/#services' },
    { label: 'Quality & Testing', href: '/about' }
  ];

  return (
    <footer id="contact" className="relative bg-[#060c18] text-white overflow-hidden border-t border-slate-800/90">
      {/* Subtle Technical Transmission Line Watermark on Far Right */}
      <div className="absolute right-0 bottom-0 w-80 lg:w-[420px] h-full pointer-events-none opacity-[0.05] mix-blend-screen overflow-hidden z-0 hidden lg:block">
        <Image
          src="/images/impact/impact-01-transmission.jpg"
          alt=""
          fill
          className="object-contain object-right-bottom filter invert grayscale"
          aria-hidden="true"
        />
      </div>

      {/* Main Footer Container (1.35fr | 0.8fr | 1.0fr | 1.3fr with 70–90px Vertical Padding) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.3fr] gap-8 md:gap-10 lg:gap-0 items-start">
          {/* =========================================================================
              COLUMN 1: BRANDING & CREDIBILITY (~1.35fr)
             ========================================================================= */}
          <div className="min-w-0 space-y-4 lg:pr-8 xl:pr-10 lg:border-r border-slate-800/70">
            {/* Logo & Company Title */}
            <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <VaradLogo size="md" />
              <div>
                <span className="block text-lg font-black tracking-tight text-white font-sans uppercase leading-none">
                  Varad Engineering
                </span>
                <span className="block text-[10px] font-bold tracking-widest text-[#E31E24] uppercase mt-1">
                  Powering Connections
                </span>
              </div>
            </Link>

            {/* Concise Description */}
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-sm">
              Manufacturing precision-engineered electrical connectors, clamps, and custom-built solutions for a stronger, more reliable power infrastructure.
            </p>

            {/* CPRI Credibility Badge */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
              <span>Tested &amp; Approved by <strong>C.P.R.I., Bangalore</strong></span>
            </div>

            {/* Social Media Row: WhatsApp Only */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_DETAILS.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Varad Engineering, I would like to discuss my requirements.')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-[#E31E24] hover:border-[#E31E24] flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =========================================================================
              COLUMN 2: NAVIGATION (~0.8fr)
             ========================================================================= */}
          <div className="min-w-0 space-y-3.5 lg:px-8 xl:px-10 lg:border-r border-slate-800/70">
            <h4 className="text-sm font-bold tracking-wider text-white font-sans uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-400">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 hover:text-[#E31E24] transition-colors py-0.5 group"
                  >
                    <span className="text-[#E31E24] font-bold text-xs group-hover:translate-x-0.5 transition-transform">&gt;</span>
                    <span className="truncate">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              COLUMN 3: OUR SERVICES (~1.0fr)
             ========================================================================= */}
          <div className="min-w-0 space-y-3.5 lg:px-8 xl:px-10 lg:border-r border-slate-800/70">
            <h4 className="text-sm font-bold tracking-wider text-white font-sans uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 hover:text-[#E31E24] transition-colors py-0.5 group"
                  >
                    <span className="text-[#E31E24] font-bold text-xs group-hover:translate-x-0.5 transition-transform flex-shrink-0">&gt;</span>
                    <span className="leading-snug">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              COLUMN 4: CONTACT US (~1.3fr)
             ========================================================================= */}
          <div className="min-w-0 space-y-3.5 lg:pl-8 xl:pl-10">
            <h4 className="text-sm font-bold tracking-wider text-white font-sans uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-300">
              {/* Contact Person */}
              <li className="flex items-start gap-3">
                <User className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">{COMPANY_DETAILS.contactPerson}</span>
                  <span className="text-slate-400 text-xs">Varad Engineering</span>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-medium text-slate-200 whitespace-nowrap"
                >
                  {COMPANY_DETAILS.displayPhone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white transition-colors text-slate-200 break-words"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-slate-300 text-xs sm:text-[13px]">
                  <span className="text-white font-medium block">M/s. Varad Engineering</span>
                  Plot No. 78, Gat No. 447, <br />
                  Nr Vinzai Comp, Wadmukhwadi, <br />
                  Charholi, Pune – 412 105. <br />
                  Maharashtra, India.
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM FOOTER BAR: Copyright, Legal Links & Back to Top
         ========================================================================= */}
      <div className="relative z-10 bg-[#040810] border-t border-slate-800/80 py-5 px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Varad Engineering. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-xs text-slate-400 text-center sm:text-right">
              <span>Designed and Developed by </span>
              <a
                href="https://www.qirotec.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#E31E24] hover:underline transition-colors font-medium"
              >
                Qiro Tech Innovation Pvt. Ltd.
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#E31E24] text-slate-400 hover:text-white border border-slate-700/80 flex items-center justify-center transition-all duration-300 shadow cursor-pointer flex-shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

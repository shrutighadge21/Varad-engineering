'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import VaradLogo from './VaradLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Exactly the 5 requested navbar links
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Contact Us', href: '/#contact' }
  ];

  return (
    <>
      {/* Clean, Spacious, White Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
          scrolled
            ? 'shadow-sm border-b border-neutral-200/90 py-3.5'
            : 'border-b border-neutral-200/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: EXACT ORIGINAL LOGO ONLY (No text beside or below) */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#E31E24] rounded-lg p-0.5"
            aria-label="Varad Engineering Home"
          >
            <VaradLogo size="md" />
          </Link>

          {/* Center / Navigation Links (16px Font Size, Clean & Readable) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[16px] font-medium text-neutral-800 hover:text-[#E31E24] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E31E24] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button Only */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#E31E24] hover:bg-[#C9181E] text-white text-[15px] font-bold tracking-wide transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onOpenEnquiry}
              className="px-3.5 py-1.5 rounded bg-[#E31E24] text-white text-xs font-bold tracking-wide"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Smooth Left-to-Right slide) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 bottom-0 left-0 w-[85%] max-w-sm bg-white p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            {/* Header: Logo only */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
              <VaradLogo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Exactly the 5 links */}
            <nav className="mt-6 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 rounded-lg text-[16px] font-medium text-neutral-800 hover:text-[#E31E24] hover:bg-neutral-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom CTA */}
          <div className="pt-6 border-t border-neutral-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white font-bold text-[15px] shadow-md transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

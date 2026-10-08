'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#E31E24] selection:text-white">
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Page Header */}
      <section className="bg-neutral-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E31E24]">
              COMPANY PROFILE
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              About Varad Engineering
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Manufacturers of high-quality electrical clamps, connectors, and custom-built engineering products for power transmission and substation applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100">
                <Image
                  src="/images/about-transmission-clamp.jpg"
                  alt="Varad Engineering Precision Hardware"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                Established Experience in High-Voltage Engineering
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  Established in 2003 in Pune, Maharashtra, Varad Engineering has grown to become a trusted supplier of electrical connectors, clamps, and transmission fittings to premier power utilities and infrastructure contractors.
                </p>
                <p>
                  Our manufacturing capabilities span casting, precision CNC machining, forging, and fabrication across aluminium alloys, electrolytic copper, brass, and hot-dip galvanized mild steel (MS HDGI).
                </p>
                <p>
                  All products are engineered to conform to stringent national specifications and are tested and approved by C.P.R.I. Bangalore for mechanical grip strength, temperature rise, and short-circuit withstand capabilities.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#E31E24] hover:bg-[#C9181E] text-white text-sm font-bold tracking-wide transition-all shadow-sm hover:shadow"
                >
                  <span>Request Technical RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </main>
  );
}

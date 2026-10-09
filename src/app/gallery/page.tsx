'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Filter,
  ArrowRight,
  Maximize2,
  Layers,
  Wrench,
  Cpu,
  Activity,
  Factory,
  Camera,
  Info
} from 'lucide-react';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string | undefined>(undefined);

  // Filtered Products
  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleOpenEnquiry = (productName?: string) => {
    setEnquiryProduct(productName);
    setIsEnquiryOpen(true);
  };

  // Authentic Workshop and Manufacturing Facility Photos
  const facilityPhotos = [
    {
      title: 'Varad Engineering Manufacturing Plant Floor',
      category: 'Manufacturing Floor',
      description: 'Main workshop floor with precision machining bays and fabrication stations.',
      image: '/images/varad-plant.jpg'
    },
    {
      title: 'Precision Machining & Lathe Operations',
      category: 'In-House Tooling',
      description: 'Heavy-duty machining of high-conductivity aluminium alloy and copper fittings.',
      image: '/images/slide-manufacturing.jpg'
    },
    {
      title: 'Machined Connector & Hardware Finished Batch',
      category: 'Finished Assemblies',
      description: 'Batch-tested terminal connectors and clamps awaiting final inspection.',
      image: '/images/slide-products.jpg'
    },
    {
      title: 'High-Voltage Hardware & Galvanized Fasteners',
      category: 'Quality Components',
      description: 'Hot-dip galvanized MS hardware and high-conductivity aluminium clamps.',
      image: '/images/about-engineering-hardware.jpg'
    },
    {
      title: 'Precision Transmission Clamping Hardware',
      category: 'Transmission Line',
      description: 'BPI support clamps and suspension assemblies for overhead high-voltage lines.',
      image: '/images/about-transmission-clamp.jpg'
    },
    {
      title: 'Substation Busbar & Equipment Installation',
      category: 'Substation Bay',
      description: 'High-voltage switchyard equipment connections with Varad expansion terminals.',
      image: '/images/impact/impact-03-substation.jpg'
    },
    {
      title: 'Transmission Line Suspension & Dead-End Assembly',
      category: 'Transmission Grid',
      description: 'Lattice tower insulator string hardware and vibration dampening fittings.',
      image: '/images/impact/impact-01-transmission.jpg'
    },
    {
      title: 'Custom Fabricated Breaker Connecting Plates',
      category: 'Custom Engineering',
      description: 'Bespoke U-type bus adapter plates tailored to client switchgear specifications.',
      image: '/images/impact/impact-04-custom.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#E31E24] selection:text-white">
      {/* 1. Header Navigation */}
      <Header
        activePage="Gallery"
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main className="flex-grow">
        {/* =========================================================================
            HERO HEADER BANNER
           ========================================================================= */}
        <section className="relative bg-[#040810] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-800">
          {/* Subtle Background Power Infrastructure Image */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/why-choose-bg.jpg"
              alt="Electrical substation and transmission power infrastructure"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040810]/95 via-[#081020]/90 to-[#040810]/95" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E31E24] mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-0.5 bg-[#E31E24]" />
              <span>PRODUCT &amp; ENGINEERING GALLERY</span>
              <span className="w-6 sm:w-8 h-0.5 bg-[#E31E24]" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight font-sans max-w-4xl mx-auto mb-4">
              PRECISION HARDWARE. <span className="text-[#E31E24]">VERIFIED RELIABILITY.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Explore our comprehensive 40-product technical catalogue of high-voltage electrical
              connectors, support clamps, terminal connections, and custom-engineered substation hardware.
            </p>

            {/* Quality & CPRI Certification Highlight */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-slate-800 shadow-lg">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E31E24]" />
                <strong>ESTD. 2003</strong> (23+ Years of Manufacturing)
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                <strong>Tested &amp; Approved by C.P.R.I. Bangalore</strong>
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#E31E24]" />
                <strong>H.T. / L.T. / EHV Line Applications</strong>
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            COMPANY PROFILE & SALIENT FEATURES CARD (Matching PDF Reference Style)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Company Profile (~5 cols) */}
            <div className="lg:col-span-5 space-y-3 lg:border-r lg:border-slate-200 lg:pr-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31E24]">
                <span className="w-4 h-0.5 bg-[#E31E24]" />
                <span>COMPANY PROFILE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C] font-sans">
                M/s. Varad Engineering
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Established in the year 2003, Varad Engineering manufactures a wide portfolio of high-grade
                clamps &amp; connectors used for H.T./L.T./E.H.V. transmission lines and substations.
                Equipped with in-house tooling and precision machining to fulfill custom engineering requirements.
              </p>
            </div>

            {/* Right: Salient Features (~7 cols) */}
            <div className="lg:col-span-7 space-y-3 lg:pl-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31E24]">
                <span className="w-4 h-0.5 bg-[#E31E24]" />
                <span>SALIENT FEATURES &amp; QUALITY STANDARDS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>99.99% E.C. Grade Material</strong> (High-conductivity aluminium &amp; copper)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>Homogenous Connection</strong> with ACSR/AAAC conductor lines
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>Reduces Line Loss</strong> &amp; eliminates corona discharge
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E31E24] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>High Fault Conduction</strong> of voltage and short-circuit current
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTERACTIVE CATEGORY FILTER TABS
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C] font-sans">
                Technical Catalogue ({PRODUCTS.length} Products)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Filter by product category or explore individual technical specifications.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#E31E24] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All ({PRODUCTS.length})
              </button>
              {CATEGORIES.map((cat) => {
                const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-[#E31E24] text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat.shortTitle} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            40-PRODUCT TECHNICAL CATALOGUE GRID
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6">
            {filteredProducts.map((product) => {
              // Exact catalog page image reference
              const pageNumStr = String(product.specPage).padStart(2, '0');
              const catalogImgPath = `/images/catalog_extracted/page_${pageNumStr}_1428x1009.jpeg`;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-red-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Image Box with Clean Studio Neutral Framing */}
                  <div className="relative w-full h-52 sm:h-56 bg-gradient-to-b from-slate-100/80 to-white flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
                    {/* Catalog Index Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-[#0B192C] text-white font-mono text-[11px] font-bold shadow-sm">
                        REF #{String(product.specPage).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-700 font-semibold text-[10px] uppercase tracking-wider border border-slate-200 shadow-xs">
                        {product.categoryLabel.split(' ')[0]}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={catalogImgPath}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-2"
                        onError={(e: any) => {
                          // Fallback to general product image if specific page is missing
                          e.currentTarget.src = '/images/slide-products.jpg';
                        }}
                      />
                    </div>
                  </div>

                  {/* Product Details Section */}
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      {/* Product Name */}
                      <h4 className="text-sm sm:text-base font-bold text-[#0B192C] leading-snug group-hover:text-[#E31E24] transition-colors line-clamp-2">
                        {product.name}
                      </h4>

                      {/* Technical Conductor Range */}
                      {product.conductorRange && (
                        <div className="text-[11px] text-slate-500 leading-tight">
                          <span className="font-semibold text-slate-700 block">Conductor Range:</span>
                          <span className="text-slate-600 font-mono line-clamp-2">
                            {product.conductorRange}
                          </span>
                        </div>
                      )}

                      {/* Material */}
                      <div className="text-[11px] text-slate-500 leading-tight flex items-center gap-1">
                        <span className="font-semibold text-slate-700">Material:</span>
                        <span className="text-slate-600">{product.material}</span>
                      </div>
                    </div>

                    {/* Card Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="text-xs font-bold text-slate-700 hover:text-[#0B192C] inline-flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>View Specs</span>
                      </button>

                      <button
                        onClick={() => handleOpenEnquiry(product.name)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-xs font-bold tracking-wide transition-all shadow-xs hover:shadow cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            AUTHENTIC WORKSHOP & MANUFACTURING FACILITIES SHOWCASE
           ========================================================================= */}
        <section className="bg-[#0B192C] text-white py-16 sm:py-20 lg:py-24 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E31E24]">
                <span className="w-6 sm:w-8 h-0.5 bg-[#E31E24]" />
                <span>IN-HOUSE MANUFACTURING &amp; PLANT INFRASTRUCTURE</span>
                <span className="w-6 sm:w-8 h-0.5 bg-[#E31E24]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight tracking-tight font-sans">
                Authentic Workshop &amp; Field Installations
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                High-capacity plant equipment, CNC machining, dedicated casting bays, and rigorous CPRI-compliant testing floor at our Charholi, Pune facility.
              </p>
            </div>

            {/* Facility Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilityPhotos.map((photo) => (
                <div
                  key={photo.title}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative w-full h-52 sm:h-56 overflow-hidden">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#E31E24] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                        {photo.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-1.5 bg-slate-900">
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug font-sans group-hover:text-[#E31E24] transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            TRANSPARENT PHOTOGRAPHY NOTICE & FACTORY AUDIT BOX (Required by PDF Brief)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#E31E24] flex items-center justify-center flex-shrink-0 border border-red-100">
              <Camera className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-[#0B192C] font-sans">
                Product Photography &amp; Technical Catalog Verification
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Varad Engineering maintains authentic product configuration reference drawings and in-house workshop photography for all 40 catalogued product lines. For customized configurations, bespoke utility specifications, or high-resolution technical drawings, please contact our engineering desk.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleOpenEnquiry()}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E31E24] hover:text-[#0B192C] transition-colors uppercase tracking-wider cursor-pointer"
                >
                  <span>Request Full Technical Datasheet &amp; Test Certificates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-56 bg-slate-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4">
              <Image
                src={`/images/catalog_extracted/page_${String(selectedProduct.specPage).padStart(2, '0')}_1428x1009.jpeg`}
                alt={selectedProduct.name}
                fill
                className="object-contain p-2"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0B192C] text-white text-xs font-bold font-mono">
                CAT REF #{String(selectedProduct.specPage).padStart(2, '0')}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#0B192C] mb-2 font-sans">
              {selectedProduct.name}
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p>
                <strong className="text-slate-800">Category:</strong> {selectedProduct.categoryLabel}
              </p>
              <p>
                <strong className="text-slate-800">Material:</strong> {selectedProduct.material}
              </p>
              {selectedProduct.conductorRange && (
                <p>
                  <strong className="text-slate-800">Conductor Compatibility:</strong>{' '}
                  <span className="font-mono">{selectedProduct.conductorRange}</span>
                </p>
              )}
              <p>
                <strong className="text-slate-800">Application:</strong> {selectedProduct.application}
              </p>
              <p className="text-slate-500 text-xs">
                {selectedProduct.description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  const pName = selectedProduct.name;
                  setSelectedProduct(null);
                  handleOpenEnquiry(pName);
                }}
                className="px-6 py-2.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer inline-flex items-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProduct={enquiryProduct}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

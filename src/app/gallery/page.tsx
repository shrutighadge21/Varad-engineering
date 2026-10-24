'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { PRODUCTS, Product } from '@/data/products';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

// Exact extracted catalogue images for each page (1 to 40)
const CATALOG_IMAGES: Record<number, string> = {
  1: '/images/catalog_extracted/page_01_1428x1009.jpeg',
  2: '/images/catalog_extracted/page_02_1428x1009.jpeg',
  3: '/images/catalog_extracted/page_03_1428x1009.jpeg',
  4: '/images/catalog_extracted/page_04_1428x1009.jpeg',
  5: '/images/catalog_extracted/page_05_1428x1009.jpeg',
  6: '/images/catalog_extracted/page_06_1428x1009.jpeg',
  7: '/images/catalog_extracted/page_07_1428x1009.jpeg',
  8: '/images/catalog_extracted/page_08_1428x1009.jpeg',
  9: '/images/catalog_extracted/page_09_1428x1009.jpeg',
  10: '/images/catalog_extracted/page_10_1428x1009.jpeg',
  11: '/images/catalog_extracted/page_11_1428x1009.jpeg',
  12: '/images/catalog_extracted/page_12_1307x923.jpeg',
  13: '/images/catalog_extracted/page_13_1428x1009.jpeg',
  14: '/images/catalog_extracted/page_14_1431x1105.jpeg',
  15: '/images/catalog_extracted/page_15_1431x1105.jpeg',
  16: '/images/catalog_extracted/page_16_1431x1104.jpeg',
  17: '/images/catalog_extracted/page_17_1428x1009.jpeg',
  18: '/images/catalog_extracted/page_18_1431x1104.jpeg',
  19: '/images/catalog_extracted/page_19_1431x1104.jpeg',
  20: '/images/catalog_extracted/page_20_1431x1104.jpeg',
  21: '/images/catalog_extracted/page_21_1431x1105.jpeg',
  22: '/images/catalog_extracted/page_22_1431x1104.jpeg',
  23: '/images/catalog_extracted/page_23_1431x1104.jpeg',
  24: '/images/catalog_extracted/page_24_1431x1104.jpeg',
  25: '/images/catalog_extracted/page_25_1431x1104.jpeg',
  26: '/images/catalog_extracted/page_26_1431x1104.jpeg',
  27: '/images/catalog_extracted/page_27_1431x1104.jpeg',
  28: '/images/catalog_extracted/page_28_1431x1104.jpeg',
  29: '/images/catalog_extracted/page_29_1431x1104.jpeg',
  30: '/images/catalog_extracted/page_30_970x1256.jpeg',
  31: '/images/catalog_extracted/page_31_1431x1104.jpeg',
  32: '/images/catalog_extracted/page_32_1431x1104.jpeg',
  33: '/images/catalog_extracted/page_33_1428x1009.jpeg',
  34: '/images/catalog_extracted/page_34_1428x1009.jpeg',
  35: '/images/catalog_extracted/page_35_1467x1037.jpeg',
  36: '/images/catalog_extracted/page_36_1542x1089.jpeg',
  37: '/images/catalog_extracted/page_37_1458x1031.jpeg',
  38: '/images/catalog_extracted/page_38_1516x1071.jpeg',
  39: '/images/catalog_extracted/page_39_1458x1031.jpeg',
  40: '/images/catalog_extracted/page_40_1565x1106.jpeg',
};

interface GalleryCategory {
  id: string;
  label: string;
}

const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'all', label: 'All Products' },
  { id: 'palm-connectors', label: 'Palm Connectors' },
  { id: 'ct-connectors', label: 'CT Connectors' },
  { id: 't-connectors', label: 'T-Connectors' },
  { id: 'terminal-connectors', label: 'Terminal Connectors' },
  { id: 'clamps-support', label: 'Clamps & Support Clamps' },
  { id: 'spacers', label: 'Spacers' },
  { id: 'other-hardware', label: 'Other Electrical Hardware' }
];

// Map each product by its catalogue page (1 to 40) into the 7 categories
function getProductGalleryCategory(specPage: number | undefined): string {
  if (!specPage) return 'other-hardware';
  // 1. Palm Connectors: pages 1 to 4 (4 products)
  if (specPage >= 1 && specPage <= 4) return 'palm-connectors';
  // 2. CT Connectors: pages 5 to 7 (3 products)
  if (specPage >= 5 && specPage <= 7) return 'ct-connectors';
  // 3. T-Connectors: pages 11 to 13 (3 products)
  if (specPage >= 11 && specPage <= 13) return 't-connectors';
  // 4. Terminal Connectors: pages 14, 18-28, 31 (13 products)
  if ([14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31].includes(specPage)) return 'terminal-connectors';
  // 5. Clamps & Support Clamps: pages 9, 10, 15, 16, 17, 30, 33, 34 (8 products)
  if ([9, 10, 15, 16, 17, 30, 33, 34].includes(specPage)) return 'clamps-support';
  // 6. Spacers: pages 8, 32 (2 products)
  if ([8, 32].includes(specPage)) return 'spacers';
  // 7. Other Electrical Hardware: pages 29, 35-40 (7 products)
  if ([29, 35, 36, 37, 38, 39, 40].includes(specPage)) return 'other-hardware';

  return 'other-hardware';
}

function getGalleryCategoryName(categoryId: string): string {
  const found = GALLERY_CATEGORIES.find((c) => c.id === categoryId);
  return found ? found.label : 'Electrical Hardware';
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string | undefined>(undefined);

  // Sort products strictly in technical catalogue progression (pages 1 to 40)
  const sortedProducts = useMemo(() => {
    return [...PRODUCTS].sort((a, b) => (a.specPage || 0) - (b.specPage || 0));
  }, []);

  // Filtered products list based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return sortedProducts;
    return sortedProducts.filter((p) => getProductGalleryCategory(p.specPage) === activeCategory);
  }, [activeCategory, sortedProducts]);

  const handleOpenEnquiry = (productName?: string) => {
    setEnquiryProduct(productName);
    setIsEnquiryOpen(true);
  };

  const closePopup = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  // Previous & Next navigation inside lightbox
  const handlePrev = useCallback(() => {
    if (!selectedProduct || filteredProducts.length === 0) return;
    const idx = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const newIdx = idx <= 0 ? filteredProducts.length - 1 : idx - 1;
    setSelectedProduct(filteredProducts[newIdx]);
  }, [filteredProducts, selectedProduct]);

  const handleNext = useCallback(() => {
    if (!selectedProduct || filteredProducts.length === 0) return;
    const idx = filteredProducts.findIndex((p) => p.id === selectedProduct.id);
    const newIdx = idx >= filteredProducts.length - 1 || idx === -1 ? 0 : idx + 1;
    setSelectedProduct(filteredProducts[newIdx]);
  }, [filteredProducts, selectedProduct]);

  // Current product index within the filtered list
  const currentIndex = useMemo(() => {
    if (!selectedProduct) return -1;
    return filteredProducts.findIndex((p) => p.id === selectedProduct.id);
  }, [selectedProduct, filteredProducts]);

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight) and background scroll locking
  useEffect(() => {
    if (!selectedProduct) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProduct, handlePrev, handleNext, closePopup]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#E31E24] selection:text-white">
      {/* 1. Header Navigation with Gallery active */}
      <Header
        activePage="Gallery"
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main className="flex-grow">
        {/* =========================================================================
            2. GALLERY HERO SECTION (Left-aligned, Compact, Industrial Substation BG)
           ========================================================================= */}
        <section className="relative bg-[#040810] text-white py-12 sm:py-16 lg:py-20 overflow-hidden border-b border-slate-800">
          {/* Electrical Substation Background Image */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/slide-substation.jpg"
              alt="Electrical substation and high-voltage power transmission infrastructure"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center opacity-30"
            />
            {/* Subtle dark navy/blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040810]/95 via-[#071328]/90 to-[#040810]/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
            {/* Breadcrumb: HOME > OUR GALLERY */}
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                </li>
                <li className="text-slate-500 font-normal select-none" aria-hidden="true">
                  &gt;
                </li>
                <li className="text-[#E31E24]" aria-current="page">
                  OUR GALLERY
                </li>
              </ol>
            </nav>

            {/* Main Heading: OUR GALLERY */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-sans">
              OUR GALLERY
            </h1>

            {/* Supporting Text */}
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
              Explore our electrical connectors, precision-engineered components and power infrastructure solutions.
            </p>
          </div>
        </section>

        {/* =========================================================================
            3. CATEGORY FILTERS (Clean horizontal tabs with dynamic counts)
           ========================================================================= */}
        <section className="bg-white border-b border-slate-200/90 py-4 sm:py-5 sticky top-0 z-30 shadow-xs backdrop-blur-md bg-white/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 sm:flex-wrap">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === 'all'
                    ? sortedProducts.length
                    : sortedProducts.filter((p) => getProductGalleryCategory(p.specPage) === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                    }}
                    className={`px-3.5 py-2 sm:px-4 sm:py-2 rounded-md text-xs sm:text-[13px] font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#E31E24] text-white border border-[#E31E24] shadow-md shadow-red-600/25 font-bold'
                        : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] font-semibold ${
                        isActive ? 'text-white/90' : 'text-slate-400'
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. CLEAN & COMPACT PRODUCT IMAGE GRID (2 cols on mobile, 3 on tablet, 4 on desktop)
           ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 pb-14 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {filteredProducts.map((product) => {
              const imageSrc =
                CATALOG_IMAGES[product.specPage || 1] || '/images/slide-products.jpg';

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group relative bg-white rounded-xl border border-slate-200/90 hover:border-[#E31E24] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col hover:-translate-y-0.5"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProduct(product);
                    }
                  }}
                  aria-label={`Inspect ${product.name}`}
                >
                  {/* Card Viewport for Image (Consistent 4:3 Aspect Ratio) */}
                  <div className="relative w-full aspect-[4/3] bg-[#f8fafc] flex items-center justify-center overflow-hidden p-2 sm:p-3 select-none">
                    {/* Product Image */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={imageSrc}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain p-1.5 sm:p-2 group-hover:scale-105 transition-transform duration-300 ease-out"
                      />
                    </div>

                    {/* Smooth Red Hover Overlay Panel Across Lower Portion (Desktop Hover, 250ms transition) */}
                    <div className="absolute bottom-0 inset-x-0 h-[40%] min-h-[48px] bg-gradient-to-t from-[#B91C1C]/95 via-[#DC2626]/90 to-[#E31E24]/85 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-250 ease-out flex items-center px-4 z-10 pointer-events-none hidden sm:flex">
                      <div className="flex items-center justify-between w-full gap-2 min-w-0">
                        {/* Correct Product Name on Left */}
                        <span className="text-white text-xs sm:text-[13px] font-bold leading-tight line-clamp-2 min-w-0 font-sans">
                          {product.name}
                        </span>
                        {/* Small Arrow Icon on Right */}
                        <div className="w-7 h-7 rounded bg-white/25 text-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean & Compact Bottom Bar with "Inspect ↗" Option */}
                  <div className="px-2.5 py-2 sm:px-4 sm:py-2.5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                    {/* On touchscreens without hover, keep product name accessible */}
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-800 line-clamp-1 w-full sm:hidden">
                      {product.name}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-[#E31E24] hover:text-[#B91C1C] group-hover:translate-x-0.5 transition-all cursor-pointer flex-shrink-0 self-end sm:self-auto"
                    >
                      Inspect ↗
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* =========================================================================
          5. INTERACTIVE PRODUCT DETAIL POP-UP / MODAL
         ========================================================================= */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 lg:p-8 animate-fade-in"
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-product-name"
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Category, Counter & Visible Close Button */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="px-2.5 py-1 rounded bg-[#0B192C] text-white font-mono text-xs font-bold">
                  CAT REF #{String(selectedProduct.specPage).padStart(2, '0')}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E31E24] truncate">
                  {getGalleryCategoryName(getProductGalleryCategory(selectedProduct.specPage))}
                </span>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                {/* Index Counter */}
                <span className="text-xs font-mono font-semibold text-slate-500">
                  {currentIndex >= 0
                    ? `${String(currentIndex + 1).padStart(2, '0')} / ${String(filteredProducts.length).padStart(2, '0')}`
                    : `${String(selectedProduct.specPage || 1).padStart(2, '0')} / 40`}
                </span>

                {/* Visible Close Button */}
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-[#E31E24] border border-slate-200 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close modal (Escape)"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Popup Heading: Correct Product Name at Top */}
            <div className="mb-4">
              <h2
                id="popup-product-name"
                className="text-lg sm:text-2xl font-bold text-[#0B192C] font-sans leading-snug"
              >
                {selectedProduct.name}
              </h2>
            </div>

            {/* Large Product Image with Previous/Next Controls */}
            <div className="relative w-full h-64 sm:h-80 md:h-[380px] lg:h-[420px] bg-gradient-to-b from-slate-50 via-white to-slate-50 flex items-center justify-center p-4 sm:p-6 rounded-xl border border-slate-100 overflow-hidden select-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={CATALOG_IMAGES[selectedProduct.specPage || 1] || '/images/slide-products.jpg'}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 90vw, 800px"
                  priority
                />
              </div>

              {/* Previous Nav Control */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-[#E31E24] text-slate-800 hover:text-white shadow-lg border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer z-20 group"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Next Nav Control */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-[#E31E24] text-slate-800 hover:text-white shadow-lg border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer z-20 group"
                aria-label="Next product"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Available Details from Catalogue Data */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 max-w-xl text-xs sm:text-[13px] text-slate-600">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-800">Material:</span>
                    <span>{selectedProduct.material}</span>
                  </div>
                  {selectedProduct.conductorRange && (
                    <div className="flex items-start gap-1.5 sm:col-span-2">
                      <span className="font-semibold text-slate-800 flex-shrink-0">Conductor Range:</span>
                      <span className="font-mono text-slate-700">{selectedProduct.conductorRange}</span>
                    </div>
                  )}
                  {selectedProduct.application && (
                    <div className="flex items-start gap-1.5 sm:col-span-2">
                      <span className="font-semibold text-slate-800 flex-shrink-0">Application:</span>
                      <span className="text-slate-600">{selectedProduct.application}</span>
                    </div>
                  )}
                  {selectedProduct.description && (
                    <div className="sm:col-span-2 text-slate-500 text-[11px] leading-relaxed pt-0.5">
                      {selectedProduct.description}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button: Request Quotation */}
              <div className="flex items-center gap-2.5 flex-shrink-0 pt-2 md:pt-0">
                <button
                  type="button"
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    closePopup();
                    handleOpenEnquiry(prodName);
                  }}
                  className="px-4.5 py-2.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
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

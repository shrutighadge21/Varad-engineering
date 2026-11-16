'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import {
  PRODUCTS,
  Product,
  PRODUCT_CATEGORIES,
} from '@/data/products';
import {
  LayoutGrid,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  PackageOpen,
  Layers
} from 'lucide-react';

function ProductsExplorer() {
  const searchParams = useSearchParams();
  const initialCategoryParam = searchParams.get('category');
  const initialProductParam = searchParams.get('product');

  // Verify initial category from query param if provided
  const initialCategory = useMemo(() => {
    if (initialCategoryParam && PRODUCT_CATEGORIES.some((c) => c.id === initialCategoryParam)) {
      return initialCategoryParam;
    }
    return PRODUCT_CATEGORIES[0].id;
  }, [initialCategoryParam]);

  const [activeCategoryId, setActiveCategoryId] = useState<string>(initialCategory);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProductName, setEnquiryProductName] = useState<string | undefined>(undefined);

  // Products belonging to currently active category
  const activeCategoryProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  // Selected product in the active category
  const [selectedProductId, setSelectedProductId] = useState<string>(() => {
    if (initialProductParam) {
      const match = PRODUCTS.find((p) => p.id === initialProductParam);
      if (match) return match.id;
    }
    const defaultInCat = PRODUCTS.filter((p) => p.categoryId === initialCategory);
    return defaultInCat.length > 0 ? defaultInCat[0].id : (PRODUCTS[0]?.id || '');
  });

  // Active category object
  const activeCategory = useMemo(() => {
    return PRODUCT_CATEGORIES.find((c) => c.id === activeCategoryId) || PRODUCT_CATEGORIES[0];
  }, [activeCategoryId]);

  // Currently selected product object (guaranteeing valid product fallback)
  const selectedProduct: Product | undefined = useMemo(() => {
    const found = activeCategoryProducts.find((p) => p.id === selectedProductId);
    if (found) return found;
    return activeCategoryProducts[0];
  }, [activeCategoryProducts, selectedProductId]);

  // Select a product and reset the active image index to 0
  const selectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setSelectedImageIndex(0);
  };

  // Handle switching categories
  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setSelectedImageIndex(0);
    const productsInNewCat = PRODUCTS.filter((p) => p.categoryId === categoryId);
    if (productsInNewCat.length > 0) {
      setSelectedProductId(productsInNewCat[0].id);
    }
  };

  // Handle cycling products with previous/next buttons
  const currentIndex = useMemo(() => {
    if (!selectedProduct) return -1;
    return activeCategoryProducts.findIndex((p) => p.id === selectedProduct.id);
  }, [activeCategoryProducts, selectedProduct]);

  const handlePrevProduct = () => {
    if (activeCategoryProducts.length <= 1 || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + activeCategoryProducts.length) % activeCategoryProducts.length;
    selectProduct(activeCategoryProducts[prevIndex].id);
  };

  const handleNextProduct = () => {
    if (activeCategoryProducts.length <= 1 || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % activeCategoryProducts.length;
    selectProduct(activeCategoryProducts[nextIndex].id);
  };

  const handleOpenEnquiry = (prodName?: string) => {
    const targetProduct = prodName || selectedProduct?.name;
    setEnquiryProductName(targetProduct);
    setIsEnquiryOpen(true);
  };

  // Helper to get all image views for the selected product
  const productImages = useMemo(() => {
    if (!selectedProduct) return [];
    if (selectedProduct.gallery && selectedProduct.gallery.length > 0) {
      return selectedProduct.gallery;
    }
    if (selectedProduct.image) {
      return [selectedProduct.image];
    }
    return [];
  }, [selectedProduct]);

  // Active main image source
  const activeImageSrc = productImages[selectedImageIndex] || productImages[0] || null;

  // Thumbnail strip items for quick switching between products in category
  const thumbnailStripProducts = useMemo(() => {
    if (activeCategoryProducts.length <= 4) {
      return activeCategoryProducts;
    }
    const start = Math.max(0, Math.min(currentIndex - 1, activeCategoryProducts.length - 4));
    return activeCategoryProducts.slice(start, start + 4);
  }, [activeCategoryProducts, currentIndex]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-[#E31E24] selection:text-white">
      {/* 1. Navbar with active state on Products */}
      <Header
        activePage="Products"
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 2. Hero Section: Compact industrial hero banner */}
      <section className="relative bg-[#0B192C] text-white overflow-hidden py-10 sm:py-14 lg:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slide-substation.jpg"
            alt="Varad Engineering Electrical Substation and Power Transmission"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#0B192C]/90 to-[#07111F]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-slate-500">&gt;</span>
            <span className="text-[#E31E24] font-semibold">Products</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase tracking-tight text-white font-sans leading-none mb-3 sm:mb-4">
            OUR PRODUCTS
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-normal">
            Precision-engineered electrical connectors and hardware designed for reliable power transmission and substation applications.
          </p>
        </div>
      </section>

      {/* 3. Six Category Navigation Tabs (Without Count Numbers) */}
      <section className="bg-white border-b border-slate-200 sticky top-[69px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {PRODUCT_CATEGORIES.map((category) => {
              const isSelected = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`min-h-[56px] px-2.5 py-2.5 rounded-lg text-center flex items-center justify-center transition-all duration-200 cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#E31E24] text-white shadow-sm ring-1 ring-[#E31E24]'
                      : 'bg-white text-[#0B192C] border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="text-[11px] sm:text-xs font-bold leading-tight text-center break-words line-clamp-2">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Main Product Explorer: Two-Column Product Explorer */}
      <main className="flex-1 py-6 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* =========================================================================
                LEFT PANEL: Product List (35% on Desktop)
               ========================================================================= */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              {/* Header displaying selected category name with grid icon */}
              <div className="bg-[#0B192C] text-white px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3">
                <LayoutGrid className="w-5 h-5 text-white flex-shrink-0" />
                <h2 className="text-sm sm:text-base font-bold tracking-wide text-white truncate font-sans">
                  {activeCategory.label}
                </h2>
              </div>

              {/* Scrollable list of category products */}
              <div className="max-h-[380px] sm:max-h-[500px] lg:max-h-[680px] overflow-y-auto divide-y divide-slate-100">
                {activeCategoryProducts.length > 0 ? (
                  activeCategoryProducts.map((product, idx) => {
                    const isSelected = selectedProduct?.id === product.id;
                    const prevProduct = idx > 0 ? activeCategoryProducts[idx - 1] : null;
                    const showGroupHeader = product.subGroup && (!prevProduct || prevProduct.subGroup !== product.subGroup);

                    return (
                      <React.Fragment key={product.id}>
                        {showGroupHeader && (
                          <div className="bg-slate-100/90 px-4 py-2 border-y border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-slate-500" />
                            <span>{product.subGroup}</span>
                          </div>
                        )}
                        <button
                          onClick={() => selectProduct(product.id)}
                          className={`w-full text-left px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3 transition-colors cursor-pointer group ${
                            isSelected
                              ? 'bg-red-50/80 border-l-4 border-l-[#E31E24]'
                              : 'bg-white hover:bg-slate-50 border-l-4 border-l-transparent'
                          }`}
                          data-selected={isSelected}
                        >
                          {/* Thumbnail image or placeholder */}
                          <div
                            className={`relative w-12 h-12 rounded-lg flex-shrink-0 p-1 flex items-center justify-center overflow-hidden transition-colors ${
                              isSelected
                                ? 'bg-white border border-red-200 shadow-2xs'
                                : 'bg-slate-50 border border-slate-200/90'
                            }`}
                          >
                            {product.image ? (
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="48px"
                                className="object-contain p-0.5"
                              />
                            ) : (
                              <PackageOpen className="w-5 h-5 text-slate-400" />
                            )}
                          </div>

                          {/* Product Name & Subtext */}
                          <div className="flex-1 min-w-0 pr-1">
                            <p
                              className={`text-xs sm:text-[13px] leading-snug line-clamp-2 transition-colors ${
                                isSelected
                                  ? 'text-[#E31E24] font-bold'
                                  : 'text-slate-800 font-medium group-hover:text-[#0B192C]'
                              }`}
                            >
                              {product.name}
                            </p>
                            {product.conductorRange && (
                              <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                                {product.conductorRange}
                              </p>
                            )}
                          </div>

                          {/* Arrow indicator */}
                          <ChevronRight
                            className={`w-4 h-4 flex-shrink-0 transition-transform ${
                              isSelected
                                ? 'text-[#E31E24] translate-x-0.5'
                                : 'text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5'
                            }`}
                          />
                        </button>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <div className="py-12 px-6 text-center text-slate-500">
                    <PackageOpen className="w-8 h-8 mx-auto text-slate-400 mb-2" />
                    <p className="text-sm font-medium">Category assets coming soon.</p>
                  </div>
                )}
              </div>
            </div>

            {/* =========================================================================
                RIGHT PANEL: Product Details Card (65% on Desktop)
               ========================================================================= */}
            <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-8 lg:p-10">
              {selectedProduct ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                  
                  {/* Left Side of Detail: Large Image Viewer & Thumbnails */}
                  <div className="md:col-span-6 space-y-4">
                    {/* Main image container */}
                    <div className="relative aspect-[4/3] bg-[#F8FAFC] rounded-xl border border-slate-200/80 p-6 flex items-center justify-center overflow-hidden group">
                      {activeImageSrc ? (
                        <>
                          <Image
                            src={activeImageSrc}
                            alt={selectedProduct.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 420px"
                            priority
                            className="object-contain p-4 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                          />

                          {/* Previous product button */}
                          {activeCategoryProducts.length > 1 && (
                            <button
                              onClick={handlePrevProduct}
                              aria-label="Previous product"
                              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#E31E24] hover:bg-white transition-all cursor-pointer z-10"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                          )}

                          {/* Next product button */}
                          {activeCategoryProducts.length > 1 && (
                            <button
                              onClick={handleNextProduct}
                              aria-label="Next product"
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 shadow-md border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#E31E24] hover:bg-white transition-all cursor-pointer z-10"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-6">
                          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3 border border-slate-200">
                            <PackageOpen className="w-8 h-8" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full mb-2">
                            Specification Ready
                          </span>
                          <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                            Product specifications and engineering details are ready. High-resolution photographs will be updated once client assets are provided.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Thumbnail gallery: Multiple views of current product OR nearby products */}
                    {productImages.length > 1 ? (
                      <div className="pt-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          Available Views ({productImages.length})
                        </p>
                        <div className="flex items-center gap-2.5">
                          {productImages.map((imgSrc, idx) => {
                            const isCurrentView = idx === selectedImageIndex;
                            return (
                              <button
                                key={idx}
                                onClick={() => setSelectedImageIndex(idx)}
                                className={`relative w-16 h-16 rounded-lg p-1.5 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${
                                  isCurrentView
                                    ? 'border-2 border-[#E31E24] bg-white shadow-xs ring-1 ring-[#E31E24]/20'
                                    : 'border border-slate-200 bg-[#F8FAFC] hover:border-slate-300'
                                }`}
                                title={`View ${idx + 1}`}
                                aria-label={`View ${idx + 1}`}
                              >
                                <Image
                                  src={imgSrc}
                                  alt={`${selectedProduct.name} View ${idx + 1}`}
                                  fill
                                  sizes="64px"
                                  className="object-contain p-1"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : thumbnailStripProducts.length > 1 ? (
                      <div className="grid grid-cols-4 gap-2.5 pt-1">
                        {thumbnailStripProducts.map((thumbProd) => {
                          const isThumbSelected = thumbProd.id === selectedProduct.id;
                          return (
                            <button
                              key={thumbProd.id}
                              onClick={() => selectProduct(thumbProd.id)}
                              className={`relative aspect-square rounded-lg p-1.5 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${
                                isThumbSelected
                                  ? 'border-2 border-[#E31E24] bg-white shadow-xs'
                                  : 'border border-slate-200 bg-[#F8FAFC] hover:border-slate-300'
                              }`}
                              title={thumbProd.name}
                              aria-label={`Select ${thumbProd.name}`}
                            >
                              {thumbProd.image ? (
                                <Image
                                  src={thumbProd.image}
                                  alt={thumbProd.name}
                                  fill
                                  sizes="80px"
                                  className="object-contain p-1"
                                />
                              ) : (
                                <PackageOpen className="w-6 h-6 text-slate-300" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>

                  {/* Right Side of Detail: Product Info & Technical Specifications */}
                  <div className="md:col-span-6 flex flex-col justify-between">
                    <div>
                      {/* SubGroup badge if available */}
                      {selectedProduct.subGroup && (
                        <div className="mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                            <Layers className="w-3 h-3 text-slate-500" />
                            {selectedProduct.subGroup}
                          </span>
                        </div>
                      )}

                      {/* Prominent product heading */}
                      <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0B192C] tracking-tight leading-tight mb-3 font-sans">
                        {selectedProduct.name}
                      </h3>

                      {/* Product description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {selectedProduct.description}
                      </p>

                      {/* Clean Technical Specification Table */}
                      <div className="space-y-3 py-4 border-t border-b border-slate-100 text-xs sm:text-sm">
                        {/* Category */}
                        <div className="grid grid-cols-12 gap-2 items-baseline">
                          <span className="col-span-4 font-semibold text-[#0B192C]">Category</span>
                          <span className="col-span-1 text-slate-400 text-center">:</span>
                          <span className="col-span-7 text-slate-700 font-medium">
                            {selectedProduct.categoryLabel}
                          </span>
                        </div>

                        {/* Material */}
                        <div className="grid grid-cols-12 gap-2 items-baseline">
                          <span className="col-span-4 font-semibold text-[#0B192C]">Material</span>
                          <span className="col-span-1 text-slate-400 text-center">:</span>
                          <span className="col-span-7 text-slate-700 font-medium">
                            {selectedProduct.material || 'Aluminium / Aluminium Alloy'}
                          </span>
                        </div>

                        {/* Standard */}
                        <div className="grid grid-cols-12 gap-2 items-baseline">
                          <span className="col-span-4 font-semibold text-[#0B192C]">Standard</span>
                          <span className="col-span-1 text-slate-400 text-center">:</span>
                          <span className="col-span-7 text-slate-700">
                            As per industry &amp; C.P.R.I. standards
                          </span>
                        </div>

                        {/* Application */}
                        <div className="grid grid-cols-12 gap-2 items-baseline">
                          <span className="col-span-4 font-semibold text-[#0B192C]">Application</span>
                          <span className="col-span-1 text-slate-400 text-center">:</span>
                          <span className="col-span-7 text-slate-700">
                            {selectedProduct.application}
                          </span>
                        </div>

                        {/* Conductor Range if available */}
                        {selectedProduct.conductorRange && (
                          <div className="grid grid-cols-12 gap-2 items-baseline">
                            <span className="col-span-4 font-semibold text-[#0B192C]">Conductor</span>
                            <span className="col-span-1 text-slate-400 text-center">:</span>
                            <span className="col-span-7 text-slate-700 font-medium text-slate-900">
                              {selectedProduct.conductorRange}
                            </span>
                          </div>
                        )}

                        {/* Testing */}
                        <div className="grid grid-cols-12 gap-2 items-baseline">
                          <span className="col-span-4 font-semibold text-[#0B192C]">Testing</span>
                          <span className="col-span-1 text-slate-400 text-center">:</span>
                          <span className="col-span-7 text-slate-700">
                            Tested &amp; Approved by C.P.R.I., Bangalore
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Red Enquire Now Button */}
                    <div className="pt-6">
                      <Link
                        href={`/contact?product=${encodeURIComponent(selectedProduct.name)}#contact-form`}
                        className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-sm sm:text-base font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                      >
                        <span>Enquire Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-20 text-center text-slate-500">
                  <PackageOpen className="w-12 h-12 mx-auto text-slate-300 mb-3" />
                  <h4 className="text-lg font-bold text-slate-700 mb-1">No Product Selected</h4>
                  <p className="text-sm">Please select a product from the list on the left to view technical details.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      {/* 5. Official Industrial Footer */}
      <Footer />

      {/* RFQ / Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProduct={enquiryProductName}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#E31E24] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsExplorer />
    </Suspense>
  );
}

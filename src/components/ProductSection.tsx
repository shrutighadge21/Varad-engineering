'use client';

import React, { useState, useMemo } from 'react';
import ProductVisual from './ProductVisual';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { Search, ArrowRight, ShieldCheck, FileText, X } from 'lucide-react';

interface ProductSectionProps {
  selectedCategory?: string;
  onOpenEnquiry?: (productName?: string) => void;
}

export default function ProductSection({ selectedCategory = 'all', onOpenEnquiry }: ProductSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [prevSelectedCategory, setPrevSelectedCategory] = useState(selectedCategory);

  // Sync prop changes if parent updates category
  if (selectedCategory !== prevSelectedCategory) {
    setPrevSelectedCategory(selectedCategory);
    if (selectedCategory && selectedCategory !== 'all') {
      setActiveCategory(selectedCategory);
    }
  }

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.conductorRange && item.conductorRange.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchMaterial =
        selectedMaterial === 'all' || item.material.toLowerCase().includes(selectedMaterial.toLowerCase());

      return matchCategory && matchSearch && matchMaterial;
    });
  }, [activeCategory, searchQuery, selectedMaterial]);

  const getVisualType = (category: string, name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('palm') || lower.includes('connector')) return 'palm-connector' as const;
    if (lower.includes('clamp') || lower.includes('bpi') || lower.includes('bus')) return 'clamps-bpi' as const;
    if (lower.includes('terminal') || lower.includes('tube')) return 'terminal-4ips' as const;
    if (lower.includes('suspension') || lower.includes('tension') || lower.includes('spacer')) return 'suspension-hardware' as const;
    if (lower.includes('transformer') || lower.includes('bushing')) return 'transformer-clamp' as const;
    if (lower.includes('earth') || lower.includes('bond')) return 'earthing-bond' as const;
    if (lower.includes('pg')) return 'pg-clamp' as const;
    return 'custom-plates' as const;
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E31E24]">
              <span className="w-6 h-0.5 bg-[#E31E24]" />
              <span>OFFICIAL PRODUCT CATALOGUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-sans">
              Precision Transmission & <br />
              <span className="text-[#E31E24]">Substation Hardware</span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            All 40 specialized catalogued products manufactured by Varad Engineering for Dog, Panther, Zebra, Moose, and Morculla conductors.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-8 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col lg:flex-row gap-4 items-center justify-between shadow-xl">
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product name, conductor (Moose, Zebra)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E31E24]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Material Quick Filter */}
          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 text-xs">
            <span className="text-neutral-500 font-semibold uppercase tracking-wider text-[11px] whitespace-nowrap mr-1">
              Material:
            </span>
            {['all', 'Aluminium', 'Copper', 'MS'].map((mat) => (
              <button
                key={mat}
                onClick={() => setSelectedMaterial(mat)}
                className={`px-3 py-1.5 rounded-md font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedMaterial === mat
                    ? 'bg-[#E31E24] text-white'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {mat === 'all' ? 'All Materials' : mat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#E31E24] text-white shadow-lg shadow-red-900/40'
                : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter((p) => p.category === cat.id).length;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E31E24] text-white shadow-lg shadow-red-900/40'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                <span>{cat.shortTitle}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-black/30 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-neutral-950 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-base">No products match your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSelectedMaterial('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-neutral-800 text-white text-xs font-semibold hover:bg-[#E31E24] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const visualType = getVisualType(product.category, product.name);
              return (
                <div
                  key={product.id}
                  className="group bg-neutral-950 hover:bg-neutral-925 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex-1"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-neutral-800/80">
                      <span className="text-[10px] font-mono text-neutral-500 font-bold">
                        CAT #{product.specPage}
                      </span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                        {product.material}
                      </span>
                    </div>

                    {/* 3D CAD Preview */}
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="aspect-[4/3] w-full my-3 bg-neutral-900/60 rounded-xl p-3 border border-neutral-800/40 flex items-center justify-center cursor-pointer group-hover:border-[#E31E24]/30 transition-colors"
                    >
                      <ProductVisual
                        type={visualType}
                        className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Title & Info */}
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="font-bold text-sm sm:text-base text-white hover:text-[#E31E24] transition-colors cursor-pointer leading-snug line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    {/* Conductor Range if available */}
                    {product.conductorRange && (
                      <div className="mt-2 text-[11px] font-mono text-neutral-400 bg-neutral-900 p-2 rounded border border-neutral-800/80">
                        <span className="text-neutral-500 block text-[9px] uppercase tracking-wider">Range:</span>
                        <span className="text-neutral-300 line-clamp-1">{product.conductorRange}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#E31E24]" />
                      <span>View Specs</span>
                    </button>

                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(product.name)}
                      className="px-3 py-1.5 rounded bg-neutral-900 hover:bg-[#E31E24] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detailed Technical Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="bg-neutral-950 text-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#E31E24] font-bold uppercase tracking-wider mb-2">
              <span>CATALOGUE SPECIFICATION · PAGE {selectedProduct.specPage}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {selectedProduct.name}
            </h3>

            {/* 3D Visual & Key Data Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 items-center">
              <div className="md:col-span-6 bg-neutral-900/80 rounded-xl p-6 border border-neutral-800 flex items-center justify-center aspect-[4/3]">
                <ProductVisual
                  type={getVisualType(selectedProduct.category, selectedProduct.name)}
                  className="w-full h-full"
                />
              </div>

              <div className="md:col-span-6 space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">
                    Category
                  </span>
                  <span className="font-bold text-white text-sm">
                    {selectedProduct.categoryLabel}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">
                    Material Specification
                  </span>
                  <span className="font-bold text-[#E31E24] text-sm">
                    {selectedProduct.material}
                  </span>
                </div>

                {selectedProduct.conductorRange && (
                  <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-500 uppercase tracking-wider font-semibold block text-[10px]">
                      Conductor Range Compatibility
                    </span>
                    <span className="font-bold text-white text-xs">
                      {selectedProduct.conductorRange}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Description & Application */}
            <div className="space-y-3 text-xs text-neutral-300">
              <div>
                <span className="text-neutral-400 font-bold uppercase tracking-wider block mb-1">
                  Product Overview:
                </span>
                <p className="leading-relaxed bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
                  {selectedProduct.description}
                </p>
              </div>

              <div>
                <span className="text-neutral-400 font-bold uppercase tracking-wider block mb-1">
                  Application Scope:
                </span>
                <p className="leading-relaxed bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
                  {selectedProduct.application}
                </p>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                <span>Tested & Approved by C.P.R.I. Bangalore (Short-Circuit & Temperature Rise Standards)</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-neutral-500 font-mono">
                Source: Varad Engineering Official Catalogue
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    if (onOpenEnquiry) onOpenEnquiry(name);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-xs font-bold shadow-lg flex items-center gap-2"
                >
                  <span>Request RFQ for this Product</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

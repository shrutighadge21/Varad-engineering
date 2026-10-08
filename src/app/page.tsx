'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ImpactSection from '@/components/ImpactSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (productName?: string) => {
    setSelectedEnquiryProduct(productName);
    setIsEnquiryOpen(true);
  };

  const handleSelectCategory = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#E31E24] selection:text-white">
      {/* 1. Sticky Header & Mobile Drawer */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 2. Hero Section with Carousel */}
      <Hero />

      {/* 3. About Varad Engineering Section */}
      <AboutSection />

      {/* 4. Our Services / Engineering Solutions */}
      <ServicesSection onSelectCategory={handleSelectCategory} />

      {/* 5. Areas of Expertise (Connected Radial Ecosystem) */}
      <ExpertiseSection onExploreCategory={handleSelectCategory} />

      {/* 6. Our Impact & Scale (Descending Staircase Layout) */}
      <ImpactSection />

      {/* 7. Why Choose Varad Engineering */}
      <WhyChooseSection />

      {/* 8. Pre-Footer Engineering Requirement CTA Banner */}
      <CTASection onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 9. Official Industrial Footer */}
      <Footer />

      {/* Technical RFQ / Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProduct={selectedEnquiryProduct}
      />
    </main>
  );
}

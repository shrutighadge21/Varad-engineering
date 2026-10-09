'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_DETAILS } from '@/data/products';

import LocationMap from '@/components/LocationMap';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Building2,
  User,
  MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequirement: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    'Electrical Connectors (Palm, CT & T-Connectors)',
    'Clamps & Support Systems (BPI & Bus Post Clamps)',
    'Terminal & Equipment Connections (Rigid & Expansion)',
    'Suspension, Tension & Hardware Assemblies',
    'Earthing Components & Grounding Systems',
    'Custom Electrical Engineering Solutions & Bespoke Tooling'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.serviceRequirement) {
      errors.serviceRequirement = 'Please select a service requirement';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please provide brief details of your requirement';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission handling without pretending an external backend exists
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceRequirement: '',
      message: ''
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  const verifiedCompanyDestination =
    'M/s. Varad Engineering, Plot No. 78, Gat No. 447, Nr Vinzai Comp, Wadmukhwadi, Charholi, Pune 412105';

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    verifiedCompanyDestination
  )}`;

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    verifiedCompanyDestination
  )}&t=&z=15&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#E31E24] selection:text-white">
      {/* =========================================================================
          SECTION 1: CINEMATIC HERO SECTION (Refined Height & Typography)
          Full-width industrial sunset substation background with transparent navbar
         ========================================================================= */}
      <section className="relative min-h-[58vh] sm:min-h-[62vh] lg:min-h-[66vh] xl:min-h-[68vh] bg-[#040810] text-white flex flex-col justify-between overflow-hidden">
        {/* Full-Width Panoramic Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/images/contact-hero-bg.jpg"
            alt="Electrical Substation and Power Transmission Infrastructure at Sunset"
            fill
            sizes="100vw"
            className="object-cover object-center sm:object-[center_35%]"
            priority
          />
          {/* Subtle Dark Navy / Twilight Vignette Overlay ensuring clear readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040810]/90 via-[#040810]/35 to-[#040810]/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#040810]/20 to-[#040810]/65" />
        </div>

        {/* 1. Transparent Integrated Navbar */}
        <Header variant="transparent" activePage="Contact Us" />

        {/* 2. Centered Hero Typography Layer (Balanced ~65-70vh Scale) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-24 lg:pb-14">
          {/* Small Eyebrow Text: CONTACT US */}
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-300 mb-3 sm:mb-4">
            <span className="w-5 sm:w-7 h-0.5 bg-[#E31E24]" />
            <span>CONTACT US</span>
            <span className="w-5 sm:w-7 h-0.5 bg-[#E31E24]" />
          </div>

          {/* Main Heading: LET'S BUILD WITH PRECISION. (Reduced ~18% for balanced scale) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-black tracking-tight uppercase leading-[1.12] font-sans mb-3 sm:mb-4 drop-shadow-md">
            <span className="text-white block">LET’S BUILD WITH</span>
            <span className="text-[#E31E24] block">PRECISION.</span>
          </h1>

          {/* Supporting Line: 16–18px on desktop */}
          <p className="text-sm sm:text-base lg:text-[17px] text-slate-200 font-normal tracking-wide max-w-xl mx-auto drop-shadow-sm">
            Engineering connections. Powering progress.
          </p>
        </div>

        {/* Bottom subtle anchor spacer */}
        <div className="h-2 sm:h-4" />
      </section>

      <main className="flex-grow">

        {/* =========================================================================
            SECTION 2: MAIN 2-COLUMN SPLIT (Light Gray / Slate Background)
            Left: Contact Form ("SEND US A MESSAGE")
            Right: Contact Info Cards ("CONTACT DETAILS")
           ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* -------------------------------------------------------------------
                  LEFT COLUMN: SEND US A MESSAGE (Contact Form ~60%)
                 ------------------------------------------------------------------- */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-sm">
                {/* Section Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24] mb-2">
                    <span>— SEND US A MESSAGE</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] font-sans">
                    Get in Touch With Our Team
                  </h2>
                  <p className="text-sm text-slate-600 mt-2">
                    Share your requirement with us. Our technical team will get back to you shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-xl bg-green-50 border border-green-200 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-sans">
                      Thank You for Contacting Varad Engineering!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your enquiry regarding{' '}
                      <strong className="text-slate-800">{formData.serviceRequirement}</strong> has
                      been received. Our engineering and sales team will review your specifications
                      and connect with you promptly.
                    </p>
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#0B192C] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          FULL NAME <span className="text-[#E31E24]">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Rajesh Patil"
                          className={`w-full px-4 py-3 text-sm rounded-lg bg-slate-50/60 border ${
                            formErrors.fullName
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-slate-300 focus:border-[#E31E24] focus:ring-red-100'
                          } text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.fullName && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          COMPANY NAME
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. ABC Power Systems"
                          className="w-full px-4 py-3 text-sm rounded-lg bg-slate-50/60 border border-slate-300 focus:border-[#E31E24] focus:ring-2 focus:ring-red-100 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          EMAIL ADDRESS <span className="text-[#E31E24]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. name@company.com"
                          className={`w-full px-4 py-3 text-sm rounded-lg bg-slate-50/60 border ${
                            formErrors.email
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-slate-300 focus:border-[#E31E24] focus:ring-red-100'
                          } text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                        >
                          PHONE NUMBER <span className="text-[#E31E24]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 90110 22536"
                          className={`w-full px-4 py-3 text-sm rounded-lg bg-slate-50/60 border ${
                            formErrors.phone
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-slate-300 focus:border-[#E31E24] focus:ring-red-100'
                          } text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all`}
                        />
                        {formErrors.phone && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {formErrors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Product / Service Requirement Dropdown */}
                    <div>
                      <label
                        htmlFor="serviceRequirement"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        PRODUCT OR SERVICE REQUIREMENT <span className="text-[#E31E24]">*</span>
                      </label>
                      <select
                        id="serviceRequirement"
                        name="serviceRequirement"
                        value={formData.serviceRequirement}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 text-sm rounded-lg bg-slate-50/60 border ${
                          formErrors.serviceRequirement
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-slate-300 focus:border-[#E31E24] focus:ring-red-100'
                        } text-slate-900 focus:bg-white focus:outline-none focus:ring-2 transition-all`}
                      >
                        <option value="" disabled>
                          Select a Service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {formErrors.serviceRequirement && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.serviceRequirement}
                        </p>
                      )}
                    </div>

                    {/* Row 4: Message Textarea */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        MESSAGE <span className="text-[#E31E24]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your electrical connectors, substation equipment, earthing components, or custom project requirements..."
                        className={`w-full px-4 py-3 text-sm rounded-lg bg-slate-50/60 border ${
                          formErrors.message
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-slate-300 focus:border-[#E31E24] focus:ring-red-100'
                        } text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y`}
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#C9191E] active:bg-[#B3151A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND INQUIRY</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* -------------------------------------------------------------------
                  RIGHT COLUMN: CONTACT DETAILS (Cards ~40%)
                 ------------------------------------------------------------------- */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24] mb-2">
                    <span>— CONTACT DETAILS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] font-sans uppercase">
                    VARAD ENGINEERING
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">Let&apos;s discuss your requirement.</p>
                </div>

                {/* Info Cards Stack */}
                <div className="space-y-4 pt-2">
                  {/* Phone Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-100 hover:shadow-md transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E31E24] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        Call us for enquiries
                      </span>
                      <a
                        href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                        className="text-base sm:text-lg font-bold text-[#0B192C] hover:text-[#E31E24] transition-colors mt-0.5 block"
                      >
                        {COMPANY_DETAILS.displayPhone}
                      </a>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Contact Person: {COMPANY_DETAILS.contactPerson}
                      </span>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-100 hover:shadow-md transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E31E24] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        Send us an email
                      </span>
                      <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className="text-base sm:text-lg font-bold text-[#0B192C] hover:text-[#E31E24] transition-colors mt-0.5 block break-all"
                      >
                        {COMPANY_DETAILS.email}
                      </a>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Guaranteed response within 24 business hours
                      </span>
                    </div>
                  </div>

                  {/* Address Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-100 hover:shadow-md transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E31E24] flex-shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        Visit our facility
                      </span>
                      <address className="not-italic text-sm sm:text-base font-semibold text-[#0B192C] leading-relaxed mt-0.5">
                        {COMPANY_DETAILS.address.plot}, <br />
                        {COMPANY_DETAILS.address.landmark}, <br />
                        {COMPANY_DETAILS.address.locality}, {COMPANY_DETAILS.address.city} –{' '}
                        {COMPANY_DETAILS.address.pincode}, <br />
                        {COMPANY_DETAILS.address.state}, {COMPANY_DETAILS.address.country}.
                      </address>
                    </div>
                  </div>

                  {/* Working Hours Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-100 hover:shadow-md transition-all flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#E31E24] flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">
                        Operating schedule
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#0B192C] block mt-0.5">
                        Monday – Saturday: 9:00 AM – 6:30 PM
                      </span>
                      <span className="text-xs text-slate-400 block mt-0.5">
                        Sunday: Factory Maintenance / Closed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: MAP & LOCATION ("Find Us", Dark Navy Background #0B192C)
           ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#0B192C] text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Location Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E31E24] mb-2">
                  <span>— OUR LOCATION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                  Find Us
                </h2>
              </div>

              {/* Right Side Facility Address Summary on Desktop */}
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <span className="text-white font-bold block">{COMPANY_DETAILS.legalName}</span>
                <span>
                  {COMPANY_DETAILS.address.plot}, {COMPANY_DETAILS.address.landmark},{' '}
                  {COMPANY_DETAILS.address.locality}, {COMPANY_DETAILS.address.city} –{' '}
                  {COMPANY_DETAILS.address.pincode}.
                </span>
              </div>
            </div>

            {/* Interactive Location Map with Guaranteed Rendered Pin & Google Directions Action */}
            <LocationMap
              companyName={COMPANY_DETAILS.name}
              legalName={COMPANY_DETAILS.legalName}
              addressText={`${COMPANY_DETAILS.address.plot}, ${COMPANY_DETAILS.address.landmark}, ${COMPANY_DETAILS.address.locality}, ${COMPANY_DETAILS.address.city} – ${COMPANY_DETAILS.address.pincode}, ${COMPANY_DETAILS.address.state}, ${COMPANY_DETAILS.address.country}.`}
              directionsUrl={googleMapsDirectionsUrl}
            />
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

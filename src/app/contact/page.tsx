'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_DETAILS } from '@/data/products';
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

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Varad Engineering Plot No 78 Gat No 447 Wadmukhwadi Charholi Pune 412105'
  )}`;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#E31E24] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO HEADER BANNER (Dark Background with Industrial Imagery)
           ========================================================================= */}
        <section className="relative bg-[#040810] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
          {/* Industrial Power Infrastructure Background */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/why-choose-bg.jpg"
              alt="Electrical substation and transmission power infrastructure"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-20"
              priority
            />
            {/* Dark Navy / Charcoal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040810]/95 via-[#081020]/90 to-[#040810]/95" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#040810]/60 to-[#040810]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E31E24] mb-4">
              <span>— CONTACT</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight font-sans max-w-4xl mx-auto mb-5">
              LET&apos;S BUILD WITH <span className="text-[#E31E24]">PRECISION.</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Have a requirement? Let&apos;s discuss how our substation connectors, transmission
              hardware, earthing systems, and custom engineering capabilities can support your
              project.
            </p>
          </div>
        </section>

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

            {/* Google Map Container with Action Overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
              <iframe
                title="Varad Engineering Facility Location"
                src="https://maps.google.com/maps?q=Plot%20No.%2078,%20Gat%20No.%20447,%20Nr%20Vinzai%20Comp,%20Wadmukhwadi,%20Charholi,%20Pune%20412105&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[380px] sm:h-[440px] lg:h-[480px] filter grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />

              {/* Get Directions Floating Action Button */}
              <div className="absolute bottom-6 right-6 z-10">
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#040810]/95 hover:bg-[#E31E24] text-white text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-700/80 hover:border-[#E31E24] shadow-xl backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  <span>GET DIRECTIONS IN GOOGLE MAPS</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

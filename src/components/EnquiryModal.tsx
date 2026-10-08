'use client';

import React, { useState } from 'react';
import VaradLogo from './VaradLogo';
import { COMPANY_DETAILS } from '@/data/products';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultProduct }: EnquiryModalProps) {
  const [productName, setProductName] = useState(defaultProduct || '');
  const [conductorRange, setConductorRange] = useState('ZEBRA');
  const [material, setMaterial] = useState('Aluminium');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [prevDefaultProduct, setPrevDefaultProduct] = useState(defaultProduct);

  if (defaultProduct !== prevDefaultProduct) {
    setPrevDefaultProduct(defaultProduct);
    if (defaultProduct) {
      setProductName(defaultProduct);
    }
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="bg-neutral-950 text-white rounded-2xl max-w-xl w-full p-6 sm:p-8 border border-neutral-800 shadow-2xl relative max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase">
              Requirement Received!
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to Varad Engineering. Our technical team will review your specifications and get back to you shortly.
            </p>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 text-left space-y-1">
              <div className="flex justify-between">
                <span>Direct Contact:</span>
                <span className="font-bold text-white">{COMPANY_DETAILS.displayPhone}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="text-white">{COMPANY_DETAILS.email}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white text-sm font-bold shadow"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 pb-4 border-b border-neutral-800">
              <VaradLogo size="sm" theme="dark" variant="symbol" />
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  Request Technical Quotation / RFQ
                </h3>
                <p className="text-xs text-neutral-400">
                  Custom Engineering & Standard Catalogue Hardware
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              {/* Product Selection */}
              <div>
                <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                  Product / Item Description
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g. 80X80X16MM Palm Connector or Custom Clamp"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              {/* Conductor Range & Material Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                    Conductor Specification
                  </label>
                  <select
                    value={conductorRange}
                    onChange={(e) => setConductorRange(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                  >
                    <option value="ZEBRA">ZEBRA Conductor</option>
                    <option value="MOOSE">MOOSE Conductor</option>
                    <option value="PANTHER">PANTHER Conductor</option>
                    <option value="DOG">DOG Conductor</option>
                    <option value="MORCULLA">MORCULLA Conductor</option>
                    <option value="4-IPS">4-inch IPS Aluminium Tube</option>
                    <option value="CUSTOM">Other / Custom Dimension</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                    Material Requirement
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                  >
                    <option value="Aluminium">Aluminium Alloy</option>
                    <option value="Copper">Copper / Electrolytic Grade</option>
                    <option value="Brass">Brass / Bronze Alloy</option>
                    <option value="MS-HDGI">MS (Hot-Dip Galvanized)</option>
                    <option value="Bimetallic">Bimetallic (Al-Cu)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Power Grid, EPC Contractor"
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                  />
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block font-bold text-neutral-300 uppercase tracking-wider mb-1 text-[11px]">
                  Project Quantity & Notes
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Specify quantity, voltage rating, special testing requirements or technical drawing details..."
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-sm text-white focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              {/* CPRI Assurance */}
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E31E24] flex-shrink-0" />
                <span>All standard products manufactured to C.P.R.I. Bangalore approved specifications.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#E31E24] hover:bg-[#C9181E] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Submit Technical RFQ</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { MapPin, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';

interface LocationMapProps {
  companyName: string;
  legalName: string;
  addressText: string;
  directionsUrl: string;
}

export default function LocationMap({
  companyName,
  legalName,
  addressText,
  directionsUrl
}: LocationMapProps) {
  // Verified coordinates for M/s. Varad Engineering (Plot No. 78, Gat No. 447, Wadmukhwadi, Charholi, Pune 412105)
  const latitude = 18.647222;
  const longitude = 73.8825;

  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}+(${encodeURIComponent(
    legalName
  )})&ll=${latitude},${longitude}&z=16&t=m&hl=en&output=embed`;

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
      {/* 1. Underlying Google Maps Iframe (Centered on Verified Coordinates) */}
      <iframe
        title="M/s. Varad Engineering Verified Location Map"
        src={googleMapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full opacity-95 transition-opacity"
      />

      {/* 2. Prominent, Clearly Visible Brand Red Location Pin Marker (Centered at Exact Premises) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-8px)] pointer-events-none z-20 flex flex-col items-center">
        {/* Pulsing Radar Wave at Ground Point */}
        <div className="absolute bottom-0 w-10 h-10 bg-red-600/30 rounded-full animate-ping pointer-events-none" />
        <div className="absolute bottom-1 w-5 h-2 bg-black/40 rounded-full blur-[1px]" />

        {/* Company Name Badge on Top of Marker Pin */}
        <div className="bg-[#040810]/95 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold py-1.5 px-3 rounded-lg border border-[#E31E24] shadow-2xl mb-1.5 flex items-center gap-1.5 whitespace-nowrap animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse" />
          <span>{legalName}</span>
        </div>

        {/* Brand Red Pin Head */}
        <div className="relative flex flex-col items-center group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E31E24] border-2 border-white shadow-2xl flex items-center justify-center text-white">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
          </div>
          {/* Pin Pointer Tip */}
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] border-t-[#E31E24] -mt-[1px]" />
        </div>
      </div>

      {/* 3. Top-Left Floating Verified Location Info Card */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 max-w-[280px] sm:max-w-sm bg-[#040810]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-700/90 shadow-2xl text-left pointer-events-auto">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E31E24] text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white font-sans leading-snug">
              {legalName}
            </h4>
            <span className="text-[11px] font-semibold text-[#E31E24] uppercase tracking-wider block mt-0.5">
              Manufacturing Facility
            </span>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed mb-3">{addressText}</p>
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="text-[#E31E24] font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#E31E24]" />
            CPRI Approved
          </span>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#E31E24] font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>Navigate</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 4. Bottom-Right "GET DIRECTIONS IN GOOGLE MAPS" Action Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#E31E24] hover:bg-[#C9181E] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Navigation className="w-4 h-4 fill-white" />
          <span>GET DIRECTIONS IN GOOGLE MAPS</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

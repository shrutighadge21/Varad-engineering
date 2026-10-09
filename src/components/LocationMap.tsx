'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ExternalLink, Navigation, Compass } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Exact coordinates for M/s. Varad Engineering (Wadmukhwadi / Charholi, Pune)
  const latitude = 18.6472;
  const longitude = 73.8825;

  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import('leaflet')).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Initialize map instance
      const map = L.map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false
      });

      mapInstanceRef.current = map;

      // Add high-resolution clean tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Create Custom High-Visibility Brand Red Location Marker with Pulsing Radar
      const customPinHtml = `
        <div class="relative flex items-center justify-center cursor-pointer group" style="transform: translate(-50%, -100%);">
          <!-- Pulsing Radar Wave -->
          <div class="absolute -bottom-1 w-8 h-8 bg-red-600/30 rounded-full animate-ping pointer-events-none"></div>
          <div class="absolute -bottom-1 w-4 h-4 bg-red-600/50 rounded-full pointer-events-none"></div>
          
          <!-- Main Pin Icon -->
          <div class="relative z-10 flex flex-col items-center">
            <div class="w-10 h-10 rounded-full bg-[#E31E24] border-2 border-white shadow-xl flex items-center justify-center text-white transition-transform transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3" fill="#E31E24"/>
              </svg>
            </div>
            <!-- Pin Pointer Tip -->
            <div class="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#E31E24] -mt-[1px]"></div>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: customPinHtml,
        iconSize: [40, 48],
        iconAnchor: [20, 48],
        popupAnchor: [0, -50]
      });

      // Add Marker
      const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

      // Popup content
      const popupHtml = `
        <div style="font-family: inherit; padding: 4px 2px; min-width: 220px; color: #0f172a;">
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #E31E24;"></span>
            <strong style="font-size: 14px; color: #0B192C; font-weight: 700;">${legalName}</strong>
          </div>
          <p style="font-size: 11px; color: #475569; margin: 4px 0 8px 0; line-height: 1.4;">
            ${addressText}
          </p>
          <div style="padding-top: 6px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 10px; color: #E31E24; font-weight: 600;">CPRI Approved Facility</span>
            <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 11px; color: #0B192C; font-weight: 700; text-decoration: underline;">
              Get Directions ↗
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { autoClose: false, closeOnClick: false }).openPopup();

      if (isMounted) {
        setMapLoaded(true);
      }
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, legalName, addressText, directionsUrl]);

  return (
    <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950">
      {/* Map DOM Canvas */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Top-Left Floating Verified Location Info Card */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[1000] max-w-[280px] sm:max-w-sm bg-[#040810]/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-700/90 shadow-2xl text-left pointer-events-auto">
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
          <span className="text-[#E31E24] font-medium">CPRI Approved</span>
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

      {/* Bottom-Right "GET DIRECTIONS IN GOOGLE MAPS" Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000]">
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

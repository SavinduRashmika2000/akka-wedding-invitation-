import React from 'react';
import { weddingConfig } from '@/config/wedding';

/**
 * White & Gold Wedding Venue & Location Section.
 */
export function WeddingLocation() {
  return (
    <section
      id="location"
      className="relative py-24 sm:py-32 px-6 bg-[#faf9f6] overflow-hidden"
      aria-label="Wedding venue"
    >
      <div className="relative max-w-xl mx-auto text-center">
        {/* Section label */}
        <p className="font-sans text-xs tracking-[0.4em] text-[#b8860b] uppercase font-semibold mb-3" aria-hidden="true">
          Join Us
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] tracking-wider mb-10 font-normal">
          Venue &amp; Location
        </h2>

        {/* White & Gold Location Card */}
        <div
          className={[
            'border-2 border-[#d4af37]/60',
            'rounded-3xl overflow-hidden',
            'bg-white',
            'shadow-xl shadow-[#d4af37]/15',
            'mx-auto max-w-sm',
          ].join(' ')}
        >
          {/* Map banner with Gold pin */}
          <div
            className="relative w-full h-36 bg-gradient-to-br from-[#fbf8ee] via-[#f5eed3] to-[#ebdca7] flex flex-col items-center justify-center border-b border-[#d4af37]/30"
            aria-hidden="true"
          >
            {/* Compass / Pin icon */}
            <div className="w-14 h-14 rounded-full bg-white shadow-md border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>

          {/* Venue info */}
          <div className="px-6 py-8 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <p className="font-serif text-2xl text-[#1a1a1a] tracking-wider font-medium">
                Willuda Inn
              </p>
              <p className="font-sans text-sm text-[#b8860b] tracking-wider mt-1 font-medium">
                Godagama
              </p>
            </div>

            <div className="h-px w-20 bg-[#d4af37]/40 my-1" aria-hidden="true" />

            <div className="flex flex-col items-center gap-1">
              <p className="font-sans text-xs text-[#b8860b] tracking-widest uppercase font-semibold">
                Wednesday · 27 January 2027
              </p>
              {weddingConfig.ceremonyTime && (
                <p className="font-serif text-base text-[#1a1a1a] font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="text-[#b8860b] text-sm">Ceremony at</span> {weddingConfig.ceremonyTime}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-4">
              <a
                href={weddingConfig.venueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  'flex-1 flex items-center justify-center gap-2',
                  'px-6 py-3.5 rounded-full',
                  'bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a028]',
                  'hover:from-[#c5a028] hover:to-[#aa851e]',
                  'text-[#1a1a1a] font-serif text-base font-semibold tracking-wider',
                  'shadow-md shadow-[#d4af37]/25',
                  'transition-all duration-300 transform hover:scale-105',
                  'focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40',
                ].join(' ')}
                aria-label="View Location on Google"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                View Location
              </a>

             
            </div>
          </div>
        </div>

        {/* Flourish */}
        <div className="flex items-center justify-center gap-3 mt-12 text-[#d4af37]" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>✦ ❦ ✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { weddingConfig, formatWeddingDate } from '@/config/wedding';

/**
 * White & Gold Wedding Date Section.
 */
export function WeddingDate() {
  const dateFormatted = formatWeddingDate();

  return (
    <section
      id="date"
      className="relative py-24 sm:py-32 px-6 bg-[#faf9f6] overflow-hidden"
      aria-label="Wedding date"
    >
      {/* Soft warm gold background halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-xl mx-auto text-center">
        {/* Section label */}
        <p className="font-sans text-xs tracking-[0.4em] text-[#b8860b] uppercase font-semibold mb-8">
          Save The Date
        </p>

        {/* Luxury White & Gold Calendar Card */}
        <time
          dateTime={weddingConfig.weddingDateString}
          className={[
            'inline-flex flex-col items-center',
            'border-2 border-[#d4af37]/60',
            'rounded-3xl overflow-hidden',
            'shadow-xl shadow-[#d4af37]/15',
            'w-full max-w-xs sm:max-w-sm mx-auto',
            'bg-white',
          ].join(' ')}
          aria-label={`Wedding date: ${dateFormatted}`}
        >
          {/* Calendar gold header */}
          <div className="w-full bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a028] px-8 py-4 border-b border-[#d4af37]/40">
            <p className="font-serif text-sm tracking-[0.3em] text-[#1a1a1a] uppercase text-center font-bold">
              January · 2027
            </p>
          </div>

          {/* Calendar White body with Gold numbers */}
          <div className="w-full bg-white px-8 py-8 flex flex-col items-center gap-3">
            {/* Day of week */}
            <p className="font-serif text-[#b8860b] text-xl sm:text-2xl tracking-widest font-normal">
              {weddingConfig.weddingDay}
            </p>

            {/* Day number 27 — large gold */}
            <p
              className="font-serif font-light text-7xl sm:text-8xl text-[#1a1a1a] leading-none tracking-tight my-2"
              aria-label="27"
            >
              27
            </p>

            {/* Gold separator */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" aria-hidden="true" />

            {/* Month + year */}
            <div className="flex flex-col items-center gap-1">
              <p className="font-serif text-[#b8860b] text-2xl tracking-wider">
                January
              </p>
              <p className="font-sans text-[#777777] text-sm tracking-widest">
                2027
              </p>
            </div>

            {/* Ceremony Time */}
            {weddingConfig.ceremonyTime && (
              <>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" aria-hidden="true" />
                <div className="flex items-center gap-2 text-[#88651a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#b8860b]" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p className="font-serif text-lg tracking-widest font-semibold text-[#1a1a1a]">
                    {weddingConfig.ceremonyTime}
                  </p>
                </div>
              </>
            )}
          </div>
        </time>

        {/* Flourish */}
        <div className="flex items-center justify-center gap-3 mt-12 text-[#d4af37]" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>❦</span>
          <div className="h-px w-20 bg-[#d4af37]/40" />
          <span>❦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>
    </section>
  );
}

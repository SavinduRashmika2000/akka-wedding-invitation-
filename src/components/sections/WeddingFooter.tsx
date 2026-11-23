import React from 'react';
import { weddingConfig } from '@/config/wedding';

/**
 * Minimal elegant White & Gold footer.
 */
export function WeddingFooter() {
  const currentYear = 2027;

  return (
    <footer
      id="footer"
      className="relative py-20 sm:py-28 px-6 bg-white overflow-hidden text-center section-optimized"
      aria-label="Wedding closing"
    >
      {/* Top gold decorative border */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-xl mx-auto flex flex-col items-center gap-6">
        {/* Gold Heart ornament */}
        <div className="w-12 h-12 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-6 h-6 animate-float" fill="currentColor">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
        </div>

        {/* Couple names */}
        <h2
          className="font-serif text-4xl sm:text-5xl text-[#1a1a1a] tracking-widest font-normal"
          aria-label={`${weddingConfig.bride} and ${weddingConfig.bestMan}`}
        >
          {weddingConfig.bride} &amp; {weddingConfig.bestMan}
        </h2>

        {/* Decorative gold line */}
        <div className="flex items-center gap-3 w-full justify-center" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <div className="w-2 h-2 rotate-45 border border-[#d4af37] bg-[#d4af37]/20" />
          <div className="h-px w-20 bg-[#d4af37]/40" />
          <div className="w-2 h-2 rotate-45 border border-[#d4af37] bg-[#d4af37]/20" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Date */}
        <p className="font-sans text-xs tracking-[0.4em] text-[#b8860b] uppercase font-semibold" aria-label="27 January 2027">
          27 · January · 2027
        </p>

        {/* Closing message */}
        <p className="font-serif italic text-lg sm:text-xl text-[#555555] max-w-md leading-relaxed">
          &ldquo;{weddingConfig.footer.closingMessage}&rdquo;
        </p>

        {/* Fine print */}
        <p className="font-sans text-xs text-[#999999] tracking-wider mt-4">
          A personal invitation · With love · {currentYear}
        </p>
      </div>
    </footer>
  );
}

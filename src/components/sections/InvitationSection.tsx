import React from 'react';
import { weddingConfig } from '@/config/wedding';

/**
 * Elegant White & Gold Invitation Section.
 */
export function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative py-24 sm:py-32 px-6 bg-white overflow-hidden"
      aria-label="Wedding invitation"
    >
      {/* Decorative top gold line */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Gold floral crest */}
        <div className="flex items-center justify-center mb-6" aria-hidden="true">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <div className="w-10 h-10 mx-3 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37]">
            <span className="text-lg">❦</span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>

        {/* Heading */}
        <h2
          className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] tracking-wider leading-relaxed mb-4"
        >
          {weddingConfig.invitation.heading}
        </h2>

        {/* Couple names in Gold */}
        <p className="font-serif italic text-2xl sm:text-3xl text-[#b8860b] mb-8 tracking-wide font-normal">
          {weddingConfig.bride} &amp; {weddingConfig.bestMan}
        </p>

        {/* Divider with gold diamond */}
        <div className="flex items-center justify-center gap-3 mb-8" aria-hidden="true">
          <div className="h-px w-12 bg-[#d4af37]/40" />
          <div className="w-2 h-2 rotate-45 border border-[#d4af37] bg-[#d4af37]/20" />
          <div className="h-px w-20 bg-[#d4af37]/40" />
          <div className="w-2 h-2 rotate-45 border border-[#d4af37] bg-[#d4af37]/20" />
          <div className="h-px w-12 bg-[#d4af37]/40" />
        </div>

        {/* Invitation message */}
        <p
          className="font-sans text-base sm:text-lg text-[#555555] leading-relaxed sm:leading-loose max-w-xl mx-auto"
        >
          {weddingConfig.invitation.message}
        </p>

        {/* Flourish */}
        <div className="flex items-center justify-center mt-10 gap-3 text-[#d4af37]" aria-hidden="true">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>✦ ❦ ✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>

      {/* Decorative bottom gold line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

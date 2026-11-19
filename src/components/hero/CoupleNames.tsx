'use client';

import React from 'react';
import { weddingConfig } from '@/config/wedding';

/**
 * Couple names displayed directly over the hero video.
 * Elegant serif typography with entrance animation.
 */
export function CoupleNames() {
  return (
    <div
      className={[
        'absolute inset-0 flex flex-col items-center justify-center',
        'px-4 text-center',
        'pointer-events-none select-none',
      ].join(' ')}
    >
      {/* Inner content positioned center-lower */}
      <div className="flex flex-col items-center gap-3 mt-16 sm:mt-24 animate-hero-entrance">
        {/* Tagline */}
        <p
          className={[
            'font-sans text-[10px] sm:text-xs',
            'tracking-[0.4em] sm:tracking-[0.5em]',
            'text-amber-100/80',
            'uppercase',
          ].join(' ')}
          aria-label="A celebration of love"
        >
          A Celebration of Love
        </p>

        {/* Decorative top line */}
        <div className="flex items-center gap-3 w-full justify-center">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-amber-300/60" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-amber-300/70" aria-hidden="true">
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
          </svg>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-amber-300/60" />
        </div>

        {/* Bride name */}
        <h1
          className={[
            'font-serif',
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
            'text-amber-50',
            'leading-none tracking-wide',
            'drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]',
          ].join(' ')}
          aria-label={weddingConfig.bride}
        >
          {weddingConfig.bride}
        </h1>

        {/* Ampersand */}
        <p
          className={[
            'font-serif italic',
            'text-2xl sm:text-3xl md:text-4xl',
            'text-amber-300/90',
            'leading-none',
            'drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]',
          ].join(' ')}
          aria-hidden="true"
        >
          &amp;
        </p>

        {/* Best man name */}
        <h2
          className={[
            'font-serif',
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
            'text-amber-50',
            'leading-none tracking-wide',
            'drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]',
          ].join(' ')}
          aria-label={weddingConfig.bestMan}
        >
          {weddingConfig.bestMan}
        </h2>

        {/* Decorative bottom line */}
        <div className="flex items-center gap-3 mt-1 w-full justify-center">
          <div className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent to-amber-300/40" />
          <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          <div className="h-px w-16 sm:w-24 bg-amber-300/30" />
          <div className="w-1 h-1 rounded-full bg-amber-300/60" />
          <div className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent to-amber-300/40" />
        </div>

        {/* Wedding date teaser */}
        <p
          className={[
            'font-sans text-[10px] sm:text-xs',
            'tracking-[0.3em]',
            'text-amber-100/70',
            'mt-1',
          ].join(' ')}
          aria-label="27 January 2027"
        >
          27 · 01 · 2027
        </p>
      </div>
    </div>
  );
}

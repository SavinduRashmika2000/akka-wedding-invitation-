'use client';

import React, { useRef, useState } from 'react';
import { weddingConfig } from '@/config/wedding';
import { useMusicContext } from '@/components/music/MusicContext';
import { KidsDoorOpening } from './KidsDoorOpening';

interface WeddingHeroProps {
  hasEntered?: boolean;
  onOpen?: () => void;
}

/**
 * Wedding Hero Section — states:
 * 1. White & Gold invitation card (video preloads in background)
 * 2. Welcome Door opening ceremony with page boy & flower girl
 * 3. Full-screen video after "Open Invitation" click + music starts
 */
export function WeddingHero({ hasEntered: propHasEntered, onOpen }: WeddingHeroProps = {}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { play } = useMusicContext();
  const [localHasEntered, setLocalHasEntered] = useState(false);
  const [isDoorOpening, setIsDoorOpening] = useState(false);

  const hasEntered = propHasEntered !== undefined ? propHasEntered : localHasEntered;

  const handleOpenInvitation = (e?: React.MouseEvent) => {
    // Release focus from button immediately
    if (e?.currentTarget) {
      (e.currentTarget as HTMLButtonElement).blur();
    }

    // 1. Immediately trigger background music on user gesture
    play();

    // 2. Play the provided wedding video
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.currentTime = 0;
      video.play().catch((err) => {
        console.warn('Video playback notice:', err);
      });
    }

    // 3. Launch kids floral gate opening transition
    setIsDoorOpening(true);

    // 4. Smoothly reveal the video viewport and sections
    if (onOpen) {
      onOpen();
    } else {
      setLocalHasEntered(true);
    }
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = document.getElementById('invitation');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '100vh' }}
      aria-label="Wedding invitation hero"
    >
      {/* ── VIDEO preloads metadata for instant playback without blocking bandwidth ── */}
      <video
        ref={videoRef}
        src={weddingConfig.media.landingVideo}
        loop
        muted
        playsInline
        preload="metadata"
        className={[
          'absolute inset-0 w-full h-full object-cover z-0 pointer-events-none',
          'transition-opacity duration-1000',
          hasEntered ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
        aria-label="Wedding celebration video"
      />

      {/* ── STATE 1: White & Gold invitation card ── */}
      <div
        className={[
          'absolute inset-0 z-30 flex flex-col items-center justify-center p-6',
          'bg-[#faf9f6] transition-opacity duration-700',
          hasEntered ? 'opacity-0 pointer-events-none' : 'opacity-100',
        ].join(' ')}
        aria-hidden={hasEntered}
      >
        {/* Soft gold ambient glow */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-200/25 to-yellow-100/30 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Luxury card */}
        <div className="relative z-10 max-w-sm w-full px-8 py-10 sm:px-12 sm:py-14 rounded-3xl border-2 border-[#d4af37]/55 bg-white/95 backdrop-blur-md shadow-2xl shadow-[#d4af37]/20 flex flex-col items-center text-center">
          {/* Gold corner accents */}
          <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
          <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]" />
          <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]" />
          <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

          {/* Crest ornament */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-9 h-9 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <span className="text-base font-serif">❦</span>
            </div>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Tagline */}
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#b8860b] font-semibold mb-5">
            A Celebration of Love
          </p>

          {/* Bride */}
          <h1 className="font-serif text-5xl sm:text-6xl text-[#1a1a1a] font-normal tracking-wide leading-tight">
            {weddingConfig.bride}
          </h1>

          {/* Ampersand */}
          <span className="font-serif italic text-3xl sm:text-4xl text-[#d4af37] my-1" aria-hidden="true">
            &amp;
          </span>

          {/* Best man */}
          <h2 className="font-serif text-5xl sm:text-6xl text-[#1a1a1a] font-normal tracking-wide leading-tight">
            {weddingConfig.bestMan}
          </h2>

          {/* Date */}
          <div className="flex items-center gap-3 mt-5 mb-7 w-full justify-center">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#88651a] font-medium">
              Wednesday · 27 January 2027
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Open Invitation button */}
          <button
            onClick={handleOpenInvitation}
            className={[
              'px-9 py-4 rounded-full cursor-pointer',
              'bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#c5a028]',
              'hover:from-[#c5a028] hover:to-[#aa851e]',
              'text-[#1a1a1a] font-serif text-lg tracking-wider font-semibold',
              'shadow-lg shadow-[#d4af37]/35',
              'transform transition-all duration-300 hover:scale-105 active:scale-95',
              'flex items-center gap-3',
              'focus:outline-none focus:ring-4 focus:ring-[#d4af37]/50',
            ].join(' ')}
            aria-label="Open invitation and watch video"
          >
            <span>Open Invitation</span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── STATE 2: Video overlay elements ── */}
      {hasEntered && (
        <>
          {/* Subtle gradients for readability */}
          <div
            className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />

          {/* Top names badge */}
          <div className="absolute top-6 inset-x-0 flex justify-center z-20">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-amber-300/40 text-amber-200 text-sm font-serif tracking-wider">
              <span aria-hidden="true">❦</span>
              <span>Yaanaki &amp; Kavinda</span>
            </div>
          </div>

          {/* Scroll down arrow */}
          <div className="absolute bottom-8 inset-x-0 flex justify-center z-20">
            <button
              onClick={handleScrollDown}
              className="flex flex-col items-center gap-1 text-amber-100/80 hover:text-amber-100 cursor-pointer transition group"
              aria-label="Scroll to invitation details"
            >
              <span className="font-sans text-xs tracking-widest uppercase font-light">Scroll</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 animate-bounce text-[#d4af37]"
                aria-hidden="true"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </button>
          </div>
        </>
      )}

      {/* ── Welcome Gate with Page Boy & Flower Girl Opening Ceremony ── */}
      <KidsDoorOpening
        isOpen={isDoorOpening}
        onAnimationComplete={() => setIsDoorOpening(false)}
      />
    </section>
  );
}

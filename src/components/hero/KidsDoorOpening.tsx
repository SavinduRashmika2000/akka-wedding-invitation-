'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface KidsDoorOpeningProps {
  isOpen: boolean;
  onAnimationComplete: () => void;
}

type DoorStage = 'closed' | 'opening' | 'opened' | 'finished';

/**
 * Floating flower petal for romantic wedding atmosphere
 */
function Petal({ id, left, delay, duration }: { id: number; left: number; delay: number; duration: number }) {
  return (
    <span
      key={id}
      className="absolute top-[-20px] pointer-events-none select-none z-30"
      style={{
        left: `${left}%`,
        animation: `fall-petal ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-amber-100/90 fill-current drop-shadow-sm rotate-12">
        <path d="M12 2C9 7 4 11 4 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-9-8-14z" />
      </svg>
    </span>
  );
}

/**
 * KidsDoorOpening Component
 * Features the user's custom White & Gold floral palace gate with two smiling kids
 * (page boy in tuxedo and flower girl in ivory dress) opening the doors to reveal the celebration video.
 */
export function KidsDoorOpening({ isOpen, onAnimationComplete }: KidsDoorOpeningProps) {
  const [stage, setStage] = useState<DoorStage>('closed');

  useEffect(() => {
    if (!isOpen) {
      setStage('closed');
      return;
    }

    // Stage 1: Display greeting doors with kids (0.7s)
    const t1 = setTimeout(() => {
      setStage('opening');
    }, 700);

    // Stage 2: Doors swung wide open, begin graceful dissolve (2.6s)
    const t2 = setTimeout(() => {
      setStage('opened');
    }, 2600);

    // Stage 3: Fade complete, unmount overlay (3.1s)
    const t3 = setTimeout(() => {
      setStage('finished');
      onAnimationComplete();
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen, onAnimationComplete]);

  if (!isOpen || stage === 'finished') return null;

  const isOpening = stage === 'opening' || stage === 'opened';
  const isOpened = stage === 'opened';

  // 8 staggered soft floating petals
  const petals = [
    { id: 1, left: 12, delay: 0, duration: 4.5 },
    { id: 2, left: 28, delay: 0.8, duration: 5.2 },
    { id: 3, left: 45, delay: 0.3, duration: 4.8 },
    { id: 4, left: 62, delay: 1.2, duration: 5.5 },
    { id: 5, left: 78, delay: 0.5, duration: 4.2 },
    { id: 6, left: 88, delay: 1.5, duration: 5.0 },
    { id: 7, left: 20, delay: 1.8, duration: 4.6 },
    { id: 8, left: 70, delay: 2.1, duration: 5.1 },
  ];

  return (
    <div
      className={[
        'fixed inset-0 z-40 overflow-hidden flex items-center justify-center bg-black/60',
        'transition-opacity duration-600 ease-out',
        isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto',
      ].join(' ')}
      style={{ perspective: '1400px' }}
      aria-label="Welcome Door Ceremony"
    >
      {/* ── Soft Rose Petals Floating Down ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30" aria-hidden="true">
        {petals.map((p) => (
          <Petal key={p.id} {...p} />
        ))}
      </div>

      {/* ── Center Golden Radiant Light (Expands as doors part) ── */}
      <div
        className={[
          'absolute inset-y-0 w-16 sm:w-32 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-all duration-[1600ms] ease-out',
          isOpening ? 'opacity-95 scale-x-[12] sm:scale-x-[20]' : 'opacity-0 scale-x-0',
        ].join(' ')}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,250,230,0.98) 0%, rgba(212,175,55,0.75) 45%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      {/* ── Left Door Leaf: Boy in Tuxedo holding gold handle ── */}
      <div
        className={[
          'absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden select-none z-20',
          'transition-all duration-[1900ms] ease-[cubic-bezier(0.25,1,0.3,1)]',
          'origin-left shadow-2xl',
        ].join(' ')}
        style={{
          transform: isOpening
            ? 'perspective(1200px) rotateY(-88deg) translateX(-80px)'
            : 'perspective(1200px) rotateY(0deg) translateX(0)',
          willChange: 'transform',
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/door/gate-kids-left.jpg"
            alt="Page boy opening the palace wedding gate"
            fill
            sizes="50vw"
            priority
            className="object-cover object-right"
          />
          {/* Subtle gold inner seam shadow */}
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── Right Door Leaf: Flower girl in ivory dress holding gold handle ── */}
      <div
        className={[
          'absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden select-none z-20',
          'transition-all duration-[1900ms] ease-[cubic-bezier(0.25,1,0.3,1)]',
          'origin-right shadow-2xl',
        ].join(' ')}
        style={{
          transform: isOpening
            ? 'perspective(1200px) rotateY(88deg) translateX(80px)'
            : 'perspective(1200px) rotateY(0deg) translateX(0)',
          willChange: 'transform',
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/door/gate-kids-right.jpg"
            alt="Flower girl opening the palace wedding gate"
            fill
            sizes="50vw"
            priority
            className="object-cover object-left"
          />
          {/* Subtle gold inner seam shadow */}
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── Top Welcome Badge ── */}
      <div
        className={[
          'absolute top-6 inset-x-0 flex justify-center z-30 pointer-events-none transition-all duration-700 ease-out',
          isOpening ? '-translate-y-6 opacity-0' : 'translate-y-0 opacity-100',
        ].join(' ')}
      >
        <div className="px-5 py-2 rounded-full bg-white/95 border-2 border-[#d4af37] shadow-xl flex items-center gap-2">
          <span className="text-[#d4af37] text-xs">❦</span>
          <span className="font-serif text-xs sm:text-sm text-[#88651a] tracking-[0.25em] uppercase font-bold">
            Welcome to Our Wedding
          </span>
          <span className="text-[#d4af37] text-xs">❦</span>
        </div>
      </div>

      {/* Skip button for instant bypass if desired */}
      <button
        onClick={onAnimationComplete}
        className="absolute bottom-6 right-6 z-40 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-sans tracking-widest backdrop-blur-md border border-white/30 transition-all cursor-pointer shadow-lg"
        aria-label="Skip entrance animation"
      >
        Skip ➔
      </button>

      {/* Petal animation keyframe style */}
      <style jsx>{`
        @keyframes fall-petal {
          0% {
            transform: translate3d(0, -20px, 0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            transform: translate3d(30px, 105vh, 0) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

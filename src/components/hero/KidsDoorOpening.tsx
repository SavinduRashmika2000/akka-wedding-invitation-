'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface KidsDoorOpeningProps {
  isOpen: boolean;
  onAnimationComplete: () => void;
}

type DoorStage = 'idle' | 'closed' | 'opening' | 'opened' | 'fadeout' | 'finished';

/**
 * Floating flower petal
 */
function Petal({
  id,
  left,
  delay,
  duration,
}: {
  id: number;
  left: number;
  delay: number;
  duration: number;
}) {
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
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current"
        style={{ color: 'rgba(255, 240, 180, 0.85)' }}
      >
        <path d="M12 2C9 7 4 11 4 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-9-8-14z" />
      </svg>
    </span>
  );
}

/**
 * KidsDoorOpening Component
 *
 * Animation sequence:
 *  0 ms   → show CLOSED door image (kids pushing handles)
 *  600 ms → warm golden light blooms from centre seam
 *  1 400 ms → crossfade to OPEN door image (kids peeking through)
 *  3 000 ms → whole overlay fades out
 *  3 600 ms → unmount
 *
 * Uses two real artwork images instead of CSS 3-D rotation for a
 * photorealistic, smooth, and mobile-friendly effect.
 */
export function KidsDoorOpening({ isOpen, onAnimationComplete }: KidsDoorOpeningProps) {
  const [stage, setStage] = useState<DoorStage>('idle');

  useEffect(() => {
    if (!isOpen) {
      setStage('idle');
      return;
    }

    // Show closed door immediately
    setStage('closed');

    // Cross-fade to open image
    const t1 = setTimeout(() => setStage('opening'), 800);

    // Fully open image shown
    const t2 = setTimeout(() => setStage('opened'), 1900);

    // Begin fade-out of whole overlay
    const t3 = setTimeout(() => setStage('fadeout'), 2900);

    // Unmount
    const t4 = setTimeout(() => {
      setStage('finished');
      onAnimationComplete();
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isOpen, onAnimationComplete]);

  if (!isOpen || stage === 'idle' || stage === 'finished') return null;

  const openVisible = stage === 'opening' || stage === 'opened' || stage === 'fadeout';
  const overlayFade = stage === 'fadeout';

  const petals = [
    { id: 1, left: 10, delay: 0,   duration: 5.0 },
    { id: 2, left: 25, delay: 0.7, duration: 5.5 },
    { id: 3, left: 42, delay: 0.2, duration: 4.8 },
    { id: 4, left: 58, delay: 1.1, duration: 5.2 },
    { id: 5, left: 75, delay: 0.5, duration: 4.5 },
    { id: 6, left: 88, delay: 1.4, duration: 5.3 },
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{
        transition: 'opacity 800ms ease-out',
        opacity: overlayFade ? 0 : 1,
        pointerEvents: overlayFade ? 'none' : 'auto',
      }}
      aria-label="Welcome Door Ceremony"
    >
      {/* ── Deep backdrop ── */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #1a0e00 0%, #2a1800 100%)' }}
      />

      {/* ── Closed door image (kids pushing) ── */}
      <div
        className="absolute inset-0"
        style={{
          transition: 'opacity 1000ms ease-in-out',
          opacity: openVisible ? 0 : 1,
        }}
      >
        <Image
          src="/images/door/gate-closed.jpg"
          alt="Children pushing open the grand wedding doors"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Soft dark vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </div>

      {/* ── Open door image (kids peeking through) ── */}
      <div
        className="absolute inset-0"
        style={{
          transition: 'opacity 1200ms ease-in-out',
          opacity: openVisible ? 1 : 0,
        }}
      >
        <Image
          src="/images/door/gate-open.jpg"
          alt="Children opening the grand wedding doors to reveal the ballroom"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Soft vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.45) 100%)',
          }}
        />
      </div>

      {/* ── Floating petals ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
        {petals.map((p) => (
          <Petal key={p.id} {...p} />
        ))}
      </div>

      {/* ── Welcome badge (fades out when doors open) ── */}
      <div
        className="absolute top-6 inset-x-0 flex justify-center z-30 pointer-events-none"
        style={{
          transition: 'opacity 600ms ease-out, transform 600ms ease-out',
          opacity: openVisible ? 0 : 1,
          transform: openVisible ? 'translateY(-12px)' : 'translateY(0)',
        }}
      >
        <div
          className="px-5 py-2 rounded-full border-2 shadow-xl flex items-center gap-2"
          style={{
            background: 'rgba(255,255,255,0.95)',
            borderColor: '#d4af37',
          }}
        >
          <span style={{ color: '#d4af37', fontSize: '14px' }}>❦</span>
          <span
            className="font-serif text-xs sm:text-sm font-bold tracking-[0.25em] uppercase"
            style={{ color: '#88651a' }}
          >
            Welcome to Our Wedding
          </span>
          <span style={{ color: '#d4af37', fontSize: '14px' }}>❦</span>
        </div>
      </div>

      {/* ── Petal keyframes ── */}
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
            opacity: 0.7;
          }
          100% {
            transform: translate3d(28px, 105vh, 0) rotate(170deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

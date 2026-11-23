'use client';

import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number; // percentage
  size: number; // px
  duration: number; // s
  delay: number; // s
  color: string;
  opacity: number;
  swayType: number;
}

// Elegant gold & rose-gold palette for luxury wedding theme
const GOLD_PALETTE = [
  '#d4af37', // metallic gold
  '#e6ca65', // bright champagne gold
  '#f5d061', // soft gold
  '#dec474', // warm gold
  '#e8a598', // delicate rose gold
  '#c5a028', // classic rich gold
  '#f8e7b9', // ivory gold
];

/**
 * Romantic falling gold hearts animation.
 * Softly drifts down the screen with 3D sway and gentle rotation.
 * 100% non-intrusive (pointer-events-none), lightweight and hardware-accelerated.
 */
export function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Generate lightweight deterministic hearts on client mount (SSR safe)
    const count = 10;
    const generated: Heart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.round(((i * 9.2 + (i % 3) * 5.5) % 92) + 4), // 4% to 96% width
      size: 14 + (i % 4) * 3, // 14px to 23px
      duration: 7.0 + (i % 4) * 1.5, // 7.0s to 11.5s
      delay: (i % 5) * 1.2, // staggered 0s to 4.8s
      color: GOLD_PALETTE[i % GOLD_PALETTE.length],
      opacity: 0.38 + (i % 3) * 0.08, // 0.38 to 0.54
      swayType: (i % 3) + 1,
    }));
    setHearts(generated);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none"
      style={{ contain: 'layout paint style' }}
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`absolute top-[-40px] heart-sway-${heart.swayType}`}
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            color: heart.color,
            opacity: heart.opacity,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

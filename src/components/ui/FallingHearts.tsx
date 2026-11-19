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
    // Generate deterministic hearts on client mount (SSR safe)
    const generated: Heart[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.round(((i * 4.6 + (i % 3) * 7.2) % 94) + 3), // 3% to 97% width
      size: 13 + (i % 5) * 3, // 13px to 25px
      duration: 6.5 + (i % 6) * 1.1, // 6.5s to 12.0s
      delay: (i % 11) * 0.65, // staggered 0s to 6.5s
      color: GOLD_PALETTE[i % GOLD_PALETTE.length],
      opacity: 0.35 + (i % 4) * 0.08, // 0.35 to 0.59
      swayType: (i % 3) + 1,
    }));
    setHearts(generated);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none"
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
            className="w-full h-full drop-shadow-[0_2px_6px_rgba(212,175,55,0.35)]"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

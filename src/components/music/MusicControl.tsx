'use client';

import React from 'react';
import { useMusicContext } from './MusicContext';

/**
 * Floating music control button in White & Gold.
 * Always accessible in top-right corner.
 */
export function MusicControl() {
  const { isPlaying, toggle, musicState } = useMusicContext();

  if (musicState === 'error') return null;

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      className={[
        'fixed top-5 right-5 z-50',
        'w-12 h-12 rounded-full',
        'flex items-center justify-center',
        'border-2 border-[#d4af37]',
        'bg-white/95 backdrop-blur-md',
        'transition-all duration-300',
        'focus:outline-none focus:ring-4 focus:ring-[#d4af37]/40',
        'hover:scale-105 active:scale-95 cursor-pointer',
        'shadow-lg shadow-[#d4af37]/20',
      ].join(' ')}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        /* Animated Gold music bars */
        <span
          className="flex items-end gap-[3px] h-5 w-5"
          aria-hidden="true"
        >
          <span className="w-[3px] rounded-full bg-[#d4af37] animate-music-bar-1" />
          <span className="w-[3px] rounded-full bg-[#aa851e] animate-music-bar-2" />
          <span className="w-[3px] rounded-full bg-[#d4af37] animate-music-bar-3" />
          <span className="w-[3px] rounded-full bg-[#c5a028] animate-music-bar-4" />
        </span>
      ) : (
        /* Gold Music note icon */
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-[#d4af37]"
          aria-hidden="true"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      )}
    </button>
  );
}

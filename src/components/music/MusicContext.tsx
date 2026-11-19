'use client';

import React, { createContext, useContext, type ReactNode } from 'react';
import { useMusicPlayer } from '@/hooks/useMusicPlayer';
import type { MusicState } from '@/types/wedding';

interface MusicContextValue {
  musicState: MusicState;
  toggle: () => void;
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: ReactNode }) {
  const music = useMusicPlayer();
  return (
    <MusicContext.Provider value={music}>{children}</MusicContext.Provider>
  );
}

export function useMusicContext(): MusicContextValue {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    throw new Error('useMusicContext must be used within MusicProvider');
  }
  return ctx;
}

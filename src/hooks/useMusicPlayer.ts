'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { weddingConfig } from '@/config/wedding';
import type { MusicState } from '@/types/wedding';

interface UseMusicPlayerReturn {
  musicState: MusicState;
  toggle: () => void;
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
}

/**
 * Hook that manages background music playback.
 * Handles browser autoplay restrictions and playback errors gracefully.
 */
export function useMusicPlayer(): UseMusicPlayerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicState, setMusicState] = useState<MusicState>('idle');

  useEffect(() => {
    const audio = new Audio(weddingConfig.media.themeSong);
    audio.loop = true;
    audio.preload = 'auto';

    audio.addEventListener('play', () => setMusicState('playing'));
    audio.addEventListener('pause', () => setMusicState('paused'));
    audio.addEventListener('error', () => setMusicState('error'));
    audio.addEventListener('ended', () => {
      setMusicState('paused');
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch((err) => {
      console.warn('Audio autoplay blocked or error:', err);
      setMusicState('paused');
    });
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {
        setMusicState('error');
      });
    } else {
      audio.pause();
    }
  }, []);

  return {
    musicState,
    toggle,
    play,
    pause,
    isPlaying: musicState === 'playing',
  };
}

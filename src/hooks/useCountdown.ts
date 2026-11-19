'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { calculateCountdown } from '@/lib/date';
import type { CountdownValues } from '@/types/wedding';

const initialCountdown: CountdownValues = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isComplete: false,
};

/**
 * Hook that returns a live countdown to the wedding date.
 * Updates every second. Cleans up on unmount.
 * Defers calculation to useEffect to prevent Next.js prerender timestamp errors.
 */
export function useCountdown(): CountdownValues {
  const [countdown, setCountdown] = useState<CountdownValues>(initialCountdown);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const tick = useCallback(() => {
    const values = calculateCountdown();
    setCountdown(values);
    if (values.isComplete && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    tick(); // Compute immediately on client mount
    intervalRef.current = setInterval(tick, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [tick]);

  return countdown;
}

import { weddingConfig } from '@/config/wedding';
import type { CountdownValues } from '@/types/wedding';

/**
 * Calculates the countdown from now until the wedding date.
 * Uses the Asia/Colombo timezone.
 */
export function calculateCountdown(): CountdownValues {
  const now = new Date();
  const target = weddingConfig.weddingDate;
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isComplete: false };
}

/**
 * Pads a number to two digits with leading zero.
 */
export function padTwo(n: number): string {
  return String(n).padStart(2, '0');
}

/**
 * Formats a date to display-friendly strings.
 */
export function formatDisplayDate(date: Date): {
  day: string;
  month: string;
  year: string;
  dayOfWeek: string;
  full: string;
} {
  const opts = { timeZone: weddingConfig.timezone };
  return {
    day: date.toLocaleDateString('en-GB', { ...opts, day: 'numeric' }),
    month: date.toLocaleDateString('en-GB', { ...opts, month: 'long' }),
    year: date.toLocaleDateString('en-GB', { ...opts, year: 'numeric' }),
    dayOfWeek: date.toLocaleDateString('en-GB', { ...opts, weekday: 'long' }),
    full: date.toLocaleDateString('en-GB', {
      ...opts,
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  };
}

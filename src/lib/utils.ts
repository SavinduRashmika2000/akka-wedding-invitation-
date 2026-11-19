import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility to merge Tailwind class names safely.
 * Falls back to simple string join if clsx/tailwind-merge aren't installed.
 */
export function cn(...inputs: ClassValue[]): string {
  try {
    return twMerge(clsx(inputs));
  } catch {
    return inputs.filter(Boolean).join(' ');
  }
}

/**
 * Checks if the current environment supports autoplay with sound.
 * This always returns false in modern browsers without user interaction.
 */
export function canAutoplayWithSound(): boolean {
  return false; // Always false — browsers block unmuted autoplay
}

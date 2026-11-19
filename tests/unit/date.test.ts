import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { calculateCountdown, padTwo, formatDisplayDate } from '../../src/lib/date';

describe('calculateCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns positive countdown when wedding is in the future', () => {
    // Set "now" to well before the wedding
    vi.setSystemTime(new Date('2026-01-01T00:00:00+05:30'));
    const result = calculateCountdown();
    expect(result.isComplete).toBe(false);
    expect(result.days).toBeGreaterThan(0);
  });

  it('returns isComplete=true when wedding date has passed', () => {
    vi.setSystemTime(new Date('2027-02-01T00:00:00+05:30'));
    const result = calculateCountdown();
    expect(result.isComplete).toBe(true);
    expect(result.days).toBe(0);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
  });

  it('calculates exactly 1 day before wedding correctly', () => {
    // 26 Jan 2027 at exactly midnight Colombo
    vi.setSystemTime(new Date('2027-01-26T00:00:00+05:30'));
    const result = calculateCountdown();
    expect(result.isComplete).toBe(false);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
  });

  it('all countdown values are non-negative', () => {
    vi.setSystemTime(new Date('2026-06-15T12:30:00+05:30'));
    const result = calculateCountdown();
    expect(result.days).toBeGreaterThanOrEqual(0);
    expect(result.hours).toBeGreaterThanOrEqual(0);
    expect(result.minutes).toBeGreaterThanOrEqual(0);
    expect(result.seconds).toBeGreaterThanOrEqual(0);
  });
});

describe('padTwo', () => {
  it('pads single digit with leading zero', () => {
    expect(padTwo(0)).toBe('00');
    expect(padTwo(1)).toBe('01');
    expect(padTwo(9)).toBe('09');
  });

  it('leaves two-digit numbers unchanged', () => {
    expect(padTwo(10)).toBe('10');
    expect(padTwo(59)).toBe('59');
    expect(padTwo(99)).toBe('99');
  });
});

describe('formatDisplayDate', () => {
  it('returns correct parts for the wedding date', () => {
    const weddingDate = new Date('2027-01-27T00:00:00+05:30');
    const formatted = formatDisplayDate(weddingDate);
    expect(formatted.year).toBe('2027');
    expect(formatted.month).toBe('January');
    expect(formatted.day).toBe('27');
    expect(formatted.dayOfWeek).toBe('Wednesday');
  });
});

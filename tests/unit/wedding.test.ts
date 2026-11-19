import { describe, it, expect } from 'vitest';
import { weddingConfig, formatWeddingDate, getCoupleName } from '../../src/config/wedding';

describe('weddingConfig', () => {
  it('has the correct bride name', () => {
    expect(weddingConfig.bride).toBe('Yaanaki');
  });

  it('has the correct best man name', () => {
    expect(weddingConfig.bestMan).toBe('Kavinda');
  });

  it('has the correct wedding date', () => {
    expect(weddingConfig.weddingDateString).toBe('2027-01-27');
    const d = weddingConfig.weddingDate;
    // The date should be 27 January 2027
    expect(d.getFullYear()).toBe(2027);
    // Note: month is 0-indexed in JS Date
    expect(d.getMonth()).toBe(0); // January
    expect(d.getDate()).toBe(27);
  });

  it('has the correct wedding day', () => {
    expect(weddingConfig.weddingDay).toBe('Wednesday');
  });

  it('has the correct timezone', () => {
    expect(weddingConfig.timezone).toBe('Asia/Colombo');
  });

  it('has correct media paths', () => {
    expect(weddingConfig.media.landingVideo).toBe('/media/landing-video.mp4');
    expect(weddingConfig.media.themeSong).toBe('/media/theme-song.mp3');
  });

  it('has the correct venue URL', () => {
    expect(weddingConfig.venueUrl).toBe('https://share.google/1cWseSUUOuDbtpgZa');
  });

  it('does not invent a ceremony time', () => {
    expect(weddingConfig.ceremonyTime).toBeUndefined();
  });

  it('does not invent a venue name', () => {
    expect(weddingConfig.venueName).toBeUndefined();
  });

  it('does not invent a venue address', () => {
    expect(weddingConfig.venueAddress).toBeUndefined();
  });
});

describe('formatWeddingDate', () => {
  it('returns a human-readable date string', () => {
    const result = formatWeddingDate();
    expect(result).toContain('27');
    expect(result).toContain('January');
    expect(result).toContain('2027');
  });
});

describe('getCoupleName', () => {
  it('returns combined couple name', () => {
    const result = getCoupleName();
    expect(result).toBe('Yaanaki & Kavinda');
  });
});

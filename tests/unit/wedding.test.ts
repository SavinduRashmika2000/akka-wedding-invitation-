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
    expect(weddingConfig.media.landingVideo).toBe('/media/landing-video-new.mp4');
    expect(weddingConfig.media.themeSong).toBe('/media/theme-song.mp3');
  });

  it('has the correct venue URL', () => {
    expect(weddingConfig.venueUrl).toBe('https://maps.app.goo.gl/1gdupNA7brkF3Lhs7?g_st=ic');
  });

  it('has the confirmed ceremony time of 6:00 PM', () => {
    expect(weddingConfig.ceremonyTime).toBe('6:00 PM');
  });

  it('has the confirmed engagement details on 30.07.2026', () => {
    expect(weddingConfig.engagement.dateString).toBe('2026-07-30');
    expect(weddingConfig.engagement.formattedDate).toBe('30 July 2026');
    expect(weddingConfig.engagement.images).toHaveLength(1);
    expect(weddingConfig.engagement.images[0].src).toBe('/images/engagement/engagement-2.jpeg');
  });

  it('has the confirmed venue name', () => {
    expect(weddingConfig.venueName).toBe('Willuda Inn - Godagama');
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

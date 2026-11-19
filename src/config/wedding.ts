import type { WeddingConfig } from '@/types/wedding';

/**
 * Central wedding configuration.
 * Update this file to reflect actual wedding details.
 * Fields marked OPTIONAL are placeholders — confirm before publishing.
 */
export const weddingConfig: WeddingConfig = {
  bride: 'Yaanaki',
  bestMan: 'Kavinda',

  // ✅ Confirmed wedding date
  weddingDate: new Date('2027-01-27T00:00:00+05:30'),
  weddingDateString: '2027-01-27',
  weddingDay: 'Wednesday',

  // ✅ Confirmed timezone
  timezone: 'Asia/Colombo',

  // ⚠️ OPTIONAL — Ceremony time not yet confirmed
  ceremonyTime: undefined,

  // ✅ Confirmed location URL (Google Maps)
  venueUrl: 'https://maps.app.goo.gl/1gdupNA7brkF3Lhs7?g_st=ic',

  // ⚠️ OPTIONAL — Venue name not yet confirmed
  venueName: undefined,

  // ⚠️ OPTIONAL — Venue address not yet confirmed
  venueAddress: undefined,

  media: {
    landingVideo: '/media/landing-video.mp4',
    themeSong: '/media/theme-song.mp3',
  },

  seo: {
    title: 'Yaanaki & Kavinda | Wedding Invitation',
    description:
      'You are warmly invited to celebrate the wedding of Yaanaki and Kavinda on 27 January 2027.',
    themeColor: '#f5e6c8',
  },

  invitation: {
    heading: 'Together With Their Families',
    message:
      'With hearts full of joy and gratitude, we joyfully invite you to witness and celebrate the beginning of our journey together as husband and wife.',
  },

  footer: {
    closingMessage:
      'Two souls, one journey. We look forward to celebrating this beautiful day with you.',
  },
};

/**
 * Formats the wedding date in a human-readable format.
 */
export function formatWeddingDate(): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(weddingConfig.weddingDate);
}

/**
 * Returns the full couple name string.
 */
export function getCoupleName(): string {
  return `${weddingConfig.bride} & ${weddingConfig.bestMan}`;
}

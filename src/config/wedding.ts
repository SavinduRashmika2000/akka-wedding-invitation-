import type { WeddingConfig } from '@/types/wedding';

/**
 * Central wedding configuration.
 * Update this file to reflect actual wedding details.
 * Fields marked OPTIONAL are placeholders — confirm before publishing.
 */
export const weddingConfig: WeddingConfig = {
  bride: 'Yaanaki',
  bestMan: 'Kavinda',

  // ✅ Confirmed wedding date & time (6:00 PM Colombo time)
  weddingDate: new Date('2027-01-27T18:00:00+05:30'),
  weddingDateString: '2027-01-27',
  weddingDay: 'Wednesday',

  // ✅ Confirmed timezone
  timezone: 'Asia/Colombo',

  // ✅ Confirmed ceremony time: 6:00 PM
  ceremonyTime: '6:00 PM',

  // ✅ Confirmed location URL (Google Maps)
  venueUrl: 'https://maps.app.goo.gl/1gdupNA7brkF3Lhs7?g_st=ic',

  // ⚠️ OPTIONAL — Venue name not yet confirmed
  venueName: undefined,

  // ⚠️ OPTIONAL — Venue address not yet confirmed
  venueAddress: undefined,

  media: {
    landingVideo: '/media/landing-video-new.mp4',
    themeSong: '/media/theme-song.mp3',
  },

  // ✅ Confirmed engagement details
  engagement: {
    date: new Date('2026-07-30T00:00:00+05:30'),
    dateString: '2026-07-30',
    day: 'Thursday',
    formattedDate: '30 July 2026',
    heading: 'Our Engagement',
    subheading: 'Where Forever Began · 30 July 2026',
    images: [
      {
        src: '/images/engagement/engagement-1.jpeg',
        alt: 'Engagement Celebration 1',
        caption: 'The Promise',
      },
      {
        src: '/images/engagement/engagement-2.jpeg',
        alt: 'Engagement Celebration 2',
        caption: 'A Golden Moment',
      },
      {
        src: '/images/engagement/engagement-3.jpeg',
        alt: 'Engagement Celebration 3',
        caption: 'Two Hearts United',
      },
      {
        src: '/images/engagement/engagement-4.jpeg',
        alt: 'Engagement Celebration 4',
        caption: 'Forever & Always',
      },
    ],
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

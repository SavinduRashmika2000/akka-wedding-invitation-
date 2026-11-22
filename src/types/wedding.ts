export interface EngagementImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface EngagementConfig {
  date: Date;
  dateString: string;
  day: string;
  formattedDate: string;
  heading: string;
  subheading?: string;
  images: EngagementImage[];
}

// Wedding type definitions
export interface WeddingConfig {
  bride: string;
  bestMan: string;
  weddingDate: Date;
  weddingDateString: string; // ISO string for serialization
  weddingDay: string;
  timezone: string;
  ceremonyTime?: string; // Confirmed: 6:00 PM
  venueUrl: string;
  venueName?: string; // Optional — not yet confirmed
  venueAddress?: string; // Optional — not yet confirmed
  media: {
    landingVideo: string;
    themeSong: string;
  };
  engagement: EngagementConfig;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    themeColor: string;
  };
  invitation: {
    heading: string;
    message: string;
  };
  footer: {
    closingMessage: string;
  };
}

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export type MusicState = 'idle' | 'playing' | 'paused' | 'error';

// Wedding type definitions
export interface WeddingConfig {
  bride: string;
  bestMan: string;
  weddingDate: Date;
  weddingDateString: string; // ISO string for serialization
  weddingDay: string;
  timezone: string;
  ceremonyTime?: string; // Optional — not yet confirmed
  venueUrl: string;
  venueName?: string; // Optional — not yet confirmed
  venueAddress?: string; // Optional — not yet confirmed
  media: {
    landingVideo: string;
    themeSong: string;
  };
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

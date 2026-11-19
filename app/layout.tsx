import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { weddingConfig } from '@/config/wedding';
import { MusicProvider } from '@/components/music/MusicContext';
import { MusicControl } from '@/components/music/MusicControl';

// Elegant serif for headings and couple names
const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Clean sans-serif for body and UI
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#d4af37',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: weddingConfig.seo.title,
  description: weddingConfig.seo.description,
  keywords: ['wedding', 'invitation', 'Yaanaki', 'Kavinda', '2027'],
  authors: [{ name: 'Yaanaki & Kavinda' }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    siteName: weddingConfig.seo.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#faf9f6] text-[#222222] antialiased overflow-x-hidden">
        <MusicProvider>
          <MusicControl />
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}

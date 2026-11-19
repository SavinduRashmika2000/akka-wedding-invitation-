import { WeddingHero } from '@/components/hero/WeddingHero';
import { InvitationSection } from '@/components/sections/InvitationSection';
import { WeddingDate } from '@/components/sections/WeddingDate';
import { WeddingCountdown } from '@/components/sections/WeddingCountdown';
import { WeddingLocation } from '@/components/sections/WeddingLocation';
import { WeddingFooter } from '@/components/sections/WeddingFooter';

/**
 * Main wedding invitation page.
 * Server Component — only interactive children are Client Components.
 */
export default function Home() {
  return (
    <main className="relative">
      {/* 1. Cinematic hero with video and couple names */}
      <WeddingHero />

      {/* 2. Invitation message */}
      <InvitationSection />

      {/* 3. Wedding date */}
      <WeddingDate />

      {/* 4. Live countdown */}
      <WeddingCountdown />

      {/* 5. Location */}
      <WeddingLocation />

      {/* 6. Footer */}
      <WeddingFooter />
    </main>
  );
}

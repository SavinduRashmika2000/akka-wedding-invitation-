'use client';

import React, { useEffect, useState } from 'react';
import { WeddingHero } from '@/components/hero/WeddingHero';
import { InvitationSection } from '@/components/sections/InvitationSection';
import { EngagementSection } from '@/components/sections/EngagementSection';
import { WeddingDate } from '@/components/sections/WeddingDate';
import { WeddingCountdown } from '@/components/sections/WeddingCountdown';
import { WeddingLocation } from '@/components/sections/WeddingLocation';
import { WeddingFooter } from '@/components/sections/WeddingFooter';
import { FallingHearts } from '@/components/ui/FallingHearts';
import { MusicControl } from '@/components/music/MusicControl';

/**
 * Main wedding invitation interactive experience.
 * Initially locks viewport to 100vh and displays the entrance card.
 * Disables browser auto-scroll restoration so reloading from any scroll position
 * reliably shows the entrance card at (0, 0).
 */
export function WeddingExperience() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Reset scroll and disable browser restoration on load/refresh
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handleOpen = () => {
    setHasEntered(true);
    // Smoothly ensure we start from the top when opening
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <main
      className={`w-full bg-[#faf9f6] ${
        hasEntered
          ? 'relative min-h-screen overflow-x-hidden'
          : 'fixed inset-0 h-[100svh] overflow-hidden z-10'
      }`}
    >
      {/* Romantic falling gold hearts animation */}
      <FallingHearts />

      {/* Floating music control button — only visible after opening invitation */}
      {hasEntered && <MusicControl />}

      {/* 1. Hero with entrance card and full-screen video */}
      <WeddingHero hasEntered={hasEntered} onOpen={handleOpen} />

      {/* 2. All other information sections — revealed only after pressing Open Invitation */}
      {hasEntered && (
        <div className="w-full transition-opacity duration-1000 animate-in fade-in">
          <InvitationSection />
          <EngagementSection />
          <WeddingDate />
          <WeddingCountdown />
          <WeddingLocation />
          <WeddingFooter />
        </div>
      )}
    </main>
  );
}

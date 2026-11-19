'use client';

import React, { useState } from 'react';
import { WeddingHero } from '@/components/hero/WeddingHero';
import { InvitationSection } from '@/components/sections/InvitationSection';
import { WeddingDate } from '@/components/sections/WeddingDate';
import { WeddingCountdown } from '@/components/sections/WeddingCountdown';
import { WeddingLocation } from '@/components/sections/WeddingLocation';
import { WeddingFooter } from '@/components/sections/WeddingFooter';
import { FallingHearts } from '@/components/ui/FallingHearts';

/**
 * Main wedding invitation interactive experience.
 * Initially locks viewport to 100vh and only displays the entrance card.
 * Once "Open Invitation" is pressed:
 * - Fullscreen celebration video plays
 * - Background music starts
 * - All other details (invitation, date, countdown, location, footer) are revealed for scrolling
 */
export function WeddingExperience() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <main
      className={`relative w-full ${
        hasEntered ? 'min-h-screen overflow-x-hidden' : 'h-[100svh] overflow-hidden'
      }`}
    >
      {/* Romantic falling gold hearts animation */}
      <FallingHearts />

      {/* 1. Hero with entrance card and full-screen video */}
      <WeddingHero hasEntered={hasEntered} onOpen={() => setHasEntered(true)} />

      {/* 2. All other information sections — revealed only after pressing Open Invitation */}
      {hasEntered && (
        <div className="w-full transition-opacity duration-1000 animate-in fade-in">
          <InvitationSection />
          <WeddingDate />
          <WeddingCountdown />
          <WeddingLocation />
          <WeddingFooter />
        </div>
      )}
    </main>
  );
}

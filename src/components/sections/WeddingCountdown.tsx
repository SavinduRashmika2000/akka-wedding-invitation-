'use client';

import React, { useEffect, useRef } from 'react';
import { useCountdown } from '@/hooks/useCountdown';
import { padTwo } from '@/lib/date';

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  const prevRef = useRef(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prevRef.current !== value && ref.current) {
      ref.current.classList.remove('animate-countdown-tick');
      void ref.current.offsetWidth;
      ref.current.classList.add('animate-countdown-tick');
    }
    prevRef.current = value;
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2 min-w-[65px] sm:min-w-[85px]">
      {/* Box */}
      <div
        className={[
          'relative flex items-center justify-center',
          'w-16 h-16 sm:w-20 sm:h-20',
          'rounded-2xl',
          'border-2 border-[#d4af37]/50',
          'bg-white',
          'shadow-lg shadow-[#d4af37]/15',
        ].join(' ')}
      >
        <span
          ref={ref}
          className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal leading-none tabular-nums"
          aria-label={`${value} ${label}`}
        >
          {padTwo(value)}
        </span>
      </div>

      {/* Label */}
      <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-[#88651a] uppercase font-semibold">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <span
      className="font-serif text-3xl sm:text-4xl text-[#d4af37] leading-none self-start mt-3 sm:mt-5 select-none font-bold"
      aria-hidden="true"
    >
      :
    </span>
  );
}

/**
 * White & Gold Live Countdown Section.
 */
export function WeddingCountdown() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown();

  return (
    <section
      id="countdown"
      className="relative py-24 sm:py-32 px-6 bg-white overflow-hidden"
      aria-label="Countdown to the wedding"
    >
      {/* Decorative top gold line */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Section heading */}
        <div className="mb-10">
          <p className="font-sans text-xs tracking-[0.4em] text-[#b8860b] uppercase font-semibold mb-3" aria-hidden="true">
            Counting Down
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] tracking-wider font-normal">
            {isComplete ? 'The Day Has Arrived' : 'Until We Say I Do'}
          </h2>
        </div>

        {isComplete ? (
          <div className="animate-fade-in">
            <p className="font-serif italic text-3xl text-[#b8860b]">
              Today is the day! 💍
            </p>
            <p className="font-sans text-[#555555] text-base mt-4">
              Yaanaki &amp; Kavinda are getting married today.
            </p>
          </div>
        ) : (
          <>
            {/* Countdown display */}
            <div
              className="flex items-start justify-center gap-2 sm:gap-4 my-8"
              role="timer"
              aria-live="polite"
              aria-atomic="false"
              aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until the wedding`}
            >
              <CountdownUnit value={days} label="Days" />
              <CountdownSeparator />
              <CountdownUnit value={hours} label="Hours" />
              <CountdownSeparator />
              <CountdownUnit value={minutes} label="Mins" />
              <CountdownSeparator />
              <CountdownUnit value={seconds} label="Secs" />
            </div>

            {/* Note */}
            <p className="font-sans text-xs text-[#777777] mt-8 tracking-wider">
              Countdown to 27 January 2027 · Ceremony time to be announced
            </p>
          </>
        )}

        {/* Flourish */}
        <div className="flex items-center justify-center gap-3 mt-12 text-[#d4af37]" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>✦ ❦ ✦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>

      {/* Decorative bottom gold line */}
      <div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

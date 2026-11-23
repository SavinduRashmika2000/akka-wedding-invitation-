'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding';

/**
 * White & Gold Engagement Section.
 * Highlights the couple's engagement on 30.07.2026 (30 July 2026)
 * with a luxury 4-image showcase gallery and modal zoom view.
 */
export function EngagementSection() {
  const { engagement } = weddingConfig;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [imgSources, setImgSources] = useState<Record<number, string>>(() => {
    const map: Record<number, string> = {};
    engagement.images.forEach((img, idx) => {
      map[idx] = img.src;
    });
    return map;
  });

  const handleImageError = (index: number) => {
    const current = imgSources[index] || engagement.images[index].src;
    // Gracefully try alternate extensions (.jpg <-> .webp <-> .jpeg) before falling back to placeholder
    if (current.endsWith('.jpg')) {
      setImgSources((prev) => ({ ...prev, [index]: current.replace(/\.jpg$/, '.webp') }));
    } else if (current.endsWith('.webp')) {
      setImgSources((prev) => ({ ...prev, [index]: current.replace(/\.webp$/, '.jpeg') }));
    } else if (current.endsWith('.jpeg')) {
      setImgSources((prev) => ({ ...prev, [index]: current.replace(/\.jpeg$/, '.jpg') }));
    } else {
      setFailedImages((prev) => ({ ...prev, [index]: true }));
    }
  };

  return (
    <section
      id="engagement"
      className="relative py-24 sm:py-32 px-4 sm:px-6 bg-[#faf9f6] overflow-hidden section-optimized"
      aria-label="Engagement gallery"
    >
      {/* Decorative gold ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-amber-100/30 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Section label */}
        <p className="font-sans text-xs tracking-[0.4em] text-[#b8860b] uppercase font-semibold mb-3">
          Our Journey
        </p>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] tracking-wider mb-4 font-normal">
          {engagement.heading}
        </h2>

        {/* Engagement Date Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#d4af37]/50 shadow-sm shadow-[#d4af37]/10 mb-12">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="w-4 h-4 text-[#b8860b]"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-serif text-sm sm:text-base text-[#88651a] tracking-wide font-medium">
            Held on {engagement.formattedDate}
          </span>
        </div>

        {/* Engagement Showcase (Featured Portrait or Gallery) */}
        <div
          className={
            engagement.images.length === 1
              ? 'max-w-md sm:max-w-lg mx-auto'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'
          }
        >
          {engagement.images.map((item, index) => {
            const isFailed = failedImages[index];

            return (
              <div
                key={index}
                onClick={() => !isFailed && setSelectedImage(index)}
                className={[
                  'group relative overflow-hidden rounded-3xl',
                  'border-2 border-[#d4af37]/60',
                  'bg-white shadow-xl shadow-[#d4af37]/15',
                  'transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/30 hover:-translate-y-1',
                  !isFailed ? 'cursor-pointer' : 'cursor-default',
                ].join(' ')}
              >
                {/* Photo container with luxury portrait aspect ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-[#f4ede0] flex items-center justify-center">
                  {!isFailed ? (
                    <>
                      <Image
                        src={imgSources[index] || item.src}
                        alt={item.alt}
                        fill
                        sizes={
                          engagement.images.length === 1
                            ? '(max-width: 640px) 92vw, (max-width: 1024px) 500px, 512px'
                            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                        }
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onError={() => handleImageError(index)}
                        loading="lazy"
                      />
                      {/* Hover overlay hint */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-serif text-[#1a1a1a] tracking-wider shadow-sm">
                          View Photo
                        </span>
                      </div>
                    </>
                  ) : (
                    /* Elegant placeholder if photo hasn't been uploaded yet */
                    <div className="p-6 flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-white/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-sm">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="w-7 h-7"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </div>
                      <p className="font-serif text-sm font-semibold text-[#1a1a1a] tracking-wider">
                        Engagement Photo {index + 1}
                      </p>
                      <p className="font-sans text-[11px] text-[#777777] tracking-wide">
                        Place image in <br />
                        <code className="text-[10px] text-[#b8860b] font-mono">
                          public/images/engagement/
                        </code>
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom caption card */}
                <div className="p-4 bg-white border-t border-[#d4af37]/30 text-center">
                  <p className="font-serif text-sm text-[#1a1a1a] tracking-wide font-medium">
                    {item.caption || `Moment ${index + 1}`}
                  </p>
                  <p className="font-sans text-[11px] text-[#b8860b] tracking-widest mt-0.5">
                    30.07.2026
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flourish */}
        <div className="flex items-center justify-center gap-3 mt-14 text-[#d4af37]" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <span>❦</span>
          <div className="h-px w-20 bg-[#d4af37]/40" />
          <span>❦</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged engagement photo"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] w-full rounded-2xl overflow-hidden border-2 border-[#d4af37]/70 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#1a1a1a] hover:bg-white flex items-center justify-center shadow-md transition-transform hover:scale-110"
              aria-label="Close photo"
            >
              ✕
            </button>

            {/* Modal image container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] bg-stone-900">
              <Image
                src={imgSources[selectedImage] || engagement.images[selectedImage].src}
                alt={engagement.images[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 800px"
              />
            </div>

            {/* Modal footer */}
            <div className="p-4 bg-white text-center border-t border-[#d4af37]/30">
              <p className="font-serif text-base text-[#1a1a1a] font-medium">
                {engagement.images[selectedImage].caption}
              </p>
              <p className="font-sans text-xs text-[#b8860b] tracking-widest mt-1">
                Engagement · 30 July 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

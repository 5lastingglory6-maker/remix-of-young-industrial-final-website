import { useState, useCallback, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

interface Props {
  eyebrow?: string;
  title?: string;
  bg?: string;
  images: string[];
}

export default function GallerySection({
  eyebrow = 'Gallery',
  title = 'Project Gallery',
  bg = 'bg-steel-50',
  images,
}: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, close, prev, next]);

  const touchStartX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0]?.clientX ?? 0; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
  };

  return (
    <>
      <section className={`section-pad ${bg}`}>
        <div className="container-8xl">
          <SectionHeading align="center" eyebrow={eyebrow} title={title} />
          <p className="mt-4 text-center text-steel-500 text-sm">Click any image to open the gallery and swipe through photos.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square overflow-hidden rounded-xl border border-steel-200 bg-steel-100"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/0 transition-colors group-hover:bg-navy-950/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-safety-500 transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <img
            src={images[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-safety-500 transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/80 text-sm">
            <ChevronLeft className="h-4 w-4 animate-pulse" />
            <span>{lightboxIndex + 1} / {images.length} — swipe or use arrows</span>
            <ChevronRight className="h-4 w-4 animate-pulse" />
          </div>
        </div>
      )}
    </>
  );
}

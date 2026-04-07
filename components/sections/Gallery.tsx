'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    src: '/images/gallery/gallery-1.jpeg',
    alt: 'Gallery photo 1',
    caption: 'Huawei Championship 2025 @ Thailand',
  },
  {
    id: 'photo-2',
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Gallery photo 2',
    caption: 'HackX 2nd Runner Up',
  },
  {
    id: 'photo-3',
    src: '/images/gallery/gallery-3.JPEG',
    alt: 'Gallery photo 3',
    caption: 'Research Exchange Program - Japan',
  },
  {
    id: 'photo-4',
    src: '/images/gallery/gallery-7.jpg',
    alt: 'Gallery photo 4',
    caption: 'IEEE WIE Annual General Meeting 2026 and Awards Ceremony',
  },
  {
    id: 'photo-5',
    src: '/images/gallery/gallery-8.jpg',
    alt: 'Gallery photo 5',
    caption: 'ICIPRoP 2026 - International Conference on Image Processing and Pattern Recognition',
  },
  {
    id: 'photo-6',
    src: '/images/gallery/gallery-9.jpg',
    alt: 'Gallery photo 6',
    caption: 'ICIPRoP 2026 - International Conference on Image Processing and Pattern Recognition',
  },
  {
    id: 'photo-7',
    src: '/images/gallery/gallery-4.jpeg',
    alt: 'Gallery photo 7',
    caption: 'Best Affinity Group Project Award for Hackelite2.0- IEEE WIE',
  },
  {
    id: 'photo-8',
    src: '/images/gallery/gallery-5.jpeg',
    alt: 'Gallery photo 8',
    caption: 'Codesprint - Finalist',
  },
  {
    id: 'photo-9',
    src: '/images/gallery/gallery-6.webp',
    alt: 'Gallery photo 4',
    caption: 'Robotics Workshop Conducted by IES Labs UoM - Matara Rahuala',
  }
];

export const Gallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activePhotoIndex === null) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePhotoIndex(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activePhotoIndex]);

  return (
    <>
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Moments & Memories</h1>
          <p className="text-center text-slate-400 text-lg mt-4 mb-12 max-w-2xl mx-auto">
            A glimpse into my journey through research, community events, and technical achievements
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setActivePhotoIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 text-left cursor-zoom-in"
                aria-label={`Open ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-lg">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setActivePhotoIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-900/70 hover:bg-slate-800 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div
            className="relative w-full max-w-6xl h-[70vh] sm:h-[80vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={GALLERY_PHOTOS[activePhotoIndex].src}
              alt={GALLERY_PHOTOS[activePhotoIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {GALLERY_PHOTOS[activePhotoIndex].caption && (
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white text-sm sm:text-base px-4 py-2 rounded-full bg-slate-900/70 max-w-[90vw]">
              {GALLERY_PHOTOS[activePhotoIndex].caption}
            </p>
          )}
        </div>
      )}
    </>
  );
};
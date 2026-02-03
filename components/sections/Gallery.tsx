'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    src: '/images/gallery/gallery-4.jpeg',
    alt: 'Gallery photo 4',
    caption: 'Best Affinity Group Project Award for Hackelite2.0- IEEE WIE',
  },
  {
    id: 'photo-5',
    src: '/images/gallery/gallery-5.jpeg',
    alt: 'Gallery photo 5',
    caption: 'Codesprint - Finalist',
  },
  {
    id: 'photo-6',
    src: '/images/gallery/gallery-6.webp',
    alt: 'Gallery photo 6',
    caption: 'Robotics Workshop Conducted by IES Labs UoM - Matara Rahuala',
  },
];

export const Gallery: React.FC = () => {
  return (
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
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
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

              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
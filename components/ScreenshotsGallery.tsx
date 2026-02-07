'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ScreenshotsGalleryProps {
  screenshots: string[];
  projectTitle: string;
  colors: {
    bg: string;
    text: string;
    border: string;
  };
}

export default function ScreenshotsGallery({ screenshots, projectTitle, colors }: ScreenshotsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? screenshots.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === screenshots.length - 1 ? 0 : selectedImage + 1);
    }
  };

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
          <span className={`w-1 h-8 rounded-full ${colors.bg}`} />
          Screenshots
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative aspect-video w-full rounded-xl overflow-hidden border-2 ${colors.border} bg-slate-900/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
            >
              <Image
                src={screenshot}
                alt={`${projectTitle} - Screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[selectedImage]}
              alt={`${projectTitle} - Screenshot ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800/80 rounded-full">
            <span className="text-white text-sm">
              {selectedImage + 1} / {screenshots.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

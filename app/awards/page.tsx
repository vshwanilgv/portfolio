import React from 'react';
import Image from 'next/image';
import { getAllAwards } from '@/config/content';

export const metadata = {
  title: 'Awards | Vishwani Bhagya',
  description: 'A curated list of awards and recognitions with titles, descriptions, award type, and images.',
};

const typeBadgeClasses: Record<string, string> = {
  Champion: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
  '1st Runner Up': 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  '2nd Runner Up': 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  Winner: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  Finalist: 'bg-violet-500/20 text-violet-300 border-violet-500/40',
};

export default function AwardsPage() {
  const awards = getAllAwards();

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <section className="section-container mb-14">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4">Awards & Recognition</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
          <p className="text-xl text-slate-400 mt-6 max-w-3xl">
            Highlights of competitions, conferences, and community initiatives where my work was recognized.
          </p>
        </section>

        <section className="section-container grid grid-cols-1 xl:grid-cols-2 gap-8">
          {awards.map((award) => (
            <article
              key={award.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${typeBadgeClasses[award.awardType] ?? 'bg-slate-700/40 text-slate-200 border-slate-600'}`}
                >
                  {award.awardType}
                </span>
                {award.year && (
                  <span className="text-sm text-slate-400">{award.year}</span>
                )}
              </div>

              <h2 className="text-2xl font-semibold text-slate-100 mb-3">{award.title}</h2>
              <p className="text-slate-300 leading-relaxed mb-5">{award.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {award.images.map((image, index) => (
                  <div
                    key={`${award.id}-image-${index}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-800"
                  >
                    <Image
                      src={image}
                      alt={`${award.title} image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Calendar, ExternalLink, Users } from 'lucide-react';
import { getAllPublications } from '@/config/content';

interface PublicationsGridProps {
  limit?: number;
  showViewAll?: boolean;
}

export const PublicationsGrid: React.FC<PublicationsGridProps> = ({
  limit,
  showViewAll = false,
}) => {
  const publications = getAllPublications();
  const visiblePublications = typeof limit === 'number' ? publications.slice(0, limit) : publications;

  if (visiblePublications.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncate = (text: string, max = 260) => {
    if (!text) return '';
    if (text.length <= max) return text;
    return text.slice(0, max).trimEnd() + '...';
  };

  return (
    <section className="section-container">
      <div className="mb-10 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Publications</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-3xl">
          Research and technical writing that showcase my work across AI, software engineering, and practical innovation.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {visiblePublications.map((publication) => (
          <motion.article
            key={publication.id}
            variants={itemVariants}
            className="glass-card rounded-2xl overflow-hidden"
          >
            {publication.screenshot ? (
              <div className="relative aspect-[16/9] border-b border-slate-800">
                <Image
                  src={publication.screenshot}
                  alt={`${publication.title} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                />
              </div>
            ) : null}

            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">{publication.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {expanded[publication.id] ? publication.abstract : truncate(publication.abstract)}
                {publication.abstract && publication.abstract.length > 260 ? (
                  <button
                    onClick={() => toggleExpanded(publication.id)}
                    aria-expanded={!!expanded[publication.id]}
                    className="ml-3 text-sm text-blue-300 hover:text-blue-200 transition-colors font-medium"
                  >
                    {expanded[publication.id] ? 'Show less' : 'Read more'}
                  </button>
                ) : null}
              </p>

              <div className="space-y-3 text-sm text-slate-300 mb-7">
                <div className="flex items-start gap-3">
                  <Users size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  <span>{publication.authors.join(', ')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>{publication.publisher}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>{publication.publishedAt}</span>
                </div>
              </div>

              <a
                href={publication.publicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors font-medium"
              >
                Read Publication
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {showViewAll && publications.length > visiblePublications.length ? (
        <div className="mt-10">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors font-medium"
          >
            View all publications
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : null}
    </section>
  );
};

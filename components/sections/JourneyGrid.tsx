'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui';
import { PORTFOLIO_DATA } from '@/config/content';

export const JourneyGrid: React.FC = () => {
  const { journey } = PORTFOLIO_DATA;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>
        <motion.p
          className="text-lg text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Education, experience, and achievements that shaped my career
        </motion.p>
      </div>

      {/* Bento Grid */}
      <motion.div
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {journey.map((item, index) => {
          const Icon = item.icon;
          
          // Different grid spans for visual variety (optional enhancement)
          const spanClass = index === 0 ? 'md:col-span-2' : '';
          
          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`bento-item glass-card group ${spanClass}`}
            >
              {/* Header with Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                  <Icon
                    size={24}
                    className={`text-${item.color}-400`}
                    strokeWidth={2}
                  />
                </div>
                <Badge color={item.color} size="sm">
                  {item.type}
                </Badge>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400">
                    {item.organization}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{item.date}</p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} color={item.color} size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

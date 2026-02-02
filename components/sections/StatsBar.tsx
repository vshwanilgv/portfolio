'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/config/content';

export const StatsBar: React.FC = () => {
  const { stats } = PORTFOLIO_DATA;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="section-container">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          
          return (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="glass-card p-6 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-500/10 border border-${stat.color}-500/20`}>
                  <Icon
                    size={32}
                    className={`text-${stat.color}-400`}
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className={`stat-value stat-value-${stat.color} mb-2`}>
                {stat.value}
              </div>

              <div className="text-sm md:text-base font-semibold text-slate-300 mb-2">
                {stat.label}
              </div>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

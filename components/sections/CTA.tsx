'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { PORTFOLIO_DATA } from '@/config/content';

export const CTA: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
      >
        {/* Gradient Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="primary"
              iconLeft={Mail}
              iconRight={ArrowRight}
              size="lg"
            >
              <a href={`mailto:${profile.email}`}>Send me an Email</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center text-slate-400">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Icon size={20} strokeWidth={2} />
                  <span className="text-sm font-medium">{social.platform}</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

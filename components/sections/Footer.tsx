import React from 'react';
import { PORTFOLIO_DATA } from '@/config/content';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={social.platform}
                >
                  <Icon size={20} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

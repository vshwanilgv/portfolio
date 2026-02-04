'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/config/content';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const navLinks = [
    { href: '/', label: 'Home', isAnchor: false },
    { href: '/about', label: 'About', isAnchor: false },
    { href: '/education', label: 'Education', isAnchor: false },
    { href: '/experience', label: 'Experience', isAnchor: false },
    { href: '/projects', label: 'Projects', isAnchor: false },
    { href: '/#contact', label: 'Contact', isAnchor: true },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors">
            {profile.name.split(' ')[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pt-4 border-t border-slate-800 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
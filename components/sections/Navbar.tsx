'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/config/content';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const router = useRouter();
  const { profile } = PORTFOLIO_DATA;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/awards', label: 'Awards' },
    { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const contactSection = document.getElementById('contact');
    if (!contactSection) {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveSection(entry.isIntersecting ? 'contact' : '');
      },
      {
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.1,
      }
    );

    observer.observe(contactSection);

    if (window.location.hash === '#contact') {
      setActiveSection('contact');
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/' || window.location.hash !== '#contact') {
      return;
    }

    const timer = window.setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection('contact');
      }
    }, 80);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/#contact') {
      return pathname === '/' && activeSection === 'contact';
    }

    if (href === '/' && activeSection === 'contact') {
      return false;
    }

    return href === pathname;
  };

  const scrollToContactWithRetry = (maxAttempts = 120) => {
    let attempts = 0;

    const tryScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', '/#contact');
        setActiveSection('contact');
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        window.requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  };

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href !== '/#contact') {
      setIsMenuOpen(false);
      return;
    }

    event.preventDefault();

    if (pathname === '/') {
      scrollToContactWithRetry();
      setIsMenuOpen(false);
      return;
    }

    router.push('/');
    scrollToContactWithRetry();
    setIsMenuOpen(false);
  };

  const getLinkClassName = (href: string, isMobile = false) => {
    const base = isMobile
      ? 'relative z-20 inline-flex w-full min-h-11 items-center justify-center rounded-md border px-4 py-2 text-base font-medium transition-all duration-200 cursor-pointer select-none pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70'
      : 'relative z-20 inline-flex min-h-10 items-center justify-center rounded-md border px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer select-none pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70';
    const isActive = isActiveLink(href);

    return `${base} ${
      isActive
        ? 'border-blue-500/50 bg-blue-500/15 text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.25)]'
        : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300'
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-100 hover:text-blue-400 transition-colors">
            {profile.name.split(' ')[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClassName(link.href)}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
                onClick={handleNavClick(link.href)}
              >
                {link.label}
              </Link>
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
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClassName(link.href, true)}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
                onClick={handleNavClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
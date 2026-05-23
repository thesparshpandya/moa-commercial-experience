'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Retail', href: '#retail' },
  { label: 'Events', href: '#events' },
  { label: 'Sponsorship', href: '#sponsorship' },
  { label: 'Attractions', href: '#attractions' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
        className={`fixed top-0 left-0 right-0 z-[7000] transition-all duration-700 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-gold/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group cursor-none">
            <span className="font-display text-xl font-light tracking-[0.08em] text-platinum leading-none">
              Mall of America
            </span>
            <span className="label-tag" style={{ fontSize: '0.5rem', letterSpacing: '0.4em' }}>
              Partnership Platform
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="cursor-none font-body text-[0.75rem] tracking-[0.2em] uppercase text-silver/70 hover:text-gold-light transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary text-[0.7rem] py-3 px-6"
            >
              <span>Request Partnership</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden cursor-none flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-[1px] bg-platinum transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-4 h-[1px] bg-platinum transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1px] bg-platinum transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[6900] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(item.href)}
                className="cursor-none font-display text-4xl font-light text-platinum hover:text-gold-light transition-colors duration-300"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="btn-primary mt-8"
            >
              <span>Request Partnership</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

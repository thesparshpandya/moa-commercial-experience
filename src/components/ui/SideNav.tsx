'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'retail', label: 'Retail' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'events', label: 'Events' },
  { id: 'sponsorship', label: 'Sponsorship' },
  { id: 'contact', label: 'Contact' },
];

export default function SideNav() {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);

      // Find active section
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActive(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-[6500] flex flex-col items-end gap-4 hidden lg:flex"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {sections.map((sec) => {
            const isActive = active === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="cursor-none flex items-center gap-3 group"
              >
                {/* Label */}
                <AnimatePresence>
                  {hovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="label-tag text-silver-dim group-hover:text-gold-light transition-colors duration-200"
                      style={{ fontSize: '0.5rem' }}
                    >
                      {sec.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <div
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: isActive ? '8px' : '4px',
                    height: isActive ? '8px' : '4px',
                    background: isActive
                      ? 'var(--color-gold)'
                      : 'rgba(168,168,168,0.3)',
                    boxShadow: isActive
                      ? '0 0 8px rgba(201,168,76,0.6)'
                      : 'none',
                  }}
                />
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

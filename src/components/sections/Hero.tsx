'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Retail', 'Events', 'Sponsorship', 'Culture', 'Moments'];

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById('overview');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=80&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="video-overlay absolute inset-0" />
        
        {/* Dramatic vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 100%)'
        }} />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1000px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="label-tag mb-8 tracking-widest3"
        >
          Bloomington, Minnesota — Est. 1992
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: '100%' }}
            animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.9] tracking-[-0.02em] text-platinum"
          >
            Mall of America
          </motion.h1>
        </div>
        
        {/* Dynamic word */}
        <div className="overflow-hidden mb-6 h-[clamp(3rem,8vw,6.5rem)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(3rem,8vw,6.5rem)] font-light italic gold-gradient leading-[1]"
            >
              {words[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-silver text-base md:text-lg font-light max-w-[520px] mx-auto mb-12 leading-relaxed"
        >
          40 million annual visitors. 5.6 million square feet. 
          <span className="text-platinum"> The most powerful retail and entertainment platform in North America.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={onOpenModal} className="btn-primary">
            <span>Request Partnership</span>
            <span>→</span>
          </button>
          <button onClick={scrollDown} className="btn-secondary">
            <span>Explore the Platform</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-none"
        onClick={scrollDown}
      >
        <span className="label-tag" style={{ fontSize: '0.5rem' }}>Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>

      {/* Corner labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-8 md:left-12 hidden md:block"
      >
        <div className="label-tag" style={{ fontSize: '0.5rem', color: 'var(--color-silver-dim)' }}>
          North America's Largest Mall
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 right-8 md:right-12 hidden md:block text-right"
      >
        <div className="label-tag" style={{ fontSize: '0.5rem', color: 'var(--color-silver-dim)' }}>
          Confidential — Partner Preview
        </div>
      </motion.div>
    </section>
  );
}

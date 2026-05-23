'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  once?: boolean;
}

export default function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  once = true
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-80px 0px' });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

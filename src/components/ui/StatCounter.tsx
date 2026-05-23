'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: string;
  label: string;
  note?: string;
  delay?: number;
}

export default function StatCounter({ value, label, note, delay = 0 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const [displayed, setDisplayed] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;
    
    const timer = setTimeout(() => {
      setHasAnimated(true);
      
      // Parse the numeric part
      const match = value.match(/^([\d.]+)(.*)/);
      if (!match) {
        setDisplayed(value);
        return;
      }
      
      const numStr = match[1];
      const suffix = match[2] || '';
      const num = parseFloat(numStr);
      const isDecimal = numStr.includes('.');
      const decimals = isDecimal ? numStr.split('.')[1].length : 0;
      
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = num * eased;
        
        if (isDecimal) {
          setDisplayed(current.toFixed(decimals) + suffix);
        } else {
          setDisplayed(Math.round(current) + suffix);
        }
        
        if (step >= steps) {
          clearInterval(interval);
          setDisplayed(value);
        }
      }, stepTime);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [isInView, value, delay, hasAnimated]);

  return (
    <div ref={ref} className="group text-center md:text-left">
      <div className="stat-number text-5xl md:text-6xl lg:text-7xl font-light italic gold-gradient number-display">
        {displayed}
      </div>
      <div className="font-body text-[0.75rem] tracking-[0.25em] uppercase text-silver mt-2 mb-1">
        {label}
      </div>
      {note && (
        <div className="font-body text-[0.65rem] text-silver-dim max-w-[180px] mx-auto md:mx-0">
          {note}
        </div>
      )}
    </div>
  );
}

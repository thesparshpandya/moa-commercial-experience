'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simulates a "live" visitor count with realistic fluctuation
function generateDailyBase(): number {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sun, 6 = Sat
  const hour = now.getHours();

  // Weekend traffic peaks
  const dayMultiplier = [1.4, 0.7, 0.75, 0.8, 0.9, 1.2, 1.5][dayOfWeek];

  // Hour-of-day traffic curve (6am–11pm)
  const hourCurve: Record<number, number> = {
    6: 0.1, 7: 0.2, 8: 0.3, 9: 0.5, 10: 0.7, 11: 0.85,
    12: 1.0, 13: 1.0, 14: 0.95, 15: 0.9, 16: 0.95, 17: 0.9,
    18: 0.85, 19: 0.8, 20: 0.7, 21: 0.5, 22: 0.3, 23: 0.1,
  };
  const hourMultiplier = hourCurve[hour] ?? 0.05;

  // MOA peak is ~150,000 visitors on peak weekend days
  return Math.round(150000 * dayMultiplier * hourMultiplier);
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-US');
}

export default function LiveVisitorCounter() {
  const [count, setCount] = useState(generateDailyBase());
  const [delta, setDelta] = useState<number>(0);
  const [flicker, setFlicker] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Tick every 3–6 seconds with small random fluctuation
    const tick = () => {
      const variance = Math.floor(Math.random() * 24) - 8; // -8 to +16
      setCount(prev => {
        const next = Math.max(100, prev + variance);
        setDelta(variance);
        return next;
      });
      setFlicker(true);
      setTimeout(() => setFlicker(false), 400);

      // Schedule next tick at random interval
      const delay = 3000 + Math.random() * 3000;
      intervalRef.current = setTimeout(tick, delay);
    };

    intervalRef.current = setTimeout(tick, 4000);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* Pulsing live dot */}
      <div className="relative flex items-center justify-center w-3 h-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-3">
          <span
            className={`font-mono text-2xl md:text-3xl font-light transition-colors duration-300 ${
              flicker ? 'text-gold-light' : 'text-platinum'
            }`}
          >
            {formatNumber(count)}
          </span>

          {/* Delta indicator */}
          <AnimatePresence mode="wait">
            {delta !== 0 && (
              <motion.span
                key={count}
                initial={{ opacity: 0, y: delta > 0 ? 8 : -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-xs font-mono ${delta > 0 ? 'text-green-400' : 'text-red-400/70'}`}
              >
                {delta > 0 ? '+' : ''}{delta}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <span className="label-tag" style={{ fontSize: '0.5rem', color: 'var(--color-silver-dim)' }}>
          Estimated Visitors In-Mall Right Now
        </span>
      </div>
    </div>
  );
}

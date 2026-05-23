'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function useMediaKit() {
  const [toast, setToast] = useState(false);
  const [progress, setProgress] = useState(0);

  const triggerDownload = useCallback(() => {
    setToast(true);
    setProgress(0);

    // Simulate download progress
    const steps = [10, 25, 45, 68, 82, 100];
    steps.forEach((p, i) => {
      setTimeout(() => {
        setProgress(p);
        if (p === 100) {
          setTimeout(() => setToast(false), 1500);
        }
      }, i * 350);
    });
  }, []);

  const ToastComponent = () => (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 80, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 40, x: '-50%' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 left-1/2 z-[8500] bg-black-card border border-gold/30 px-8 py-5 min-w-[320px]"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="text-gold text-lg">↓</div>
            <div>
              <div className="text-platinum text-sm font-light">
                {progress < 100 ? 'Preparing Media Kit...' : 'Download Complete ✦'}
              </div>
              <div className="label-tag text-silver-dim" style={{ fontSize: '0.5rem' }}>
                MOA_2026_Partnership_MediaKit.pdf
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-[2px] bg-white/5 w-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A)' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return { triggerDownload, ToastComponent };
}

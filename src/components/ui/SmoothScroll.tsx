'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;

    const initLenis = async () => {
      try {
        // Try the new 'lenis' package first, fallback to @studio-freight/lenis
        let LenisClass;
        try {
          const mod = await import('lenis');
          LenisClass = mod.default;
        } catch {
          const mod = await import('lenis' as any);
          LenisClass = mod.default;
        }

        lenis = new LenisClass({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        // Native scroll fallback — no-op
        console.info('Smooth scroll unavailable, using native scroll');
      }
    };

    initLenis();
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  return <>{children}</>;
}

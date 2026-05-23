'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[500px]"
      >
        <div className="font-display text-[8rem] font-light italic gold-gradient leading-none mb-6">
          404
        </div>
        <div className="label-tag mb-4">Page Not Found</div>
        <h1 className="font-display text-3xl font-light text-platinum mb-6">
          This destination doesn't exist.
        </h1>
        <p className="text-silver-dim text-sm leading-relaxed mb-10">
          But 500+ others do. Head back to the platform and explore the world's most visited mall.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          <span>Return to Platform</span>
          <span>→</span>
        </Link>
      </motion.div>
    </main>
  );
}

'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-[500px]">
        <div className="font-display text-6xl font-light italic gold-gradient leading-none mb-6">
          Oops.
        </div>
        <div className="label-tag mb-4 text-red-400">System Error</div>
        <h1 className="font-display text-3xl font-light text-platinum mb-6">
          Something went wrong.
        </h1>
        <p className="text-silver-dim text-sm leading-relaxed mb-10">
          We encountered an unexpected error. Please try again or return home.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            <span>Try Again</span>
          </button>
          <Link href="/" className="btn-secondary">
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

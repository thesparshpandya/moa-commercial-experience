import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Shared easing curves
export const EASING = {
  expo: [0.16, 1, 0.3, 1] as const,
  expoInOut: [0.87, 0, 0.13, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};

// Shared animation variants
export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASING.expo },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay, ease: EASING.smooth },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Allow build to succeed even with TS errors (Vercel compatibility)
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize for Vercel
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;

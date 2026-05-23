import type { Metadata } from 'next';
import '@/styles/globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import SmoothScroll from '@/components/ui/SmoothScroll';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SideNav from '@/components/ui/SideNav';

export const metadata: Metadata = {
  title: 'Mall of America — Partnership Platform',
  description:
    "Where Brands Become Destinations. The world's premier retail and entertainment destination — 40 million visitors, 5.6 million square feet, infinite possibilities.",
  keywords: 'Mall of America, leasing, sponsorship, events, retail, venue, Bloomington Minnesota',
  openGraph: {
    title: 'Mall of America — Partnership Platform',
    description: 'Where Brands Become Destinations. 40M visitors. 5.6M sq ft.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Mall of America Partnership Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mall of America — Partnership Platform',
    description: 'Where Brands Become Destinations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body>
        <div className="noise" aria-hidden="true" />
        <ScrollProgress />
        <CustomCursor />
        <SideNav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

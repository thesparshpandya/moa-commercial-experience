'use client';

import { useMediaKit } from '@/components/ui/MediaKitToast';
import Link from 'next/link';

const quickLinks = [
  { label: 'Retail Leasing', href: '/leasing' },
  { label: 'Sponsorship', href: '/sponsorship' },
  { label: 'Events & Venue', href: '/events' },
];

export default function Footer() {
  const { triggerDownload, ToastComponent } = useMediaKit();

  return (
    <footer className="relative bg-black border-t border-gold/10">
      {/* Top footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          {/* Brand column */}
          <div>
            <div className="font-display text-2xl font-light text-platinum mb-2">
              Mall of America
            </div>
            <div className="label-tag text-silver-dim mb-6" style={{ fontSize: '0.5rem' }}>
              Partnership Platform
            </div>
            <p className="text-silver-dim text-sm leading-relaxed mb-6 max-w-[260px]">
              North America's most visited destination. 40M annual visitors. 
              5.6M square feet. One iconic address.
            </p>
            <button
              onClick={triggerDownload}
              className="btn-secondary text-xs py-3 px-5 gap-2"
            >
              <span>↓</span>
              <span>Download 2026 Media Kit</span>
            </button>
          </div>

          {/* Explore column */}
          <div>
            <div className="label-tag mb-5">Explore</div>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="cursor-none text-silver-dim text-sm hover:text-gold-light transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <div className="label-tag mb-5">Contact</div>
            <div className="flex flex-col gap-3 text-sm text-silver-dim">
              <div>
                <div className="text-silver mb-0.5">Leasing</div>
                <div className="font-mono text-xs">leasing@mallofamerica.com</div>
              </div>
              <div>
                <div className="text-silver mb-0.5">Partnerships</div>
                <div className="font-mono text-xs">partnerships@mallofamerica.com</div>
              </div>
              <div>
                <div className="text-silver mb-0.5">Events</div>
                <div className="font-mono text-xs">events@mallofamerica.com</div>
              </div>
            </div>
          </div>

          {/* Address column */}
          <div>
            <div className="label-tag mb-5">Location</div>
            <address className="not-italic text-silver-dim text-sm leading-relaxed">
              60 East Broadway<br />
              Bloomington, MN 55425<br />
              United States
            </address>
            <div className="mt-4 text-silver-dim text-xs leading-relaxed">
              <div>MSP Airport — 7 min</div>
              <div>Downtown Minneapolis — 20 min</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="label-tag text-silver-dim" style={{ fontSize: '0.5rem' }}>
            © 2025 Mall of America. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold/30 text-xs">✦</span>
            <span className="label-tag text-silver-dim" style={{ fontSize: '0.5rem' }}>
              Where Brands Become Destinations
            </span>
            <span className="text-gold/30 text-xs">✦</span>
          </div>
          <div className="label-tag text-silver-dim" style={{ fontSize: '0.5rem' }}>
            Confidential — For Authorized Partner Use Only
          </div>
        </div>
      </div>

      <ToastComponent />
    </footer>
  );
}

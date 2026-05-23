'use client';

import Reveal from '@/components/ui/Reveal';
import ZoneMap from '@/components/ui/ZoneMap';

export default function ZoneMapSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-black-soft">
      <div className="absolute top-0 left-0 right-0 line-gold" />
      <div className="absolute inset-0 grid-lines opacity-10" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="label-tag mb-4">Property Intelligence</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05]">
                <span className="platinum-gradient">Know your zone.</span>
                <br />
                <span className="italic gold-gradient">Own your moment.</span>
              </h2>
            </div>
            <p className="text-silver-dim text-sm max-w-[320px] leading-relaxed">
              Each zone of Mall of America has a distinct audience profile, traffic pattern, 
              and commercial DNA. Explore the map to find your brand's natural home.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ZoneMap />
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 line-gold" />
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import mallData from '@/data/mall.json';

const leasingImages = [
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=800&q=80&fit=crop',
];

interface RetailSectionProps {
  onOpenModal: () => void;
}

export default function RetailSection({ onOpenModal }: RetailSectionProps) {
  const [activeTier, setActiveTier] = useState(0);

  return (
    <section id="retail" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="line-gold flex-1 max-w-[80px]" />
            <div className="label-tag">Retail Leasing</div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em]">
            <span className="platinum-gradient">500+ stores. </span>
            <br />
            <span className="italic gold-gradient">One address.</span>
          </h2>
        </Reveal>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 mb-20">
          {/* Left: tier selector */}
          <div>
            <Reveal>
              <p className="text-silver leading-relaxed mb-10 text-base md:text-lg max-w-[480px]">
                MOA offers the nation's most coveted retail real estate — a platform where 
                flagship stores become cultural moments and pop-up activations go viral.
              </p>
            </Reveal>

            <div className="flex flex-col gap-2">
              {mallData.leasingTiers.map((tier, i) => (
                <Reveal key={tier.id} delay={i * 0.08}>
                  <button
                    className={`cursor-none text-left p-6 border transition-all duration-500 ${
                      activeTier === i 
                        ? 'border-gold/40 bg-black-card glow-gold' 
                        : 'border-white/5 hover:border-gold/20'
                    }`}
                    onClick={() => setActiveTier(i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="label-tag mb-2">{tier.id}</div>
                        <h3 className={`font-display text-xl font-light transition-colors duration-300 ${
                          activeTier === i ? 'text-gold-light' : 'text-platinum'
                        }`}>
                          {tier.title}
                        </h3>
                      </div>
                      <span className={`text-xl transition-transform duration-300 mt-1 ${
                        activeTier === i ? 'rotate-90' : ''
                      }`} style={{ color: activeTier === i ? 'var(--color-gold)' : 'var(--color-silver-dim)' }}>
                        →
                      </span>
                    </div>
                    
                    {activeTier === i && (
                      <div className="mt-4 pt-4 border-t border-gold/10">
                        <p className="text-silver-dim text-sm leading-relaxed mb-4">{tier.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="label-tag mb-1" style={{ fontSize: '0.5rem' }}>Space Range</div>
                            <div className="text-platinum text-sm font-light">{tier.sqft}</div>
                          </div>
                          <div>
                            <div className="label-tag mb-1" style={{ fontSize: '0.5rem' }}>Audience</div>
                            <div className="text-platinum text-sm font-light">{tier.traffic}</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {tier.examples.map(ex => (
                            <span key={ex} className="text-[0.65rem] px-3 py-1 border border-gold/20 text-silver-dim tracking-wider">
                              {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </button>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-8">
              <button onClick={onOpenModal} className="btn-primary">
                <span>Explore Leasing Opportunities</span>
                <span>→</span>
              </button>
            </Reveal>
          </div>

          {/* Right: image grid */}
          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-3 h-full">
              {leasingImages.map((src, i) => (
                <div 
                  key={i} 
                  className={`relative overflow-hidden card-hover ${i === 0 ? 'col-span-2 h-64' : 'h-52'}`}
                >
                  <img
                    src={src}
                    alt="Retail space"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Tenant marquee */}
        <Reveal className="overflow-hidden">
          <div className="label-tag mb-6 text-center">Key Tenants</div>
          <div className="line-gold mb-6" />
          <div className="overflow-hidden">
            <div className="marquee-track py-4">
              {[...mallData.keyTenants, ...mallData.keyTenants].map((tenant, i) => (
                <div key={i} className="flex items-center gap-12 mx-12 shrink-0">
                  <span className="font-display text-2xl font-light italic text-silver/50 hover:text-gold/70 transition-colors duration-300 whitespace-nowrap cursor-none">
                    {tenant}
                  </span>
                  <span className="text-gold/30 text-xs">✦</span>
                </div>
              ))}
            </div>
          </div>
          <div className="line-gold mt-6" />
        </Reveal>
      </div>
    </section>
  );
}

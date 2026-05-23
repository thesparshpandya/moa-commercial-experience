'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import mallData from '@/data/mall.json';

interface SponsorshipSectionProps {
  onOpenModal: () => void;
}

const mockupImages = [
  {
    label: 'LED Atrium Takeover',
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80&fit=crop',
    desc: 'Full digital domination across all LED screens'
  },
  {
    label: 'Rotunda Brand Activation',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop',
    desc: 'Center-stage presence at the heart of the mall'
  },
  {
    label: 'Experiential Pop-Up',
    src: 'https://images.unsplash.com/photo-1558611439-a70a07e4aa51?w=800&q=80&fit=crop',
    desc: 'Immersive branded environments'
  },
];

export default function SponsorshipSection({ onOpenModal }: SponsorshipSectionProps) {
  const [activeTier, setActiveTier] = useState(0);
  const [hoveredMockup, setHoveredMockup] = useState<number | null>(null);

  return (
    <section id="sponsorship" className="relative py-28 md:py-36 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)'
      }} />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-20">
          <div className="max-w-[720px]">
            <div className="label-tag mb-6">Brand Sponsorship & Partnerships</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em]">
              <span className="platinum-gradient">Own the stage. </span>
              <br />
              <span className="italic gold-gradient">Own the moment.</span>
            </h2>
            <p className="text-silver mt-8 text-base leading-relaxed max-w-[500px]">
              MOA sponsorship means your brand is woven into the fabric of how 
              40 million people experience retail, entertainment, and culture each year.
            </p>
          </div>
        </Reveal>

        {/* Tier selector */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 mb-20">
          <div className="flex flex-col gap-4">
            {mallData.sponsorshipTiers.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 0.1}>
                <button
                  className={`cursor-none text-left p-8 border transition-all duration-500 ${
                    activeTier === i 
                      ? 'border-gold/50 bg-black-card glow-gold' 
                      : 'border-white/5 hover:border-gold/20'
                  }`}
                  onClick={() => setActiveTier(i)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="label-tag mb-2 text-silver-dim">Tier {i + 1}</div>
                      <h3 className={`font-display text-2xl font-light transition-colors duration-300 ${
                        activeTier === i ? 'gold-gradient' : 'text-platinum'
                      }`}>
                        {tier.tier}
                      </h3>
                    </div>
                    <div className={`font-display text-lg italic transition-colors duration-300 ${
                      activeTier === i ? 'text-gold' : 'text-silver-dim'
                    }`}>
                      {tier.investment}
                    </div>
                  </div>
                  
                  {activeTier === i && (
                    <div className="mt-4 pt-4 border-t border-gold/10">
                      <p className="text-silver-dim text-sm leading-relaxed mb-4">{tier.description}</p>
                      <div className="flex flex-col gap-2">
                        {tier.includes.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="text-gold text-xs">✦</span>
                            <span className="text-silver text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          {/* Right: activation mockup previews */}
          <Reveal direction="right">
            <div className="label-tag mb-6">AI-Conceptualized Activation Examples</div>
            <div className="flex flex-col gap-4">
              {mockupImages.map((mockup, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden cursor-none card-hover"
                  onMouseEnter={() => setHoveredMockup(i)}
                  onMouseLeave={() => setHoveredMockup(null)}
                >
                  <div className="relative h-40 md:h-48">
                    <img
                      src={mockup.src}
                      alt={mockup.label}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredMockup === i ? 'scale-110 brightness-75' : 'scale-100 brightness-50'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="label-tag mb-1">{mockup.label}</div>
                      <p className="text-silver text-sm">{mockup.desc}</p>
                    </div>

                    {/* AI badge */}
                    <div className="absolute top-4 right-4 bg-gold/10 border border-gold/20 px-3 py-1">
                      <span className="label-tag text-gold" style={{ fontSize: '0.45rem' }}>AI Concept</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Audience data panel */}
        <Reveal>
          <div className="border-gold-subtle p-8 md:p-12 bg-black-card/30">
            <div className="label-tag mb-8 text-center">Audience Intelligence</div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { stat: '40M', label: 'Annual Reach', detail: 'Unparalleled impressions in a single venue' },
                { stat: '40%', label: 'Out-of-State', detail: 'Premium tourist & travel demographic' },
                { stat: '$82K', label: 'Med. HH Income', detail: 'Affluent, discretionary-spend audience' },
                { stat: '78%', label: 'Brand Recall', detail: 'Post-activation brand awareness uplift' },
              ].map((item) => (
                <div key={item.stat} className="text-center">
                  <div className="stat-number text-4xl font-light italic gold-gradient mb-2">{item.stat}</div>
                  <div className="label-tag mb-2">{item.label}</div>
                  <p className="text-silver-dim text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <button onClick={onOpenModal} className="btn-primary">
            <span>Partner With the Destination</span>
            <span>→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

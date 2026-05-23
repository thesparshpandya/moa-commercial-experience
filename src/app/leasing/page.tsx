'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import StatCounter from '@/components/ui/StatCounter';
import ContactModal from '@/components/ui/ContactModal';
import mallData from '@/data/mall.json';

export default function LeasingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTier, setActiveTier] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Back nav */}
      <div className="fixed top-6 left-8 z-[7000]">
        <Link href="/" className="label-tag cursor-none hover:text-gold-light transition-colors duration-200 flex items-center gap-2">
          ← Back to Overview
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=2400&q=80&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="relative max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-tag mb-6">Retail Leasing — Deep Dive</div>
            <h1 className="font-display text-6xl md:text-8xl font-light leading-[1] tracking-[-0.03em] mb-6">
              <span className="platinum-gradient">Your Brand's</span>
              <br />
              <span className="italic gold-gradient">Greatest Stage.</span>
            </h1>
            <p className="text-silver text-lg max-w-[520px] leading-relaxed mb-10">
              MOA offers 2.87 million square feet of retail space and a platform that transforms 
              brands into cultural icons — one visitor at a time.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              <span>Schedule a Leasing Consultation</span>
              <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-12 border-t border-gold/10 bg-black-soft">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { value: '2.87M', label: 'Retail Sq Ft' },
            { value: '500+', label: 'Active Tenants' },
            { value: '40M', label: 'Annual Visitors' },
            { value: '4.3h', label: 'Avg Dwell Time' },
          ].map((s, i) => (
            <StatCounter key={s.label} {...s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Leasing paths */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-platinum">
              Choose Your <span className="italic gold-gradient">Footprint</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {mallData.leasingTiers.map((tier, i) => (
              <Reveal key={tier.id} delay={i * 0.1}>
                <div
                  className={`border p-8 transition-all duration-500 cursor-none card-hover ${
                    activeTier === tier.id 
                      ? 'border-gold/50 bg-black-card glow-gold' 
                      : 'border-white/5 bg-black-card/20'
                  }`}
                  onClick={() => setActiveTier(activeTier === tier.id ? null : tier.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="label-tag mb-2 text-silver-dim">0{i + 1}</div>
                      <h3 className="font-display text-2xl font-light text-platinum">{tier.title}</h3>
                    </div>
                    <span className={`transition-transform duration-300 text-gold ${activeTier === tier.id ? 'rotate-90' : ''}`}>→</span>
                  </div>
                  <p className="text-silver-dim text-sm leading-relaxed mb-4">{tier.description}</p>
                  <div className="flex gap-6">
                    <div>
                      <div className="label-tag" style={{ fontSize: '0.5rem' }}>Space</div>
                      <div className="text-platinum text-sm mt-1">{tier.sqft}</div>
                    </div>
                    <div>
                      <div className="label-tag" style={{ fontSize: '0.5rem' }}>Audience</div>
                      <div className="text-platinum text-sm mt-1">{tier.traffic}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tier.examples.map(ex => (
                      <span key={ex} className="text-[0.65rem] px-3 py-1 border border-gold/20 text-silver-dim">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              <span>Request Leasing Information Package</span>
              <span>→</span>
            </button>
          </Reveal>
        </div>
      </section>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="Retail Leasing"
      />
    </main>
  );
}

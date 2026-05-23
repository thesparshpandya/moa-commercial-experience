'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import ContactModal from '@/components/ui/ContactModal';
import mallData from '@/data/mall.json';

export default function SponsorshipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const tryUnlock = () => {
    if (accessCode.toUpperCase() === 'MOA2025') {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="fixed top-6 left-8 z-[7000]">
        <Link href="/" className="label-tag cursor-none hover:text-gold-light transition-colors duration-200 flex items-center gap-2">
          ← Back to Overview
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-28 px-6 md:px-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=2400&q=80&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        </div>
        <div className="relative max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label-tag mb-6">Brand Sponsorship & Partnerships</div>
            <h1 className="font-display text-6xl md:text-8xl font-light leading-[1] tracking-[-0.03em] mb-6">
              <span className="platinum-gradient">40 Million Eyes</span>
              <br />
              <span className="italic gold-gradient">On Your Brand.</span>
            </h1>
            <p className="text-silver text-lg max-w-[520px] leading-relaxed mb-10">
              MOA sponsorship delivers the scale of national advertising with the intimacy 
              of a live brand experience — all within a single, unmissable destination.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              <span>Discuss Sponsorship Opportunities</span>
              <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-24 px-6 md:px-12 bg-black-soft">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-platinum">
              Partnership <span className="italic gold-gradient">Tiers</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {mallData.sponsorshipTiers.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 0.1}>
                <div className={`border-gold-subtle p-8 card-hover bg-black-card/30 h-full flex flex-col ${
                  i === 0 ? 'glow-gold border-gold/30' : ''
                }`}>
                  {i === 0 && <div className="label-tag mb-4 text-gold">Flagship Tier</div>}
                  <h3 className="font-display text-2xl font-light gold-gradient mb-2">{tier.tier}</h3>
                  <div className="font-body text-sm text-silver-dim mb-4">{tier.investment}/year</div>
                  <p className="text-silver text-sm leading-relaxed mb-6 flex-1">{tier.description}</p>
                  <div className="flex flex-col gap-2">
                    {tier.includes.map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-gold text-xs shrink-0">✦</span>
                        <span className="text-silver-dim text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locked pricing section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <Reveal>
            <div className="border border-gold/20 p-12 bg-black-card/20">
              {!unlocked ? (
                <>
                  <div className="text-4xl mb-6">🔒</div>
                  <div className="label-tag mb-4">Confidential Pricing Package</div>
                  <h3 className="font-display text-3xl font-light text-platinum mb-4">
                    Access Detailed Sponsorship Rates
                  </h3>
                  <p className="text-silver-dim text-sm mb-8 max-w-[400px] mx-auto">
                    Enter your partner access code to view detailed pricing, audience data, 
                    and activation specifications.
                  </p>
                  <div className="flex gap-3 max-w-[360px] mx-auto">
                    <input
                      type="text"
                      value={accessCode}
                      onChange={e => { setAccessCode(e.target.value); setError(false); }}
                      onKeyDown={e => e.key === 'Enter' && tryUnlock()}
                      placeholder="Enter Access Code"
                      className="flex-1 bg-black-mid border border-gold/20 text-platinum text-sm px-4 py-3 outline-none focus:border-gold/50 cursor-none font-mono tracking-widest text-center uppercase"
                    />
                    <button onClick={tryUnlock} className="btn-primary py-3 px-6 text-xs">
                      <span>→</span>
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-400 text-xs mt-3 label-tag">
                      Invalid code. Contact partnerships@mallofamerica.com for access.
                    </p>
                  )}
                  <p className="text-silver-dim text-xs mt-4">
                    Hint: Try <span className="font-mono text-gold/60">MOA2025</span>
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-4xl mb-6">✦</div>
                  <div className="label-tag text-gold mb-4">Access Granted</div>
                  <h3 className="font-display text-3xl font-light text-platinum mb-8">
                    2025 Sponsorship Rates
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    {[
                      { tier: 'Destination Partner', rate: '$5M+', note: 'Naming rights + full program', cpm: '$0.13 CPM' },
                      { tier: 'Seasonal Campaign', rate: '$500K–$2M', note: 'Seasonal takeover program', cpm: '$0.05 CPM' },
                      { tier: 'Digital Media', rate: '$50K–$500K', note: 'Digital network placement', cpm: '$0.02 CPM' },
                    ].map(t => (
                      <div key={t.tier} className="border border-gold/20 p-6">
                        <div className="label-tag mb-2 text-silver-dim">{t.tier}</div>
                        <div className="stat-number text-2xl gold-gradient mb-1">{t.rate}</div>
                        <div className="text-silver-dim text-xs mb-3">{t.note}</div>
                        <div className="text-gold text-xs font-mono">{t.cpm}</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setModalOpen(true)} className="btn-primary mt-8">
                    <span>Schedule Partnership Call</span>
                    <span>→</span>
                  </button>
                </motion.div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject="Brand Sponsorship"
      />
    </main>
  );
}

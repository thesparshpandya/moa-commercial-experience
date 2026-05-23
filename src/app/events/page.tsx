'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import StatCounter from '@/components/ui/StatCounter';
import ContactModal from '@/components/ui/ContactModal';
import mallData from '@/data/mall.json';

const heroStats = [
  { value: '400+', label: 'Events Per Year' },
  { value: '4', label: 'Venue Spaces' },
  { value: '50K', label: 'Max Capacity' },
  { value: '100%', label: 'A/V Infrastructure' },
];

export default function EventsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="fixed top-6 left-8 z-[7000]">
        <Link href="/" className="label-tag cursor-none hover:text-gold-light transition-colors duration-200 flex items-center gap-2">
          ← Back to Overview
        </Link>
      </div>

      <section className="relative py-28 px-6 md:px-12">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2400&q=80&fit=crop"
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
            <div className="label-tag mb-6">Events & Venue Platform</div>
            <h1 className="font-display text-6xl md:text-8xl font-light leading-[1] tracking-[-0.03em] mb-6">
              <span className="platinum-gradient">The Stage is</span>
              <br />
              <span className="italic gold-gradient">Already Set.</span>
            </h1>
            <p className="text-silver text-lg max-w-[520px] leading-relaxed mb-10">
              400+ events per year. 4 world-class venues. One address that makes your event
              unmissable — for 40 million people who walk through these doors.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              <span>Book an Activation</span>
              <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-black-soft border-t border-gold/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {heroStats.map((s, i) => (
            <StatCounter key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light text-platinum">
              Venue <span className="italic gold-gradient">Directory</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {mallData.eventSpaces.map((space, i) => (
              <Reveal key={space.name} delay={i * 0.1}>
                <div className="border-gold-subtle p-8 bg-black-card/20 card-hover group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="label-tag mb-2 text-silver-dim">Venue 0{i + 1}</div>
                      <h3 className="font-display text-2xl font-light text-platinum group-hover:text-gold-light transition-colors duration-300">
                        {space.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="stat-number text-2xl gold-gradient">{space.capacity}</div>
                      <div className="label-tag" style={{ fontSize: '0.45rem' }}>Capacity</div>
                    </div>
                  </div>
                  <p className="text-silver-dim text-sm leading-relaxed mb-6">{space.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {space.useCases.map((uc) => (
                      <span key={uc} className="text-[0.65rem] px-3 py-1 border border-gold/15 text-silver">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="label-tag mb-8">Notable Past Events</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {mallData.pastEvents.map((event, i) => (
                <Reveal key={event.name} delay={i * 0.07}>
                  <div className="border-gold-subtle p-5 card-hover group">
                    <div className="label-tag mb-2 text-silver-dim group-hover:text-gold transition-colors duration-300">
                      {event.type}
                    </div>
                    <div className="font-display text-base text-platinum mb-3 group-hover:text-gold-light transition-colors duration-300">
                      {event.name}
                    </div>
                    <div className="stat-number text-2xl gold-gradient">{event.attendance}</div>
                    <div className="label-tag mt-1" style={{ fontSize: '0.45rem' }}>Attendees</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              <span>Start Your Event Inquiry</span>
              <span>→</span>
            </button>
          </Reveal>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} subject="Event Booking" />
    </main>
  );
}

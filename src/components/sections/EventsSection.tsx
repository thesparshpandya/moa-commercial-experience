'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import mallData from '@/data/mall.json';

interface EventsSectionProps {
  onOpenModal: () => void;
}

const venueImages: Record<string, string> = {
  'The Rotunda': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&fit=crop',
  'Huntington Bank Stadium Club': 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1200&q=80&fit=crop',
  'Parkview Meeting Spaces': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop',
  'Nickelodeon Universe': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80&fit=crop',
};

export default function EventsSection({ onOpenModal }: EventsSectionProps) {
  const [activeVenue, setActiveVenue] = useState(0);
  const venue = mallData.eventSpaces[activeVenue];

  return (
    <section id="events" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-black-soft" />
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="label-tag">Events & Activations</div>
            <div className="line-gold flex-1" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em]">
            <span className="platinum-gradient">Build experiences</span>
            <br />
            <span className="italic gold-gradient">the world talks about.</span>
          </h2>
        </Reveal>

        {/* Venue explorer */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 mb-20">
          {/* Image panel */}
          <Reveal>
            <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
              <img
                key={activeVenue}
                src={venueImages[venue.name]}
                alt={venue.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="label-tag mb-2">{venue.capacity} Capacity</div>
                <h3 className="font-display text-3xl font-light text-platinum mb-3">{venue.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {venue.useCases.map(uc => (
                    <span key={uc} className="text-[0.65rem] px-3 py-1 bg-black/40 border border-gold/20 text-silver tracking-wider">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Venue list + details */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-silver leading-relaxed text-base mb-6">
                MOA hosts over 400 events per year — from intimate VIP brand launches to 
                massive concerts drawing 50,000 fans. Four world-class spaces. 
                Zero compromises.
              </p>
            </Reveal>

            {mallData.eventSpaces.map((space, i) => (
              <Reveal key={space.name} delay={i * 0.08}>
                <button
                  className={`cursor-none text-left w-full p-5 border transition-all duration-500 ${
                    activeVenue === i 
                      ? 'border-gold/40 bg-black-card' 
                      : 'border-white/5 hover:border-gold/20 bg-transparent'
                  }`}
                  onClick={() => setActiveVenue(i)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-display text-lg font-light transition-colors duration-300 ${
                        activeVenue === i ? 'text-gold-light' : 'text-platinum'
                      }`}>
                        {space.name}
                      </div>
                      <div className="label-tag mt-1" style={{ fontSize: '0.5rem', color: 'var(--color-silver-dim)' }}>
                        {space.capacity}
                      </div>
                    </div>
                    <div className={`w-6 h-6 border flex items-center justify-center text-xs transition-all duration-300 ${
                      activeVenue === i 
                        ? 'border-gold bg-gold text-black' 
                        : 'border-silver-dim/30 text-silver-dim'
                    }`}>
                      {activeVenue === i ? '✦' : `0${i + 1}`}
                    </div>
                  </div>
                  
                  {activeVenue === i && (
                    <p className="mt-3 pt-3 border-t border-gold/10 text-silver-dim text-sm leading-relaxed">
                      {space.description}
                    </p>
                  )}
                </button>
              </Reveal>
            ))}

            <Reveal delay={0.4} className="mt-4">
              <button onClick={onOpenModal} className="btn-primary w-full justify-center">
                <span>Book an Activation</span>
                <span>→</span>
              </button>
            </Reveal>
          </div>
        </div>

        {/* Past events ticker */}
        <Reveal>
          <div className="label-tag mb-8 text-center">Past Events — By the Numbers</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mallData.pastEvents.map((event, i) => (
              <Reveal key={event.name} delay={i * 0.07}>
                <div className="border-gold-subtle p-5 bg-black-card/20 card-hover group">
                  <div className="label-tag mb-2 text-silver-dim group-hover:text-gold transition-colors duration-300">
                    {event.type}
                  </div>
                  <div className="font-display text-base font-light text-platinum mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {event.name}
                  </div>
                  <div className="stat-number text-2xl gold-gradient">{event.attendance}</div>
                  <div className="label-tag" style={{ fontSize: '0.5rem' }}>Attendees</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 line-gold" />
    </section>
  );
}

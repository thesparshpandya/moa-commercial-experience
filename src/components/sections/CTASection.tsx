'use client';

import Reveal from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onOpenModal: (subject?: string) => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-36 md:py-48 overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Dramatic background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=2400&q=80&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
      </div>
      
      {/* Gold glow center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full" style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)'
        }} />
      </div>

      <div className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <div className="label-tag mb-8">Ready to Begin?</div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-display text-6xl md:text-7xl lg:text-[8rem] font-light leading-[0.95] tracking-[-0.03em] mb-8">
            <span className="platinum-gradient">Let's build</span>
            <br />
            <span className="italic gold-gradient">something iconic.</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-silver text-base md:text-lg leading-relaxed mb-12 max-w-[520px] mx-auto">
            Our partnership team is ready to design a custom program for your brand — 
            whether that's retail space, a sponsorship tier, or an unforgettable activation.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => onOpenModal('Retail Leasing')} className="btn-primary">
              <span>Explore Leasing</span>
              <span>→</span>
            </button>
            <button onClick={() => onOpenModal('Brand Sponsorship')} className="btn-secondary">
              <span>Discuss Sponsorship</span>
            </button>
            <button onClick={() => onOpenModal('Event Booking')} className="btn-secondary">
              <span>Book an Event</span>
            </button>
          </div>
        </Reveal>

        {/* Contact info */}
        <Reveal delay={0.4}>
          <div className="line-gold mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Retail Leasing', contact: 'leasing@mallofamerica.com', note: '24-hour response' },
              { label: 'Sponsorships', contact: 'partnerships@mallofamerica.com', note: 'Senior team access' },
              { label: 'Events & Venue', contact: 'events@mallofamerica.com', note: 'Dedicated coordinator' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="label-tag mb-2">{item.label}</div>
                <div className="text-silver text-sm mb-1 font-mono">{item.contact}</div>
                <div className="label-tag text-silver-dim" style={{ fontSize: '0.5rem' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

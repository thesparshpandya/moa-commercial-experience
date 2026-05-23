'use client';

import { useState, useEffect } from 'react';
import Reveal from '@/components/ui/Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Launching our flagship at Mall of America gave us access to a global audience on day one. No other single location delivers that kind of reach.",
    name: "VP of Retail Expansion",
    company: "Premium Apparel Brand",
    category: "Retail Leasing"
  },
  {
    quote: "The Rotunda activation exceeded every KPI we had. 60,000 organic social impressions in a single weekend from one space.",
    name: "Senior Brand Partnerships Director",
    company: "Global Consumer Brand",
    category: "Brand Sponsorship"
  },
  {
    quote: "There's no venue in the Midwest that creates the buzz MOA does. Our product launch here became the most-shared moment in our brand's history.",
    name: "Head of Experiential Marketing",
    company: "Technology Company",
    category: "Event Activation"
  },
  {
    quote: "The tourist demographic alone justifies the investment. We see customers from 50+ countries walk through our doors every week.",
    name: "Regional Director",
    company: "International Retail Brand",
    category: "Retail Leasing"
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(i => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-black-soft" />
      {/* Dramatic gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)'
      }} />
      
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
        <Reveal className="mb-16 text-center">
          <div className="label-tag mb-4">Partner Voices</div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-platinum">
            Heard from the{' '}
            <span className="italic gold-gradient">brands that chose us.</span>
          </h2>
        </Reveal>

        {/* Testimonial display */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-[800px] mx-auto"
            >
              <div className="text-6xl text-gold/20 font-display leading-none mb-6">"</div>
              <blockquote className="font-display text-2xl md:text-3xl font-light italic text-platinum leading-[1.5] mb-8">
                {testimonials[active].quote}
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <div className="text-gold-light font-body text-sm tracking-wider">
                  {testimonials[active].name}
                </div>
                <div className="text-silver-dim text-sm">
                  {testimonials[active].company}
                </div>
                <div className="label-tag mt-2">{testimonials[active].category}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-none w-8 h-[2px] transition-all duration-500 ${
                i === active ? 'bg-gold' : 'bg-silver-dim/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import Reveal from '@/components/ui/Reveal';
import { motion } from 'framer-motion';

const luxuryHighlights = [
  {
    title: 'Curated Adjacency',
    desc: 'Your brand neighbors the most recognized names in luxury retail — the company you keep defines the clientele you attract.',
    icon: '◈',
  },
  {
    title: 'Elevated Demographics',
    desc: '$82K+ median household income among luxury wing shoppers. Tourism-driven, internationally diverse, and fiercely loyal to premium brands.',
    icon: '◇',
  },
  {
    title: 'White Glove Ops',
    desc: 'Dedicated valet, VIP shopper services, personal styling partnerships, and private event access for select tenants.',
    icon: '◻',
  },
  {
    title: 'Flagship Presence',
    desc: 'MOA provides a permanent flagship stage in a market where 40% of visitors come specifically to experience premium retail.',
    icon: '◈',
  },
];

const luxuryBrands = [
  'Coach', 'Michael Kors', 'Kate Spade', 'Tory Burch',
  'Pandora', 'Swarovski', 'Hugo Boss', 'Ted Baker',
  'Thomas Pink', 'Montblanc', 'Movado', 'Tourneau',
];

export default function LuxurySection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle gold radial glow */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <Reveal>
            <div>
              <div className="label-tag mb-6">Premium Positioning</div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.0] tracking-[-0.02em]">
                <span className="platinum-gradient">The luxury</span>
                <br />
                <span className="italic gold-gradient">standard.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-silver text-base md:text-lg leading-relaxed max-w-[460px]">
              MOA's North Garden luxury wing commands premium dwell, premium spend, and premium 
              audiences. A flagship here isn't just retail — it's brand positioning at continental scale.
            </p>
          </Reveal>
        </div>

        {/* Luxury hero image */}
        <Reveal className="mb-20">
          <div className="relative overflow-hidden aspect-[21/8]">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=2400&q=80&fit=crop"
              alt="Luxury retail environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* Centered headline overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <div className="label-tag mb-4">North Garden Luxury Wing</div>
                <div className="font-display text-4xl md:text-6xl font-light italic gold-gradient">
                  420,000 sq ft
                </div>
                <div className="font-display text-xl font-light text-platinum/70 mt-2">
                  of premium retail real estate
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {luxuryHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group card-hover border-gold-subtle bg-black-card/10 p-8 h-full flex flex-col">
                <div className="text-2xl text-gold/40 mb-6 group-hover:text-gold/80 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-light text-platinum mb-4 group-hover:text-gold-light transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-silver-dim text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Premium brand presence marquee */}
        <Reveal>
          <div className="border-y border-gold/10 py-8">
            <div className="label-tag text-center mb-6">Current Premium Tenants — North Garden</div>
            <div className="overflow-hidden">
              <div className="marquee-track" style={{ animationDuration: '25s' }}>
                {[...luxuryBrands, ...luxuryBrands].map((brand, i) => (
                  <div key={i} className="flex items-center gap-10 mx-10 shrink-0">
                    <span className="font-display text-xl italic text-silver/40 hover:text-gold/60 transition-colors duration-300 whitespace-nowrap cursor-none">
                      {brand}
                    </span>
                    <span className="text-gold/20 text-[8px]">✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats row */}
        <Reveal className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '$340', label: 'Avg Luxury Transaction', sub: 'vs $95 national mall avg' },
              { value: '82K+', label: 'Median HH Income', sub: 'Luxury visitor segment' },
              { value: '40%', label: 'International Visitors', sub: 'Tourism-powered premium spend' },
              { value: '3.1×', label: 'Repeat Visit Rate', sub: 'Luxury wing vs standard' },
            ].map((s) => (
              <div key={s.label} className="text-center border-gold-subtle p-6">
                <div className="font-display text-3xl font-light italic gold-gradient mb-2">{s.value}</div>
                <div className="label-tag mb-1">{s.label}</div>
                <div className="text-silver-dim text-[0.6rem]">{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

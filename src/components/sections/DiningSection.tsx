'use client';

import Reveal from '@/components/ui/Reveal';

const diningItems = [
  {
    name: 'Twin City Grill',
    type: 'Signature Restaurant',
    desc: 'The quintessential Twin Cities dining experience — craft cocktails, local sourcing, and Midwest hospitality at its finest.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop'
  },
  {
    name: 'The Culinary District',
    type: 'Food Hall — 30+ Concepts',
    desc: 'A curated food hall featuring the best local, national, and international concepts under one dramatic roof.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fit=crop'
  },
  {
    name: 'Bar Louie',
    type: 'Social Bar & Kitchen',
    desc: 'High-energy bar concept with extensive craft beer menu and shareable plates — perfect for post-shopping social occasions.',
    img: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&q=80&fit=crop'
  },
];

export default function DiningSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-black-mid">
      <div className="absolute inset-0 grid-lines opacity-10" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <Reveal className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="label-tag mb-4">Dining & Lifestyle</div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
                <span className="platinum-gradient">Where taste</span>
                <br />
                <span className="italic gold-gradient">meets destination.</span>
              </h2>
            </div>
            <div className="max-w-[380px]">
              <p className="text-silver leading-relaxed">
                50+ dining concepts across every tier — from fast-casual to signature fine dining. 
                Dining drives 25% of total visitor spend and is a standalone draw for the region.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Dining cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {diningItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <div className="group card-hover border-gold-subtle overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                </div>
                <div className="p-6 bg-black-card">
                  <div className="label-tag mb-2">{item.type}</div>
                  <h3 className="font-display text-xl font-light text-platinum mb-3 group-hover:text-gold-light transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-silver-dim text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* F&B stats */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '50+', label: 'Dining Concepts' },
              { value: '8M', label: 'F&B Visits/Year' },
              { value: '25%', label: 'of Visitor Spend' },
              { value: '#1', label: 'Dining Destination\nIn Minnesota' },
            ].map((item) => (
              <div key={item.label} className="text-center border-gold-subtle p-6 bg-black-card/20">
                <div className="stat-number text-4xl font-light italic gold-gradient mb-2">{item.value}</div>
                <div className="label-tag" style={{ fontSize: '0.55rem', whiteSpace: 'pre-line' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

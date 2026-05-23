'use client';

import Reveal from '@/components/ui/Reveal';
import mallData from '@/data/mall.json';

const attractionImages = [
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1569880153113-76175e76eff3?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&fit=crop',
];

export default function AttractionsSection() {
  return (
    <section id="attractions" className="relative py-28 md:py-36 overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=2400&q=80&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal className="mb-20 text-center">
          <div className="label-tag mb-6">Attractions & Entertainment</div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            <span className="platinum-gradient">A destination</span>
            <br />
            <span className="italic gold-gradient">within the destination.</span>
          </h2>
          <p className="text-silver mt-6 max-w-[560px] mx-auto text-base leading-relaxed">
            MOA isn't just a place to shop — it's a reason to travel. 
            Four world-class attractions create unmatched dwell time and repeat visits.
          </p>
        </Reveal>

        {/* Nickelodeon Universe hero */}
        <Reveal className="mb-16">
          <div className="relative overflow-hidden aspect-[21/9] md:aspect-[21/7]">
            <img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=2400&q=80&fit=crop"
              alt="Indoor theme park"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-[600px]">
              <div className="label-tag mb-3" style={{ color: '#FF6B35' }}>🎢 Featured Attraction</div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-platinum mb-4">
                Nickelodeon Universe
              </h3>
              <p className="text-silver text-sm md:text-base leading-relaxed mb-6">
                America's largest indoor theme park. 7 acres, 30+ rides, and the iconic 
                roller coasters visible from every corner of the mall. Generates 10M+ annual 
                visits independently — your brand lives alongside that gravity.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="stat-number text-3xl font-light italic gold-gradient">7</div>
                  <div className="label-tag" style={{ fontSize: '0.5rem' }}>Acres Indoor</div>
                </div>
                <div>
                  <div className="stat-number text-3xl font-light italic gold-gradient">30+</div>
                  <div className="label-tag" style={{ fontSize: '0.5rem' }}>Rides & Attractions</div>
                </div>
                <div>
                  <div className="stat-number text-3xl font-light italic gold-gradient">#1</div>
                  <div className="label-tag" style={{ fontSize: '0.5rem' }}>In the US</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Attractions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mallData.attractions.map((attraction, i) => (
            <Reveal key={attraction.name} delay={i * 0.1}>
              <div className="border-gold-subtle p-6 card-hover group h-full flex flex-col bg-black-card/30">
                <div className="text-3xl mb-4">{attraction.icon}</div>
                <h3 className="font-display text-lg font-light text-platinum mb-3 group-hover:text-gold-light transition-colors duration-300">
                  {attraction.name}
                </h3>
                <p className="text-silver-dim text-sm leading-relaxed flex-1">
                  {attraction.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Image gallery */}
        <Reveal className="mt-16">
          <div className="grid grid-cols-4 gap-2">
            {attractionImages.map((src, i) => (
              <div key={i} className="relative overflow-hidden aspect-[3/4] card-hover">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

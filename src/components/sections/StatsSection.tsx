'use client';

import StatCounter from '@/components/ui/StatCounter';
import Reveal from '@/components/ui/Reveal';
import mallData from '@/data/mall.json';

export default function StatsSection() {
  return (
    <section id="overview" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black-soft" />
      <div className="absolute inset-0 grid-lines" />
      
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 line-gold" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Header */}
        <Reveal className="mb-20">
          <div className="flex items-start gap-8 max-w-[700px]">
            <div className="pt-2">
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
            </div>
            <div>
              <div className="label-tag mb-4">The Platform — At a Glance</div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-platinum">
                A scale that transforms{' '}
                <span className="italic gold-gradient">brands into icons.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-16">
          {mallData.stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              note={stat.note}
              delay={i * 0.12}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="line-gold my-20" />

        {/* Bottom callout */}
        <Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'The Most Visited',
                desc: 'More annual visitors than the Grand Canyon, Graceland, and Walt Disney World combined. MOA is not just a mall — it\'s a national destination.'
              },
              {
                number: '02',
                title: 'Unmatched Dwell',
                desc: 'Visitors average 4.3 hours per visit — 4× the industry standard. Your brand gets more time, more attention, more conversion opportunity.'
              },
              {
                number: '03',
                title: 'Tourism-Powered',
                desc: '40% of visitors come from outside Minnesota. International tourism drives premium spend and delivers audiences no local market can replicate.'
              },
            ].map((item, i) => (
              <Reveal key={item.number} delay={i * 0.15}>
                <div className="border-gold-subtle p-8 card-hover group">
                  <div className="label-tag mb-4 text-silver-dim">{item.number}</div>
                  <h3 className="font-display text-2xl font-light text-platinum mb-4 group-hover:text-gold-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-silver-dim text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 line-gold" />
    </section>
  );
}

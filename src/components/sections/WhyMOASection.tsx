'use client';

import Reveal from '@/components/ui/Reveal';
import LiveVisitorCounter from '@/components/ui/LiveVisitorCounter';

const locationFacts = [
  {
    label: 'Proximity to MSP International',
    value: '7 min',
    icon: '✈',
    desc: 'Direct light rail connection — MOA is the first stop for millions of international arrivals.',
  },
  {
    label: 'Drive from Downtown Minneapolis',
    value: '20 min',
    icon: '⬡',
    desc: 'Perfectly positioned between Twin Cities metro and the airport corridor.',
  },
  {
    label: 'Regional Catchment Population',
    value: '3.2M',
    icon: '◈',
    desc: 'Largest metro catchment in the Upper Midwest. 13 million within a 2-hour drive.',
  },
  {
    label: 'Hotel Rooms On-Site',
    value: '1,300+',
    icon: '◻',
    desc: 'Two connected hotels ensure overnight stays and multi-day dwell — unmatched in retail.',
  },
];

export default function WhyMOASection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-black-mid">
      <div className="absolute inset-0 grid-lines opacity-15" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Live counter banner */}
        <Reveal className="mb-16">
          <div className="border border-green-400/15 bg-green-400/3 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <LiveVisitorCounter />
            <div className="label-tag text-silver-dim hidden sm:block" style={{ fontSize: '0.5rem' }}>
              Visitor data simulated for demo purposes.<br />Actual figures available in full data package.
            </div>
          </div>
        </Reveal>

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 mb-20 items-start">
          <Reveal>
            <div className="label-tag mb-6">Location & Access</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-[-0.02em]">
              <span className="platinum-gradient">The center</span>
              <br />
              <span className="italic gold-gradient">of everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="pt-4">
              <p className="text-silver text-base leading-relaxed mb-6">
                MOA sits at the crossroads of America's Upper Midwest — directly connected to 
                Minneapolis-St. Paul International Airport, accessible from the entire 13-million 
                person regional population, and one of the most visited destinations in the country.
              </p>
              <p className="text-silver-dim text-sm leading-relaxed">
                The Bloomington location isn't just convenient — it's strategic. Tourists 
                land at MSP and arrive at MOA before they reach their hotels. The mall 
                captures international spend before it reaches anywhere else.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Location facts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {locationFacts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.1}>
              <div className="group card-hover border-gold-subtle bg-black-card/20 p-7 h-full flex flex-col">
                <div className="text-xl text-gold/30 mb-4 group-hover:text-gold/60 transition-colors duration-500">
                  {fact.icon}
                </div>
                <div className="font-display text-4xl font-light italic gold-gradient mb-2">{fact.value}</div>
                <div className="label-tag mb-3 text-silver" style={{ fontSize: '0.55rem' }}>{fact.label}</div>
                <p className="text-silver-dim text-xs leading-relaxed flex-1">{fact.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Map placeholder / stylized graphic */}
        <Reveal>
          <div className="relative overflow-hidden bg-black-card border-gold-subtle p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Stylized map representation */}
              <div className="relative w-full md:w-[300px] h-[200px] shrink-0 flex items-center justify-center">
                {/* Concentric rings indicating reach */}
                {[180, 140, 100, 60].map((r, i) => (
                  <div
                    key={r}
                    className="absolute rounded-full border"
                    style={{
                      width: `${r}px`,
                      height: `${r}px`,
                      borderColor: `rgba(201,168,76,${0.06 + i * 0.04})`,
                    }}
                  />
                ))}
                {/* Center dot */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold mb-1" />
                  <div className="label-tag" style={{ fontSize: '0.5rem' }}>MOA</div>
                </div>
                {/* Reach labels */}
                <div className="absolute top-2 right-4 label-tag text-silver-dim" style={{ fontSize: '0.45rem' }}>
                  13M within 2hr
                </div>
                <div className="absolute bottom-2 left-2 label-tag text-silver-dim" style={{ fontSize: '0.45rem' }}>
                  3.2M metro
                </div>
              </div>

              {/* Demographics breakdown */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Female', pct: '58%', note: 'Primary decision-maker' },
                  { label: 'Ages 25–44', pct: '44%', note: 'Peak spending demographic' },
                  { label: 'Household Income $75K+', pct: '52%', note: 'Discretionary spenders' },
                  { label: 'College Educated', pct: '61%', note: 'Brand-literate audience' },
                  { label: 'Families w/ Kids', pct: '38%', note: 'Entertainment-driven' },
                  { label: 'Repeat Visitors', pct: '72%', note: 'Loyalty platform' },
                ].map((d) => (
                  <div key={d.label}>
                    <div className="font-display text-2xl italic gold-gradient mb-1">{d.pct}</div>
                    <div className="label-tag text-silver" style={{ fontSize: '0.5rem' }}>{d.label}</div>
                    <div className="text-silver-dim text-[0.6rem] mt-0.5">{d.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

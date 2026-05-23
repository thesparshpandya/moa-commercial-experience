'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Zone {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  glowColor: string;
  description: string;
  stats: { label: string; value: string }[];
  floors: string;
  path: string; // SVG path
  labelX: number;
  labelY: number;
}

const zones: Zone[] = [
  {
    id: 'north',
    label: 'North Garden — Luxury Wing',
    shortLabel: 'Luxury',
    color: 'rgba(201,168,76,0.25)',
    glowColor: 'rgba(201,168,76,0.5)',
    description: 'Home to premium and aspirational brands. Elevated finishes, dedicated valet entrance, and curated tenant mix targeting affluent visitors.',
    stats: [
      { label: 'Avg Transaction', value: '$340' },
      { label: 'Sq Ft', value: '420K' },
      { label: 'Tenants', value: '80+' },
    ],
    floors: 'Levels 1–3',
    path: 'M 200 60 L 500 60 L 500 220 L 200 220 Z',
    labelX: 350,
    labelY: 140,
  },
  {
    id: 'east',
    label: 'East Broadway — Mid-Tier & Flagship',
    shortLabel: 'Flagship',
    color: 'rgba(26,110,255,0.2)',
    glowColor: 'rgba(26,110,255,0.5)',
    description: 'The highest-traffic corridor in the mall. Flagship locations for aspirational mid-tier and digitally native brands making their physical debut.',
    stats: [
      { label: 'Daily Traffic', value: '85K' },
      { label: 'Sq Ft', value: '610K' },
      { label: 'Tenants', value: '140+' },
    ],
    floors: 'Levels 1–4',
    path: 'M 500 60 L 660 60 L 660 440 L 500 440 Z',
    labelX: 580,
    labelY: 250,
  },
  {
    id: 'center',
    label: 'The Rotunda — Event Core',
    shortLabel: 'Rotunda',
    color: 'rgba(255,100,50,0.2)',
    glowColor: 'rgba(255,100,50,0.5)',
    description: 'The iconic 7-story central atrium. The most recognizable and photographed indoor space in Minnesota — a natural stage for brand moments.',
    stats: [
      { label: 'Capacity', value: '10K+' },
      { label: 'Events/Yr', value: '400+' },
      { label: 'Visibility', value: '7 Floors' },
    ],
    floors: 'Ground–Level 7',
    path: 'M 290 220 L 500 220 L 500 340 L 290 340 Z',
    labelX: 395,
    labelY: 280,
  },
  {
    id: 'west',
    label: 'West Market — Food & Lifestyle',
    shortLabel: 'Dining',
    color: 'rgba(100,200,120,0.2)',
    glowColor: 'rgba(100,200,120,0.5)',
    description: 'The Culinary District and dining destination. 50+ concepts anchored by full-service restaurants and the best food hall in the Upper Midwest.',
    stats: [
      { label: 'Concepts', value: '50+' },
      { label: 'Annual Visits', value: '8M' },
      { label: 'Sq Ft', value: '280K' },
    ],
    floors: 'Levels 1–2',
    path: 'M 40 220 L 290 220 L 290 440 L 40 440 Z',
    labelX: 165,
    labelY: 330,
  },
  {
    id: 'south',
    label: 'South Atrium — Entertainment Hub',
    shortLabel: 'Entertainment',
    color: 'rgba(180,80,255,0.2)',
    glowColor: 'rgba(180,80,255,0.5)',
    description: 'Nickelodeon Universe, SEA LIFE, FlyOver America — the entertainment anchor that generates independent destination traffic year-round.',
    stats: [
      { label: 'Attractions', value: '4' },
      { label: 'Park Visits', value: '10M/yr' },
      { label: 'Acres', value: '7' },
    ],
    floors: 'Levels 1–3 + Park',
    path: 'M 40 440 L 660 440 L 660 560 L 40 560 Z',
    labelX: 350,
    labelY: 500,
  },
];

export default function ZoneMap() {
  const [activeZone, setActiveZone] = useState<Zone | null>(null);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 items-start">
      {/* SVG Map */}
      <div className="relative w-full lg:w-[55%] shrink-0">
        <div className="label-tag mb-4 text-center">Interactive Property Map — Click a Zone</div>
        <svg
          viewBox="0 0 700 600"
          className="w-full border border-gold/10 bg-black-card/30"
          style={{ maxHeight: '480px' }}
        >
          {/* Background grid */}
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(201,168,76,0.04)" strokeWidth="0.5"/>
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="700" height="600" fill="url(#smallGrid)" />

          {/* Zones */}
          {zones.map((zone) => {
            const isActive = activeZone?.id === zone.id;
            const isHovered = hoveredZone === zone.id;
            return (
              <g key={zone.id}>
                <motion.path
                  d={zone.path}
                  fill={isActive || isHovered ? zone.color.replace('0.2', '0.35').replace('0.25', '0.45') : zone.color}
                  stroke={isActive ? zone.glowColor : isHovered ? zone.glowColor.replace('0.5', '0.35') : 'rgba(255,255,255,0.06)'}
                  strokeWidth={isActive ? 1.5 : 1}
                  style={{
                    cursor: 'pointer',
                    filter: isActive ? `drop-shadow(0 0 12px ${zone.glowColor})` : 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setActiveZone(isActive ? null : zone)}
                  onMouseEnter={() => setHoveredZone(zone.id)}
                  onMouseLeave={() => setHoveredZone(null)}
                  whileHover={{ scale: 1.01 }}
                />
                {/* Zone label */}
                <text
                  x={zone.labelX}
                  y={zone.labelY - 8}
                  textAnchor="middle"
                  fill={isActive || isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)'}
                  fontSize="10"
                  fontFamily="'DM Mono', monospace"
                  letterSpacing="2"
                  style={{ textTransform: 'uppercase', transition: 'fill 0.3s ease', pointerEvents: 'none' }}
                >
                  {zone.shortLabel}
                </text>
                {/* Small indicator dot */}
                <circle
                  cx={zone.labelX}
                  cy={zone.labelY + 8}
                  r={isActive ? 4 : 2.5}
                  fill={isActive ? zone.glowColor : 'rgba(255,255,255,0.2)'}
                  style={{ transition: 'all 0.3s ease', pointerEvents: 'none' }}
                />
              </g>
            );
          })}

          {/* Compass / North indicator */}
          <g transform="translate(640, 30)">
            <text x="0" y="12" textAnchor="middle" fill="rgba(201,168,76,0.5)" fontSize="8" fontFamily="'DM Mono', monospace">N</text>
            <line x1="0" y1="14" x2="0" y2="26" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
          </g>

          {/* Scale indicator */}
          <g transform="translate(30, 580)">
            <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
            <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
            <line x1="60" y1="-4" x2="60" y2="4" stroke="rgba(201,168,76,0.3)" strokeWidth="1"/>
            <text x="30" y="-6" textAnchor="middle" fill="rgba(201,168,76,0.4)" fontSize="6" fontFamily="'DM Mono', monospace">~400ft</text>
          </g>
        </svg>
      </div>

      {/* Info panel */}
      <div className="flex-1 min-h-[280px]">
        <AnimatePresence mode="wait">
          {activeZone ? (
            <motion.div
              key={activeZone.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full border border-white/8 bg-black-card/30 p-8"
            >
              <div className="label-tag mb-3" style={{ color: activeZone.glowColor }}>
                {activeZone.floors}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light text-platinum mb-4 leading-tight">
                {activeZone.label}
              </h3>
              <p className="text-silver-dim text-sm leading-relaxed mb-8">
                {activeZone.description}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {activeZone.stats.map((stat) => (
                  <div key={stat.label} className="border border-white/5 p-4 text-center">
                    <div
                      className="font-display text-2xl font-light italic mb-1"
                      style={{ color: activeZone.glowColor }}
                    >
                      {stat.value}
                    </div>
                    <div className="label-tag text-silver-dim" style={{ fontSize: '0.5rem' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full border border-white/5 bg-black-card/10 p-8 flex flex-col items-center justify-center text-center gap-4"
            >
              <div className="text-4xl text-gold/20">⬡</div>
              <div className="label-tag text-silver-dim">Select a Zone</div>
              <p className="text-silver-dim text-sm max-w-[260px]">
                Click any highlighted zone on the map to explore leasing details, traffic data, and tenant mix.
              </p>
              {/* Zone legend */}
              <div className="flex flex-col gap-2 mt-4 text-left w-full max-w-[260px]">
                {zones.map((z) => (
                  <button
                    key={z.id}
                    className="cursor-none flex items-center gap-3 hover:opacity-100 opacity-60 transition-opacity duration-200"
                    onClick={() => setActiveZone(z)}
                  >
                    <span
                      className="w-3 h-3 rounded-sm shrink-0"
                      style={{ background: z.glowColor }}
                    />
                    <span className="text-silver text-xs">{z.shortLabel}</span>
                    <span className="text-silver-dim text-xs ml-auto">{z.floors}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

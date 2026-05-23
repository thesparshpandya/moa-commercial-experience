# Mall of America — Interactive Partnership Platform

> *Where Brands Become Destinations.*

**Live Deployment:** [https://moa-commercial-experience.vercel.app](https://moa-commercial-experience.vercel.app)
**Repository:** [https://github.com/thesparshpandya/moa-commercial-experience](https://github.com/thesparshpandya/moa-commercial-experience)

A cinematic, browser-based sales deck and interactive partnership platform for Mall of America — built as a luxury enterprise presentation tool for retail tenants, corporate sponsors, and event partners.

---

## 🎯 Project Overview

This is not a traditional website. It's a **cinematic digideck** designed to:

- Replace static PDFs and fragmented sales materials.
- Create immediate emotional buy-in within the first 10 seconds.
- Drive action across three distinct partner tracks: **Retail Leasing**, **Brand Sponsorship**, and **Event Bookings**.
- Work flawlessly both as a live screen-share presentation and a standalone, asynchronous link.

---

## 🛠 Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSR, remote image optimization, file-based routing, Vercel-native. |
| Styling | **Tailwind CSS** | Utility-first, purged CSS, modular and scalable architecture. |
| Animation | **Framer Motion** | Production-grade enter/exit animations, scroll-triggered reveals. |
| Smooth Scroll | **Lenis** | Buttery-smooth scrolling with precise timeline control. |
| Typography | **Cormorant Garamond + DM Sans** | Luxury serif display paired with a clean, modern body font. |
| Hosting | **Vercel** | Zero-config continuous deployment, edge CDN, analytics ready. |

---

## 🤖 Rapid Prototyping & AI Usage

To demonstrate product velocity and isolate structural engineering from content licensing, this project leveraged generative AI as a core development partner:

1. **Content & Narrative (Claude):** Property statistics, personas, and copy were conceptualized using LLMs based on public MOA data to match a premium brand voice and prove out the UX data hierarchy.
2. **Visual Strategy (Unsplash API):** To keep the repository lightweight, images are fetched dynamically at runtime. Activation mockup concepts are displayed in the Sponsorship section, labeled as "AI Concept."
3. **Architecture Validation:** Component hierarchies, animation patterns, and TypeScript configurations were co-developed and troubleshot with AI to ensure a clean, deployable build.

---

## 📁 Project Structure

```
moa-commercial-experience/
├── public/
│   ├── images/
│   └── videos/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── leasing/
│   │   ├── sponsorship/
│   │   └── events/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── WhyMOASection.tsx
│   │   │   ├── RetailSection.tsx
│   │   │   ├── LuxurySection.tsx
│   │   │   ├── ZoneMapSection.tsx
│   │   │   ├── AttractionsSection.tsx
│   │   │   ├── DiningSection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── SponsorshipSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/
│   │       ├── Navigation.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── SmoothScroll.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── SideNav.tsx
│   │       ├── Reveal.tsx
│   │       ├── StatCounter.tsx
│   │       ├── LiveVisitorCounter.tsx
│   │       ├── ZoneMap.tsx
│   │       ├── ContactModal.tsx
│   │       ├── MediaKitToast.tsx
│   │       └── Footer.tsx
│   ├── data/
│   │   └── mall.json
│   └── styles/
│       └── globals.css
├── vercel.json
├── next.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 Getting Started

### Local Development

```bash
# Clone the repository
git clone https://github.com/thesparshpandya/moa-commercial-experience.git
cd moa-commercial-experience

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-black` | `#050505` | Primary background |
| `--color-black-soft` | `#0E0E0E` | Secondary background |
| `--color-gold` | `#C9A84C` | Primary accent, CTAs |
| `--color-gold-light` | `#E8C97A` | Hover states |
| `--color-platinum` | `#E8E8E8` | Primary text |
| `--color-silver` | `#A8A8A8` | Secondary text |

### Key UI Patterns

- **Gold gradient text** (`.gold-gradient`) — Headlines and key stats.
- **Reveal animations** — Scroll-triggered enter via Framer Motion.
- **StatCounter** — Animates up to value when intersecting the viewport.
- **LiveVisitorCounter** — Simulated real-time visitor count with day/hour traffic modeling.
- **ZoneMap** — Interactive SVG property map with per-zone stats and glow effects.
- **Noise overlay** — Subtle film-grain texture across the entire layout.

---

## 📊 Business Architecture

### Three Audience Tracks

| Track | Module | CTA |
|---|---|---|
| Retail Tenants | `/leasing` | "Explore Leasing Opportunities" |
| Corporate Sponsors | `/sponsorship` | "Partner With the Destination" |
| Event Partners | `/events` | "Book an Activation" |

### Gated Feature

The Sponsorship page includes a **locked pricing section** — enter access code `MOA2025` to reveal detailed rates. This creates enterprise credibility and qualifies serious prospects.

---

## 🔮 Future Improvements (Phase 2)

- [ ] **Agentic AI Integration:** A RAG pipeline over internal MOA leasing documents, letting prospects query a multi-agent system for real-time demographic insights.
- [ ] **3D Zone Map:** Interactive property map with clickable zones using WebGL / Three.js or Spline.
- [ ] **Video Pipeline:** Autoplay background video with automated edge-network compression.
- [ ] **Headless CMS:** Wire modular Next.js components to Sanity or Contentful for non-technical sales team updates.
- [ ] **Media Kit Generation:** Dynamically generated, personalized PDFs via Puppeteer.

---
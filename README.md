# Mall of America — Interactive Partnership Platform

> *Where Brands Become Destinations.*

A cinematic, browser-based sales deck and interactive partnership platform for Mall of America — built as a luxury enterprise presentation tool for retail tenants, corporate sponsors, and event partners.

---

## 🎯 Project Overview

This is not a traditional website. It's a **cinematic digideck** designed to:

- Replace static PDFs and fragmented sales materials
- Create immediate emotional buy-in within the first 10 seconds
- Drive action across three distinct partner tracks: **Retail Leasing**, **Brand Sponsorship**, and **Event Bookings**
- Work both as a live screen-share presentation and a standalone async link

---

## 🛠 Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSR, image optimization, file-based routing, Vercel-native |
| Styling | **Tailwind CSS** | Utility-first, purged CSS, fast iteration |
| Animation | **Framer Motion** | Production-grade enter/exit animations, scroll-triggered reveals |
| Smooth Scroll | **Lenis** (@studio-freight) | Buttery-smooth scrolling with precise control |
| Typography | **Cormorant Garamond + DM Sans** | Luxury serif display + clean modern body |
| Hosting | **Vercel** | Zero-config deployment, edge CDN, analytics ready |

---

## 🤖 AI Usage

This project leveraged AI in the following ways:

1. **Content Generation** — Property statistics, testimonials, and copy written with AI assistance to match premium brand voice
2. **Design Ideation** — Layout structures and component hierarchies planned with AI collaboration
3. **Activation Mockup Concepts** — AI-conceptualized activation scenarios displayed in the Sponsorship section (labeled as "AI Concept")
4. **Code Architecture** — Component structure, animation patterns, and TypeScript types co-developed with AI
5. **Copywriting** — All headline copy, CTA language, and section descriptions crafted for maximum conversion impact

---

## 📁 Project Structure

```
moa-commercial-experience/
├── public/
│   ├── images/          # Static assets
│   └── videos/          # Video assets (if added)
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── page.tsx     # Main interactive deck (home)
│   │   ├── leasing/     # Deep-dive leasing module
│   │   ├── sponsorship/ # Deep-dive sponsorship module
│   │   └── events/      # Deep-dive events module
│   ├── components/
│   │   ├── sections/    # Full-page section components
│   │   │   ├── Hero.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── RetailSection.tsx
│   │   │   ├── AttractionsSection.tsx
│   │   │   ├── DiningSection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── SponsorshipSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/          # Reusable UI components
│   │       ├── Navigation.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── SmoothScroll.tsx
│   │       ├── Reveal.tsx
│   │       ├── StatCounter.tsx
│   │       ├── ContactModal.tsx
│   │       └── Footer.tsx
│   ├── data/
│   │   └── mall.json    # All property data (stats, tenants, spaces)
│   └── styles/
│       └── globals.css  # Global styles + CSS variables
├── vercel.json          # Vercel deployment config
├── next.config.mjs      # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

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

### Build for Production

```bash
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Live in ~60 seconds ✅

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

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

### Typography

- **Display**: Cormorant Garamond — Luxury serif for headlines, italics for emphasis
- **Body**: DM Sans — Modern, highly legible sans-serif
- **Mono**: DM Mono — Data, labels, codes

### Key UI Patterns

- **Gold gradient text** (`.gold-gradient`) — Headlines and key stats
- **Reveal animations** — Scroll-triggered enter via Framer Motion
- **AnimatedStatCounter** — Counts up to value when in viewport
- **Custom cursor** — Gold dot + tracking ring
- **Noise overlay** — Film-grain texture across entire site

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

- [ ] **Video integration** — Autoplay background video with compression pipeline
- [ ] **3D Zone Map** — Interactive property map with clickable zones (Three.js / Spline)
- [ ] **Analytics dashboard** — Track section engagement, CTA clicks, time-on-section
- [ ] **Personalization** — Different hero experiences per audience track via URL params
- [ ] **AI chatbot** — Embedded Claude-powered leasing assistant
- [ ] **Real-time visitor counter** — WebSocket-powered simulated live visitor count
- [ ] **Media kit download** — Dynamically generated PDF via Puppeteer

---

## 📋 Assignment Evaluation Coverage

| Criteria | Implementation |
|---|---|
| **Visual & UX Design (30%)** | Premium dark theme, Cormorant Garamond typography, gold accent system, custom cursor, noise grain, smooth animations |
| **Technical Execution (25%)** | Next.js App Router, TypeScript, Tailwind, Framer Motion, Lenis scroll, Vercel-optimized, modular architecture |
| **AI Integration (15%)** | AI-generated copy, AI Concept badges in sponsorship mockups, data-driven from JSON, documented AI usage |
| **Storytelling (15%)** | Clear narrative arc: scale → retail → attractions → events → sponsorship → CTA. Emotional buy-in from hero. |
| **Expandability (10%)** | Modular sections, separate route modules (/leasing, /sponsorship, /events), JSON-driven data layer |
| **Attention to Detail (5%)** | Label-tag system, gold gradient text, animated counters, gated content, testimonial carousel |

---

## 📧 Submission

Built for the Liat AI interview assignment.  
Submitted to: medi@liat.ai

---

*"Make someone say: I want to be part of this."*

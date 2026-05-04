# Notionize Homepage V1 — Operator Console

Live: [notionize-v1.vercel.app](https://notionize-v1.vercel.app)

## What this is

The first homepage direction for Notionize's agents-led repositioning, built as a proper Next.js website. V1 is called "Operator Console" — it leads with the product's Notion-native AI agent angle, shows a live animated demo of the SEO Police agent, and lists the four pilot packages.

There are three design directions in the original Claude Design canvas (`/Code/Notionize Home 2.0`). This repo is V1 only.

---

## How it was built

### Origin

The design started as a Claude Design canvas export — a single HTML file with React components loaded via Babel in the browser. That format is great for designing but can't be edited, deployed, or version-controlled properly.

The process was:

1. Opened the original canvas at `http://localhost:8080` using Python's built-in server (the HTML needs a server to load its component files — browsers block local file loading otherwise)
2. Read all the source files from `/Code/Notionize Home 2.0/`
3. Created a new Next.js project: `npx create-next-app@latest notionize-v1 --typescript --eslint --no-tailwind --app --no-src-dir --import-alias "@/*"`
4. Converted each section into a proper component file
5. Copied assets into `/public`
6. Applied the Eldur Studio color palette (dark backgrounds, orange accent)
7. Fixed the agent diagram for mobile
8. Deployed to Vercel via CLI: `vercel --yes`

### Key conversion decisions

**`'use client'` components** — React hooks like `useState` only work in the browser. Two components need this directive:
- `AgentDiagram.tsx` — runs the step-by-step animation
- `PilotRow.tsx` — handles the hover state on each pilot row
- Everything else is a server component (rendered as plain HTML at build time, which is faster)

**Inline styles kept as-is** — The original design used inline styles throughout. Rather than converting to Tailwind or CSS modules, they were preserved to stay faithful to the design and reduce the risk of visual bugs.

**`Object.assign(window, {...})` removed** — The original canvas shared components via browser globals. In Next.js, proper `import`/`export` is used instead.

**Asset paths** — Original referenced `assets/logo.png`. In Next.js, files in `/public` are served from the root, so it becomes `/logo.png`.

---

## Color palette

From the Eldur Studio brand (`/Code/ES2website/styles.css`):

| Token | Value | Used for |
|---|---|---|
| Black | `#000000` | Main page background |
| Dark | `#111111` | Alternating section backgrounds |
| Orange | `#ff7a00` | Primary accent, buttons, labels |
| Red | `#ee0f0f` | Gradient end, critical tags |
| Gradient | `#ff7a00 → #ee0f0f` | Ticker bar, CTA button |
| White | `#FFFFFF` | All body text |
| Text muted | `rgba(255,255,255,0.65)` | Body copy, descriptions |
| Text subtle | `rgba(255,255,255,0.40)` | Labels, metadata |
| Border | `rgba(255,255,255,0.10)` | Section dividers, card borders |

The fonts (Space Mono, Cormorant Garamond, JetBrains Mono) are Notionize's own typographic system, loaded from Google Fonts in `globals.css`.

---

## Project structure

```
notionize-v1/
├── app/
│   ├── layout.tsx          # Root layout, page metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # Eldur color tokens + Google Fonts import
├── components/
│   ├── NavBar.tsx          # Sticky top nav
│   ├── Hero.tsx            # Headline, CTA buttons, metrics strip + diagram
│   ├── AgentDiagram.tsx    # 'use client' — animated SEO Police demo
│   ├── WhyNotionNative.tsx # 4-column reasons section
│   ├── PilotCatalog.tsx    # Intro copy + pilot table
│   ├── PilotRow.tsx        # 'use client' — individual pilot row with hover
│   ├── Templates.tsx       # 4-card template grid
│   └── CTA.tsx             # Dark closing section with booking card
└── public/
    ├── logo.png
    ├── affiliate_badge_white.svg
    ├── template_webflow.png
    └── notion-agents.gif
```

---

## Running locally

```bash
cd ~/Code/notionize-v1
npm run dev
# → http://localhost:3000
```

The original Claude Design canvas (all three variations) can still be previewed at:

```bash
cd ~/Code/Notionize\ Home\ 2.0
python3 -m http.server 8080
# → http://localhost:8080/Notionize%20Homepage%202.0.html
```

---

## Deploying

The repo is connected to Vercel. Any push to `main` redeploys automatically.

To deploy manually from the terminal:

```bash
vercel --prod
```

---

## What's not built yet

- V2 (The Manifesto) and V3 (Notion-as-Homepage) — still only in the design canvas
- Navigation links are not wired up (Templates, Agent Pilots, Playbooks, Pricing pages don't exist yet)
- "Book an agent pilot" and "Book the call" buttons have no destination
- No mobile layout for the Hero two-column grid (the agent diagram scrolls on mobile, but the headline + diagram side-by-side will stack awkwardly on small screens)

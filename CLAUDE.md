# DAPS Analytics — Website Build Documentation

## Project Overview

Full-stack frontend website for **DAPS Analytics** (Data Analytics Processing Solutions), a high-fidelity data intelligence firm operating across African and global markets.

**Owner:** DAPS Analytics / Olink Technologies Inc.  
**Location:** 3 Pooks Hill Rd, Suite 914, Bethesda, MD 20814  
**Built with:** Pure HTML + Tailwind CSS (CDN) + Vanilla JavaScript  
**No build step required** — open any `.html` file directly or serve with `python -m http.server 3030`

---

## Architecture

### Tech Stack
- **Markup:** HTML5 semantic
- **Styling:** Tailwind CSS v3 via CDN + inline `<style>` blocks
- **Interactivity:** Vanilla JavaScript (ES5-compatible)
- **3D Animation:** Three.js r0.160.1 via CDN (homepage globe, products orbital animation)
- **Icons:** Material Symbols Outlined (Google Fonts)
- **Typography:** Inter (Google Fonts) — weights 300, 400, 600, 700, 900

### File Structure
```
/
├── index.html              # Homepage (WebGL globe hero)
├── products.html           # Products (orbital animation hero)
├── services.html           # Services (bento grid)
├── industries.html         # Industries (hover-reveal cards)
├── company.html            # Company (founder story, timeline, team)
├── insights.html           # Insights (functional filter + search)
├── contact.html            # Contact (form + calendar)
├── onekof-pm.html          # Onekof PM product detail
├── projects.html           # TDT/MINT + mega projects
├── article.html            # Article reader template (URL param ?id=X)
│
├── assets/
│   ├── navbar.js           # Shared nav component (injected on all pages)
│   ├── daps.js             # Shared utilities (scroll reveal, filter pills, lang)
│   ├── articles-data.js    # 12 full articles data store (read by article.html)
│   └── images/
│       ├── daps-logo-nav.svg    # Navbar logo (icon + DAPS wordmark only)
│       ├── daps-logo-full.svg   # Footer logo (full logo with tagline + green bar)
│       └── daps-logo-original.svg  # Original with blue background (archived)
│
└── CLAUDE.md               # This file
```

---

## Design System

### Colors (DAPS Cinematic theme)
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#49fde3` | Electric Teal — CTAs, highlights, nav active |
| `secondary` | `#efbf71` | Warm Amber — secondary products, alternate accents |
| `background` | `#0e141b` | Deep Obsidian — main background |
| `on-surface` | `#dee2ed` | Ink White — primary text |
| `on-surface-variant` | `#bacac5` | Muted Gray — body text |
| `outline` | `#849490` | Borders, metadata labels |
| Green underline | `#ABD054` | Logo separator bar |

### Typography
| Style | Size | Weight | Tracking |
|-------|------|--------|----------|
| display-2xl | 128px | 300 | -0.04em |
| display-xl | 96px | 300 | -0.03em |
| display-lg | 56px | 400 | -0.02em |
| headline-md | 32px | 400 | -0.01em |
| body-lg | 18px | 400 | 0 |
| body-md | 16px | 400 | 0 |
| label-caps | 12px | 600 | +0.1em (uppercase) |

### Spacing Scale
```
xs: 0.5rem | sm: 1rem | md: 2rem | lg: 4rem | xl: 8rem | 2xl: 12rem
gutter: 24px | margin: 64px
```

---

## Key Features Built

### 1. Homepage (`index.html`)
- **Three.js WebGL Globe** — rotating sphere with 420 node particles, 75 animated arcs with traveling data-flow dots, atmosphere shader (GLSL), 2,800 background stars, orbiting key light, cinematic camera drift
- Product suite 4-card grid (Onekof, UDC-WQIS, Hakimet, Olink Fleet)
- Services preview (4 cards)
- Industries preview (6 icon tiles)
- CTA section with radial glow

### 2. Products Page (`products.html`)
- **Three.js Orbital Showcase** — 4 product nodes orbiting a central DAPS core at different radii/speeds; particle trails, highlight rings, cross-connection network lines, data-flow dots, subtle grid floor
- Full-screen cinematic sections for each of 4 products
- All "Open Platform" buttons link to live platforms

### 3. Projects Page (`projects.html`) — NEW
- **TDT × MINT Ethiopia** featured prominently as flagship initiative
- 3-phase delivery timeline
- 6-project portfolio grid (4 live + 2 in development)
- Partnership CTA section (Government, NGO, Enterprise, Research)

### 4. Insights Page (`insights.html`)
- **Functional filter pills** — JS filters article cards by category instantly
- **Live search** — type to filter by article title; Escape to clear
- Stats bar, trending sidebar, active projects callout
- 12 articles across 5 categories (Market Trends, Data Science, Case Studies, Projects, Product Updates)
- Newsletter form with success state

### 5. Article Reader (`article.html`)
- URL param: `article.html?id=1` through `article.html?id=12`
- Reading progress bar (teal, top of viewport)
- Full article body from `assets/articles-data.js`
- Related articles sidebar (same-category filtering)
- 12 full articles written (400–600 words each), covering: TDT/MINT, UDC-WQIS, Onekof PM 2025, Hakimet Year One, agricultural forecasting, supply chain routing, federated learning, market connectivity

### 6. Navbar (`assets/navbar.js`) — Shared Component
- **Lucid-inspired hover dropdowns** for all 6 nav items
- Dropdowns show icon + title + description per item; live badges for active products
- Inter 14px medium weight (NOT uppercase, replacing old 10px uppercase)
- Language selector with 6 languages (toast for non-English)
- Responsive mobile panel with sectioned mobile menu
- Active page highlighting via URL detection
- Injected dynamically — one file updates all 10 pages

---

## Live Product Integrations

| Product | URL | Status |
|---------|-----|--------|
| Onekof PM | https://onekof.com | Live in Ethiopia |
| UDC-WQIS | https://udc-wqis.happycoast-d9b0bcde.centralus.azurecontainerapps.io/ | Live — Washington DC |
| Hakimet Telehealth | https://www.hakimet.com | Live |
| Olink Fleet | https://olink-fleet.vercel.app/ | Live in Ethiopia |

---

## Strategic Projects Documented

- **TDT** (Technology Development & Transfer) — collaboration with **MINT** (Ethiopian Ministry of Innovation and Technology) — national-scale data infrastructure and AI capability building
- **Pan-African Data Grid** — in development, cross-border regional data connectivity
- **Smart Government Analytics** — in development, federal/regional dashboards

---

## Address & Contact
- **HQ:** 3 Pooks Hill Rd, Suite 914, Bethesda, MD 20814, United States
- **Contact page:** `contact.html` — qualification form + Calendly placeholder

---

## Development Notes

### Local Server
```bash
cd stitch_daps_analytics_cinematic_web_experience
python -m http.server 3030
# open http://localhost:3030
```

### Adding a New Page
1. Copy any existing page
2. Remove the `<nav>` block (navbar.js injects it automatically)
3. Ensure `<script src="assets/navbar.js"></script>` is before `</body>`
4. Ensure `<script src="assets/daps.js"></script>` is after navbar.js

### Adding a New Article
1. Add an entry to `assets/articles-data.js` (follow existing structure)
2. Add a card to `insights.html` article grid with matching `data-category` and `data-title`
3. Link the card to `article.html?id=YOUR_ID`

### Logo Files
- Navbar: `daps-logo-nav.svg` — icon mark + "DAPS ANALYTICS" wordmark, transparent background, viewBox `155 926 1380 205`
- Footer: `daps-logo-full.svg` — full logo with second text row + green separator, transparent background, viewBox `155 926 1760 212`
- Both derived from official Adobe Illustrator SVG exports

---

## IP Notice

This website is proprietary to **DAPS Analytics** and **Olink Technologies Inc.**  
Oli Tamrat — Author & Moral Rights holder.  
DAPS Analytics — Commercial rights holder.  
Do not redistribute without authorization.

---

*Built in collaboration with Claude Code (Anthropic) — May 2025*

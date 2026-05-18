# DAPS Analytics — Website Build Documentation

## Project Overview

Full-stack frontend website for **DAPS Analytics** (Data Analytics Processing Solutions), a high-fidelity data intelligence firm operating across African and global markets.

**Owner:** DAPS Analytics / Olink Technologies Inc.  
**Location:** 3 Pooks Hill Rd, Suite 914, Bethesda, MD 20814  
**Built with:** Pure HTML + Tailwind CSS (CDN) + Vanilla JavaScript  
**No build step required** — open any `.html` file directly or serve with `python -m http.server 3030`

**GitHub:** https://github.com/OliTamrat/daps-analytics-website  
**Vercel (live):** https://dapsanalytics.vercel.app

---

## Architecture

### Tech Stack
- **Markup:** HTML5 semantic
- **Styling:** Tailwind CSS v3 via CDN + inline `<style>` blocks
- **Interactivity:** Vanilla JavaScript (ES5-compatible)
- **3D Animation:** Three.js r0.160.1 via CDN — **homepage globe ONLY**
- **2D Animation:** Vanilla Canvas 2D API — products page data network
- **Icons:** Material Symbols Outlined (Google Fonts)
- **Typography:** Inter (Google Fonts) — weights 300, 400, 600, 700, 900

### File Structure
```
/
├── index.html              # Homepage (Three.js WebGL globe hero)
├── products.html           # Products (Canvas 2D data-network hero)
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

### Hero Title Font Size Rules (calibrated 2026-05-02)
**h-screen / min-h-screen heroes** — content must fit in one viewport, use reduced sizes:
| Page | Clamp value | Max at 1440px |
|------|-------------|---------------|
| `index.html` | `clamp(32px, 3.5vw, 56px)` | 56px |
| `products.html` | `clamp(36px, 4.5vw, 64px)` | 65px |
| `onekof-pm.html` | `clamp(44px, 5.5vw, 80px)` | 80px |

**Scrollable heroes** — no viewport constraint, larger sizes are appropriate:
| Page | Clamp value | Max at 1440px |
|------|-------------|---------------|
| `projects.html` | `clamp(44px, 6vw, 84px)` | 84px |
| `services.html` | `clamp(36px, 4.5vw, 68px)` | 68px |
| `company.html` | `clamp(36px, 5vw, 56px)` | 56px |

### Spacing Scale
```
xs: 0.5rem | sm: 1rem | md: 2rem | lg: 4rem | xl: 8rem | 2xl: 12rem
gutter: 24px | margin: 64px
```

---

## Key Features Built

### 1. Homepage (`index.html`)
- **Three.js WebGL Globe** — rotating sphere with 420 node particles, 75 animated arcs with traveling data-flow dots, atmosphere shader (GLSL), 2,800 background stars, orbiting key light, cinematic camera drift
- Hero: `min-h-screen flex items-center` — split layout (text left, globe right)
- Hero content wrapper: `pt-16 pb-8`, h1 `clamp(32px,3.5vw,56px)`, metric-num `clamp(18px,2vw,30px)`
- Product suite 4-card grid (Onekof, UDC-WQIS, Hakimet, Olink Fleet)
- Services preview (4 cards), Industries preview (6 icon tiles), CTA section

### 2. Products Page (`products.html`)
- **Vanilla Canvas 2D data-network animation** — 32 floating nodes connected by lines with 18 flowing data packets; teal + amber color palette; replaces previous Three.js orbital planet animation (removed as irrelevant to analytics)
- Hero: `h-screen flex items-center` — split layout (text left col, canvas right 62%)
- No Three.js dependency — canvas-only, lighter and on-brand
- Full-screen cinematic sections for each of 4 products
- All "Open Platform" buttons link to live platforms

### 3. Projects Page (`projects.html`)
- Hero: scrollable section, `background:#0e141b` (matches body — prevents gap), `pt-2` (section internal padding only; `main` gets `70px` from navbar.js)
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
- 12 full articles (400–600 words each)

### 6. Navbar (`assets/navbar.js`) — Shared Component
- **Lucid-inspired hover dropdowns** for all 6 nav items
- Dropdowns show icon + title + description per item; live badges for active products
- Inter 14px medium weight, not uppercase
- Language selector with 6 languages (toast for non-English)
- Responsive mobile panel with sectioned mobile menu
- Active page highlighting via URL detection
- Injected dynamically — one file updates all pages

#### Navbar Gap Logic (CRITICAL — do not change)
```javascript
// Hero pages (min-h-screen / h-screen): section background covers behind nav.
// Content inside the section has enough top padding, so NO main paddingTop needed.
// Scrollable pages: main gets paddingTop=70px so content clears the fixed nav.
var isHero = firstEl && (
  firstEl.className.indexOf('min-h-screen') !== -1 ||
  firstEl.className.indexOf('h-screen') !== -1
);
if (!isHero) { mainEl.style.paddingTop = '70px'; }
```
**Gap rule:** Scrollable page sections MUST use `background:#0e141b` (same as body) so the `70px` main padding is invisible. If a section uses a different/darker background, a visible band appears between the nav and the section.

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
After pulling changes or editing files, do a **hard refresh** (`Ctrl+Shift+R`) — browsers cache static HTML aggressively.

### Deployment
- Push to `master` branch on GitHub → Vercel auto-deploys in ~60 seconds
- Vercel URL: https://dapsanalytics.vercel.app
- After deploy, hard refresh Vercel URL too (`Ctrl+Shift+R`)

### Adding a New Page
1. Copy any existing page
2. Remove any existing `<nav>` block (navbar.js injects it)
3. Ensure `<script src="assets/navbar.js"></script>` is before `</body>`
4. Ensure `<script src="assets/daps.js"></script>` is after navbar.js
5. If hero is `h-screen`/`min-h-screen`: no extra padding needed on main or section top
6. If hero is scrollable: section background must be `#0e141b` to hide the 70px main gap

### Adding a New Article
1. Add an entry to `assets/articles-data.js` (follow existing structure)
2. Add a card to `insights.html` article grid with matching `data-category` and `data-title`
3. Link the card to `article.html?id=YOUR_ID`

### Logo Files
- Navbar: `daps-logo-nav.svg` — icon mark + "DAPS ANALYTICS" wordmark, transparent background, viewBox `155 926 1380 205`
- Footer: `daps-logo-full.svg` — full logo with second text row + green separator, transparent background, viewBox `155 926 1760 212`
- Both derived from official Adobe Illustrator SVG exports

---

## Pre-Launch Checklist & Next Phase Tasks

### DONE (as of 2026-05-17)
- [x] Contact form wired → Resend via Vercel serverless function (`api/contact.js`). Needs `RESEND_API_KEY` env var set in Vercel dashboard.
- [x] Teams Bookings calendar wired → `https://outlook.office.com/book/ChatwithDAPS@dapsanalytics.com/`
- [x] Privacy Policy page (`privacy.html`) — 10-section legal policy
- [x] Favicon (SVG) on all pages
- [x] Open Graph + Twitter Card meta tags on all 15 pages
- [x] `robots.txt` and `sitemap.xml` — updated to `dapsanalytics.com` domain
- [x] Privacy Policy link in footer of all pages
- [x] Admin dashboard — Insights CMS with image upload (Supabase Storage) and ElevenLabs AI audio generation
- [x] `api/generate-audio.js` — ElevenLabs serverless function (Adam voice, `eleven_turbo_v2_5`, maxDuration 60s)
- [x] `article.html` — pro audio player (ElevenLabs MP3), browser TTS fallback, sidebar ToC + Share + Related Articles
- [x] `insights.html` — dynamic Supabase article loading (admin articles prepended to grid)
- [x] Linktree globe camera matched to homepage (half-circle on right)
- [x] Linktree added to navbar Company dropdown + all footers
- [x] Footer text brightness fixed across all 14 pages (#3b4a46 → #bacac5)
- [x] **SEO overhaul** — canonical URLs, JSON-LD (Organization/WebSite/LocalBusiness/BreadcrumbList), keyword titles, 150-160 char descriptions, OG/Twitter synced, all URLs → dapsanalytics.com
- [x] **Google Search Console** — verified, sitemap submitted, indexing requested (2026-05-17)
- [x] **Bing Webmaster Tools** — verified via GSC import, sitemap submitted (2026-05-17)
- [x] **Google Analytics 4** — `G-F4MDXMW8KB` on all 15 pages (2026-05-17)

### TODO — Pending your action

| Task | What Claude needs / what you do | File to touch |
|------|--------------------------------|---------------|
| **Add RESEND_API_KEY to Vercel** | Vercel dashboard → Settings → Env Vars → add `RESEND_API_KEY` | Vercel UI only |
| **OG preview image** | Open `og-generator.html` locally → click Download → save PNG to `assets/images/og-preview.png` → push | `assets/images/og-preview.png` |
| **Set up hello@dapsanalytics.com** | Google Workspace ($6/mo) or Zoho Mail (free) → update `CONTACT_TO_EMAIL` in Vercel | Vercel UI + `api/contact.js` line 44 |
| **Founder photos** | 7 gradient placeholders on `company.html` — provide photo files, Claude wires them | `company.html` |
| **WhatsApp link** | Provide WhatsApp number → Claude updates one line | `contact.html` |
| **Real trust logos** | Provide partner/client logo files or SVGs | `index.html` trust bar section |
| **Re-enable product content** | After EIPA receipt — follow 8-step checklist in `Project_Briefing.md` | Multiple files |
| **Month 3 content plan** | Marketing decision → Claude creates new content library | `assets/month3-posts.js` |

### After custom domain (dapsanalytics.com) — DONE ✅
All canonical URLs, OG tags, sitemap, and robots.txt already point to `dapsanalytics.com` (updated 2026-05-17).
2. Re-run `og-generator.html` → save new `og-preview.png` with updated URL text → push
3. Update Vercel domain settings
4. Update Resend verified domain if using hello@dapsanalytics.com

### Medium priority — Before marketing push

| Task | Detail |
|------|--------|
| **Real trust logos** | Homepage trust bar uses placeholder CDN images — replace with real partner/client logos |
| **WhatsApp link** | Replace `href="#"` on Secure WhatsApp in `contact.html` with `href="https://wa.me/1YOURNUMBER"` |

### Marketing — Post-launch

- LinkedIn Company Page for DAPS Analytics
- Google Business Profile (Bethesda MD address)
- Product Hunt launch post
- Cross-post the 12 existing articles from `insights.html` to LinkedIn
- Professional email signatures for all 7 founders

### Pages completed (as of 2026-05-04)
- `index.html`, `products.html`, `services.html`, `industries.html`, `company.html`
- `insights.html`, `article.html`, `projects.html`, `contact.html`, `onekof-pm.html`
- `udc-wqis.html`, `hakimet.html`, `olink-fleet.html`, `privacy.html`

---

## IP Notice

This website is proprietary to **DAPS Analytics** and **Olink Technologies Inc.**  
Oli Tamrat — Author & Moral Rights holder.  
DAPS Analytics — Commercial rights holder.  
Do not redistribute without authorization.

---

*Last updated: 2026-05-03*

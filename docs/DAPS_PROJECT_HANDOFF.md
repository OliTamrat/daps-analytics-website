# DAPS Analytics — Complete Project Handoff
**Document type:** Founder & Stakeholder Reference
**Last updated:** 2026-07-16 (Session 3)
**Status:** Live — Onekof PM launched, partial product visibility
**Prepared by:** Olink Technologies Inc.

---

## Table of Contents
1. [What Was Built](#1-what-was-built)
2. [Live URLs & Access Points](#2-live-urls--access-points)
3. [Tech Stack](#3-tech-stack)
4. [Website Pages — What Each Does](#4-website-pages--what-each-does)
5. [Linktree Page](#5-linktree-page)
6. [Admin Dashboard](#6-admin-dashboard)
7. [Social Media Presence](#7-social-media-presence)
8. [Brand & Design System](#8-brand--design-system)
9. [Infrastructure & Hosting](#9-infrastructure--hosting)
10. [Database (Supabase)](#10-database-supabase)
11. [Pre-Registration Lock — What Is Hidden & Why](#11-pre-registration-lock--what-is-hidden--why)
12. [How to Re-Enable Everything After Registration](#12-how-to-re-enable-everything-after-registration)
13. [Pending Tasks Before Full Launch](#13-pending-tasks-before-full-launch)
14. [How to Deploy Changes](#14-how-to-deploy-changes)
15. [File Structure Overview](#15-file-structure-overview)
16. [IP & Ownership](#16-ip--ownership)

---

## 1. What Was Built

DAPS Analytics has a complete, production-grade web presence consisting of three connected parts:

### Part 1 — The Main Website (`dapsanalytics.com`)
A 17-page cinematic website presenting DAPS Analytics as an advanced analytics, AI, and enterprise software solutions company. It serves enterprise decision-makers, government partners, African tech community, and software buyers.

Highlights:
- **Three.js WebGL globe** on the homepage — 420 animated node particles, 75 data arcs, 2,800-star starfield
- **Canvas 2D data-network animation** on the Products page
- **12 full-length articles** in the Insights section (400–600 words each), filterable and searchable
- **Functional contact form** wired to Resend email API
- **Teams booking calendar** integration on the Contact page
- **Open Graph / Twitter Card meta tags** on all 14 pages for rich social sharing
- **robots.txt + sitemap.xml** for search engine indexing
- **Privacy Policy** page (10-section, legally structured)
- **Responsive** — works on desktop, tablet, and mobile
- **Stakeholder access gate** on product pages (code: `SPAD2026`) — active until IP registration completes

### Part 2 — Linktree (`dapsanalytics.com/linktree.html`)
A single branded page that consolidates all social handles, website links, services, and contact options. Used as the link-in-bio across all social platforms.

- Live WebGL rotating globe as the background — **camera matched to homepage** (half-circle on right, not full sphere)
- 3 sections: Follow Us (6 social handles) · Website Links · Get In Touch
- Footer: "Built by Olink Technologies"
- Accessible from **every page** via the Company dropdown in the navbar and the Company column in the footer

### Part 3 — Admin Dashboard (`dapsanalytics.com/admin/`)
A password-protected content management system (CMS) for managing the website's Insights articles and social media content.

- **Insights tab** — create, edit, activate/deactivate articles that appear on `insights.html`
  - **Image upload** — drag-and-drop cover image upload to Supabase Storage (`article-images` bucket); image shown in article hero
  - **AI Audio generation** — one-click ElevenLabs AI voice generation (Adam, American male); stored as MP3 in Supabase Storage; article.html auto-plays professional audio player when present
- **Social Posts tab** — track every social media post with platform, date, content, status
- **Calendar tab** — monthly visual calendar of all scheduled social posts
- **Monthly Plans tab** — complete 30-day content library (Month 2) with copy and auto-schedule

---

## 2. Live URLs & Access Points

| What | URL |
|------|-----|
| Main website | https://dapsanalytics.com |
| www redirect | https://www.dapsanalytics.com |
| Vercel alias | https://dapsanalytics.vercel.app |
| Linktree | https://dapsanalytics.com/linktree.html |
| Admin login | https://dapsanalytics.com/admin/ |
| Admin dashboard | https://dapsanalytics.com/admin/dashboard.html |
| GitHub repository | https://github.com/OliTamrat/daps-analytics-website |
| Vercel project | https://vercel.com (account: olitamrat) — project still named `stitch_daps_analytics_cinematic_web_experience`; being renamed to `dapsanalytics` in Settings → General |
| Supabase project | https://supabase.com (project ref: rveellaalzowncfsekwx) |

### Stakeholder Access Gate
Some product detail pages require an access code until IP registration (EIPA) and security certification (INSA) are complete.
**Code:** `SPAD2026`

| Product | Public? | Gate Status |
|---------|---------|-------------|
| Onekof PM | Yes — fully public | Gate removed (EIPA + INSA complete) |
| WQIS | Visible with access bar | Detail page gated (`wqis.html`) |
| Hakimet | Hidden | Detail page gated (`hakimet.html`) |
| Olink Fleet | Hidden | Detail page gated (`olink-fleet.html`) |

**Backup:** `products-archive.html` — original 4-product gated page (access code: `SPAD2026`)

---

## 3. Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Markup | HTML5 | Semantic, no framework |
| Styling | Tailwind CSS v3 (CDN) + inline `<style>` | No build step needed |
| Interactivity | Vanilla JavaScript (ES6) | No React, no Vue |
| 3D Animation | Three.js r0.160.1 (CDN) | Homepage globe + Linktree background |
| 2D Animation | Canvas 2D API | Products page data-network |
| Icons | Material Symbols Outlined (Google Fonts) | |
| Typography | Inter (Google Fonts) | Weights 300–900 |
| Database | Supabase (PostgreSQL + Auth) | Insights articles + social posts |
| Email | Resend API | Contact form delivery |
| Scheduling | Microsoft Teams Bookings | Contact page calendar |
| Hosting | Vercel (static) | Auto-deploys from GitHub |
| DNS | GoDaddy | Points to Vercel |

**No build step required.** The site is pure static HTML — any `.html` file can be opened directly in a browser or served with `python -m http.server 3030`.

---

## 4. Website Pages — What Each Does

| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.html` | Hero globe, Onekof flagship + WQIS (stakeholder access bar), Why DAPS section, services, industries, CTA |
| Products | `products.html` | Clean 2-product page: Onekof PM featured + WQIS with stakeholder access bar |
| Products Archive | `products-archive.html` | Backup of original 4-product gated page (access code: `SPAD2026`) |
| Services | `services.html` | Service offerings in bento grid + SaaS products (visible) |
| Industries | `industries.html` | Sector-specific hover-reveal cards |
| Company | `company.html` | Full-bleed Three.js globe hero, mission/vision, US-first trajectory, faceless team (8 role cards), careers section, values |
| Careers | `careers.html` | Dedicated careers page: Why Join DAPS, 3 open positions, CTA |
| Insights | `insights.html` | Article library — filterable, live search; Onekof article visible, Hakimet hidden |
| Article Reader | `article.html` | Static articles (`?id=1–12`) + Supabase admin articles (`?aid=ROW_ID`); audio player; ToC sidebar |
| Projects | `projects.html` | TDT×MINT flagship + Onekof project card visible, others hidden |
| Contact | `contact.html` | Qualification form, dual locations (Bethesda + Addis Ababa), phone placeholders, WhatsApp + Telegram |
| Onekof PM | `onekof-pm.html` | Onekof product detail — **PUBLIC** (gate removed) |
| WQIS | `wqis.html` | Water quality platform detail — gated |
| Hakimet | `hakimet.html` | Telehealth platform detail — gated + hidden |
| Olink Fleet | `olink-fleet.html` | Fleet management platform detail — gated + hidden |
| Privacy Policy | `privacy.html` | 10-section legal privacy policy |
| Linktree | `linktree.html` | Social bio link page |

---

## 5. Linktree Page

**URL:** `dapsanalytics.com/linktree.html`
**Purpose:** Single link shared in all social media bios (Instagram, TikTok, YouTube, etc.)

### Sections
**Follow Us** — all 6 social handles:
| Platform | Handle | URL |
|----------|--------|-----|
| LinkedIn | DAPS Analytics | linkedin.com/company/116015383 |
| X / Twitter | @DapsAnalytics | x.com/DapsAnalytics |
| Instagram | @dapsanalytics | instagram.com/dapsanalytics |
| Facebook | DAPS Analytics | facebook.com/profile.php?id=61589847723974 |
| TikTok | @dapsanalytics | tiktok.com/@dapsanalytics |
| YouTube | @DapsAnalytics | youtube.com/@DapsAnalytics |

**Website Links:**
- Home, Services, Projects, Insights

**Get In Touch:**
- Book a Consultation (Teams calendar)
- Contact Us (contact page form)

### Background
Uses the same Three.js WebGL globe as the homepage hero, centered as a full-page background. Glassmorphism cards sit on top.

---

## 6. Admin Dashboard

**URL:** `dapsanalytics.com/admin/`
**Authentication:** Supabase email + password
**Access:** Restricted to authorized DAPS Analytics team members only

### How to Get Access
An admin account must be created in Supabase:
1. Go to [supabase.com](https://supabase.com) → sign in
2. Select project `rveellaalzowncfsekwx`
3. Go to **Authentication → Users → Invite User**
4. Enter the email address → the person receives a setup link

### The Four Tabs

**Insights**
Manage the articles that appear on `dapsanalytics.com/insights.html`. Create new articles, edit existing ones, toggle active/inactive (inactive articles are hidden from the public site), and delete.

**Social Posts**
A live tracker for every social media post. Each entry has:
- Platform (LinkedIn, Instagram, X, Facebook, TikTok, YouTube)
- Post content and hashtags
- Scheduled date
- Status: Draft → Scheduled → Posted
- Notes field

**Calendar**
Visual monthly calendar built from the Social Posts data. Color-coded by platform. Click any day to add a post. Click any existing post pill to edit it.

**Monthly Plans**
The Month 2 content library — 30 days of pre-written post content across all 6 platforms, organized by week and theme. Admin can:
- Browse all 30 days
- Copy any post's text + hashtags with one click
- Push any post directly to the Calendar with "Add to Calendar" (creates a Draft entry)
- Set a Day 1 start date so all 30 days show real calendar dates

### Database Tables
| Table | What it powers |
|-------|---------------|
| `insights` | Articles on `insights.html` |
| `social_posts` | Social Posts tab + Calendar tab |

---

## 7. Social Media Presence

| Platform | Handle | Status |
|----------|--------|--------|
| LinkedIn | DAPS Analytics (company page) | Active |
| X / Twitter | @DapsAnalytics | Active |
| Instagram | @dapsanalytics | Active |
| Facebook | DAPS Analytics | Active |
| TikTok | @dapsanalytics | Active |
| YouTube | @DapsAnalytics | Active |

### Content Strategy
**Month 2 theme:** Project-Based Services · Data Governance · Analytics & ML/AI · Software Development

**Weekly themes:**
| Week | Theme |
|------|-------|
| Week 1 (Days 1–7) | Data Governance |
| Week 2 (Days 8–14) | Analytics & Decision Intelligence |
| Week 3 (Days 15–21) | ML / AI in African Contexts |
| Week 4 (Days 22–30) | Software & Product Development |

**Posting schedule (optimal times EST):**
| Platform | Best Days | Best Times |
|----------|-----------|------------|
| LinkedIn | Mon–Thu | 8–10am, 12pm |
| X / Twitter | Mon–Fri | 8am, 12pm, 6pm |
| Instagram | Tue, Thu, Fri | 11am–1pm, 7–9pm |
| Facebook | Wed–Fri | 1–3pm |
| TikTok | Tue–Fri | 7–9am, 7–11pm |
| YouTube | Wed, Sat | 12pm–2pm |

### Social Media Workflow (Current)
1. Open admin → **Monthly Plans** tab
2. Find the day's post → select platform
3. Click **Copy Text** (copies content + hashtags)
4. Paste into the platform or into Buffer
5. Click **+ Add to Calendar** to log it as a Draft in Social Posts
6. After posting: update status to **Posted** in the Social Posts tab

---

## 8. Brand & Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Electric Teal | `#49fde3` | CTAs, highlights, nav active, admin primary |
| Warm Amber | `#efbf71` | Secondary accent, alternate highlights |
| Deep Obsidian | `#0e141b` | Main background |
| Ink White | `#dee2ed` | Primary text |
| Muted Gray | `#bacac5` | Body text, secondary labels |
| Outline Gray | `#849490` | Borders, metadata |
| Green underline | `#ABD054` | Logo separator bar |

### Typography
- **Display font:** Inter (all weights 300–900)
- **No secondary typeface** — Inter only throughout

### Logo Files
| File | Use |
|------|-----|
| `assets/images/daps-logo-nav.svg` | Navbar (icon + DAPS ANALYTICS wordmark) |
| `assets/images/daps-logo-full.svg` | Footer (full logo with tagline + green bar) |
| `assets/images/daps-logo-original.svg` | Original with blue background (archived) |

---

## 9. Infrastructure & Hosting

### Hosting: Vercel
- **Account:** olitamrat (`oli-olis-projects` scope)
- **Deploy trigger:** Push to `master` branch on GitHub → Vercel auto-deploys in ~60 seconds
- **No build command** — static files deploy as-is
- **Custom domain:** `dapsanalytics.com` pointed from GoDaddy

### DNS: GoDaddy
| Record | Points To | Purpose |
|--------|-----------|---------|
| A @ | 76.76.21.21 | Vercel — **do not change** |
| CNAME www | cname.vercel-dns.com | Vercel — **do not change** |
| CNAME autodiscover | autodiscover.outlook.com | M365 email |
| CNAME msoid | clientconfig.microsoftonline-p.net | M365 login |
| CNAME sip | sipdir.online.lync.com | Teams voice |

> ⚠️ **Never change the A record or www CNAME** — the site will go down.

### Email: Resend
- Contact form submissions are sent via Resend API
- Requires `RESEND_API_KEY` environment variable in Vercel (currently pending)
- Once set: emails deliver to the configured recipient address

### Scheduling: Microsoft Teams Bookings
- Active link: `https://outlook.office.com/book/ChatwithDAPS@dapsanalytics.com/`
- Embedded in `contact.html`

---

## 10. Database (Supabase)

**Project URL:** `https://rveellaalzowncfsekwx.supabase.co`
**Region:** US East
**Plan:** Free tier

### Security
- **Anon key** (in HTML files): safe — Row Level Security (RLS) restricts it to public SELECT only
- **Service role key**: stored in Vercel environment variables only — **never in any HTML or JS file**
- All write operations require authenticated session

### Tables
| Table | Public can read? | Admin can write? | Key fields |
|-------|-----------------|------------------|------------|
| `insights` | Yes (active only) | Yes | title, category, date, excerpt, body, author, active |
| `social_posts` | No | Yes | platform, content, hashtags, scheduled_date, status, notes |

### Admin Authentication
- Login: Supabase email + password authentication
- Session persists in browser storage
- Auto-redirects to login if session expires

---

## 11. Product Visibility — Current State (Updated 2026-07-16)

Onekof PM has completed EIPA registration (2026-05-26) and INSA security certification (2026-07-03). It is now fully public. Other products remain restricted pending their own IP and security processes.

### Visibility Matrix
| Product | Homepage | Products Page | Detail Page | Navbar | Footer | Projects | Insights |
|---------|----------|--------------|-------------|--------|--------|----------|----------|
| **Onekof PM** | Visible + flagship badge | Featured | PUBLIC | In dropdown | Linked | Visible | Article visible |
| **WQIS** | Visible + access bar | Visible + access bar | Gated (`SPAD2026`) | In dropdown | Not linked | Hidden | N/A |
| **Hakimet** | Hidden | Hidden | Gated | Hidden | Not linked | Hidden | Article hidden |
| **Olink Fleet** | Hidden | Hidden | Gated | Hidden | Not linked | Hidden | N/A |

### What Is Still Locked
| Location | What | How |
|----------|------|-----|
| `wqis.html` | Full detail page | Stakeholder gate (`SPAD2026`) |
| `hakimet.html` | Full detail page | Stakeholder gate + hidden from nav |
| `olink-fleet.html` | Full detail page | Stakeholder gate + hidden from nav |
| `index.html` | Hakimet + Olink Fleet cards | `display:none` |
| `products.html` (archive) | All 4 products | Stakeholder gate (backup page) |
| `insights.html` | Hakimet article | `display:none` |
| `projects.html` | WQIS, Hakimet, Fleet cards | `display:none` |
| `assets/navbar.js` | Hakimet + Fleet in dropdown | Commented out |

### What Is Fully Public
Homepage (with Onekof flagship + WQIS access bar), products page (Onekof + WQIS), services, industries, company (faceless team + globe hero), careers, Onekof PM detail page, all insights articles (except Hakimet), TDT×MINT project, contact, privacy policy, linktree.

---

## 12. How to Re-Enable Everything After Registration

Once EIPA/copyright receipt is in hand, run these steps in order:

**Step 1 — Restore Products in navbar**
In `assets/navbar.js`, search for `Products hidden temporarily` → uncomment both lines (desktop + mobile).

**Step 2 — Remove stakeholder gate**
Delete `<script src="assets/gate.js"></script>` from: `products.html`, `onekof-pm.html`, `wqis.html`, `hakimet.html`, `olink-fleet.html`

**Step 3 — Remove homepage product blur**
In `index.html` delete the `#home-products-lock` div block and the inline sessionStorage script above `navbar.js`.

**Step 4 — Remove services page product blur**
In `services.html` delete the `#svc-products-lock` div block and the inline sessionStorage script.

**Step 5 — Restore insights Product Updates**
In `insights.html` search for `hidden temporarily` → remove `style="display:none;"` from all 4 elements.

**Step 6 — Restore projects product cards**
In `projects.html` search for `hidden temporarily (product)` → remove `style="display:none;"` from all 4 cards.

**Step 7 — Restore footer product links**
Find-replace across all `.html` files: search for `Product links hidden temporarily` → remove `style="display:none;"` from the flex div in each footer.

**Step 8 — Deploy**
```bash
git add -A
git commit -m "Re-enable product content post-registration"
git push origin master
```
Vercel auto-deploys in ~60 seconds.

---

## 13. Pending Tasks Before Full Launch

| Task | Status | Who | What to do |
|------|--------|-----|-----------|
| Add `RESEND_API_KEY` to Vercel | ⏳ Pending | Oli | Vercel dashboard → Settings → Env Vars → add key |
| Real phone numbers | ⏳ Pending | Oli | Replace placeholders in `contact.html` when US + Ethiopia numbers ready |
| WhatsApp number | ⏳ Pending | Oli | Update `href="#"` in `contact.html` with `href="https://wa.me/NUMBER"` |
| OG preview image | ⏳ Pending | Oli | Open `og-generator.html` → save PNG to `assets/images/og-preview.png` → push |
| Update `sitemap.xml` | ⏳ Pending | Oli | Add `careers.html` and `products-archive.html` |
| Unlock WQIS | ⏳ Pending | — | After EIPA/INSA: remove access bars from homepage + products, remove gate.js from `wqis.html` |
| Unlock Hakimet | ⏳ Pending | — | After EIPA/INSA: remove `display:none` from all pages, uncomment in navbar.js, remove gate.js |
| Unlock Olink Fleet | ⏳ Pending | — | After EIPA/INSA: remove `display:none` from all pages, uncomment in navbar.js, remove gate.js |
| Month 3 content plan | ⏳ Pending | Marketing | Plan next 30 days → create content library |
| Onekof PM launch | ✅ Done | — | Gate removed, flagship badge, Certified Secure, publicly accessible (2026-07-16) |
| Website redesign | ✅ Done | — | Why DAPS section, real stats, faceless team, careers page, updated content (2026-07-16) |
| Copyright 2026 | ✅ Done | — | Updated across all pages (2026-07-16) |
| Google Analytics GA4 | ✅ Done | — | `G-F4MDXMW8KB` live on all pages (2026-05-17) |
| Google Search Console | ✅ Done | — | Verified, sitemap submitted (2026-05-17) |
| Bing Webmaster Tools | ✅ Done | — | Verified, sitemap submitted (2026-05-17) |
| SEO overhaul | ✅ Done | — | Canonical URLs, JSON-LD, keyword titles, meta descriptions (2026-05-17) |

---

## 14. How to Deploy Changes

### Via GitHub (recommended)
Any push to the `master` branch automatically triggers a Vercel deployment.

```bash
cd daps-analytics-website
git add -A
git commit -m "Description of changes"
git push origin master
# Live in ~60 seconds at dapsanalytics.com
```

### Local Preview
```bash
cd daps-analytics-website
python -m http.server 3030
# Open http://localhost:3030
```
After changes: hard refresh with `Ctrl+Shift+R` (browsers cache static files aggressively).

---

## 15. File Structure Overview

```
daps-analytics-website/
│
├── index.html              ← Homepage (Three.js globe hero, Onekof flagship)
├── products.html           ← Products (Onekof + WQIS only, clean)
├── products-archive.html   ← Original 4-product page (gated backup)
├── services.html           ← Services bento grid
├── industries.html         ← Industries hover cards
├── company.html            ← Globe hero, faceless team, trajectory, careers
├── careers.html            ← Dedicated careers page
├── insights.html           ← Article library (filterable)
├── article.html            ← Article reader (?id=1–12)
├── projects.html           ← Portfolio + TDT×MINT
├── contact.html            ← Form + Teams booking
├── onekof-pm.html          ← Onekof detail — PUBLIC
├── wqis.html           ← WQIS detail — GATED
├── hakimet.html            ← Hakimet detail — GATED + HIDDEN
├── olink-fleet.html        ← Olink Fleet detail — GATED + HIDDEN
├── privacy.html            ← Privacy policy
├── linktree.html           ← Social bio link page
│
├── admin/
│   ├── index.html          ← Admin login (Supabase Auth)
│   ├── dashboard.html      ← Full CMS dashboard
│   └── schema.sql          ← Database schema (already run)
│
├── assets/
│   ├── navbar.js           ← Shared nav (injected on all pages)
│   ├── daps.js             ← Shared utilities (scroll, filters)
│   ├── gate.js             ← Stakeholder access gate
│   ├── articles-data.js    ← All 12 articles data store
│   ├── month2-posts.js     ← Month 2 social content library
│   └── images/
│       ├── daps-logo-nav.svg
│       ├── daps-logo-full.svg
│       └── og-preview.png  ← (pending)
│
├── api/
│   └── contact.js          ← Resend email serverless function
│
├── social-media/
│   └── month2-30day-content.md  ← Source content plan (Month 2)
│
├── docs/
│   ├── DAPS_PROJECT_HANDOFF.md     ← This document
│   └── ADMIN_OPERATIONS_GUIDE.md   ← Admin user guide
│
├── CLAUDE.md               ← Developer reference (AI workflow rules)
├── Project_Briefing.md     ← Technical briefing (domain, gates, tasks)
├── robots.txt
└── sitemap.xml
```

---

## 16. Session Change Log

### Session 2 — 2026-05-17

#### Article Reader (`article.html`)
- **Image cropping fixed** — hero image switched from `object-fit:cover` (cut off top/bottom) to `object-fit:contain` with dark background fill; full image now visible
- **Audio player subtitle removed** — "AI voice · Adam · ElevenLabs" label removed from the audio bar header
- **Sidebar redesigned** — replaced the large empty right column with three functional cards:
  - **In this article** — Table of Contents auto-generated from article `<h2>` headings; active section highlighted teal as you scroll
  - **Share** — LinkedIn share, X/Twitter share, Copy link (with "Copied!" confirmation)
  - **Related Articles** — unchanged, now properly fills the sidebar

#### Linktree (`linktree.html`)
- **Globe camera aligned to homepage** — changed from centered full-sphere `(0, 0.2, 8.0)` to same offset as homepage `(-1.8, 0.4, 5.8)`; now shows right-side half-circle matching the hero section
- **Added to navbar** — appears in the Company dropdown as "All Links" entry
- **Added to footer** — appears in the Company column on all 13 pages

#### Footer (all 14 pages)
- **Text brightness fixed** — replaced near-invisible `#3b4a46` and `#1e2a26` with readable `#bacac5` and `#849490` across all footer sections
- **Nav link brightness** — footer navigation links bumped from `#849490` to `#bacac5` for better contrast on dark `#050709` footer background

---

### Session 3 — 2026-07-16: Onekof PM Launch & Website Redesign

#### Product Visibility Overhaul
- **Onekof PM:** Gate removed from `onekof-pm.html`, flagship badge + "Certified Secure" badge added to homepage card, fully public and accessible
- **WQIS:** Visible on homepage and products page with clean stakeholder access bar (no blur), detail page still gated
- **Hakimet + Olink Fleet:** Temporarily hidden (`display:none`) across all pages — pending EIPA/INSA
- **Products navbar dropdown:** Now shows only Onekof PM + WQIS; Hakimet/Fleet commented out
- **`products.html`:** Rebuilt as clean 2-product page (Onekof featured + WQIS with access bar)
- **`products-archive.html`:** Original 4-product gated page preserved as backup

#### New Pages
- **`careers.html`** — dedicated careers page: Why Join DAPS (4 value cards), 3 open positions (Full-Stack Engineer, Data Scientist, AI/ML Engineer), CTA to contact

#### Homepage (`index.html`)
- Hero eyebrow changed to "Advanced Analytics · AI · Enterprise Software"
- Hero subtitle updated for US + Africa markets
- Stats updated to real numbers: 4 Platforms, 2 Countries, 7 Capabilities, 8+ Sectors
- Onekof card: flagship badge ("Flagship: Onekof PM — Now Public") + "Certified Secure" badge
- WQIS card: clean stakeholder access bar at bottom (no blur overlay)
- New **"Why DAPS"** section with 4 differentiator cards (Proven Expertise, End-to-End, Local+Global, Cost-Saving)
- Footer description updated to reflect both US + Ethiopia markets
- Mobile fix: product card status badges use `flex-wrap` to prevent overlap on narrow screens (S21, iPhone)

#### Company (`company.html`)
- **Hero completely rebuilt** — full-bleed Three.js globe (exact copy of homepage globe renderer: same camera position, atmosphere shader, arcs, particles, starfield). Replaces previous AI-generated portrait and SVG placeholder
- Mission/Vision text updated with content from Siket Bank briefing deck
- **Trajectory reordered:** Phase 1 = United States (headquarters), Phase 2 = Ethiopia (operations), Phase 3 = East Africa & Global
- **Team section:** 7 founder photo cards replaced with faceless team description + 8 role cards (AI/ML, Data Science, Software, Architecture, DevOps, Security, PM, Research) using Material Symbols icons
- **Careers section** added with CTA linking to `careers.html`
- Added `padding-top:64px` between all sections for breathing room
- Hero animation keyframes (fadeUp) added to style block

#### Services (`services.html`)
- SaaS Products blur overlay and gate script removed — all product cards visible

#### Contact (`contact.html`)
- Address updated: dual locations (Bethesda, Maryland + Addis Ababa, Ethiopia)
- Phone placeholders added: US +1 (301) 000-0000, Ethiopia +251 00 000 0000
- Telegram link added alongside existing WhatsApp
- Contact strip grid updated to 4 columns

#### Insights (`insights.html`)
- Onekof PM article + Product Updates filter pill unhidden
- Hakimet article remains hidden

#### Projects (`projects.html`)
- Onekof PM project card unhidden; WQIS, Hakimet, Fleet stay hidden

#### Navbar (`assets/navbar.js`)
- Products link restored in both desktop and mobile nav
- Products dropdown: only Onekof PM + WQIS shown (Hakimet/Fleet commented out)

#### All Pages
- Copyright updated 2025 → 2026 across all HTML files
- Onekof PM footer link restored and visible

#### SEO — Comprehensive Overhaul (all 13 pages)
| Item | Detail |
|------|--------|
| Canonical URLs | `<link rel="canonical">` added pointing to `dapsanalytics.com` |
| Organization schema | JSON-LD with name, address, logo, contactPoint, all 6 social sameAs links |
| WebSite schema | Homepage only — associates brand name with domain for Knowledge Panel |
| LocalBusiness schema | Contact page — geo-coordinates (Bethesda, MD 38.9818, -77.0953) |
| BreadcrumbList schema | All inner pages — shows as "DAPS Analytics > Services" in search results |
| Page titles | Rewritten with primary keywords (55–76 chars, unique per page) |
| Meta descriptions | Expanded to 150-160 chars with CTAs and keywords |
| OG + Twitter tags | Synced to new titles/descriptions |
| Asset URLs | All `dapsanalytics.vercel.app` → `dapsanalytics.com` |
| `og:locale` | `en_US` added to all pages |
| Geo meta tags | `geo.region: US-MD`, `geo.placename: Bethesda, Maryland` |
| sitemap.xml | Updated to `dapsanalytics.com` URLs + `lastmod: 2026-05-17` |
| robots.txt | Sitemap URL updated; `/api/` disallowed |

#### Analytics & Search Engine Registration
| Platform | Action | Status |
|----------|--------|--------|
| Google Search Console | Domain verified, sitemap submitted, indexing requested on homepage | ✅ Complete |
| Bing Webmaster Tools | Site verified via Google SC import, sitemap submitted | ✅ Complete |
| Google Analytics 4 | `G-F4MDXMW8KB` script added to all 15 pages | ✅ Complete |

#### Admin Dashboard (`admin/dashboard.html`)
- Image upload: drag-and-drop zone added to article form; uploads to `article-images` Supabase Storage bucket; preview shown; `image_url` saved to `insights` table
- ElevenLabs AI audio: "Generate Audio" button per article row; calls `/api/generate-audio` serverless function → ElevenLabs Adam voice → MP3 uploaded to `article-images` bucket → `audio_url` saved to row
- Audio badge in article list: shows `✓ Audio` (green) when MP3 exists, `🔊 TTS` when audio enabled without MP3
- Supabase RLS policies: authenticated INSERT + ALL operations on `article-images` bucket; anon SELECT on `insights` table (active rows only)

#### Vercel Serverless Function (`api/generate-audio.js`)
- New function: calls ElevenLabs `/v1/text-to-speech/{voiceId}` → returns `audio/mpeg` binary
- Voice: Adam (`pNInz6obpgDQGcFmaJgB`) — American male, authoritative
- Model: `eleven_turbo_v2_5`
- `vercel.json` configured with `maxDuration: 60` to handle ElevenLabs generation time (15–20s)
- Environment variables in Vercel: `ELEVENLABS_API_KEY`, `ELEVENLABS_VOICE_ID`

---

## 17. IP & Ownership

- **Author & Moral Rights:** Oli Tamrat
- **Commercial Rights:** DAPS Analytics / Olink Technologies Inc.
- **Address:** 3 Pooks Hill Rd, Suite 914, Bethesda, MD 20814, United States
- **Repository:** Private — OliTamrat/daps-analytics-website
- **EIPA filing:** In progress (2026)

Do not redistribute, copy, or share source code without written authorization from DAPS Analytics / Olink Technologies Inc.

---

*DAPS Analytics — Project Handoff Document*
*© 2026 DAPS Analytics / Olink Technologies Inc. — Confidential*

# DAPS Analytics — Complete Project Handoff
**Document type:** Founder & Stakeholder Reference
**Last updated:** 2026-05-17
**Status:** Live — Pre-registration mode
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
A 14-page cinematic website presenting DAPS Analytics as a high-fidelity data intelligence and software development firm. It serves enterprise decision-makers, government partners, African tech community, and software buyers.

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

- Live WebGL rotating globe as the background (same globe engine as homepage)
- 3 sections: Follow Us (6 social handles) · Website Links · Get In Touch
- Footer: "Built by Olink Technologies"

### Part 3 — Admin Dashboard (`dapsanalytics.com/admin/`)
A password-protected content management system (CMS) for managing the website's Insights articles and social media content.

- **Insights tab** — create, edit, activate/deactivate articles that appear on `insights.html`
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
| Vercel project | https://vercel.com (account: olitamrat, project: stitch_daps_analytics_cinematic_web_experience) |
| Supabase project | https://supabase.com (project ref: rveellaalzowncfsekwx) |

### Stakeholder Access Gate
Some product pages require an access code until IP registration is complete.
**Code:** `SPAD2026`
Pages: Products, Onekof PM, UDC-WQIS, Hakimet, Olink Fleet

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
| Homepage | `index.html` | Hero globe, product suite preview, services preview, industries, trust bar, CTA |
| Products | `products.html` | Detailed product suite (Onekof, UDC-WQIS, Hakimet, Olink Fleet) — gated |
| Services | `services.html` | Service offerings in bento grid layout |
| Industries | `industries.html` | Sector-specific hover-reveal cards |
| Company | `company.html` | Founding story, timeline, 7-founder team section |
| Insights | `insights.html` | Article library — filterable by category, live search, 12 articles |
| Article Reader | `article.html` | Individual article view (`?id=1` through `?id=12`) with progress bar |
| Projects | `projects.html` | TDT×MINT flagship + 6-project portfolio grid + partnership CTA |
| Contact | `contact.html` | Qualification form + Teams booking calendar |
| Onekof PM | `onekof-pm.html` | Onekof product detail page — gated |
| UDC-WQIS | `udc-wqis.html` | Water quality platform detail — gated |
| Hakimet | `hakimet.html` | Telehealth platform detail — gated |
| Olink Fleet | `olink-fleet.html` | Fleet management platform detail — gated |
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

## 11. Pre-Registration Lock — What Is Hidden & Why

DAPS Analytics is currently in pre-registration mode pending IP/copyright filing. Certain product content is intentionally restricted to prevent unauthorized reproduction before the registration is stamped.

### What Is Locked
| Location | What | How |
|----------|------|-----|
| `products.html` | Entire page | Stakeholder gate (`SPAD2026`) |
| `onekof-pm.html` | Entire page | Stakeholder gate |
| `udc-wqis.html` | Entire page | Stakeholder gate |
| `hakimet.html` | Entire page | Stakeholder gate |
| `olink-fleet.html` | Entire page | Stakeholder gate |
| `index.html` | Product suite grid | Blur overlay |
| `services.html` | "SaaS Products" section | Blur overlay |
| `insights.html` | Product Updates articles (4 items) | `display:none` |
| `projects.html` | 4 product project cards | `display:none` |
| All pages footer | Product platform links row | `display:none` |
| `assets/navbar.js` | Products nav item | Commented out |

### What Remains Public
Homepage hero, services overview, industries, company story, team, TDT×MINT flagship project, Pan-African Data Grid concept, contact, all 12 insights articles (non-product), privacy policy, linktree.

---

## 12. How to Re-Enable Everything After Registration

Once EIPA/copyright receipt is in hand, run these steps in order:

**Step 1 — Restore Products in navbar**
In `assets/navbar.js`, search for `Products hidden temporarily` → uncomment both lines (desktop + mobile).

**Step 2 — Remove stakeholder gate**
Delete `<script src="assets/gate.js"></script>` from: `products.html`, `onekof-pm.html`, `udc-wqis.html`, `hakimet.html`, `olink-fleet.html`

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

| Task | Who | What to do |
|------|-----|-----------|
| Add `RESEND_API_KEY` to Vercel | Oli | Vercel dashboard → project → Settings → Environment Variables → add key |
| Founder photos | Founders | Provide 7 photo files → Claude wires them into `company.html` |
| OG preview image | Oli | Open `og-generator.html` locally → click Download → save as `assets/images/og-preview.png` → push |
| Google Analytics | Oli | Create GA4 property → get Measurement ID (G-XXXXXXXXXX) → Claude adds to all pages |
| WhatsApp link | Oli | Provide WhatsApp number → Claude updates `contact.html` |
| Re-enable product content | Oli | Do steps in Section 12 above after EIPA receipt arrives |
| Month 3 content plan | Marketing | Plan next 30 days → Claude creates new content library |

---

## 14. How to Deploy Changes

### Via GitHub (recommended)
Any push to the `master` branch automatically triggers a Vercel deployment.

```bash
cd "C:/Users/olita/Downloads/stitch_daps_analytics_cinematic_web_experience"
git add -A
git commit -m "Description of changes"
git push origin master
# Live in ~60 seconds at dapsanalytics.com
```

### Local Preview
```bash
cd "C:/Users/olita/Downloads/stitch_daps_analytics_cinematic_web_experience"
python -m http.server 3030
# Open http://localhost:3030
```
After changes: hard refresh with `Ctrl+Shift+R` (browsers cache static files aggressively).

---

## 15. File Structure Overview

```
daps-analytics-website/
│
├── index.html              ← Homepage (Three.js globe hero)
├── products.html           ← Products — GATED
├── services.html           ← Services bento grid
├── industries.html         ← Industries hover cards
├── company.html            ← Founding story + team
├── insights.html           ← Article library (filterable)
├── article.html            ← Article reader (?id=1–12)
├── projects.html           ← Portfolio + TDT×MINT
├── contact.html            ← Form + Teams booking
├── onekof-pm.html          ← Onekof detail — GATED
├── udc-wqis.html           ← WQIS detail — GATED
├── hakimet.html            ← Hakimet detail — GATED
├── olink-fleet.html        ← Olink Fleet detail — GATED
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

## 16. IP & Ownership

- **Author & Moral Rights:** Oli Tamrat
- **Commercial Rights:** DAPS Analytics / Olink Technologies Inc.
- **Address:** 3 Pooks Hill Rd, Suite 914, Bethesda, MD 20814, United States
- **Repository:** Private — OliTamrat/daps-analytics-website
- **EIPA filing:** In progress (2026)

Do not redistribute, copy, or share source code without written authorization from DAPS Analytics / Olink Technologies Inc.

---

*DAPS Analytics — Project Handoff Document*
*© 2026 DAPS Analytics / Olink Technologies Inc. — Confidential*

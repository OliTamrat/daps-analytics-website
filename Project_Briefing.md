# DAPS Analytics Website — Project Briefing
**Last updated:** 2026-05-12
**Status:** Pre-registration mode (product content restricted)

---

## Live URLs
| URL | Purpose |
|-----|---------|
| https://dapsanalytics.com | Primary domain (GoDaddy → Vercel) |
| https://www.dapsanalytics.com | www redirect |
| https://dapsanalytics.vercel.app | Vercel alias |

---

## Domain & DNS (GoDaddy)
| Type | Name | Value | Notes |
|------|------|-------|-------|
| A | @ | 76.76.21.21 | Vercel IP — do not change |
| CNAME | www | cname.vercel-dns.com | Vercel www — do not change |
| CNAME | autodiscover | autodiscover.outlook.com | Teams/Outlook email |
| CNAME | lyncdiscover | webdir.online.lync.com | Teams calling |
| CNAME | msoid | clientconfig.microsoftonline-p.net | M365 login |
| CNAME | sip | sipdir.online.lync.com | Teams voice |
| CNAME | email | email.secureserver.net | GoDaddy email |

---

## Scheduling Link
- **Current (active):** Calendly → `https://calendly.com/olitamrat/30min`
- **Target (once Teams is fixed):** `https://outlook.office365.com/owa/calendar/DAPSAnalyticsCustomerSupport@dapsanalytics.com/bookings/`
- **File to update:** `contact.html` — search for `calendly.com/olitamrat/30min` and replace the href

---

## Stakeholder Gate (`assets/gate.js`)
**Access code:** `SPAD2026`
**How it works:** SessionStorage key `daps_access=1`. Clears when browser tab is closed.
**Gate position:** Below navbar (`top:68px`) — navbar and footer remain visible.

### Pages with full gate (code required to view content):
- `products.html`
- `onekof-pm.html`
- `udc-wqis.html`
- `hakimet.html`
- `olink-fleet.html`

### Pages with partial blur overlay (cards blurred, rest of page visible):
- `index.html` — product grid section (`#home-products-lock`)
- `services.html` — "SaaS Products We've Built" section (`#svc-products-lock`)

---

## Pre-Registration Hidden Content

### `insights.html` — Product Updates hidden
Search for `hidden temporarily` to find all 4 hidden elements:
1. Filter pill button (`data-filter="product-updates"`)
2. Article card — Onekof PM 2025 Feature Release (`article.html?id=9`)
3. Article card — Hakimet Telehealth Year One Report (`article.html?id=11`)
4. Sidebar "Product Updates" button

### `projects.html` — Product project cards hidden
Search for `hidden temporarily (product)` to find all 4 hidden cards:
1. UDC-WQIS project card
2. Onekof PM project card
3. Olink Fleet project card
4. Hakimet Telehealth project card

**Public (always visible):** TDT × MINT flagship, Pan-African Data Grid, Smart Government Analytics

### `assets/navbar.js` — Products hidden from navbar
- Desktop nav: `ni('Products', 'products.html', 'products')` commented out (line ~217)
- Mobile panel: `mlink('view_kanban','Products','products.html')` commented out (line ~243)
- Search for `Products hidden temporarily` in navbar.js to find both lines

### Footer — product links hidden across all pages
- All 13 pages: the Onekof · WQIS · Hakimet · Olink link row has `style="display:none;"`
- Search for `Product links hidden temporarily` in any HTML file footer to find them

---

## How to Re-Enable Everything After Registration

### Step 1 — Restore Products in navbar (both desktop + mobile)
In `assets/navbar.js`, search for `Products hidden temporarily` and uncomment the two lines:
- Desktop: `+ ni('Products', 'products.html', 'products')`
- Mobile: `+ mlink('view_kanban','Products','products.html')`

### Step 2 — Remove the stakeholder gate entirely
Delete `<script src="assets/gate.js"></script>` from the bottom of:
- `products.html`, `onekof-pm.html`, `udc-wqis.html`, `hakimet.html`, `olink-fleet.html`

### Step 3 — Remove the homepage product blur overlay
In `index.html`, delete the entire `#home-products-lock` div block and the inline `<script>` above `assets/navbar.js` that checks sessionStorage.

### Step 4 — Remove the services page product blur overlay
In `services.html`, delete the entire `#svc-products-lock` div block and the inline `<script>` above `assets/navbar.js` that checks sessionStorage.

### Step 5 — Restore insights Product Updates
In `insights.html`, search for `hidden temporarily` and remove `style="display:none;"` from all 4 elements.

### Step 6 — Restore projects product cards
In `projects.html`, search for `hidden temporarily (product)` and remove `style="display:none;"` from all 4 project card divs.

### Step 7 — Restore footer product links
In any HTML file, search for `Product links hidden temporarily` and remove `style="display:none;"` from the flex div. Since all pages share the same pattern, run a find-replace across all .html files.

### Step 8 — Switch scheduling link to Teams (already done — active)
Teams booking is live: `https://outlook.office.com/book/ChatwithDAPS@dapsanalytics.com/`

### Step 7 — Deploy
```bash
cd daps-analytics-website
vercel --prod --yes
```

---

## Vercel Deployment
- **Account:** `olitamrat` (`oli-olis-projects` scope)
- **Project name:** `stitch_daps_analytics_cinematic_web_experience` — **being renamed to `dapsanalytics`** in Vercel → Settings → General.
  Renaming changes only the `*.vercel.app` preview subdomain; the `dapsanalytics.com` custom domain stays attached and production is unaffected. Old preview links stop resolving.
- **Deploy command:** `vercel --prod --yes` from project folder
- **No build step** — pure static HTML, deploys in ~15 seconds

---

## Pending Tasks (from CLAUDE.md)
| Task | Action needed |
|------|--------------|
| RESEND_API_KEY | Add to Vercel env vars → contact form will send emails |
| Teams booking link | Fix Teams error, then update `contact.html` |
| OG preview image | Run `og-generator.html` locally → save PNG to `assets/images/og-preview.png` |
| Founder photos | 7 placeholders on `company.html` — provide photo files |
| Google Analytics | Get GA4 Measurement ID → Claude adds script to all pages |
| WhatsApp link | Update `href="#"` on WhatsApp button in `contact.html` |

# DAPS Analytics website — overview

Full-stack frontend for DAPS Analytics (Data Analytics Processing
Solutions), operating across African and global markets. Pure HTML +
Tailwind CDN + vanilla JS — no build step (ADR-0001). Live at
dapsanalytics.com via Vercel from `master`.

## Product visibility — the current state (ADR-0003)

- **Onekof PM**: public flagship.
- **UDC-WQIS**: visible with a stakeholder-access bar; detail page gated.
- **Hakimet + Olink Fleet**: hidden everywhere (navbar, pages, dropdowns)
  **pending EIPA/INSA** — the docs-truth check enforces that the navbar
  does not link them, so a session cannot half-unhide them by accident.
  Unlocking them is a deliberate act with its own runbook.

## Brand rules that must not drift

Visible UI says **"DAPS"**; the legal entity "DAPS Analytics / Olink
Technologies Inc." stays in copyright/IP notices; "DAPS Analytics" stays
in SEO titles and JSON-LD so search identity is preserved. Navbar and
footer intentionally use the same logo file. Design tokens and hero
sizing rules: CLAUDE.md's design-system section and `DESIGN_TOKENS.md`.

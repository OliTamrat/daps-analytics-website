# Unlocking Hakimet / Olink Fleet / WQIS

These are hidden pending EIPA/INSA (ADR-0003). When clearance arrives,
this is a deliberate multi-file act — the docs-truth check will fail
until this runbook and ADR-0003 are updated alongside the code, which is
intentional: unhiding a regulated product should not be a one-line sneak.

1. WQIS: remove stakeholder bars (index, products), remove gate.js from
   udc-wqis.html.
2. Hakimet/Fleet: remove `display:none` across pages, restore navbar
   dropdown entries, remove gate.js from detail pages, unhide the
   insights article and projects card.
3. Supersede ADR-0003 with a new ADR recording the clearance, and update
   the navbar assertions in `scripts/docs-truth.mjs`.
4. Sitemap: add any newly public pages.

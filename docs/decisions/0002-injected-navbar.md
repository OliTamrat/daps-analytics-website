# ADR-0002 — One injected navbar owns navigation and the gap logic

**Status:** accepted · **Date:** 2026

## Context
Fifteen-plus pages; a copy-pasted nav drifts within a week. And the fixed
nav needs different top-padding depending on whether a page opens with a
full-viewport hero.

## Decision
`assets/navbar.js` injects the nav everywhere and decides padding by
detecting `h-screen`/`min-h-screen` on the first element. Scrollable
pages' first sections must use the body background so the 70px padding is
invisible.

## Consequences
One file updates all pages — including which products the dropdown shows
(ADR-0003 leans on this). The gap rule is the site's most-repeated
regression; it is written into CLAUDE.md, this ADR, and the add-a-page
runbook because it keeps being paid for.

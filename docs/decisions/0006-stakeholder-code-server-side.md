# ADR-0006 — The stakeholder access code is checked server-side

**Status:** accepted · **Date:** 2026-10

## Context
`assets/gate.js` compared the entered code against a literal in the same
file, and the code was also written into `Project_Briefing.md` and the
handoff doc. Anyone could read it from the page source or the public repo.

## Decision
The code lives only in the `STAKEHOLDER_ACCESS_CODE` Vercel environment
variable. `gate.js` POSTs the entered value to `/api/gate`, which compares
it (case-insensitive, constant-time) and answers 200 or 401. With the
variable unset the endpoint answers 503 and the gate stays shut (fails
closed). The code is never written in the repo or its docs.

## Consequences
The gate hides the *code*, not the *content*: gated pages are still static
HTML and their markup is in the page source. It remains a confidential-preview
courtesy until EIPA/INSA clearance (ADR-0003), not access control. The old
code is in git history and must be treated as burned; set a new one.
There is no rate limit on `/api/gate`.

## References
`api/gate.js`, `assets/gate.js`, `scripts/docs-truth.mjs`.

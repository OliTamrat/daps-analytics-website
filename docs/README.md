# The knowledge base — OKM Phase 1

Durable knowledge for the DAPS Analytics website, on the OKM taxonomy.
CLAUDE.md remains the operational briefing (design system, session logs,
page inventory); this tree holds what must survive sessions, and
`scripts/docs-truth.mjs` — run by this repo's first CI workflow — grades
the claims that can be checked against the files themselves.

| Where | What |
|---|---|
| `overview.md` | What the site is, the product-visibility state, brand rules |
| `architecture.md` | The no-build stack and its two load-bearing scripts |
| `runbooks/` | Deploy, unlocking gated products |
| `integrations/` | Supabase, Vercel serverless (contact/audio/config) |
| `decisions/` | ADRs — visibility gating, key handling, careers invariant |
| `ADMIN_OPERATIONS_GUIDE.md`, `DAPS_PROJECT_HANDOFF.md`, `DESIGN_TOKENS.md` | Pre-OKM references, kept in place |

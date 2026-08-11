# Deploy

Push to `master` → Vercel auto-deploys in ~60s to dapsanalytics.com.
After deploying or pulling, **hard refresh** (Ctrl+Shift+R) — static HTML
caches aggressively and "my change didn't deploy" is usually this.

Env vars (Vercel dashboard): `RESEND_API_KEY`, `SUPABASE_URL`,
`SUPABASE_ANON_KEY`, ElevenLabs key. `/api/config` returns 503 until the
Supabase pair is set; pages degrade rather than break.

Adding a page or article: the checklists live in CLAUDE.md (Development
Notes) — the two rules people miss are removing any hardcoded `<nav>`
(navbar.js injects it) and the hero-vs-scrollable background rule.

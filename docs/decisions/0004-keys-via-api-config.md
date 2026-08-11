# ADR-0004 — Supabase keys reach the browser only via /api/config

**Status:** accepted · **Date:** 2026-05

## Context
A static site with a CMS needs Supabase credentials in the browser, and
key literals in a public-ish repo are how keys end up in git history
forever (a lesson the fleet has paid for elsewhere).

## Decision
No key literal anywhere in the repo. Pages call `dapsSupabase()`
(`assets/supabase-client.js`) which fetches URL + anon key from
`/api/config`; env vars live in Vercel. Unset → 503 → every page degrades
gracefully (static articles still render, admin says "not configured").

## Consequences
Key rotation is a Vercel env change. The service-role key must never pass
through the endpoint — it bypasses RLS; the docs-truth check holds that
the string appears nowhere outside the warning comment.

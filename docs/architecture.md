# Architecture

No framework, no build (ADR-0001): every page is a standalone HTML file;
shared behaviour lives in two injected scripts, and both are load-bearing:

- **`assets/navbar.js`** injects the nav on every page and owns the
  **gap logic**: hero pages (`h-screen`/`min-h-screen`) get no main
  padding; scrollable pages get 70px — and scrollable sections must use
  the body background (#0e141b) or a visible band appears under the nav.
  This rule breaks visually, silently, on exactly the page you didn't
  check.
- **`assets/supabase-client.js`** — every Supabase-touching page calls
  `dapsSupabase()`, which fetches URL + anon key from `/api/config`
  (Vercel serverless). **No Supabase key literal exists anywhere in the
  repo** (ADR-0004), and each page degrades gracefully when config is
  absent.

Serverless functions (`api/`): `contact.js` (Resend), `generate-audio.js`
(ElevenLabs article narration), `config.js` (the key handoff — and the
one place the service-role warning lives).

The admin (`admin/`) is an Insights CMS + Careers intake. The careers
security invariant is ADR-0005 and is the most important sentence in this
tree: **`job_applications` has public INSERT but no public SELECT**, and
resumes live in a private bucket served by short-lived signed URLs.

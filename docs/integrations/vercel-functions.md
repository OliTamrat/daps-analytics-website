# Vercel serverless functions

- `api/contact.js` — contact form → Resend (needs `RESEND_API_KEY`).
- `api/generate-audio.js` — ElevenLabs narration for articles (Adam
  voice, `eleven_turbo_v2_5`, maxDuration 60s).
- `api/config.js` — the Supabase key handoff; see
  `integrations/supabase.md` for what must never pass through it.

Everything else is static — there is no other server surface to secure.

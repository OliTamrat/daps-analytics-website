/**
 * Public runtime configuration for the static front-end.
 *
 * Serves the Supabase project URL and the *anon* (publishable) key from Vercel
 * environment variables so no key literal lives in the repository.
 *
 * These values are public by design — the anon key is meant to be used from the
 * browser, and Row Level Security is what actually protects the data. Serving it
 * here does not make it secret; it keeps credentials out of version control and
 * gives us one place to rotate them.
 *
 * NEVER expose SUPABASE_SERVICE_ROLE_KEY from this endpoint. That key bypasses
 * RLS entirely and must stay server-side.
 *
 * Required Vercel environment variables:
 *   SUPABASE_URL       e.g. https://xxxxxxxx.supabase.co
 *   SUPABASE_ANON_KEY  the anon / publishable key (role: anon)
 */
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Public, non-secret values — cache briefly at the edge, revalidate in background.
  res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Callers degrade gracefully rather than breaking the page.
    return res.status(503).json({
      error: 'Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in the Vercel project environment variables.'
    });
  }

  return res.status(200).json({ supabaseUrl, supabaseAnonKey });
};

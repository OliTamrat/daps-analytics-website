/* ──────────────────────────────────────────────────────────────────────────
   DAPS — shared Supabase client bootstrap

   Fetches the public Supabase config (project URL + anon key) from the
   /api/config serverless endpoint, which reads it from Vercel environment
   variables. Keeping the key out of the repo means it can be rotated in one
   place and never appears in version control.

   The anon key is public by design — Row Level Security is what protects the
   data. The service_role key must never be served to the browser.

   Usage:
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/..."></script>
     <script src="assets/supabase-client.js"></script>
     ...
     var sb = await dapsSupabase();     // throws if unavailable

   The promise is cached, so calling this repeatedly costs one network request.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  var cached = null;

  window.dapsSupabase = function () {
    if (cached) return cached;

    cached = (async function () {
      if (!window.supabase || typeof supabase.createClient !== 'function') {
        throw new Error('supabase-js failed to load.');
      }
      var res;
      try {
        res = await fetch('/api/config', { headers: { 'Accept': 'application/json' } });
      } catch (e) {
        throw new Error('Could not reach /api/config — check your connection.');
      }
      if (!res.ok) {
        throw new Error(
          res.status === 503
            ? 'Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY in the Vercel environment variables.'
            : '/api/config returned ' + res.status + '.'
        );
      }
      var cfg = await res.json();
      if (!cfg || !cfg.supabaseUrl || !cfg.supabaseAnonKey) {
        throw new Error('Supabase config response was incomplete.');
      }
      return supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    })();

    // Don't cache a rejected promise — allow a later retry.
    cached.catch(function () { cached = null; });
    return cached;
  };
})();

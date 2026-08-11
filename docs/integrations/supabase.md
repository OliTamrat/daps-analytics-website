# Supabase

Insights CMS storage, careers postings/applications, article images.

- **Keys reach the browser only via `/api/config`** (ADR-0004). No
  literal in the repo; 503 degrades gracefully on every consuming page.
- **Never expose `SUPABASE_SERVICE_ROLE_KEY`** from that endpoint — it
  bypasses RLS. The docs-truth check asserts the string appears nowhere
  outside the warning comment.
- Careers invariant (ADR-0005): `job_applications` public INSERT, no
  public SELECT; `resumes` bucket private, signed URLs minted in admin.
  Schema: the Careers block at the bottom of `admin/schema.sql`.

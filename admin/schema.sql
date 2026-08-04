-- DAPS Analytics Admin — Supabase Schema
-- Run this in your Supabase SQL Editor (Database → SQL Editor → New Query)

-- ── INSIGHTS TABLE ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS insights (
  id          BIGSERIAL PRIMARY KEY,
  title       TEXT NOT NULL,
  category    TEXT NOT NULL DEFAULT 'Market Trends',
  date        DATE,
  excerpt     TEXT,
  body        TEXT,
  author      TEXT DEFAULT 'DAPS Analytics Team',
  read_time   TEXT DEFAULT '5 min read',
  active      BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ── SOCIAL POSTS TABLE ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS social_posts (
  id             BIGSERIAL PRIMARY KEY,
  platform       TEXT NOT NULL,          -- LinkedIn, X / Twitter, Instagram, Facebook, TikTok, YouTube
  scheduled_date DATE,
  content        TEXT NOT NULL,
  hashtags       TEXT,
  status         TEXT DEFAULT 'Draft',   -- Draft | Scheduled | Posted
  media_url      TEXT,
  notes          TEXT,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ── ROW LEVEL SECURITY ──────────────────────────────────────────────────────
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_posts ENABLE ROW LEVEL SECURITY;

-- Public read for insights (live on insights.html)
CREATE POLICY "Public read insights"
  ON insights FOR SELECT
  USING (active = TRUE);

-- Authenticated users can do all CRUD
CREATE POLICY "Auth full access insights"
  ON insights FOR ALL
  USING (auth.role() = 'authenticated');

-- Social posts: authenticated only
CREATE POLICY "Auth full access social_posts"
  ON social_posts FOR ALL
  USING (auth.role() = 'authenticated');

-- ── AUTO-UPDATE updated_at ──────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER insights_updated_at
  BEFORE UPDATE ON insights
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER social_posts_updated_at
  BEFORE UPDATE ON social_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ════════════════════════════════════════════════════════════════════════════
-- CAREERS: JOB POSTINGS + APPLICATIONS
-- Run this block in Supabase → SQL Editor to enable the Careers feature.
-- ════════════════════════════════════════════════════════════════════════════

-- ── JOB POSTINGS ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_postings (
  id                BIGSERIAL PRIMARY KEY,
  title             TEXT NOT NULL,
  department        TEXT DEFAULT 'Engineering',   -- Engineering | Data Science | Analytics | Design | Operations | Research
  location          TEXT DEFAULT 'Remote',        -- e.g. "Addis Ababa" / "Bethesda, MD" / "Remote"
  work_type         TEXT DEFAULT 'Remote',        -- Remote | Hybrid | On-site
  employment_type   TEXT DEFAULT 'Full-time',     -- Full-time | Part-time | Contract | Internship
  experience_level  TEXT DEFAULT 'Mid',           -- Entry | Mid | Senior | Lead
  salary_range      TEXT,                         -- optional, free text
  summary           TEXT,                         -- one-line teaser for the list view
  description       TEXT,                         -- full role overview
  responsibilities  TEXT,                         -- one item per line
  requirements      TEXT,                         -- one item per line
  nice_to_have      TEXT,                         -- one item per line
  apply_deadline    DATE,
  posted_date       DATE DEFAULT CURRENT_DATE,
  featured          BOOLEAN DEFAULT FALSE,
  active            BOOLEAN DEFAULT TRUE,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ── JOB APPLICATIONS ────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_applications (
  id                BIGSERIAL PRIMARY KEY,
  job_id            BIGINT REFERENCES job_postings(id) ON DELETE SET NULL,
  job_title         TEXT,                         -- snapshot, survives posting deletion
  full_name         TEXT NOT NULL,
  email             TEXT NOT NULL,
  phone             TEXT,
  location          TEXT,
  linkedin_url      TEXT,
  portfolio_url     TEXT,
  years_experience  TEXT,
  cover_letter      TEXT,
  resume_url        TEXT,
  status            TEXT DEFAULT 'New',           -- New | Screening | Interview | Offer | Hired | Rejected
  notes             TEXT,                         -- internal reviewer notes
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS job_applications_job_id_idx  ON job_applications (job_id);
CREATE INDEX IF NOT EXISTS job_applications_status_idx  ON job_applications (status);
CREATE INDEX IF NOT EXISTS job_postings_active_idx      ON job_postings (active);

-- ── ROW LEVEL SECURITY ──────────────────────────────────────────────────────
ALTER TABLE job_postings     ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Anyone may read ACTIVE postings (powers careers.html)
CREATE POLICY "Public read active job_postings"
  ON job_postings FOR SELECT
  USING (active = TRUE);

-- Admins manage postings
CREATE POLICY "Auth full access job_postings"
  ON job_postings FOR ALL
  USING (auth.role() = 'authenticated');

-- Anyone may SUBMIT an application (insert only — never select)
CREATE POLICY "Public submit job_applications"
  ON job_applications FOR INSERT
  WITH CHECK (TRUE);

-- Only admins may read / update / delete applications.
-- NOTE: there is deliberately NO public SELECT policy here — applicant data
-- (email, phone, resume, cover letter) must never be publicly readable.
CREATE POLICY "Auth read job_applications"
  ON job_applications FOR SELECT
  USING (auth.role() = 'authenticated');
CREATE POLICY "Auth update job_applications"
  ON job_applications FOR UPDATE
  USING (auth.role() = 'authenticated');
CREATE POLICY "Auth delete job_applications"
  ON job_applications FOR DELETE
  USING (auth.role() = 'authenticated');

-- ── AUTO-UPDATE updated_at ──────────────────────────────────────────────────
CREATE TRIGGER job_postings_updated_at
  BEFORE UPDATE ON job_postings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER job_applications_updated_at
  BEFORE UPDATE ON job_applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── STORAGE: RESUME UPLOADS ─────────────────────────────────────────────────
-- Create a PRIVATE bucket named `resumes` (Storage → New bucket → uncheck Public),
-- then run these policies. Private + signed URLs keeps CVs out of public reach.
--
--   INSERT INTO storage.buckets (id, name, public)
--   VALUES ('resumes', 'resumes', FALSE)
--   ON CONFLICT (id) DO NOTHING;
--
--   CREATE POLICY "Public upload resumes"
--     ON storage.objects FOR INSERT TO anon, authenticated
--     WITH CHECK (bucket_id = 'resumes');
--
--   CREATE POLICY "Auth read resumes"
--     ON storage.objects FOR SELECT TO authenticated
--     USING (bucket_id = 'resumes');

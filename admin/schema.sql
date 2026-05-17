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

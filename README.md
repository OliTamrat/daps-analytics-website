# DAPS Analytics

Full-stack frontend website for **DAPS Analytics** (Data Analytics
Processing Solutions), a data intelligence firm operating across African
and global markets. Owned by DAPS Analytics / Olink Technologies Inc.

**Stack:** pure HTML5 + Tailwind CSS (CDN) + vanilla JavaScript — no build
step required. Live at [dapsanalytics.com](https://dapsanalytics.com),
deployed on Vercel from `master`.

## Run it locally

```bash
python -m http.server 3030
# open http://localhost:3030
```

Hard-refresh (`Ctrl+Shift+R`) after pulling changes — static HTML caches
aggressively in the browser.

## Documentation

`docs/` is this project's OKM (Olink Knowledge Management) tree —
`overview.md`, `architecture.md`, `runbooks/`, `integrations/`, and
`decisions/` (ADRs, including the deliberate multi-step unlock for the
EIPA/INSA-gated products — Hakimet and Olink Fleet stay hidden everywhere
until that clears, enforced by a docs-truth check on the navbar itself, not
just written down as a rule). Checkable claims there — gated products absent
from the navbar, no key literal anywhere in the repo, ADR numbering — are
graded against the code by `scripts/docs-truth.mjs` in CI.

`CLAUDE.md` is the full operational briefing — design system, session
history, the pre-launch checklist. Read it before touching the navbar,
product visibility, or anything under `admin/`.

All seven Olink products follow this same `docs/` taxonomy and aggregate
into one searchable portal at
[`olink-knowledge`](https://github.com/OliTamrat/olink-knowledge).

## IP notice

Proprietary to DAPS Analytics and Olink Technologies Inc. Oli Tamrat —
author and moral rights holder. Do not redistribute without authorization.

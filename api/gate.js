/**
 * Stakeholder access-code check for assets/gate.js (ADR-0006).
 *
 * The code used to be a literal in gate.js, readable by anyone who opened the
 * page source. It now lives only in a Vercel environment variable and is
 * compared here, so it never reaches the browser or the repository.
 *
 * This hides the code, not the content: gated pages are static HTML and their
 * markup is still in the page source. The gate is a "confidential preview"
 * courtesy, not access control.
 *
 * Required Vercel environment variable:
 *   STAKEHOLDER_ACCESS_CODE   the code stakeholders are given (case-insensitive)
 *
 * Fails closed: with the variable unset, every attempt is refused with 503.
 */
const crypto = require('crypto');

function normalise(value) {
  return String(value || '').trim().toUpperCase();
}

function digest(value) {
  return crypto.createHash('sha256').update(value, 'utf8').digest();
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const expected = normalise(process.env.STAKEHOLDER_ACCESS_CODE);
  if (!expected) {
    return res.status(503).json({ ok: false, error: 'Stakeholder access is not configured.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  const given = normalise(body && body.code);

  // Compare fixed-length digests so the comparison time does not depend on input.
  const ok = given.length > 0 && crypto.timingSafeEqual(digest(given), digest(expected));
  if (!ok) return res.status(401).json({ ok: false });
  return res.status(200).json({ ok: true });
};

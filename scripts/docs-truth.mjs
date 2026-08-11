// The docs are claims about the files, so the files get to grade them.
// Zero dependencies — this repo has no build step (ADR-0001) and had no CI;
// a checker that needs an install is a checker that stops running.
import { readFileSync, readdirSync } from "node:fs";

let failures = 0;
const fail = (m) => { failures++; console.error("FAIL:", m); };
const read = (p) => readFileSync(p, "utf8");

// --- ADR-0003: the navbar must not link the gated products ---------------
// Comments don't count as links; strip them before looking.
const navbar = read("assets/navbar.js").replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
for (const hidden of ["hakimet.html", "olink-fleet.html"]) {
  if (navbar.includes(hidden)) {
    fail(`navbar.js links ${hidden} but ADR-0003 gates it pending EIPA/INSA — if clearance arrived, follow runbooks/unlock-gated-products.md (supersede the ADR, then update this check)`);
  }
}
for (const shown of ["onekof-pm.html", "udc-wqis.html"]) {
  if (!navbar.includes(shown)) {
    fail(`navbar.js no longer links ${shown} — the two public products must stay reachable`);
  }
}

// --- ADR-0004: no Supabase key literals anywhere -------------------------
// Anon keys are JWTs; any tracked file containing one is a leak.
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  if (e.name.startsWith(".") || e.name === "node_modules") return [];
  const p = `${dir}/${e.name}`;
  return e.isDirectory() ? walk(p) : [p];
});
for (const f of walk(".")) {
  if (!/\.(js|html|md|json)$/.test(f)) continue;
  if (read(f).includes("eyJhbGciOi")) fail(`${f} contains what looks like a JWT — Supabase keys must only exist as Vercel env vars (ADR-0004)`);
}

// --- ADR-0004: service-role key never referenced outside the warning -----
for (const f of walk(".")) {
  if (!/\.(js|html)$/.test(f) || f === "./api/config.js") continue;
  if (read(f).includes("SERVICE_ROLE")) fail(`${f} references SERVICE_ROLE — that key bypasses RLS and belongs nowhere in this repo`);
}

// --- ADRs: sequential and indexed ---------------------------------------
const adrs = readdirSync("docs/decisions").filter((f) => /^\d{4}-/.test(f)).sort();
adrs.forEach((f, i) => { if (parseInt(f.slice(0, 4), 10) !== i + 1) fail(`ADR numbering broken at ${f}`); });
const index = read("docs/decisions/README.md");
for (const f of adrs) if (!index.includes(`| ${f.slice(0, 4)} |`)) fail(`ADR ${f.slice(0, 4)} missing from the index`);

if (failures) { console.error(`\n${failures} doc-truth failure(s)`); process.exit(1); }
console.log("docs-truth: all claims match the files");

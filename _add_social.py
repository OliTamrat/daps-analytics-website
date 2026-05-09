"""
Add social media icons to every page footer.
Icons: LinkedIn, Facebook, X (Twitter), Instagram, TikTok
Links are placeholder '#' — user updates once accounts exist.
"""
import os, glob

SOCIAL_HTML = """      <!-- Social media -->
      <div style="margin-top:20px;">
        <p style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#dee2ed;margin-bottom:14px;">Follow Us</p>
        <div style="display:flex;gap:14px;align-items:center;">

          <!-- LinkedIn -->
          <a href="#" target="_blank" rel="noopener" title="LinkedIn — DAPS Analytics"
             style="color:#849490;transition:color 0.3s,transform 0.3s;display:inline-flex;"
             onmouseover="this.style.color='#0A66C2';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.color='#849490';this.style.transform='translateY(0)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.77A6 6 0 0 1 16 8z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          <!-- Facebook -->
          <a href="#" target="_blank" rel="noopener" title="Facebook — DAPS Analytics"
             style="color:#849490;transition:color 0.3s,transform 0.3s;display:inline-flex;"
             onmouseover="this.style.color='#1877F2';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.color='#849490';this.style.transform='translateY(0)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          <!-- X (Twitter) -->
          <a href="#" target="_blank" rel="noopener" title="X — DAPS Analytics"
             style="color:#849490;transition:color 0.3s,transform 0.3s;display:inline-flex;"
             onmouseover="this.style.color='#ffffff';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.color='#849490';this.style.transform='translateY(0)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" target="_blank" rel="noopener" title="Instagram — DAPS Analytics"
             style="color:#849490;transition:color 0.3s,transform 0.3s;display:inline-flex;"
             onmouseover="this.style.color='#E1306C';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.color='#849490';this.style.transform='translateY(0)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          <!-- TikTok -->
          <a href="#" target="_blank" rel="noopener" title="TikTok — DAPS Analytics"
             style="color:#849490;transition:color 0.3s,transform 0.3s;display:inline-flex;"
             onmouseover="this.style.color='#49fde3';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.color='#849490';this.style.transform='translateY(0)'">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>

        </div>
      </div>"""

# Markers used in each footer's Company column
ANCHOR = '<li><a href="contact.html"'
ANCHOR2 = 'Contact'

pages = glob.glob('*.html')
updated = []

for fname in pages:
    if fname.startswith('_') or 'contact_mobile' in fname:
        continue
    html = open(fname, encoding='utf-8').read()

    # Skip if social already added
    if 'Follow Us' in html:
        print(f'SKIP (already has social): {fname}')
        continue

    # Find the Company nav column and append social icons after the closing </ul>
    # Look for the pattern: Company column ul closing tag before </div> before </div>
    # We'll find the last </ul> before </footer> and insert after it in the Company col
    import re

    # Strategy: find "Company" heading block, find its closing </ul>, insert after
    company_block = re.search(
        r'(Company</h4>\s*<ul[\s\S]*?</ul>)',
        html
    )
    if company_block:
        old = company_block.group(0)
        new = old + '\n' + SOCIAL_HTML
        html = html.replace(old, new, 1)
        open(fname, 'w', encoding='utf-8').write(html)
        updated.append(fname)
        print(f'OK: {fname}')
    else:
        print(f'WARN: Company block not found in {fname}')

print(f'\nUpdated {len(updated)} files.')

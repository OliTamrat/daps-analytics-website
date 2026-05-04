module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, region, service, budget, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Server misconfigured — RESEND_API_KEY not set' });

  const labelStyle = 'font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#849490;padding:8px 0 4px;display:block;';
  const valueStyle = 'font-family:Arial,sans-serif;font-size:15px;color:#1a1a2e;padding-bottom:14px;border-bottom:1px solid #f0f0f0;display:block;';

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;">

        <!-- Header -->
        <tr>
          <td style="background:#0e141b;padding:28px 36px;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#49fde3;">DAPS Analytics</p>
            <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:22px;font-weight:300;color:#dee2ed;letter-spacing:-0.01em;">New Project Enquiry</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px;">

            <span style="${labelStyle}">Full Name</span>
            <span style="${valueStyle}">${name}</span>

            <span style="${labelStyle}">Email</span>
            <span style="${valueStyle}"><a href="mailto:${email}" style="color:#007a73;text-decoration:none;">${email}</a></span>

            <span style="${labelStyle}">Operating Region</span>
            <span style="${valueStyle}">${region || '—'}</span>

            <span style="${labelStyle}">Service Interest</span>
            <span style="${valueStyle}">${service || '—'}</span>

            <span style="${labelStyle}">Estimated Budget</span>
            <span style="${valueStyle}">${budget || '—'}</span>

            ${message ? `
            <span style="${labelStyle}">Project Brief</span>
            <div style="background:#f8f9fa;border-left:3px solid #49fde3;border-radius:0 6px 6px 0;padding:16px 20px;margin-top:4px;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;line-height:1.65;color:#333;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            ` : ''}

          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:0 36px 32px;">
            <a href="mailto:${email}?subject=Re: Your DAPS Analytics enquiry"
               style="display:inline-block;background:#49fde3;color:#003730;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;padding:13px 28px;border-radius:6px;">
              Reply to ${name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fa;padding:20px 36px;border-top:1px solid #eee;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#aaa;">
              Submitted via <a href="https://dapsanalytics.vercel.app/contact.html" style="color:#849490;">dapsanalytics.vercel.app</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // TODO: once hello@dapsanalytics.com is verified in Resend,
        // change from to: 'DAPS Analytics <hello@dapsanalytics.com>'
        from: 'DAPS Analytics <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO_EMAIL || 'olitamrat@gmail.com'],
        reply_to: email,
        subject: `New enquiry from ${name} — DAPS Analytics`,
        html: emailHtml,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      console.error('Resend error:', err);
      return res.status(502).json({ error: 'Email delivery failed' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

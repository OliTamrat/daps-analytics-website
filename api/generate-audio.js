module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { text } = req.body || {};
  if (!text || !text.trim()) return res.status(400).json({ error: 'text is required' });

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'ELEVENLABS_API_KEY not configured' });

  const voiceId = process.env.ELEVENLABS_VOICE_ID || 'xYWUvKNK6zWCgsdAK7Wi';

  try {
    const elResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'audio/mpeg'
        },
        body: JSON.stringify({
          text: text.slice(0, 10000),
          model_id: 'eleven_turbo_v2_5',
          voice_settings: {
            stability: 0.50,
            similarity_boost: 0.75,
            style: 0.30,
            use_speaker_boost: true
          }
        })
      }
    );

    if (!elResponse.ok) {
      const errText = await elResponse.text();
      console.error('ElevenLabs error:', errText);
      return res.status(502).json({ error: 'ElevenLabs error: ' + errText });
    }

    const audioBuffer = await elResponse.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', audioBuffer.byteLength);
    return res.status(200).send(Buffer.from(audioBuffer));

  } catch (err) {
    console.error('generate-audio error:', err);
    return res.status(500).json({ error: err.message });
  }
};

(function () {
  var SESSION_KEY = 'daps_access';
  var CODE = 'SPAD2026';

  if (sessionStorage.getItem(SESSION_KEY) === '1') return;

  var style = document.createElement('style');
  style.textContent = [
    '#daps-gate{position:fixed;top:68px;left:0;right:0;bottom:0;z-index:9999;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;background:rgba(14,20,27,0.82);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);}',
    '#daps-gate .g-box{width:100%;max-width:400px;padding:44px 36px;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);margin:0 16px;}',
    '#daps-gate .g-logo{display:block;height:40px;width:auto;margin:0 auto 28px;}',
    '#daps-gate .g-title{font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#49fde3;text-align:center;margin-bottom:8px;}',
    '#daps-gate .g-sub{font-size:13px;color:#849490;text-align:center;margin-bottom:28px;line-height:1.6;}',
    '#daps-gate .g-input{width:100%;box-sizing:border-box;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);color:#dee2ed;font-size:16px;font-family:Inter,sans-serif;letter-spacing:0.1em;text-align:center;padding:13px 16px;outline:none;margin-bottom:10px;transition:border-color 0.2s;}',
    '#daps-gate .g-input:focus{border-color:#49fde3;}',
    '#daps-gate .g-input::placeholder{color:#849490;letter-spacing:0.04em;font-size:13px;}',
    '#daps-gate .g-btn{width:100%;padding:13px;background:#49fde3;color:#003730;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;border:none;cursor:pointer;transition:opacity 0.2s,box-shadow 0.2s;box-shadow:0 0 24px rgba(73,253,227,0.2);}',
    '#daps-gate .g-btn:hover{opacity:0.88;box-shadow:0 0 36px rgba(73,253,227,0.35);}',
    '#daps-gate .g-err{font-size:12px;color:#ff6b6b;text-align:center;margin-top:10px;min-height:16px;}',
    '#daps-gate .g-footer{font-size:11px;color:#3b4a46;text-align:center;margin-top:24px;letter-spacing:0.04em;}'
  ].join('');
  document.head.appendChild(style);

  var gate = document.createElement('div');
  gate.id = 'daps-gate';
  gate.innerHTML = [
    '<div class="g-box">',
    '  <img class="g-logo" src="/assets/images/daps-logo-full.svg" alt="DAPS Analytics"/>',
    '  <div class="g-title">Stakeholder Access</div>',
    '  <div class="g-sub">This section is restricted to authorized stakeholders.<br/>Enter your access code to continue.</div>',
    '  <input class="g-input" id="g-code" type="password" placeholder="Enter access code" autocomplete="off"/>',
    '  <button class="g-btn" id="g-submit">Verify &amp; Continue</button>',
    '  <div class="g-err" id="g-err"></div>',
    '  <div class="g-footer">DAPS Analytics &mdash; Confidential Preview</div>',
    '</div>'
  ].join('');

  document.body.appendChild(gate);
  setTimeout(function(){ document.getElementById('g-code').focus(); }, 100);

  function attempt() {
    var val = document.getElementById('g-code').value.trim().toUpperCase();
    if (val === CODE) {
      sessionStorage.setItem(SESSION_KEY, '1');
      gate.style.opacity = '0';
      gate.style.transition = 'opacity 0.35s';
      setTimeout(function () { gate.remove(); }, 350);
    } else {
      var err = document.getElementById('g-err');
      err.textContent = 'Incorrect access code. Please try again.';
      document.getElementById('g-code').value = '';
      document.getElementById('g-code').focus();
      setTimeout(function () { err.textContent = ''; }, 3000);
    }
  }

  document.getElementById('g-submit').addEventListener('click', attempt);
  document.getElementById('g-code').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') attempt();
  });
})();

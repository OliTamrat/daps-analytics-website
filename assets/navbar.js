/* ═══════════════════════════════════════════════════════════════
   DAPS Analytics — Shared Navigation Component v2
   Injects full nav (with dropdown menus) into every page.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── CSS ─────────────────────────────────────────────────────── */
  var CSS = [
    '#daps-nav{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(5,7,9,0.92);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-bottom:1px solid rgba(255,255,255,0.07);}',
    '#daps-nav .ni{display:flex;justify-content:space-between;align-items:center;max-width:1440px;margin:0 auto;padding:0 48px;height:70px;}',
    '@media(max-width:768px){#daps-nav .ni{padding:0 20px;}}',

    /* Nav list */
    '#daps-nav .nl{display:flex;align-items:center;gap:2px;list-style:none;margin:0;padding:0;}',
    '#daps-nav .nit{position:relative;}',

    /* Nav link button */
    '#daps-nav .nlk{display:inline-flex;align-items:center;gap:3px;padding:8px 13px;border-radius:8px;font-size:14px;font-weight:500;letter-spacing:-0.01em;color:rgba(255,255,255,0.62);cursor:pointer;transition:color 0.18s,background 0.18s;white-space:nowrap;text-decoration:none;background:transparent;border:none;font-family:Inter,sans-serif;line-height:1;}',
    '#daps-nav .nit:hover .nlk,#daps-nav .nlk.na-active{color:#fff;background:rgba(255,255,255,0.07);}',
    '#daps-nav .nlk.na-active{color:#49fde3;background:rgba(73,253,227,0.08);}',
    '#daps-nav .chv{font-size:14px;transition:transform 0.22s ease;opacity:0.45;font-variation-settings:"FILL" 0;}',
    '#daps-nav .nit:hover .chv{transform:rotate(180deg);opacity:0.9;}',

    /* Dropdown panel */
    '#daps-nav .dd{position:absolute;top:100%;padding-top:6px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity 0.18s ease,transform 0.18s ease,visibility 0.18s;z-index:300;min-width:260px;}',
    '#daps-nav .nit:hover .dd{opacity:1;visibility:visible;pointer-events:all;}',
    '#daps-nav .dd.ddl{left:0;}',
    '#daps-nav .dd.ddr{right:0;}',
    '#daps-nav .dd.ddc{left:50%;transform:translateX(-50%);}',
    '#daps-nav .nit:hover .dd.ddc{transform:translateX(-50%);}',
    '#daps-nav .ddi{background:#0b0e13;border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:8px;box-shadow:0 24px 56px rgba(0,0,0,0.65),0 0 0 1px rgba(73,253,227,0.05);}',

    /* Dropdown items */
    '#daps-nav .dsl{font-size:9.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#2a3840;padding:4px 10px 6px;display:block;}',
    '#daps-nav .dg{display:grid;gap:2px;}',
    '#daps-nav .dg2{grid-template-columns:1fr 1fr;}',
    '#daps-nav .dit{display:flex;align-items:flex-start;gap:10px;padding:10px 10px;border-radius:9px;text-decoration:none;transition:background 0.14s;cursor:pointer;}',
    '#daps-nav .dit:hover{background:rgba(255,255,255,0.055);}',
    '#daps-nav .dico{width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;}',
    '#daps-nav .dico .material-symbols-outlined{font-size:15px;font-variation-settings:"FILL" 1;}',
    '#daps-nav .tc{background:rgba(73,253,227,0.09);border:1px solid rgba(73,253,227,0.15);}',
    '#daps-nav .tc .material-symbols-outlined{color:#49fde3;}',
    '#daps-nav .ac{background:rgba(239,191,113,0.09);border:1px solid rgba(239,191,113,0.15);}',
    '#daps-nav .ac .material-symbols-outlined{color:#efbf71;}',
    '#daps-nav .nc{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);}',
    '#daps-nav .nc .material-symbols-outlined{color:#bacac5;}',
    '#daps-nav .dt{font-size:12.5px;font-weight:600;color:#dee2ed;margin-bottom:2px;line-height:1.3;font-family:Inter,sans-serif;}',
    '#daps-nav .dd2{font-size:11px;color:#849490;line-height:1.45;font-family:Inter,sans-serif;}',
    '#daps-nav .db{display:inline-block;font-size:8.5px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:2px 6px;border-radius:4px;margin-top:3px;}',
    '#daps-nav .dbl{background:rgba(73,253,227,0.12);color:#49fde3;}',
    '#daps-nav .dbd{background:rgba(239,191,113,0.12);color:#efbf71;}',
    '#daps-nav .dfr{display:flex;align-items:center;justify-content:space-between;padding:8px 10px 4px;border-top:1px solid rgba(255,255,255,0.06);margin-top:4px;}',
    '#daps-nav .dfr a{font-size:10.5px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#49fde3;text-decoration:none;transition:color 0.15s;}',
    '#daps-nav .dfr a:hover{color:#fff;}',

    /* Right actions */
    '#daps-nav .na{display:flex;align-items:center;gap:6px;}',
    '#daps-nav .blng{display:flex;align-items:center;gap:5px;padding:7px 12px;border-radius:8px;font-size:13px;font-weight:500;letter-spacing:-0.01em;color:rgba(255,255,255,0.45);background:transparent;border:none;cursor:pointer;font-family:Inter,sans-serif;transition:color 0.18s,background 0.18s;position:relative;}',
    '#daps-nav .blng:hover{color:rgba(255,255,255,0.85);background:rgba(255,255,255,0.05);}',
    '#daps-nav .blng .material-symbols-outlined{font-size:16px;}',
    '#daps-nav .bcta{padding:8px 20px;border:1px solid #49fde3;color:#49fde3;background:transparent;border-radius:7px;font-size:12.5px;font-weight:700;letter-spacing:0.02em;font-family:Inter,sans-serif;cursor:pointer;text-decoration:none;transition:background 0.2s,color 0.2s,box-shadow 0.2s;display:inline-flex;align-items:center;white-space:nowrap;}',
    '#daps-nav .bcta:hover{background:#49fde3;color:#003730;box-shadow:0 0 20px rgba(73,253,227,0.22);}',

    /* Mobile toggle */
    '#daps-nav .bmob{display:none;background:none;border:none;color:rgba(255,255,255,0.8);cursor:pointer;padding:4px;border-radius:6px;transition:color 0.18s;}',
    '#daps-nav .bmob:hover{color:#fff;}',

    /* Mobile panel */
    '#daps-nav #mpanel{display:none;background:rgba(5,7,9,0.97);backdrop-filter:blur(20px);border-top:1px solid rgba(255,255,255,0.06);max-height:calc(100dvh - 70px);overflow-y:auto;padding:20px 24px 32px;}',
    '#daps-nav .msl{font-size:9.5px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#2a3840;margin:0 0 8px;display:block;}',
    '#daps-nav .mlk{display:flex;align-items:center;gap:10px;padding:11px 0;font-size:15px;font-weight:500;color:rgba(255,255,255,0.75);text-decoration:none;border-bottom:1px solid rgba(255,255,255,0.05);font-family:Inter,sans-serif;transition:color 0.18s;}',
    '#daps-nav .mlk:hover,#daps-nav .mlk.na-active{color:#49fde3;}',
    '#daps-nav .mlk .material-symbols-outlined{font-size:17px;opacity:0.45;}',
    '#daps-nav .msec{margin-bottom:20px;}',
    '#daps-nav .mctab{display:block;width:100%;margin-top:20px;padding:14px 20px;border:1px solid #49fde3;color:#49fde3;background:rgba(73,253,227,0.05);border-radius:8px;font-size:13px;font-weight:700;letter-spacing:0.04em;text-align:center;text-decoration:none;font-family:Inter,sans-serif;transition:background 0.2s,color 0.2s;}',
    '#daps-nav .mctab:hover{background:#49fde3;color:#003730;}',

    /* Language dropdown */
    '#daps-nav .ldrop{position:absolute;top:calc(100% + 4px);right:0;background:#0b0e13;border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:6px;min-width:190px;box-shadow:0 16px 40px rgba(0,0,0,0.6);z-index:400;display:none;}',
    '#daps-nav .ldrop.open{display:block;}',
    '#daps-nav .lhdr{font-size:9.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#2a3840;padding:4px 10px 8px;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:4px;}',
    '#daps-nav .litm{display:flex;justify-content:space-between;align-items:center;padding:9px 10px;border-radius:7px;cursor:pointer;transition:background 0.14s;}',
    '#daps-nav .litm:hover{background:rgba(255,255,255,0.05);}',
    '#daps-nav .litm span:first-child{font-size:13px;color:#dee2ed;font-family:Inter,sans-serif;}',
    '#daps-nav .litm span:last-child{font-size:10.5px;color:#849490;font-family:Inter,sans-serif;}',
    '#daps-nav .litm.la span:first-child{color:#49fde3;}',

    /* Responsive */
    '@media(max-width:1024px){#daps-nav .nl{display:none;}#daps-nav .blng{display:none;}#daps-nav .bcta{display:none;}#daps-nav .bmob{display:flex;}}',
  ].join('');

  /* ── Dropdown item builder ───────────────────────────────────── */
  function di(icon, cls, title, desc, href, badge) {
    var b = badge === 'live' ? '<span class="db dbl">● Live</span>'
          : badge === 'dev'  ? '<span class="db dbd">● In Dev</span>' : '';
    return '<a href="' + (href || '#') + '" class="dit">'
      + '<div class="dico ' + cls + '"><span class="material-symbols-outlined">' + icon + '</span></div>'
      + '<div><div class="dt">' + title + '</div><div class="dd2">' + desc + '</div>' + b + '</div>'
      + '</a>';
  }

  function dd(content, align) {
    return '<div class="dd ' + (align === 'l' ? 'ddl' : align === 'r' ? 'ddr' : 'ddc') + '">'
      + '<div class="ddi">' + content + '</div></div>';
  }

  /* ── Dropdown content ────────────────────────────────────────── */
  var DROP = {
    services: dd(
      '<span class="dsl">Analytics Services</span>'
      + '<div class="dg">'
      + di('analytics','tc','Predictive Analytics','Advanced ML models for market & ops forecasting','services.html')
      + di('schema','ac','Data Infrastructure','Scalable cloud pipelines from ingestion to insight','services.html')
      + di('dashboard','nc','Visual Intelligence','Bespoke dashboards with luxury design principles','services.html')
      + di('tune','tc','Strategic Auditing','Full ecosystem evaluation & architectural remediation','services.html')
      + '</div>'
      + '<div class="dfr"><a href="services.html">View all services →</a></div>',
    'l'),

    products: dd(
      '<span class="dsl">Live Products</span>'
      + '<div class="dg dg2">'
      + di('view_kanban','tc','Onekof PM','Project management built for Ethiopia','onekof-pm.html','live')
      + di('water_drop','ac','UDC-WQIS','Water quality intelligence, Washington DC','udc-wqis.html','live')
      /* Hakimet + Olink Fleet hidden — pending EIPA/INSA */
      + '</div>'
      + '<div class="dfr"><a href="products.html">Explore full platform →</a></div>',
    'l'),

    projects: dd(
      '<span class="dsl">Strategic Initiatives</span>'
      + '<div class="dg">'
      + di('account_tree','tc','TDT × MINT Ethiopia','National technology development & transfer','projects.html','live')
      + di('hub','ac','Pan-African Data Grid','Cross-border regional data connectivity','projects.html','dev')
      + di('account_balance','nc','Smart Gov Analytics','Government intelligence dashboards','projects.html','dev')
      + '</div>'
      + '<div class="dfr"><a href="projects.html">All projects →</a></div>',
    'l'),

    industries: dd(
      '<span class="dsl">Sectors We Serve</span>'
      + '<div class="dg dg2">'
      + di('account_balance','tc','Banking & Fintech','Risk modeling & market intelligence','industries.html')
      + di('gavel','nc','Government','Policy data & infrastructure mapping','industries.html')
      + di('cell_tower','ac','Telecom','Network optimization analytics','industries.html')
      + di('ecg_heart','tc','Healthcare','Patient data synthesis & forecasting','industries.html')
      + di('agriculture','ac','Agriculture','Satellite yield prediction models','industries.html')
      + di('local_shipping','nc','Logistics & NGOs','Routing, inventory & impact tracking','industries.html')
      + '</div>'
      + '<div class="dfr"><a href="industries.html">All industries →</a></div>',
    'c'),

    insights: dd(
      '<span class="dsl">Intelligence Hub</span>'
      + '<div class="dg">'
      + di('article','tc','All Articles','Browse the full DAPS insights library','insights.html')
      + di('trending_up','ac','Market Trends','African & global market analysis','insights.html')
      + di('science','nc','Data Science','Technical deep dives & methodology','insights.html')
      + di('cases','tc','Case Studies','Real-world client outcomes','insights.html')
      + di('flag','ac','Projects','TDT, WQIS, and initiative learnings','insights.html')
      + '</div>'
      + '<div class="dfr"><a href="insights.html">Go to Insights →</a></div>',
    'r'),

    company: dd(
      '<span class="dsl">About DAPS</span>'
      + '<div class="dg">'
      + di('info','tc','About Us','Our story, mission, and trajectory','company.html')
      + di('groups','nc','Leadership','Meet the DAPS team','company.html')
      + di('timeline','ac','Our Journey','Ethiopia → East Africa → Global','company.html')
      + di('forum','tc','Contact Us','Initiate a project conversation','contact.html')
      + di('link','nc','All Links','Find DAPS across every platform','linktree.html')
      + '</div>'
      + '<div class="dfr"><a href="company.html">Company overview →</a></div>',
    'r'),
  };

  /* ── Nav item helper ─────────────────────────────────────────── */
  function ni(label, href, key) {
    return '<li class="nit"><a href="' + href + '" class="nlk" data-nav-page="' + href + '">'
      + label + '<span class="material-symbols-outlined chv">expand_more</span></a>'
      + (DROP[key] || '') + '</li>';
  }

  /* ── Mobile section helper ───────────────────────────────────── */
  function mlink(icon, label, href) {
    return '<a href="' + href + '" class="mlk" data-nav-page="' + href + '">'
      + '<span class="material-symbols-outlined">' + icon + '</span>' + label + '</a>';
  }

  /* ── Language dropdown ───────────────────────────────────────── */
  var LANGS = [
    { code:'en', native:'English',    eng:'English',      active:true  },
    { code:'am', native:'አማርኛ',      eng:'Amharic',      active:false },
    { code:'om', native:'Oromoo',     eng:'Afaan Oromoo', active:false },
    { code:'ti', native:'ትግርኛ',      eng:'Tigrinya',     active:false },
    { code:'fr', native:'Français',   eng:'French',       active:false },
    { code:'ar', native:'العربية',    eng:'Arabic',       active:false },
  ];

  var langHTML = '<span class="lhdr">Select Language</span>'
    + LANGS.map(function(l){
        return '<div class="litm' + (l.active?' la':'') + '" data-lang="' + l.code + '">'
          + '<span>' + l.native + '</span><span>' + l.eng + '</span></div>';
      }).join('');

  /* ── Full nav HTML ───────────────────────────────────────────── */
  var NAV = '<div class="ni">'
    /* Logo */
    + '<a href="index.html" style="display:flex;align-items:center;flex-shrink:0;text-decoration:none;">'
    + '<img src="assets/images/daps-logo-nav.svg" alt="DAPS" style="height:36px;width:auto;"/></a>'

    /* Desktop nav */
    + '<ul class="nl">'
    + ni('Services',   'services.html',   'services')
    + ni('Products', 'products.html', 'products')
    + ni('Projects',   'projects.html',   'projects')
    + ni('Industries', 'industries.html', 'industries')
    + ni('Insights',   'insights.html',   'insights')
    + ni('Company',    'company.html',    'company')
    + '</ul>'

    /* Right actions */
    + '<div class="na">'
    + '<div style="position:relative;">'
    + '<button class="blng" id="lang-btn-main" aria-label="Language selector">'
    + '<span class="material-symbols-outlined">language</span>Global'
    + '</button>'
    + '<div class="ldrop" id="lang-dropdown-main">' + langHTML + '</div>'
    + '</div>'
    + '<a href="contact.html" class="bcta">Book a Call</a>'
    + '<button class="bmob" id="mob-toggle" aria-label="Menu">'
    + '<span class="material-symbols-outlined" id="mob-icon" style="font-size:22px;">menu</span>'
    + '</button>'
    + '</div>'
    + '</div>'

    /* Mobile panel */
    + '<div id="mpanel">'
    + '<div class="msec"><span class="msl">Platform</span>'
    + mlink('settings','Services','services.html')
    + mlink('view_kanban','Products','products.html')
    + mlink('account_tree','Projects','projects.html')
    + mlink('hub','Industries','industries.html')
    + '</div>'
    + '<div class="msec"><span class="msl">Resources</span>'
    + mlink('article','Insights','insights.html')
    + mlink('info','Company','company.html')
    + mlink('link','All Links','linktree.html')
    + '</div>'
    + '<a href="contact.html" class="mctab">Book a Call</a>'
    + '</div>';

  /* ── Boot ────────────────────────────────────────────────────── */
  function boot() {
    /* Inject CSS */
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    /* Remove old nav (any existing <nav> element) */
    var old = document.querySelector('nav');
    if (old) old.remove();

    /* Build & insert nav */
    var nav = document.createElement('nav');
    nav.id = 'daps-nav';
    nav.innerHTML = NAV;
    document.body.insertAdjacentElement('afterbegin', nav);

    /* ── Page offset logic ────────────────────────────────────────
       Hero pages  → first section is min/h-screen, background fills
                     BEHIND the fixed nav (y=0). Content inside the
                     section already has pt-28 (112px) so text sits
                     below the 70px nav. No extra padding needed.
       Content pages → main has no hero, needs 70px top padding so
                       the first heading isn't hidden under the nav.
    ──────────────────────────────────────────────────────────────── */
    var mainEl = document.querySelector('main');
    if (mainEl) {
      var firstEl = mainEl.firstElementChild;
      var isHero = firstEl && (
        firstEl.className.indexOf('min-h-screen') !== -1 ||
        firstEl.className.indexOf('h-screen') !== -1
      );
      if (!isHero) {
        mainEl.style.paddingTop = '70px';
      }
    }

    /* Set active page */
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-nav-page]').forEach(function (el) {
      if (el.dataset.navPage === page) el.classList.add('na-active');
    });

    /* Mobile menu toggle */
    var mobBtn  = document.getElementById('mob-toggle');
    var mobIcon = document.getElementById('mob-icon');
    var panel   = document.getElementById('mpanel');
    if (mobBtn && panel) {
      mobBtn.addEventListener('click', function () {
        var open = panel.style.display === 'block';
        panel.style.display = open ? 'none' : 'block';
        if (mobIcon) mobIcon.textContent = open ? 'menu' : 'close';
      });
    }

    /* Language button */
    var langBtn  = document.getElementById('lang-btn-main');
    var langDrop = document.getElementById('lang-dropdown-main');
    if (langBtn && langDrop) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        langDrop.classList.toggle('open');
      });
      document.addEventListener('click', function () {
        langDrop.classList.remove('open');
      });
      langDrop.querySelectorAll('.litm').forEach(function (item) {
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          var code = this.dataset.lang;
          if (code !== 'en') {
            showToast(this.querySelector('span').textContent + ' — coming soon.');
          } else {
            langDrop.querySelectorAll('.litm').forEach(function(i){i.classList.remove('la');});
            this.classList.add('la');
          }
          langDrop.classList.remove('open');
        });
      });
    }

  }

  /* ── Toast ───────────────────────────────────────────────────── */
  function showToast(msg) {
    var t = document.getElementById('daps-toast');
    if (t) t.remove();
    t = document.createElement('div');
    t.id = 'daps-toast';
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(10px);background:#111820;border:1px solid rgba(73,253,227,0.25);color:#49fde3;font-size:12px;font-weight:600;letter-spacing:0.05em;padding:10px 22px;border-radius:6px;z-index:9999;box-shadow:0 8px 28px rgba(0,0,0,0.5);opacity:0;transition:opacity 0.28s ease,transform 0.28s ease;pointer-events:none;white-space:nowrap;font-family:Inter,sans-serif;';
    document.body.appendChild(t);
    requestAnimationFrame(function(){requestAnimationFrame(function(){t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';});});
    setTimeout(function(){t.style.opacity='0';t.style.transform='translateX(-50%) translateY(6px)';setTimeout(function(){t.remove();},300);},3200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

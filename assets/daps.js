/* DAPS Analytics — shared site JavaScript */

/* ── Global mobile / responsive fixes (injected on every page) ──────── */
(function () {
  var s = document.createElement('style');
  s.textContent = [
    /* Prevent horizontal overflow — the #1 Android mobile issue */
    'html,body{overflow-x:hidden;}',
    '*, *::before, *::after{box-sizing:border-box;}',
    'img,svg,video{max-width:100%;height:auto;}',

    /* Canvases must never block touch-scroll */
    'canvas{touch-action:none;}',

    /* Prevent double-tap zoom on interactive elements */
    'a,button,[role="button"],input,select,textarea{touch-action:manipulation;}',

    /* Prevent iOS/Android auto-zoom on input focus (needs 16px+) */
    'input[type="text"],input[type="email"],input[type="tel"],',
    'input[type="number"],input[type="search"],select,textarea{font-size:16px!important;}',

    /* 100svh: fixes the address-bar jump on Android Chrome */
    '.min-h-screen{min-height:100svh;min-height:100vh;}',

    /* ── ≤ 768px ───────────────────────────────────────────────── */
    '@media(max-width:768px){',

      /* Hero canvas: fill full width at lower opacity on mobile */
      '.hero-canvas-bg{width:100%!important;left:0!important;right:0!important;opacity:0.38!important;}',

      /* Hero text column: full width, centered on mobile */
      '.hero-text-col{max-width:100%!important;}',
      '.hero-text-col h1{font-size:clamp(28px,8vw,46px)!important;line-height:1.1!important;}',
      '.hero-text-col p{font-size:15px!important;line-height:1.65!important;}',
      '.hero-text-col .flex{flex-wrap:wrap;}',

      /* Section vertical padding — halve the 128px / 160px inline styles */
      'section[style*="padding:128px"],section[style*="padding: 128px"]{padding-top:60px!important;padding-bottom:60px!important;}',
      'section[style*="padding:160px"],section[style*="padding: 160px"]{padding-top:80px!important;padding-bottom:80px!important;}',

      /* Touch-friendly tap targets */
      'a,button{min-height:44px;}',

      /* Reveal threshold — trigger earlier on mobile so content isn't hidden */
      '.reveal:not(.revealed){opacity:0.85;transform:translateY(10px);}',

      /* Ensure insight filter pills scroll horizontally on mobile */
      '.flex.flex-wrap.gap-2{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:4px;}',
    '}',

    /* ── ≤ 480px (small phones) ────────────────────────────────── */
    '@media(max-width:480px){',
      '.hero-text-col h1{font-size:clamp(24px,7vw,36px)!important;}',
      /* Stack CTA buttons vertically */
      '.hero-text-col .flex.flex-wrap{flex-direction:column;}',
      '.hero-text-col .flex.flex-wrap a,.hero-text-col .flex.flex-wrap button{width:100%;justify-content:center;text-align:center;}',
      /* Reduce horizontal padding on very small screens */
      '.px-6{padding-left:14px!important;padding-right:14px!important;}',
    '}',
  ].join('');
  document.head.appendChild(s);
})();

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupMobileMenu();
    setActiveNav();
    setupScrollReveal();
    setupFilterPills();
  }

  /* ── Mobile menu ─────────────────────────────────────────────── */
  function setupMobileMenu() {
    var btn  = document.getElementById('mobile-menu-btn');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    var iconEl = btn.querySelector('.material-symbols-outlined');

    btn.addEventListener('click', function () {
      var open = !menu.classList.contains('hidden');
      if (open) {
        menu.classList.add('hidden');
        if (iconEl) iconEl.textContent = 'menu';
      } else {
        menu.classList.remove('hidden');
        if (iconEl) iconEl.textContent = 'close';
      }
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.add('hidden');
        if (iconEl) iconEl.textContent = 'menu';
      });
    });
  }

  /* ── Active nav link ─────────────────────────────────────────── */
  function setActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('[data-nav-page]').forEach(function (el) {
      if (el.dataset.navPage === page) {
        el.classList.remove('text-white/70');
        el.classList.add('text-teal-400', 'border-b', 'border-teal-400', 'pb-1');
      }
    });
  }

  /* ── Scroll reveal ───────────────────────────────────────────── */
  function setupScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Filter pills (Insights page) ───────────────────────────── */
  function setupFilterPills() {
    var pills = document.querySelectorAll('.filter-pill');
    if (!pills.length) return;

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) {
          p.classList.remove('border-primary', 'text-primary', 'bg-primary/10');
          p.classList.add('border-white/10', 'text-white/70');
        });
        pill.classList.remove('border-white/10', 'text-white/70');
        pill.classList.add('border-primary', 'text-primary', 'bg-primary/10');
      });
    });
  }


})();

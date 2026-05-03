/* DAPS Analytics — shared site JavaScript */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupMobileMenu();
    setActiveNav();
    setupScrollReveal();
    setupFilterPills();
    setupLanguageSelector();
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

  /* ── Language selector ───────────────────────────────────────── */
  function setupLanguageSelector() {
    /* Find every nav language button (contains 'language' icon + Global text) */
    var langBtns = Array.prototype.filter.call(
      document.querySelectorAll('nav button'),
      function (b) {
        var icon = b.querySelector('.material-symbols-outlined');
        return icon && icon.textContent.trim() === 'language';
      }
    );

    if (!langBtns.length) return;

    /* Languages DAPS products support */
    var LANGS = [
      { code: 'en',  label: 'English',       native: 'English',    active: true  },
      { code: 'am',  label: 'Amharic',        native: 'አማርኛ',      active: false },
      { code: 'om',  label: 'Afaan Oromoo',   native: 'Oromoo',     active: false },
      { code: 'ti',  label: 'Tigrinya',       native: 'ትግርኛ',      active: false },
      { code: 'fr',  label: 'French',         native: 'Français',   active: false },
      { code: 'ar',  label: 'Arabic',         native: 'العربية',    active: false },
    ];

    /* Build dropdown element once */
    var dropdown = document.createElement('div');
    dropdown.id = 'lang-dropdown';
    dropdown.setAttribute('aria-label', 'Language selector');
    dropdown.style.cssText = [
      'position:absolute',
      'top:calc(100% + 8px)',
      'right:0',
      'min-width:200px',
      'background:#111418',
      'border:1px solid rgba(255,255,255,0.1)',
      'border-radius:8px',
      'padding:8px 0',
      'z-index:200',
      'box-shadow:0 16px 40px rgba(0,0,0,0.6)',
      'display:none',
    ].join(';');

    /* Header */
    var hdr = document.createElement('p');
    hdr.textContent = 'Select Language';
    hdr.style.cssText = 'font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#3b4a46;padding:8px 16px 10px;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:4px;';
    dropdown.appendChild(hdr);

    var selectedCode = 'en';

    LANGS.forEach(function (lang) {
      var item = document.createElement('button');
      item.dataset.langCode = lang.code;
      item.style.cssText = 'display:flex;align-items:center;justify-content:space-between;width:100%;padding:10px 16px;background:none;border:none;cursor:pointer;text-align:left;transition:background 0.2s;';
      item.innerHTML =
        '<span style="font-size:13px;color:#bacac5;">' + lang.native + '</span>' +
        '<span style="font-size:11px;color:#3b4a46;">' + lang.label + '</span>';

      if (lang.code === 'en') {
        item.querySelector('span').style.color = '#49fde3';
      }

      item.addEventListener('mouseenter', function () {
        this.style.background = 'rgba(73,253,227,0.05)';
      });
      item.addEventListener('mouseleave', function () {
        this.style.background = 'none';
      });

      item.addEventListener('click', function () {
        var code = this.dataset.langCode;
        if (code === 'en') {
          selectedCode = 'en';
          updateBtnLabel('EN');
          /* Reset all item highlights */
          dropdown.querySelectorAll('button[data-lang-code]').forEach(function (b) {
            b.querySelector('span').style.color = '#bacac5';
          });
          item.querySelector('span').style.color = '#49fde3';
        } else {
          /* Show coming-soon toast for non-English */
          showToast(lang.native + ' (' + lang.label + ') — coming soon.');
        }
        closeDropdown();
      });

      dropdown.appendChild(item);
    });

    /* Attach to first nav (fixed, top of page) */
    var nav = document.querySelector('nav');
    nav.style.position = 'relative'; /* ensure stacking context */

    langBtns.forEach(function (btn) {
      /* Wrap in a relative container so dropdown positions correctly */
      var wrap = document.createElement('div');
      wrap.style.cssText = 'position:relative;display:inline-flex;';
      btn.parentNode.insertBefore(wrap, btn);
      wrap.appendChild(btn);
      wrap.appendChild(dropdown.cloneNode(true));

      /* Re-select the cloned dropdown in this wrap */
      var localDropdown = wrap.querySelector('#lang-dropdown');
      localDropdown.removeAttribute('id');

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = localDropdown.style.display === 'block';
        /* Close any other open dropdowns */
        document.querySelectorAll('[data-daps-lang-open]').forEach(function (d) {
          d.style.display = 'none';
          delete d.dataset.dapsLangOpen;
        });
        if (isOpen) {
          localDropdown.style.display = 'none';
        } else {
          localDropdown.style.display = 'block';
          localDropdown.dataset.dapsLangOpen = '1';
        }
      });

      /* Wire clone item clicks */
      localDropdown.querySelectorAll('button[data-lang-code]').forEach(function (item) {
        item.addEventListener('mouseenter', function () { this.style.background = 'rgba(73,253,227,0.05)'; });
        item.addEventListener('mouseleave', function () { this.style.background = 'none'; });
        item.addEventListener('click', function (e) {
          e.stopPropagation();
          var code = this.dataset.langCode;
          if (code !== 'en') {
            var label = this.querySelector('span:first-child').textContent;
            var eng   = this.querySelector('span:last-child').textContent;
            showToast(label + ' (' + eng + ') — coming soon.');
          } else {
            /* Mark active */
            localDropdown.querySelectorAll('button[data-lang-code]').forEach(function (b) {
              b.querySelector('span').style.color = '#bacac5';
            });
            this.querySelector('span').style.color = '#49fde3';
          }
          localDropdown.style.display = 'none';
          delete localDropdown.dataset.dapsLangOpen;
        });
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function () {
      document.querySelectorAll('[data-daps-lang-open]').forEach(function (d) {
        d.style.display = 'none';
        delete d.dataset.dapsLangOpen;
      });
    });

    function updateBtnLabel(text) {
      langBtns.forEach(function (b) {
        var spans = b.querySelectorAll('span');
        spans.forEach(function (s) {
          if (!s.classList.contains('material-symbols-outlined')) s.textContent = text;
        });
      });
    }

    function closeDropdown() {
      document.querySelectorAll('[data-daps-lang-open]').forEach(function (d) {
        d.style.display = 'none';
        delete d.dataset.dapsLangOpen;
      });
    }
  }

  /* ── Toast notification ──────────────────────────────────────── */
  function showToast(msg) {
    var existing = document.getElementById('daps-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.id = 'daps-toast';
    toast.textContent = msg;
    toast.style.cssText = [
      'position:fixed',
      'bottom:32px',
      'left:50%',
      'transform:translateX(-50%) translateY(12px)',
      'background:#171c24',
      'border:1px solid rgba(73,253,227,0.25)',
      'color:#49fde3',
      'font-size:12px',
      'font-weight:600',
      'letter-spacing:0.06em',
      'padding:12px 24px',
      'border-radius:6px',
      'z-index:9999',
      'box-shadow:0 8px 32px rgba(0,0,0,0.5),0 0 0 1px rgba(73,253,227,0.1)',
      'opacity:0',
      'transition:opacity 0.3s ease,transform 0.3s ease',
      'pointer-events:none',
      'white-space:nowrap',
    ].join(';');

    document.body.appendChild(toast);

    /* Animate in */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
      });
    });

    /* Animate out and remove */
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(8px)';
      setTimeout(function () { toast.remove(); }, 350);
    }, 3200);
  }

})();

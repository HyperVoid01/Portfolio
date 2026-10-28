/* Sierra Game Studio — interactive extras
   Boot screen · UI sound · Ctrl/⌘+K command menu · ` inspector · Konami code · portrait */
(function () {
  var D = window.SIERRA;
  var M = window.SierraMarkup;
  var ROOT = window.SIERRA_ROOT || '';
  var html = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  var onHome = !!document.getElementById('game-cards');

  function el(tag, cls, inner) { var e = document.createElement(tag); if (cls) e.className = cls; if (inner != null) e.innerHTML = inner; return e; }
  function typing(e) { var t = e.target; return t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)); }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ================= Boot screen ================= */
  (function boot() {
    if (!html.classList.contains('booting')) return;
    var t0 = performance.now();
    function done() {
      var wait = Math.max(0, 750 - (performance.now() - t0));
      setTimeout(function () {
        html.classList.add('boot-out');
        setTimeout(function () { html.classList.remove('booting', 'boot-out'); }, 420);
      }, wait);
    }
    if (document.readyState === 'complete') done(); else window.addEventListener('load', done);
    setTimeout(done, 1600); // never hold the page hostage to a slow image
  })();

  /* ================= Sound (synthesised, off by default) ================= */
  var Sound = (function () {
    var ctx = null, on = store('sierra-sound') === 'on', last = 0;
    function ensure() {
      if (!ctx) { var C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    }
    function tone(f, dur, type, vol, f2, delay) {
      var c = ensure(); if (!c) return;
      var t = c.currentTime + (delay || 0);
      var o = c.createOscillator(), g = c.createGain();
      o.type = type || 'square';
      o.frequency.setValueAtTime(f, t);
      if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol || 0.05, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + dur + 0.02);
    }
    var bank = {
      hover: function () { tone(1320, 0.035, 'square', 0.018); },
      click: function () { tone(520, 0.09, 'triangle', 0.07, 980); },
      open: function () { tone(300, 0.14, 'sine', 0.08, 720); },
      close: function () { tone(720, 0.12, 'sine', 0.06, 300); },
      tick: function () { tone(880, 0.03, 'square', 0.02); },
      toast: function () { tone(988, 0.08, 'triangle', 0.05); tone(1319, 0.12, 'triangle', 0.05, null, 0.08); },
      coin: function () { tone(988, 0.07, 'square', 0.04); tone(1319, 0.22, 'square', 0.04, null, 0.07); },
      zap: function () { tone(1600, 0.18, 'sawtooth', 0.035, 120); },
      fanfare: function () { [523, 659, 784, 1047, 784, 1047].forEach(function (f, i) { tone(f, i === 5 ? 0.4 : 0.11, 'square', 0.04, null, i * 0.1); }); }
    };
    return {
      get on() { return on; },
      set: function (v) { on = v; store('sierra-sound', v ? 'on' : 'off'); if (v) { ensure(); bank.coin(); } },
      play: function (name) {
        if (!on || !bank[name]) return;
        var now = performance.now();
        if (name === 'hover' || name === 'tick') { if (now - last < 50) return; last = now; }
        bank[name]();
      }
    };
  })();

  // UI sounds on interactive elements
  document.addEventListener('pointerover', function (e) {
    var t = e.target.closest && e.target.closest('a, button, .portrait-wrap');
    if (t && !t.contains(e.relatedTarget)) Sound.play('hover');
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a, button')) Sound.play('click');
  }, true);

  /* ================= Toast ================= */
  var toastBox = el('div', 'toasts'); toastBox.setAttribute('role', 'status'); toastBox.setAttribute('aria-live', 'polite');
  document.body.appendChild(toastBox);
  function toast(msg) {
    var t = el('div', 'toast'); t.textContent = msg; toastBox.appendChild(t);
    Sound.play('toast');
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { t.remove(); }, 300); }, 2600);
  }

  /* ================= Header controls ================= */
  var header = document.querySelector('.site-header');
  var hud = el('div', 'hud');
  var cmdBtn = el('button', 'hud-btn hud-search', '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span>Search</span><kbd>' + (isMac ? '⌘K' : 'Ctrl K') + '</kbd>');
  cmdBtn.type = 'button'; cmdBtn.setAttribute('aria-label', 'Open command menu');
  var sndBtn = el('button', 'hud-btn hud-sound');
  sndBtn.type = 'button';
  function paintSound() {
    sndBtn.setAttribute('aria-pressed', Sound.on ? 'true' : 'false');
    sndBtn.setAttribute('aria-label', Sound.on ? 'Turn sound off' : 'Turn sound on');
    sndBtn.title = Sound.on ? 'Sound on' : 'Sound off';
    sndBtn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/>' +
      (Sound.on ? '<path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
                : '<path d="M16.5 9.5l5 5M21.5 9.5l-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>') + '</svg>';
  }
  function toggleSound() { Sound.set(!Sound.on); paintSound(); toast(Sound.on ? 'Sound on' : 'Sound off'); }
  paintSound();
  sndBtn.addEventListener('click', toggleSound);
  hud.appendChild(cmdBtn); hud.appendChild(sndBtn);
  if (header) header.appendChild(hud);

  var foot = document.querySelector('.site-footer .wrap');
  if (foot) {
    var insp = el('button', 'foot-inspector', '<kbd>`</kbd> Inspector');
    insp.type = 'button';
    insp.addEventListener('click', function () { Inspector.toggle(); });
    foot.insertBefore(insp, foot.lastElementChild);
  }

  /* ================= Command menu ================= */
  var Cmd = (function () {
    var home = ROOT + 'index.html';
    function go(href) { return function () { location.href = href; }; }
    function section(id) { return onHome ? function () { var t = document.getElementById(id); if (t) { t.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); history.replaceState(null, '', '#' + id); } } : go(home + '#' + id); }
    function copyEmail() {
      var e = D.site.email;
      if (navigator.clipboard) navigator.clipboard.writeText(e).then(function () { toast('Copied ' + e); }, function () { location.href = 'mailto:' + e; });
      else location.href = 'mailto:' + e;
    }
    var items = D.games.map(function (g) {
      return { group: 'Games', label: g.title, hint: g.genre, keys: g.genre + ' ' + g.cardTags.join(' ') + ' ' + g.role, thumb: M.u(g.poster), run: go(M.gameUrl(g)) };
    }).concat([
      { group: 'Go to', label: 'Home', hint: 'Top of the page', run: onHome ? section('top') : go(home) },
      { group: 'Go to', label: 'All games', hint: 'Section 01', run: section('games') },
      { group: 'Go to', label: 'The studio', hint: 'Section 02', run: section('studio') },
      { group: 'Go to', label: 'Track record', hint: 'Jams and teaching', keys: 'jam awards', run: section('record') },
      { group: 'Go to', label: 'The founder', hint: 'About Sooriyan', keys: 'about me sooriyan', run: section('founder') },
      { group: 'Go to', label: 'Contact', hint: 'Get in touch', keys: 'hire email', run: section('contact') },
      { group: 'Actions', label: 'Download CV', hint: 'PDF', keys: 'resume', run: go(ROOT + D.site.cv) },
      { group: 'Actions', label: 'Copy email address', hint: D.site.email, keys: 'contact mail', run: copyEmail },
      { group: 'Actions', label: 'Play a random game', hint: 'Feeling lucky', keys: 'surprise', run: function () { var g = D.games[Math.floor(Math.random() * D.games.length)]; location.href = M.gameUrl(g); } },
      { group: 'Actions', label: 'Toggle sound', hint: 'UI sound effects', keys: 'audio mute', run: toggleSound },
      { group: 'Actions', label: 'Open the inspector', hint: 'Press `', keys: 'debug theme settings', run: function () { Inspector.open(); } },
      { group: 'Links', label: 'itch.io', hint: 'hypervoid01.itch.io', keys: 'download play', run: go(D.site.itch) },
      { group: 'Links', label: 'GitHub', hint: 'HyperVoid01', keys: 'code source', run: go(D.site.github) },
      { group: 'Links', label: 'LinkedIn', hint: 'Sooriyan Gramani', run: go(D.site.linkedin) }
    ]);

    var root = el('div', 'cmdk');
    root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true'); root.setAttribute('aria-label', 'Command menu');
    root.innerHTML = '<div class="cmdk-panel"><div class="cmdk-input"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
      '<input type="text" role="combobox" aria-expanded="true" aria-controls="cmdk-list" aria-autocomplete="list" placeholder="Search games, pages and actions" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>' +
      '<ul class="cmdk-list" id="cmdk-list" role="listbox" aria-label="Results"></ul>' +
      '<div class="cmdk-foot"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div></div>';
    document.body.appendChild(root);
    var input = root.querySelector('input'), list = root.querySelector('ul'), shown = [], active = 0, opener = null;

    // true when some word in str begins with t
    function starts(str, t) { return new RegExp('(^|[^a-z0-9])' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).test(str); }
    function score(it, q) {
      if (!q) return 1;
      var label = it.label.toLowerCase(), hay = (label + ' ' + (it.hint || '') + ' ' + (it.keys || '') + ' ' + it.group).toLowerCase();
      var terms = q.split(/\s+/), s = 0;
      for (var i = 0; i < terms.length; i++) {
        var t = terms[i];
        // forgiving match: "race" finds "racing", "jams" finds "jam"
        if (!starts(hay, t) && t.length > 3) t = t.replace(/(e|s|es|ing)$/, '');
        if (!starts(hay, t)) return 0;
        s += label.indexOf(t) === 0 ? 3 : starts(label, t) ? 2 : 1;
      }
      return s;
    }
    function render() {
      var q = input.value.trim().toLowerCase();
      shown = items.map(function (it, i) { return { it: it, s: score(it, q), i: i }; }).filter(function (r) { return r.s; });
      if (q) shown.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
      shown = shown.map(function (r) { return r.it; });
      active = Math.min(active, Math.max(0, shown.length - 1));
      var group = null, out = '';
      shown.forEach(function (it, i) {
        if (!q && it.group !== group) { group = it.group; out += '<li class="cmdk-group" role="presentation">' + M.esc(group) + '</li>'; }
        out += '<li role="option" id="cmdk-' + i + '" data-i="' + i + '" aria-selected="' + (i === active) + '" class="cmdk-item">' +
          (it.thumb ? '<img src="' + M.esc(it.thumb) + '" alt="">' : '<span class="cmdk-ico" aria-hidden="true"></span>') +
          '<span class="cmdk-label">' + M.esc(it.label) + '</span><span class="cmdk-hint">' + M.esc(it.hint || '') + '</span></li>';
      });
      list.innerHTML = out || '<li class="cmdk-empty" role="presentation">Nothing found. Try “racing” or “CV”.</li>';
      input.setAttribute('aria-activedescendant', shown.length ? 'cmdk-' + active : '');
    }
    function move(d) {
      if (!shown.length) return;
      active = (active + d + shown.length) % shown.length;
      list.querySelectorAll('[role=option]').forEach(function (o) { o.setAttribute('aria-selected', String(+o.dataset.i === active)); });
      input.setAttribute('aria-activedescendant', 'cmdk-' + active);
      var a = document.getElementById('cmdk-' + active); if (a) a.scrollIntoView({ block: 'nearest' });
      Sound.play('tick');
    }
    function run(i) { var it = shown[i]; if (!it) return; close(true); it.run(); }
    function open() {
      if (root.classList.contains('open')) return;
      opener = document.activeElement; input.value = ''; active = 0; render();
      root.classList.add('open'); document.body.style.overflow = 'hidden';
      input.focus();
      Sound.play('open');
    }
    function close(silent) {
      if (!root.classList.contains('open')) return;
      root.classList.remove('open'); document.body.style.overflow = '';
      if (!silent) Sound.play('close');
      if (opener && opener.focus) opener.focus();
    }
    input.addEventListener('input', function () { active = 0; render(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); run(active); }
      else if (e.key === 'Tab') { e.preventDefault(); move(e.shiftKey ? -1 : 1); }
    });
    list.addEventListener('mousemove', function (e) { var o = e.target.closest('[role=option]'); if (o && +o.dataset.i !== active) { active = +o.dataset.i; move(0); } });
    list.addEventListener('click', function (e) { var o = e.target.closest('[role=option]'); if (o) run(+o.dataset.i); });
    root.addEventListener('mousedown', function (e) { if (e.target === root) close(); });
    cmdBtn.addEventListener('click', open);
    return { open: open, close: close, get isOpen() { return root.classList.contains('open'); } };
  })();

  /* ================= Inspector (` key) ================= */
  var Inspector = (function () {
    var swatches = ['#5CB8FF', '#FFC94D', '#FF6B6B', '#7CFFB2', '#C792EA', '#FF9F43'];
    var defaults = { accent: '#5CB8FF', scale: 1, grid: false, bounds: false, fps: false };
    var state = JSON.parse(JSON.stringify(defaults));
    var panel = el('aside', 'inspector');
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'Inspector');
    panel.innerHTML =
      '<div class="insp-head"><span class="insp-title"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M2 3h12v2H2zm0 4h12v2H2zm0 4h8v2H2z" fill="currentColor"/></svg> Inspector</span><button type="button" class="insp-x" aria-label="Close inspector">✕</button></div>' +
      '<div class="insp-obj"><span class="insp-cube" aria-hidden="true"></span><b>Sierra</b><span class="insp-tag">Tag: Website</span></div>' +
      '<details open><summary>Theme</summary><div class="insp-body">' +
        '<div class="insp-field"><label>Accent</label><div class="insp-swatches">' +
          swatches.map(function (c) { return '<button type="button" data-c="' + c + '" style="--sw:' + c + '" aria-label="Accent ' + c + '"></button>'; }).join('') +
          '<input type="color" value="#5CB8FF" aria-label="Custom accent colour"></div></div>' +
      '</div></details>' +
      '<details open><summary>Time</summary><div class="insp-body">' +
        '<div class="insp-field"><label for="insp-scale">Time scale</label><input id="insp-scale" type="range" min="0.1" max="3" step="0.1" value="1"><output>1.0</output></div>' +
      '</div></details>' +
      '<details open><summary>Gizmos</summary><div class="insp-body">' +
        '<label class="insp-check"><input type="checkbox" data-k="grid"> Layout grid</label>' +
        '<label class="insp-check"><input type="checkbox" data-k="bounds"> Bounding boxes</label>' +
        '<label class="insp-check"><input type="checkbox" data-k="fps"> FPS counter</label>' +
      '</div></details>' +
      '<details><summary>Cheats</summary><div class="insp-body"><p class="insp-note">Some games keep secrets. So does this site.<br><kbd>↑</kbd><kbd>↑</kbd><kbd>↓</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd><kbd>←</kbd><kbd>→</kbd><kbd>B</kbd><kbd>A</kbd></p></div></details>' +
      '<div class="insp-actions"><button type="button" class="insp-reset">Reset</button><span class="insp-note">Changes reset when you reload.</span></div>';
    document.body.appendChild(panel);

    var grid = el('div', 'gizmo-grid', '<div class="wrap">' + new Array(13).join('<span></span>') + '</div>');
    grid.setAttribute('aria-hidden', 'true');
    var fpsEl = el('div', 'gizmo-fps'); fpsEl.setAttribute('aria-hidden', 'true');
    document.body.appendChild(grid); document.body.appendChild(fpsEl);

    function ink(hex) {
      var n = parseInt(hex.slice(1), 16), r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
      return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 > 0.5 ? '#06101E' : '#FFFFFF';
    }
    function apply() {
      html.style.setProperty('--accent', state.accent);
      html.style.setProperty('--ink', ink(state.accent));
      panel.querySelectorAll('.insp-swatches button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.c.toLowerCase() === state.accent.toLowerCase())); });
      panel.querySelector('input[type=color]').value = state.accent;
      panel.querySelector('#insp-scale').value = state.scale;
      panel.querySelector('output').textContent = Number(state.scale).toFixed(1);
      html.classList.toggle('gizmo-grid-on', state.grid);
      html.classList.toggle('gizmo-bounds-on', state.bounds);
      panel.querySelectorAll('[data-k]').forEach(function (c) { c.checked = state[c.dataset.k]; });
      setScale(); fps(state.fps);
    }
    // Time scale: retime every running CSS animation/transition, and new ones as they start
    function setScale() { if (document.getAnimations) document.getAnimations().forEach(function (a) { a.playbackRate = state.scale; }); }
    ['transitionrun', 'animationstart'].forEach(function (ev) { document.addEventListener(ev, function () { if (state.scale !== 1) setScale(); }, true); });

    var raf = 0;
    function fps(on) {
      fpsEl.style.display = on ? 'block' : 'none';
      cancelAnimationFrame(raf); if (!on) return;
      var frames = 0, t0 = performance.now();
      (function loop(t) {
        frames++;
        if (t - t0 >= 500) { fpsEl.textContent = Math.round(frames * 1000 / (t - t0)) + ' FPS'; frames = 0; t0 = t; }
        raf = requestAnimationFrame(loop);
      })(t0);
    }

    panel.querySelector('.insp-swatches').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { state.accent = b.dataset.c; apply(); } });
    panel.querySelector('input[type=color]').addEventListener('input', function (e) { state.accent = e.target.value; apply(); });
    panel.querySelector('#insp-scale').addEventListener('input', function (e) { state.scale = +e.target.value; apply(); });
    panel.querySelectorAll('[data-k]').forEach(function (c) { c.addEventListener('change', function () { state[c.dataset.k] = c.checked; apply(); }); });
    panel.querySelector('.insp-reset').addEventListener('click', function () { state = JSON.parse(JSON.stringify(defaults)); html.style.removeProperty('--accent'); html.style.removeProperty('--ink'); apply(); toast('Inspector reset'); });
    panel.querySelector('.insp-x').addEventListener('click', function () { close(); });

    var opener = null;
    function open() { if (panel.classList.contains('open')) return; opener = document.activeElement; panel.classList.add('open'); Sound.play('open'); setTimeout(function () { panel.querySelector('.insp-x').focus(); }, 0); }
    function close() { if (!panel.classList.contains('open')) return; panel.classList.remove('open'); Sound.play('close'); if (opener && opener.focus) opener.focus(); }
    return { open: open, close: close, toggle: function () { panel.classList.contains('open') ? close() : open(); }, get isOpen() { return panel.classList.contains('open'); } };
  })();

  /* ================= Keyboard ================= */
  var konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], kpos = 0;
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); Cmd.isOpen ? Cmd.close() : Cmd.open(); return; }
    if (e.key === 'Escape') { if (Cmd.isOpen) Cmd.close(); else if (Inspector.isOpen) Inspector.close(); return; }
    if (typing(e) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === '/' && !Cmd.isOpen) { e.preventDefault(); Cmd.open(); return; }
    if (e.key === '`' || e.code === 'Backquote') { e.preventDefault(); Inspector.toggle(); return; }
    var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kpos = k === konami[kpos] ? kpos + 1 : (k === konami[0] ? 1 : 0);
    if (kpos === konami.length) { kpos = 0; cheat(); }
  });

  /* ================= Konami: cheat mode ================= */
  function boltRain(n, from) {
    if (reduced) return;
    for (var i = 0; i < n; i++) {
      var b = el('span', from ? 'bolt-spark' : 'bolt-drop');
      b.setAttribute('aria-hidden', 'true');
      if (from) {
        var a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 110;
        b.style.left = from.x + 'px'; b.style.top = from.y + 'px';
        b.style.setProperty('--dx', Math.cos(a) * d + 'px'); b.style.setProperty('--dy', Math.sin(a) * d + 'px');
        b.style.setProperty('--r', (Math.random() * 360) + 'deg');
      } else {
        b.style.left = Math.random() * 100 + 'vw';
        b.style.animationDelay = Math.random() * 1.2 + 's';
        b.style.animationDuration = 1.4 + Math.random() * 1.2 + 's';
        b.style.setProperty('--s', 0.6 + Math.random() * 1.2);
      }
      document.body.appendChild(b);
      b.addEventListener('animationend', function () { this.remove(); });
    }
  }
  function cheat() {
    var on = !html.classList.contains('cheat');
    html.classList.toggle('cheat', on);
    if (on) { Sound.play('fanfare'); boltRain(48); toast('Cheat activated: infinite lightning'); }
    else { Sound.play('close'); toast('Cheat deactivated'); }
  }

  /* ================= Portrait ================= */
  (function portrait() {
    var wrap = document.getElementById('portrait');
    if (!wrap) return;
    var img = wrap.querySelector('img'), lines = D.site.portraitLines || ['Howzit!'], idx = 0, timer = 0;
    // RPG-style dialogue box: typed text is decorative, the live region gets the full line once
    var box = el('div', 'dialogue',
      '<span class="dialogue-name">Sooriyan</span>' +
      '<span class="dialogue-text" aria-hidden="true">Click to talk.</span>' +
      '<span class="dialogue-sr" aria-live="polite"></span>' +
      '<span class="dialogue-next" aria-hidden="true"></span>');
    wrap.appendChild(box);
    var typed = box.querySelector('.dialogue-text'), sr = box.querySelector('.dialogue-sr'), count = box.querySelector('.dialogue-next');
    wrap.setAttribute('role', 'button'); wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', 'Talk to Sooriyan');
    var original = img.getAttribute('src'), alt = D.site.portraitAlt ? M.u(D.site.portraitAlt) : '';
    if (alt) { new Image().src = alt; wrap.addEventListener('pointerenter', function () { img.src = alt; }); wrap.addEventListener('pointerleave', function () { img.src = original; }); }
    function type(text) {
      clearInterval(timer); sr.textContent = text;
      if (reduced) { typed.textContent = text; return; }
      var n = 0; typed.textContent = '';
      timer = setInterval(function () {
        typed.textContent = text.slice(0, ++n);
        if (n % 3 === 0) Sound.play('tick');
        if (n >= text.length) clearInterval(timer);
      }, 24);
    }
    function poke() {
      type(lines[idx % lines.length]);
      count.textContent = (idx % lines.length) + 1 + '/' + lines.length;
      idx++;
      wrap.classList.add('talking');
      wrap.classList.remove('glitch'); void wrap.offsetWidth; wrap.classList.add('glitch');
      var r = wrap.getBoundingClientRect();
      boltRain(10, { x: r.left + r.width / 2, y: r.top + r.height * 0.35 });
      Sound.play(idx % lines.length === 0 ? 'fanfare' : 'zap');
      if (idx === lines.length) toast('Achievement unlocked: Small talk');
    }
    wrap.addEventListener('click', poke);
    wrap.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); poke(); } });
  })();
})();

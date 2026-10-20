/* Sierra Game Studio — renders the pages from js/data.js */
(function () {
  var D = window.SIERRA;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function gameUrl(g) { return 'game.html?game=' + encodeURIComponent(g.slug); }
  function videoId(u) { var m = String(u).match(/(?:youtu\.be\/|v=)([\w-]{6,})/); return m ? m[1] : ''; }
  function eyebrow(t) { return '<div class="eyebrow">' + esc(t) + '</div>'; }

  /* ---------- Shared behaviour ---------- */
  function initReveal() {
    var sel = 'main section, .card, .pillar, .tile, .more-card, .proof-item, .shots a, .timeline-row, .credit, .row, .watch > div';
    var els = Array.prototype.slice.call(document.querySelectorAll(sel));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el, i) {
      // skip containers that wrap other revealed items, and anything already on screen at load for hero
      if (el.matches('main section') && el.querySelector('.card, .tile, .more-card, .shots, .pillar, .proof-item')) return;
      el.classList.add('reveal');
      var sib = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(sib, 5) * 70 + 'ms';
      io.observe(el);
    });
  }

  function initVideo() {
    document.querySelectorAll('.video-embed').forEach(function (b) {
      b.addEventListener('click', function () {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-video') + '?autoplay=1&rel=0';
        f.title = 'Demo video';
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        b.replaceWith(f);
        var wrap = f.parentNode; f.style.cssText = 'display:block;width:100%;aspect-ratio:16/9;border:0';
      });
    });
  }

  function initLightbox() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.shots a'));
    if (!links.length) return;
    var lb = document.createElement('div');
    lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Screenshot viewer');
    lb.innerHTML = '<button class="x" aria-label="Close">✕</button><button class="prev" aria-label="Previous screenshot">‹</button><button class="next" aria-label="Next screenshot">›</button><img alt=""><div class="cap"></div><div class="count"></div>';
    document.body.appendChild(lb);
    var img = lb.querySelector('img'), cap = lb.querySelector('.cap'), count = lb.querySelector('.count'), i = 0, opener = null;
    function show(n) {
      i = (n + links.length) % links.length;
      var im = links[i].querySelector('img');
      img.src = links[i].getAttribute('href'); img.alt = im.alt; cap.textContent = im.alt; count.textContent = (i + 1) + ' / ' + links.length;
    }
    function open(n, el) { opener = el; show(n); lb.classList.add('open'); document.body.style.overflow = 'hidden'; lb.querySelector('.x').focus(); }
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; if (opener) opener.focus(); }
    links.forEach(function (a, n) { a.addEventListener('click', function (e) { e.preventDefault(); open(n, a); }); });
    lb.querySelector('.x').onclick = close;
    lb.querySelector('.prev').onclick = function () { show(i - 1); };
    lb.querySelector('.next').onclick = function () { show(i + 1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(i - 1);
      else if (e.key === 'ArrowRight') show(i + 1);
    });
    var x0 = null;
    lb.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) { if (x0 === null) return; var d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) show(i + (d < 0 ? 1 : -1)); x0 = null; });
  }

  /* ---------- Home ---------- */
  window.renderHome = function () {
    document.getElementById('game-cards').innerHTML = D.games.map(function (g) {
      return '<article class="card">' +
        '<a class="cover" href="' + gameUrl(g) + '"><img src="' + esc(g.poster) + '" alt="' + esc(g.posterAlt) + '" loading="lazy"></a>' +
        '<div class="card-body">' +
        '<div class="genre">' + esc(g.genre) + '</div>' +
        '<h3>' + esc(g.title) + '</h3>' +
        '<p>' + esc(g.blurb) + '</p>' +
        '<div class="role"><span class="mono-label">My role&nbsp;&nbsp;</span>' + esc(g.role) + '</div>' +
        '<div class="tags">' + g.cardTags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<div class="card-actions">' +
        '<a class="btn primary sm" href="' + gameUrl(g) + '">View game</a>' +
        '<a class="btn alt sm" href="' + esc(g.itch) + '">Download</a>' +
        '</div></div></article>';
    }).join('');

    document.getElementById('pillars').innerHTML = D.home.pillars.map(function (p) {
      return '<div class="pillar"><div class="num">' + esc(p.num) + '</div><h3>' + esc(p.title) + '</h3><p>' + esc(p.text) + '</p></div>';
    }).join('');

    document.getElementById('timeline').innerHTML = D.home.timeline.map(function (e) {
      return '<div class="timeline-row"><div class="years">' + esc(e.years) + '</div><div><div style="font-weight:600">' + esc(e.title) + '</div><div class="place">' + esc(e.place) + '</div></div></div>';
    }).join('');

    document.getElementById('tools').innerHTML = D.home.tools.map(function (t) {
      return '<span class="tag tool">' + esc(t) + '</span>';
    }).join('');
    initReveal();
  };

  /* ---------- Game page ---------- */
  window.renderGame = function () {
    var slug = new URLSearchParams(location.search).get('game');
    var at = -1;
    D.games.forEach(function (g, i) { if (g.slug === slug) at = i; });
    if (at < 0) { location.replace('index.html#games'); return; }
    var g = D.games[at];

    document.title = g.title + ' — Sierra Game Studio';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', g.title + ': ' + g.blurb);

    var btn = function (cls, href, label) { return '<a class="btn lg ' + cls + '" href="' + esc(href) + '">' + esc(label) + '</a>'; };
    var html = '';

    // Title
    html += '<section class="wrap game-title">' + eyebrow(g.genre) +
      '<h1>' + esc(g.title) + '</h1><p class="tagline">' + esc(g.tagline) + '</p>' +
      '<div class="btn-row">' + btn('primary', g.itch, 'Download on itch.io') + btn('', '#demo', 'Watch the demo') +
      (g.repo ? btn('', g.repo, 'View code on GitHub') : '') + '</div></section>';

    // Poster + credits
    html += '<section class="wrap poster-credits"><figure class="poster"><img src="' + esc(g.poster) + '" alt="' + esc(g.posterAlt) + '">' +
      '<figcaption><span>' + esc(g.title) + '</span><span>A Sierra game</span></figcaption></figure>' +
      '<div class="credits">' + eyebrow('Made by') + '<h2>The team</h2><div class="credit-list">' +
      g.credits.map(function (c) { return '<div class="credit"><b>' + esc(c[0]) + '</b><span>' + esc(c[1]) + '</span></div>'; }).join('') +
      '</div></div></section>';

    // Specs
    html += '<section class="wrap specs"><div class="spec-grid">' +
      g.specs.map(function (s) { return '<div class="spec"><div class="mono-label" style="margin:0">' + esc(s[0]) + '</div><div>' + esc(s[1]) + '</div></div>'; }).join('') +
      '</div></section>';

    // Synopsis + brief
    html += '<section class="wrap two-col"><div>' + eyebrow('Synopsis') + '<h2 class="sub">What it\'s about</h2><p>' + esc(g.synopsis) + '</p></div>' +
      '<div>' + eyebrow('Project brief') + '<h2 class="sub">The challenge</h2><p>' + esc(g.brief) + '</p></div></section>';

    // Role + contribution
    html += '<section class="band"><div class="wrap"><div>' + eyebrow('My role and contribution') +
      '<h2>' + esc(g.role) + '</h2><p>' + esc(g.roleNote) + '</p></div>' +
      '<div class="rows">' + g.contribution.map(function (c) { return '<div class="row">' + esc(c) + '</div>'; }).join('') + '</div></div></section>';

    // Technologies
    html += '<section class="wrap block">' + eyebrow('Technologies') + '<h2 class="section">What I built it with</h2>' +
      '<div class="tile-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))">' +
      g.tech.map(function (grp) {
        return '<div class="tile"><div class="mono-label">' + esc(grp[0]) + '</div><div class="tags">' +
          grp[1].map(function (t) { return '<span class="tag plain">' + esc(t) + '</span>'; }).join('') + '</div></div>';
      }).join('') + '</div></section>';

    // Core gameplay
    html += '<section class="wrap block">' + eyebrow('Core gameplay') + '<h2 class="section" style="margin-bottom:16px">How it plays</h2><p class="lede">' + esc(g.core) + '</p>' +
      '<div class="tile-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))">' +
      g.loop.map(function (l, i) { return '<div class="tile loop"><div class="n">0' + (i + 1) + '</div><h3>' + esc(l[0]) + '</h3><p>' + esc(l[1]) + '</p></div>'; }).join('') +
      '</div></section>';

    // Features
    html += '<section class="wrap block features"><div>' + eyebrow('Features') + '<h2 class="section" style="margin:12px 0 0">What\'s in the game</h2></div>' +
      '<div class="rows" style="display:flex;flex-direction:column">' + g.features.map(function (f) { return '<div class="row">' + esc(f) + '</div>'; }).join('') + '</div></section>';

    // Systems
    html += '<section class="wrap block">' + eyebrow('Systems') + '<h2 class="section">Under the hood</h2>' +
      '<div class="tile-grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:24px">' +
      g.systems.map(function (s) { return '<div class="tile system"><h3>' + esc(s[0]) + '</h3><div class="mono-label">' + esc(s[1]) + '</div><p>' + esc(s[2]) + '</p></div>'; }).join('') +
      '</div></section>';

    // Screenshots
    if (g.shots.length) {
      html += '<section class="wrap block">' + eyebrow('Gameplay') + '<h2 class="section">In the game</h2><div class="shots">' +
        g.shots.map(function (s) { return '<a href="' + esc(s.src) + '" target="_blank" rel="noopener"><img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" loading="lazy"></a>'; }).join('') +
        '</div></section>';
    }

    // Demo + download
    html += '<section id="demo" class="wrap block">' + eyebrow('Watch and play') + '<h2 class="section">Demo video and download</h2><div class="watch">' +
      '<div><h3>Demo video</h3>' +
      '<button type="button" class="video-embed" data-video="' + esc(videoId(g.demo)) + '" aria-label="Play the ' + esc(g.title) + ' demo video"><img src="https://i.ytimg.com/vi/' + esc(videoId(g.demo)) + '/hqdefault.jpg" alt="" loading="lazy"><span class="play"><svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="#06101E"/></svg></span></button>' +
      '<p class="video-note">Plays here. <a href="' + esc(g.demo) + '">Open on YouTube</a></p>' +
      '<div class="qr-row top"><img src="' + esc(g.demoQr) + '" alt="QR code linking to the ' + esc(g.title) + ' demo video" width="140" height="140">' +
      '<div class="info"><div class="mono-label">Video link</div><a class="link accent" href="' + esc(g.demo) + '">' + esc(g.demo) + '</a></div></div></div>' +
      '<div><h3>Download ' + esc(g.title) + '</h3><p>Free to download on itch.io. Scan the code or use the link.</p>' +
      '<div class="qr-row"><img src="' + esc(g.itchQr) + '" alt="QR code linking to the ' + esc(g.title) + ' download page" width="160" height="160">' +
      '<div class="info"><div class="mono-label">Download link</div><div class="link">' + esc(g.itch) + '</div>' +
      '<div class="btn-row" style="gap:12px"><a class="btn primary sm" href="' + esc(g.itch) + '">Open on itch.io</a>' +
      (g.repo ? '<a class="btn sm" href="' + esc(g.repo) + '">View code on GitHub</a>' : '') + '</div></div></div></div></div></section>';

    // More games
    html += '<section class="wrap more">' + eyebrow('More from Sierra') + '<h2 class="section">Play something else</h2><div class="more-grid">' +
      [1, 2, 3].map(function (n) {
        var o = D.games[(at + n) % D.games.length];
        return '<a class="more-card" href="' + gameUrl(o) + '"><img src="' + esc(o.poster) + '" alt="' + esc(o.posterAlt) + '" loading="lazy">' +
          '<div class="info"><div class="mono-label">' + esc(o.genre) + '</div><div class="name">' + esc(o.title) + '</div></div></a>';
      }).join('') + '</div></section>';

    document.getElementById('game').innerHTML = html;
    initVideo(); initLightbox(); initReveal();
  };
})();

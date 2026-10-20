/* Sierra Game Studio — renders the pages from js/data.js */
(function () {
  var D = window.SIERRA;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function gameUrl(g) { return 'game.html?game=' + encodeURIComponent(g.slug); }
  function eyebrow(t) { return '<div class="eyebrow">' + esc(t) + '</div>'; }

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
      '<a class="video-link" href="' + esc(g.demo) + '" aria-label="Watch the ' + esc(g.title) + ' demo video on YouTube"><span class="play"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="#06101E"/></svg></span><span class="mono-label">Watch on YouTube</span></a>' +
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
  };
})();

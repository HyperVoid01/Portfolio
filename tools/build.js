#!/usr/bin/env node
/* Sierra Game Studio — static page builder.
   Run after editing js/data.js:   node tools/build.js
   Writes games/<slug>.html (prerendered, with link-preview tags) and sitemap.xml.
   Preview images come from assets/og/<slug>.jpg (make them with: python3 tools/og.py). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const V = '3'; // bump to bust browser caches after changing CSS/JS

const ctx = { window: { SIERRA_ROOT: '../' } };
ctx.window.window = ctx.window;
vm.createContext(ctx.window);
for (const f of ['js/data.js', 'js/site.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT_DIR, f), 'utf8'), ctx.window, { filename: f });
}
const W = ctx.window;
const D = W.SIERRA;
const M = W.SierraMarkup;
const esc = M.esc;
const SITE = D.site.url.replace(/\/?$/, '/');

const outDir = path.join(ROOT_DIR, 'games');
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (f.endsWith('.html')) fs.unlinkSync(path.join(outDir, f));

function previewImage(g) {
  const og = `assets/og/${g.slug}.jpg`;
  if (fs.existsSync(path.join(ROOT_DIR, og))) return { url: SITE + og, w: 1200, h: 630 };
  return { url: SITE + g.poster, w: null, h: null }; // fallback: the raw poster
}

function page(g) {
  const url = `${SITE}games/${g.slug}.html`;
  const title = `${g.title} — Sierra Game Studio`;
  const desc = `${g.blurb} ${g.role}. A Sierra game by Sooriyan Gramani.`;
  const img = previewImage(g);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Sierra Game Studio">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${esc(img.url)}">
${img.w ? `<meta property="og:image:width" content="${img.w}">\n<meta property="og:image:height" content="${img.h}">\n` : ''}<meta property="og:image:alt" content="${esc(g.posterAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(img.url)}">
<meta name="theme-color" content="#0A1220">
<link rel="icon" href="../assets/brand/icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<script>document.documentElement.classList.add("js");try{if(!sessionStorage.getItem("sierra-booted")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("booting");sessionStorage.setItem("sierra-booted","1")}}catch(e){}</script>
<link rel="stylesheet" href="../css/style.css?v=${V}">
</head>
<body>

<header class="wrap site-header">
  <a class="brand" href="../index.html"><img src="../assets/brand/icon.png" alt="" width="40" height="38"><span>SIERRA</span></a>
  <a class="crumb" href="../index.html#games">← All games</a>
</header>

<main id="game">
${M.game(g)}
</main>

<footer class="site-footer">
  <div class="wrap">
    <span>© 2026 Sierra Game Studio</span>
    <a href="../index.html">Back to home</a>
  </div>
</footer>

<script>window.SIERRA_ROOT = "../";</script>
<script src="../js/data.js?v=${V}"></script>
<script src="../js/site.js?v=${V}"></script>
<script src="../js/extras.js?v=${V}"></script>
<script>initGamePage();</script>
</body>
</html>
`;
}

for (const g of D.games) {
  fs.writeFileSync(path.join(outDir, `${g.slug}.html`), page(g));
  console.log(`games/${g.slug}.html`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = [SITE, ...D.games.map(g => `${SITE}games/${g.slug}.html`)];
fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(l => `  <url><loc>${l}</loc><lastmod>${today}</lastmod></url>`).join('\n') + `\n</urlset>\n`);
console.log('sitemap.xml');

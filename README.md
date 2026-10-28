# Sierra Game Studio — portfolio

Static site for GitHub Pages: https://hypervoid01.github.io/Portfolio/

## Publish
1. Copy everything in this folder into the root of the `HyperVoid01/Portfolio` repo and commit.
   Keep the `games/` folder: those are the game pages.
2. On GitHub: Settings > Pages > Build and deployment > Deploy from a branch > `main` / `(root)`.

## Edit content
- All text, links and image paths live in `js/data.js`.
- Home page copy (hero, studio, founder, contact) is in `index.html`.
- Colours and layout are in `css/style.css`.
- Keep `Sooriyan_Gramani_CV.pdf` in the root so the CV button works.

## After changing `js/data.js`, rebuild the game pages
Game pages are generated files, so link previews (LinkedIn, WhatsApp, Discord) show the right poster and text.

```
python3 tools/og.py      # preview images in assets/og/ (needs: pip install pillow)
node tools/build.js      # writes games/<slug>.html and sitemap.xml
```

Run `og.py` only when you add a game or change a title, tagline or poster. Run `build.js` after any change to `data.js`.
Old links like `game.html?game=redline` redirect to `games/redline.html`.

To test link previews after publishing, paste a game URL into https://www.linkedin.com/post-inspector/

## To add a game
1. Copy one object in `games` in `js/data.js` and change its fields.
2. Put its images in `assets/posters`, `assets/shots` and `assets/qr`.
3. Run the two commands above.

## Track record
`home.recognition` in `js/data.js` holds the jam and teaching cards. Fill in `"result"` with a placement
(for example `"2nd place"` or `"Judges' pick"`) and it shows as a badge. Leave it `""` to hide it.

`home.stats` shows a row of big numbers once you add entries, for example:

```
"stats": [
  { "value": "1,200+", "label": "downloads on itch.io" },
  { "value": "3", "label": "game jams finished" }
]
```

`home.strip` is the scrolling row of words under the hero.

## Extras
| What | How to open |
|---|---|
| Command menu | `Ctrl K` / `⌘K`, `/`, or the Search button |
| Inspector (accent colour, time scale, grid, bounding boxes, FPS) | `` ` `` or the footer link |
| Cheat mode | ↑ ↑ ↓ ↓ ← → ← → B A |
| Portrait dialogue | Click the founder photo |
| UI sound | Speaker button in the header (off by default, remembered) |
| Boot screen | Shows once per browser session |

- Portrait lines: `site.portraitLines` in `data.js`.
- Optional hover photo: put an image in `assets/brand/` and set `site.portraitAlt`, for example `"assets/brand/sooriyan-lowpoly.jpg"`.
- Poster morph between pages uses the browser's View Transitions; browsers without it just load the page normally.
- Everything animated is switched off for visitors who have reduced motion turned on.

Fonts in `tools/fonts/` are only used to draw the preview images (SIL Open Font License, see the licence files).

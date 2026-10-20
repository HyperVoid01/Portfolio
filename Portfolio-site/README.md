# Sierra Game Studio — portfolio

Static site for GitHub Pages. No build step.

## Publish
1. Copy everything in this folder into the root of the `HyperVoid01/Portfolio` repo and commit.
2. On GitHub: Settings > Pages > Build and deployment > Deploy from a branch > `main` / `(root)`.
3. The site appears at https://hypervoid01.github.io/Portfolio/

## Edit
- All text, links and image paths live in `js/data.js`.
- To add a game: copy one object in `games`, change its fields, and put its images in `assets/posters`, `assets/shots` and `assets/qr`.
- Home page copy (hero, studio, founder, contact) is in `index.html`.
- Colours and layout are in `css/style.css`.
- Keep `Sooriyan_Gramani_CV.pdf` in the root so the CV button works.

Game pages are `game.html?game=<slug>`, for example `game.html?game=redline`.

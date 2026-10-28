#!/usr/bin/env python3
"""Sierra Game Studio — link-preview images (1200x630) for social sharing.

Run after adding a game:   python3 tools/og.py      (needs Pillow: pip install pillow)
Then run:                  node tools/build.js
Writes assets/og/home.jpg and assets/og/<slug>.jpg.
"""
import json, subprocess, textwrap
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = Path(__file__).resolve().parent / "fonts"
OUT = ROOT / "assets" / "og"
W, H = 1200, 630
BG, ACCENT, TEXT, MUTED = (10, 18, 32), (92, 184, 255), (234, 243, 255), (157, 178, 204)

DISPLAY = str(FONTS / "unbounded-latin-700-normal.woff")
BODY = str(FONTS / "instrument-sans-latin-500-normal.woff")


def load_data():
    js = "global.window={};require(%r);process.stdout.write(JSON.stringify(window.SIERRA))" % str(ROOT / "js" / "data.js")
    return json.loads(subprocess.check_output(["node", "-e", js]))


def font(path, size):
    return ImageFont.truetype(path, size)


def base():
    im = Image.new("RGB", (W, H), BG)
    glow = Image.new("L", (W, H), 0)
    ImageDraw.Draw(glow).ellipse((W - 520, -380, W + 420, 360), fill=70)
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    im.paste(Image.new("RGB", (W, H), ACCENT), (0, 0), glow)
    return im


def cut_corner(img, c):
    """Sierra's clipped bottom-right corner."""
    m = Image.new("L", img.size, 255)
    w, h = img.size
    ImageDraw.Draw(m).polygon([(w - c, h), (w, h - c), (w, h)], fill=0)
    out = Image.new("RGBA", img.size)
    out.paste(img.convert("RGBA"), (0, 0), m)
    return out


def fit_cover(img, w, h):
    s = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * s), round(img.height * s)), Image.LANCZOS)
    l, t = (img.width - w) // 2, (img.height - h) // 3
    return img.crop((l, t, l + w, t + h))


def brand_row(im, d):
    icon = Image.open(ROOT / "assets/brand/icon.png").convert("RGBA")
    icon.thumbnail((44, 44))
    im.paste(icon, (64, 56), icon)
    d.text((120, 64), "SIERRA GAME STUDIO", font=font(DISPLAY, 22), fill=TEXT)


def wrap_text(d, text, fnt, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if d.textlength(t, font=fnt) <= max_w:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines


def text_block(d, x, y, max_w, title, sub, eyebrow):
    d.text((x, y), eyebrow.upper(), font=font(BODY, 22), fill=ACCENT)
    y += 44
    size = 64
    while size > 34:
        tf = font(DISPLAY, size)
        lines = wrap_text(d, title, tf, max_w)
        if len(lines) <= 2: break
        size -= 4
    for ln in lines:
        d.text((x, y), ln, font=tf, fill=TEXT); y += int(size * 1.15)
    y += 18
    sf = font(BODY, 28)
    for ln in wrap_text(d, sub, sf, max_w)[:3]:
        d.text((x, y), ln, font=sf, fill=MUTED); y += 38


def footer(d, url):
    d.rectangle((64, H - 70, 64 + 28, H - 67), fill=ACCENT)
    d.text((104, H - 82), url.replace("https://", "").rstrip("/"), font=font(BODY, 22), fill=MUTED)


def game_card(D, g):
    im = base(); d = ImageDraw.Draw(im)
    brand_row(im, d)
    poster = Image.open(ROOT / g["poster"]).convert("RGB")
    pw, ph = 560, 470
    # small posters look soft when scaled; sit them on a blurred copy instead of cropping hard
    if poster.width < pw * 0.8:
        bg = fit_cover(poster, pw, ph).filter(ImageFilter.GaussianBlur(18))
        p = poster.copy(); p.thumbnail((pw - 40, ph - 40))
        bg.paste(p, ((pw - p.width) // 2, (ph - p.height) // 2))
        poster = bg
    else:
        poster = fit_cover(poster, pw, ph)
    poster = cut_corner(poster, 40)
    im.paste(poster, (W - pw - 64, 80), poster)
    text_block(d, 64, 170, W - pw - 64 * 3, g["title"], g["tagline"], g["genre"].split("·")[0].strip())
    footer(d, D["site"]["url"])
    return im


def home_card(D):
    im = base(); d = ImageDraw.Draw(im)
    brand_row(im, d)
    games = D["games"][:4]
    cw, ch, gap, x0, y0 = 250, 200, 16, W - 64 - 250 * 2 - 16, 96
    for i, g in enumerate(games):
        p = cut_corner(fit_cover(Image.open(ROOT / g["poster"]).convert("RGB"), cw, ch), 20)
        im.paste(p, (x0 + (i % 2) * (cw + gap), y0 + (i // 2) * (ch + gap)), p)
    text_block(d, 64, 170, x0 - 64 * 2, "Creative, playful, unconventional.",
               "Games by Sooriyan Gramani. Play them, read the briefs, see the code.", "Game studio")
    footer(d, D["site"]["url"])
    return im


def main():
    D = load_data()
    OUT.mkdir(parents=True, exist_ok=True)
    home_card(D).save(OUT / "home.jpg", quality=88)
    print("assets/og/home.jpg")
    for g in D["games"]:
        game_card(D, g).save(OUT / f'{g["slug"]}.jpg', quality=88)
        print(f'assets/og/{g["slug"]}.jpg')


if __name__ == "__main__":
    main()

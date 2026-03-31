# HANDOVER — Photoless Website v1.0

**Live URL:** https://belosigor-code.github.io/photoless-website/
**Repo:** https://github.com/belosigor-code/photoless-website
**Version:** v1.0 · Built 2025-03-31
**Stack:** HTML5 / CSS3 / Vanilla JS — no frameworks, no CMS

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero, services, portfolio teaser, CTA |
| `hochzeit.html` | Wedding photography — gallery + 3-step process |
| `fotoshooting.html` | All shooting types with photo galleries per category |
| `firmen.html` | Business photography — trust stats + service cards |
| `schulen.html` | School photography — process + offer cards |
| `kontakt.html` | Contact form + studio address |

---

## How to update text

Open any `.html` file in a text editor. Find the section by its heading.
Edit the text between the HTML tags. Save, then publish (see below).

**Homepage headline** — in `index.html`, search for `hero__heading`:
```html
<h1 class="hero__heading fade-in">
  Momente,<br>die <em>bleiben.</em>
</h1>
```

**Studio address** — search `Watterstrasse 101` across all files to find every instance.

---

## How to swap images

All images live in `assets/images/`:
```
assets/images/
├── logo.png          ← Transparent logo
├── hochzeit/         ← 02.jpg, 03.jpg, 04.jpg used on hochzeit.html + homepage
├── einzeln/          ← 02.jpg, 03.jpg, 04.jpg used on fotoshooting.html
├── paar/             ← 02.jpg, 03.jpg, 04.jpg used on fotoshooting.html
├── familie/          ← 02.jpg, 03.jpg, 04.jpg used on fotoshooting.html
└── tiere/            ← 02.jpg used on fotoshooting.html
```

Replace a photo by dropping a same-named file into the correct folder, then publish.

**To add a real hero photo** (currently shows a gradient placeholder):
1. Save your photo as `assets/images/hero.jpg`
2. In `index.html` find the `.hero__image` div and add inside it:
```html
<img src="assets/images/hero.jpg" alt="Photoless Fotostudio Regensdorf">
```

---

## How to change colours and fonts

All design tokens are in `css/variables.css`:
```css
--color-bg:      #FAFAF8;   /* Page background */
--color-surface: #F0EDE8;   /* Card/section backgrounds */
--color-primary: #1A1A1A;   /* Headings, buttons */
--color-accent:  #1ABFCF;   /* Cyan — nav hover, accent bars */
--color-text:    #2C2C2C;   /* Body text */
--color-muted:   #555555;   /* Secondary text */
--font-heading:  'Cormorant Garamond', Georgia, serif;
--font-body:     'Lato', system-ui, sans-serif;
```
Change any value here — it applies site-wide instantly.

---

## How to update page titles and meta descriptions

Each page `<head>` has `<title>` and `<meta name="description">` on lines 5–6.

---

## How to publish changes

```bash
cd ~/Desktop/Antigravity/photoless-website
git add .
git commit -m "content: describe what you changed"
git push
```
Site goes live at https://belosigor-code.github.io/photoless-website/ within ~1 minute.

---

## Known limitations (v1.0)

| Item | Notes |
|---|---|
| Contact form | HTML only — does not send email. Add Formspree or similar to activate. |
| Hero image | Gradient placeholder. Add `assets/images/hero.jpg` to replace (see above). |
| Tiere gallery | Only 2 unique photos from original site. Third slot shows placeholder text. |
| Firmen/Schulen images | Downloaded to `assets/images/firmen/` and `assets/images/schulen/` but not yet shown on those pages. |

---

## Tech notes

- No build step — edit, push, done
- Vanilla JS only (`js/main.js`): mobile nav, scroll shadow, fade-in animations
- CSS: `reset.css` → `variables.css` → `style.css`
- Images sourced from original photoless.ch Wix CDN and stored locally in this repo

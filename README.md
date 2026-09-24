# For Prissy 💛

A small, responsive tribute site — built to say thank you for finding your way back to each other.

## Add her photo

Drop a photo into an `images` folder next to `index.html`, named `prissy.jpg`:

```
images/prissy.jpg
```

Until you do, a soft placeholder shows instead — the site works fine either way, so you can deploy now and add the photo later. A square-ish photo (at least 400×400px) works best since it's cropped into a circle.

## Make it yours

Everything is plain text inside `index.html` — no build step, no framework. Things you'll probably want to change:

- **The headline and subline** — near the top, inside `<section class="hero">`
- **The timeline** — `<ol class="timeline">`, one `<li>` per moment in your story
- **The six reason cards** — each is a `<button class="flip-card">`. Edit both the front (`card-front`) and back (`card-back`) text, and update the matching `aria-label` on the button so screen readers hear the same thing
- **The rotating messages** — the `messages` array near the top of `script.js`
- **Your signature** — replace `[Your Name]` in the closing section

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in.
2. Either push this folder to a GitHub repo and import it, or install the Vercel CLI and run `vercel` from inside this folder.
3. No build settings needed — it's a static site, Vercel detects that automatically.
4. You'll get a live `.vercel.app` link in under a minute.

## Deploy to Render

1. Go to [render.com](https://render.com) and sign in.
2. Click **New > Static Site** and connect the repo with this folder (or use manual deploy).
3. Leave the build command blank and set the publish directory to the root (`.`).
4. Deploy — Render gives you a live `.onrender.com` link.

## What's already handled

- Fully responsive, from small phones up to large desktops
- Respects `prefers-reduced-motion` for anyone sensitive to animation
- Keyboard-navigable interactive elements with visible focus states
- Semantic HTML with a skip-to-content link and screen-reader-friendly labels

# Hiten Vaishnav — Portfolio (Next.js)

A cinematography portfolio built with Next.js (App Router). Same visual
language as the original static version — dark background, orange accent,
JetBrains Mono + Archivo Black — now split into components so it's easy
to keep extending.

## Project structure

```
app/
  layout.js       -> fonts + global <html>/<body>
  page.js          -> home page, holds modal state
  globals.css       -> all styling
components/
  Nav.js
  Hero.js
  ProjectCard.js
  ProjectModal.js
  AboutModal.js
  Footer.js
data/
  projects.js       -> edit this to add/change your work
```

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) (18+) installed. Then, from
this folder in your terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it hot-reloads as you edit files in VS Code.

## 2. Edit your content

- **Projects**: edit `data/projects.js` — title, tag, quote, credits.
  Order in the array = order on the page.
- **Thumbnails/video**: each project currently uses a placeholder
  gradient class (`ph-0` ... `ph-7`, defined in `globals.css`). Replace
  those with real images/video — e.g. put files in a `public/` folder
  and swap the placeholder `<div>` in `components/ProjectCard.js` and
  `components/ProjectModal.js` for an `<img>` or `<video>` tag.
- **Bio/contacts**: edit `components/AboutModal.js`.
- **Name/wordmark**: edit `components/Hero.js` and `components/Nav.js`.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to https://vercel.com, sign in (GitHub login is easiest).
2. Click **Add New → Project**, then import the GitHub repo you just pushed.
3. Vercel auto-detects Next.js — leave settings as default and click **Deploy**.
4. You'll get a live URL (e.g. `hiten-vaishnav-portfolio.vercel.app`) in
   about a minute.

## 5. Keep editing

From here on, your workflow is:

```bash
# edit files in VS Code
git add .
git commit -m "describe what changed"
git push
```

Every push to `main` triggers a new Vercel deployment automatically —
no need to touch the Vercel dashboard again after the first setup.

# Hiten Vaishnav — Portfolio (Next.js)

A cinematography portfolio built with Next.js (App Router). Same visual
language as the original static version — dark background, orange accent,
JetBrains Mono + Archivo Black — now split into components so it's easy
to keep extending.

## Project structure

```
app/
  layout.js               -> fonts + global <html>/<body>, viewport meta
  page.js                 -> home page ("Films"), holds modal state
  photography/page.js     -> Photography page, separate section
  globals.css             -> all styling, incl. responsive breakpoints
components/
  Nav.js                  -> shared nav, links between Films/Photography, opens About
  Hero.js
  ProjectCard.js
  ProjectModal.js         -> film detail view (credits, stills, other projects)
  PhotoCard.js
  PhotoLightbox.js        -> full-size photo viewer with prev/next
  AboutModal.js
  Footer.js
data/
  projects.js             -> your films/video work
  photos.js                -> your stills/photography
```

The site now has two real sections, reachable from the nav on every
page: **Films** (`/`) for video work, and **Photography**
(`/photography`) for stills — matching the structure of the reference
site you started from.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) (18+) installed. Then, from
this folder in your terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it hot-reloads as you edit files in VS Code.

## 2. Edit your content

- **Films/video work**: edit `data/projects.js` — title, tag, quote,
  credits. Order in the array = order on the page.
- **Photography/stills**: edit `data/photos.js` — caption, category,
  image path. Order in the array = order in the grid.
- **Bio/contacts**: edit `components/AboutModal.js`.
- **Name/wordmark**: edit `components/Hero.js` and `components/Nav.js`.

## 3. Add your real photography

The Photography page works the same way as the film thumbnails: put
compressed JPG/WebP files in `public/photography/`, then set the
matching `src` in `data/photos.js`:
```js
{ caption: "PORTRAIT STUDY I", category: "Portrait", ph: "ph-1", src: "/photography/portrait-1.jpg" }
```
Leave `src: ""` for anything you haven't shot/exported yet — it falls
back to the placeholder color automatically. Since this page can hold
many images, keep each file to a few hundred KB (export at web
resolution, not the original camera file) so the grid loads fast.

## 4. Add your real video work

Media support is already wired up — you just need to drop files in and
point to them. No component code needs to change.

1. Put your files in `public/work/`. Anything in `public/` is served
   from the site root, so `public/work/monsoon-thumb.jpg` becomes the
   URL `/work/monsoon-thumb.jpg`.

   Suggested naming, per project:
   ```
   public/work/monsoon-thumb.jpg     (a still image for the grid thumbnail)
   public/work/monsoon.mp4           (the actual clip, plays in the modal)
   public/work/monsoon-still-1.jpg   (optional — behind-the-scenes stills)
   public/work/monsoon-still-2.jpg
   ```

2. Open `data/projects.js` and fill in the matching fields for that
   project:
   ```js
   {
     title: "MONSOON",
     tag: "'SHORT FILM'",
     ph: "ph-0",              // fallback color, keep as-is
     thumbnail: "/work/monsoon-thumb.jpg",
     video: "/work/monsoon.mp4",
     stills: ["/work/monsoon-still-1.jpg", "/work/monsoon-still-2.jpg"],
     ...
   }
   ```

3. Save — that's it. The grid card will show your thumbnail image, and
   clicking it opens the modal with a real, playable `<video>` element
   (with your thumbnail as the poster frame while it loads).

**Leave a field empty (`""` or `[]`)** for any project you haven't
exported footage for yet — it automatically falls back to the colored
placeholder, so you can fill projects in one at a time without
anything breaking.

**Video file size note — read this before adding real footage.**
GitHub rejects any file over 100MB outright, and even under that,
serving large video files directly from Vercel is slow and wasteful
for visitors. So for real clips (which are very often 500MB–a few GB),
don't use the `video` field — use `embedUrl` instead:

1. Upload the clip to Vimeo and set its privacy to **Unlisted** (still
   playable via direct link/embed, just not searchable or on your
   public profile).
2. Grab the video's numeric ID from its Vimeo URL, e.g.
   `vimeo.com/123456789` → the ID is `123456789`.
3. In `data/projects.js`, set:
   ```js
   embedUrl: "https://player.vimeo.com/video/123456789",
   ```
   and leave `video: ""` empty for that project.

YouTube (set to **Unlisted**) works the same way — use
`embedUrl: "https://www.youtube.com/embed/VIDEO_ID"`.

Reserve the local `video` field for short clips only — a few MB, well
under 50MB. `thumbnail` and `stills` should always stay as local image
files (those are small enough to live in the repo without issue).

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

# jineshsoni.com

Personal site of **Jinesh Soni** — AI & mobile architect.

Built with [Astro](https://astro.build) + Tailwind CSS v4, deployed on Netlify.

## Develop

```sh
nvm use          # Node 22.12+
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + static build into dist/
npm run preview  # serve dist/
```

## Where things live

| What                                | Where                                |
| ----------------------------------- | ------------------------------------ |
| Name, email, socials, nav           | `src/consts.ts`                      |
| Case studies (one file per project) | `src/content/work/*.md`              |
| Work history                        | `src/content/jobs.json`              |
| Archive of smaller projects         | `src/content/projects.json`          |
| Blog posts (`draft: true` to hide)  | `src/content/blog/*.md`              |
| Screenshots & photos                | `src/assets/`                        |
| Résumé PDF, favicons, CNAME         | `public/`                            |
| Colours, fonts, shared styles       | `src/styles/global.css`              |
| Social share images                 | generated at build — `src/pages/og/` |

### Update the résumé PDF

The downloadable `public/Jinesh-Soni-Resume.pdf` is generated from the `/resume/` page, so it always matches the site.
After changing jobs, skills or projects, regenerate it with local Chrome and commit the PDF:

```sh
npm run resume:pdf
```

The phone number (`SITE.phone` in `src/consts.ts`) only appears in the printed/PDF version, not on screen.

### Add a blog post

Create `src/content/blog/my-post.md`:

```md
---
title: 'My post'
description: 'One-sentence summary under ~160 characters (used for SEO).'
pubDate: 2026-10-07
tags: [Flutter]
---

Content…
```

It gets its own page, share image, RSS entry and sitemap entry automatically.

## SEO

- Per-page `<title>`, description, canonical URL, Open Graph & Twitter cards (`src/components/Seo.astro`)
- JSON-LD: `Person`, `WebSite`, `ProfilePage`, `MobileApplication`, `Article`, `BlogPosting`, `BreadcrumbList`
- `sitemap-index.xml`, `robots.txt`, `rss.xml`
- Build-time OG images (satori) for every page
- Old Gatsby URLs (`/pensieve`, `/archive`) redirect; `public/sw.js` removes the old offline service worker

## Deploy

Netlify builds every push to the production branch using `netlify.toml`
(`npm run build` → `dist/`, Node 22) and creates a preview URL for every pull request.
Redirects for old URLs and cache/security headers are also defined there.

## Analytics

Cloudflare Web Analytics — either enable automatic setup in the Cloudflare dashboard, or paste the beacon
token into `SITE.cfAnalyticsToken` in `src/consts.ts`.

# Tanay Jain — Portfolio

Static personal portfolio for **Tanay Jain**, game audio designer. Built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. Deploys to **GitHub Pages** with optional custom domain support.

**Source of truth:** [github.com/tanay216/tanay-portfolio](https://github.com/tanay216/tanay-portfolio). This repository replaces the earlier Cursor Project bundle / tmp migration path; clone from GitHub for local work and Cloud Agents.

## GitHub repository

Remote: `https://github.com/tanay216/tanay-portfolio.git`

```bash
git clone https://github.com/tanay216/tanay-portfolio.git
cd tanay-portfolio
npm install
```

## Local development

```bash
npm install
npm run dev
```

The dev server runs at [http://127.0.0.1:4317](http://127.0.0.1:4317) by default (see `vite.config.ts`).

```bash
npm run build   # production build to dist/
npm run preview # serve the production build locally
```

## Enable GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. Merge to `main` (or push to `main`) so the workflow in `.github/workflows/deploy-pages.yml` runs.
5. After the workflow succeeds, your site is published at `https://<username>.github.io/<repo>/` for project sites, or `https://<username>.github.io/` for a user/org site named `<username>.github.io`.

### Project site base path

If your URL includes the repository name (for example `https://you.github.io/my-portfolio/`), set the Vite `base` path:

- **Option A:** In the repo, add a variable **Settings → Secrets and variables → Actions → Variables** named `VITE_BASE_PATH` with value `/my-portfolio/` (leading and trailing slashes).
- **Option B:** Edit `base` in `vite.config.ts`.

For a **custom domain** or **user/org** Pages at the domain root, keep `base` as `'/'`.

## Custom domain (CNAME)

1. Copy `public/CNAME.example` to `public/CNAME`.
2. Replace the placeholder with your real domain only (one line, no `https://`), for example:
   ```
   tanayjain.com
   ```
3. In GitHub **Settings → Pages → Custom domain**, enter the same hostname.
4. At your DNS provider, add the records GitHub shows (typically an `A` record to GitHub Pages IPs or a `CNAME` to `<username>.github.io`).
5. Rebuild and deploy (push to `main`).

Do not commit a `CNAME` file until you own the domain and DNS is ready.

## Content

Portfolio copy and structure live in `src/data/content.ts`. Resume PDF is in `public/resume.pdf`. Replace the profile image at `public/images/profile.jpg` if you update your photo.

## License

Personal portfolio — all rights reserved by Tanay Jain unless otherwise noted.

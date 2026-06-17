# Baaarry website

Marketing site for [Baaarry](https://baaarry.com), a desktop mix/master A/B comparison tool.

Built with [Astro](https://astro.build) + Tailwind CSS. Static, zero client JS.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Content

All copy lives in typed data files under `src/data/` (`site.ts`, `features.ts`,
`featureList.ts`, `faq.ts`). Edit those rather than the components.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys
to GitHub Pages.

**One-time setup:**
1. Repo Settings -> Pages -> Source = "GitHub Actions".
2. Point Cloudflare DNS for `baaarry.com` at GitHub Pages (the `public/CNAME` file sets
   the custom domain on the Pages side).

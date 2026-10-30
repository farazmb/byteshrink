# ByteShrink

ByteShrink is a small collection of browser-based image utilities built with Astro.

## Live routes

- `/` — image compressor for JPG, PNG, and WebP. Supports batches of up to 50 images, target-size presets, quality settings, optional resizing, individual downloads, and ZIP downloads.
- `/bulk-image-converter/` — batch conversion to JPG, PNG, or WebP, with quality controls, optional resizing, individual downloads, and ZIP downloads.
- `/about/` — what ByteShrink does and how the tools work.
- `/privacy/` — file-processing and website privacy information.

The compressor and converter process selected image files in the browser; they do not send those image files to a ByteShrink image-processing server. ZIP downloads load JSZip from a public CDN when requested.

## Local development

Requirements: use the Node.js version specified by the `engines` field in `package.json`.

```sh
npm install
npm run dev
```

The local development server is normally available at `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

Astro writes the production site to `dist/`.

## Canonical site URL

The Astro `site` value is configured in `astro.config.mjs`. It currently defaults to `https://byteshrink.pages.dev` and can be overridden with the `SITE_URL` environment variable. If the Cloudflare Pages project uses a different hostname, or when a custom domain is connected, update `SITE_URL`, `public/robots.txt`, and `public/sitemap.xml` to the actual canonical hostname before launch.

## SEO launch checks

1. Confirm the production hostname and verify canonical URLs on all four routes.
2. Check that `/robots.txt` and `/sitemap.xml` return successfully and list the canonical URLs.
3. Run the production build and test the compressor, converter, mobile layout, and ZIP downloads.
4. Add the production property to Google Search Console and Bing Webmaster Tools, then submit the sitemap.
5. Update the privacy policy before enabling analytics, advertising, or additional third-party services.

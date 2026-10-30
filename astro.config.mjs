// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages project URL is the temporary production origin.
// Set SITE_URL in the deployment environment when you add a custom domain.
const site = process.env.SITE_URL || 'https://byteshrink.pages.dev';

export default defineConfig({
  site,
});

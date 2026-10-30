// @ts-check
import { defineConfig } from 'astro/config';

// Current production origin. Update SITE_URL when a custom domain is connected.
const site = process.env.SITE_URL || 'https://byteshrink.farazbutt6026.workers.dev';

export default defineConfig({
  site,
});

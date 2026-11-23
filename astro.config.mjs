import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scamproofmoney.com',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});

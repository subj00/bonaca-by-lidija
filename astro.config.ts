import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales } from './src/i18n/config';
import { getAlternateLinks, getRouteKeyByPath } from './src/i18n/routes';

// TODO: Replace with the production domain before deployment.
const SITE_URL = 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Localized slugs differ per language, so alternates come from the route map.
      serialize(item) {
        const routeKey = getRouteKeyByPath(new URL(item.url).pathname);

        if (routeKey) {
          item.links = getAlternateLinks(routeKey, SITE_URL).map(
            ({ hreflang, href }) => ({ lang: hreflang, url: href }),
          );
        }

        return item;
      },
    }),
  ],
});

import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales } from './src/i18n/config';
import { getAlternateLinks, getRouteKeyByPath } from './src/i18n/routes';

// TODO: Replace with the production domain before deployment.
const SITE_URL = 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  /*
   * Every page is built as `<path>/index.html` (e.g. `dist/en/index.html`), which
   * any static host — including Vercel — serves at `/en/` without extra rewrite
   * rules. URLs therefore always end with a slash.
   */
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      // 600 (SemiBold) is used for navigation; 400 for body text.
      weights: ['400', '600'],
      styles: ['normal'],
      // latin-ext is required for Serbian Latin characters (č, ć, š, ž, đ).
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
    {
      /*
       * Modern, elegant display face for page headings.
       * Loaded from Google Fonts, not Fontsource: the Fontsource files carry
       * TrueType hinting (VDMX/hdmx tables) that makes Windows clip the accents
       * of capital Š, Ž, Ć, Č below about 40px. Google's build is the same
       * typeface without that hinting, so every Serbian letter renders fully.
       */
      provider: fontProviders.google(),
      name: 'Tenor Sans',
      cssVariable: '--font-tenor',
      weights: ['400'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
      /*
       * The metrics Google reports for Tenor Sans make the generated fallback
       * render at about a third of the real width, so headings flashed tiny and
       * then jumped (layout shift) while the font loaded. Plain sans-serif is
       * within ~8% of Tenor Sans, so it is used as is.
       */
      optimizedFallbacks: false,
    },
    {
      // Clean, modern sans-serif for the review text; italic for the services' highlight lines.
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      weights: ['400'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['sans-serif'],
    },
  ],
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

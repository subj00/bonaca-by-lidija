import { defaultLocale, languageTags, locales, type Locale } from './config';

/**
 * Localized paths for every page.
 * Serbian uses unprefixed routes; English lives under `/en` with English slugs.
 * Every page file in `src/pages` must have a matching entry here.
 */
export const routes = {
  home: { sr: '/', en: '/en' },
  about: { sr: '/o-nama', en: '/en/about' },
  services: { sr: '/usluge', en: '/en/services' },
  education: { sr: '/edukacije', en: '/en/education' },
  reviews: { sr: '/recenzije', en: '/en/reviews' },
  contact: { sr: '/kontakt', en: '/en/contact' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Pages shown in the main navigation, in display order. */
export const navigationItems = [
  'home',
  'about',
  'services',
  'education',
  'reviews',
  'contact',
] as const satisfies readonly RouteKey[];

export function getPath(routeKey: RouteKey, locale: Locale): string {
  return routes[routeKey][locale];
}

function normalizePath(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

/** Finds the route key for a localized path (used by the sitemap). */
export function getRouteKeyByPath(path: string): RouteKey | undefined {
  const normalized = normalizePath(path);
  const keys = Object.keys(routes) as RouteKey[];
  return keys.find((key) =>
    locales.some((locale) => routes[key][locale] === normalized),
  );
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/** Absolute alternate URLs for every locale, plus `x-default`. */
export function getAlternateLinks(
  routeKey: RouteKey,
  site: URL | string,
): AlternateLink[] {
  const links = locales.map((locale) => ({
    hreflang: languageTags[locale],
    href: new URL(getPath(routeKey, locale), site).href,
  }));

  return [
    ...links,
    {
      hreflang: 'x-default',
      href: new URL(getPath(routeKey, defaultLocale), site).href,
    },
  ];
}

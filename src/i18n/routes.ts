import { defaultLocale, languageTags, locales, type Locale } from './config';

/**
 * The website is a single page per language. Serbian lives at `/`, English at `/en`.
 * Every content section is part of that page and is reached through its anchor.
 */
export const routes = {
  home: { sr: '/', en: '/en' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

/** Anchor ids of the page sections (identical in every language). */
export const sections = {
  home: 'pocetna',
  about: 'o-nama',
  services: 'usluge',
  education: 'edukacije',
  reviews: 'recenzije',
  contact: 'kontakt',
} as const;

export type SectionKey = keyof typeof sections;

/**
 * Browser event dispatched on `document` whenever the section in view changes.
 * `detail` is the section's anchor id (e.g. `recenzije`).
 */
export const SECTION_CHANGE_EVENT = 'bonaca:section-change';

/** Sections shown in the main navigation, in page order. */
export const navigationItems = [
  'home',
  'about',
  'services',
  'education',
  'reviews',
  'contact',
] as const satisfies readonly SectionKey[];

export function getPath(routeKey: RouteKey, locale: Locale): string {
  return routes[routeKey][locale];
}

/** Link to a section of the page, e.g. `/#recenzije` or `/en#recenzije`. */
export function getSectionHref(section: SectionKey, locale: Locale): string {
  return `${getPath('home', locale)}#${sections[section]}`;
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

/**
 * Locale configuration — single source of truth.
 * Imported by `astro.config.ts` and by application code.
 */

export const locales = ['sr', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sr';

/** BCP 47 language tags used for `<html lang>` and `hreflang`. */
export const languageTags: Record<Locale, string> = {
  sr: 'sr-Latn',
  en: 'en',
};

/** Open Graph locale identifiers (`og:locale`). */
export const ogLocales: Record<Locale, string> = {
  sr: 'sr_RS',
  en: 'en_US',
};

/** Language names in their own language, used by the language switcher. */
export const languageNames: Record<Locale, string> = {
  sr: 'Srpski',
  en: 'English',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Resolves a locale string (e.g. `Astro.currentLocale`) to a supported locale. */
export function getLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

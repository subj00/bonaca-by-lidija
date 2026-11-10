import type { Locale } from './config';

/**
 * UI strings. Serbian is the source of truth for keys;
 * every other locale must provide exactly the same keys.
 */
const sr = {
  'skipLink': 'Preskoči na sadržaj',
  'nav.label': 'Glavna navigacija',
  'nav.home': 'Početna',
  'nav.about': 'O nama',
  'nav.services': 'Usluge',
  'nav.education': 'Edukacije',
  'nav.reviews': 'Recenzije',
  'nav.contact': 'Kontakt',
  'menu.open': 'Otvori meni',
  'menu.close': 'Zatvori meni',
  'languageSwitcher.label': 'Izbor jezika',
  'home.hero.imageAlt': 'Dve žene sa četkicama za šminku u rukama',
  'reviews.title': 'Iskustva polaznica',
  'reviews.listLabel': 'Recenzije polaznica',
  'reviews.previous': 'Prethodna recenzija',
  'reviews.next': 'Sledeća recenzija',
  'reviews.goTo': 'Prikaži recenziju',
  'reviews.of': 'od',
} as const;

export type TranslationKey = keyof typeof sr;

type Dictionary = Record<TranslationKey, string>;

const en: Dictionary = {
  'skipLink': 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.education': 'Education',
  'nav.reviews': 'Reviews',
  'nav.contact': 'Contact',
  'menu.open': 'Open menu',
  'menu.close': 'Close menu',
  'languageSwitcher.label': 'Language selection',
  'home.hero.imageAlt': 'Two women holding makeup brushes',
  'reviews.title': 'Student experiences',
  'reviews.listLabel': 'Student reviews',
  'reviews.previous': 'Previous review',
  'reviews.next': 'Next review',
  'reviews.goTo': 'Show review',
  'reviews.of': 'of',
};

const dictionaries: Record<Locale, Dictionary> = { sr, en };

/** Returns a translation function bound to the given locale. */
export function useTranslations(locale: Locale) {
  return (key: TranslationKey): string => dictionaries[locale][key];
}

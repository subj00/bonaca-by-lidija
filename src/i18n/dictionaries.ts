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
  'nav.contact': 'Kontakt',
  'menu.open': 'Otvori meni',
  'menu.close': 'Zatvori meni',
  'languageSwitcher.label': 'Izbor jezika',
  'home.hero.imageAlt': 'Dve žene sa četkicama za šminku u rukama',
  'home.hero.ctaServices': 'Istraži usluge',
  'home.hero.ctaEducation': 'Istraži edukacije',
  'home.hero.ctaContact': 'Kontaktiraj nas',
  'reviews.title': 'Reči naših polaznica',
  'contact.title': 'Kontakt',
  'contact.subtitle': 'Povežite se sa nama',
  'contact.addressLabel': 'Adresa studija',
  'contact.email': 'E-pošta',
  'contact.mapLink': 'Pronađi na mapi',
  'a11y.newTab': 'otvara se u novoj kartici',
  'reviews.listLabel': 'Recenzije polaznica',
  'reviews.previous': 'Prethodna recenzija',
  'reviews.next': 'Sledeća recenzija',
  'reviews.goTo': 'Prikaži recenziju',
  'reviews.of': 'od',
  'services.book': 'Zakaži termin',
  'services.onLocationCta': 'Upit za šminkanje na terenu',
  'services.onLocationInfo': 'Za više informacija o šminkanju na terenu, pišite na:',
  'services.galleryLabel': 'Galerija radova',
  'services.galleryPrevious': 'Prethodne fotografije',
  'services.galleryNext': 'Sledeće fotografije',
  'services.galleryGoTo': 'Prikaži grupu fotografija',
  'services.enlarge': 'otvara uvećanu fotografiju',
  'education.title': 'Edukacije',
  'nav.educationCourses': 'Kursevi edukacija',
  'education.book': 'Zakaži edukaciju',
  'education.facts': 'Osnovne informacije',
  'lightbox.close': 'Zatvori',
  'lightbox.zoom': 'Uvećaj ili umanji',
  'lightbox.previous': 'Prethodna fotografija',
  'lightbox.next': 'Sledeća fotografija',
  'lightbox.of': 'od',
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
  'nav.contact': 'Contact',
  'menu.open': 'Open menu',
  'menu.close': 'Close menu',
  'languageSwitcher.label': 'Language selection',
  'home.hero.imageAlt': 'Two women holding makeup brushes',
  'home.hero.ctaServices': 'Explore services',
  'home.hero.ctaEducation': 'Explore educations',
  'home.hero.ctaContact': 'Contact us',
  'reviews.title': 'Words from our students',
  'contact.title': 'Contact',
  'contact.subtitle': 'Get in touch',
  'contact.addressLabel': 'Studio address',
  'contact.email': 'Email',
  'contact.mapLink': 'Find us on the map',
  'a11y.newTab': 'opens in a new tab',
  'reviews.listLabel': 'Student reviews',
  'reviews.previous': 'Previous review',
  'reviews.next': 'Next review',
  'reviews.goTo': 'Show review',
  'reviews.of': 'of',
  'services.book': 'Book an appointment',
  'services.onLocationCta': 'On-location makeup inquiry',
  'services.onLocationInfo': 'For more information about on-location makeup, contact us at:',
  'services.galleryLabel': 'Portfolio',
  'services.galleryPrevious': 'Previous photos',
  'services.galleryNext': 'Next photos',
  'services.galleryGoTo': 'Show photo group',
  'services.enlarge': 'opens a larger photo',
  'education.title': 'Educations',
  'nav.educationCourses': 'Education courses',
  'education.book': 'Book your training',
  'education.facts': 'Key information',
  'lightbox.close': 'Close',
  'lightbox.zoom': 'Zoom in or out',
  'lightbox.previous': 'Previous photo',
  'lightbox.next': 'Next photo',
  'lightbox.of': 'of',
};

const dictionaries: Record<Locale, Dictionary> = { sr, en };

/** Returns a translation function bound to the given locale. */
export function useTranslations(locale: Locale) {
  return (key: TranslationKey): string => dictionaries[locale][key];
}

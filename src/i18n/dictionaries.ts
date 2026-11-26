import type { Locale } from './config';

/**
 * UI strings. Serbian is the source of truth for keys;
 * every other locale must provide exactly the same keys.
 */
const sr = {
  skipLink: 'Preskoči na sadržaj',
  'meta.title': 'Šminkanje i kursevi šminkanja, Novi Beograd',
  'meta.description':
    'Profesionalno šminkanje za venčanja i proslave na Novom Beogradu, na terenu i van Beograda. Kursevi šminkanja uživo, na srpskom i engleskom. Lash i brow lift.',
  'meta.imageAlt': 'Logo studija Bonaca by Lidija',
  'nav.label': 'Glavna navigacija',
  'nav.home': 'Početna',
  'nav.about': 'O nama',
  'nav.services': 'Usluge',
  'nav.education': 'Edukacije',
  'nav.contact': 'Kontakt',
  'menu.open': 'Otvori meni',
  'menu.close': 'Zatvori meni',
  'languageSwitcher.label': 'Izbor jezika',
  'home.hero.heading':
    'Bonaca by Lidija – profesionalno šminkanje i kursevi šminkanja na Novom Beogradu',
  'home.hero.imageAlt': 'Dve žene sa četkicama za šminku u rukama',
  'home.hero.ctaServices': 'Istraži usluge',
  'home.hero.ctaEducation': 'Istraži edukacije',
  'home.hero.ctaContact': 'Kontaktiraj nas',
  'home.hero.serviceMakeup': 'Profesionalno šminkanje',
  'home.hero.serviceCourses': 'Edukacije',
  'home.hero.serviceLashBrow': 'Lash & brow lift',
  'reviews.title': 'Reči naših polaznica',
  'contact.title': 'Kontakt',
  'contact.subtitle': 'Poveži se sa nama',
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
  'services.onLocationInfo':
    'Za više informacija o šminkanju na terenu, piši na:',
  'services.galleryLabel': 'Galerija radova',
  'services.galleryPrevious': 'Prethodne fotografije',
  'services.galleryNext': 'Sledeće fotografije',
  'services.galleryGoTo': 'Prikaži grupu fotografija',
  'services.enlarge': 'otvara uvećanu fotografiju',
  'education.title': 'Edukacije',
  'nav.educationCourses': 'Kursevi edukacija',
  'nav.servicesList': 'Spisak usluga',
  'nav.servicesLidija': 'Šminkanje – Lidija',
  'nav.servicesAna': 'Šminkanje – Ana',
  'nav.servicesLashBrow': 'Lash & Brow Lift',
  'education.book': 'Zakaži edukaciju',
  'education.facts': 'Osnovne informacije',
  'lightbox.close': 'Zatvori',
  'lightbox.zoom': 'Uvećaj ili umanji',
  'lightbox.previous': 'Prethodna fotografija',
  'lightbox.next': 'Sledeća fotografija',
  'lightbox.of': 'od',
  'notFound.title': 'Stranica nije pronađena',
  'notFound.text': 'Stranica koju tražiš ne postoji ili je premeštena.',
  'notFound.home': 'Nazad na početnu',
} as const;

export type TranslationKey = keyof typeof sr;

type Dictionary = Record<TranslationKey, string>;

const en: Dictionary = {
  skipLink: 'Skip to content',
  'meta.title': 'Makeup artist & makeup courses in Belgrade',
  'meta.description':
    'Professional makeup for weddings and events in New Belgrade, on location and outside Belgrade. In-person makeup courses in Serbian & English. Lash & brow lift.',
  'meta.imageAlt': 'Bonaca by Lidija studio logo',
  'nav.label': 'Main navigation',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.education': 'Courses',
  'nav.contact': 'Contact',
  'menu.open': 'Open menu',
  'menu.close': 'Close menu',
  'languageSwitcher.label': 'Language selection',
  'home.hero.heading':
    'Bonaca by Lidija – professional makeup and makeup courses in Belgrade',
  'home.hero.imageAlt': 'Two women holding makeup brushes',
  'home.hero.ctaServices': 'Explore services',
  'home.hero.ctaEducation': 'Explore courses',
  'home.hero.ctaContact': 'Contact us',
  'home.hero.serviceMakeup': 'Professional makeup',
  'home.hero.serviceCourses': 'Courses',
  'home.hero.serviceLashBrow': 'Lash & brow lift',
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
  'services.onLocationInfo':
    'For more information about on-location makeup, contact us at:',
  'services.galleryLabel': 'Portfolio',
  'services.galleryPrevious': 'Previous photos',
  'services.galleryNext': 'Next photos',
  'services.galleryGoTo': 'Show photo group',
  'services.enlarge': 'opens a larger photo',
  'education.title': 'Courses',
  'nav.educationCourses': 'Education courses',
  'nav.servicesList': 'List of services',
  'nav.servicesLidija': 'Makeup by Lidija',
  'nav.servicesAna': 'Makeup by Ana',
  'nav.servicesLashBrow': 'Lash & Brow Lift',
  'education.book': 'Book your course',
  'education.facts': 'Key information',
  'lightbox.close': 'Close',
  'lightbox.zoom': 'Zoom in or out',
  'lightbox.previous': 'Previous photo',
  'lightbox.next': 'Next photo',
  'lightbox.of': 'of',
  'notFound.title': 'Page not found',
  'notFound.text':
    'The page you are looking for does not exist or has been moved.',
  'notFound.home': 'Back to home',
};

const dictionaries: Record<Locale, Dictionary> = { sr, en };

/** Returns a translation function bound to the given locale. */
export function useTranslations(locale: Locale) {
  return (key: TranslationKey): string => dictionaries[locale][key];
}

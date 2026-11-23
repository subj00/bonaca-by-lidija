import type { Locale } from '@/i18n/config';
import { contactPeople } from '@/data/contact';

/**
 * Content of the Services section: Lidija's makeup service and Ana's four
 * treatments. Texts are exactly as provided by the studio. No durations, prices
 * or other details are added beyond what the studio provided.
 */
type Localized = Record<Locale, string>;

const [lidijaContact, anaContact] = contactPeople;

export const lidijaService = {
  name: lidijaContact.name,
  fullName: lidijaContact.name,
  instagramUrl: lidijaContact.instagram.url,
  email: lidijaContact.email,
  title: { sr: 'Profesionalno šminkanje', en: 'Professional makeup' } satisfies Localized,
  highlight: {
    sr: 'Tvoj izgled, samo u najboljem izdanju.',
    en: 'Your look, at its very best.',
  } satisfies Localized,
  description: {
    sr: [
      'Bilo da je u pitanju proslava, venčanje, fotografisanje ili dan kada samo želiš da se osećaš posebno, posvećujemo se tome da šminka istakne ono najlepše na tvom licu i da traje.',
      'Svaki termin počinje kratkim razgovorom: šta želiš, kakva je prilika i kako se najbolje osećaš.',
    ],
    en: [
      'Whether it’s a celebration, a wedding, a photoshoot, or simply a day when you want to feel special, we focus on enhancing your natural beauty and creating makeup that lasts.',
      'Every appointment begins with a short conversation about your preferences, the occasion, and what makes you feel most comfortable and confident.',
    ],
  } satisfies Record<Locale, string[]>,
  /** Label (regular) and value (emphasised), e.g. "Trajanje:" + "1h". */
  duration: {
    label: { sr: 'Trajanje:', en: 'Duration:' },
    value: { sr: '1h', en: '1 hour' },
  } satisfies Record<'label' | 'value', Localized>,
  onLocation: {
    sr: 'Mogućnost izlaska na teren',
    en: 'On-location makeup available',
  } satisfies Localized,
  /** Prefilled on-location inquiry (subject and body), opened with `mailto:`. */
  inquiry: {
    sr: {
      subject: 'Upit za šminkanje na terenu — BONACA',
      body: [
        'Zdravo Lidija,',
        '',
        'Želela bih da se raspitam o mogućnosti šminkanja na terenu.',
        '',
        'Datum:',
        'Lokacija:',
        'Broj osoba:',
        'Vreme kada šminka treba da bude završena:',
        '',
        'Hvala!',
      ],
    },
    en: {
      subject: 'On-Location Makeup Inquiry — BONACA',
      body: [
        'Hello Lidija,',
        '',
        'I would like to inquire about your on-location makeup service.',
        '',
        'Date:',
        'Location:',
        'Number of people:',
        'Time the makeup needs to be completed:',
        '',
        'Thank you!',
      ],
    },
  } satisfies Record<Locale, { subject: string; body: string[] }>,
};

export const anaService = {
  name: anaContact.name,
  fullName: anaContact.name,
  instagramUrl: anaContact.instagram.url,
  treatments: [
    {
      id: 'makeup',
      title: { sr: 'Profesionalno šminkanje', en: 'Professional makeup' },
      description: {
        sr: 'Šminka prilagođena tvom licu, stilu i posebnoj prilici. Od nežnog, prirodnog izgleda do izraženijeg glamura, svaki detalj pažljivo je osmišljen da istakne tvoju lepotu i da se u svom izgledu osećaš sigurno i posebno.',
        en: 'Makeup tailored to your features, personal style, and special occasion. From soft, natural beauty to more glamorous looks, every detail is thoughtfully designed to enhance your features and help you feel confident and beautiful.',
      },
    },
    {
      id: 'brow-lift',
      title: { sr: 'Brow lift', en: 'Brow lift' },
      description: {
        sr: 'Brow lift je tretman oblikovanja i podizanja obrva koji će naglasiti njihov prirodan oblik. Uz brow lift dobijate uredniji izgled i vizuelno veću punoću, uz manje potrebe za svakodnevnim popunjavanjem olovkom ili drugim proizvodima. Efekat traje od 6 do 8 nedelja, u zavisnosti od same dlake.',
        en: 'Brow lift is a treatment that shapes and lifts your eyebrows to enhance their natural appearance. It creates a neater, fuller-looking brow, reducing the need for daily filling with pencils or other brow products. Results typically last 6 to 8 weeks, depending on your individual brow hairs.',
      },
    },
    {
      id: 'lash-lift',
      title: { sr: 'Lash lift', en: 'Lash lift' },
      description: {
        sr: 'Lash lift je tretman podizanja i uvijanja trepavica koji će maksimalno otvoriti i naglasiti vaše oči. Dobijate lepo podignute i uvijene prirodne trepavice, bez potrebe za svakodnevnim korišćenjem uvijača. Efekat traje od 6 do 8 nedelja. Trepavice se postepeno vraćaju u svoj prirodni oblik, nakon čega se po želji može ponoviti tretman.',
        en: 'Lash lift is a treatment that lifts and curls your natural lashes, making your eyes appear more open and defined. It gives your lashes a beautifully lifted and curled appearance without the need for daily use of an eyelash curler. Results typically last 6 to 8 weeks. Your lashes gradually return to their natural shape, after which the treatment can be repeated if desired.',
      },
    },
    {
      id: 'tinting',
      title: { sr: 'Farbanje trepavica i obrva', en: 'Eyelash & eyebrow tinting' },
      description: {
        sr: 'Farbanje je poseban dodatak koji je pogodan za sve koji žele veću definiciju i izraženiju dlaku, bilo da su u pitanju trepavice ili obrve. Farba može biti vrlo prirodna, ali i vrlo intenzivna, u zavisnosti od potreba.',
        en: 'Tinting is an additional treatment ideal for anyone who wants more definition and enhanced color in their eyelashes or eyebrows. The result can be very natural or more intense, depending on your preferences.',
      },
    },
  ] satisfies { id: string; title: Localized; description: Localized }[],
  addOnNote: {
    sr: 'Brow Lift, Lash Lift i farbanje trepavica i obrva mogu se zakazati kao samostalni tretmani ili kao dodatak profesionalnom šminkanju.',
    en: 'Brow Lift, Lash Lift, and eyelash and eyebrow tinting can be booked as standalone treatments or as add-ons to professional makeup.',
  } satisfies Localized,
};

/** `mailto:` link with an encoded subject and body (lines joined with CRLF). */
export function buildMailto(email: string, subject: string, bodyLines: string[]): string {
  const query = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(bodyLines.join('\r\n'))}`,
  ].join('&');
  return `mailto:${email}?${query}`;
}

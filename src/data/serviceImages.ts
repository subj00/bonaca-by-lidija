import type { ImageMetadata } from 'astro';
import type { Locale } from '@/i18n/config';

/**
 * Service photographs, picked up automatically from
 *   src/assets/images/services/lidija/  (lidija-portrait.jpeg, lidija-01.jpeg, …)
 *   src/assets/images/services/ana/     (ana-portrait.jpeg, ana-01.jpeg, …)
 * The source files are used as they are (names and formats unchanged); Astro
 * optimises what it serves. Each artist's folder is read separately, so the
 * portfolios never mix. While a folder is empty, neutral placeholders show instead.
 */
export interface GalleryImage {
  src: ImageMetadata;
  alt: Record<Locale, string>;
  /**
   * Vertical framing inside the fixed carousel frame (CSS `object-position`
   * y value). The photos are taller than the frame, so a per-photo value keeps
   * heads and faces in view; before/after collages stay centred (both parts visible).
   */
  focusY: string;
}

type GlobResult = Record<string, { default: ImageMetadata }>;

const lidijaFiles: GlobResult = import.meta.glob(
  '/src/assets/images/services/lidija/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true },
);
const anaFiles: GlobResult = import.meta.glob(
  '/src/assets/images/services/ana/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true },
);

const fileName = (path: string) => path.split('/').pop()?.toLowerCase() ?? '';

/** The photo's number from its file name (`lidija-07.jpeg` → 7). */
const fileNumber = (name: string) => Number(name.match(/(\d+)\.[a-z]+$/)?.[1] ?? Infinity);

function collect(files: GlobResult) {
  const entries = Object.entries(files).map(
    ([path, module]) => [fileName(path), module.default] as [string, ImageMetadata],
  );
  const portrait = entries.find(([name]) => name.includes('portrait'))?.[1];
  // Numbered order (…-2 before …-10), whatever the prefix spelling.
  const gallery = entries
    .filter(([name]) => !name.includes('portrait'))
    .sort(([a], [b]) => fileNumber(a) - fileNumber(b));
  return { portrait, gallery };
}

const lidija = collect(lidijaFiles);
const ana = collect(anaFiles);

/** Default framing: a little above centre, where faces usually are. */
const DEFAULT_FOCUS = '15%';

type Localized = Record<Locale, string>;

/**
 * Lidija's portfolio, by photo number: framing and a short description of what
 * each photograph shows (written from the photographs themselves).
 */
const lidijaPhotos: Record<number, { focusY: string; alt: Localized }> = {
  1: {
    focusY: '8%',
    alt: {
      sr: 'Glam šminka sa toplim braon senkama i nude usnama',
      en: 'Glam makeup with warm brown eyeshadow and nude lips',
    },
  },
  2: {
    focusY: '0%',
    alt: {
      sr: 'Svadbena šminka, mlada u venčanici kraj prozora',
      en: 'Bridal makeup, bride in a wedding dress by the window',
    },
  },
  3: {
    focusY: '6%',
    alt: {
      sr: 'Nežna šminka sa ružičastim senkama i rumenilom',
      en: 'Soft makeup with pink eyeshadow and blush',
    },
  },
  4: {
    focusY: '0%',
    alt: {
      sr: 'Svadbena šminka sa tankim ajlajnerom, mlada sa cvetnom ogrlicom',
      en: 'Bridal makeup with fine eyeliner, bride wearing a floral choker',
    },
  },
  6: {
    focusY: '6%',
    alt: {
      sr: 'Sjajna, osunčana šminka za fotografisanje',
      en: 'Glowing, sun-kissed makeup for a photoshoot',
    },
  },
  7: {
    focusY: '6%',
    alt: {
      sr: 'Šminka sa ljubičastim akcentom ispod oka',
      en: 'Makeup with a purple accent along the lower lash line',
    },
  },
  8: {
    focusY: '16%',
    alt: {
      sr: 'Svadbena šminka sa ružičastim senkama, mlada crvene kose',
      en: 'Bridal makeup with pink eyeshadow on a red-haired bride',
    },
  },
  9: {
    focusY: '8%',
    alt: {
      sr: 'Bronzana šminka sa ajlajnerom i kosom skupljenom u punđu',
      en: 'Bronze makeup with winged eyeliner and a sleek bun',
    },
  },
  10: {
    focusY: '10%',
    alt: {
      sr: 'Večernja šminka sa tamnim smokey očima',
      en: 'Evening makeup with dark smokey eyes',
    },
  },
  11: {
    focusY: '4%',
    alt: {
      sr: 'Glam šminka sa naglašenim konturama lica',
      en: 'Glam makeup with sculpted contour',
    },
  },
  12: {
    focusY: '10%',
    alt: {
      sr: 'Prirodna, sveža dnevna šminka',
      en: 'Fresh, natural everyday makeup',
    },
  },
  13: {
    focusY: '10%',
    alt: {
      sr: 'Elegantna šminka sa naglašenim trepavicama',
      en: 'Elegant makeup with defined lashes',
    },
  },
  14: {
    focusY: '0%',
    alt: {
      sr: 'Svadbena šminka sa ružičastim rumenilom, mlada talasaste kose',
      en: 'Bridal makeup with rosy blush, bride with soft waves',
    },
  },
  15: {
    focusY: '0%',
    alt: {
      sr: 'Svadbena šminka sa ružičasto-bordo senkama',
      en: 'Bridal makeup with pink and burgundy eyeshadow',
    },
  },
  16: {
    focusY: '0%',
    alt: {
      sr: 'Svadbena šminka sa svetlucavim senkama i ajlajnerom',
      en: 'Bridal makeup with shimmering eyeshadow and eyeliner',
    },
  },
};

/**
 * Ana's portfolio: makeup photos and brow/lash treatments. Makeup photos are
 * framed from the top (whole head in view); the before/after collages (2, 4, 5, 9
 * and the three-step 11) are framed from the centre, so every part stays in view.
 */
const anaPhotos: Record<number, { focusY: string; alt: Localized }> = {
  1: {
    focusY: '10%',
    alt: {
      sr: 'Šminka sa izraženim ajlajnerom i nude usnama',
      en: 'Makeup with bold winged eyeliner and nude lips',
    },
  },
  2: {
    focusY: '50%',
    alt: {
      sr: 'Lash lift i oblikovanje obrva, pre i posle',
      en: 'Lash lift and brow shaping, before and after',
    },
  },
  3: {
    focusY: '18%',
    alt: {
      sr: 'Nežna šminka sa svetlucavim senkama',
      en: 'Soft makeup with shimmering eyeshadow',
    },
  },
  4: {
    focusY: '50%',
    alt: { sr: 'Brow lift, pre i posle', en: 'Brow lift, before and after' },
  },
  5: {
    focusY: '50%',
    alt: { sr: 'Lash lift, pre i posle', en: 'Lash lift, before and after' },
  },
  6: {
    focusY: '20%',
    alt: {
      sr: 'Glam šminka sa bronzanim senkama',
      en: 'Glam makeup with bronze eyeshadow',
    },
  },
  7: {
    focusY: '10%',
    alt: { sr: 'Brow lift tokom tretmana', en: 'Brow lift treatment in progress' },
  },
  8: {
    focusY: '20%',
    alt: {
      sr: 'Večernja šminka sa ajlajnerom i bronzanim tonovima',
      en: 'Evening makeup with eyeliner and bronze tones',
    },
  },
  9: {
    focusY: '50%',
    alt: {
      sr: 'Brow lift i lash lift, pre i posle',
      en: 'Brow lift and lash lift, before and after',
    },
  },
  10: {
    focusY: '15%',
    alt: {
      sr: 'Sveža šminka sa ružičastim usnama',
      en: 'Fresh makeup with pink lips',
    },
  },
  11: {
    focusY: '50%',
    alt: {
      sr: 'Lash lift korak po korak, od tretmana do rezultata',
      en: 'Lash lift step by step, from treatment to result',
    },
  },
};

/** Used only for a photo added later without its own description. */
const fallbackAlt = (artist: string, index: number): Localized => ({
  sr: `Profesionalno šminkanje, rad: ${artist} (${index + 1})`,
  en: `Professional makeup by ${artist} (${index + 1})`,
});

export const lidijaPortrait: Omit<GalleryImage, 'focusY'> | undefined = lidija.portrait && {
  src: lidija.portrait,
  alt: { sr: 'Portret: Lidija Vukmirović', en: 'Portrait of Lidija Vukmirović' },
};

export const anaPortrait: Omit<GalleryImage, 'focusY'> | undefined = ana.portrait && {
  src: ana.portrait,
  alt: { sr: 'Portret: Ana Perić', en: 'Portrait of Ana Perić' },
};

export const lidijaGallery: GalleryImage[] = lidija.gallery.map(([name, src], index) => {
  const photo = lidijaPhotos[fileNumber(name)];
  return {
    src,
    focusY: photo?.focusY ?? DEFAULT_FOCUS,
    alt: photo?.alt ?? fallbackAlt('Lidija Vukmirović', index),
  };
});

export const anaGallery: GalleryImage[] = ana.gallery.map(([name, src], index) => {
  const photo = anaPhotos[fileNumber(name)];
  return {
    src,
    focusY: photo?.focusY ?? DEFAULT_FOCUS,
    alt: photo?.alt ?? fallbackAlt('Ana Perić', index),
  };
});

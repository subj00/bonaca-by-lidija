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

/** Per-photo framing for Lidija's portfolio (by photo number). */
const lidijaFocus: Record<number, string> = {
  1: '8%',
  2: '0%',
  3: '6%',
  4: '0%',
  6: '6%',
  7: '6%',
  8: '16%',
  9: '8%',
  10: '10%',
  11: '4%',
  12: '10%',
  13: '10%',
  14: '0%',
  15: '0%',
  16: '0%',
};

/**
 * Ana's portfolio: makeup photos and brow/lash treatments. Makeup photos are
 * framed from the top (whole head in view); the before/after collages (2, 4, 5, 9
 * and the three-step 11) are framed from the centre, so every part stays in view.
 */
const anaPhotos: Record<
  number,
  { focusY: string; kind: 'makeup' | 'brows' | 'lashes' | 'treatment' }
> = {
  1: { focusY: '10%', kind: 'makeup' },
  2: { focusY: '50%', kind: 'treatment' },
  3: { focusY: '18%', kind: 'makeup' },
  4: { focusY: '50%', kind: 'treatment' },
  5: { focusY: '50%', kind: 'treatment' },
  6: { focusY: '20%', kind: 'makeup' },
  7: { focusY: '10%', kind: 'brows' },
  8: { focusY: '20%', kind: 'makeup' },
  9: { focusY: '50%', kind: 'treatment' },
  10: { focusY: '15%', kind: 'makeup' },
  11: { focusY: '50%', kind: 'lashes' },
};

const anaAlt = {
  makeup: { sr: 'Profesionalno šminkanje, rad Ane Perić', en: 'Professional makeup by Ana Perić' },
  brows: { sr: 'Tretman obrva, rad Ane Perić', en: 'Eyebrow treatment by Ana Perić' },
  lashes: { sr: 'Tretman trepavica, rad Ane Perić', en: 'Eyelash treatment by Ana Perić' },
  treatment: {
    sr: 'Tretman obrva i trepavica, pre i posle, rad Ane Perić',
    en: 'Brow and lash treatment, before and after, by Ana Perić',
  },
  other: { sr: 'Rad Ane Perić', en: 'Work by Ana Perić' },
} satisfies Record<string, Record<Locale, string>>;

export const lidijaPortrait: Omit<GalleryImage, 'focusY'> | undefined = lidija.portrait && {
  src: lidija.portrait,
  alt: { sr: 'Portret: Lidija Vukmirović', en: 'Portrait of Lidija Vukmirović' },
};

export const anaPortrait: Omit<GalleryImage, 'focusY'> | undefined = ana.portrait && {
  src: ana.portrait,
  alt: { sr: 'Portret: Ana Perić', en: 'Portrait of Ana Perić' },
};

export const lidijaGallery: GalleryImage[] = lidija.gallery.map(([name, src], index) => ({
  src,
  focusY: lidijaFocus[fileNumber(name)] ?? DEFAULT_FOCUS,
  alt: {
    sr: `Profesionalno šminkanje, rad Lidije Vukmirović (${index + 1})`,
    en: `Professional makeup by Lidija Vukmirović (${index + 1})`,
  },
}));

export const anaGallery: GalleryImage[] = ana.gallery.map(([name, src]) => {
  const photo = anaPhotos[fileNumber(name)];
  return {
    src,
    focusY: photo?.focusY ?? DEFAULT_FOCUS,
    alt: anaAlt[photo?.kind ?? 'other'],
  };
});

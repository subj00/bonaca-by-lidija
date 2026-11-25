/**
 * Studio contact details, exactly as provided by the studio.
 * The street name is never translated, so the address is the same in SR and EN.
 */
export interface ContactPerson {
  name: string;
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
}

/** Shown as two lines (street, then block); joined with a comma where read as one line. */
export const studioAddressLines = ['Vojvođanska 3', 'Blok 63'] as const;
export const studioAddress = studioAddressLines.join(', ');
/**
 * The studio's official Google Business Profile (on Google Maps). The contact
 * address links to it, and the structured data lists it as the map and as one
 * of the studio's profiles.
 */
export const studioMapUrl = 'https://maps.app.goo.gl/W2q6k72AQyG9Y3jR6';

export const contactPeople: ContactPerson[] = [
  {
    name: 'Lidija Vukmirović',
    email: 'lidijakmakeup@gmail.com',
    instagram: {
      handle: 'lidija.vukmirovic',
      url: 'https://www.instagram.com/lidija.vukmirovic/',
    },
  },
  {
    name: 'Ana Perić',
    email: 'artswithanaa@gmail.com',
    instagram: {
      handle: 'artswithana',
      url: 'https://www.instagram.com/artswithana/',
    },
  },
];

/**
 * Full studio location, for search engines only (structured data and meta
 * tags). It is never rendered on the page: the visible address stays the two
 * lines above. Names are kept in Serbian in both languages so they match the
 * Google Business Profile exactly (consistent name, address, phone).
 *
 * 11073 is the studio's own postal code. 11000 is the general postal code of
 * Beograd, used only as a reference to the wider city in `areaServed`, never as
 * a second address.
 */
export const studioSeoLocation = {
  street: 'Vojvođanska 3',
  neighborhood: 'Blok 63',
  municipality: 'Novi Beograd',
  city: 'Beograd',
  postalCode: '11073',
  cityPostalCode: '11000',
  /** ISO 3166-1 alpha-2. */
  countryCode: 'RS',
  /** ISO 3166-2 code for the City of Belgrade (used by the geo.region meta tag). */
  regionCode: 'RS-00',
} as const;

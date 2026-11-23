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
export const studioMapUrl = 'https://maps.app.goo.gl/SQWa4YLCLcBmAc4BA';

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

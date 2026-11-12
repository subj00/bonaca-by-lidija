/**
 * Studio contact details, exactly as provided by the studio.
 * The address is intentionally short until the precise location is confirmed.
 */
export interface ContactPerson {
  name: string;
  email: string;
  instagram: {
    handle: string;
    url: string;
  };
}

export const studioAddress = 'Blok 63';

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

import type { Locale } from '@/i18n/config';
import { contactPeople } from '@/data/contact';
import { anaReviews, reviews, type Review } from '@/data/reviews';

/**
 * Content of the Educations section: Lidija's three courses and Ana's course.
 * Texts are exactly as provided by the studio. No prices, dates, durations,
 * certificates or benefits are added beyond what the studio provided.
 */
type Localized = Record<Locale, string>;

const [lidijaContact, anaContact] = contactPeople;

/** Small outline icon shown before a key fact. */
export type EducationIcon =
  | 'clock'
  | 'calendar'
  | 'users'
  | 'user'
  | 'lessons'
  | 'repeat'
  | 'spark'
  | 'notes';

export interface EducationFact {
  icon: EducationIcon;
  text: Localized;
}

/** Building blocks of the detailed content shown inside an accordion. */
export type EducationBlock =
  | { type: 'paragraphs'; items: Localized[] }
  /** Short titled topics (title in the display style, text below). */
  | { type: 'topics'; items: { title: Localized; text: Localized }[] }
  | { type: 'list'; items: Localized[] }
  /** Numbered list whose items are the same in both languages. */
  | { type: 'numbered'; items: string[] }
  | { type: 'note'; label: Localized; text: Localized }
  /** Closing sentence, set off from the content above it. */
  | { type: 'closing'; text: Localized };

export interface EducationDetail {
  id: string;
  title: Localized;
  blocks: EducationBlock[];
}

export interface Education {
  id: string;
  number: string;
  title: Localized;
  subtitle: Localized;
  description: Localized[];
  facts: EducationFact[];
  details: EducationDetail[];
  price?: { label: Localized; value: string };
  instagramUrl: string;
}

export interface EducationArtist {
  id: string;
  name: string;
  /** Short introductory line under the artist's name. */
  subtitle: Localized;
  courses: Education[];
  /** Student testimonials shown after the artist's courses (only her own students). */
  testimonials?: Review[];
  /** Small line under the testimonials heading. */
  testimonialsSubtitle?: Localized;
}

const individual: EducationFact = {
  icon: 'user',
  text: { sr: 'Individualno', en: 'Individual training' },
};

const certificate = {
  sr: 'Sertifikat o završenoj edukaciji, koji ti donosi popuste u brojnim makeup radnjama.',
  en: 'A certificate of completion that provides discounts at numerous makeup stores.',
} satisfies Localized;

export const lidijaEducations: EducationArtist = {
  id: 'lidija',
  name: lidijaContact.name,
  subtitle: {
    sr: 'Od prvog koraka do profesionalnog usavršavanja.',
    en: 'From your first steps to professional mastery.',
  },
  courses: [
    {
      id: 'master-the-basics',
      number: '01',
      title: { sr: 'Master the Basics', en: 'Master the Basics' },
      subtitle: {
        sr: 'Od prve četkice do prve klijentkinje.',
        en: 'From your first brush to your first client.',
      },
      description: [
        {
          sr: 'Ako te šminka privlači i maštaš da se jednog dana baviš poslom šminkera, ovo je tvoje mesto za početak. Ne treba ti nikakvo predznanje, krećemo od nule. Za dva meseca gradimo temelj na kom kasnije možeš da gradiš ceo posao: tehniku, sigurnost u radu i razumevanje klijentkinje koja sedi ispred tebe.',
          en: 'If you’re passionate about makeup and dream of becoming a professional makeup artist, this is where your journey begins. No previous experience is required — we start from scratch. Over two months, we’ll build the foundation for your future career: technique, confidence in your work, and an understanding of the client sitting in front of you.',
        },
      ],
      facts: [
        { icon: 'clock', text: { sr: '2 meseca', en: '2 months' } },
        { icon: 'users', text: { sr: 'Male grupe', en: 'Small groups' } },
        { icon: 'user', text: { sr: 'Moguće i individualno', en: 'Individual training available' } },
        {
          icon: 'calendar',
          text: {
            sr: 'Dva termina godišnje: januar/februar i oktobar',
            en: 'Twice a year: January/February and October',
          },
        },
      ],
      details: [
        {
          id: 'topics',
          title: { sr: 'Šta prolazimo zajedno', en: 'What we’ll cover' },
          blocks: [
            {
              type: 'topics',
              items: [
                {
                  title: { sr: 'Teorija koja ima smisla', en: 'Theory that makes sense' },
                  text: {
                    sr: 'Ne učimo pravila napamet, nego razumemo zašto nešto radi. Tako svakom licu prilaziš promišljeno, a ne po šablonu.',
                    en: 'Rather than memorizing rules, you’ll understand why techniques work, so you can approach every face thoughtfully instead of following a fixed formula.',
                  },
                },
                {
                  title: { sr: 'Sve salonske tehnike', en: 'Essential salon techniques' },
                  text: {
                    sr: 'Sve salonske tehnike koje klijentkinja sutra može da zatraži, uvežbane na modelima.',
                    en: 'Practice the makeup techniques your future clients may request, working on real models.',
                  },
                },
                {
                  title: { sr: 'Rad sa klijentkinjom', en: 'Working with clients' },
                  text: {
                    sr: 'Kako se vodi konsultacija, kako da razumeš šta ona zaista želi i kako da smireno izađeš na kraj sa nezgodnim situacijama.',
                    en: 'Learn how to conduct consultations, understand what clients truly want, and confidently handle challenging situations.',
                  },
                },
                {
                  title: { sr: 'Tvoj posao, tvoj brend', en: 'Your business, your brand' },
                  text: {
                    sr: 'Rad sa modelima, pronalaženje prvih klijentkinja i vođenje društvenih mreža.',
                    en: 'Learn about working with models, finding your first clients, and managing your social media presence.',
                  },
                },
                {
                  title: { sr: 'Fotografija i snimanje šminke', en: 'Makeup photography and video' },
                  text: {
                    sr: 'Kako da postaviš model i svetlo i podesiš telefon da slika pokaže šminku tačno onakvu kakva je uživo.',
                    en: 'Learn how to position your model, set up lighting, and adjust your phone settings so your photographs accurately reflect the makeup in real life.',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'included',
          title: { sr: 'Šta dobijaš', en: 'What’s included' },
          blocks: [
            {
              type: 'list',
              items: [
                {
                  sr: 'Veliki set četkica i blender, da od prvog dana radiš sa pravim alatom.',
                  en: 'A large makeup brush set and blending sponge, so you can work with professional tools from day one.',
                },
                certificate,
              ],
            },
            {
              type: 'closing',
              text: {
                sr: 'Na kraju kursa umeš da šminkaš i znaš kako od toga da napraviš posao. Pored toga, nosiš kući svoj prvi profesionalni set četkica.',
                en: 'By the end of the course, you’ll know how to apply makeup professionally and how to turn those skills into a business. You’ll also take home your first professional brush set.',
              },
            },
          ],
        },
      ],
      instagramUrl: lidijaContact.instagram.url,
    },
    {
      id: 'express-makeup-artistry',
      number: '02',
      title: { sr: 'Express Makeup Artistry', en: 'Express Makeup Artistry' },
      subtitle: {
        sr: 'Pet tehnika. Jedna edukacija. Mnogo više sigurnosti pred svakim novim izazovom.',
        en: 'Five techniques. One course. Greater confidence for every new challenge.',
      },
      description: [
        {
          sr: 'Express Makeup Artistry je individualna ubrzana edukacija za šminkere koji već imaju predznanje, a žele da usavrše veštine i postanu sigurniji u radu sa klijentima. Kroz detaljan i praktičan pristup prolazimo pet najtraženijih salonskih tehnika.',
          en: 'Express Makeup Artistry is an intensive individual training course for makeup artists who already have some experience and want to refine their skills and become more confident working with clients. Through detailed, hands-on training, we cover five of the most requested salon makeup techniques.',
        },
      ],
      facts: [
        individual,
        { icon: 'lessons', text: { sr: '5 časova', en: '5 lessons' } },
        { icon: 'clock', text: { sr: '2 nedelje', en: '2 weeks' } },
        {
          icon: 'repeat',
          text: { sr: 'Razmak između časova za vežbu', en: 'Time between lessons for practice' },
        },
      ],
      details: [
        {
          id: 'techniques',
          title: { sr: 'Pet tehnika koje savladavamo', en: 'Five techniques you’ll master' },
          blocks: [
            {
              type: 'numbered',
              items: [
                'Soft Glam',
                'Blended Eyeliner',
                'Classic Eyeliner & Red Lips',
                'Smokey Eyes',
                'Bridal Makeup',
              ],
            },
          ],
        },
        {
          id: 'more',
          title: { sr: 'Detaljnije o edukaciji', en: 'More about the training' },
          blocks: [
            {
              type: 'paragraphs',
              items: [
                {
                  sr: 'Nije cilj samo da savladaš izgled, nego i da razumeš postupak koji do njega vodi. Ne žurimo: svaku tehniku radimo dok ne „legne“. Bavimo se detaljima, kombinacijom proizvoda, teksturama i prilagođavanjem tehnike različitim licima i zahtevima klijenata.',
                  en: 'The goal isn’t just to recreate a look, but to understand the process behind it. We don’t rush: we practice each technique until it feels natural. We focus on the details, product combinations, textures, and adapting techniques to different faces and client requests.',
                },
                {
                  sr: 'Časovi su raspoređeni kroz dve nedelje, sa razmakom između termina. Tako imaš vremena da kod kuće vežbaš ono što smo radili i da na sledeći čas dođeš sa pitanjima i napretkom.',
                  en: 'Lessons are spread over two weeks, with breaks between sessions. This gives you time to practice at home and return to the next lesson with questions and progress.',
                },
                {
                  sr: 'Ovo je prilika da do kraja usavršiš tehnike koje će te pratiti u svakodnevnom salonskom radu i da svaki sledeći zahtev klijenta dočekaš spremna.',
                  en: 'This is your opportunity to truly refine the techniques you’ll use in everyday salon work and feel prepared for every new client request.',
                },
              ],
            },
            {
              type: 'note',
              label: { sr: 'Šta dobijaš', en: 'What’s included' },
              text: certificate,
            },
          ],
        },
      ],
      instagramUrl: lidijaContact.instagram.url,
    },
    {
      id: 'makeup-artist-upgrade',
      number: '03',
      title: { sr: 'Makeup Artist Upgrade', en: 'Makeup Artist Upgrade' },
      subtitle: {
        sr: 'Jer uvek postoji prostor za još jedan korak napred.',
        en: 'Because there’s always room to take your skills further.',
      },
      description: [
        {
          sr: 'Makeup Artist Upgrade je individualna jednodnevna edukacija za profesionalne šminkere koji žele da podignu svoj rad na viši nivo, istraže nove pristupe i posvete vreme detaljima koji prave razliku. Jedan dan, jedna tehnika i sva pažnja usmerena samo na tebe.',
          en: 'Makeup Artist Upgrade is an individual, one-day training experience for professional makeup artists who want to take their work to the next level, explore new approaches, and focus on the details that make a difference. One day, one technique, and all the attention dedicated to you.',
        },
      ],
      facts: [
        individual,
        { icon: 'calendar', text: { sr: 'Jednodnevna edukacija', en: 'One-day course' } },
        { icon: 'spark', text: { sr: 'Tehniku bira polaznik', en: 'Technique chosen by the student' } },
      ],
      details: [
        {
          id: 'how',
          title: { sr: 'Kako izgleda edukacija', en: 'How the training works' },
          blocks: [
            {
              type: 'paragraphs',
              items: [
                {
                  sr: 'Ova edukacija ne prati unapred zadat program. Tehniku bira polaznik, a svaki korak prolazimo temeljno, bez preskakanja i površnog rada.',
                  en: 'This training doesn’t follow a fixed program. You choose the technique, and we explore every step thoroughly, without shortcuts or superficial explanations.',
                },
                {
                  sr: 'Posvećujemo se svakom detalju: od pripreme kože i izbora proizvoda, preko tekstura i tehnika nanošenja, do završnih elemenata zbog kojih jedan makeup look postaje zaista poseban.',
                  en: 'We focus on every detail: from skin preparation and product selection to textures, application techniques, and the finishing touches that make a makeup look truly special.',
                },
              ],
            },
          ],
        },
        {
          id: 'refine',
          title: { sr: 'Šta ćemo usavršavati', en: 'What we’ll refine' },
          blocks: [
            {
              type: 'paragraphs',
              items: [
                {
                  sr: 'Usput gledamo tvoju ruku i tvoje navike, ispravljamo sitnice koje prave veliku razliku i delimo trikove koji se inače uče tek kroz godine rada u salonu.',
                  en: 'We’ll observe your technique and working habits, refine the small details that make a big difference, and share practical insights usually gained through years of salon experience.',
                },
                {
                  sr: 'Ovde ne posmatraš kako neko drugi radi. Ovo je prilika da iz neposrednog rada sa iskusnim šminkerom izvučeš maksimum: da pitaš, istražuješ, isprobavaš i razumeš zašto se određeni koraci rade baš na određeni način.',
                  en: 'You won’t simply watch someone else work. This is an opportunity to make the most of direct, hands-on training with an experienced makeup artist: to ask questions, explore, experiment, and understand why each step is performed in a particular way.',
                },
              ],
            },
          ],
        },
      ],
      instagramUrl: lidijaContact.instagram.url,
    },
  ],
  // The student reviews are all about Lidija's education programs.
  testimonials: reviews,
  testimonialsSubtitle: {
    sr: 'Iskustva sa Lidijinih profesionalnih edukacija',
    en: 'Experiences from Lidija’s professional makeup courses',
  },
};

export const anaEducations: EducationArtist = {
  id: 'ana',
  name: anaContact.name,
  subtitle: {
    sr: 'Nauči da istakneš svoju lepotu, na svoj način.',
    en: 'Learn to enhance your natural beauty, your own way.',
  },
  courses: [
    {
      id: 'nasminkaj-se-sama',
      number: '04',
      title: { sr: 'Našminkaj se sama', en: 'Do Your Own Makeup' },
      subtitle: {
        sr: 'Nauči da samostalno kreiraš dnevni i svečani makeup.',
        en: 'Learn to create your own everyday and special-occasion makeup.',
      },
      // Short enough to stay fully visible: no accordions for this course.
      description: [
        {
          sr: 'Kurs Našminkaj se sama je kurs šminkanja namenjen osobama bez ikakvog predznanja o šminkanju, ali i svima koji žele da unaprede svoje znanje. Kroz ovaj kurs ćeš savladati korak po korak jedan dnevni makeup i jedan makeup za svečane proslave.',
          en: 'The Do Your Own Makeup course is designed for complete beginners, as well as anyone who wants to improve their makeup skills. Step by step, you’ll learn how to create one everyday makeup look and one look for special occasions.',
        },
        {
          sr: 'Zajedno prolazimo kroz proizvode, tehnike i trikove uz koje ćeš naučiti da se samostalno šminkaš i izvučeš maksimum iz svoje makeup rutine. Kurs može biti individualan ili poluindividualan.',
          en: 'Together, we’ll explore products, techniques, and practical tips that will help you apply your own makeup confidently and get the most out of your makeup routine. The course is available individually or in a semi-private format.',
        },
      ],
      facts: [
        { icon: 'spark', text: { sr: 'Bez predznanja', en: 'No previous experience required' } },
        {
          icon: 'users',
          text: { sr: 'Individualno ili poluindividualno', en: 'Individual or semi-private' },
        },
        {
          icon: 'notes',
          text: { sr: 'Uključena personalizovana skripta', en: 'Personalized course notes included' },
        },
      ],
      details: [],
      price: { label: { sr: 'Cena edukacije', en: 'Course price' }, value: '100 €' },
      instagramUrl: anaContact.instagram.url,
    },
  ],
  // Reviews of Ana's course only.
  testimonials: anaReviews,
  testimonialsSubtitle: {
    sr: 'Iskustva sa Aninog kursa „Našminkaj se sama“',
    en: 'Experiences from Ana’s “Do Your Own Makeup” course',
  },
};

export const educationArtists = [lidijaEducations, anaEducations];

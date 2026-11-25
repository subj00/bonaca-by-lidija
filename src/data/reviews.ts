import type { Locale } from '@/i18n/config';

/**
 * Student reviews. The Serbian texts are the originals, kept exactly as provided
 * by the studio; the English texts are faithful translations of them.
 */
export interface Review {
  name: string;
  text: Record<Locale, string>;
}

export const reviews: Review[] = [
  {
    name: 'Marina Mladenović',
    text: {
      sr: 'Profesionalna škola šminkanja! Kurs koji sam završila 2025. godine pružio mi je kompletno znanje, od teorijskih osnova do praktičnog rada na modelima. Zahvaljujući sjajnom programu i mentorstvu najbolje Lidije, uspela sam da se odmah nakon završetka formiram kao samostalni šminker. Sve preporuke za svakoga ko želi OZBILJNU i kvalitetnu edukaciju!',
      en: 'A truly professional makeup school! The course I completed in 2025 gave me complete knowledge, from the theoretical foundations to hands-on work with models. Thanks to an excellent program and the mentorship of Lidija, simply the best, I was able to start working as an independent makeup artist right after finishing. I recommend it to anyone who wants a SERIOUS, high-quality education!',
    },
  },
  {
    name: 'Magdalena Krstić',
    text: {
      sr: 'Na edukaciji koristimo baš mnogo različitih proizvoda. Sviđa mi se što nas je samo četiri, jer Lidija može stvarno da se posveti svakoj od nas. Atmosfera je predivna, Lidija ništa ne gatekeepuje, nego nam uvek pokaže sve što zna i deli sa nama svoje iskustvo. Mnogo su nam značili i saveti iz njenog rada sa klijentima, kakve situacije možemo da očekujemo i kako da se postavimo prema njima. Prelepo iskustvo i stvarno sve preporuke!',
      en: 'During the course we work with a wide variety of products. I love that there are only four of us, because Lidija can truly dedicate herself to each one of us. The atmosphere is wonderful. Lidija doesn’t gatekeep anything; she always shows us everything she knows and shares her experience with us. Her advice from working with clients also meant a lot to us: what situations we can expect and how to handle them. A beautiful experience, and I truly recommend it!',
    },
  },
  {
    name: 'Ana Krotić',
    text: {
      sr: 'Baznu edukaciju završila sam kod Lidije i ponovila bih svoj izbor bez razmišljanja! Pored ogromnog znanja, nesebično je delila savete i bila tu za svako pitanje, sa beskrajno strpljenja da savladamo sve što mi nije išlo. Posebno su mi značili domaći zadaci za kontinuitet, a atmosfera je uvek bila opuštena i prijatna. Preporuka od srca!',
      en: 'I completed the basic course with Lidija, and I would make the same choice again without a second thought! Along with her vast knowledge, she generously shared advice and was there for every question, with endless patience until we mastered everything I found difficult. The homework assignments, which kept me practising consistently, meant a lot to me, and the atmosphere was always relaxed and pleasant. I recommend her with all my heart!',
    },
  },
  {
    name: 'Anja Grbić',
    text: {
      sr: 'Lidija je pre svega jedan divan čovek, nesebičan edukator koji svoje znanje prenosi na izuzetno kvalitetan, jasan i produktivan način. Njena podrška ne prestaje završetkom edukacije, uvek je tu, a ne postoji pitanje na koje nisam dobila odgovor. Zahvaljujući njenom pristupu, tokom edukacije sam stekla ne samo znanje već i sigurnost u sebe i svoje sposobnosti. Već tada sam se osećala spremno za samostalan rad i sigurno zakoračila u svet šminkanja.',
      en: 'Above all, Lidija is a wonderful person and a generous educator who passes on her knowledge in an exceptionally thorough, clear and productive way. Her support doesn’t end when the course does: she is always there, and there was never a question she left unanswered. Thanks to her approach, I gained not only knowledge during the course but also confidence in myself and my abilities. Even then, I already felt ready to work independently, and I stepped confidently into the world of makeup.',
    },
  },
];

/**
 * Reviews of Ana's course “Našminkaj se sama”, in the order provided by the
 * studio. Shown only in Ana's slider, never mixed with Lidija's reviews.
 */
export const anaReviews: Review[] = [
  {
    name: 'Mina Ravić',
    text: {
      sr: 'Kurs šminkanja je bio izuzetno koristan i naučila sam od pravilne pripreme i šminkanja tena do isticanja očiju. Došla sam kao potpuni početnik, a otišla sa mnogo novog znanja. Od kada sam naučila da pravilno našminkam samu sebe, osećam se mnogo sigurnije i lepše. Ana je jako fina i nije me bilo sramota da pitam bilo šta vezano za samu tehniku i same proizvode. Posebno mi se dopada što sam dobila skriptu u kojoj je detaljno objašnjeno sve što smo zajedno radile.',
      en: 'The makeup course was extremely useful, and I learned everything from properly prepping and doing my complexion to making my eyes stand out. I came as a complete beginner and left with so much new knowledge. Ever since I learned how to do my own makeup properly, I feel much more confident and beautiful. Ana is really kind, and I wasn’t embarrassed to ask her anything about the technique or the products. I especially love that I got course notes explaining in detail everything we did together.',
    },
  },
  {
    name: 'Tara Batričević',
    text: {
      sr: 'Kurs mi se baš svideo, naučila sam mnogo novih stvari i korisnih trikova koji su mi dosta pomogli. Skripta mi je puno značila da sve još jednom lepo obnovim, a nakon kursa sam kupila i nekoliko novih proizvoda koji su mi znatno poboljšali pripremu kože i podlogu za šminku.',
      en: 'I really loved the course. I learned lots of new things and useful tricks that helped me a lot. The course notes meant a lot to me for going over everything once more, and after the course I also bought a few new products that have made my skin prep and makeup base so much better.',
    },
  },
  {
    name: 'Jovana Jovanović',
    text: {
      sr: 'Kod Ane na kursu mi je pre svega bilo opušteno, i na zabavan i stručan način sam mogla da naučim kako da pravilnije koristim šminku iz svog nesesera, šta je potrebno da dokupim da bi moj makeup bio bolji, kako da koristim četkice i blendere. Naučila sam da koristim kremaste proizvode od kojih sam toliko dugo bežala, i da našminkam oči senkama, a da ne izgledam kao panda.',
      en: 'Above all, Ana’s course felt relaxed, and in a fun but professional way I learned how to use the makeup from my own makeup bag better, what I need to buy to make my makeup look better, and how to use brushes and beauty blenders. I learned to use cream products, which I’d been running away from for so long, and to do my eyes with eyeshadow without looking like a panda.',
    },
  },
  {
    name: 'Mina Popović',
    text: {
      sr: 'Ja sam na kursu odabrala kombinovano, i drogerijsku i high-end šminku, i koristile smo i moju i šminku iz salona. Pre svega na kursu mi je bilo jako prijatno i osetila sam se baš slobodno da pitam sve što mi nije bilo jasno. Ana je uočila moje propuste i potrudila se da mi ukaže na njih i da me ispravi. Dan danas nekad koristim skriptu, bilo to kada idem da dokupim šminku ili kada želim da se jače našminkam, lakše mi je da pročitam korake i budem sigurna kako nešto da uradim.',
      en: 'For my course I chose a mix of drugstore and high-end makeup, and we used both my own makeup and the salon’s. Above all, I felt really comfortable during the course and completely free to ask about anything that wasn’t clear to me. Ana noticed my mistakes and made the effort to point them out and correct me. To this day I sometimes use the course notes, whether I’m going to buy more makeup or want to do a bolder look; it’s easier for me to read the steps and be sure how to do something.',
    },
  },
];

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
    name: 'Marina Mladenovic',
    text: {
      sr: 'Profesionalna škola šminkanja! Kurs koji sam završila 2025. godine pružio mi je kompletno znanje, od teorijskih osnova do praktičnog rada na modelima. Zahvaljujući sjajnom programu i mentorstvu najbolje Lidije, uspela sam da se odmah nakon završetka formiram kao samostalni šminker. Sve preporuke za svakoga ko želi OZBILJNU i kvalitetnu edukaciju!',
      en: 'A truly professional makeup school! The course I completed in 2025 gave me complete knowledge, from the theoretical foundations to hands-on work with models. Thanks to an excellent program and the mentorship of Lidija, simply the best, I was able to start working as an independent makeup artist right after finishing. I recommend it to anyone who wants a SERIOUS, high-quality education!',
    },
  },
  {
    name: 'Magdalena Krstic',
    text: {
      sr: 'Na edukaciji koristimo baš mnogo različitih proizvoda. Sviđa mi se što nas je samo četiri, jer Lidija može stvarno da se posveti svakoj od nas. Atmosfera je predivna, Lidija ništa ne gatekeepuje, nego nam uvek pokaže sve što zna i deli sa nama svoje iskustvo. Mnogo su nam značili i saveti iz njenog rada sa klijentima, kakve situacije možemo da očekujemo i kako da se postavimo prema njima. Prelepo iskustvo i stvarno sve preporuke!',
      en: 'During the course we work with a wide variety of products. I love that there are only four of us, because Lidija can truly dedicate herself to each one of us. The atmosphere is wonderful. Lidija doesn’t gatekeep anything; she always shows us everything she knows and shares her experience with us. Her advice from working with clients also meant a lot to us: what situations we can expect and how to handle them. A beautiful experience, and I truly recommend it!',
    },
  },
  {
    name: 'Ana Krotic',
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

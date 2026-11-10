/**
 * Student reviews, kept exactly as written by the students.
 * Reviews are written in Serbian and shown unchanged on every locale.
 */
export interface Review {
  name: string;
  text: string;
}

export const reviewsLanguage = 'sr-Latn';

export const reviews: Review[] = [
  {
    name: 'Marina Mladenovic',
    text: 'Profesionalna škola šminkanja! Kurs koji sam završila 2025. godine pružio mi je kompletno znanje, od teorijskih osnova do praktičnog rada na modelima. Zahvaljujući sjajnom programu i mentorstvu najbolje Lidije, uspela sam da se odmah nakon završetka formiram kao samostalni šminker. Sve preporuke za svakoga ko želi OZBILJNU i kvalitetnu edukaciju!',
  },
  {
    name: 'Magdalena Krstic',
    text: 'Stvarno sam prezadovoljna edukacijom. Koristimo baš mnogo različitih proizvoda, imamo priliku svašta da isprobamo. Mnogo mi se sviđa što nas je samo četiri, jer Lidija može stvarno da se posveti svakoj od nas. Atmosfera je predivna, Lidija ništa ne gatekeepuje, nego nam uvek pokaže sve što zna i deli sa nama svoje iskustvo. Mnogo su nam značili i saveti iz njenog rada sa klijentima, kakve situacije možemo da očekujemo i kako da se postavimo prema njima, mislim da nam je to baš korisno za dalje. Sve u svemu, prelepo iskustvo i stvarno sve preporuke!',
  },
  {
    name: 'Ana Krotic',
    text: 'Baznu edukaciju završila sam kod Lidije i ponovila bih svoj izbor bez razmišljanja! Pored ogromnog znanja, nesebično je delila savete i bila tu za svako pitanje, sa beskrajno strpljenja da savladamo sve što mi nije išlo. Posebno su mi značili domaći zadaci za kontinuitet, a atmosfera je uvek bila opuštena i prijatna. Preporuka od srca!',
  },
  {
    name: 'Anja Grbić',
    text: 'Lidija je pre svega jedan divan čovek, nesebičan edukator koji svoje znanje prenosi na izuzetno kvalitetan, jasan i produktivan način. Njena podrška ne prestaje završetkom edukacije, uvek je tu za sva pitanja, nedoumice i savete, a ne postoji pitanje na koje nisam dobila odgovor. Zahvaljujući njenom pristupu, tokom edukacije sam stekla ne samo znanje već i sigurnost u sebe i svoje sposobnosti. Već tada sam se osećala spremno za samostalan rad i sigurno zakoračila u svet šminkanja. Od srca preporučujem Lidiju svima koji žele da uče od nekoga ko nesebično deli svoje znanje i zaista se posvećuje svojim polaznicima.',
  },
];

# SEO izveštaj: Bonaca by Lidija

Stanje: 26. 11. 2026. Domen: `https://bonacabylidija.rs`. Hosting: Netlify.

## 1. Postojeće stanje (pre ovih izmena)

Sajt je već imao dobru osnovu:

- Po jedna stranica po jeziku: SR na `/`, EN na `/en/`.
- `title`, `meta description`, canonical, `hreflang` sa `x-default`, Open Graph i Twitter kartica.
- Sitemap (`@astrojs/sitemap`) sa alternativnim jezicima i `robots.txt`.
- JSON-LD sa ovim tipovima: `WebSite`, `BeautySalon` (adresa i Google Business Profile), `Person` za Lidiju i Anu, `Service` i `Course`.
- Optimizovane slike (Astro `Image`), naslovna slika sa prioritetom, fontovi bez pomeranja sadržaja.
- Opisni `alt` tekstovi na oba jezika i ispravna hijerarhija naslova (h1 → h2 → h3 → h4).

## 2. Pronađeni problemi

| # | Problem | Uticaj |
|---|---|---|
| 1 | `site` je bio `https://example.com`, pa su canonical, hreflang, sitemap i og:image pokazivali na pogrešan domen | kritično |
| 2 | Deploy preview i branch deploy na Netlify-ju su mogli da budu indeksirani | visok |
| 3 | Srpski jezik je bio označen kao `sr-Latn`, bez regiona (`sr-Latn-RS`) | srednji |
| 4 | Nije postojala Netlify konfiguracija; ostao je `vercel.json` za drugi hosting | srednji |
| 5 | Meta opis je stavljao lash & brow lift ispred kurseva, a usluge nisu bile poređane po prioritetu | srednji |
| 6 | JSON-LD: nema `WebPage` ni `logo`; Instagram profili umetnica su bili navedeni kao profili firme; e-mail je bio u obliku `mailto:`; usluge su vodile na opštu sekciju umesto na tačan deo strane | srednji |
| 7 | Nije postojala posebna 404 stranica (Netlify prikazuje svoju, sa ispravnim statusom 404) | nizak |
| 8 | Slika za deljenje je 1200×1097; idealan format je 1200×630 | nizak |

## 3. Šta je urađeno

- **Domen:** u `astro.config.ts` je postavljen `site: 'https://bonacabylidija.rs'`. Svi apsolutni URL-ovi (canonical, hreflang, sitemap, robots, og:image, JSON-LD) sada koriste ovaj domen.
- **Jezik:**
  - `lang` i `hreflang` za srpski su sada `sr-Latn-RS`.
  - Engleski ostaje `en`, a `x-default` vodi na srpsku verziju.
  - Svaka verzija ima canonical na samu sebe, a alternativne veze važe u oba smera.
- **Indeksiranje po okruženju** (`src/config/site.ts`, `allowIndexing`):
  - Produkcija: `index, follow, max-image-preview:large`, a `robots.txt` navodi sitemap.
  - Deploy preview, branch deploy i lokalni dev server: `noindex, nofollow` i nema navođenja sitemapa.
  - `robots.txt` i tada dozvoljava pristup. Kad bi ga blokirao, Google ne bi mogao ni da pročita `noindex`.
- **`netlify.toml`:**
  - Build komanda, folder `dist` i Node 24.
  - Dugo keširanje za `/_astro/*`, što je dobro za Core Web Vitals pri ponovnim posetama.
  - Namerno nisu dodati redirekti za domen, jer bi bili u sukobu sa onima koje Netlify sam pravi (vidi deo 9). Jedino pravilo je za englesku 404 stranicu.
- **`vercel.json` je obrisan**, jer se taj hosting više ne koristi.
- **Meta opisi su prepisani posebno za svaki jezik** (nisu bukvalni prevod). Šminkanje i kursevi su na prvom mestu, lash & brow lift na kraju.
- **Open Graph:** dodat je `og:image:type`.
- **JSON-LD:**
  - Dodat je `WebPage`.
  - `BeautySalon` sada ima `name: "Bonaca by Lidija"` (isti naziv kao na Google Business Profile-u), `alternateName: "Bonaca"`, `logo` (ImageObject) i `url` na koren sajta. Kao `sameAs` je naveden samo Google Business Profile.
  - Instagram profili ostaju kod osoba (`Person`), a e-mail je sada u običnom obliku.
  - Usluge vode na tačne delove strane: `#usluge-lidija`, `#usluge-ana`, `#usluge-lash-brow-lift`.
  - Kursevi imaju kao `provider` studio, a kao `creator` umetnicu.
- **Bez izmena:** dizajn, vidljivi tekst, navigacija i funkcionalnost. Proverila sam da CSS pravila vezana za jezik i dalje važe.

## 3a. Dopune posle odobrenja

- **404 stranica** u dizajnu sajta, na oba jezika: veliki „404“, naslov u stilu naslova sekcija, kratka rečenica i dugme za povratak na početnu. Ima `noindex, nofollow`, bez canonical-a i hreflang-a, i nije u sitemapu.
  - `/404.html` (srpski) Netlify sam prikazuje sa statusom 404.
  - Za adrese pod `/en/` u `netlify.toml` postoji pravilo koje prikazuje englesku verziju (`/en/404/`), isto sa statusom 404. Pravilo važi samo kada fajl ne postoji, pa ne utiče na prave stranice.
- **Skriveni `h1`** je dobio opisni tekst (vidi deo 8). Vidi ga samo čitač ekrana i pretraživač, izgled se ne menja.

## 3b. Druga runda: teren, kursevi, slika za deljenje, alt tekstovi

Podaci potvrđeni od studija: šminkanje na terenu i van Beograda; kursevi uživo u studiju, na srpskom i engleskom, termini po dogovoru; Bonaca nema svoj Instagram.

- **Meta opisi** (oko 155 znakova, da ih Google ne seče):
  - SR: „Profesionalno šminkanje za venčanja i proslave u Novom Beogradu, na terenu i van Beograda. Kursevi šminkanja uživo, na srpskom i engleskom. Lash i brow lift.“
  - EN: „Professional makeup for weddings and events in New Belgrade, on location and outside Belgrade. In-person makeup courses in Serbian & English. Lash & brow lift.“
- **Šminkanje na terenu** je dodato kao posebna usluga (`Service`, izvođač Lidija): „u Beogradu i u drugim gradovima, po dogovoru“. `areaServed` namerno nije postavljen, jer gradovi nisu navedeni; samo Beograd bi bilo netačno. Oblast studija (Blok 63, Novi Beograd, Beograd) ostaje kakva je.
- **Kursevi** (`Course`):
  - Sva četiri kursa su u `ItemList` listi, sa posebnim URL-om za svaki (sidro na strani). To je oznaka koju Google koristi za prikaz liste kurseva (carousel). Google traži najmanje tri kursa, a ima ih četiri.
  - Svaki kurs ima: `provider` (studio), `creator` i predavača (`instructor`), `availableLanguage` (srpski i engleski), i `hasCourseInstance` sa `courseMode: Onsite` i lokacijom u studiju.
  - Trajanje je preuzeto sa strane: Master the Basics 2 meseca, Express Makeup Artistry 2 nedelje, Makeup Artist Upgrade 1 dan. Za „Našminkaj se sama“ trajanje nije navedeno, pa nije ni dodato.
  - Nivo i predznanje su preuzeti iz opisa: početni nivo za Master the Basics i „Našminkaj se sama“; predznanje za Express; profesionalno iskustvo za Upgrade.
  - Sertifikat (`educationalCredentialAwarded`) samo za prva dva kursa, jer je samo kod njih naveden na strani.
  - Cena samo za „Našminkaj se sama“ (100 €). Za Lidijine kurseve cene nema, kako je dogovoreno.
  - Termini „po dogovoru“ ne mogu da se opišu poljem za raspored, pa je raspored izostavljen. Napomena: na strani za Master the Basics piše „Dva termina godišnje: januar/februar i oktobar“, što se razlikuje od „po dogovoru“. Treba potvrditi šta važi.
- **Važno o prikazu kurseva u Google-u:** prema Google-ovoj dokumentaciji, lista kurseva (carousel) se trenutno prikazuje samo za pretrage na engleskom. Poseban prikaz „Course info“ Google je ukinuo 2025. Oznake su ipak korisne, jer Google bolje razume ponudu, ali poseban izgled rezultata nije garantovan, posebno na srpskom.
- **Osobe:** Lidija i Ana imaju `knowsAbout` sa uslugama koje rade, kako su nazvane na strani. Godine iskustva, kvalifikacije i biografija nisu dodati, jer ih nema na sajtu.
- **Slika za deljenje:** nova slika `src/assets/share/bonaca-share.jpg`, 1200×630, napravljena od postojećeg logoa. Logo je u punoj razmeri, bez deformacije, centriran na Linen pozadini sa tankim okvirom u Smoky Rose boji. `og:image`, `twitter:image`, dimenzije, tip i alt tekst („Logo studija Bonaca by Lidija“) su podešeni na obe stranice. Naslovna fotografija se i dalje koristi u JSON-LD kao slika studija i stranice.
- **Alt tekstovi galerije:** svih 26 fotografija ima poseban opis, napisan na osnovu onoga što je stvarno na fotografiji (npr. „Svadbena šminka sa svetlucavim senkama i ajlajnerom“, „Brow lift, pre i posle“, „Večernja šminka sa tamnim smokey očima“). Nijedan opis se ne ponavlja. Ako se kasnije doda nova fotografija bez opisa, dobija opšti opis sa rednim brojem.

## 4. Izmenjeni i novi fajlovi

- Izmenjeni:
  - `astro.config.ts`
  - `src/i18n/config.ts`
  - `src/config/site.ts`
  - `src/pages/robots.txt.ts`
  - `src/components/seo/SeoHead.astro`
  - `src/components/seo/StructuredData.astro`
  - `src/i18n/dictionaries.ts` (`meta.description`, `home.hero.heading`, tekstovi 404 stranice)
  - `src/components/home/HomeHero.astro` (tekst skrivenog `h1`)
  - `src/layouts/BaseLayout.astro` (stranice van mape ruta, kao 404, dobijaju `noindex`; nova slika za deljenje)
  - `src/data/serviceImages.ts` (alt tekst za svaku fotografiju galerije)
- Novi:
  - `netlify.toml`
  - `src/pages/404.astro`, `src/pages/en/404.astro`, `src/components/sections/NotFound.astro`
  - `src/assets/share/bonaca-share.jpg`
  - `docs/seo-izvestaj.md`
- Obrisan:
  - `vercel.json`

## 5. Naslovi i opisi po stranicama

| Stranica | Title | Meta description |
|---|---|---|
| `/` (SR) | Šminkanje i kursevi šminkanja, Novi Beograd \| Bonaca by Lidija | Profesionalno šminkanje za venčanja, proslave i fotografisanje u Novom Beogradu (Blok 63). Kursevi šminkanja za početnike, šminkere i samostalno šminkanje. Lash i brow lift. |
| `/en/` (EN) | Makeup artist & makeup courses in Belgrade \| Bonaca by Lidija | Professional makeup for weddings, celebrations and photoshoots in New Belgrade (Novi Beograd). Makeup courses for beginners, makeup artists and self-makeup. Lash & brow lift. |

Naslovi su ostali isti, jer su već bili dobri: ključni pojam je na početku, a brend na kraju, i dužina je oko 60 znakova.

## 6. Strukturirani podaci

| Tip | Opis |
|---|---|
| `WebSite` | Naziv sajta i jezici |
| `WebPage` | Po jedan za svaki jezik |
| `BeautySalon` | `LocalBusiness`, a time i `Organization`: adresa, oblast usluga, mapa, logo |
| `Person` | Lidija Vukmirović i Ana Perić |
| `Service` | 6 usluga, kao `makesOffer` (uključujući šminkanje na terenu) |
| `ItemList` + `Course` + `CourseInstance` | 4 kursa, svaki sa svojim URL-om, jezikom, načinom izvođenja (uživo) i trajanjem gde je navedeno; cena samo za „Našminkaj se sama“ (100 €) |

- **Namerno izostavljeno:** telefon, radno vreme, koordinate, cene koje nisu na sajtu, ocene i recenzije (rating), godine iskustva i kvalifikacije.
- **`BreadcrumbList` nije dodat.** Sajt ima samo jednu stranicu po jeziku, pa bi takva navigacija imala samo jednu stavku, a Google to ne prikazuje.
- **Kursevi:** vidi deo 3b.

## 7. Predlog ključnih reči

Ovo su **predlozi zasnovani na sadržaju sajta, bez podataka o broju pretraga.** Obim pretrage i konkurenciju treba proveriti u Google Keyword Planner-u ili Search Console-u (posle 4–8 nedelja rada sajta). Google uglavnom sam izjednačava reči sa i bez dijakritika (npr. „sminkanje“ i „šminkanje“). Zato se piše pravilno, sa dijakriticima, bez ponavljanja varijanti.

Pregled javnih rezultata pretrage (oglasi, katalozi salona kao PlanPlus i Halo oglasi) pokazuje kako konkurencija i klijenti opisuju usluge:
- **„profesionalno šminkanje“** je najčešći naziv usluge; ovaj sajt ga već koristi kao glavni.
- **„dolazak na adresu“** se u oglasima koristi češće od „šminkanje na terenu“. Na sajtu stoji „na terenu“; „dolazak na adresu“ je dobar kandidat za jednu vidljivu rečenicu (predlog u delu 8).
- Katalozi grupišu šminkere **po opštinama** (npr. Novi Beograd, Vračar, Voždovac, Zemun). Za studio u Bloku 63 prirodna lokalna oznaka je **Novi Beograd**, a šira **Beograd**.
- Ponuda kurseva je u rezultatima slabo zastupljena, pa je konkurencija za „kurs šminkanja Beograd“ verovatno manja nego za usluge šminkanja. To je dobra prilika za ovaj sajt.

**Srpski (`/`)**
- **Primarne:** profesionalno šminkanje, šminkanje Novi Beograd, šminkanje Beograd, kurs šminkanja Beograd, kursevi šminkanja.
- **Usluge:** šminkanje za venčanje, šminkanje mlade / svadbena šminka, šminkanje za proslave i svečanosti, večernja šminka, šminkanje na terenu / dolazak na adresu.
- **Kursevi:** kurs šminkanja za početnike, kurs šminkanja za sebe / kurs samošminkanja, individualni kurs šminkanja, individualni časovi šminkanja, edukacija za šminkere, usavršavanje za šminkere.
- **Tretmani:** lash lift Novi Beograd, brow lift Beograd, farbanje trepavica i obrva.
- **„Škola šminkanja“:** samo ako studio sebe tako predstavlja (jedna recenzija ga koristi, ali sajt ne).

**Engleski (`/en/`)**
- **Primarne:** makeup artist Belgrade, makeup courses Belgrade, professional makeup Belgrade.
- **Sekundarne:** bridal makeup Belgrade, wedding makeup artist Belgrade, on-location makeup Serbia, makeup course in English Belgrade, private makeup lessons, self-makeup course, makeup artist training, lash lift Belgrade, brow lift Belgrade.
- Engleska verzija ima dobru priliku kod stranaca koji žive u Beogradu, jer su kursevi dostupni na engleskom. Ovo vredi istaći vidljivo (predlog u delu 8).

**Delovi Beograda i drugi gradovi**
- Optimizacija ostaje na **Novom Beogradu i Beogradu**. Za druge opštine ne treba praviti posebne stranice niti nabrajati delove grada u tekstu, jer bi to bilo ponavljanje bez stvarnog sadržaja, a Google lokalne rezultate ionako vezuje za Google Business Profile i udaljenost.
- Za druge gradove: kada studio navede gradove u kojima najčešće radi (npr. za venčanja), mogu se jednom prirodno pomenuti u tekstu i dodati u `areaServed`. Do tada ostaje opšte „i van Beograda“.
- Izvan sajta najviše pomaže: redovne fotografije i odgovori na recenzije na Google Business Profile-u, kategorije profila (npr. šminker, kozmetički salon) i isti naziv i adresa u katalozima kao PlanPlus.

## 8. Podaci koji nedostaju

Već postoji u projektu:
- naziv i brend
- adresa (Vojvođanska 3, Blok 63, Novi Beograd, 11073)
- Google Business Profile link
- e-mail adrese i Instagram profili obe umetnice
- nazivi i opisi kurseva i ciljna grupa iz opisa
- logo
- naslovna fotografija

**1. Potrebno za završetak ove implementacije**
1. ~~Tačan naziv na Google Business Profile-u~~ – potvrđeno: „Bonaca by Lidija“. JSON-LD je usklađen.
2. ~~Instagram studija~~ – potvrđeno: Bonaca nema svoj profil, zvanični su `@lidija.vukmirovic` i `@artswithana`. JSON-LD već tako stoji.
3. ~~404 stranica~~ – urađena (vidi deo 3a).

**2. Preporučeno za lokalni SEO**
4. ~~Teren van Beograda~~ – potvrđeno. Ostaje: koji gradovi najčešće (opciono, za `areaServed`).
5. ~~Mesto, jezik i termini kurseva~~ – potvrđeno (uživo u studiju, SR i EN, po dogovoru). Ostaje: cene tri Lidijina kursa, kada budu mogle da se objave, i potvrda za Master the Basics (dva termina godišnje ili po dogovoru?).
6. Iskustvo i kvalifikacije Lidije i Ane, sa godinama rada (samo ono što žele da objave). Zasad ništa nije dodato.
7. ~~Slika za deljenje~~ – urađena od logoa.
8. ~~Alt tekstovi galerije~~ – urađeni.
9. Ključne reči koje vi smatrate najvažnijim (opciono; predlog je u delu 7).

**3. Opciono, za kasnije**
10. Posebne stranice za usluge i za svaki kurs. Ovo daje najveći dobitak, jer jedna stranica teško rangira za mnogo različitih pretraga.
11. Često postavljana pitanja (FAQ) kao vidljiv sadržaj.
12. Fotografije enterijera studija; godina osnivanja.

**Predlozi za tekst**
- ~~Skriveni `h1`~~ – odobren i primenjen: „Bonaca by Lidija – profesionalno šminkanje i kursevi šminkanja u Novom Beogradu“ (EN: „Bonaca by Lidija – professional makeup and makeup courses in Belgrade“).
- Nije primenjeno, čeka odobrenje: kod Lidijine usluge, uz „Mogućnost izlaska na teren“, dopuna „u Beogradu i van Beograda (dolazak na adresu)“ / EN „in Belgrade and beyond“.
- Nije primenjeno, čeka odobrenje: u sekciji Edukacije jedna kratka rečenica „Sve edukacije se održavaju uživo u studiju, na srpskom ili engleskom jeziku, a termini se zakazuju po dogovoru.“ / EN „All courses are held in person at the studio, in Serbian or English, with dates arranged individually.“
- Nije primenjeno, čeka odobrenje: u uvodu Lidijinih usluga mogao bi jednom prirodno da se pomene „Novi Beograd“.

## 9. Posle kupovine domena i postavljanja na Netlify

1. Netlify → Domain management: dodati `bonacabylidija.rs` kao **primary domain** i `www.bonacabylidija.rs` kao alias. Netlify tada sam preusmerava www, `*.netlify.app` i HTTP na `https://bonacabylidija.rs` (301).
2. Sačekati da se izda HTTPS sertifikat (Let's Encrypt) i proveriti da je „Force HTTPS“ uključen.
3. Proveriti da `https://bonacabylidija.rs/en` preusmerava na `/en/` (Pretty URLs).
4. Proveriti adrese:
   - `https://bonacabylidija.rs/robots.txt`
   - `https://bonacabylidija.rs/sitemap-index.xml`
   - `https://bonacabylidija.rs/sitemap-0.xml`
5. **Google Search Console, verifikacija preko DNS-a:** Add property → **Domain** → `bonacabylidija.rs` → kopirati TXT zapis (`google-site-verification=…`). Kod registra domena ili u Netlify DNS-u dodati TXT zapis za `@` sa tom vrednošću, pa kliknuti Verify. Promena DNS-a može da traje do nekoliko sati.
   - Alternativa je HTML tag: vrednost upisati u Netlify promenljivu `PUBLIC_GOOGLE_SITE_VERIFICATION` i ponovo pokrenuti deploy.
6. Search Console → Sitemaps → upisati `sitemap-index.xml` → Submit.
7. URL Inspection za `https://bonacabylidija.rs/` i `https://bonacabylidija.rs/en/` → Request indexing.
8. Proveriti strukturirane podatke na [Rich Results Test](https://search.google.com/test/rich-results) i [Schema Markup Validator](https://validator.schema.org/).
9. Proveriti pregled deljenja: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) i LinkedIn Post Inspector.
10. Na Google Business Profile-u upisati adresu sajta `https://bonacabylidija.rs/`.
11. Na jednom deploy preview-u proveriti da u HTML-u stoji `noindex, nofollow`.
12. Posle 2–4 nedelje u Search Console-u pogledati Pages (indeksiranje), Core Web Vitals i Performance (stvarne pretrage), pa doraditi ključne reči.

## 10. Ograničenja i preporuke

- Sajt ima jednu stranicu po jeziku, pa jedna stranica pokriva sve pretrage. Posebne stranice za usluge i kurseve bi najviše pomogle rangiranju za pretrage tipa „kurs šminkanja za početnike“.
- ~~Slika za deljenje je skoro kvadratna~~ – rešeno, nova slika je 1200×630.
- Podaci o terenu van Beograda i o kursevima (uživo, srpski i engleski, po dogovoru) sada postoje u meta opisu i JSON-LD, ali ne i u vidljivom tekstu. Google preporučuje da strukturirani podaci odgovaraju vidljivom sadržaju, pa je dobro dodati jednu kratku rečenicu na stranu (predlog je u delu 8, čeka odobrenje).
- `geo.region` i `geo.placename` meta tagovi su ostavljeni, ali Google ih ne koristi. Za lokalni SEO je mnogo važniji Google Business Profile.
- Core Web Vitals nisu mereni na produkciji (sajt još nije objavljen). Lokalni build koristi optimizovane slike, lazy loading i preload fonta.

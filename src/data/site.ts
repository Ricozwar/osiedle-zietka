export type UnitStatus = 'available' | 'reserved' | 'sold';

export interface Unit {
  id: number;
  area: number;
  note?: string;
  status: UnitStatus;
}

export interface GalleryImage {
  src: string;
  title: string;
  alt: string;
}

/** Prefiks ścieżek pod GitHub Pages (`/osiedle-zietka/`) */
export function asset(path: string): string {
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  return `${base}${path.replace(/^\//, '')}`;
}

export const site = {
  name: 'Osiedle Ziętka',
  tagline: 'Nowoczesne osiedle małych domów',
  locationShort: 'Knurów, ul. Ziętka',
  address: 'ul. Ziętka, Knurów 44-196',
  phone: '575 949 600',
  phoneHref: 'tel:+48575949600',
  email: 'syltomex@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61570728862173',
  salesHours: 'Pon–Pt 9:00–17:00 (umówienie wizyty telefonicznie)',
  developer: {
    name: 'Dane dewelopera — do uzupełnienia',
    legalForm: 'Forma prawna — do uzupełnienia',
    nip: 'NIP — do uzupełnienia',
    regon: 'REGON — do uzupełnienia',
    seat: 'Adres siedziby / miejsca działalności — do uzupełnienia',
    salesOffice: 'Adres lokalu sprzedaży — do uzupełnienia',
  },
  documentsUpdated: '2026-08-10',
  areaRange: 'ok. 40–77 m²',
  get heroImage() {
    return asset('images/hero.jpg');
  },
  get planImage() {
    return asset('images/gallery/05-plan.jpg');
  },
} as const;

export const gallery: GalleryImage[] = [
  {
    src: asset('images/gallery/01-elewacja.jpg'),
    title: 'Elewacja',
    alt: 'Wizualizacja elewacji domów Osiedle Ziętka',
  },
  {
    src: asset('images/gallery/02-taras.jpg'),
    title: 'Taras i ogród',
    alt: 'Tarasy domów szeregowych z ogrodem',
  },
  {
    src: asset('images/gallery/03-ulica.jpg'),
    title: 'Widok od ulicy',
    alt: 'Widok osiedla od strony ulicy',
  },
  {
    src: asset('images/gallery/04-ogrod.jpg'),
    title: 'Ogródek',
    alt: 'Prywatny ogródek przy domu',
  },
  {
    src: asset('images/gallery/05-plan.jpg'),
    title: 'Plan lokalizacji',
    alt: 'Plan lokalizacji Osiedle Ziętka w Knurowie',
  },
  {
    src: asset('images/gallery/06-rzut-10.jpg'),
    title: 'Rzut — segment 10',
    alt: 'Rzut parteru segmentu 10, 77 m²',
  },
  {
    src: asset('images/gallery/07-rzut-b.jpg'),
    title: 'Rzut — segment B',
    alt: 'Rzut segmentu B z układem 4 pokoi',
  },
  {
    src: asset('images/gallery/08-standard.jpg'),
    title: 'Standard wykończenia',
    alt: 'Standard wykończenia lokali Osiedle Ziętka',
  },
  {
    src: asset('images/gallery/09-parter.jpg'),
    title: 'Dom parterowy',
    alt: 'Parterowy dom z ogródkiem — wizualizacja',
  },
];

/** Statusy i metraże wstępne z materiałów FB — ceny wyłącznie z publikatorcen.pl */
export const units: Unit[] = [
  { id: 1, area: 43, status: 'reserved' },
  { id: 2, area: 51, status: 'reserved' },
  { id: 3, area: 40, status: 'available' },
  { id: 4, area: 44, status: 'reserved' },
  { id: 5, area: 44, status: 'reserved' },
  { id: 6, area: 48, note: 'strych', status: 'reserved' },
  { id: 7, area: 54, status: 'reserved' },
  { id: 8, area: 54, status: 'reserved' },
  { id: 9, area: 68, status: 'reserved' },
  { id: 10, area: 77, status: 'available' },
  { id: 11, area: 74, status: 'available' },
];

export const statusLabel: Record<UnitStatus, string> = {
  available: 'Dostępny',
  reserved: 'Rezerwacja',
  sold: 'Sprzedany',
};

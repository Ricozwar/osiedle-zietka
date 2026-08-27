export type UnitStatus = 'available' | 'reserved' | 'sold';

export type UnitImageKind = 'marketing' | 'plan' | 'attic' | 'map';

export interface UnitImage {
  src: string;
  label: string;
  kind: UnitImageKind;
}

export interface Unit {
  id: number;
  area: number;
  note?: string;
  status: UnitStatus;
  images: UnitImage[];
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

function seg(id: number, file: string): string {
  return asset(`images/segments/${id}/${file}`);
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
    name: 'STM DEVELOPMENT Sp. z o.o.',
    legalForm: 'Spółka z ograniczoną odpowiedzialnością',
    nip: '969 165 05 72',
    regon: '521413440',
    krs: '0000957256',
    shareCapital: '5 000,00 zł',
    seat: 'ul. Kazimierza Wielkiego 9B/7, 44-194 Knurów',
    salesOffice: 'ul. Kazimierza Wielkiego 9B/7, 44-194 Knurów',
  },
  investment: {
    landRegister: 'GL1G/00163210/2',
    buildingPermit: 'Do uzupełnienia',
    escrowBank: 'Do uzupełnienia',
    zoningLabel: 'Z24.MN',
    zoningTitle:
      'Miejscowy plan zagospodarowania przestrzennego miasta Knurów obejmujący rejon: ul. Jerzego Ziętka, ul. Szpitalnej, ul. 26 Stycznia, ul. Zimowej',
    zoningResolution: 'Uchwała nr XXIII/279/2020 Rady Miasta Knurów z dnia 17 kwietnia 2020 r.',
    plots: ['3537/199', '3537/201', '3537/202'],
    finishStandard: [
      'ogrzewanie podłogowe',
      'indywidualne ogrzewanie gazowe',
      'instalacja elektryczna',
      'instalacja wodno-kanalizacyjna',
      'instalacja centralnego ogrzewania',
      'tynki wewnętrzne',
      'wylewki',
      'stolarka okienna i drzwiowa',
      'elewacja budynków',
      'dwa miejsca postojowe dla lokalu',
      'droga wewnętrzna wykonana z kostki brukowej',
      'zagospodarowanie terenu inwestycji',
    ],
  },
  documentsUpdated: '2026-08-24',
  areaRange: 'ok. 40–77 m²',
  /** Widget Publikator Cen — ceny lokali (fetch przy buildzie; klucz odczytu) */
  publikator: {
    apiBase: 'https://widget.publikatorcen.pl',
    apiKey: 'puw_uytQwXem0yhCxYVzdnYxjZWgzczpVzpH',
    developerId: 'stm development| 9691650572',
    limit: 20,
  },
  /** Domyślnie zaznaczony segment w sekcji Plan (pierwszy dostępny) */
  defaultUnitId: 3,
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

const shared78: UnitImage[] = [
  { src: seg(7, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
  { src: seg(7, 'marketing.png'), label: 'Parter i poddasze', kind: 'marketing' },
  { src: seg(7, 'plan-parter.png'), label: 'Rzut parteru', kind: 'plan' },
  { src: seg(7, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
];

/** Statusy i metraże wstępne — ceny wyłącznie z publikatorcen.pl */
export const units: Unit[] = [
  {
    id: 1,
    area: 43,
    status: 'reserved',
    images: [
      { src: seg(1, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(1, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(1, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 2,
    area: 51,
    status: 'reserved',
    images: [
      { src: seg(2, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(2, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(2, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 3,
    area: 40,
    status: 'available',
    images: [
      { src: seg(3, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(3, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(3, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 4,
    area: 44,
    status: 'reserved',
    images: [
      { src: seg(4, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(4, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(4, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 5,
    area: 44,
    status: 'reserved',
    images: [
      { src: seg(5, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(5, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(5, 'marketing-alt.png'), label: 'Wariant rzutu', kind: 'marketing' },
      { src: seg(5, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 6,
    area: 48,
    status: 'reserved',
    images: [
      { src: seg(6, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(6, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(6, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 7,
    area: 54,
    note: 'parter + poddasze',
    status: 'reserved',
    images: shared78,
  },
  {
    id: 8,
    area: 54,
    note: 'parter + poddasze',
    status: 'reserved',
    images: shared78.map((img) => ({
      ...img,
      src: img.src.replace(`/segments/7/`, `/segments/8/`),
    })),
  },
  {
    id: 9,
    area: 68,
    status: 'reserved',
    images: [
      { src: seg(9, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(9, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(9, 'marketing-alt.png'), label: 'Wariant rzutu', kind: 'marketing' },
    ],
  },
  {
    id: 10,
    area: 77,
    status: 'available',
    images: [
      { src: seg(10, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(10, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(10, 'marketing-alt.png'), label: 'Wariant rzutu', kind: 'marketing' },
      { src: seg(10, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
  {
    id: 11,
    area: 74,
    status: 'available',
    images: [
      { src: seg(11, 'marketing.png'), label: 'Rzut marketingowy', kind: 'marketing' },
      { src: seg(11, 'marketing-3d.png'), label: 'Rzut 3D', kind: 'marketing' },
      { src: seg(11, 'plan.png'), label: 'Rzut techniczny', kind: 'plan' },
    ],
  },
];

export const statusLabel: Record<UnitStatus, string> = {
  available: 'Dostępny',
  reserved: 'Rezerwacja',
  sold: 'Sprzedany',
};

export function primaryUnitImage(unit: Unit): UnitImage | undefined {
  return (
    unit.images.find((img) => img.kind === 'marketing') ??
    unit.images.find((img) => img.kind === 'plan') ??
    unit.images[0]
  );
}

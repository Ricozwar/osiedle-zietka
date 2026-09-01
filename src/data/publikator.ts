import { site, type UnitStatus } from './site';

export type PriceHistoryRow = {
  changed_at?: string;
  old_price_per_sqm?: string | number;
  new_price_per_sqm?: string | number;
  old_total_price?: string | number;
  new_total_price?: string | number;
};

export type PcUnit = {
  id: string;
  unit_number: string;
  area: string;
  price_per_sqm: string;
  total_price: string;
  status: string;
  price_history?: PriceHistoryRow[];
};

export type PublikatorResult = {
  units: PcUnit[];
  fetchedAt: string;
  error: string | null;
};

function mapStatus(raw: string | undefined): UnitStatus | null {
  const s = String(raw || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '');
  if (!s) return null;
  if (/(sprzed|sold)/.test(s)) return 'sold';
  if (/(rezerw|reserv)/.test(s)) return 'reserved';
  if (/(dostep|wolny|available|free)/.test(s)) return 'available';
  return null;
}

function segmentId(unit: PcUnit): number | null {
  const m = String(unit.unit_number || '').match(/(?:LOKAL|SEGMENT)\s*(\d+)/i);
  if (!m) return null;
  const id = Number(m[1]);
  return Number.isFinite(id) ? id : null;
}

let cached: Promise<PublikatorResult> | null = null;

/** Fetch once per build; shared by cennik and plan. */
export function fetchPublikatorUnits(): Promise<PublikatorResult> {
  if (!cached) cached = loadPublikatorUnits();
  return cached;
}

async function loadPublikatorUnits(): Promise<PublikatorResult> {
  try {
    const url = new URL(`${site.publikator.apiBase}/api/pz/units`);
    url.searchParams.set('developer_id', site.publikator.developerId);
    url.searchParams.set('limit', String(site.publikator.limit));
    url.searchParams.set('include_price_history', 'true');

    const res = await fetch(url.toString(), {
      headers: {
        'X-API-Key': site.publikator.apiKey,
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      return {
        units: [],
        fetchedAt: '',
        error: `API zwróciło status ${res.status}`,
      };
    }

    const data = (await res.json()) as { success?: boolean; units?: PcUnit[] };
    const units = Array.isArray(data.units) ? data.units : [];
    return {
      units,
      fetchedAt: new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' }),
      error: units.length ? null : 'Brak lokali w odpowiedzi Publikator Cen.',
    };
  } catch (err) {
    return {
      units: [],
      fetchedAt: '',
      error: err instanceof Error ? err.message : 'Nie udało się pobrać cennika.',
    };
  }
}

/** Map segment id → status from Publikator (ignores unknown labels). */
export async function fetchStatusBySegment(): Promise<Map<number, UnitStatus>> {
  const { units } = await fetchPublikatorUnits();
  const map = new Map<number, UnitStatus>();
  for (const unit of units) {
    const id = segmentId(unit);
    const status = mapStatus(unit.status);
    if (id != null && status) map.set(id, status);
  }
  return map;
}

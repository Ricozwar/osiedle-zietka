# Osiedle Ziętka

One-pager inwestycji deweloperskiej (Astro + Tailwind) — zgodność informacyjna z art. 19a ustawy deweloperskiej, cennik z [publikatorcen.pl](https://publikatorcen.pl).

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona: http://localhost:4321

## Stack

- Astro 5/7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- TypeScript

## Co jest gotowe (v1)

- Sekcje: Hero, Oferta, Plan 1–11, Standard, Galeria, Cennik (slot embed), Lokalizacja, Dokumenty, Deweloper, Kontakt
- Sticky nav + mobile CTA + cookies
- Placeholdery danych firmowych i PDF prospektu

## Do uzupełnienia przed launch

1. PDF prospektu w `public/documents/`
2. Finalne renderzy w galerii (opcjonalnie)
3. Endpoint formularza kontaktowego

## Cennik (Publikator Cen)

Sekcja `#cennik` pobiera lokale z `widget.publikatorcen.pl` **przy `npm run build`** (klucz i `developerId` w `src/data/site.ts`). Po zmianie cen w panelu Publikatora trzeba przebudować i wypchnąć stronę.

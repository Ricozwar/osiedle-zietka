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

1. Dane dewelopera w `src/data/site.ts`
2. PDF prospektu w `public/documents/`
3. Kod embed Publikátor Cen w `src/components/Pricing.astro` (`#publikatorcen-embed`)
4. Finalne renderzy w galerii
5. Endpoint formularza kontaktowego

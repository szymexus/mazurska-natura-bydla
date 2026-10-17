# Mazurska Natura Bydła — prototyp strony

Lokalna, statyczna strona w Astro i TypeScript. Zwykły CSS, bez backendu i zewnętrznych fontów. Wersje zależności przypięte w `package-lock.json`, Node w `.nvmrc`.

## Uruchomienie

```bash
cd mazurska-natura-bydla
nvm use # jeżeli korzystasz z nvm
npm ci
npm run dev
```

Adres: `http://localhost:4321`. Zatrzymanie: `npx astro dev stop` (Astro 7 uruchamia serwer w tle).

```bash
npm run check
npm run build
npm run preview
```

Build trafia do `dist/`; może być serwowany przez dowolny hosting statyczny. Bez runtime'u Node na produkcji. W ograniczonym środowisku agenta polecenia uruchamiano z `ASTRO_TELEMETRY_DISABLED=1`, aby nie zapisywać ustawień poza projektem.

## Edycja

- `src/pages/index.astro` — treść i układ jednej strony.
- `src/styles/global.css` — style i wariant mobilny.
- `src/assets/` — zdjęcia przetwarzane przez Astro do responsywnych WebP.
- `public/` — logo i pasek finansowania wyodrębnione z dostarczonego DOCX.

Zdjęcie otwarcia pochodzi z `materialy/foteczki/IMG_1151.JPEG`. Zdjęcie współpracy, logo i pasek finansowania pochodzą z `Baner_EPI_80x200_wiekszy_opis_na_pierwszym_zdjeciu.docx`. Oryginały pozostają w materiałach poza repozytorium strony. Kopie JPEG w repo zostały zmniejszone do maksymalnie 2400 px szerokości i pozbawione metadanych EXIF/XMP/IPTC, w tym GPS. Astro generuje z nich responsywne WebP.

## Zakres prototypu

Sekcje: otwarcie, idea projektu, trzy kierunki, współpraca, finansowanie. Nawigacja prowadzi do sekcji na tej samej stronie. Mobilna nawigacja pokazuje „O projekcie” i „O nas”; kierunki są dostępne w treści strony. Bez pustej bazy wiedzy, formularzy i fikcyjnych danych kontaktowych.

Teksty redakcyjne są propozycją do akceptacji. Dane umowy i opis wsparcia przepisano z nowego bannera. Wykorzystanie jego oznaczeń nie stanowi weryfikacji wymagań umowy dla strony internetowej. Przed publikacją należy uzupełnić zatwierdzone dane partnerów i kontaktu oraz potwierdzić treści i oznaczenia z osobą odpowiedzialną za projekt.

## GitHub Pages

Repozytorium docelowe: `szymexus/mazurska-natura-bydla`, główna gałąź: `master`.
Przygotowany workflow `.github/workflows/deploy.yml` sprawdza typy, buduje i wdraża stronę po pushu do `master`. W ustawieniach repo należy włączyć Pages ze źródłem **GitHub Actions**.

Docelowy adres podglądu po udanym wdrożeniu: `https://szymexus.github.io/mazurska-natura-bydla/`. Samo przygotowanie konfiguracji nie oznacza publikacji.

Lokalnie ścieżka bazowa to `/`. Workflow ustawia `SITE_BASE=/mazurska-natura-bydla/` i `SITE_URL=https://szymexus.github.io`. Logo, favicon i pasek finansowania uwzględniają ścieżkę bazową.

Po zakupie własnej domeny należy zaktualizować te zmienne (`SITE_BASE=/`, `SITE_URL=https://<domena>`), skonfigurować DNS i domenę w ustawieniach Pages. Domena nie została jeszcze kupiona ani podpięta.

## Wersja robocza v2

Zmiany przygotowane na gałęzi `v2`: większa typografia (treść 18 px, nawigacja 19 px, przyciski 16 px), większy nagłówek i logo, pełna nawigacja mobilna w osobnym rzędzie. Zdjęcie grupowe zachowuje cały kadr. Ze stopką hasłową „Blisko stada. Blisko natury” połączono szerokie zdjęcie z `materialy/foteczki/Bengier.JPEG` (oryginał poza repo). Kopia ma maksymalnie 2400 px szerokości, bez metadanych; build generuje responsywne WebP. Zdjęcie zachowuje pełny kadr także na telefonie. Po pierwszej korekcie nagłówek strony powiększono o około 20%, a tekst otwarcia zmniejszono o około 10%. Propozycja nowej narracji o naturalnym życiu zwierząt i wspierającej roli technologii pozostaje do omówienia; treści projektu nie zostały jeszcze przepisane.

Zdjęcie końcowe jest po prawej stronie hasła „Blisko stada. Blisko natury” w dwukolumnowej zielonej sekcji. Na telefonie zdjęcie i tekst są ułożone pionowo. Wersja v2 jest przeznaczona do publikacji po połączeniu z `master`; workflow publikuje tylko `master`.

## Alternatywna narracja

`src/pages/natura/index.astro` — osobna propozycja pod `/natura/`, skupiona na naturalnym rytmie stada i technologii wspierającej hodowcę. Oznaczona jako wersja do porównania, z linkiem do obecnej strony oraz `noindex, nofollow`. Zachowuje opisywany przygotowawczy etap projektu i oznaczenia finansowania. Strona główna pozostaje niezależna. Treści wariantu są kopią do osobnego review; ewentualne wspólne zmiany układu trzeba uwzględnić w obu stronach.

# Wyszukiwalność i indeksowanie

Stan wdrożenia: 26 października 2026.

- `src/components/Seo.astro`: tytuł i opis, canonical na własnej domenie, Open Graph, dane JSON-LD Organization i WebSite (WebSite na stronie głównej).
- `public/sitemap.xml`: oficjalne adresy `/` i `/aktualnosci/`. Po dodaniu publicznej podstrony uzupełnić mapę. Nie dodawać kotwic wpisów ani roboczego `/natura/`. Nie generować fikcyjnych dat lastmod przy każdym buildzie.
- `public/robots.txt`: pozwala robotom pobierać treść i wskazuje mapę. Nie zastępuje kontroli indeksowania.
- `/natura/`: zachowany `noindex, nofollow`; strona musi pozostać dostępna robotom, żeby mogły odczytać noindex.
- Aktualności są jednym dokumentem z kotwicami. Osobne wyniki dla każdej relacji wymagałyby osobnych podstron; nie zmieniano tego modelu.

## Do wykonania z właścicielem konta

1. W https://search.google.com/search-console dodać usługę domenową `mazurskanaturabydla.pl`.
2. Skopiować wygenerowany rekord TXT do strefy DNS OVH; zachować rekordy WWW i poczty. Alternatywa: usługa prefiksu `https://mazurskanaturabydla.pl/` i wygenerowany plik HTML w `public/` albo znacznik weryfikacyjny.
3. Potwierdzić własność w Google, zgłosić `https://mazurskanaturabydla.pl/sitemap.xml`.
4. Sprawdzić oba oficjalne URL-e narzędziem kontroli adresu i poprosić o indeksowanie. Monitorować raport stron; nie powtarzać zgłoszeń codziennie.
5. Opcjonalnie skonfigurować https://www.bing.com/webmasters/ (obsługuje import z Search Console). Brave ma własny indeks; wynik Google nie potwierdza indeksacji Brave.
6. Uzyskać prawdziwe linki z witryn partnerów projektu. Nie wysyłać wiadomości w imieniu użytkownika bez zlecenia.

Samo wdrożenie kodu nie oznacza zgłoszenia mapy ani weryfikacji Search Console. Nie ma gwarancji terminu indeksacji lub pozycji.

## Repozytorium i hosting

Repozytorium publiczne: `szymexus/mazurska-natura-bydla`. Podczas kontroli API nie zwróciło nazwy planu konta; nie potwierdzono Pro. Nie zmieniano nazwy, opisu ani widoczności repozytorium.

GitHub Free udostępnia Pages z publicznych repozytoriów; Pro pozwala publikować także z prywatnego kodu. Publiczna strona i prywatne repozytorium to odrębne ustawienia. Nie przełączać repozytorium na prywatne bez potwierdzenia planu lub przygotowania innego hostingu.

OVH reklamuje hosting 100 MB w cenie domeny. Dokumentacja projektu potwierdza domenę i pocztę, ale nie aktywację hostingu WWW. Build w dniu kontroli zajmuje około 9,6 MB. Migracja statycznego `dist/` jest technicznie możliwa; wymaga sprawdzenia usługi, dostępu do publikacji, HTTPS i zmiany rekordów WWW z zachowaniem poczty. Domena i ścieżki powinny pozostać te same.

Źródła:
- https://developers.google.com/search/docs/essentials/technical
- https://developers.google.com/search/docs/fundamentals/how-search-works
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/site-names
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://www.ovhcloud.com/pl/web-hosting/

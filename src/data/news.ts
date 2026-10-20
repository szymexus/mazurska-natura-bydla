import mans from '../assets/spotkania/mans.jpg';
import farm from '../assets/spotkania/gospodarstwo.jpg';
import presentation from '../assets/spotkania/prezentacja.jpg';
import inn from '../assets/spotkania/karczma.jpg';
import cattle from '../assets/spotkania/stado.jpg';

// Robocze przypisanie zdjęć na podstawie materiałów. Do potwierdzenia przez właściciela.
export const news = [
  {
    slug: 'dobor-ras-do-chowu-ekstensywnego', date: '2026-10-19', label: '19 października 2026', category: 'Wiedza i współpraca',
    title: 'Dobór ras do chowu ekstensywnego',
    excerpt: 'Spotkanie z ekspertami uczelni w Łomży poświęcone rasom i krzyżówkom bydła mięsnego oraz wyzwaniom chowu bezoborowego.',
    paragraphs: [
      '19 października przedstawiciele grupy EPI „Mazurska Natura Bydła” spotkali się z pracownikami uczelni w Łomży.',
      'Rozmowa dotyczyła zapisów ekspertyzy dotyczącej zalecanych krzyżówek i ras mięsnych do ekstensywnego, bezoborowego chowu bydła. Uczestnicy zwrócili uwagę na wyzwania czekające rolników prowadzących taki chów.'
    ],
    photos: [{src: mans, alt: 'Oznaczenia uczelni MANS i baner grupy Mazurska Natura Bydła', caption: 'Materiały uczelni i grupy operacyjnej EPI „Mazurska Natura Bydła”.'}]
  },
  {
    slug: 'wizyta-w-gospodarstwie-edwarda-przyluckiego', date: '2026-10-15', label: '15 października 2026', category: 'Z praktyki gospodarstw',
    title: 'Wizyta w gospodarstwie Edwarda Przyłuckiego',
    excerpt: 'Wymiana doświadczeń dotyczących chowu bydła rasy limousine i utrzymania zwierząt w dużych stadach.',
    paragraphs: [
      '15 października przedstawiciele grupy spotkali się w gospodarstwie pana Edwarda Przyłuckiego, prowadzącego produkcję bydła opasowego rasy limousine.',
      'Uczestnicy podzielili się wiedzą i doświadczeniem dotyczącym sposobu utrzymania zwierząt w dużych stadach. Wizyta była okazją do rozmowy o codziennej praktyce hodowlanej.'
    ],
    photos: [{src: cattle, alt: 'Stado rudego bydła na rozległym jesiennym pastwisku', caption: 'Bydło na pastwisku.'}, {src: farm, alt: 'Budynek gospodarstwa z napisem T.E. Przyłuccy i banerem projektu', caption: 'Gospodarstwo odwiedzone przez przedstawicieli grupy.'}]
  },
  {
    slug: 'cyfrowy-monitoring-stada-msd', date: '2026-10-14', label: '14 października 2026', category: 'Technologia w hodowli',
    title: 'Cyfrowy monitoring stada',
    excerpt: 'Spotkanie z MSD Animal Health o sensorach, identyfikacji elektronicznej i wykorzystaniu danych w zarządzaniu hodowlą.',
    paragraphs: [
      '14 października odbyło się spotkanie z przedstawicielami firmy MSD Animal Health, której jednym z kierunków rozwoju jest precyzyjna hodowla zwierząt (precision livestock farming).',
      'Uczestnicy zapoznali się z technologiami wykorzystującymi sensory, identyfikację elektroniczną, Internet rzeczy (IoT), analizę danych i rozwiązania chmurowe do wspierania zdrowia zwierząt oraz efektywności produkcji.',
      'Omawiane możliwości wpisują się w cele grupy: usprawnienie kontroli zdrowia zwierząt, poprawę efektywności rozrodu, ograniczenie strat oraz automatyzację codziennej pracy w gospodarstwach.'
    ],
    photos: [{src: presentation, alt: 'Uczestnicy spotkania przy drewnianym stole słuchają prezentacji', caption: 'Prezentacja i rozmowa o technologiach wspierających hodowlę.'}]
  },
  {
    slug: 'poczatek-wspolpracy-grupy', date: '2026-10-01', label: '1 października 2026', category: 'Życie grupy',
    title: 'Początek wspólnej drogi',
    excerpt: 'W Borkach Wielkich rolnicy, doradcy i przedstawiciele nauki zainicjowali współpracę nad nowymi metodami zarządzania stadem.',
    paragraphs: [
      '1 października w Karczmie u Mazura w Borkach Wielkich odbyło się spotkanie inicjujące współpracę rolników, doradców i przedstawicieli świata nauki.',
      'Współpraca dotyczy opracowania i wdrożenia innowacyjnego systemu zarządzania stadem bydła mięsnego w ekstensywnym systemie wypasu, z wykorzystaniem cyfrowego monitoringu zwierząt i pastwisk.',
      'Spotkanie odbyło się w miejscu promującym historię, kulturę i dziedzictwo kulinarne mazurskiej wsi.'
    ],
    photos: [{src: inn, alt: 'Uczestnicy spotkania rozmawiają przy stole we wnętrzu karczmy', caption: 'Spotkanie inicjujące współpracę w Borkach Wielkich.'}]
  }
];
export const newsUrl = (slug = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/aktualnosci/${slug ? `${slug}/` : ''}`;

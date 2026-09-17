export type Locale = 'en' | 'es';
/** Pages that exist in both languages, paired for hreflang and the toggle. */
export const routePairs: { en: string; es: string }[] = [
  { en: '/', es: '/es' },
  { en: '/care', es: '/es/cuidado' },
  { en: '/new-patients', es: '/es/nuevos-pacientes' },
  { en: '/contact', es: '/es/visitanos' },
  { en: '/chiropractic-care', es: '/es/quiropractica' },
  { en: '/acupuncture', es: '/es/acupuntura' },
  { en: '/cox-spinal-decompression', es: '/es/descompresion-cox' },
  { en: '/sports-chiropractic', es: '/es/quiropractica-deportiva' },
  { en: '/soft-tissue-therapy', es: '/es/terapia-de-tejidos-blandos' },
];
export function pairFor(path: string) {
  return routePairs.find((pair) => pair.en === path || pair.es === path);
}
/**
 * hreflang map for a translated page. Untranslated pages get nothing, so we
 * never point Google at a language that does not exist.
 */
export function languageAlternates(path: string) {
  const pair = pairFor(path);
  if (!pair) return undefined;
  return { 'en-US': pair.en, 'es-US': pair.es, 'x-default': pair.en };
}
/** The other language's URL for the header toggle, or null if untranslated. */
export function counterpart(path: string): { href: string; to: Locale } | null {
  const pair = pairFor(path);
  if (!pair) return null;
  return path === pair.es
    ? { href: pair.en, to: 'en' }
    : { href: pair.es, to: 'es' };
}
export const uiEs = {
  book: 'Reservar una cita',
  breadcrumbHome: 'Inicio',
  breadcrumbCare: 'Nuestro cuidado',
  faqEyebrow: 'Antes de tu visita',
  faqTitle: 'Algunas buenas preguntas.',
  keepExploring: 'Sigue explorando',
  learnMore: 'Más información',
  disclaimer:
    'Información general únicamente. Se necesita un examen individual para recomendar un tratamiento. En caso de emergencia médica, llame al 911.',
};

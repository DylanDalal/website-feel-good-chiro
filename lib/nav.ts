export type NavLink = {
  label: string;
  href: string;
  /**
   * Home page section ids this link covers, for the scroll highlight. A home
   * section listed under no link keeps the previous link highlighted.
   */
  sections: string[];
};
/** Spanish nav only points at pages that actually exist in Spanish. */
export const navLinksEs: NavLink[] = [
  {
    label: 'Nuestro cuidado',
    href: '/es/cuidado',
    sections: ['cuidado', 'servicios'],
  },
  {
    label: 'Tu primera visita',
    href: '/es/nuevos-pacientes',
    sections: ['preguntas'],
  },
  { label: 'Visítanos', href: '/es/visitanos', sections: ['visit'] },
];
export const navLinks: NavLink[] = [
  {
    label: 'Our care',
    href: '/care',
    sections: ['care', 'services'],
  },
  { label: 'Dr. Frankie', href: '/about-us', sections: ['doctor'] },
  {
    label: 'Your first visit',
    href: '/new-patients',
    sections: ['first-visit', 'questions'],
  },
  { label: 'Resources', href: '/articles', sections: ['resources'] },
  { label: 'Visit us', href: '/contact', sections: ['visit'] },
];
// Service and condition pages sit at the root but belong under "Our care".
const carePaths = [
  'chiropractic-care',
  'acupuncture',
  'cox-spinal-decompression',
  'sports-chiropractic',
  'exercise-recovery',
  'soft-tissue-therapy',
  'back-pain',
  'neck-pain',
  'sciatica',
  'knee-pain',
  'shoulder-pain',
  'joint-pain',
  'foot-care',
];
/** Index of the nav link that owns a route, or -1. */
export function activeFromPath(pathname: string, links: NavLink[] = navLinks) {
  if (links === navLinks && carePaths.includes(pathname.slice(1))) return 0;
  return links.findIndex(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
  );
}

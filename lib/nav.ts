export type NavLink = {
  label: string;
  href: string;
  /** Home page section ids this link covers, for the scroll highlight. */
  sections: string[];
};
/** Spanish nav only points at pages that actually exist in Spanish. */
export const navLinksEs: NavLink[] = [
  { label: 'Nuestro cuidado', href: '/es/cuidado', sections: ['cuidado'] },
  { label: 'Tu primera visita', href: '/es/nuevos-pacientes', sections: [] },
  { label: 'Visítanos', href: '/es/visitanos', sections: ['visit'] },
];
export const navLinks: NavLink[] = [
  { label: 'Our care', href: '/care', sections: ['care', 'conditions'] },
  { label: 'Dr. Frankie', href: '/about-us', sections: ['doctor'] },
  {
    label: 'Your first visit',
    href: '/new-patients',
    sections: ['first-visit'],
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

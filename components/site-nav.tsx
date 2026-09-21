'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { activeFromPath, navLinks, navLinksEs } from '@/lib/nav';
import { counterpart } from '@/lib/i18n';
import { site } from '@/lib/site';

function useLocale() {
  // Static hosts serve /care from /care/index.html, so the browser can land on
  // /care/; route matching below expects no trailing slash.
  const pathname = usePathname().replace(/(.)\/+$/, '$1');
  const isEs = pathname === '/es' || pathname.startsWith('/es/');
  return { pathname, isEs, links: isEs ? navLinksEs : navLinks };
}

export function SiteNav() {
  const { pathname, isEs, links } = useLocale();
  const home = isEs ? '/es' : '/';
  const onHome = pathname === home;
  const [scrolled, setScrolled] = useState(-1);
  const active = onHome ? scrolled : activeFromPath(pathname, links);

  useEffect(() => {
    // The root layout owns <html>, so the document language is synced here.
    document.documentElement.lang = isEs ? 'es' : 'en';
  }, [isEs]);

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    // Offsets are measured up front so the scroll handler never forces layout.
    // A section that belongs to no link leaves the previous link lit, so the
    // highlight only clears above the first linked section (the hero).
    let spots: { top: number; index: number }[] = [];
    const measure = () => {
      spots = [...document.querySelectorAll('main > section')].map((el) => ({
        top: el.getBoundingClientRect().top + window.scrollY,
        index: links.findIndex((link) => link.sections.includes(el.id)),
      }));
    };
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // Hysteresis keeps the bar from flickering right at the threshold.
      if (y > 48) root.classList.add('is-scrolled');
      else if (y < 16) root.classList.remove('is-scrolled');
      if (!onHome) return;
      const line = y + window.innerHeight * 0.3;
      let current = -1;
      for (const spot of spots) {
        if (spot.top > line) break;
        if (spot.index !== -1) current = spot.index;
      }
      setScrolled(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Re-measures whenever the page height changes (web fonts swapping in, an
    // FAQ opening, a resize), not only on window resize. Its callback runs after
    // layout, so measuring there never forces a reflow after hydration.
    const observer = new ResizeObserver(() => {
      if (onHome) measure();
      onScroll();
    });
    observer.observe(document.body);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      cancelAnimationFrame(frame);
      root.classList.remove('is-scrolled');
    };
  }, [onHome, links]);

  return (
    <nav
      className="desktop-nav"
      aria-label={isEs ? 'Navegación principal' : 'Main navigation'}
    >
      {links.map((link, index) => (
        <a
          href={link.href}
          key={link.href}
          className={index === active ? 'is-active' : undefined}
          aria-current={
            index === active ? (onHome ? 'true' : 'page') : undefined
          }
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function HeaderActions() {
  const { pathname, isEs, links } = useLocale();
  // On a page with no translation, send people to the other language's home.
  const other =
    counterpart(pathname) ??
    (isEs
      ? { href: '/', to: 'en' as const }
      : { href: '/es', to: 'es' as const });
  return (
    <div className="header-actions">
      <a
        className="lang-toggle"
        href={other.href}
        hrefLang={other.to}
        lang={other.to}
        aria-label={
          other.to === 'es'
            ? 'Ver este sitio en español'
            : 'View this site in English'
        }
      >
        {other.to === 'es' ? 'Español' : 'English'}
      </a>
      <a
        className="button"
        href={site.booking}
        target="_blank"
        rel="noreferrer"
      >
        {isEs ? 'Reservar una cita' : 'Book a visit'}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <details className="mobile-menu">
        <summary>
          {isEs ? 'Menú' : 'Menu'} <span aria-hidden="true">＋</span>
        </summary>
        <nav aria-label={isEs ? 'Navegación móvil' : 'Mobile navigation'}>
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a href={other.href} hrefLang={other.to} lang={other.to}>
            {other.to === 'es' ? 'Español' : 'English'}
            <ArrowUpRight size={16} />
          </a>
          <a href={site.tel}>
            {isEs ? 'Llamar al' : 'Call'} {site.phone}
          </a>
        </nav>
      </details>
    </div>
  );
}

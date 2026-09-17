'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { activeFromPath, navLinks, navLinksEs } from '@/lib/nav';
import { counterpart } from '@/lib/i18n';
import { site } from '@/lib/site';

function useLocale() {
  const pathname = usePathname();
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
    let spots: { top: number; index: number }[] = [];
    const measure = () => {
      spots = [];
      links.forEach((link, index) => {
        for (const id of link.sections) {
          const el = document.getElementById(id);
          if (el) {
            spots.push({
              top: el.getBoundingClientRect().top + window.scrollY,
              index,
            });
          }
        }
      });
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
      let closest = -Infinity;
      for (const spot of spots) {
        if (spot.top <= line && spot.top > closest) {
          closest = spot.top;
          current = spot.index;
        }
      }
      setScrolled(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };
    measure();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
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
        <Link
          href={link.href}
          key={link.href}
          className={index === active ? 'is-active' : undefined}
          aria-current={
            index === active ? (onHome ? 'true' : 'page') : undefined
          }
        >
          {link.label}
        </Link>
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
      <Link
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
      </Link>
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

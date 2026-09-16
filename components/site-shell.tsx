import Link from 'next/link';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { site } from '@/lib/site';

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Feel Good Chiropractic home">
      feel good<span>CHIROPRACTIC</span>
    </Link>
  );
}

export function BookButton({
  children = 'Book an appointment',
}: {
  children?: React.ReactNode;
}) {
  return (
    <a className="button" href={site.booking} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function Header() {
  const links = [
    ['Our care', '/care'],
    ['Dr. Frankie', '/about-us'],
    ['Your first visit', '/new-patients'],
    ['Resources', '/articles'],
    ['Visit us', '/contact'],
  ];
  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, url]) => (
          <Link href={url} key={url}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <BookButton>Book a visit</BookButton>
        <details className="mobile-menu">
          <summary>
            Menu <span aria-hidden="true">＋</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, url]) => (
              <a href={url} key={url}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <a href={site.tel}>Call {site.phone}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>
            Good care. More life.
            <br />
            Your neighborhood chiropractor in Tampa.
          </p>
          <p className="small">Se habla Español.</p>
        </div>
        <div>
          <h2>Find your feel good</h2>
          <Link href="/chiropractic-care">Chiropractic care</Link>
          <Link href="/acupuncture">Acupuncture</Link>
          <Link href="/cox-spinal-decompression">Cox decompression</Link>
          <Link href="/sports-chiropractic">Sports & rehabilitation</Link>
          <Link href="/care#conditions">Pain & movement</Link>
        </div>
        <div>
          <h2>Make yourself at home</h2>
          <Link href="/about-us">Meet Dr. Frankie</Link>
          <Link href="/new-patients">New patients & forms</Link>
          <Link href="/articles">Articles & resources</Link>
          <Link href="/contact">Hours & directions</Link>
          <a
            href="https://www.designsforhealth.com/u/frankieamarillasdc"
            target="_blank"
            rel="noreferrer"
          >
            Vitamin orders ↗
          </a>
        </div>
        <div>
          <h2>Come say hello</h2>
          <a href={site.directions} target="_blank" rel="noreferrer">
            {site.address}
            <br />
            {site.city}
          </a>
          <a href={site.tel}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a
            href="https://www.facebook.com/feelgoodchiro/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Feel Good Chiropractic</span>
        <Link href="/privacy">Privacy</Link>
        <span>Be well. Live well.</span>
      </div>
      <div className="mobile-actions">
        <a href={site.tel}>
          <Phone size={16} /> Call the office
        </a>
        <a href={site.booking} target="_blank" rel="noreferrer">
          Book a visit <ArrowUpRight size={16} />
        </a>
      </div>
    </footer>
  );
}

export function VisitCTA() {
  return (
    <section className="visit-cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>
            More comfortable days.
            <br />
            More of what you love.
          </h2>
          <p>Let’s talk about getting you there.</p>
        </div>
        <div className="cta-actions">
          <BookButton />
          <a className="phone-link" href={site.tel}>
            {site.phone} <ArrowUpRight size={22} />
          </a>
          <a
            className="small address-link"
            href={site.directions}
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={16} /> Ehrlich Road · Tampa, FL
          </a>
        </div>
      </div>
    </section>
  );
}

export function FAQ({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

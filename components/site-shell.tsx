import Link from 'next/link';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { site } from '@/lib/site';
import { SiteNav, HeaderActions } from '@/components/site-nav';

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
  return (
    <header className="site-header">
      <Brand />
      <SiteNav />
      <HeaderActions />
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

const ctaCopy = {
  en: {
    eyebrow: 'Ready when you are',
    lineOne: 'More comfortable days.',
    lineTwo: 'More of what you love.',
    text: 'Let’s talk about getting you there.',
    book: 'Book an appointment',
  },
  es: {
    eyebrow: 'Cuando usted esté listo',
    lineOne: 'Días más cómodos.',
    lineTwo: 'Más de lo que le gusta.',
    text: 'Hablemos de cómo llegar ahí.',
    book: 'Reservar una cita',
  },
};
export function VisitCTA({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const copy = ctaCopy[lang];
  return (
    <section className="visit-cta" id="visit">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>
            {copy.lineOne}
            <br />
            {copy.lineTwo}
          </h2>
          <p>{copy.text}</p>
        </div>
        <div className="cta-actions">
          <BookButton>{copy.book}</BookButton>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: items.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />
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

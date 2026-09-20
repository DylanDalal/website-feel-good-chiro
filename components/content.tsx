import { Photo } from './photo';
import { ArrowUpRight } from 'lucide-react';
import { BookButton } from './site-shell';
import type { CarePage } from '@/lib/care';
import type { Locale } from '@/lib/i18n';

export function PageIntro({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lede">{text}</p>
        {children}
      </div>
    </section>
  );
}
export function CareLinks({
  pages,
  base = '',
  lang = 'en',
}: {
  pages: CarePage[];
  base?: string;
  lang?: Locale;
}) {
  return (
    <div className="care-link-grid">
      {pages.map((page, i) => (
        <a href={`${base}/${page.slug}`} className="care-link" key={page.slug}>
          <span className="care-number">{String(i + 1).padStart(2, '0')}</span>
          <h3>{page.label}</h3>
          <p>{page.description.replace(/ in Tampa(, FL)?/g, '')}</p>
          <span
            className="card-arrow"
            aria-label={
              lang === 'es'
                ? `Conocer más sobre ${page.label}`
                : `Learn about ${page.label}`
            }
          >
            <ArrowUpRight size={22} />
          </span>
        </a>
      ))}
    </div>
  );
}
const asideCopy = {
  en: {
    eyebrow: 'Your next step',
    title: 'Let’s talk about you.',
    text: 'Tell us what’s been bothering you. We’ll help you understand where to start.',
    book: 'Book a visit',
    expect: 'What to expect',
    expectHref: '/new-patients',
    role: 'Chiropractor · Tampa, FL',
  },
  es: {
    eyebrow: 'Su siguiente paso',
    title: 'Hablemos de usted.',
    text: 'Cuéntenos qué le ha estado molestando. Le ayudaremos a entender por dónde empezar.',
    book: 'Reservar una cita',
    expect: 'Qué esperar',
    expectHref: '/es/nuevos-pacientes',
    role: 'Quiropráctico · Tampa, FL',
  },
};
export function AppointmentAside({ lang = 'en' }: { lang?: Locale }) {
  const copy = asideCopy[lang];
  return (
    <aside className="appointment-aside">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2>{copy.title}</h2>
      <p>{copy.text}</p>
      <BookButton>{copy.book}</BookButton>
      <a className="text-link" href={copy.expectHref}>
        {copy.expect} <ArrowUpRight size={16} />
      </a>
      <div className="aside-doctor">
        <Photo
          src="/images/dr-frankie.jpg"
          alt="Dr. Frankie Amarillas"
          width={235}
          height={313}
        />
        <div>
          <strong>Dr. Frankie Amarillas</strong>
          <span>{copy.role}</span>
          <span>Se habla Español</span>
        </div>
      </div>
    </aside>
  );
}

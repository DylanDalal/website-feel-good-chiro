import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BookButton } from './site-shell';
import type { CarePage } from '@/lib/care';

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
export function CareLinks({ pages }: { pages: CarePage[] }) {
  return (
    <div className="care-link-grid">
      {pages.map((page, i) => (
        <Link href={`/${page.slug}`} className="care-link" key={page.slug}>
          <span className="care-number">{String(i + 1).padStart(2, '0')}</span>
          <h3>{page.label}</h3>
          <p>{page.description.replace(/ in Tampa(, FL)?/g, '')}</p>
          <span className="card-arrow" aria-label={`Learn about ${page.label}`}>
            <ArrowUpRight size={22} />
          </span>
        </Link>
      ))}
    </div>
  );
}
export function AppointmentAside() {
  return (
    <aside className="appointment-aside">
      <p className="eyebrow">Your next step</p>
      <h2>Let’s talk about you.</h2>
      <p>
        Tell us what’s been bothering you. We’ll help you understand where to
        start.
      </p>
      <BookButton>Book a visit</BookButton>
      <Link className="text-link" href="/new-patients">
        What to expect <ArrowUpRight size={16} />
      </Link>
      <div className="aside-doctor">
        <Image
          unoptimized
          src="/images/dr-frankie.jpg"
          alt="Dr. Frankie Amarillas"
          width={235}
          height={313}
          loading="lazy"
        />
        <div>
          <strong>Dr. Frankie Amarillas</strong>
          <span>Chiropractor · Tampa, FL</span>
          <span>Se habla Español</span>
        </div>
      </div>
    </aside>
  );
}

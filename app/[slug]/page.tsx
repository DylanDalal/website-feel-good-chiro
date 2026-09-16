import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { carePages, findCare } from '@/lib/care';
import { site } from '@/lib/site';
import { FAQ, VisitCTA, BookButton } from '@/components/site-shell';
import { AppointmentAside } from '@/components/content';
export function generateStaticParams() {
  return carePages.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const page = findCare((await params).slug);
  if (!page) return { title: 'Page not found', robots: { index: false } };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
    },
  };
}
export default async function CareDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = findCare((await params).slug);
  if (!page) notFound();
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Our care',
        item: `${site.url}/care`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.label,
        item: `${site.url}/${page.slug}`,
      },
    ],
  };
  return (
    <main id="main">
      <section className={`detail-hero ${page.kind}`}>
        <div className="container detail-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/care">Our care</Link>
              <span>/</span>
              <span>{page.label}</span>
            </nav>
            <p className="eyebrow">{page.label} · Tampa, Florida</p>
            <h1>{page.headline}</h1>
            <p className="page-lede">{page.intro}</p>
            <BookButton>Let’s find your next step</BookButton>
          </div>
          <figure className="detail-photo">
            <Image
              unoptimized
              src={page.image}
              alt={page.imageAlt}
              width={1200}
              height={800}
              fetchPriority="high"
              loading="eager"
            />
          </figure>
        </div>
      </section>
      <div className="container content-layout">
        <article className="prose">
          {page.sections.map((section) => (
            <section
              key={section.heading}
              id={
                section.heading === 'Care through different stages of life.'
                  ? 'care-through-life'
                  : undefined
              }
            >
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {section.points && (
                <ul className="simple-list">
                  {section.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section>
            <p className="eyebrow">Before your visit</p>
            <h2>A few good questions.</h2>
            <FAQ items={page.faqs} />
          </section>
          {page.source && (
            <p className="source-note">
              Learn more:{' '}
              <a href={page.source.url} target="_blank" rel="noreferrer">
                {page.source.label} ↗
              </a>
            </p>
          )}
          <p className="education-note">
            General information only. An individual examination is needed to
            recommend care. For a medical emergency, call 911.
          </p>
        </article>
        <AppointmentAside />
      </div>
      <section className="related-section">
        <div className="container">
          <p className="eyebrow">Keep exploring</p>
          <div className="related-links">
            {page.related.map((slug) => {
              const item = findCare(slug);
              return item ? (
                <Link href={`/${slug}`} key={slug}>
                  {item.label}
                  <ArrowUpRight size={24} />
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </section>
      <VisitCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
    </main>
  );
}

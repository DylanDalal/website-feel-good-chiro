import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { carePagesEs, findCareEs } from '@/lib/care-es';
import { site } from '@/lib/site';
import { languageAlternates, uiEs } from '@/lib/i18n';
import { FAQ, VisitCTA, BookButton } from '@/components/site-shell';
import { AppointmentAside } from '@/components/content';
import { ogImage } from '@/lib/seo';
export function generateStaticParams() {
  return carePagesEs.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const page = findCareEs((await params).slug);
  if (!page) return { title: 'Página no encontrada', robots: { index: false } };
  const path = `/es/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path, languages: languageAlternates(path) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      locale: 'es_US',
      images: [ogImage],
    },
  };
}
export default async function CareDetailEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = findCareEs((await params).slug);
  if (!page) notFound();
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: uiEs.breadcrumbHome,
        item: `${site.url}/es`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: uiEs.breadcrumbCare,
        item: `${site.url}/es/cuidado`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.label,
        item: `${site.url}/es/${page.slug}`,
      },
    ],
  };
  const schema: object[] = [
    crumbs,
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.label,
      description: page.description,
      serviceType: page.label,
      url: `${site.url}/es/${page.slug}`,
      provider: { '@id': `${site.url}/#practice` },
      areaServed: { '@type': 'City', name: 'Tampa' },
      availableLanguage: ['Spanish', 'English'],
      inLanguage: 'es',
    },
  ];
  return (
    <main id="main" lang="es">
      <section className={`detail-hero ${page.kind}`}>
        <div className="container detail-hero-grid">
          <div>
            <nav className="breadcrumbs" aria-label="Ruta de navegación">
              <Link href="/es">{uiEs.breadcrumbHome}</Link>
              <span>/</span>
              <Link href="/es/cuidado">{uiEs.breadcrumbCare}</Link>
              <span>/</span>
              <span>{page.label}</span>
            </nav>
            <p className="eyebrow">{page.label} · Tampa, Florida</p>
            <h1>{page.headline}</h1>
            <p className="page-lede">{page.intro}</p>
            <BookButton>Encontremos su siguiente paso</BookButton>
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
            <section key={section.heading}>
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
            <p className="eyebrow">{uiEs.faqEyebrow}</p>
            <h2>{uiEs.faqTitle}</h2>
            <FAQ items={page.faqs} />
          </section>
          {page.source && (
            <p className="source-note">
              {uiEs.learnMore}:{' '}
              <a href={page.source.url} target="_blank" rel="noreferrer">
                {page.source.label} ↗
              </a>
            </p>
          )}
          <p className="education-note">{uiEs.disclaimer}</p>
        </article>
        <AppointmentAside lang="es" />
      </div>
      <section className="related-section">
        <div className="container">
          <p className="eyebrow">{uiEs.keepExploring}</p>
          <div className="related-links">
            {page.related.map((slug) => {
              const item = findCareEs(slug);
              return item ? (
                <Link href={`/es/${slug}`} key={slug}>
                  {item.label}
                  <ArrowUpRight size={24} />
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </section>
      <VisitCTA lang="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}

import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { articles, findArticle } from '../data';
import { AppointmentAside } from '@/components/content';
import { site } from '@/lib/site';
import { ogImage } from '@/lib/seo';
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const a = findArticle((await params).slug);
  return a
    ? {
        title: a.title,
        description: a.description,
        alternates: { canonical: `/articles/${a.slug}` },
        openGraph: {
          title: a.title,
          description: a.description,
          type: 'article',
          url: `/articles/${a.slug}`,
          images: [ogImage],
        },
      }
    : { title: 'Article not found', robots: { index: false } };
}
export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const a = findArticle((await params).slug);
  if (!a) notFound();
  const related = articles
    .filter((x) => x.category === a.category && x.slug !== a.slug)
    .slice(0, 2);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    mainEntityOfPage: `${site.url}/articles/${a.slug}`,
    publisher: { '@id': `${site.url}/#practice` },
  };
  return (
    <main id="main">
      <article>
        <header className="article-intro container">
          <Link className="text-link" href="/articles">
            <ArrowLeft size={16} /> The feel good library
          </Link>
          <p className="eyebrow">{a.category}</p>
          <h1>{a.title}</h1>
          <p className="page-lede">{a.description}</p>
          <p className="article-byline">
            Feel Good Chiropractic · Tampa, FL <span>{a.readTime}</span>
          </p>
        </header>
        <figure className="article-feature container">
          <Image
            unoptimized
            src={a.image}
            alt={a.imageAlt}
            width={1200}
            height={800}
          />
        </figure>
        <div className="container content-layout">
          <div className="prose">
            <p className="article-opening">{a.introduction}</p>
            {a.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}
            <aside className="education-note">
              This article is for general education and is not a diagnosis or a
              substitute for medical advice. Call 911 for emergency symptoms.
            </aside>
            <div className="article-next">
              <h2>Make it personal.</h2>
              <p>
                Your symptoms, health history, and goals deserve their own
                conversation.
              </p>
              <Link className="text-link" href="/care">
                Explore our care <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <AppointmentAside />
        </div>
      </article>
      <section className="related-section">
        <div className="container">
          <p className="eyebrow">A little more reading</p>
          <div className="related-links">
            {related.map((x) => (
              <Link href={`/articles/${x.slug}`} key={x.slug}>
                {x.title}
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}

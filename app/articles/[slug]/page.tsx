import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock3, Phone } from 'lucide-react';
import { articles, findArticle } from '../data';

const bookingUrl = 'https://practice.chirotouch.com/portal/FeelGoodChiropractic_2';

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = findArticle(params.slug);
  if (!article) return { title: 'Article not found' };
  return { title: article.title, description: article.description, alternates: { canonical: `/articles/${article.slug}` } };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = findArticle(params.slug) ?? articles[0];
  return (
    <main className="article-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Feel Good Chiropractic home"><Image src="/images/feel-good-logo.png" alt="Feel Good Chiropractic" width={220} height={100} priority /></Link>
        <nav aria-label="Primary navigation"><Link href="/#care">Care</Link><Link href="/#doctor">Dr. Frankie</Link><Link href="/articles">Articles</Link><Link href="/#contact">Contact</Link></nav>
        <a className="header-phone" href="tel:+18139622489"><Phone size={18} /> 813-962-2489</a>
      </header>

      <article className="article-detail">
        <div className="article-detail-intro">
          <Link className="article-back" href="/articles"><ArrowLeft size={18} /> All articles</Link>
          <p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="article-dek">{article.description}</p>
          <div className="article-byline"><span><Clock3 size={17} /> {article.readTime}</span><span>Feel Good Chiropractic · Tampa, FL</span></div>
        </div>
        <figure className="article-feature-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 850px) 100vw, 760px" priority /></figure>
        <div className="article-content">
          <p className="article-introduction">{article.introduction}</p>
          {article.sections.map((section) => <section className="article-section" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
          <aside className="article-disclaimer"><strong>Important note</strong><p>This article is for general education and is not a diagnosis or a substitute for medical advice. Call 911 or seek emergency care for emergency symptoms.</p></aside>
          <div className="article-next"><div><p className="eyebrow">Need personalized guidance?</p><h2>Talk with Dr. Frankie about your next step.</h2></div><div><a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={19} /> Book online</a><a className="article-call" href="tel:+18139622489"><Phone size={18} /> 813-962-2489</a></div></div>
        </div>
      </article>

      <footer><div className="footer-main"><Image src="/images/feel-good-logo.png" alt="Feel Good Chiropractic" width={210} height={96} /><p>Evidence-based, patient-centered chiropractic care for Greater Northdale, Carrollwood, Lutz, and surrounding Tampa communities.</p><div className="footer-links"><a href="mailto:frankie@feelgoodchiro.net">frankie@feelgoodchiro.net</a><Link href="/articles">Articles & resources</Link><Link href="/">Home</Link></div></div><div className="footer-bottom"><span>© 2026 Feel Good Chiropractic</span><span>Be well… Live well.</span></div></footer>
      <div className="mobile-action-bar" aria-label="Quick actions"><a href="tel:+18139622489"><Phone size={19} /> Call</a><a href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={19} /> Book online</a></div>
    </main>
  );
}

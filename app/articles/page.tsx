import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, Phone } from 'lucide-react';
import { articles } from './data';

const bookingUrl = 'https://practice.chirotouch.com/portal/FeelGoodChiropractic_2';

export const metadata = {
  title: 'Chiropractic Wellness & Injury Articles',
  description: 'Practical articles from Feel Good Chiropractic in Tampa about pain, injuries, mobility, recovery, and staying active.',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  return (
    <main className="article-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Feel Good Chiropractic home">
          <Image src="/images/feel-good-logo.png" alt="Feel Good Chiropractic" width={220} height={100} priority />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#care">Care</Link><Link href="/#doctor">Dr. Frankie</Link><Link href="/articles">Articles</Link><Link href="/#contact">Contact</Link>
        </nav>
        <a className="header-phone" href="tel:+18139622489"><Phone size={18} /> 813-962-2489</a>
      </header>

      <section className="article-index-hero">
        <div>
          <p className="eyebrow">Feel Good Chiropractic resources</p>
          <h1>Guidance for <em>moving well.</em></h1>
          <p>Plain-language education about pain, injury, recovery, and active living from your Tampa chiropractic office.</p>
        </div>
        <div className="article-hero-mark"><BookOpen size={36} /><strong>13 practical reads</strong><span>For everyday movement and injury questions.</span></div>
      </section>

      <section className="article-index section" aria-labelledby="article-library-heading">
        <div className="article-index-heading">
          <div><p className="eyebrow">Article library</p><h2 id="article-library-heading">Start with what you’re feeling.</h2></div>
          <p>These articles are general education, not a diagnosis. If you have severe, sudden, or concerning symptoms, seek urgent medical care.</p>
        </div>
        <div className="article-card-grid">
          {articles.map((article) => (
            <Link className="article-card" href={`/articles/${article.slug}`} key={article.slug}>
              <div className="article-card-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
              <div className="article-card-copy">
                <div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                <h3>{article.title}</h3><p>{article.description}</p>
                <span className="article-read">Read article <ArrowRight size={17} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="article-cta">
        <div><p className="eyebrow">Have a question about your symptoms?</p><h2>Let’s talk through your next step.</h2></div>
        <div className="article-cta-actions"><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={20} /> Book online</a><a className="button button-outline-light" href="tel:+18139622489"><Phone size={20} /> 813-962-2489</a></div>
      </section>

      <footer>
        <div className="footer-main"><Image src="/images/feel-good-logo.png" alt="Feel Good Chiropractic" width={210} height={96} /><p>Evidence-based, patient-centered chiropractic care for Greater Northdale, Carrollwood, Lutz, and surrounding Tampa communities.</p><div className="footer-links"><a href="mailto:frankie@feelgoodchiro.net">frankie@feelgoodchiro.net</a><Link href="/">Home</Link><a href="https://www.facebook.com/feelgoodchiro/" target="_blank" rel="noreferrer">Facebook</a></div></div>
        <div className="footer-bottom"><span>© 2026 Feel Good Chiropractic</span><span>Be well… Live well.</span></div>
      </footer>
      <div className="mobile-action-bar" aria-label="Quick actions"><a href="tel:+18139622489"><Phone size={19} /> Call</a><a href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={19} /> Book online</a></div>
    </main>
  );
}

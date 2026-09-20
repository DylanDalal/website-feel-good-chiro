import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/content';
import { VisitCTA } from '@/components/site-shell';
import { articles } from './data';
export const metadata = {
  title: 'Chiropractic Articles & Resources | Tampa',
  description:
    'Practical guides to back pain, neck pain, sports injuries, car accidents, and workplace concerns from Feel Good Chiropractic in Tampa.',
  alternates: { canonical: '/articles' },
};
const categories = [
  'Pain & mobility',
  'Sports & activity',
  'Auto accidents',
  'Workplace health',
];
export default function Articles() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="The feel good library"
        title="A little clarity goes a long way."
        text="Plain-language guides to movement, pain, and the questions that come up along the way."
      />
      <div className="container article-topics">
        <span className="small">Find a topic</span>
        {categories.map((c, i) => (
          <a href={`#topic-${i}`} key={c}>
            {c}
            <ArrowUpRight size={15} />
          </a>
        ))}
      </div>
      {categories.map((category, index) => (
        <section
          className="section article-category"
          id={`topic-${index}`}
          key={category}
        >
          <div className="container">
            <div className="section-heading">
              <h2>{category}</h2>
              <span className="small">
                {articles.filter((a) => a.category === category).length}{' '}
                practical reads
              </span>
            </div>
            <div className="resource-grid">
              {articles
                .filter((a) => a.category === category)
                .map((article) => (
                  <a
                    className="resource-card"
                    href={`/articles/${article.slug}`}
                    key={article.slug}
                  >
                    <span className="small">{article.readTime}</span>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <span className="text-link">
                      Read article <ArrowUpRight size={16} />
                    </span>
                  </a>
                ))}
            </div>
          </div>
        </section>
      ))}
      <div className="container library-note">
        <p>
          These articles offer general education, not a diagnosis or an
          individual treatment plan. For urgent symptoms, seek medical care.
        </p>
      </div>
      <VisitCTA />
    </main>
  );
}

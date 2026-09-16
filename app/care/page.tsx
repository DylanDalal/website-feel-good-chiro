import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro, CareLinks } from '@/components/content';
import { VisitCTA } from '@/components/site-shell';
import { services, conditions } from '@/lib/care';
export const metadata = {
  title: 'Chiropractic Services & Pain Care in Tampa',
  description:
    'Explore chiropractic care, acupuncture, Cox decompression, sports rehabilitation, and care for back, neck, joint, and movement concerns in Tampa.',
  alternates: { canonical: '/care' },
};
export default function Care() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Our care · Tampa, Florida"
        title="A good place to start."
        text="You bring your questions, your goals, and whatever’s been bothering you. We’ll work through the options together."
      />
      <section className="section care-surface">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Care built around you</p>
              <h2>
                Different tools.
                <br />
                One personal plan.
              </h2>
            </div>
            <p>
              Your examination guides the recommendation. Learn about the
              approaches available at Feel Good Chiropractic.
            </p>
          </div>
          <CareLinks pages={services} />
        </div>
      </section>
      <section id="conditions" className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What’s on your mind?</p>
              <h2>Start with how you feel.</h2>
            </div>
            <p>
              You don’t need to arrive with a diagnosis. These pages explain
              common concerns and the conversations you can have with Dr.
              Frankie.
            </p>
          </div>
          <div className="condition-grid">
            {conditions.map((page) => (
              <Link href={`/${page.slug}`} key={page.slug}>
                {page.label}
                <ArrowUpRight size={24} />
              </Link>
            ))}
            <Link href="/articles/headaches">
              Headaches
              <ArrowUpRight size={24} />
            </Link>
            <Link href="/articles/care-after-auto-accidents">
              Care after a car accident
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </section>
      <VisitCTA />
    </main>
  );
}

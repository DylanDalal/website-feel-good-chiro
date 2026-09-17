import { PageIntro } from '@/components/content';
import { VisitCTA } from '@/components/site-shell';
export const metadata = {
  title: 'Patient Reviews | Tampa Chiropractor',
  description:
    'Patient perspectives on the personal approach at Feel Good Chiropractic in Tampa with Dr. Frankie Amarillas.',
  alternates: { canonical: '/reviews' },
};
export default function Reviews() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Patient perspectives"
        title="Feeling heard matters."
        text="The little things in a visit can make a difference: room for questions, clear explanations, and care that feels personal."
      />
      <section className="section">
        <div className="container review-grid">
          <figure>
            <blockquote>
              “He is clearly tailoring his treatment for each patient.”
            </blockquote>
            <figcaption>
              Janel C.
              <br />
              Excerpt from a published patient review
            </figcaption>
          </figure>
          <div className="prose">
            <h2>Room for the conversation.</h2>
            <p>
              In another review, BJ W. described feeling hesitant about
              chiropractic care after previous experiences. The account
              highlighted Dr. Amarillas’s explanations of the care and follow-up
              plan.
            </p>
            <p>
              These comments come from patient feedback previously published on
              the practice website. They describe individual experiences, not a
              promise of a particular result.
            </p>
            <p>
              Your appointment is a chance to discuss your own concerns, ask
              about the recommendation, and decide what feels right for you.
            </p>
          </div>
        </div>
      </section>
      <VisitCTA />
    </main>
  );
}

import { Photo } from '@/components/photo';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PageIntro } from '@/components/content';
import { BookButton, FAQ, VisitCTA } from '@/components/site-shell';
import { site } from '@/lib/site';
import { languageAlternates } from '@/lib/i18n';
export const metadata = {
  title: 'New Patients & First Visit | Tampa Chiropractor',
  description:
    'Plan your first visit to Feel Good Chiropractic in Tampa. Find booking, patient forms, what to bring, insurance questions, and what to expect.',
  alternates: {
    canonical: '/new-patients',
    languages: languageAlternates('/new-patients'),
  },
};
export const patientFAQs = [
  {
    question: 'Will I need to commit to a long treatment plan?',
    answer:
      'No. Feel Good Chiropractic does not use long-term contracts. Recommendations depend on your findings and goals, and the plan can be discussed as you progress.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Comfortable clothing that lets you move is helpful. If you are coming for a particular concern or treatment, call the office with any questions about preparing.',
  },
  {
    question: 'Can I discuss care in Spanish?',
    answer:
      'Yes. Dr. Frankie is fluent in Spanish and can discuss your symptoms, options, and care in Spanish.',
  },
  {
    question: 'Will I receive treatment at the first visit?',
    answer:
      'That depends on your health history, examination, and the care you agree on. Sometimes the right next step is additional information or another evaluation before treatment.',
  },
  {
    question: 'What if I’m not sure which service to book?',
    answer:
      'Call 813-962-2489 and explain the reason for your visit. The office can help with scheduling the appropriate appointment.',
  },
  {
    question: 'How do I change or cancel my appointment?',
    answer:
      'Contact the office at 813-962-2489 as soon as you know your plans have changed. Ask about current cancellation policies when you book.',
  },
];
export default function NewPatients() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Your first visit"
        title="Come as you are."
        text="A few questions. A little paperwork. A conversation about you. Here’s how to make your first appointment feel more familiar."
      >
        <div className="hero-actions">
          <BookButton />
          <a
            className="text-link"
            href={site.forms}
            target="_blank"
            rel="noreferrer"
          >
            Patient forms (PDF) <ArrowUpRight size={18} />
          </a>
        </div>
      </PageIntro>
      <section className="section">
        <div className="container visit-layout">
          <div>
            <p className="eyebrow">From hello to your next step</p>
            <h2>
              Time to listen.
              <br />
              Room for questions.
            </h2>
            <Photo
              className="visit-photo"
              src="/images/chiropractic-consultation.jpg"
              alt="A relaxed conversation between a clinician and patient"
              width={1200}
              height={800}
            />
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Tell your story.</h3>
                <p>
                  Share your health history, what you’ve been feeling, and the
                  activities you want to get back to. Mention previous care,
                  medications, injuries, and any questions.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Understand what’s going on.</h3>
                <p>
                  Dr. Frankie will examine the concern and your movement. The
                  findings help determine whether care here is appropriate or
                  whether another evaluation would be more useful.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Choose your next step.</h3>
                <p>
                  Talk through the recommendation, alternatives, costs, and what
                  to expect. Your preferences matter, and you can ask questions
                  before deciding on treatment.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="patient-prep section">
        <div className="container prep-grid">
          <div>
            <p className="eyebrow">A little preparation</p>
            <h2>Bring the helpful things.</h2>
            <ul className="simple-list">
              <li>
                Photo identification and your insurance card, if using insurance
              </li>
              <li>A list of medications and relevant health conditions</li>
              <li>
                Previous imaging reports or information about related treatment
              </li>
              <li>
                Your completed forms, or time to complete them at the office
              </li>
              <li>The questions you don’t want to forget</li>
            </ul>
          </div>
          <a
            className="forms-card"
            href={site.forms}
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={38} />
            <h3>
              One less thing
              <br />
              when you arrive.
            </h3>
            <p>
              Download and complete the new patient paperwork. Bring it with you
              to your appointment.
            </p>
            <span className="text-link">
              Download forms (PDF) <ArrowUpRight size={18} />
            </span>
            <span className="small">Prefer paper at the office? Just ask.</span>
          </a>
        </div>
      </section>
      <section className="section" id="insurance">
        <div className="container bio-grid">
          <div>
            <p className="eyebrow">Insurance & payment</p>
            <h2>
              Let’s make the
              <br />
              details clear.
            </h2>
          </div>
          <div className="prose">
            <p>
              The office files primary claims for Medicare, Florida Blue, and
              Cigna. Call to confirm current participation and your specific
              plan before scheduling. Have your card and plan details handy.
            </p>
            <p>
              Ask your insurer about chiropractic and acupuncture benefits
              separately. Network status, deductibles, visit limits, referrals,
              and covered services can vary. A benefit quote is not a guarantee
              of payment.
            </p>
            <p>
              Major credit cards, debit cards, cash, and personal checks are
              accepted. Paying directly? Ask for examination and treatment fees
              so you understand the next step before care.
            </p>
            <a className="text-link" href={site.tel}>
              Talk with the office · {site.phone} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Before you come in</p>
            <h2>
              Good questions.
              <br />
              Clear answers.
            </h2>
          </div>
          <FAQ items={patientFAQs} />
        </div>
      </section>
      <VisitCTA />
    </main>
  );
}

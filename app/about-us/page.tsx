import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BookButton, VisitCTA } from '@/components/site-shell';
import { site } from '@/lib/site';
export const metadata = {
  title: 'Meet Dr. Frankie Amarillas | Tampa Chiropractor',
  description:
    'Get to know Dr. Frankie Amarillas, a Palmer graduate, Certified Acupuncturist, and Certified Chiropractic Sports Practitioner in Tampa. Se habla Español.',
  alternates: { canonical: '/about-us' },
};
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#dr-frankie`,
  name: 'Dr. Frankie Amarillas',
  jobTitle: 'Doctor of Chiropractic',
  worksFor: { '@id': `${site.url}/#practice` },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Palmer College of Chiropractic',
  },
  knowsLanguage: ['English', 'Spanish'],
  hasCredential: [
    'Doctor of Chiropractic (DC)',
    'Certified Chiropractic Sports Practitioner (CCSP)',
    'Certified Acupuncturist (CAc)',
    'Fellow, International Academy of Neuromusculoskeletal Medicine (FIANM)',
  ].map((name) => ({
    '@type': 'EducationalOccupationalCredential',
    name,
  })),
  image: `${site.url}/images/dr-frankie.jpg`,
  url: `${site.url}/about-us`,
};
export default function About() {
  return (
    <main id="main">
      <section className="about-hero">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Meet your Tampa chiropractor</p>
            <h1>
              Easy to talk to.
              <br />
              Here to help.
            </h1>
            <p className="page-lede">
              Meet Dr. Frankie Amarillas. Thoughtful about your care. Relaxed
              about the conversation. Ready to hear what feeling good means to
              you.
            </p>
            <BookButton>Come meet Dr. Frankie</BookButton>
          </div>
          <figure className="real-portrait">
            <Image
              unoptimized
              src="/images/dr-frankie.jpg"
              alt="Dr. Frankie Amarillas, Doctor of Chiropractic"
              width={235}
              height={313}
            />
            <figcaption>
              Dr. Frankie Amarillas
              <br />
              <span>DC · FIANM · CCSP · CAc</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="container bio-grid">
          <div>
            <p className="eyebrow">Feel good starts with feeling heard</p>
            <h2>
              Your appointment
              <br />
              is a conversation.
            </h2>
          </div>
          <div className="prose">
            <p>
              You should be able to ask the question, explain the worry, and say
              what you want to do again. Dr. Frankie sees patients as partners
              in the process, with care built around individual needs and goals.
            </p>
            <p>
              His background includes work as a physical therapist assistant in
              neurology and orthopedic settings. Today, he brings that
              experience to chiropractic care, functional training, and
              rehabilitation at Feel Good Chiropractic.
            </p>
            <p>
              There are no long-term contracts. The next step starts with an
              examination and a discussion of your options, with time to
              understand the recommendation.
            </p>
            <p>
              Dr. Frankie is fluent in Spanish. You can discuss your symptoms
              and care in the language that feels most comfortable to you.
            </p>
          </div>
        </div>
      </section>
      <section className="credentials-section section">
        <div className="container">
          <p className="eyebrow">The experience behind the care</p>
          <h2>A little more about Dr. Frankie.</h2>
          <div className="credential-grid">
            <div>
              <span>01</span>
              <h3>Doctor of Chiropractic</h3>
              <p>
                Palmer College of Chiropractic
                <br />
                Davenport, Iowa
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>FIANM</h3>
              <p>
                Fellow, International Academy of Neuromusculoskeletal Medicine
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>CCSP</h3>
              <p>Certified Chiropractic Sports Practitioner</p>
            </div>
            <div>
              <span>04</span>
              <h3>CAc</h3>
              <p>Certified Acupuncturist</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container bio-grid">
          <div>
            <p className="eyebrow">Tampa feels like home</p>
            <h2>
              More life
              <br />
              outside the office.
            </h2>
          </div>
          <div className="prose">
            <p>
              Dr. Frankie enjoys fitness, Florida sunshine, and getting
              outdoors. Away from the practice, he likes exploring Tampa’s
              markets, restaurants, and festivals with his family and dogs.
            </p>
            <p>
              That’s the feeling behind Feel Good: making space for the everyday
              things you love. Whether your version is a workout, a walk, or a
              more comfortable workday, it is worth talking about.
            </p>
            <Link className="text-link" href="/new-patients">
              Get comfortable with your first visit <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <VisitCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </main>
  );
}

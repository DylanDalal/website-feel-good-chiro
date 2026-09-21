import { Photo } from '@/components/photo';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { BookButton, FAQ, VisitCTA } from '@/components/site-shell';
import { services, conditions } from '@/lib/care';
import { articles } from './articles/data';
import { patientFAQs } from './new-patients/page';
import { ogImage } from '@/lib/seo';
import { languageAlternates } from '@/lib/i18n';
export const metadata = {
  alternates: { canonical: '/', languages: languageAlternates('/') },
  openGraph: {
    title: 'Tampa Chiropractor | Get back to feeling good.',
    description:
      'Personal chiropractic care, acupuncture, rehabilitation, and exercise recovery with Dr. Frankie Amarillas at Feel Good Chiropractic in Tampa.',
    url: '/',
    images: [ogImage],
  },
};
export default function Home() {
  return (
    <main id="main">
      <section className="home-hero" id="top">
        <Photo
          className="sunset-backdrop"
          src="/images/pink-gulf-sunset.jpg"
          alt=""
          width={1920}
          height={1280}
          priority
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Chiropractor in Tampa · Chiropractic, acupuncture & recovery
            </p>
            <h1>
              Get back to
              <br />
              feeling good.
            </h1>
            <p className="hero-lede">
              More comfortable days. More of what you love.
              <br />
              Personal care and exercise recovery with Dr. Frankie Amarillas.
            </p>
            <div className="hero-actions">
              <BookButton>Find your next step</BookButton>
              <a className="text-link" href="/about-us">
                Meet Dr. Frankie <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-portraits">
            <div className="portrait-main pink-photo">
              <Photo
                src="/images/chiropractic-consultation.jpg"
                alt="A chiropractor listening to a patient during a consultation"
                width={1200}
                height={800}
                priority
              />
            </div>
            <div className="portrait-small pink-photo">
              <Photo
                src="/images/shoulder-mobility.jpg"
                alt="Hands-on shoulder movement assessment"
                width={1200}
                height={800}
              />
            </div>
            <span className="photo-label">
              A little care.
              <br />A lot more possibility.
            </span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>Your Tampa chiropractor · Ehrlich Road</span>
          <a href="#care">
            Find your feel good <ArrowDown size={16} />
          </a>
        </div>
      </section>
      <section className="intro-section container" id="care">
        <p className="eyebrow">Feel good starts with feeling heard</p>
        <h2>A Tampa chiropractor who starts with you.</h2>
        <p>
          Tell us what’s been bothering you and what you want to get back to.
          Dr. Frankie will listen, explain your options, and help you understand
          your next step.
        </p>
        <div className="promises">
          <span>No long-term contracts</span>
          <span>A personal care plan</span>
          <span>Se habla Español</span>
        </div>
      </section>
      <section className="home-care section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Our care</p>
              <h2>
                A good place
                <br />
                to start.
              </h2>
            </div>
            <p>
              Hands-on care, movement, and a plan that makes sense for you.
              Explore the options available at our Tampa office.
            </p>
          </div>
          <div className="home-service-list">
            {services.map((s, i) => (
              <a href={`/${s.slug}`} key={s.slug}>
                <span className="service-number">0{i + 1}</span>
                <h3>{s.label}</h3>
                <p>
                  {
                    [
                      'Personalized care for your spine, joints, and everyday movement.',
                      'A conversation about how acupuncture might fit your care.',
                      'Cox flexion-distraction for appropriate lower-back concerns.',
                      'Functional training with your favorite activities in mind.',
                      'Functional exercise, hands-on care, and an infrared sauna open to all.',
                      'Focused techniques for muscles and surrounding tissues.',
                    ][i]
                  }
                </p>
                <ArrowUpRight size={27} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="home-doctor section" id="doctor">
        <div className="container home-doctor-grid">
          <figure className="real-portrait">
            <Photo
              src="/images/dr-frankie.jpg"
              alt="Dr. Frankie Amarillas, Tampa chiropractor"
              width={235}
              height={313}
            />
            <figcaption>
              Dr. Frankie Amarillas
              <br />
              <span>DC · FIANM · CCSP · CAc</span>
            </figcaption>
          </figure>
          <div>
            <p className="eyebrow">Meet your chiropractor</p>
            <h2>
              Easy to talk to.
              <br />
              Here to help.
            </h2>
            <p className="section-copy">
              Your questions are welcome here. Dr. Frankie brings a personal
              approach to chiropractic care, acupuncture, and rehabilitation,
              with your goals at the center of the conversation.
            </p>
            <p className="section-copy">
              A Palmer College graduate, sports chiropractic practitioner, and
              fan of life outdoors. He’s here to help you make sense of your
              next step.
            </p>
            <a className="text-link" href="/about-us">
              Get to know Dr. Frankie <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="life-section" id="recovery">
        <Photo
          src="/images/infrared-sauna.jpg"
          alt="The infrared sauna at Feel Good Chiropractic"
          width={1672}
          height={941}
        />
        <div className="container">
          <p className="eyebrow">Exercise recovery</p>
          <h2>
            Recover after
            <br />
            your workouts.
          </h2>
          <p>
            Sore, stiff, or worn out after training? Dr. Frankie is a Certified
            Chiropractic Sports Practitioner with the tools and the knowledge to
            help you recover: hands-on chiropractic and soft tissue care,
            functional exercise, and an infrared sauna right here in the office.
          </p>
          <div className="hero-actions">
            <a className="button" href="/exercise-recovery">
              Explore recovery <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="/sports-chiropractic">
              Sports & rehabilitation <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section conditions-section" id="conditions">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What brings you in?</p>
              <h2>
                Start with
                <br />
                how you feel.
              </h2>
            </div>
            <p>
              From a back that aches at your desk to a knee that’s slowing your
              run, we’ll help you explore the right next step.
            </p>
          </div>
          <div className="condition-grid">
            {conditions.map((page) => (
              <a href={`/${page.slug}`} key={page.slug}>
                {page.label}
                <ArrowUpRight size={24} />
              </a>
            ))}
            <a href="/articles/headaches">
              Headaches
              <ArrowUpRight size={24} />
            </a>
            <a href="/articles/care-after-auto-accidents">
              After a car accident
              <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
      </section>
      <section className="section first-visit-home" id="first-visit">
        <div className="container visit-layout">
          <div>
            <p className="eyebrow">Your first visit</p>
            <h2>
              Come in curious.
              <br />
              Leave with a plan.
            </h2>
            <p className="section-copy">
              No need to have it all figured out. That’s what the conversation
              is for.
            </p>
            <a className="text-link" href="/new-patients">
              Plan your first visit <ArrowUpRight size={18} />
            </a>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Tell us your story.</h3>
                <p>
                  Your symptoms, your history, and what you want to do again.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Get a thoughtful assessment.</h3>
                <p>
                  An examination to understand your concerns and suitable
                  options.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Choose your next step.</h3>
                <p>
                  A clear conversation about care, with your questions welcome.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="patient-quote">
        <div className="container">
          <p className="eyebrow">A patient’s perspective</p>
          <blockquote>
            “He is clearly tailoring his treatment for each patient.”
          </blockquote>
          <p>Janel C. · Excerpt from a published patient review</p>
          <a className="text-link" href="/reviews">
            More patient perspectives <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <section className="section" id="resources">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A little useful reading</p>
              <h2>
                Less guesswork.
                <br />
                More understanding.
              </h2>
            </div>
            <a className="text-link" href="/articles">
              All articles <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="resource-grid">
            {[articles[1], articles[2], articles[8]].map((a) => (
              <a
                className="resource-card"
                href={`/articles/${a.slug}`}
                key={a.slug}
              >
                <span className="small">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className="text-link">
                  Read the article <ArrowUpRight size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-section" id="questions">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Before you visit</p>
            <h2>
              A few good
              <br />
              questions.
            </h2>
          </div>
          <FAQ
            items={[
              patientFAQs[0],
              patientFAQs[3],
              patientFAQs[2],
              {
                question: 'Where is the office?',
                answer:
                  'We’re at 5121 Ehrlich Road, Suite 109-A, Tampa, FL 33624. Call 813-962-2489 for appointment availability or help with directions.',
              },
            ]}
          />
        </div>
      </section>
      <VisitCTA />
    </main>
  );
}

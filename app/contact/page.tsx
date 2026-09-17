import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { PageIntro } from '@/components/content';
import { BookButton } from '@/components/site-shell';
import { site } from '@/lib/site';
import { languageAlternates } from '@/lib/i18n';
export const metadata = {
  title: 'Contact & Directions | Chiropractor in North Tampa',
  description:
    'Visit Feel Good Chiropractic at 5121 Ehrlich Road, Suite 109-A, Tampa, FL 33624. Call 813-962-2489 for appointments, office hours, and directions.',
  alternates: {
    canonical: '/contact',
    languages: languageAlternates('/contact'),
  },
};
export function Hours() {
  return (
    <dl className="hours">
      <div>
        <dt>Monday, Wednesday, Friday</dt>
        <dd>8am–12pm & 2pm–6pm</dd>
      </div>
      <div>
        <dt>Tuesday & Thursday</dt>
        <dd>By appointment</dd>
      </div>
      <div>
        <dt>Saturday</dt>
        <dd>By appointment</dd>
      </div>
    </dl>
  );
}
export default function Contact() {
  return (
    <main id="main">
      <PageIntro
        eyebrow="Ehrlich Road · Tampa, Florida"
        title="Your next good day starts here."
        text="Book online or give us a call. We’re happy to help with appointments, directions, and questions before your visit."
      >
        <div className="hero-actions">
          <BookButton />
          <a className="text-link" href={site.tel}>
            {site.phone} <ArrowUpRight size={18} />
          </a>
        </div>
      </PageIntro>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Come say hello</p>
            <h2>
              Feel Good
              <br />
              Chiropractic
            </h2>
            <a href={site.directions} target="_blank" rel="noreferrer">
              <MapPin size={23} />
              <span>
                {site.address}
                <br />
                {site.city}
                <span className="text-link">
                  Get directions <ArrowUpRight size={16} />
                </span>
              </span>
            </a>
            <a href={site.tel}>
              <Phone size={21} />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={21} />
              {site.email}
            </a>
            <p className="small">
              For scheduling and general questions. Please don’t send private
              medical details by regular email.
            </p>
          </div>
          <div className="hours-panel">
            <p className="eyebrow">Office hours</p>
            <h2>Find your time.</h2>
            <Hours />
            <p className="small">
              Call for current availability before visiting. Holiday hours may
              vary.
            </p>
          </div>
        </div>
      </section>
      <section className="location-section section">
        <div className="container bio-grid">
          <div>
            <p className="eyebrow">One Tampa office</p>
            <h2>
              Close to your
              <br />
              everyday life.
            </h2>
          </div>
          <div className="prose">
            <p>
              You’ll find Feel Good Chiropractic on Ehrlich Road in North Tampa,
              serving patients from Northdale, Carrollwood, Lutz, and
              surrounding communities.
            </p>
            <p>
              Coming from Citrus Park, Westchase, or Town ’n’ Country? Use the
              directions link for a current route to our Ehrlich Road office.
              Allow for local traffic and call if you need help finding the
              suite.
            </p>
            <a
              className="text-link"
              href={site.directions}
              target="_blank"
              rel="noreferrer"
            >
              Open directions in Google Maps <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="map-frame">
            <iframe
              title="Map to Feel Good Chiropractic, 5121 Ehrlich Road, Suite 109-A, Tampa, FL 33624"
              src="https://www.google.com/maps?q=Feel+Good+Chiropractic,+5121+Ehrlich+Rd+Suite+109-A,+Tampa,+FL+33624&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className="section contact-close">
        <div className="container">
          <p className="eyebrow">New around here?</p>
          <h2>We’ll help you feel at home.</h2>
          <p>
            Find your forms and get a feel for what happens at your first
            appointment.
          </p>
          <Link className="text-link" href="/new-patients">
            Plan your first visit <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

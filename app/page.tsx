import Image from 'next/image';
import {
  Activity, ArrowRight, CalendarDays, Check, ChevronRight, CircleDollarSign,
  Clock3, Dumbbell, Footprints, HandHeart, Languages, MapPin, Phone, Quote,
  ShieldCheck, Sparkles, Stethoscope, Waves,
} from 'lucide-react';

const bookingUrl = 'https://practice.chirotouch.com/portal/FeelGoodChiropractic_2';
const formUrl = 'https://s47075.pcdn.co/wp-content/uploads/sites/144/2018/10/NewPatientForms.pdf';
const mapUrl = 'https://maps.google.com/?q=5121+Ehrlich+Rd+Suite+109-A+Tampa+FL+33624';

const services = [
  { icon: Activity, title: 'Chiropractic care', text: 'Personalized care for the spine, nervous system, and musculoskeletal system—with a focus on what is driving your pain.' },
  { icon: Waves, title: 'Cox spinal decompression', text: 'A gentle, non-invasive option designed to reduce pressure and improve movement for people living with chronic back pain.' },
  { icon: Sparkles, title: 'Acupuncture', text: 'Time-tested support for natural pain relief and whole-body wellness, offered with a thoughtful clinical approach.' },
  { icon: HandHeart, title: 'Soft tissue care', text: 'Instrument-assisted techniques and pin-and-stretch treatment help address restricted, uncomfortable muscles and connective tissue.' },
  { icon: Dumbbell, title: 'Sports & rehabilitation', text: 'Functional training and rehabilitation help you rebuild strength, stability, and confidence after injury.' },
  { icon: Footprints, title: 'Foot, knee & joint care', text: 'Care for common concerns including plantar fasciitis, knee pain, shoulder pain, sciatica, and SI joint pain.' },
];

const reviews = [
  { quote: 'Dr. Amarillas was careful to explain the steps of the care and follow up. I was so completely satisfied with his treatment.', author: 'BJ W.' },
  { quote: 'Frankie helped me with my severe lower back pain in four visits. He listened, explained the plan, and helped me get moving again.', author: 'Dewayne N.' },
  { quote: 'There are no pressure sales tactics. He is clearly tailoring his treatment for each patient. This one is a good one.', author: 'Janel C.' },
];

const faqs = [
  { question: 'Will I have to commit to a long treatment plan?', answer: 'No. Feel Good Chiropractic does not use long-term contracts. Dr. Frankie will discuss what he finds, explain your options, and build care around your goals.' },
  { question: 'What happens at my first appointment?', answer: 'Your first visit includes a review of your history, a thorough intake and examination, and time to discuss findings, ask questions, and choose the next step together.' },
  { question: 'Which insurance plans does the office work with?', answer: 'The office can file primary claims for Medicare, Florida Blue, and Cigna. Benefits and visit limits vary, so patients should confirm coverage with their carrier before scheduling.' },
  { question: 'Do you offer care in Spanish?', answer: 'Yes. Dr. Frankie is fluent in Spanish and can explain your care in the language that feels most comfortable to you.' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Feel Good Chiropractic',
  url: 'https://feelgoodchiro.net/',
  telephone: '+1-813-962-2489',
  email: 'frankie@feelgoodchiro.net',
  description: 'Evidence-based, patient-centered chiropractic care in Tampa, Florida.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5121 Ehrlich Road, Suite 109-A',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33624',
    addressCountry: 'US',
  },
  areaServed: ['Tampa', 'Carrollwood', 'Northdale', 'Lutz'],
  medicalSpecialty: 'Chiropractic',
  paymentAccepted: 'Cash, check, credit card, debit card, insurance',
  sameAs: ['https://www.facebook.com/feelgoodchiro/'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Feel Good Chiropractic home">
          <Image src="/images/feel-good-logo.png" alt="Feel Good Chiropractic" width={220} height={100} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#care">Care</a><a href="#doctor">Dr. Frankie</a><a href="/articles">Articles</a><a href="#visit">Your visit</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-phone" href="tel:+18139622489"><Phone size={18} /> 813-962-2489</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Chiropractic care in Tampa, Florida</p>
          <h1>Feel better.<br /><em>Move forward.</em></h1>
          <p className="hero-lede">Evidence-based, patient-centered care with no long-term contracts. Your goals shape the plan from day one.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={20} /> Book online <ArrowRight size={18} /></a>
            <a className="button button-secondary" href="tel:+18139622489"><Phone size={19} /> Call the office</a>
          </div>
          <a className="location-line" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={18} /> 5121 Ehrlich Rd, Suite 109-A · Tampa</a>
        </div>
        <div className="hero-visual">
          <div className="photo-frame"><Image src="/images/chiropractic-consultation.jpg" alt="Chiropractor discussing a personalized care plan with a patient in a bright Tampa clinic" fill sizes="(max-width: 800px) 100vw, 48vw" priority /></div>
          <div className="care-note"><span>One-on-one care</span><strong>Built around you</strong></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Practice highlights">
        <div><ShieldCheck /><span><strong>No long-term contracts</strong>Care at your pace</span></div>
        <div><Stethoscope /><span><strong>Evidence-based</strong>Clinical, thoughtful plans</span></div>
        <div><Languages /><span><strong>Se habla Español</strong>Care in English or Spanish</span></div>
      </section>

      <section className="care-section section" id="care">
        <div className="section-heading">
          <div><p className="eyebrow">Chiropractic services</p><h2>Care for the way your body moves.</h2></div>
          <p>From persistent back or neck pain to sports injuries and mobility concerns, Dr. Frankie combines hands-on treatment, rehabilitation, and practical education.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className={index === 1 ? 'service-card featured' : 'service-card'} key={title}>
              <div className="service-icon"><Icon size={24} /></div><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="conditions-row"><strong>Common conditions we address</strong><span>Back pain</span><span>Neck pain</span><span>Headaches</span><span>Sciatica</span><span>Knee pain</span><span>Shoulder pain</span><span>TMJ</span><span>Pregnancy-related back pain</span></div>
        <div className="care-photos">
          <figure className="care-photo care-photo-large">
            <Image src="/images/shoulder-mobility.jpg" alt="Gentle shoulder mobility assessment during chiropractic rehabilitation" fill sizes="(max-width: 760px) 100vw, 65vw" />
            <figcaption><strong>Targeted care</strong><span>Hands-on assessment, tailored to how you move.</span></figcaption>
          </figure>
          <figure className="care-photo care-photo-small">
            <Image src="/images/active-tampa-couple.jpg" alt="Active middle-aged couple walking comfortably on a sunny Tampa trail" fill sizes="(max-width: 760px) 100vw, 35vw" />
            <figcaption><strong>Back to your life</strong><span>Movement with less pain and more confidence.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="doctor-section section" id="doctor">
        <div className="doctor-photo">
          <Image src="/images/dr-frankie.jpg" alt="Dr. Frankie Amarillas, Tampa chiropractor" fill sizes="(max-width: 800px) 85vw, 38vw" />
          <div className="doctor-stamp"><Check size={22} /><span>Board certified<br />chiropractic specialist</span></div>
        </div>
        <div className="doctor-copy">
          <p className="eyebrow">Meet your Tampa chiropractor</p>
          <h2>Dr. Frankie Amarillas</h2>
          <p className="lead">His focus is simple: help you get out of pain quickly, then give you the knowledge, strength, and flexibility to stay active.</p>
          <p>A Palmer College graduate and Fellow of the International Academy of Neuromusculoskeletal Medicine, Dr. Frankie brings experience from both neurology and orthopedic settings. His approach blends chiropractic manipulation with physical therapy protocols, functional training, and rehabilitation.</p>
          <blockquote>“I look to my patients as partners. Your treatment plan will be built around your needs and your goals.”</blockquote>
          <div className="credential-list">
            <span><Check size={17} /> Doctor of Chiropractic</span><span><Check size={17} /> Certified Acupuncturist</span>
            <span><Check size={17} /> Chiropractic Sports Practitioner</span><span><Check size={17} /> Care available in Spanish</span>
          </div>
        </div>
      </section>

      <section className="visit-section section" id="visit">
        <div className="visit-intro">
          <p className="eyebrow">Your first chiropractic visit</p><h2>Comfortable. Clear. No surprises.</h2>
          <p>We make sure you feel safe, heard, and taken care of from the moment you arrive.</p>
          <a className="text-link" href={formUrl} target="_blank" rel="noreferrer">Download new patient forms <ArrowRight size={18} /></a>
        </div>
        <ol className="steps">
          <li><span>01</span><div><h3>Tell us what’s going on</h3><p>We’ll review your medical history and talk through your concerns, symptoms, and goals.</p></div></li>
          <li><span>02</span><div><h3>Understand the source</h3><p>A thorough examination helps identify pain generators and measure any movement dysfunction.</p></div></li>
          <li><span>03</span><div><h3>Choose your next step</h3><p>Dr. Frankie will explain what he finds, answer your questions, and help you choose treatment options.</p></div></li>
        </ol>
      </section>

      <section className="reviews-section section">
        <div className="reviews-heading"><p className="eyebrow">Tampa patient stories</p><h2>Care people feel good about.</h2><a className="text-link" href="https://feelgoodchiro.net/reviews/" target="_blank" rel="noreferrer">Read more reviews <ArrowRight size={18} /></a></div>
        <div className="reviews-grid">
          {reviews.map((review) => <figure key={review.author}><Quote size={28} /><blockquote>“{review.quote}”</blockquote><figcaption>{review.author}</figcaption></figure>)}
        </div>
      </section>

      <section className="details-section section">
        <div className="details-card hours-card"><Clock3 size={26} /><p className="eyebrow">Office hours</p><h2>Plan your visit.</h2>
          <dl><div><dt>Monday, Wednesday, Friday</dt><dd>8am–12pm · 2pm–6pm</dd></div><div><dt>Tuesday, Thursday</dt><dd>By appointment</dd></div><div><dt>Saturday</dt><dd>By appointment</dd></div></dl>
          <p className="details-note">Please call for current availability before visiting.</p>
        </div>
        <div className="details-card payment-card"><CircleDollarSign size={26} /><p className="eyebrow">Insurance & payment</p><h2>Straightforward options.</h2>
          <p>Feel Good Chiropractic can file primary claims for Medicare, Florida Blue, and Cigna. Coverage varies by plan, so please confirm your chiropractic benefits directly with your carrier.</p>
          <p>Major credit cards, ATM cards, cash, and personal checks are accepted.</p>
        </div>
      </section>

      <section className="faq-section section">
        <div className="faq-heading"><p className="eyebrow">Frequently asked questions</p><h2>Helpful answers before you visit.</h2></div>
        <div className="faq-list">
          {faqs.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy"><p className="eyebrow">Ready when you are</p><h2>Let’s help you feel good again.</h2><p>Conveniently located near the Veterans Expressway, Dale Mabry Highway, and Ehrlich Road.</p>
          <div className="contact-actions"><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={20} /> Book online</a><a className="button button-outline-light" href="tel:+18139622489"><Phone size={20} /> 813-962-2489</a></div>
        </div>
        <a className="address-card" href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={30} /><span>Feel Good Chiropractic<strong>5121 Ehrlich Road<br />Suite 109-A<br />Tampa, FL 33624</strong></span><ChevronRight size={24} /></a>
      </section>

      <footer>
        <div className="footer-main"><Image src="/images/feel-good-logo.png" alt="Feel Good Chiropractic" width={210} height={96} /><p>Evidence-based, patient-centered chiropractic care for Greater Northdale, Carrollwood, Lutz, and surrounding Tampa communities.</p>
          <div className="footer-links"><a href="mailto:frankie@feelgoodchiro.net">frankie@feelgoodchiro.net</a><a href="/articles">Articles & resources</a><a href="https://www.facebook.com/feelgoodchiro/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.designsforhealth.com/u/frankieamarillasdc" target="_blank" rel="noreferrer">Vitamin orders</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Feel Good Chiropractic</span><span>Be well… Live well.</span></div>
      </footer>

      <div className="mobile-action-bar" aria-label="Quick actions"><a href="tel:+18139622489"><Phone size={19} /> Call</a><a href={bookingUrl} target="_blank" rel="noreferrer"><CalendarDays size={19} /> Book online</a></div>
    </main>
  );
}

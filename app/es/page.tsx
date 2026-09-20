import { Photo } from '@/components/photo';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { BookButton, FAQ, VisitCTA } from '@/components/site-shell';
import { CareLinks } from '@/components/content';
import { carePagesEs } from '@/lib/care-es';
import { languageAlternates } from '@/lib/i18n';
import { ogImage } from '@/lib/seo';
export const metadata = {
  title: 'Quiropráctico en Tampa | Se Habla Español',
  description:
    'Quiropráctico en Tampa que habla español. El Dr. Frankie Amarillas ofrece cuidado quiropráctico, acupuntura y rehabilitación en Ehrlich Road. Llame al 813-962-2489.',
  alternates: { canonical: '/es', languages: languageAlternates('/es') },
  openGraph: {
    title: 'Quiropráctico en Tampa | Feel Good Chiropractic',
    description:
      'Cuidado quiropráctico personal en Tampa con el Dr. Frankie Amarillas. Se habla español.',
    url: '/es',
    locale: 'es_US',
    images: [ogImage],
  },
};
const faqs = [
  {
    question: '¿El Dr. Frankie habla español?',
    answer:
      'Sí. Se habla español en la oficina, así que puede explicar sus síntomas, hacer preguntas y entender su plan de cuidado en su idioma.',
  },
  {
    question: '¿Dónde está la oficina?',
    answer:
      'Estamos en 5121 Ehrlich Road, Suite 109-A, Tampa, FL 33624, en el norte de Tampa. Llame al 813-962-2489 para conocer la disponibilidad de citas o pedir ayuda con la ruta.',
  },
  {
    question: '¿Necesito un diagnóstico antes de venir?',
    answer:
      'No. Puede llegar con sus preguntas y sus síntomas. El examen y la conversación con el Dr. Frankie ayudan a definir el siguiente paso apropiado.',
  },
  {
    question: '¿Tengo que firmar un contrato a largo plazo?',
    answer:
      'No. Feel Good Chiropractic no exige contratos a largo plazo. Su plan se conversa con usted y se reevalúa conforme avanza.',
  },
];
export default function HomeEs() {
  return (
    <main id="main" lang="es">
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
            <p className="eyebrow">Quiropráctico en Tampa · Se habla español</p>
            <h1>
              Vuelva a
              <br />
              sentirse bien.
            </h1>
            <p className="hero-lede">
              Días más cómodos. Más de lo que le gusta.
              <br />
              Cuidado personal y recuperación con el Dr. Frankie Amarillas.
            </p>
            <div className="hero-actions">
              <BookButton>Encuentre su siguiente paso</BookButton>
              <a className="text-link" href="/es/cuidado">
                Ver nuestro cuidado <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-portraits">
            <div className="portrait-main pink-photo">
              <Photo
                src="/images/chiropractic-consultation.jpg"
                alt="Un quiropráctico escuchando a una paciente durante una consulta en Tampa"
                width={1200}
                height={800}
                priority
              />
            </div>
            <div className="portrait-small pink-photo">
              <Photo
                src="/images/shoulder-mobility.jpg"
                alt="Evaluación manual del movimiento del hombro"
                width={1200}
                height={800}
              />
            </div>
            <span className="photo-label">
              Un poco de cuidado.
              <br />
              Mucha más posibilidad.
            </span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>Su quiropráctico en Tampa · Ehrlich Road</span>
          <a href="#cuidado">
            Encuentre su bienestar <ArrowDown size={16} />
          </a>
        </div>
      </section>
      <section className="intro-section container" id="cuidado">
        <p className="eyebrow">Sentirse bien empieza por sentirse escuchado</p>
        <h2>Un quiropráctico en Tampa que empieza por usted.</h2>
        <p>
          Cuéntenos qué le ha estado molestando y a qué quiere volver. El Dr.
          Frankie escuchará, le explicará sus opciones y le ayudará a entender
          su siguiente paso.
        </p>
        <div className="promises">
          <span>Sin contratos a largo plazo</span>
          <span>Un plan de cuidado personal</span>
          <span>Se habla español</span>
        </div>
      </section>
      <section className="home-care section" id="servicios">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Nuestro cuidado</p>
              <h2>
                Un buen lugar
                <br />
                para empezar.
              </h2>
            </div>
            <p>
              Cuidado manual, movimiento y un plan que tenga sentido para usted.
              Conozca las opciones disponibles en nuestra oficina de Tampa.
            </p>
          </div>
          <CareLinks pages={carePagesEs} base="/es" lang="es" />
        </div>
      </section>
      <section className="home-doctor section" id="doctor">
        <div className="container home-doctor-grid">
          <figure className="real-portrait">
            <Photo
              src="/images/dr-frankie.jpg"
              alt="Dr. Frankie Amarillas, quiropráctico en Tampa"
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
            <p className="eyebrow">Conozca a su quiropráctico</p>
            <h2>
              Fácil de tratar.
              <br />
              Aquí para ayudar.
            </h2>
            <p className="section-copy">
              Sus preguntas son bienvenidas. El Dr. Frankie ofrece un enfoque
              personal al cuidado quiropráctico, la acupuntura y la
              rehabilitación, con sus metas en el centro de la conversación.
            </p>
            <p className="section-copy">
              Graduado de Palmer College, practicante quiropráctico deportivo y
              aficionado a la vida al aire libre. Está aquí para ayudarle a
              entender su siguiente paso.
            </p>
            <a className="text-link" href="/es/cuidado">
              Ver todo el cuidado <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="section faq-section" id="preguntas">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Antes de su visita</p>
            <h2>
              Algunas buenas
              <br />
              preguntas.
            </h2>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>
      <VisitCTA lang="es" />
    </main>
  );
}

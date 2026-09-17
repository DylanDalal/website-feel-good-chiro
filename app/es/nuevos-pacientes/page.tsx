import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/content';
import { BookButton, FAQ, VisitCTA } from '@/components/site-shell';
import { site } from '@/lib/site';
import { languageAlternates } from '@/lib/i18n';
import { ogImage } from '@/lib/seo';
export const metadata = {
  title: 'Primera Visita | Quiropráctico en Tampa',
  description:
    'Qué esperar en su primera visita con el Dr. Frankie Amarillas en Tampa: formularios, examen y su plan de cuidado. Se habla español. Llame al 813-962-2489.',
  alternates: {
    canonical: '/es/nuevos-pacientes',
    languages: languageAlternates('/es/nuevos-pacientes'),
  },
  openGraph: {
    title: 'Nuevos Pacientes | Feel Good Chiropractic Tampa',
    description:
      'Cómo es su primera visita a nuestra oficina quiropráctica en Tampa. Se habla español.',
    url: '/es/nuevos-pacientes',
    locale: 'es_US',
    images: [ogImage],
  },
};
const faqs = [
  {
    question: '¿Qué debo llevar a mi primera visita?',
    answer:
      'Una identificación, su tarjeta de seguro si la tiene, una lista de sus medicamentos y cualquier informe de estudios de imagen relacionados. Traiga ropa cómoda que le permita moverse.',
  },
  {
    question: '¿Puedo traer a alguien que me acompañe?',
    answer:
      'Sí. Puede venir acompañado por un familiar o amigo. Si prefiere conversar todo en español, avísenos al llamar y con gusto lo coordinamos.',
  },
  {
    question: '¿Cuánto dura la primera cita?',
    answer:
      'Planifique más tiempo que en una visita de seguimiento, ya que incluye su historial, el examen y la conversación sobre las opciones. Llame a la oficina para conocer la duración actual.',
  },
  {
    question: '¿Cómo cambio o cancelo mi cita?',
    answer:
      'Comuníquese con la oficina al 813-962-2489 en cuanto sepa que sus planes cambiaron. Pregunte por las políticas de cancelación vigentes al momento de reservar.',
  },
  {
    question: '¿Necesito una referencia médica?',
    answer:
      'Por lo general no se requiere una referencia para agendar. Si su plan de seguro la exige, llame a la oficina para conversar los detalles antes de su cita.',
  },
];
export default function NuevosPacientesEs() {
  return (
    <main id="main" lang="es">
      <PageIntro
        eyebrow="Su primera visita"
        title="Venga tal como está."
        text="Unas cuantas preguntas. Un poco de papeleo. Una conversación sobre usted. Así es como su primera cita se sentirá más familiar."
      >
        <div className="hero-actions">
          <BookButton>Reservar una cita</BookButton>
          <a
            className="text-link"
            href={site.forms}
            target="_blank"
            rel="noreferrer"
          >
            Formularios del paciente (PDF) <ArrowUpRight size={18} />
          </a>
        </div>
      </PageIntro>
      <section className="section">
        <div className="container visit-layout">
          <div>
            <p className="eyebrow">Del saludo a su siguiente paso</p>
            <h2>
              Tiempo para escuchar.
              <br />
              Espacio para preguntar.
            </h2>
            <Image
              unoptimized
              className="visit-photo"
              src="/images/chiropractic-consultation.jpg"
              alt="Una conversación tranquila entre el quiropráctico y una paciente"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Cuente su historia.</h3>
                <p>
                  Comparta su historial de salud, lo que ha estado sintiendo y
                  las actividades a las que quiere volver. Mencione cuidados
                  previos, medicamentos, lesiones y cualquier duda.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Entienda qué está pasando.</h3>
                <p>
                  El Dr. Frankie examinará su preocupación y su movimiento. Los
                  hallazgos ayudan a determinar si el cuidado aquí es apropiado
                  o si otra evaluación sería más útil.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Elija su siguiente paso.</h3>
                <p>
                  Conversen la recomendación, las alternativas, los costos y qué
                  esperar. Sus preferencias importan, y puede hacer preguntas
                  antes de decidir sobre el tratamiento.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section className="section faq-section">
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

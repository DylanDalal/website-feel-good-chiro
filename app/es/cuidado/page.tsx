import { ArrowUpRight } from 'lucide-react';
import { PageIntro, CareLinks } from '@/components/content';
import { VisitCTA } from '@/components/site-shell';
import { carePagesEs } from '@/lib/care-es';
import { languageAlternates } from '@/lib/i18n';
import { ogImage } from '@/lib/seo';
export const metadata = {
  title: 'Servicios Quiroprácticos en Tampa',
  description:
    'Cuidado quiropráctico, acupuntura, descompresión Cox, rehabilitación deportiva y terapia de tejidos blandos en Tampa. Se habla español.',
  alternates: {
    canonical: '/es/cuidado',
    languages: languageAlternates('/es/cuidado'),
  },
  openGraph: {
    title: 'Servicios Quiroprácticos en Tampa | Feel Good Chiropractic',
    description:
      'Conozca las opciones de cuidado disponibles en nuestra oficina de Tampa. Se habla español.',
    url: '/es/cuidado',
    locale: 'es_US',
    images: [ogImage],
  },
};
export default function CuidadoEs() {
  return (
    <main id="main" lang="es">
      <PageIntro
        eyebrow="Nuestro cuidado · Tampa, Florida"
        title="Un buen lugar para empezar."
        text="Usted trae sus preguntas, sus metas y aquello que le ha estado molestando. Repasaremos las opciones juntos."
      />
      <section className="section care-surface">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Cuidado pensado para usted</p>
              <h2>
                Distintas herramientas.
                <br />
                Un plan personal.
              </h2>
            </div>
            <p>
              Su examen guía la recomendación. Conozca los enfoques disponibles
              en Feel Good Chiropractic.
            </p>
          </div>
          <CareLinks pages={carePagesEs} base="/es" lang="es" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">¿Qué le preocupa?</p>
              <h2>Empiece por cómo se siente.</h2>
            </div>
            <p>
              No necesita llegar con un diagnóstico. Cuéntenos qué le molesta y
              el Dr. Frankie le explicará las opciones en español.
            </p>
          </div>
          <div className="condition-grid">
            <a href="/es/quiropractica">
              Dolor de espalda
              <ArrowUpRight size={24} />
            </a>
            <a href="/es/quiropractica">
              Dolor de cuello
              <ArrowUpRight size={24} />
            </a>
            <a href="/es/descompresion-cox">
              Ciática
              <ArrowUpRight size={24} />
            </a>
            <a href="/es/quiropractica-deportiva">
              Lesiones deportivas
              <ArrowUpRight size={24} />
            </a>
            <a href="/es/terapia-de-tejidos-blandos">
              Tensión muscular
              <ArrowUpRight size={24} />
            </a>
            <a href="/es/acupuntura">
              Dolor de cabeza
              <ArrowUpRight size={24} />
            </a>
          </div>
        </div>
      </section>
      <VisitCTA lang="es" />
    </main>
  );
}

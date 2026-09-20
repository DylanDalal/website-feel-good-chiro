import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { PageIntro } from '@/components/content';
import { BookButton, VisitCTA } from '@/components/site-shell';
import { site } from '@/lib/site';
import { languageAlternates } from '@/lib/i18n';
import { ogImage } from '@/lib/seo';
export const metadata = {
  title: 'Visítanos | Quiropráctico en el Norte de Tampa',
  description:
    'Visite Feel Good Chiropractic en 5121 Ehrlich Road, Suite 109-A, Tampa, FL 33624. Se habla español. Llame al 813-962-2489 para citas, horario y direcciones.',
  alternates: {
    canonical: '/es/visitanos',
    languages: languageAlternates('/es/visitanos'),
  },
  openGraph: {
    title: 'Visítanos | Feel Good Chiropractic Tampa',
    description:
      'Dirección, horario y cómo llegar a nuestra oficina quiropráctica en Ehrlich Road, Tampa. Se habla español.',
    url: '/es/visitanos',
    locale: 'es_US',
    images: [ogImage],
  },
};
export default function VisitanosEs() {
  return (
    <main id="main" lang="es">
      <PageIntro
        eyebrow="Ehrlich Road · Tampa, Florida"
        title="Su próximo buen día empieza aquí."
        text="Reserve en línea, o llámenos y con gusto le atendemos en español."
      >
        <div className="hero-actions">
          <BookButton>Reservar una cita</BookButton>
          <a className="text-link" href={site.tel}>
            Llamar al {site.phone} <ArrowUpRight size={18} />
          </a>
        </div>
      </PageIntro>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Venga a saludarnos</p>
            <h2>Una oficina en Tampa.</h2>
            <p>
              <MapPin size={23} />
              <a href={site.directions} target="_blank" rel="noreferrer">
                <span className="text-link">
                  {site.address}
                  <br />
                  {site.city}
                </span>
              </a>
            </p>
            <p>
              <Phone size={23} />
              <a className="text-link" href={site.tel}>
                {site.phone}
              </a>
            </p>
            <p>
              <Mail size={23} />
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="small">
              Se habla español. Si prefiere conversar su cuidado en español,
              avísenos al llamar.
            </p>
          </div>
          <div className="hours-panel">
            <p className="eyebrow">Horario de oficina</p>
            <dl className="hours">
              <div>
                <dt>Lunes, miércoles y viernes</dt>
                <dd>8am–12pm y 2pm–6pm</dd>
              </div>
              <div>
                <dt>Martes y jueves</dt>
                <dd>Con cita previa</dd>
              </div>
              <div>
                <dt>Sábado</dt>
                <dd>Con cita previa</dd>
              </div>
            </dl>
            <p className="small">
              El horario puede cambiar. Llame al {site.phone} para confirmar la
              disponibilidad actual.
            </p>
          </div>
        </div>
      </section>
      <section className="location-section section">
        <div className="container bio-grid">
          <div>
            <p className="eyebrow">Una oficina en Tampa</p>
            <h2>
              Cerca de su
              <br />
              vida diaria.
            </h2>
          </div>
          <div className="prose">
            <p>
              Encontrará Feel Good Chiropractic en Ehrlich Road, en el norte de
              Tampa, atendiendo a pacientes de Northdale, Carrollwood, Lutz y
              las comunidades cercanas.
            </p>
            <p>
              ¿Viene desde Citrus Park, Westchase o Town ’n’ Country? Use el
              enlace de direcciones para una ruta actualizada a nuestra oficina
              de Ehrlich Road. Considere el tráfico local y llámenos si necesita
              ayuda para encontrar la suite.
            </p>
            <a
              className="text-link"
              href={site.directions}
              target="_blank"
              rel="noreferrer"
            >
              Abrir direcciones en Google Maps <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="map-frame">
            <iframe
              title="Mapa hacia Feel Good Chiropractic, 5121 Ehrlich Road, Suite 109-A, Tampa, FL 33624"
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
          <p className="eyebrow">¿Es nuevo por aquí?</p>
          <h2>Le ayudaremos a sentirse en casa.</h2>
          <a className="text-link" href="/es/nuevos-pacientes">
            Qué esperar en su primera visita <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
      <VisitCTA lang="es" />
    </main>
  );
}

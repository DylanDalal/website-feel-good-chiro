import { site } from '@/lib/site';
export const metadata = {
  title: 'Website Privacy',
  description:
    'Information about using the Feel Good Chiropractic website, contacting the office, and external booking services.',
  alternates: { canonical: '/privacy' },
};
export default function Privacy() {
  return (
    <main id="main" className="container policy-page prose">
      <p className="eyebrow">Feel Good Chiropractic</p>
      <h1>Website privacy.</h1>
      <p>
        This website provides information about the practice and links to
        appointment booking, forms, directions, and other resources.
      </p>
      <h2>Contacting the office</h2>
      <p>
        If you call or email, the office receives the information you choose to
        share so it can respond. Please use regular email for general questions
        and scheduling, and avoid sending private medical details or completed
        patient forms by email.
      </p>
      <h2>Booking and external links</h2>
      <p>
        Online booking opens the practice’s ChiroTouch portal. Maps, Facebook,
        patient forms, and vitamin orders may open services hosted by other
        organizations. Their privacy policies and terms apply when you use those
        services.
      </p>
      <h2>Website operation</h2>
      <p>
        This site does not include an on-page medical intake form, advertising
        pixels, or a newsletter sign-up. The hosting service may process
        technical information, such as connection and request details, to
        deliver and secure the website. Access to a private hosted version may
        require the hosting provider’s sign-in.
      </p>
      <h2>Your health information</h2>
      <p>
        This page describes the website. For the practice’s policies concerning
        patient records, privacy rights, or its Notice of Privacy Practices,
        contact the office directly.
      </p>
      <h2>Questions or help accessing the site</h2>
      <p>
        Call <a href={site.tel}>{site.phone}</a> or email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>. If a page or document
        is difficult to access, the office can help you obtain the information
        another way.
      </p>
      <a className="text-link" href="/contact">
        Office contact information
      </a>
    </main>
  );
}

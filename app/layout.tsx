import type { Metadata } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';
import { Header, Footer } from '@/components/site-shell';
import { openingHours, site } from '@/lib/site';
import { ogImage } from '@/lib/seo';
import './globals.css';
const body = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});
const heading = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Tampa Chiropractor | Feel Good Chiropractic',
    template: '%s | Feel Good Chiropractic',
  },
  description:
    'Get back to feeling good with Dr. Frankie Amarillas. Personalized chiropractic care, acupuncture, Cox decompression, sports rehabilitation, and exercise recovery in Tampa.',
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: site.name,
    type: 'website',
    locale: 'en_US',
    images: [ogImage],
  },
  twitter: { card: 'summary_large_image' },
};
const business = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Chiropractic'],
  '@id': `${site.url}/#practice`,
  name: site.name,
  url: site.url,
  telephone: '+1-813-962-2489',
  email: site.email,
  image: `${site.url}/images/og-feel-good-chiropractic.jpg`,
  logo: `${site.url}/images/feel-good-logo.png`,
  medicalSpecialty: 'Chiropractic',
  employee: { '@id': `${site.url}/#dr-frankie` },
  availableLanguage: ['English', 'Spanish'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  hasMap: site.directions,
  geo: { '@type': 'GeoCoordinates', ...site.geo },
  openingHoursSpecification: openingHours,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address,
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33624',
    addressCountry: 'US',
  },
  areaServed: [
    'Tampa',
    'Carrollwood',
    'Northdale',
    'Citrus Park',
    'Westchase',
    'Lutz',
  ],
  sameAs: ['https://www.facebook.com/feelgoodchiro/'],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${heading.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
        />
      </body>
    </html>
  );
}

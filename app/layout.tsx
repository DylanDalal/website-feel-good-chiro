import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const body = DM_Sans({ variable: '--font-body', subsets: ['latin'] });
const heading = Manrope({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://feel-good-chiropractic-tampa.dylanmax822506.chatgpt.site'),
  title: {
    default: 'Feel Good Chiropractic | Chiropractor in Tampa, FL',
    template: '%s | Feel Good Chiropractic',
  },
  description: 'Evidence-based chiropractic care, Cox spinal decompression, acupuncture, sports rehabilitation, and soft tissue therapy in Tampa with Dr. Frankie Amarillas.',
  keywords: ['Tampa chiropractor', 'Carrollwood chiropractor', 'Northdale chiropractic care', 'Cox spinal decompression Tampa', 'acupuncture Tampa', 'sports chiropractor Tampa'],
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Feel Good Chiropractic | Tampa, Florida',
    description: 'Patient-centered chiropractic care, spinal decompression, acupuncture, and rehabilitation with no long-term contracts.',
    url: '/',
    siteName: 'Feel Good Chiropractic',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${heading.variable}`}>{children}</body>
    </html>
  );
}

// SITE_URL is pinned to the canonical origin in netlify.toml, so it wins here
// and canonical, hreflang, og:url, sitemap and schema @id all claim
// feelgoodchiro.net on every deploy. Do not drop it: Netlify resolved
// DEPLOY_PRIME_URL to the branch host on the production build, which pointed the
// whole site's canonicals at main--feelgoodchiro.netlify.app. The remaining
// fallbacks only matter for builds off Netlify. Guarded so the client bundle
// never touches process.
const env: Record<string, string | undefined> =
  typeof process === 'undefined' ? {} : (process.env ?? {});
const origin = (
  env.SITE_URL ||
  env.DEPLOY_PRIME_URL ||
  env.URL ||
  'https://feelgoodchiro.net'
).replace(/\/+$/, '');
export const site = {
  name: 'Feel Good Chiropractic',
  url: origin,
  booking: 'https://practice.chirotouch.com/portal/FeelGoodChiropractic_2',
  phone: '813-962-2489',
  tel: 'tel:+18139622489',
  email: 'frankie@feelgoodchiro.net',
  address: '5121 Ehrlich Road, Suite 109-A',
  city: 'Tampa, FL 33624',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Feel+Good+Chiropractic+5121+Ehrlich+Rd+Tampa+FL+33624',
  forms:
    'https://s47075.pcdn.co/wp-content/uploads/sites/144/2018/10/NewPatientForms.pdf',
  geo: { latitude: 28.0859654, longitude: -82.5363292 },
};
// Only the fixed sessions; Tue/Thu/Sat are by appointment, so they carry no times.
export const openingHours = [
  { opens: '08:00', closes: '12:00' },
  { opens: '14:00', closes: '18:00' },
].map((slot) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Wednesday', 'Friday'],
  ...slot,
}));

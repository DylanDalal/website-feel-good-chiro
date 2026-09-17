import type { NextConfig } from 'next';
const redirects: Record<string, string> = {
  '/forms-and-online-booking': '/new-patients',
  '/office': '/contact',
  '/back-decompression': '/cox-spinal-decompression',
  '/joint-problems': '/joint-pain',
  '/massage-therapy': '/soft-tissue-therapy',
  '/sports-physicals-chiro': '/sports-chiropractic',
  '/category/services': '/care',
  '/privacy-policy': '/privacy',
  '/chiropractic-for-middle-age': '/chiropractic-care#care-through-life',
  '/chiropractic-for-seniors': '/chiropractic-care#care-through-life',
  '/chiropractic-for-youth': '/chiropractic-care#care-through-life',
  '/chiropractic-for-pediatrics': '/chiropractic-care#care-through-life',
  '/headaches': '/articles/headaches',
  '/care-after-auto-accidents': '/articles/care-after-auto-accidents',
  '/common-auto-accident-injuries': '/articles/common-auto-accident-injuries',
  '/what-to-do-if-you-just-had-an-accident':
    '/articles/what-to-do-if-you-just-had-an-accident',
  '/common-workmans-comp-injuries': '/articles/common-workmans-comp-injuries',
  '/what-to-do-if-you-just-had-a-workplace-injury':
    '/articles/what-to-do-if-you-just-had-a-workplace-injury',
  '/sports-related-injury': '/articles/sports-related-injury',
  '/musculoskeletal-sports-injury': '/articles/musculoskeletal-sports-injury',
  '/sports-orthopedics': '/articles/sports-orthopedics',
};
const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(redirects).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};
export default nextConfig;

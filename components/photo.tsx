// Drop-in replacement for next/image on this site. Image optimization is off
// (the Cloudflare/static build has no optimizer), so next/image was emitting a
// bare <img> pointing at a full-size JPEG. This serves the AVIF/WebP variants
// built by `npm run images`, with the JPEG as the universal fallback.
type Variant = { widths: number[]; sizes: string };

// Keyed by basename; widths must match scripts/optimize-images.mjs.
const VARIANTS: Record<string, Variant> = {
  'pink-gulf-sunset': { widths: [1920, 960], sizes: '100vw' },
  'chiropractic-consultation': {
    widths: [1200, 600],
    sizes: '(max-width: 850px) 92vw, 600px',
  },
  'shoulder-mobility': {
    widths: [1200, 600],
    sizes: '(max-width: 850px) 50vw, 300px',
  },
  'active-tampa-couple': { widths: [1200, 600], sizes: '100vw' },
  'infrared-sauna': { widths: [1672, 840], sizes: '100vw' },
  'dr-frankie': { widths: [470], sizes: '235px' },
};

function srcSet(name: string, widths: number[], ext: string) {
  return widths
    .map((w, i) => `/images/${name}${i === 0 ? '' : `-${w}`}.${ext} ${w}w`)
    .join(', ');
}

export function Photo({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const name = src.replace(/^\/images\//, '').replace(/\.[a-z]+$/, '');
  const variant = VARIANTS[name];
  const loading = priority ? 'eager' : 'lazy';
  const img = (
    // next/image optimization is off in this build; <picture> does the work.
    // eslint-disable-next-line next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
    />
  );
  if (!variant) return img;
  return (
    <picture>
      <source
        type="image/avif"
        sizes={variant.sizes}
        srcSet={srcSet(name, variant.widths, 'avif')}
      />
      <source
        type="image/webp"
        sizes={variant.sizes}
        srcSet={srcSet(name, variant.widths, 'webp')}
      />
      {img}
    </picture>
  );
}

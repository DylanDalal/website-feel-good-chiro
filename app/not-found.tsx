import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="page-intro">
      <div className="container">
        <p className="eyebrow">404 · A small detour</p>
        <h1>
          Let’s get you
          <br />
          back on track.
        </h1>
        <p className="page-lede">
          We couldn’t find that page. Our care guide is a good place to start,
          or head back home.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/">
            Back to feeling good ↗
          </Link>
          <Link className="text-link" href="/care">
            Explore our care
          </Link>
        </div>
      </div>
    </main>
  );
}

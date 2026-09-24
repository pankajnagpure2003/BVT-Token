import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 py-28 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-400">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-bone/70">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full px-6 py-3 text-sm font-semibold text-navy-950"
        style={{
          background:
            'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
        }}
      >
        Back to Home
      </Link>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function LegalPage({ title, summary }) {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-28 pt-28 sm:px-6 lg:px-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-400">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h1>
      <p className="mt-5 text-sm leading-7 text-bone/75 sm:text-base">
        {summary}
      </p>
      <p className="mt-4 text-sm leading-7 text-bone/60">
        Full legal documentation will be published here. For project details,
        please review the whitepaper and official announcements.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
      >
        ← Back to Home
      </Link>
    </section>
  )
}

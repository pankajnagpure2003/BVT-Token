/** Adds top offset so fixed header does not cover page content. */
export default function PageShell({ children }) {
  return <div className="pt-20">{children}</div>
}

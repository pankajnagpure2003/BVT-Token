const HEADER_OFFSET = 80

export function pathToHash(path) {
  return path === '/' ? '#home' : `#${path.replace(/^\//, '')}`
}

/** Only scroll on home when that section exists on the page. */
export function canScrollToPath(path) {
  return Boolean(document.querySelector(pathToHash(path)))
}

export function scrollToHash(hash) {
  const target = document.querySelector(hash)
  if (!target) return false

  const top =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  window.history.replaceState(null, '', hash)
  return true
}

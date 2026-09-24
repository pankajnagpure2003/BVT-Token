import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/logo.webp'
import { NAV_LINKS, PRESALE_PATH, WHITEPAPER_URL } from '../../constants/navigation'
import { SITE } from '../../constants/site'
import { pathToHash, canScrollToPath, scrollToHash } from '../../utils/scroll'

const navLinkClass = ({ isActive }) =>
  [
    'group relative block px-1 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-[1px]',
    isActive ? 'text-gold-300' : 'text-white/85 hover:text-gold-300',
  ].join(' ')

const mobileNavLinkClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2.5 text-base font-medium transition-all duration-300 hover:bg-gold-400/5',
    isActive ? 'text-gold-300 bg-gold-400/5' : 'text-bone/85 hover:text-gold-300',
  ].join(' ')

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 24)

      if (currentScrollY <= 80) {
        setShowHeader(true)
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false)
        setOpen(false)
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true)
      }

      lastScrollY = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Support direct /#about style links when landing on home
  useEffect(() => {
    if (!isHome || !location.hash) return
    const timer = setTimeout(() => scrollToHash(location.hash), 80)
    return () => clearTimeout(timer)
  }, [isHome, location.hash])

  const closeMenu = () => {
    setOpen(false)
    setShowHeader(true)
  }

  const handleNavClick = (event, path) => {
    if (!isHome) return
    if (!canScrollToPath(path)) return

    event.preventDefault()
    closeMenu()

    const hash = pathToHash(path)
    setTimeout(() => scrollToHash(hash), 50)
  }

  const handleLogoClick = (event) => {
    if (!isHome) return

    event.preventDefault()
    closeMenu()
    setTimeout(() => scrollToHash('#home'), 50)
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : '-100%' }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-gold-500/10 bg-transparent backdrop-blur-xl ${
        scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.25)]' : ''
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-12xl items-center justify-between px-5 sm:px-6 lg:px-10">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="group flex shrink-0 cursor-pointer items-center gap-3"
          aria-label="Go to Home"
        >
          <img
            src={logo}
            alt="BVT Token"
            decoding="async"
            className="h-12 w-12 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14"
          />

          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-semibold tracking-[-0.01em] text-white">
              {SITE.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300/80">
              {SITE.ecosystem}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={(event) => handleNavClick(event, link.path)}
              className={navLinkClass}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHITEPAPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-bone/20 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-400/5 hover:text-gold-200"
          >
            Whitepaper
          </a>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
          >
            <Link
              to={PRESALE_PATH}
              onClick={closeMenu}
              className="group relative isolate flex min-w-[112px] cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-navy-950"
              style={{
                background:
                  'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
              }}
            >
              <motion.span
                className="pointer-events-none absolute -inset-1 -z-10 rounded-full bg-gold-400/30 blur-md"
                animate={{
                  opacity: [0.3, 0.75, 0.3],
                  scale: [0.96, 1.08, 0.96],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="relative z-10">Buy Presale</span>
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-bone transition-colors hover:bg-white/5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v)
            setShowHeader(true)
          }}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.25 }}
              className="h-[1.5px] w-full origin-center bg-bone"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="h-[1.5px] w-full bg-bone"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.25 }}
              className="h-[1.5px] w-full origin-center bg-bone"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-gold-500/10 bg-transparent backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.035 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={(event) => handleNavClick(event, link.path)}
                    className={mobileNavLinkClass}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="flex gap-3 pt-4">
                <a
                  href={WHITEPAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-bone/20 px-4 py-2.5 text-center text-sm font-medium text-bone/85 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-200"
                >
                  Whitepaper
                </a>

                <Link
                  to={PRESALE_PATH}
                  onClick={closeMenu}
                  className="relative z-[100] isolate flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-full px-4 py-2.5 text-center text-sm font-semibold text-navy-950"
                  style={{
                    background:
                      'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
                  }}
                >
                  <span className="pointer-events-none relative z-10">Buy Presale</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.webp'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Contract', href: '#contract' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
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

  const handleNavClick = (e, href) => {
    e.preventDefault()

    const target = document.querySelector(href)

    if (!target) return

    setOpen(false)
    setShowHeader(true)

    setTimeout(() => {
      const headerOffset = 80
      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      })

      window.history.replaceState(null, '', href)
    }, 100)
  }

  const handleLogoClick = (e) => {
    e.preventDefault()

    const home = document.getElementById('home')

    setOpen(false)
    setShowHeader(true)

    if (home) {
      setTimeout(() => {
        const headerOffset = 80
        const targetPosition =
          home.getBoundingClientRect().top +
          window.scrollY -
          headerOffset

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth',
        })

        window.history.replaceState(null, '', '#home')
      }, 100)
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : '-100%' }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-gold-500/10 bg-transparent backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 w-full max-w-12xl items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
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
              BVT TOKEN
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300/80">
              Bhavishya Ecosystem
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative block px-1 py-2 text-sm font-medium tracking-wide text-white/85 transition-all duration-300 hover:-translate-y-[1px] hover:text-gold-300"
            >
              {link.label}

              <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, '#faq')}
            className="rounded-full border border-bone/20 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-400/5 hover:text-gold-200"
          >
            Whitepaper
          </a>

          <motion.a
            href="#contract"
            onClick={(e) => handleNavClick(e, '#contract')}
            className="group relative isolate flex min-w-[112px] cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-navy-950"
            style={{
              background:
                'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
              backgroundSize: '250% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              backgroundPosition: {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
              y: 0,
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

            <span className="relative z-10">
              Explore BVT
            </span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
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
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 6 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="h-[1.5px] w-full origin-center bg-bone"
            />

            <motion.span
              animate={{
                opacity: open ? 0 : 1,
                scaleX: open ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="h-[1.5px] w-full bg-bone"
            />

            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -6 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="h-[1.5px] w-full origin-center bg-bone"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-b border-gold-500/10 bg-transparent backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">

              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: i * 0.035,
                  }}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-bone/85 transition-all duration-300 hover:bg-gold-400/5 hover:text-gold-300"
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="flex gap-3 pt-4">
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="flex-1 rounded-full border border-bone/20 px-4 py-2.5 text-center text-sm font-medium text-bone/85 transition-all duration-300 hover:border-gold-400/60 hover:text-gold-200"
                >
                  Whitepaper
                </a>

                <a
                  href="#contract"
                  onClick={(e) => handleNavClick(e, '#contract')}
                  className="relative isolate flex flex-1 items-center justify-center overflow-hidden rounded-full px-4 py-2.5 text-center text-sm font-semibold text-navy-950"
                  style={{
                    background:
                      'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
                  }}
                >
                  <span className="relative z-10">
                    Explore BVT
                  </span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react'
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

const LEGAL = [
  'Whitepaper',
  'Terms & Conditions',
  'Privacy Policy',
  'Disclaimer',
]

const SOCIALS = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Twitter / X', icon: Twitter, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Telegram', icon: Send, href: '#' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    if (!href.startsWith('#')) return

    e.preventDefault()

    const target = document.querySelector(href)

    if (target) {
      const offset = 80

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset

      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'smooth',
      })

      window.history.replaceState(null, '', href)
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-[#249BFF]/20 bg-[#020B2D] pt-10 sm:pt-14 lg:pt-20">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(0,102,255,0.11),transparent_28%),radial-gradient(circle_at_92%_25%,rgba(36,155,255,0.065),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,210,28,0.045),transparent_32%)]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(36,155,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(36,155,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-12xl px-5 sm:px-6 lg:px-10">

        {/* Main footer row */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            border-b border-white/[0.06]
            pb-8
            sm:grid-cols-2
            sm:gap-10
            lg:grid-cols-[1.4fr_0.85fr_0.85fr_1fr]
            lg:gap-10
            lg:pb-12
          "
        >

          {/* Brand */}
          <div className="min-w-0">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FFD84D]/25 bg-[#06133D] shadow-[0_0_24px_rgba(0,102,255,0.10)]">
                <img
                  src={logo}
                  alt="BVT Token"
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9"
                />
              </div>

              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
                BVT <span className="text-[#FFD84D]">TOKEN</span>
              </span>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white">
              Building People · Building Wealth · Building Nation
            </p>

            <p className="mt-3 max-w-sm text-xs leading-5 text-white">
              A utility-focused digital asset designed for the BHAVISHYA
              Ecosystem.
            </p>

            {/* Social */}
            <div className="mt-5">

              <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD84D]">
                Connect With Us
              </p>

              <div className="flex gap-2">
                {SOCIALS.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={
                        social.href === '#'
                          ? undefined
                          : '_blank'
                      }
                      rel={
                        social.href === '#'
                          ? undefined
                          : 'noreferrer'
                      }
                      className="
                        flex h-9 w-9 shrink-0 items-center justify-center
                        rounded-lg
                        border border-white/15
                        bg-[#06133D]/65
                        text-white
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-[#FFD84D]/45
                        hover:bg-[#FFD84D]/[0.07]
                        hover:text-[#FFD84D]
                      "
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                      />
                    </a>
                  )
                })}
              </div>

            </div>
          </div>

          {/* Navigate */}
          <div className="min-w-0">

            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
              Navigate
            </p>

            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="
                      inline-flex
                      text-sm
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#FFD84D]
                    "
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Resources */}
          <div className="min-w-0">

            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
              Resources
            </p>

            <ul className="space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l}>
                  <span className="text-sm text-white">
                    {l}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Token */}
          <div className="min-w-0">

            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
              Token
            </p>

            <div className="rounded-xl border border-white/10 bg-[#06133D]/45 p-4 backdrop-blur-md">

              <div className="grid grid-cols-3 gap-3 lg:block">

                {/* Network */}
                <div className="lg:mb-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white">
                    Network
                  </p>

                  <p className="mt-1 whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                    TRON · BEB-20
                  </p>
                </div>

                {/* Supply */}
                <div className="lg:mb-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white">
                    Supply
                  </p>

                  <p className="mt-1 whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                    10 Billion
                  </p>
                </div>

                {/* Decimals */}
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white">
                    Decimals
                  </p>

                  <p className="mt-1 whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                    6
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Desktop CTA */}
        <div className="hidden border-b border-white/[0.06] py-6 lg:flex lg:items-center lg:justify-between">

          <div>
            <p className="font-display text-lg font-medium text-white">
              Explore the BHAVISHYA Ecosystem
            </p>

            <p className="mt-1 text-xs text-white">
              One token. A growing ecosystem.
            </p>
          </div>

          <a
            href="#contract"
            onClick={(e) => handleNav(e, '#contract')}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              px-6
              py-3
              text-sm
              font-semibold
              text-[#07102D]
              transition-transform
              duration-300
              hover:-translate-y-0.5
            "
            style={{
              background:
                'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
            }}
          >
            <span>Explore BVT</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* Bottom */}
        <div className="py-6 sm:py-8">

          <p className="mx-auto max-w-3xl text-center text-[11px] leading-5 text-white sm:text-xs sm:leading-relaxed">
            BVT Token is a utility-focused digital asset designed for the
            BHAVISHYA Ecosystem. Always verify official contract information
            and project announcements before interacting with BVT.
          </p>

          <p className="mt-3 text-center text-[11px] text-white sm:mt-4 sm:text-xs">
            © {new Date().getFullYear()} BVT Token · BHAVISHYA Ecosystem.
            All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}
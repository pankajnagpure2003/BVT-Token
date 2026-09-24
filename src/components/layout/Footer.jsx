import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { LEGAL_LINKS, NAV_LINKS, PRESALE_PATH } from '../../constants/navigation'
import { SITE, SOCIAL_LINKS } from '../../constants/site'
import { pathToHash, canScrollToPath, scrollToHash } from '../../utils/scroll'

const SOCIAL_ICONS = {
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  telegram: Send,
}

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (event, path) => {
    if (!isHome) return
    if (!canScrollToPath(path)) return

    event.preventDefault()
    scrollToHash(pathToHash(path))
  }

  return (
    <footer className="relative overflow-hidden border-t border-[#249BFF]/20 bg-[#020B2D] pt-10 sm:pt-14 lg:pt-20">
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
        <div className="grid grid-cols-1 gap-8 border-b border-white/[0.06] pb-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.4fr_0.85fr_0.85fr_1fr] lg:gap-10 lg:pb-12">
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

            <p className="max-w-sm text-sm leading-6 text-white">{SITE.tagline}</p>
            <p className="mt-3 max-w-sm text-xs leading-5 text-white">{SITE.description}</p>

            <div className="mt-5">
              <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD84D]">
                Connect With Us
              </p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.key]
                  if (!Icon) return null

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={social.href === '#' ? undefined : '_blank'}
                      rel={social.href === '#' ? undefined : 'noreferrer'}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#06133D]/65 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD84D]/45 hover:bg-[#FFD84D]/[0.07] hover:text-[#FFD84D]"
                    >
                      <Icon size={15} strokeWidth={1.8} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={(event) => handleNavClick(event, link.path)}
                    className="inline-flex text-sm text-white transition-colors duration-300 hover:text-[#FFD84D]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
              Resources
            </p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-sm text-white transition-colors duration-300 hover:text-[#FFD84D]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="inline-flex text-sm text-white transition-colors duration-300 hover:text-[#FFD84D]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
              Token
            </p>
            <div className="rounded-xl border border-white/10 bg-[#06133D]/45 p-4 backdrop-blur-md">
              <div className="grid grid-cols-3 gap-3 lg:block">
                <div className="lg:mb-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white">
                    Network
                  </p>
                  <p className="mt-1 whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                    · {SITE.network}
                  </p>
                </div>
                <div className="lg:mb-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white">
                    Supply
                  </p>
                  <p className="mt-1 whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                    {SITE.totalSupply}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white">
                    Decimals
                  </p>
                  <p className="mt-1 whitespace-nowrap text-xs font-medium text-white sm:text-sm">
                    {SITE.decimals}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden border-b border-white/[0.06] py-6 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-lg font-medium text-white">
              Explore the {SITE.ecosystem}
            </p>
            <p className="mt-1 text-xs text-white">One token. A growing ecosystem.</p>
          </div>

          <Link
            to={PRESALE_PATH}
            className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-[#07102D] transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background:
                'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)',
            }}
          >
            <span>Buy Presale</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="py-6 sm:py-8">
          <p className="mx-auto max-w-3xl text-center text-[11px] leading-5 text-white sm:text-xs sm:leading-relaxed">
            BVT Token is a utility-focused digital asset designed for the BHAVISHYA
            Ecosystem. Always verify official contract information and project
            announcements before interacting with BVT.
          </p>
          <p className="mt-3 text-center text-[11px] text-white sm:mt-4 sm:text-xs">
            © {new Date().getFullYear()} BVT Token · {SITE.ecosystem}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

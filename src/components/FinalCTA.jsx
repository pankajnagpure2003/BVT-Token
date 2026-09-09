import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import logo from '../assets/logo.webp'

export default function FinalCTA() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="relative isolate overflow-visible bg-[#020B2D] py-28 sm:py-32 lg:py-40"
    >
      {/* ───────────── START BLUE GRADIENT ───────────── */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-40 h-28 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.34)_0%,rgba(22,135,255,0.18)_28%,rgba(0,102,255,0.06)_54%,transparent_80%)] blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50 h-10 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#1687FF]/[0.11] to-transparent"
        aria-hidden="true"
      />

      {/* ───────────────── Background Atmosphere ───────────────── */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,102,255,0.20),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(0,168,255,0.10),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,210,28,0.08),transparent_28%)]" />

        {/* Digital grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(36,155,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(36,155,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Central blue aura */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF]/15 blur-[130px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.45, 0.8, 0.45],
                  scale: [0.92, 1.08, 0.92],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />

        {/* Gold aura */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD21C]/10 blur-[90px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.55, 0.25],
                  scale: [1, 1.15, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />

        {/* ───────── Orbit Rings ───────── */}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#249BFF]/15"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD84D]/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#249BFF]/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 55,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        {/* Orbit dots */}
        <motion.span
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD84D] shadow-[0_0_18px_rgba(255,216,77,0.9)]"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                  x: [0, 170, 0, -170, 0],
                  y: [-170, 0, 170, 0, -170],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 14,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        <motion.span
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#249BFF] shadow-[0_0_15px_rgba(36,155,255,0.9)]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -235, 0, 235, 0],
                  y: [235, 0, -235, 0, 235],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 19,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        {/* Floating particles */}
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            className={`absolute h-1 w-1 rounded-full ${
              i % 4 === 0 ? 'bg-[#FFD84D]' : 'bg-[#249BFF]'
            }`}
            style={{
              left: `${3 + ((i * 23) % 94)}%`,
              top: `${8 + ((i * 19) % 84)}%`,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0, 0.7, 0],
                    y: [20, -70, -130],
                    x: [0, i % 2 === 0 ? 15 : -15, 0],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 5 + (i % 5),
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }
            }
          />
        ))}
      </div>

      {/* ───────────── END BLUE GRADIENT ───────────── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-32 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.36)_0%,rgba(22,135,255,0.20)_28%,rgba(0,102,255,0.06)_54%,transparent_82%)] blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-50 h-px w-[76%] -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-transparent via-[#1687FF]/70 to-transparent shadow-[0_0_24px_rgba(22,135,255,0.58)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-14 translate-y-1/2 bg-gradient-to-b from-transparent via-[#0066FF]/[0.10] to-transparent"
        aria-hidden="true"
      />

      {/* ───────────────── Content ───────────────── */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-10">

        {/* Logo */}
        <Reveal variant="scale">
          <div className="relative mx-auto mb-10 flex h-28 w-28 items-center justify-center">

            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#FFD84D]/20 bg-[#0066FF]/10 shadow-[0_0_70px_rgba(0,102,255,0.25)]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.55, 1, 0.55],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            />

            {/* Inner ring */}
            <div className="absolute inset-3 rounded-full border border-[#249BFF]/20 bg-[#06133D]/80 backdrop-blur-md" />

            <motion.img
              src={logo}
              alt="BVT Token"
              loading="lazy"
              decoding="async"
              className="relative z-10 h-16 w-16 object-contain drop-shadow-[0_0_25px_rgba(255,216,77,0.35)]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            />
          </div>
        </Reveal>

        {/* Eyebrow */}
        <Reveal variant="rise" delay={0.05}>
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#FFD84D]" />

            <div className="flex items-center gap-2">
              <Sparkles size={13} className="text-[#FFD84D]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD84D]">
                The BHAVISHYA Vision
              </span>
            </div>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#FFD84D]" />
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal variant="rise" delay={0.1}>
          <h2 className="mx-auto max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#FFE477] via-[#FFD21C] to-[#F4A900] bg-clip-text text-transparent">
              Building People,
            </span>{' '}
            <span className="bg-gradient-to-r from-[#FFE477] via-[#FFD21C] to-[#F4A900] bg-clip-text text-transparent">
              Wealth
            </span>
            <br />
            <span className="text-white">and a Nation</span>
          </h2>
        </Reveal>

        {/* Description */}
        <Reveal variant="rise" delay={0.18}>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#BFD8FF]/60 sm:text-base sm:leading-8">
            BVT Token is designed to carry the BHAVISHYA Ecosystem from a
            digital foundation to a complete, connected super-ecosystem.
          </p>
        </Reveal>

        {/* ───────────── CTA Panel ───────────── */}

        <Reveal variant="rise" delay={0.25}>
          <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-[#249BFF]/15 bg-[#06133D]/60 p-3 shadow-[0_0_60px_rgba(0,102,255,0.08)] backdrop-blur-xl sm:p-4">

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* Primary */}
              <motion.a
                href="#contract"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                        scale: 1.015,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className="group relative flex flex-1 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFD84D] via-[#FFD21C] to-[#F4A900] px-7 py-4 font-semibold text-[#020B2D] shadow-[0_0_30px_rgba(255,210,28,0.16)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">
                  View Contract
                </span>

                <ArrowRight
                  size={17}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="/Whitepaper.pdf" target="_blank" rel="noopener noreferrer"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#249BFF]/20 bg-[#020B2D]/50 px-7 py-4 font-medium text-[#DDEBFF] transition-all duration-300 hover:border-[#FFD84D]/35 hover:bg-[#249BFF]/5 hover:text-[#FFE477]"
              >
                Read Whitepaper
              </motion.a>

            </div>
          </div>
        </Reveal>

        {/* ───────────── Bottom Trust Line ───────────── */}

        <Reveal variant="rise" delay={0.32}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#249BFF] shadow-[0_0_9px_rgba(36,155,255,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#BFD8FF]/35">
                BVT TOKEN
              </span>
            </div>

            <span className="hidden h-3 w-px bg-[#249BFF]/15 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD84D] shadow-[0_0_9px_rgba(255,216,77,0.8)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#BFD8FF]/35">
                • BEP-20
              </span>
            </div>

            <span className="hidden h-3 w-px bg-[#249BFF]/15 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] shadow-[0_0_9px_rgba(34,197,94,0.7)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#BFD8FF]/35">
                BHAVISHYA ECOSYSTEM
              </span>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
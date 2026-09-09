import { motion, useReducedMotion } from 'framer-motion'
import {
  Coins,
  Smartphone,
  Building2,
  GraduationCap,
  Briefcase,
  Rocket,
  Globe2,
} from 'lucide-react'
import Reveal from './Reveal'

const FLOW = [
  {
    icon: Coins,
    title: 'BVT Token',
    subtitle: 'Core Utility Layer',
    core: true,
  },
  {
    icon: Smartphone,
    title: 'Digital Services',
    subtitle: 'Wallet · Rewards · Digital Services',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    subtitle: 'Property Platform · Listings · Booking',
  },
  {
    icon: GraduationCap,
    title: 'Skills',
    subtitle: 'Learning · Technology · Training',
  },
  {
    icon: Briefcase,
    title: 'Employment',
    subtitle: 'Jobs · Placement · Career · Startup Support',
  },
  {
    icon: Rocket,
    title: 'Super App',
    subtitle: 'BHAVISHYA Super App',
  },
  {
    icon: Globe2,
    title: 'Future Networks',
    subtitle: 'Education · Healthcare · Infrastructure · Global Community',
  },
]

export default function Ecosystem() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="ecosystem"
      className="
        relative isolate overflow-hidden
        bg-[#04134A]
        py-24
        lg:py-32
      "
    >
      {/* =========================================================
          PREMIUM GOLD LIVE BACKGROUND
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          -z-20
          overflow-hidden
        "
        aria-hidden="true"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#04134A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(38,116,255,0.15),transparent_38%),radial-gradient(circle_at_8%_55%,rgba(18,92,210,0.10),transparent_34%),radial-gradient(circle_at_92%_68%,rgba(32,84,190,0.09),transparent_36%),linear-gradient(180deg,rgba(8,31,92,0.60),rgba(2,11,45,0.78))]" />

        {/* Royal blue atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_12%,rgba(201,168,78,0.10),transparent_34%),radial-gradient(circle_at_10%_55%,rgba(138,106,36,0.08),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(255,216,77,0.06),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(20,16,8,0.20),transparent_48%)]
          "
        />

        {/* =====================================================
            CENTRAL GOLD ENERGY
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-1/2 top-[32%]
            h-[520px] w-[520px]
            -translate-x-1/2
            rounded-full
            bg-[#C9A84E]/[0.028]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 0.96, 1],
                  opacity: [0.5, 0.85, 0.5],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            GOLD ENERGY
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-1/2 top-[48%]
            h-[360px] w-[360px]
            -translate-x-1/2
            rounded-full
            bg-[#FFD21C]/[0.016]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.7, 0.3],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            LARGE DIGITAL RINGS
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-1/2 top-[42%]
            h-[850px] w-[850px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#C9A84E]/[0.035]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            left-1/2 top-[42%]
            h-[650px] w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#E2C875]/[0.028]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            left-1/2 top-[42%]
            h-[450px] w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#FFD84D]/[0.035]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* =====================================================
            MOVING LIGHT
        ====================================================== */}

        {!reduceMotion && (
          <motion.div
            className="
              absolute
              -left-[25%] top-[-20%]
              h-[150%] w-[18%]
              rotate-[24deg]
              bg-gradient-to-r
              from-transparent
              via-[#FFD84D]/[0.016]
              to-transparent
            "
            animate={{
              x: ['0%', '720%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatDelay: 5,
              ease: 'linear',
            }}
          />
        )}

        {/* =====================================================
            GOLD LIGHT BEAM
        ====================================================== */}

        {!reduceMotion && (
          <motion.div
            className="
              absolute
              -left-[35%] top-[30%]
              h-[1px] w-[45%]
              rotate-[16deg]
              bg-gradient-to-r
              from-transparent
              via-[#FFD84D]/18
              to-transparent
            "
            animate={{
              x: ['0%', '750%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'linear',
            }}
          />
        )}

        {/* =====================================================
            FLOATING PARTICLES
        ====================================================== */}

        {!reduceMotion &&
          Array.from({ length: 34 }).map((_, index) => {
            const gold = index % 6 === 0

            return (
              <motion.span
                key={index}
                className={`
                  absolute rounded-full
                  ${
                    gold
                      ? 'h-[3px] w-[3px] bg-[#FFD84D]'
                      : 'h-[2px] w-[2px] bg-[#D8B85A]'
                  }
                `}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  boxShadow: gold
                    ? '0 0 12px rgba(255,216,77,0.72)'
                    : '0 0 9px rgba(216,184,90,0.65)',
                }}
                animate={{
                  x: [0, index % 2 ? -20 : 20, 0],
                  y: [0, -35, 0],
                  opacity: [0.08, 0.75, 0.08],
                  scale: [0.6, 1.5, 0.6],
                }}
                transition={{
                  duration: 4 + (index % 5),
                  delay: index * 0.12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
      </div>

      {/* =========================================================
          DIGITAL GRID
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          -z-10
          opacity-[0.06]
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(201,168,78,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,78,0.045)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <Reveal
          variant="rise"
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span
              className="
                h-[2px] w-10
                bg-gradient-to-r
                from-[#A66A00]
                via-[#FFD84D]
                to-[#FFF0A0]
              "
            />

            <span
              className="
                font-display text-xs
                uppercase tracking-[0.24em]
                text-[#F4E6B8]
              "
            >
              Ecosystem
            </span>

            <span
              className="
                h-[2px] w-10
                bg-gradient-to-l
                from-[#A66A00]
                via-[#FFD84D]
                to-[#FFF0A0]
              "
            />
          </div>

          <h2
            className="
              mb-4 text-balance
              font-display
              text-4xl font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-white
              sm:text-5xl
            "
          >
            One token.{' '}
            <span
              className="
                bg-gradient-to-r
                from-[#FFF3A0]
                via-[#FFD21C]
                to-[#F4A900]
                bg-clip-text
                text-transparent
              "
            >
              A growing ecosystem.
            </span>
          </h2>

          <p className="text-[#E8DEC2]/58">
            The BHAVISHYA Ecosystem is designed to expand progressively
            across multiple sectors.
          </p>

          <motion.div
            className="
              mx-auto mt-6
              h-[2px] w-20
              bg-gradient-to-r
              from-transparent
              via-[#FFD84D]
              to-transparent
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    width: ['70px', '130px', '70px'],
                    opacity: [0.4, 1, 0.4],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </Reveal>

        {/* =======================================================
            LIVE RUNNING ECOSYSTEM ROW
        ======================================================== */}

        <Reveal variant="rise" delay={0.05}>
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#04134A] to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#04134A] to-transparent sm:w-24" />

            <motion.div
              className="flex w-max gap-4 py-4 pr-4"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: ['0%', '-50%'],
                    }
              }
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: 'linear',
              }}
              whileHover={reduceMotion ? undefined : { animationPlayState: 'paused' }}
            >
              {[...FLOW, ...FLOW].map((node, i) => {
                const Icon = node.icon

                return (
                  <motion.article
                    key={`${node.title}-${i}`}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            scale: 1.025,
                          }
                    }
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`group relative w-[260px] shrink-0 overflow-hidden rounded-2xl border p-5 backdrop-blur-xl sm:w-[290px] sm:p-6 ${
                      node.core
                        ? 'border-[#FFD84D]/55 bg-gradient-to-br from-[#FFD84D]/[0.10] via-[#C9A84E]/[0.045] to-[#020B2D]/85 shadow-[0_0_45px_rgba(201,168,78,0.12)]'
                        : 'border-[#C9A84E]/18 bg-[#07102D]/78 shadow-[0_14px_45px_rgba(0,0,0,0.18)] hover:border-[#FFD84D]/42 hover:bg-[#0A142F]/90'
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#FFD84D]/0 blur-2xl transition-all duration-700 group-hover:bg-[#FFD84D]/[0.08]" />

                    {node.core && !reduceMotion && (
                      <motion.div
                        className="pointer-events-none absolute inset-0 rounded-2xl border border-[#FFD84D]/35"
                        animate={{ opacity: [0.25, 0.9, 0.25] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}

                    <div className="relative z-10 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-110 ${
                          node.core
                            ? 'border-[#FFD84D]/55 bg-[#C9A84E]/[0.12] text-[#F4E6B8] shadow-[0_0_24px_rgba(201,168,78,0.12)]'
                            : 'border-[#C9A84E]/25 bg-[#C9A84E]/[0.055] text-[#E2C875] group-hover:border-[#E2C875]/60 group-hover:bg-[#C9A84E]/[0.11]'
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 font-display text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#F4E6B8]">
                          {node.title}
                        </p>
                        <p className="text-[10px] uppercase leading-relaxed tracking-[0.09em] text-[#E8DEC2]/45 transition-colors duration-300 group-hover:text-[#F0E5C8]/68">
                          {node.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-5 flex items-center justify-between border-t border-[#C9A84E]/10 pt-3">
                      <span className="font-display text-[9px] uppercase tracking-[0.2em] text-[#E2C875]/38">
                        {node.core ? 'Core Layer' : 'Ecosystem Layer'}
                      </span>

                      <motion.span
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                x: [0, 4, 0],
                                opacity: [0.35, 0.8, 0.35],
                              }
                        }
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-[#FFD84D]/70"
                      >
                        →
                      </motion.span>
                    </div>

                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFD84D] to-transparent transition-all duration-500 group-hover:w-24" />
                  </motion.article>
                )
              })}
            </motion.div>

            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C9A84E]/35" />
              <span className="font-display text-[9px] uppercase tracking-[0.25em] text-[#E2C875]/35">
                Live Ecosystem Flow
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C9A84E]/35" />
            </div>
          </div>
        </Reveal>

        {/* =======================================================
            BOTTOM DESCRIPTION
        ======================================================== */}

        <Reveal variant="rise" delay={0.1}>
          <div
            className="
              relative
              mx-auto mt-16
              max-w-2xl
              overflow-hidden
              rounded-2xl
              border border-[#C9A84E]/15
              bg-[#06133D]/55
              px-6 py-7
              text-center
              shadow-[0_10px_40px_rgba(0,0,0,0.16)]
              backdrop-blur-xl
            "
          >
            {/* Top gold line */}
            <div
              className="
                absolute left-1/2 top-0
                h-[2px] w-20
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-[#FFD84D]
                to-transparent
              "
            />

            <p
              className="
                text-balance
                leading-relaxed
                text-[#E8DEC2]/58
              "
            >
              By 2040, BHAVISHYA aims to bring together{' '}
              <span className="text-[#E2C875]">
                education
              </span>
              ,{' '}
              <span className="text-[#E2C875]">
                healthcare
              </span>
              ,{' '}
              <span className="text-[#E2C875]">
                employment
              </span>
              ,{' '}
              <span className="text-[#E2C875]">
                real estate
              </span>{' '}
              and{' '}
              <span className="text-[#E2C875]">
                BVT utility
              </span>{' '}
              into one broader ecosystem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
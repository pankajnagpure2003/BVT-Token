import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import Reveal from './Reveal'

// const headline = ['Powering', 'the', 'BHAVISHYA', 'Ecosystem']

const pillars = [
  'Building People',
  'Building Wealth',
  'Building Nation',
]

const glance = [
  { label: 'Token', value: 'BVT TOKEN' },
  { label: 'Symbol', value: 'BVT' },
  { label: 'Network', value: 'BEP-20' },
 
  { label: 'Total Supply', value: '10 Billion' },
  { label: 'Decimals', value: '18' },
]

function SubHeading({ reduceMotion }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduceMotion) return

    const timer = setInterval(() => {
      setI((v) => (v + 1) % pillars.length)
    }, 2200)

    return () => clearInterval(timer)
  }, [reduceMotion])

  return (
    <div className="relative mb-6 min-h-[36px] sm:min-h-[44px]">
      <AnimatePresence mode="wait">
        <motion.h2
          key={i}
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
                  filter: 'blur(4px)',
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          exit={
            reduceMotion
              ? undefined
              : {
                  opacity: 0,
                  y: -14,
                  filter: 'blur(4px)',
                }
          }
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 flex items-center font-display text-lg font-medium tracking-[0.01em] text-[#FFD84D] sm:text-xl md:text-2xl"
        >
          {pillars[i]}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative isolate overflow-visible pb-10 pt-20 sm:pb-14 sm:pt-24 md:pb-16 md:pt-28 lg:pb-28 lg:pt-32"
    >
      {/* =========================================================
          BVT BLUE + GOLD LIVE BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        {/* Deep royal blue base */}
        <div className="absolute inset-0 bg-[#020B2D]" />

        {/* Royal blue atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_42%,rgba(0,93,255,0.28),transparent_38%),radial-gradient(circle_at_18%_25%,rgba(0,64,180,0.22),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(0,31,110,0.42),transparent_50%)]" />

        {/* =====================================================
            LARGE ELECTRIC BLUE GLOW
        ====================================================== */}

        {/* <motion.div
          className="absolute left-[52%] top-[30%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#0066FF]/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 0.96, 1],
                  x: ['-50%', '-45%', '-53%', '-50%'],
                  y: [0, 25, -15, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        /> */}

        {/* Cyan inner glow */}

        {/* <motion.div
          className="absolute left-[68%] top-[45%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#00A8FF]/10"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.75, 0.4],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        /> */}

        {/* =====================================================
            GOLD ATMOSPHERE
        ====================================================== */}

        <motion.div
          className="absolute left-[-20%] top-[12%] h-[260px] w-[260px] rounded-full bg-[#FFD21C]/[0.045] sm:left-[-8%] sm:top-[18%] sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 70, -20, 0],
                  y: [0, 40, 90, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        />

        {/* =====================================================
            GLOBAL NETWORK RINGS
        ====================================================== */}

        <motion.div
          className="absolute left-[70%] top-[60%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1687FF]/20 sm:left-[68%] sm:top-[58%] sm:h-[500px] sm:w-[500px] lg:left-[68%] lg:top-[42%] lg:h-[680px] lg:w-[680px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                  scale: [1, 1.035, 1],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  rotate: {
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
        />

        <motion.div
          className="absolute left-[70%] top-[60%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00BFFF]/10 sm:left-[68%] sm:top-[58%] sm:h-[390px] sm:w-[390px] lg:left-[68%] lg:top-[42%] lg:h-[520px] lg:w-[520px]"
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
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        <motion.div
          className="absolute left-[70%] top-[60%] h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD84D]/10 sm:left-[68%] sm:top-[58%] sm:h-[290px] sm:w-[290px] lg:left-[68%] lg:top-[42%] lg:h-[380px] lg:w-[380px]"
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
                  duration: 22,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />

        {/* =====================================================
            MOVING GOLD LIGHT
        ====================================================== */}

        {!reduceMotion && (
          <motion.div
            className="absolute -left-[25%] top-[-30%] h-[160%] w-[22%] rotate-[24deg] bg-gradient-to-r from-transparent via-[#FFD84D]/[0.055] to-transparent"
            animate={{
              x: ['0%', '620%'],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'linear',
            }}
          />
        )}

        {/* =====================================================
            BLUE LIGHT BEAM
        ====================================================== */}

        {!reduceMotion && (
          <motion.div
            className="absolute -left-[30%] top-[15%] h-[1px] w-[45%] rotate-[18deg] bg-gradient-to-r from-transparent via-[#00A8FF]/50 to-transparent"
            animate={{
              x: ['0%', '650%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'linear',
            }}
          />
        )}

        {/* =====================================================
            FLOATING GOLD + BLUE PARTICLES
        ====================================================== */}

        {!reduceMotion &&
          Array.from({ length: 30 }).map((_, index) => {
            const isGold = index % 4 === 0

            return (
              <motion.span
                key={index}
                className={`absolute rounded-full ${
                  isGold
                    ? 'h-[3px] w-[3px] bg-[#FFD84D]'
                    : 'h-[2px] w-[2px] bg-[#29A9FF]'
                }`}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  boxShadow: isGold
                    ? '0 0 12px rgba(255,216,77,0.9)'
                    : '0 0 10px rgba(41,169,255,0.8)',
                }}
                animate={{
                  x: [0, index % 2 === 0 ? 20 : -20, 0],
                  y: [0, -35, 0],
                  opacity: [0.1, 0.9, 0.1],
                  scale: [0.6, 1.5, 0.6],
                }}
                transition={{
                  duration: 4 + (index % 5),
                  delay: index * 0.14,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
      </div>

      {/* DIGITAL NETWORK GRID */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,153,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(0,153,255,0.09)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* TOP BLUE LIGHT */}

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 -z-10 bg-gradient-to-b from-[#0066FF]/10 via-[#0048C7]/[0.03] to-transparent"
        aria-hidden="true"
      />

      {/* Bottom fade */}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 -z-10 bg-gradient-to-t from-[#020B2D] to-transparent"
        aria-hidden="true"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto grid max-w-[1460px] items-center gap-8 px-4 sm:gap-10 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 xl:gap-10">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="min-w-0 w-full max-w-2xl lg:max-w-[680px]">
          <Reveal variant="fade">
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#FFD84D]/25 bg-[#005EFF]/10 px-2.5 py-1.5 sm:mb-5 sm:px-3.5 sm:py-2 shadow-[0_0_30px_rgba(0,102,255,0.08)] sm:mb-6 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-[#FFD84D] shadow-[0_0_12px_#FFD84D] animate-pulse" />

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#FFE477] sm:text-[11px] sm:tracking-[0.22em]">
                Live on · BNB Network
              </span>
            </div>
          </Reveal>

          <SubHeading reduceMotion={reduceMotion} />

         <h1 className="mb-5 max-w-3xl font-display font-semibold tracking-[-0.025em] sm:mb-6">
  <motion.span
    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      block
      text-[clamp(1.55rem,8.2vw,2.1rem)]
      leading-[1.05]
      text-white
      drop-shadow-[0_2px_14px_rgba(255,255,255,0.18)]
      sm:text-[2.5rem]
      sm:leading-[1.05]
      md:text-[3.4rem]
      md:leading-[1.05]
      lg:text-6xl
      xl:text-[4.15rem]
    "
  >
    Powering the
  </motion.span>

  <motion.span
    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.33,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      mt-1
      block
      text-[clamp(1.55rem,8.2vw,2.1rem)]
      leading-[1.05]
      sm:text-[2.5rem]
      sm:leading-[1.05]
      md:text-[3.4rem]
      md:leading-[1.05]
      lg:text-6xl
      xl:text-[4.15rem]
    "
  >
    <span className="bg-gradient-to-b from-[#FFF7C7] via-[#FFD84D] to-[#D99A00] bg-clip-text text-transparent drop-shadow-[0_3px_16px_rgba(255,216,77,0.25)]">
      BHAVISHYA
    </span>

    <span className="ml-[0.16em] sm:ml-[0.22em] bg-gradient-to-b from-[#FFFFFF] via-[#C7DEFF] to-[#6FA8FF] bg-clip-text text-transparent drop-shadow-[0_3px_20px_rgba(120,175,255,0.38)]">
      Ecosystem
    </span>
  </motion.span>
</h1>

          <Reveal variant="rise" delay={0.5}>
            <p className="mb-5 w-full max-w-2xl text-pretty text-[14px] sm:text-[15px] font-light leading-[1.7] tracking-[0.01em] text-white/90 sm:text-lg sm:leading-[1.8] lg:text-[19px]">
              BVT Token is designed to become the common utility layer across
              <span className="font-medium text-white">
                {' '}
                BHAVISHYA digital ecosystem
              </span>
              — from wallets and rewards to real estate, skills, employment,
              education and healthcare.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.58}>
            {/* <p className="mb-10 font-display text-base italic text-[#FFE477]/90">
              Building People · Building Wealth · Building Nation
            </p> */}
          </Reveal>

          <Reveal variant="rise" delay={0.66}>
            <div className="mb-6 flex flex-col gap-2.5 sm:mb-10 sm:flex-row sm:flex-wrap sm:gap-3.5 md:mb-12 lg:mb-14">
              <a
  href="https://bvt-presale-page.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-50 w-full cursor-pointer rounded-full border border-[#FFE58A]/40 bg-gradient-to-b from-[#FFF4B0] via-[#FFD84D] to-[#D99A00] px-6 py-3 text-center font-serif text-[15px] font-semibold tracking-[0.02em] text-[#241600] shadow-[0_0_25px_rgba(255,200,40,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] transition-all duration-300 hover:scale-[1.03] hover:from-[#FFF8C7] hover:via-[#FFE066] hover:to-[#E5A900] hover:shadow-[0_0_40px_rgba(255,216,77,0.4),inset_0_1px_0_rgba(255,255,255,0.6)] sm:w-auto sm:px-8 sm:py-3.5"
>
  Explore BVT
</a>

              <a
                href="/Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-50 w-full cursor-pointer rounded-full border border-[#5EAFFF]/30 bg-[#005EFF]/[0.04] px-6 py-3 text-center sm:w-auto sm:px-7 sm:py-3.5 sm:px-8 font-medium text-[#E8F2FF] transition-all duration-200 hover:border-[#FFD84D]/60 hover:bg-[#FFD84D]/[0.05] hover:text-[#FFE477]"
              >
                View Roadmap
              </a>
            </div>
          </Reveal>

         <Reveal variant="rise" delay={0.74}>
  <div className="relative mt-1 w-full min-w-0 overflow-hidden sm:mt-3">
    <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/80 to-transparent sm:w-16 md:w-20" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#020B2D] via-[#020B2D]/80 to-transparent sm:w-16 md:w-20" />

    <motion.div
      className="flex w-max gap-2.5 py-2 sm:gap-3 sm:py-2.5"
      animate={{
        x: ['0%', '-50%'],
      }}
      transition={{
        duration: 32,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
      whileHover={{
        animationPlayState: 'paused',
      }}
    >
      {[...glance, ...glance].map((g, i) => (
        <motion.div
          key={`${g.label}-${i}`}
          whileHover={{
            y: -3,
            scale: 1.025,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative flex h-[50px] min-w-[136px] shrink-0 items-center gap-3 overflow-hidden rounded-xl border border-[#C9A84E]/16 bg-[#07143B]/70 px-3.5 backdrop-blur-xl transition-all duration-500 hover:border-[#FFD84D]/40 hover:bg-[#0A1D4A]/90 hover:shadow-[0_8px_30px_rgba(201,168,78,0.10)] sm:h-[54px] sm:min-w-[155px] sm:px-3.5 md:min-w-[170px] md:px-4"
        >
          {/* Soft moving highlight */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-[#FFD84D]/[0.07] to-transparent"
            animate={{
              x: ['0%', '420%'],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />

          {/* Live indicator */}
          <motion.span
            className="relative z-10 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD84D]"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % glance.length) * 0.18,
            }}
            style={{
              boxShadow: '0 0 10px rgba(255,216,77,0.8)',
            }}
          />

          <div className="relative z-10 min-w-0">
            <p className="font-display text-[8px] uppercase tracking-[0.18em] text-[#D8C98E]/42">
              {g.label}
            </p>

            <motion.p
              className="mt-0.5 truncate font-display text-xs font-medium tracking-wide text-[#FFE477]"
              animate={{
                opacity: [0.78, 1, 0.78],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: (i % glance.length) * 0.2,
              }}
            >
              {g.value}
            </motion.p>
          </div>

          {/* Bottom gold accent */}
          <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFD84D] to-transparent transition-all duration-700 group-hover:w-20" />
        </motion.div>
      ))}
    </motion.div>

    {/* Live status */}
    <div className="mt-1.5 flex items-center justify-center gap-2">
      <motion.span
        className="h-1 w-1 rounded-full bg-[#FFD84D]"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: '0 0 8px rgba(255,216,77,0.75)',
        }}
      />

      <span className="font-display text-[8px] uppercase tracking-[0.25em] text-[#D8C98E]/32">
        BVT Live Data
      </span>
    </div>
  </div>
</Reveal>
        </div>

        {/* =====================================================
            RIGHT LOGO / EMBLEM
        ====================================================== */}

        <Reveal
          variant="scale"
          delay={0.2}
          className="relative mx-auto flex w-full items-center justify-center md:-translate-x-2 lg:-translate-x-8 xl:-translate-x-12"
        >
          <div className="group relative flex translate-y-6 items-center justify-center sm:translate-y-5 md:translate-y-4 lg:-translate-y-10 xl:-translate-y-14">
            <motion.div
              className="relative flex h-[275px] w-[275px] items-center justify-center sm:h-[350px] sm:w-[350px] md:h-[440px] md:w-[440px] lg:h-[590px] lg:w-[590px] xl:h-[620px] xl:w-[620px]"
            >
              <div className="pointer-events-none absolute inset-[18%] rounded-full bg-[#1687FF]/35 blur-[45px] opacity-0 scale-75 transition-all duration-700 ease-out group-hover:scale-125 group-hover:opacity-100" />
              <div className="pointer-events-none absolute -inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(0,140,255,0.28)_0%,rgba(0,102,255,0.12)_42%,transparent_72%)] blur-[24px] opacity-60 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100" />
            {/* =================================================
                OUTER GRADIENT AURA
            ================================================== */}

            <motion.div
              className="absolute inset-[5%] rounded-full bg-[conic-gradient(from_0deg,rgba(0,102,255,0),rgba(0,168,255,0.35),rgba(255,216,77,0.28),rgba(0,102,255,0))] blur-[30px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                      scale: [1, 1.08, 1],
                      opacity: [0.55, 0.95, 0.55],
                    }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      rotate: {
                        duration: 16,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                      scale: {
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                      opacity: {
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }
              }
            />

            {/* Blue energy behind logo */}

            <motion.div
              className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(0,119,255,0.30),rgba(0,77,210,0.12)_45%,transparent_72%)] blur-[8px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.1, 1],
                      opacity: [0.55, 0.95, 0.55],
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

            {/* Gold aura */}

            <motion.div
              className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,216,77,0.20),rgba(255,193,7,0.07)_45%,transparent_72%)] blur-[18px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [0.95, 1.12, 0.95],
                      opacity: [0.35, 0.75, 0.35],
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

            {/* =================================================
                OUTER RINGS
            ================================================== */}

            <motion.div
              className="absolute inset-[7%] rounded-full border border-[#1687FF]/30 shadow-[0_0_35px_rgba(0,102,255,0.08)]"
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
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }
              }
            />

            <motion.div
              className="absolute inset-[15%] rounded-full border border-[#00BFFF]/20"
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
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }
              }
            />

            <motion.div
              className="absolute inset-[23%] rounded-full border border-dashed border-[#FFD84D]/20"
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
                      duration: 12,
                      repeat: Infinity,
                      ease: 'linear',
                    }
              }
            />

            {/* =================================================
                CENTER LOGO
            ================================================== */}

            <motion.div
              className="relative z-20 flex h-[185px] w-[185px] items-center justify-center sm:h-[235px] sm:w-[235px] md:h-[285px] md:w-[285px] lg:h-[410px] lg:w-[410px] xl:h-[430px] xl:w-[430px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      scale: [1, 1.025, 1],
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
            >
              {/* Logo container glow */}

              <div className="absolute inset-[8%] rounded-full border border-[#FFD84D]/20 bg-[#06133D]/25 shadow-[0_0_80px_rgba(0,102,255,0.22),0_0_40px_rgba(255,216,77,0.10)] backdrop-blur-[2px]" />

              {/* Animated inner gradient */}

              <motion.div
                className="absolute inset-[12%] rounded-full border border-[#249BFF]/20 bg-[radial-gradient(circle_at_35%_30%,rgba(36,155,255,0.12),transparent_45%),radial-gradient(circle_at_65%_70%,rgba(255,216,77,0.10),transparent_45%)]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.5, 1, 0.5],
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

              <motion.img
                src={logo}
                alt="BVT Token emblem"
                fetchPriority="high"
                decoding="async"
                className="relative z-30 h-[155px] w-[155px] object-contain drop-shadow-[0_0_30px_rgba(255,216,77,0.35)] sm:h-[205px] sm:w-[205px] md:h-[250px] md:w-[250px] lg:h-[345px] lg:w-[345px] xl:h-[365px] xl:w-[365px]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        filter: [
                          'drop-shadow(0 0 25px rgba(255,216,77,0.25))',
                          'drop-shadow(0 0 45px rgba(36,155,255,0.38))',
                          'drop-shadow(0 0 30px rgba(255,216,77,0.35))',
                        ],
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
            </motion.div>

            {/* =================================================
                ORBITING GOLD DOT
            ================================================== */}

            {!reduceMotion && (
              <>
                <motion.span
                  className="absolute left-[13%] top-[31%] z-30 h-3 w-3 rounded-full bg-[#FFD84D] shadow-[0_0_25px_rgba(255,216,77,1)]"
                  animate={{
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                    opacity: [0.25, 1, 0.25],
                    scale: [0.7, 1.4, 0.7],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Blue orbit dot */}

                <motion.span
                  className="absolute right-[11%] bottom-[27%] z-30 h-3 w-3 rounded-full bg-[#24A9FF] shadow-[0_0_25px_rgba(36,169,255,1)]"
                  animate={{
                    x: [0, -25, 0],
                    y: [0, 22, 0],
                    opacity: [0.25, 1, 0.25],
                    scale: [0.7, 1.35, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                />

                {/* Gold sparkle */}

                <motion.span
                  className="absolute right-[20%] top-[14%] z-30 h-2 w-2 rounded-full bg-[#FFF0A0] shadow-[0_0_20px_#FFD84D]"
                  animate={{
                    scale: [0.5, 1.8, 0.5],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                />

                {/* Cyan sparkle */}

                <motion.span
                  className="absolute left-[24%] bottom-[16%] z-30 h-1.5 w-1.5 rounded-full bg-[#7BD7FF] shadow-[0_0_18px_#00A8FF]"
                  animate={{
                    scale: [0.5, 1.6, 0.5],
                    opacity: [0.15, 1, 0.15],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />
              </>
            )}
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* =========================================================
          BLUE SECTION BOUNDARY
          Sits between Hero ending and the next section starting.
      ========================================================== */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-40
          h-24 translate-y-1/2
          bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.34)_0%,rgba(22,135,255,0.17)_28%,rgba(0,102,255,0.05)_52%,transparent_78%)]
          blur-xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2 z-50
          h-px w-[72%] -translate-x-1/2 translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-[#1687FF]/70
          to-transparent
          shadow-[0_0_24px_rgba(22,135,255,0.60)]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-40
          h-12 translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-[#0066FF]/[0.09]
          to-transparent
        "
        aria-hidden="true"
      />
    </section>
  )
}
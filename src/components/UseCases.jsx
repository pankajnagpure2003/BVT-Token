import {
  Wallet,
  Gift,
  Building2,
  GraduationCap,
  Briefcase,
  School,
  HeartPulse,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import use from '../assets/bg.jpg'

const CASES = [
  {
    icon: Wallet,
    title: 'Digital Wallet',
    copy: 'BVT can be integrated into the BHAVISHYA digital wallet for eligible ecosystem transactions, transfers and rewards.',
  },
  {
    icon: Gift,
    title: 'Rewards',
    copy: 'BVT can be used for eligible community rewards, referral programs, loyalty programs, platform activities and partner campaigns.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    copy: 'The roadmap includes a real estate platform with verified property listings, an investor dashboard, online booking, BVT rewards and strategic partnerships.',
  },
  {
    icon: GraduationCap,
    title: 'Skills & Learning',
    copy: 'BVT can support future online learning, skill development, AI & technology courses, financial literacy, business training and learning rewards.',
  },
  {
    icon: Briefcase,
    title: 'Employment',
    copy: 'The ecosystem plans an employment portal, placement cell, career guidance, startup support and employment-related ecosystem services.',
  },
  {
    icon: School,
    title: 'Education',
    copy: 'Future expansion includes Bhavishya Schools, Bhavishya Colleges, scholarships and a digital learning platform.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    copy: 'The long-term ecosystem includes free health camps, partner hospitals, telemedicine and medical assistance programs.',
  },
]

export default function UseCases() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="use-cases"
      className="
        relative isolate overflow-visible
        bg-[#020B2D]
        py-24
        lg:py-32
      "
    >
      {/* =========================================================
          BVT BLUE + GOLD LIVE BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#020B2D]" />

        {/* Royal blue atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_20%_25%,rgba(0,91,255,0.20),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(0,153,255,0.16),transparent_36%),radial-gradient(circle_at_50%_100%,rgba(0,45,150,0.24),transparent_48%)]
          "
        />

        {/* =====================================================
            LEFT BLUE GLOW
        ====================================================== */}

        <motion.div
          className="
            absolute
            -left-[10%] top-[15%]
            h-[480px] w-[480px]
            rounded-full
            bg-[#0066FF]/[0.055]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 70, -20, 0],
                  y: [0, 40, 90, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            RIGHT CYAN GLOW
        ====================================================== */}

        <motion.div
          className="
            absolute
            -right-[8%] top-[25%]
            h-[500px] w-[500px]
            rounded-full
            bg-[#00A8FF]/[0.055]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -60, 20, 0],
                  y: [0, 70, -30, 0],
                  scale: [1, 0.92, 1.08, 1],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            GOLD ACCENT GLOW
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-[45%] bottom-[-10%]
            h-[380px] w-[380px]
            rounded-full
            bg-[#FFD21C]/[0.035]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.8, 0.4],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            DIGITAL ORBIT RINGS
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-[50%] top-[48%]
            h-[760px] w-[760px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#1687FF]/[0.075]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            left-[50%] top-[48%]
            h-[580px] w-[580px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#00BFFF]/[0.06]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            left-[50%] top-[48%]
            h-[420px] w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#FFD84D]/[0.055]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* =====================================================
            MOVING GOLD LIGHT
        ====================================================== */}

        {!reduceMotion && (
          <motion.div
            className="
              absolute
              -left-[25%] top-[-30%]
              h-[170%] w-[18%]
              rotate-[24deg]
              bg-gradient-to-r
              from-transparent
              via-[#FFD84D]/[0.03]
              to-transparent
            "
            animate={{
              x: ['0%', '700%'],
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
            BLUE LIGHT BEAM
        ====================================================== */}

        {!reduceMotion && (
          <motion.div
            className="
              absolute
              -left-[30%] top-[35%]
              h-[1px] w-[40%]
              rotate-[15deg]
              bg-gradient-to-r
              from-transparent
              via-[#18A8FF]/40
              to-transparent
            "
            animate={{
              x: ['0%', '700%'],
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
          Array.from({ length: 30 }).map((_, index) => {
            const isGold = index % 5 === 0

            return (
              <motion.span
                key={index}
                className={`
                  absolute rounded-full
                  ${
                    isGold
                      ? 'h-[3px] w-[3px] bg-[#FFD84D]'
                      : 'h-[2px] w-[2px] bg-[#22A8FF]'
                  }
                `}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  boxShadow: isGold
                    ? '0 0 12px rgba(255,216,77,0.9)'
                    : '0 0 10px rgba(34,168,255,0.8)',
                }}
                animate={{
                  x: [0, index % 2 ? -20 : 20, 0],
                  y: [0, -35, 0],
                  opacity: [0.1, 0.8, 0.1],
                  scale: [0.6, 1.5, 0.6],
                }}
                transition={{
                  duration: 4 + (index % 5),
                  delay: index * 0.13,
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
          absolute inset-0 -z-10
          opacity-[0.12]
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,145,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,145,255,0.10)_1px,transparent_1px)]
            bg-[size:72px_72px]
          "
        />
      </div>

      {/* =========================================================
          BLUE GRADIENT — SECTION START
          Soft blue atmosphere coming in from the previous section.
      ========================================================== */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-0
          h-32 -translate-y-1/2
          bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.34)_0%,rgba(22,135,255,0.17)_28%,rgba(0,102,255,0.05)_52%,transparent_78%)]
          blur-xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-10 -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-[#0066FF]/[0.10]
          to-transparent
        "
        aria-hidden="true"
      />

      {/* =========================================================
          BLUE GRADIENT — SECTION END
          Overlaps into the next section for a seamless transition.
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

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-12xl px-6 lg:px-10">

        {/* =======================================================
            SECTION HEADER
        ======================================================== */}

        <Reveal
          variant="rise"
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Label */}
          <div
            className="
              mb-5 inline-flex
              items-center gap-3
            "
          >
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
                font-mono text-xs
                uppercase tracking-[0.24em]
                text-[#FFE477]
              "
            >
              Use Cases
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

          {/* Heading */}
          <h2
            className="
              mb-4
              text-balance
              font-display
              text-4xl font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-white
              sm:text-5xl
            "
          >
            Real utility.{' '}
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
              Multiple possibilities.
            </span>
          </h2>

          <p className="text-[#DDEBFF]/60">
            BVT is designed to support a growing range of ecosystem
            applications.
          </p>

          {/* Animated line */}
          <motion.div
            className="
              mx-auto mt-6
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-[#FFD84D]
              to-transparent
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    width: ['60px', '120px', '60px'],
                    opacity: [0.45, 1, 0.45],
                  }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: reduceMotion ? '80px' : undefined,
            }}
          />
        </Reveal>

        {/* =======================================================
            USE CASE CARDS
        ======================================================== */}

        <div className="space-y-5">
          {/* Row 1 — Featured card 01 */}
          <div className="flex justify-center">
            <div className="w-full lg:w-[66%]">
          {CASES.slice(0, 1).map((c, i) => {
            const Icon = c.icon
            const delay = 0.06 + i * 0.1

            return (
              <Reveal key={c.title} variant="rise" delay={delay}>
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`
                    group relative h-full
                    overflow-hidden
                    rounded-2xl
                    border border-[#1687FF]/15
                    bg-[#06133D]/65
                    p-7
                    shadow-[0_10px_40px_rgba(0,45,150,0.08)]
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-[#FFD84D]/40
                    hover:bg-[#08194A]/80
                    hover:shadow-[0_18px_50px_rgba(0,78,200,0.18)]
                  `}
                >
                  <img src={use} alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-50 blur-[0px] transition-transform duration-700 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 " />
                  {/* =================================================
                      CARD TOP GLOW
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14 -top-14
                      h-36 w-36
                      rounded-full
                      bg-[#0066FF]/0
                      transition-all duration-500
                      group-hover:bg-[#0066FF]/10
                    "
                  />

                  {/* Gold corner glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-16 -bottom-16
                      h-36 w-36
                      rounded-full
                      bg-[#FFD21C]/0
                      transition-all duration-500
                      group-hover:bg-[#FFD21C]/[0.045]
                    "
                  />

                  {/* =================================================
                      CARD TOP LINE
                  ================================================== */}

                  <div
                    className="
                      absolute left-7 top-0
                      h-[2px] w-10
                      bg-gradient-to-r
                      from-[#A66A00]
                      via-[#FFD84D]
                      to-[#FFF0A0]
                      shadow-[0_0_10px_rgba(255,216,77,0.35)]
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative z-10
                      mb-5 flex
                      h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-[#FFD84D]/25
                      bg-[#FFD84D]/[0.07]
                      text-[#FFD84D]
                      shadow-[0_0_25px_rgba(255,193,7,0.04)]
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:border-[#FFD84D]/55
                      group-hover:bg-[#FFD84D]/[0.14]
                      group-hover:shadow-[0_0_30px_rgba(255,193,7,0.10)]
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      relative z-10
                      mb-2
                      font-display
                      text-xl font-medium
                      text-white
                      transition-colors duration-300
                      group-hover:text-[#FFE477]
                    "
                  >
                    {c.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      relative z-10
                      text-sm leading-6
                      text-[#DDEBFF]/55
                      transition-colors duration-300
                      group-hover:text-[#DDEBFF]/70
                    "
                  >
                    {c.copy}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-5 left-7
                      h-[1px] w-0
                      bg-gradient-to-r
                      from-[#FFD84D]
                      to-transparent
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />
                </motion.div>
              </Reveal>
            )
          })}
            </div>
          </div>

          {/* Row 2 — Cards 02, 03 */}
          <div className="mx-auto grid w-full gap-20 sm:grid-cols-2 lg:w-[66%]">
          {CASES.slice(1, 3).map((c, i) => {
            const Icon = c.icon
            const delay = 0.16 + i * 0.1

            return (
              <Reveal key={c.title} variant="rise" delay={delay}>
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`
                    group relative h-full
                    overflow-hidden
                    rounded-2xl
                    border border-[#1687FF]/15
                    bg-[#06133D]/65
                    p-7
                    shadow-[0_10px_40px_rgba(0,45,150,0.08)]
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-[#FFD84D]/40
                    hover:bg-[#08194A]/80
                    hover:shadow-[0_18px_50px_rgba(0,78,200,0.18)]
                  `}
                >
                  <img src={use} alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-35 blur-[0px] transition-transform duration-700 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 " />
                  {/* =================================================
                      CARD TOP GLOW
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14 -top-14
                      h-36 w-36
                      rounded-full
                      bg-[#0066FF]/0
                      transition-all duration-500
                      group-hover:bg-[#0066FF]/10
                    "
                  />

                  {/* Gold corner glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-16 -bottom-16
                      h-36 w-36
                      rounded-full
                      bg-[#FFD21C]/0
                      transition-all duration-500
                      group-hover:bg-[#FFD21C]/[0.045]
                    "
                  />

                  {/* =================================================
                      CARD TOP LINE
                  ================================================== */}

                  <div
                    className="
                      absolute left-7 top-0
                      h-[2px] w-10
                      bg-gradient-to-r
                      from-[#A66A00]
                      via-[#FFD84D]
                      to-[#FFF0A0]
                      shadow-[0_0_10px_rgba(255,216,77,0.35)]
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative z-10
                      mb-5 flex
                      h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-[#FFD84D]/25
                      bg-[#FFD84D]/[0.07]
                      text-[#FFD84D]
                      shadow-[0_0_25px_rgba(255,193,7,0.04)]
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:border-[#FFD84D]/55
                      group-hover:bg-[#FFD84D]/[0.14]
                      group-hover:shadow-[0_0_30px_rgba(255,193,7,0.10)]
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      relative z-10
                      mb-2
                      font-display
                      text-xl font-medium
                      text-white
                      transition-colors duration-300
                      group-hover:text-[#FFE477]
                    "
                  >
                    {c.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      relative z-10
                      text-sm leading-6
                      text-[#DDEBFF]/55
                      transition-colors duration-300
                      group-hover:text-[#DDEBFF]/70
                    "
                  >
                    {c.copy}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-5 left-7
                      h-[1px] w-0
                      bg-gradient-to-r
                      from-[#FFD84D]
                      to-transparent
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />
                </motion.div>
              </Reveal>
            )
          })}
          </div>

          {/* Row 3 — Cards 04, 05 */}
          <div className="mx-auto grid w-full gap-20 sm:grid-cols-2 lg:w-[66%]">
          {CASES.slice(3, 5).map((c, i) => {
            const Icon = c.icon
            const delay = 0.26 + i * 0.1

            return (
              <Reveal key={c.title} variant="rise" delay={delay}>
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`
                    group relative h-full
                    overflow-hidden
                    rounded-2xl
                    border border-[#1687FF]/15
                    bg-[#06133D]/65
                    p-7
                    shadow-[0_10px_40px_rgba(0,45,150,0.08)]
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-[#FFD84D]/40
                    hover:bg-[#08194A]/80
                    hover:shadow-[0_18px_50px_rgba(0,78,200,0.18)]
                  `}
                >
                  <img src={use} alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-35 blur-[0px] transition-transform duration-700 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 " />
                  {/* =================================================
                      CARD TOP GLOW
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14 -top-14
                      h-36 w-36
                      rounded-full
                      bg-[#0066FF]/0
                      transition-all duration-500
                      group-hover:bg-[#0066FF]/10
                    "
                  />

                  {/* Gold corner glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-16 -bottom-16
                      h-36 w-36
                      rounded-full
                      bg-[#FFD21C]/0
                      transition-all duration-500
                      group-hover:bg-[#FFD21C]/[0.045]
                    "
                  />

                  {/* =================================================
                      CARD TOP LINE
                  ================================================== */}

                  <div
                    className="
                      absolute left-7 top-0
                      h-[2px] w-10
                      bg-gradient-to-r
                      from-[#A66A00]
                      via-[#FFD84D]
                      to-[#FFF0A0]
                      shadow-[0_0_10px_rgba(255,216,77,0.35)]
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative z-10
                      mb-5 flex
                      h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-[#FFD84D]/25
                      bg-[#FFD84D]/[0.07]
                      text-[#FFD84D]
                      shadow-[0_0_25px_rgba(255,193,7,0.04)]
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:border-[#FFD84D]/55
                      group-hover:bg-[#FFD84D]/[0.14]
                      group-hover:shadow-[0_0_30px_rgba(255,193,7,0.10)]
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      relative z-10
                      mb-2
                      font-display
                      text-xl font-medium
                      text-white
                      transition-colors duration-300
                      group-hover:text-[#FFE477]
                    "
                  >
                    {c.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      relative z-10
                      text-sm leading-6
                      text-[#DDEBFF]/55
                      transition-colors duration-300
                      group-hover:text-[#DDEBFF]/70
                    "
                  >
                    {c.copy}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-5 left-7
                      h-[1px] w-0
                      bg-gradient-to-r
                      from-[#FFD84D]
                      to-transparent
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />
                </motion.div>
              </Reveal>
            )
          })}
          </div>

          {/* Row 4 — Cards 06, 07 */}
          <div className="mx-auto grid w-full gap-20 sm:grid-cols-2 lg:w-[66%]">
          {CASES.slice(5, 7).map((c, i) => {
            const Icon = c.icon
            const delay = 0.36 + i * 0.1

            return (
              <Reveal key={c.title} variant="rise" delay={delay}>
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`
                    group relative h-full
                    overflow-hidden
                    rounded-2xl
                    border border-[#1687FF]/15
                    bg-[#06133D]/65
                    p-7
                    shadow-[0_10px_40px_rgba(0,45,150,0.08)]
                    backdrop-blur-xl
                    transition-all duration-500
                    hover:border-[#FFD84D]/40
                    hover:bg-[#08194A]/80
                    hover:shadow-[0_18px_50px_rgba(0,78,200,0.18)]
                  `}
                >
                  <img src={use} alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-35 blur-[0px] transition-transform duration-700 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 " />
                  {/* =================================================
                      CARD TOP GLOW
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-14 -top-14
                      h-36 w-36
                      rounded-full
                      bg-[#0066FF]/0
                      transition-all duration-500
                      group-hover:bg-[#0066FF]/10
                    "
                  />

                  {/* Gold corner glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -left-16 -bottom-16
                      h-36 w-36
                      rounded-full
                      bg-[#FFD21C]/0
                      transition-all duration-500
                      group-hover:bg-[#FFD21C]/[0.045]
                    "
                  />

                  {/* =================================================
                      CARD TOP LINE
                  ================================================== */}

                  <div
                    className="
                      absolute left-7 top-0
                      h-[2px] w-10
                      bg-gradient-to-r
                      from-[#A66A00]
                      via-[#FFD84D]
                      to-[#FFF0A0]
                      shadow-[0_0_10px_rgba(255,216,77,0.35)]
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div
                    className="
                      relative z-10
                      mb-5 flex
                      h-12 w-12
                      items-center justify-center
                      rounded-xl
                      border border-[#FFD84D]/25
                      bg-[#FFD84D]/[0.07]
                      text-[#FFD84D]
                      shadow-[0_0_25px_rgba(255,193,7,0.04)]
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:border-[#FFD84D]/55
                      group-hover:bg-[#FFD84D]/[0.14]
                      group-hover:shadow-[0_0_30px_rgba(255,193,7,0.10)]
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      relative z-10
                      mb-2
                      font-display
                      text-xl font-medium
                      text-white
                      transition-colors duration-300
                      group-hover:text-[#FFE477]
                    "
                  >
                    {c.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      relative z-10
                      text-sm leading-6
                      text-[#DDEBFF]/55
                      transition-colors duration-300
                      group-hover:text-[#DDEBFF]/70
                    "
                  >
                    {c.copy}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-5 left-7
                      h-[1px] w-0
                      bg-gradient-to-r
                      from-[#FFD84D]
                      to-transparent
                      transition-all duration-500
                      group-hover:w-20
                    "
                  />
                </motion.div>
              </Reveal>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
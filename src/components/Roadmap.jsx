import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import Watermark from './Watermark'

const PHASES = [
  {
    year: '2026',
    title: 'Foundation',
    subtitle: 'Building the BVT foundation',
    items: [
      'BVT Utility Token',
      'Whitepaper',
      'Smart Contract & Audit',
      'Official Website',
      'Wallet Integration',
      'Community Building',
    ],
  },
  {
    year: '2027',
    title: 'Investment',
    subtitle: 'Entering the real estate ecosystem',
    items: [
      'Real Estate Platform',
      'Verified Property Listings',
      'Investor Dashboard',
      'Online Property Booking',
      'DEX Listing',
      'Marketing & Partnerships',
    ],
  },
  {
    year: '2028',
    title: 'Skills',
    subtitle: 'Building a skilled community',
    items: [
      'Skill Development Centers',
      'Online Learning',
      'AI & Technology Courses',
      'Financial Literacy',
      'Business Training',
    ],
  },
  {
    year: '2029',
    title: 'Employment',
    subtitle: 'Connecting skills with opportunities',
    items: [
      'Placement Cell',
      'Employment Portal',
      'Startup Support',
      'Career Guidance',
    ],
  },
  {
    year: '2030',
    title: 'Super Platform',
    subtitle: 'Connecting the ecosystem',
    items: [
      'BHAVISHYA Super App',
      'BVT Utility Ecosystem',
      'Real Estate Platform',
      'Skill Platform',
      'Employment Platform',
    ],
  },
  {
    year: '2031–32',
    title: 'Education',
    subtitle: 'Schools, colleges & scholarships',
    items: [
      'Bhavishya Schools',
      'Bhavishya Colleges',
      'Scholarships',
      'Digital Learning Platform',
    ],
  },
  {
    year: '2033–34',
    title: 'Healthcare',
    subtitle: 'Care across the community',
    items: [
      'Free Health Camps',
      'Partner Hospitals',
      'Telemedicine',
      'Medical Assistance Program',
    ],
  },
  {
    year: '2035–36',
    title: 'Infrastructure',
    subtitle: 'Campuses & research',
    items: [
      'Education Campuses',
      'Skill Campuses',
      'Research & Innovation Center',
      'National Expansion',
    ],
  },
  {
    year: '2037–38',
    title: 'Expansion',
    subtitle: 'State-wise & global growth',
    items: [
      'State-wise Expansion',
      'Strategic Partnerships',
      'Global Community',
      'NRI Investment Support',
    ],
  },
  {
    year: '2039–40',
    title: 'Bhavishya Vision',
    subtitle: 'A complete super ecosystem',
    items: [
      'Education Network',
      'Healthcare Network',
      'Employment Network',
      'Real Estate Network',
      'Digital Payment Ecosystem',
    ],
  },
]

export default function Roadmap() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 55%'],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="roadmap"
      ref={ref}
      className="
        relative isolate overflow-visible
        bg-[#020B2D]
        py-24
        lg:py-32
      "
    >
      {/* =========================================================
          BVT BLUE + GOLD BACKGROUND
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
        {/* Deep royal blue base */}
        <div className="absolute inset-0 bg-[#020B2D]" />

        {/* Blue atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_18%_18%,rgba(0,91,255,0.20),transparent_34%),radial-gradient(circle_at_82%_35%,rgba(0,153,255,0.15),transparent_36%),radial-gradient(circle_at_50%_85%,rgba(0,45,150,0.24),transparent_48%)]
          "
        />

        {/* =====================================================
            LEFT BLUE GLOW
        ====================================================== */}

        <motion.div
          className="
            absolute
            -left-[12%] top-[20%]
            h-[500px] w-[500px]
            rounded-full
            bg-[#0066FF]/[0.055]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 70, -20, 0],
                  y: [0, 50, 90, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 16,
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
            -right-[10%] top-[40%]
            h-[520px] w-[520px]
            rounded-full
            bg-[#00A8FF]/[0.05]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -70, 20, 0],
                  y: [0, -50, 40, 0],
                  scale: [1, 0.92, 1.08, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            GOLD ATMOSPHERE
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-[42%] top-[45%]
            h-[360px] w-[360px]
            rounded-full
            bg-[#FFD21C]/[0.025]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.75, 0.35],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            DIGITAL RINGS
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-1/2 top-[45%]
            h-[900px] w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#1687FF]/[0.055]
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
            left-1/2 top-[45%]
            h-[680px] w-[680px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#00BFFF]/[0.045]
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
              via-[#FFD84D]/[0.025]
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
                      : 'h-[2px] w-[2px] bg-[#22A8FF]'
                  }
                `}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                  boxShadow: gold
                    ? '0 0 12px rgba(255,216,77,0.9)'
                    : '0 0 9px rgba(34,168,255,0.8)',
                }}
                animate={{
                  x: [0, index % 2 ? -18 : 18, 0],
                  y: [0, -32, 0],
                  opacity: [0.08, 0.7, 0.08],
                  scale: [0.6, 1.4, 0.6],
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
          opacity-[0.10]
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
          WATERMARK
      ========================================================== */}

      <Watermark
        position="top-right"
        size={480}
        opacity={0.025}
        direction={-1}
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      {/* =========================================================
          BLUE GRADIENT — SECTION START
          Soft blue glow entering from the previous section.
      ========================================================== */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-40
          h-28 -translate-y-1/2
          bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.34)_0%,rgba(22,135,255,0.17)_28%,rgba(0,102,255,0.05)_52%,transparent_78%)]
          blur-xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-50
          h-10 -translate-y-1/2
          bg-gradient-to-b from-transparent via-[#0066FF]/[0.10] to-transparent
        "
        aria-hidden="true"
      />

      {/* =========================================================
          BLUE GRADIENT — SECTION END
          Overlaps into the next section.
      ========================================================== */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-40
          h-28 translate-y-1/2
          bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.36)_0%,rgba(22,135,255,0.18)_28%,rgba(0,102,255,0.06)_52%,transparent_80%)]
          blur-xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute bottom-0 left-1/2 z-50
          h-px w-[72%] -translate-x-1/2 translate-y-1/2
          bg-gradient-to-r from-transparent via-[#1687FF]/70 to-transparent
          shadow-[0_0_24px_rgba(22,135,255,0.60)]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-40
          h-12 translate-y-1/2
          bg-gradient-to-b from-transparent via-[#0066FF]/[0.09] to-transparent
        "
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-12xl px-6 lg:px-10">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <Reveal
          variant="rise"
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Section label */}
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
                font-mono text-xs
                uppercase tracking-[0.24em]
                text-[#FFE477]
              "
            >
              Roadmap
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
              font-display text-4xl
              font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-white
              sm:text-5xl
            "
          >
            Our journey to{' '}
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
              2040
            </span>
          </h2>

          <p className="text-[#DDEBFF]/60">
            A phased roadmap from foundation to a complete super-ecosystem.
          </p>

          {/* Animated underline */}
          <motion.div
            className="
              mx-auto mt-6 h-[2px]
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
                    opacity: [0.4, 1, 0.4],
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
            TIMELINE
        ======================================================== */}

        <div className="relative mx-auto max-w-3xl">

          {/* Background timeline */}
          <div
            className="
              absolute
              bottom-2 top-2
              left-[15px]
              w-px
              bg-[#3C8DFF]/15
              sm:left-1/2
              sm:-translate-x-1/2
            "
            aria-hidden="true"
          />

          {/* Animated gold timeline */}
          {!reduceMotion && (
            <motion.div
              style={{ scaleY }}
              className="
                absolute
                bottom-2 top-2
                left-[15px]
                w-[2px]
                origin-top
                bg-gradient-to-b
                from-[#FFF0A0]
                via-[#FFD21C]
                to-[#B87900]
                shadow-[0_0_14px_rgba(255,216,77,0.45)]
                sm:left-1/2
                sm:-translate-x-1/2
              "
              aria-hidden="true"
            />
          )}

          <div className="flex flex-col gap-10">

            {PHASES.map((phase, i) => {
              const alignRight = i % 2 === 1

              return (
                <Reveal
                  key={phase.year}
                  variant="rise"
                  delay={0.05}
                  className={`
                    relative
                    pl-10
                    sm:pl-0
                    ${
                      alignRight
                        ? 'sm:pr-[calc(50%+2rem)] sm:text-right'
                        : 'sm:pl-[calc(50%+2rem)]'
                    }
                  `}
                >

                  {/* =================================================
                      TIMELINE NODE
                  ================================================== */}

                  <motion.span
                    className="
                      absolute
                      left-0 top-1
                      z-10
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      border
                      border-[#FFD84D]/45
                      bg-[#020B2D]
                      shadow-[0_0_20px_rgba(255,193,7,0.08)]
                      sm:left-1/2
                      sm:-translate-x-1/2
                    "
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.18,
                          }
                    }
                  >
                    <span
                      className="
                        h-2.5 w-2.5
                        rounded-full
                        bg-[#FFD84D]
                        shadow-[0_0_12px_#FFD84D]
                      "
                    />
                  </motion.span>

                  {/* =================================================
                      PHASE CARD
                  ================================================== */}

                  <div
                    className="
                      group relative
                      overflow-hidden
                      rounded-2xl
                      border border-[#1687FF]/15
                      bg-[#06133D]/70
                      p-6
                      shadow-[0_10px_40px_rgba(0,45,150,0.08)]
                      backdrop-blur-xl
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-[#FFD84D]/40
                      hover:bg-[#08194A]/80
                      hover:shadow-[0_18px_50px_rgba(0,75,200,0.16)]
                    "
                  >
                    {/* Blue hover glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-16 -top-16
                        h-40 w-40
                        rounded-full
                        bg-[#0066FF]/0
                        transition-all duration-500
                        group-hover:bg-[#0066FF]/10
                      "
                    />

                    {/* Gold glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-16 -left-16
                        h-32 w-32
                        rounded-full
                        bg-[#FFD21C]/0
                        transition-all duration-500
                        group-hover:bg-[#FFD21C]/[0.035]
                      "
                    />

                    {/* Top gold accent */}
                    <div
                      className="
                        absolute
                        left-6 top-0
                        h-[2px] w-12
                        bg-gradient-to-r
                        from-[#A66A00]
                        via-[#FFD84D]
                        to-[#FFF0A0]
                        shadow-[0_0_10px_rgba(255,216,77,0.3)]
                        transition-all duration-500
                        group-hover:w-24
                      "
                    />

                    {/* Year / subtitle */}
                    <div
                      className={`
                        relative z-10
                        mb-1
                        flex items-center gap-3
                        ${
                          alignRight
                            ? 'sm:flex-row-reverse'
                            : ''
                        }
                      `}
                    >
                      <span
                        className="
                          font-mono
                          text-sm
                          font-medium
                          text-[#FFD84D]
                        "
                      >
                        {phase.year}
                      </span>

                      <span
                        className="
                          h-1 w-1
                          rounded-full
                          bg-[#6CAFFF]/40
                        "
                      />

                      <span
                        className="
                          text-xs
                          uppercase
                          tracking-[0.16em]
                          text-[#BFD8FF]/45
                        "
                      >
                        {phase.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        relative z-10
                        mb-3
                        font-display
                        text-2xl
                        font-medium
                        text-white
                        transition-colors duration-300
                        group-hover:text-[#FFE477]
                      "
                    >
                      {phase.title}
                    </h3>

                    {/* Items */}
                    <ul
                      className={`
                        relative z-10
                        flex flex-wrap gap-2
                        ${
                          alignRight
                            ? 'sm:justify-end'
                            : ''
                        }
                      `}
                    >
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="
                            rounded-full
                            border border-[#3C8DFF]/15
                            bg-[#020B2D]/60
                            px-3 py-1
                            text-xs
                            text-[#DDEBFF]/60
                            transition-all duration-300
                            hover:border-[#FFD84D]/35
                            hover:bg-[#FFD84D]/[0.05]
                            hover:text-[#FFE477]
                          "
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom hover line */}
                    <div
                      className={`
                        absolute
                        bottom-4
                        h-[1px]
                        w-0
                        bg-gradient-to-r
                        from-[#FFD84D]
                        to-transparent
                        transition-all duration-500
                        group-hover:w-24
                        ${
                          alignRight
                            ? 'right-6'
                            : 'left-6'
                        }
                      `}
                    />
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
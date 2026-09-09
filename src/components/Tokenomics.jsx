import { motion, useReducedMotion } from 'framer-motion'
import { Layers3, Coins, Network } from 'lucide-react'
import Reveal from './Reveal'
import Watermark from './Watermark'
import CountUp from './CountUp'

const DETAILS = [
  { label: 'Token Name', value: 'BVT TOKEN' },
  { label: 'Symbol', value: 'BVT' },
  { label: 'Network', value: 'BEP-20' },
  { label: 'Symbol', value: 'BVT' },
  { label: 'Total Supply', value: '10,000,000,000 BVT' },
  { label: 'Decimals', value: '18' },
]

const ALLOCATION = [
  {
    label: 'Ecosystem & User Rewards',
    pct: 25,
    amount: '2.5B',
    color: '#FFD84D',
  },
  {
    label: 'Community & Growth',
    pct: 15,
    amount: '1.5B',
    color: '#249BFF',
  },
  {
    label: 'Treasury / Ecosystem Development',
    pct: 15,
    amount: '1.5B',
    color: '#62B8FF',
  },
  {
    label: 'Liquidity',
    pct: 10,
    amount: '1.0B',
    color: '#F5D879',
  },
  {
    label: 'Strategic Partnerships',
    pct: 10,
    amount: '1.0B',
    color: '#C89220',
  },
  {
    label: 'Team & Advisors',
    pct: 10,
    amount: '1.0B',
    color: '#2451A6',
  },
  {
    label: 'Marketing & Adoption',
    pct: 7.5,
    amount: '750M',
    color: '#8B681B',
  },
  {
    label: 'Reserve',
    pct: 7.5,
    amount: '750M',
    color: '#172D72',
  },
]

function buildConicGradient(data) {
  let cursor = 0

  const stops = data.map((d) => {
    const start = cursor
    cursor += d.pct
    return `${d.color} ${start}% ${cursor}%`
  })

  return `conic-gradient(${stops.join(', ')})`
}

export default function Tokenomics() {
  const reduceMotion = useReducedMotion()
  const gradient = buildConicGradient(ALLOCATION)

  return (
    <section
      id="tokenomics"
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
        className="
          pointer-events-none
          absolute inset-0
          -z-20
          overflow-hidden
        "
        aria-hidden="true"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#020B2D]" />

        {/* Blue atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_15%_25%,rgba(0,91,255,0.18),transparent_35%),radial-gradient(circle_at_85%_20%,rgba(0,168,255,0.15),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(0,45,150,0.24),transparent_48%)]
          "
        />

        {/* =====================================================
            LEFT BLUE ENERGY
        ====================================================== */}

        <motion.div
          className="
            absolute
            -left-[12%] top-[20%]
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
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            RIGHT GOLD / BLUE ENERGY
        ====================================================== */}

        <motion.div
          className="
            absolute
            -right-[8%] top-[35%]
            h-[500px] w-[500px]
            rounded-full
            bg-[#00A8FF]/[0.045]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -60, 20, 0],
                  y: [0, -40, 50, 0],
                  scale: [1, 0.92, 1.08, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            absolute
            left-[48%] bottom-[-15%]
            h-[420px] w-[420px]
            rounded-full
            bg-[#FFD21C]/[0.025]
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
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =====================================================
            ORBIT RINGS
        ====================================================== */}

        <motion.div
          className="
            absolute
            left-1/2 top-[45%]
            h-[900px] w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border border-[#1687FF]/[0.05]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 55,
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
            border border-[#FFD84D]/[0.045]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 38,
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
          Array.from({ length: 30 }).map((_, index) => {
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
                  y: [0, -35, 0],
                  opacity: [0.08, 0.75, 0.08],
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
          opacity-[0.09]
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

      <Watermark
        position="bottom-left"
        size={460}
        opacity={0.025}
        direction={1}
      />

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
          Overlaps into the next section for a seamless transition.
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

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-12xl px-6 lg:px-10">

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
                font-mono text-xs
                uppercase tracking-[0.24em]
                text-[#FFE477]
              "
            >
              Tokenomics
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
            BVT token{' '}
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
              distribution
            </span>
          </h2>

          <p className="text-[#DDEBFF]/60">
            <CountUp
              value={10}
              suffix=" Billion BVT"
              className="text-[#FFE477]"
            />{' '}
            total supply, allocated across ecosystem growth.
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
            TOP METRIC CARDS
        ======================================================== */}

        <div className="mb-10 grid gap-4 sm:grid-cols-3">

          <Reveal variant="rise" delay={0.05}>
            <div
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-[#1687FF]/15
                bg-[#06133D]/65
                p-5
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#FFD84D]/35
              "
            >
              <Coins
                size={20}
                className="mb-4 text-[#FFD84D]"
              />

              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#BFD8FF]/40">
                Total Supply
              </p>

              <p className="font-display text-2xl font-semibold text-white">
                10 Billion
              </p>

              <div className="mt-4 h-[2px] w-10 bg-[#FFD84D] transition-all group-hover:w-20" />
            </div>
          </Reveal>

          <Reveal variant="rise" delay={0.12}>
            <div
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-[#1687FF]/15
                bg-[#06133D]/65
                p-5
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#FFD84D]/35
              "
            >
              <Network
                size={20}
                className="mb-4 text-[#28A8FF]"
              />

              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#BFD8FF]/40">
                Network
              </p>

              <p className="font-display text-2xl font-semibold text-white">
                BEP-20
              </p>

              <div className="mt-4 h-[2px] w-10 bg-[#28A8FF] transition-all group-hover:w-20" />
            </div>
          </Reveal>

          <Reveal variant="rise" delay={0.19}>
            <div
              className="
                group relative overflow-hidden
                rounded-2xl
                border border-[#1687FF]/15
                bg-[#06133D]/65
                p-5
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-[#FFD84D]/35
              "
            >
              <Layers3
                size={20}
                className="mb-4 text-[#FFD84D]"
              />

              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#BFD8FF]/40">
                Symbol
              </p>

              <p className="font-display text-2xl font-semibold text-white">
                BVT
              </p>

              <div className="mt-4 h-[2px] w-10 bg-[#FFD84D] transition-all group-hover:w-20" />
            </div>
          </Reveal>
        </div>

        {/* =======================================================
            MAIN TOKENOMICS DASHBOARD
        ======================================================== */}

        <div
          className="
            grid gap-8
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
          "
        >

          {/* =====================================================
              TOKEN DETAILS
          ====================================================== */}

          <Reveal variant="rise" delay={0.1}>
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-[#1687FF]/20
                bg-[#06133D]/70
                p-7
                shadow-[0_20px_70px_rgba(0,45,150,0.12)]
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Blue glow */}
              <div
                className="
                  pointer-events-none
                  absolute -right-20 -top-20
                  h-48 w-48
                  rounded-full
                  bg-[#0066FF]/10
                "
              />

              {/* Gold line */}
              <div
                className="
                  absolute left-8 top-0
                  h-[2px] w-20
                  bg-gradient-to-r
                  from-[#A66A00]
                  via-[#FFD84D]
                  to-[#FFF0A0]
                "
              />

              <div className="relative z-10 mb-7">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5EAFFF]/60">
                  Token Identity
                </p>

                <h3 className="font-display text-2xl font-semibold text-white">
                  BVT TOKEN
                </h3>
              </div>

              {/* Details */}
              <div
                className="
                  relative z-10
                  overflow-hidden
                  rounded-xl
                  border border-[#1687FF]/15
                  bg-[#020B2D]/50
                "
              >
                {DETAILS.map((d, i) => (
                  <div
                    key={d.label}
                    className={`
                      flex items-center
                      justify-between
                      gap-4
                      px-5 py-4
                      ${
                        i !== DETAILS.length - 1
                          ? 'border-b border-[#1687FF]/10'
                          : ''
                      }
                    `}
                  >
                    <span className="text-sm text-[#BFD8FF]/50">
                      {d.label}
                    </span>

                    <span
                      className="
                        text-right
                        font-mono text-sm
                        font-medium
                        text-[#FFE477]
                      "
                    >
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Utility statement */}
              <div
                className="
                  relative z-10
                  mt-6
                  rounded-xl
                  border border-[#FFD84D]/15
                  bg-[#FFD84D]/[0.035]
                  px-5 py-4
                "
              >
                <p className="font-display text-base italic text-[#FFE477]/85">
                  BVT = Utility + Rewards + Ecosystem Participation
                </p>
              </div>

              {/* Disclaimer */}
              <p
                className="
                  relative z-10
                  mt-6
                  text-xs
                  leading-relaxed
                  text-[#BFD8FF]/45
                "
              >
                These percentages are a proposed tokenomics structure.
                The BHAVISHYA roadmap confirms the 10-billion total supply
                but does not provide an official allocation breakdown.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
              DISTRIBUTION VISUAL
          ====================================================== */}

          <Reveal variant="scale" delay={0.2}>
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-[#1687FF]/20
                bg-[#06133D]/65
                p-7
                shadow-[0_20px_70px_rgba(0,45,150,0.12)]
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Heading */}
              <div className="mb-8">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#5EAFFF]/60">
                  Allocation
                </p>

                <h3 className="font-display text-2xl font-semibold text-white">
                  Ecosystem Distribution
                </h3>
              </div>

              <div className="flex flex-col gap-10 xl:flex-row xl:items-center">

                {/* =================================================
                    DONUT
                ================================================== */}

                <div className="relative mx-auto flex h-60 w-60 shrink-0 items-center justify-center sm:h-64 sm:w-64">

                  {/* Outer ring */}
                  <motion.div
                    className="
                      absolute inset-0
                      rounded-full
                      border border-[#1687FF]/10
                    "
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 360,
                          }
                    }
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Chart */}
                  <motion.div
                    className="
                      relative
                      flex h-52 w-52
                      items-center justify-center
                      rounded-full
                    "
                    style={{
                      background: gradient,
                    }}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            scale: 0.85,
                            opacity: 0,
                          }
                    }
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Inner circle */}
                    <div
                      className="
                        flex h-36 w-36
                        flex-col
                        items-center
                        justify-center
                        rounded-full
                        border border-[#1687FF]/15
                        bg-[#020B2D]
                        shadow-[0_0_40px_rgba(0,40,150,0.25)]
                      "
                    >
                      <span className="font-display text-2xl font-semibold text-white">
                        BVT
                      </span>

                      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#FFD84D]">
                        Tokenomics
                      </span>

                      <span className="mt-2 text-[10px] text-[#BFD8FF]/40">
                        100%
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* =================================================
                    ALLOCATION BARS
                ================================================== */}

                <div className="w-full space-y-4">
                  {ALLOCATION.map((a, index) => (
                    <div key={a.label}>

                      <div className="mb-1.5 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <span
                            className="h-2 w-2 shrink-0 rounded-full"
                            style={{
                              backgroundColor: a.color,
                              boxShadow: `0 0 8px ${a.color}`,
                            }}
                          />

                          <span className="truncate text-xs text-[#DDEBFF]/65">
                            {a.label}
                          </span>
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          <span className="font-mono text-[10px] text-[#BFD8FF]/40">
                            {a.amount}
                          </span>

                          <span className="font-mono text-xs font-medium text-[#FFE477]">
                            {a.pct}%
                          </span>
                        </div>
                      </div>

                      <div
                        className="
                          h-1.5
                          overflow-hidden
                          rounded-full
                          bg-[#020B2D]
                        "
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: a.color,
                            boxShadow: `0 0 8px ${a.color}`,
                          }}
                          initial={
                            reduceMotion
                              ? {
                                  width: `${a.pct}%`,
                                }
                              : {
                                  width: 0,
                                }
                          }
                          whileInView={{
                            width: `${a.pct}%`,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.4,
                          }}
                          transition={{
                            duration: 0.9,
                            delay: index * 0.06,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
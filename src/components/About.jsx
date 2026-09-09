import { Blocks, Network, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import Watermark from './Watermark'
import logo from '../assets/about.webp'
import card from '../assets/card.jpg'
import card2 from '../assets/card2.jpg'
import bg from '../assets/approachbg.jpg'


const approach = [
  {
    icon: Blocks,
    title: 'Utility',
    copy: 'Create practical applications for BVT across every service the BHAVISHYA ecosystem builds.',
  },
  {
    icon: Network,
    title: 'Ecosystem',
    copy: 'Connect wallets, rewards, real estate, skills, employment, education and healthcare through one common digital layer.',
  },
  {
    icon: Users,
    title: 'Community',
    copy: 'Encourage participation and long-term ecosystem development from every BVT holder.',
  },
]

const pillars = [
  {
    title: 'BEB-20 Utility Token',
    copy: 'Issued on the Blockchain Network for fast, low-cost transactions across the ecosystem.',
  },
  {
    title: '10 Billion Fixed Supply',
    copy: 'A transparent, fixed total supply of 10,000,000,000 BVT with 18 decimals.',
  },
  {
    title: 'Roadmap-Driven Growth',
    copy: 'A phased roadmap carries BVT from foundation to a full super-ecosystem by 2040.',
  },
  {
    title: 'Real-World Sectors',
    copy: 'Designed to progressively expand into real estate, skills, employment, education and healthcare.',
  },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="
        relative isolate overflow-hidden
        bg-[#020B2D]
        py-24
        lg:py-32
      "
    >
      {/* =========================================================
          BVT BLUE + GOLD BACKGROUND
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        {/* Base */}
        <div className="absolute inset-0 bg-[#020B2D]" />

        {/* Blue atmosphere */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_15%_20%,rgba(0,91,255,0.20),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(0,153,255,0.16),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(0,45,150,0.22),transparent_45%)]
          "
        />

        {/* Gold atmosphere */}
        <motion.div
          className="
            absolute
            left-[-8%] top-[15%]
            h-[400px] w-[400px]
            rounded-full
            bg-[#FFD21C]/[0.035]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 70, -20, 0],
                  y: [0, 40, 80, 0],
                  scale: [1, 1.1, 0.95, 1],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="
            absolute
            right-[-10%] bottom-[5%]
            h-[450px] w-[450px]
            rounded-full
            bg-[#0066FF]/[0.07]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -60, 20, 0],
                  y: [0, -40, 40, 0],
                  scale: [1, 1.08, 0.94, 1],
                }
          }
          transition={{
            duration: 17,
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
            left-[75%] top-[22%]
            h-[650px] w-[650px]
            -translate-x-1/2
            rounded-full
            border border-[#1687FF]/[0.10]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="
            absolute
            left-[75%] top-[22%]
            h-[480px] w-[480px]
            -translate-x-1/2
            rounded-full
            border border-[#FFD84D]/[0.08]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 27,
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
              -left-[25%] top-[-30%]
              h-[170%] w-[20%]
              rotate-[24deg]
              bg-gradient-to-r
              from-transparent
              via-[#FFD84D]/[0.035]
              to-transparent
            "
            animate={{
              x: ['0%', '650%'],
            }}
            transition={{
              duration: 18,
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
          Array.from({ length: 26 }).map((_, index) => {
            const gold = index % 5 === 0

            return (
              <motion.span
                key={index}
                className={`
                  absolute rounded-full
                  ${
                    gold
                      ? 'h-[3px] w-[3px] bg-[#FFD84D]'
                      : 'h-[2px] w-[2px] bg-[#1FA7FF]'
                  }
                `}
                style={{
                  left: `${(index * 41) % 100}%`,
                  top: `${(index * 57) % 100}%`,
                  boxShadow: gold
                    ? '0 0 12px rgba(255,216,77,0.9)'
                    : '0 0 10px rgba(31,167,255,0.8)',
                }}
                animate={{
                  x: [0, index % 2 ? -18 : 18, 0],
                  y: [0, -30, 0],
                  opacity: [0.1, 0.75, 0.1],
                  scale: [0.6, 1.4, 0.6],
                }}
                transition={{
                  duration: 4 + (index % 5),
                  delay: index * 0.15,
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
          pointer-events-none absolute inset-0 -z-10
          opacity-[0.12]
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(0,145,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(0,145,255,0.10)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </div>

      {/* =========================================================
          WATERMARK
      ========================================================== */}

      <Watermark
        position="top-left"
        size={420}
        direction={1}
        opacity={0.025}
      />

      <div className="relative z-10 mx-auto max-w-12xl px-6 lg:px-10">

        {/* =======================================================
            ABOUT US TOP HEADING
        ======================================================== */}

        <Reveal variant="rise">
          <div className="mb-16 text-center lg:mb-20">
            <div
              className="
                mb-5 inline-flex
                items-center gap-2
                rounded-full
                border border-[#FFD84D]/25
                bg-[#005EFF]/10
                px-5 py-2.5
                shadow-[0_0_30px_rgba(0,102,255,0.08)]
              "
            >
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-[#FFD84D]
                  shadow-[0_0_12px_#FFD84D]
                  animate-pulse
                "
              />

              <span
                className="
                  font-mono text-[11px]
                  uppercase tracking-[0.25em]
                  text-[#FFE477]
                "
              >
                About Us
              </span>
            </div>

            <h2
              className="
                text-balance
                font-display
                text-4xl font-semibold
                leading-[1.05]
                tracking-[-0.025em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building the future of the{' '}
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
                BHAVISHYA Ecosystem
              </span>
            </h2>

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
                      opacity: [0.5, 1, 0.5],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </Reveal>

        {/* =======================================================
            MAIN ABOUT CONTENT
        ======================================================== */}

        <div className="mb-20 grid items-center gap-14 lg:grid-cols-2">

          {/* LOGO */}
          <Reveal variant="scale" delay={0.1}>
  <div className="relative mx-auto flex w-full max-w-[20rem] items-center justify-center py-6 sm:max-w-[28rem] sm:py-8 md:max-w-[34rem] md:py-10 lg:mx-0 lg:max-w-[40rem] lg:justify-start lg:py-8 xl:max-w-[46rem]">

    {/* Blue energy */}
    <motion.div
      className="pointer-events-none absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(0,119,255,0.20),transparent_65%)] sm:inset-[-15%]"
      animate={
        reduceMotion
          ? undefined
          : {
              scale: [1, 1.08, 1],
              opacity: [0.55, 0.9, 0.55],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Gold energy */}
    <motion.div
      className="pointer-events-none absolute inset-[15%] rounded-full bg-[#FFD21C]/[0.045]"
      animate={
        reduceMotion
          ? undefined
          : {
              scale: [1, 1.12, 1],
              opacity: [0.4, 0.75, 0.4],
            }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Orbit */}
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1687FF]/20 sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] xl:h-[480px] xl:w-[480px]"
      animate={
        reduceMotion
          ? undefined
          : {
              rotate: 360,
            }
      }
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: 'linear',
      }}
    />

    {/* BVT Logo */}
    <img
      src={logo}
      alt="BVT Token"
      loading="lazy"
      decoding="async"
      className="relative z-20 mx-auto h-auto w-[18rem] object-contain drop-shadow-[0_25px_60px_rgba(0,71,190,0.45)] sm:w-[24rem] md:w-[30rem] lg:ml-0 lg:w-[36rem] xl:w-[42rem]"
    />
  </div>
</Reveal>

          {/* TEXT */}
          <div>
            <Reveal variant="rise" delay={0.18}>
              <h3
                className="
                  mb-6 text-balance
                  font-display
                  text-4xl font-semibold
                  leading-[1.1]
                  tracking-[-0.02em]
                  text-white
                  sm:text-5xl
                "
              >
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
                  Building the utility layer
                </span>

                <br className="hidden sm:block" />

                <span className="text-white">
                  {' '}for the BHAVISHYA ecosystem
                </span>
              </h3>
            </Reveal>

            <Reveal variant="rise" delay={0.26}>
              <p className="mb-4 max-w-xl leading-relaxed text-[#DDEBFF]/70">
                BVT Token is the utility token of the BHAVISHYA Ecosystem,
                Built on blockchain using the BEP-20 network.
              </p>
            </Reveal>

            <Reveal variant="rise" delay={0.34}>
              <p className="mb-8 max-w-xl leading-relaxed text-[#DDEBFF]/65">
                The project starts with its blockchain and digital
                infrastructure, then progressively expands into real-world
                sectors — connecting people with digital services, skills,
                employment, education, real estate and community opportunities.
              </p>
            </Reveal>

            {/* Vision card */}
            <Reveal variant="rise" delay={0.42}>
              <div
                className="
                  group relative
                  max-w-xl overflow-hidden
                  rounded-2xl
                  border border-[#FFD84D]/20
                  bg-[#06133D]/75
                  p-6
                  shadow-[0_15px_50px_rgba(0,65,180,0.12)]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-[#FFD84D]/50
                  hover:shadow-[0_20px_60px_rgba(0,90,220,0.18)]
                "
              >
                {/* Blue corner glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-20 -top-20
                    h-48 w-48
                    rounded-full
                    bg-[#0066FF]/10
                  "
                />

                {/* Gold top line */}
                <div
                  className="
                    absolute left-6 top-0
                    h-[2px] w-20
                    bg-gradient-to-r
                    from-[#A66A00]
                    via-[#FFD84D]
                    to-[#FFF3A0]
                    shadow-[0_0_14px_rgba(255,216,77,0.55)]
                    transition-all duration-500
                    group-hover:w-32
                  "
                />

                <div className="relative z-10">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="
                        h-2 w-2 rounded-full
                        bg-[#FFD84D]
                        shadow-[0_0_12px_#FFD84D]
                        animate-pulse
                      "
                    />

                    <span
                      className="
                        font-mono text-xs
                        uppercase tracking-[0.22em]
                        text-[#FFE477]
                      "
                    >
                      Our Vision
                    </span>
                  </div>

                  <p className="text-base leading-7 text-[#DDEBFF]/75">
                    A connected ecosystem that creates opportunities through{' '}
                    <span className="font-medium text-[#FFD84D]">
                      technology, education and skills
                    </span>
                    , building toward an integrated BHAVISHYA ecosystem by{' '}
                    <span className="font-medium text-[#FFD84D]">
                      2040
                    </span>
                    .
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* =======================================================
            OUR APPROACH
        ======================================================== */}

        <Reveal variant="rise" delay={0.05}>
  <div className="relative overflow-hidden rounded-[32px] border border-[#1687FF]/20 bg-[#06133D]/65 p-8 shadow-[0_0_80px_rgba(0,78,200,0.10)] backdrop-blur-xl sm:p-12">

    {/* Section Background Image */}
    <img src={bg} alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-50" />

    {/* Section Background Overlay */}
    {/* <div className="pointer-events-none absolute inset-0 bg-[#06133D]/55" /> */}

    {/* Background glow */}
    {/* <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#0066FF]/10" /> */}

    <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#FFD21C]/[0.04]" />

    <Reveal variant="rise" delay={0.1}>
      <div className="relative z-10 mx-auto mb-12 max-w-2xl text-center">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFD84D]/25 bg-[#005EFF]/10 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFD84D] shadow-[0_0_12px_#FFD84D]" />

          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#FFE477]">
            Our Approach
          </span>
        </div>

        <h3 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          Three principles behind{' '}
          <span className="bg-gradient-to-r from-[#FFF3A0] via-[#FFD21C] to-[#F4A900] bg-clip-text text-transparent">
            every decision
          </span>
        </h3>
      </div>
    </Reveal>

    <div className="relative z-10 grid gap-5 sm:grid-cols-3">
      {approach.map((item, i) => {
        const Icon = item.icon

        return (
          <Reveal key={item.title} variant="rise" delay={0.16 + i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-[#1687FF]/15 bg-[#020B2D]/70 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD84D]/45 hover:shadow-[0_15px_45px_rgba(0,83,210,0.18)]">

              {/* Card Background Image */}
              <img
                src={card2}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Card Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[#020B2D]/40" />

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B2D]/80 via-[#020B2D]/25 to-transparent" />

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#0066FF]/0 transition-all duration-500 group-hover:bg-[#0066FF]/10" />

              {/* Icon */}
              <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD84D]/25 bg-[#FFD84D]/[0.07] text-[#FFD84D] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#FFD84D]/50 group-hover:bg-[#FFD84D]/15">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h4 className="relative z-10 mb-2 font-display text-xl font-medium text-white transition-colors group-hover:text-[#FFE477]">
                {item.title}
              </h4>

              {/* Description */}
              <p className="relative z-10 text-sm leading-6 text-[#DDEBFF]/70">
                {item.copy}
              </p>
            </div>
          </Reveal>
        )
      })}
    </div>
  </div>
</Reveal>

        {/* =======================================================
            WHY BVT
        ======================================================== */}

        <div className="mb-8 mt-24 text-center">
          <Reveal variant="rise">
            <div
              className="
                mb-4 font-mono text-xs
                uppercase tracking-[0.25em]
                text-[#5EAAFF]/55
              "
            >
              The Foundation
            </div>

            <h3
              className="
                font-display
                text-3xl
                tracking-[-0.02em]
                text-[#FFE477]
                sm:text-4xl
              "
            >
              Why BVT?
            </h3>

            <div
              className="
                mx-auto mt-4
                h-[1px] w-16
                bg-gradient-to-r
                from-transparent
                via-[#FFD84D]
                to-transparent
              "
            />
          </Reveal>
        </div>

        {/* WHY BVT CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {pillars.map((p, i) => (
    <Reveal key={p.title} variant="rise" delay={0.08 + i * 0.1}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-[#1687FF]/15 bg-[#06133D]/55 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD84D]/40 hover:bg-[#08194A]/70 hover:shadow-[0_15px_45px_rgba(0,80,210,0.14)]">

        {/* Card Background Image */}
        <img
          src={card}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center  transition-transform duration-700 group-hover:scale-110"
        />

        {/* Soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#020B2D]/45" />

        {/* Bottom gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020B2D]/80 via-[#020B2D]/25 to-transparent" />

        {/* Blue hover glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#0066FF]/0 transition-all duration-500 group-hover:bg-[#0066FF]/10" />

        {/* Gold accent line */}
        <span className="relative z-10 mb-5 block h-[2px] w-8 bg-gradient-to-r from-[#B77A00] via-[#FFD84D] to-[#FFF0A0] shadow-[0_0_10px_rgba(255,216,77,0.35)] transition-all duration-500 group-hover:w-14" />

        {/* Title */}
        <h4 className="relative z-10 mb-2 font-display text-lg text-[#E8F2FF] transition-colors group-hover:text-[#FFE477]">
          {p.title}
        </h4>

        {/* Description */}
        <p className="relative z-10 text-sm leading-relaxed text-[#DDEBFF]/65">
          {p.copy}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  )
}
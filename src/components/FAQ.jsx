import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Reveal from './Reveal'
import Watermark from './Watermark'

const QA = [
  {
    q: 'What is BVT Token?',
    a: 'BVT Token is a BEP-20 utility token built on the blockchain and designed for the BHAVISHYA Ecosystem.',
  },
  {
    q: 'What is the BVT symbol?',
    a: 'The token symbol is BVT.',
  },
  {
    q: 'Which blockchain does BVT use?',
    a: 'BVT operates on the Blockchain Network using the BEP-20 standard.',
  },
  {
    q: 'What is the total supply?',
    a: 'The total supply is 10,000,000,000 BVT (10 Billion).',
  },
  {
    q: 'How many decimals does BVT have?',
    a: 'BVT has 18 decimals.',
  },
  {
    q: 'What is BVT used for?',
    a: 'BVT is designed for ecosystem utility, rewards, digital services, community participation and future applications across real estate, skills, employment, education and other BHAVISHYA services.',
  },
  {
    q: 'Is BVT an investment token?',
    a: 'BVT is positioned as a utility token. It should not be presented as guaranteeing profits, returns or price appreciation.',
  },
  {
    q: 'Where can I use BVT?',
    a: 'As the ecosystem develops, BVT is intended to be used across eligible BHAVISHYA services and applications.',
  },
  {
    q: 'What is the BHAVISHYA Super App?',
    a: 'The 2030 roadmap proposes a Super App bringing together the BVT utility ecosystem, real estate, skills and employment platforms.',
  },
  {
    q: 'When will the BVT contract address be available?',
    a: 'The official contract address should be published through the project’s official channels after deployment.',
  },
  {
    q: 'Is BVT audited?',
    a: 'Smart Contract & Audit is included in the 2026 roadmap. The website should publish the final audit report once the audit is completed.',
  },
  {
    q: 'How can I join the BVT community?',
    a: 'Follow the official BHAVISHYA/BVT channels for announcements, ecosystem updates, product launches and community activities.',
  },
]

function Item({ item, index, isOpen, onToggle, reduceMotion }) {
  return (
    <motion.div
      initial={false}
      animate={{
        borderColor: isOpen
          ? 'rgba(255,216,77,0.30)'
          : 'rgba(201,168,78,0.12)',
      }}
      className="group relative overflow-hidden rounded-2xl border bg-[#07102D]/72 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
    >
      {/* Active glow */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(201,168,78,0.12),transparent_55%)]"
      />

      {/* Gold active line */}
      <motion.div
        initial={false}
        animate={{
          scaleX: isOpen ? 1 : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[#F4D675] via-[#C9A84E] to-transparent"
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        {/* Number */}
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-[10px] font-semibold transition-all duration-200 ${
            isOpen
              ? 'border-[#FFD84D]/30 bg-[#FFD84D]/10 text-[#FFD84D]'
              : 'border-[#C9A84E]/15 bg-[#C9A84E]/5 text-[#E2C875]/60'
          }`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Question */}
        <span
          className={`flex-1 font-display text-base font-medium transition-colors duration-200 sm:text-lg ${
            isOpen
              ? 'text-[#FFE477]'
              : 'text-white group-hover:text-[#F4EAD0]'
          }`}
        >
          {item.q}
        </span>

        {/* Arrow */}
        <motion.span
          animate={{
            rotate: isOpen ? 180 : 0,
            borderColor: isOpen
              ? 'rgba(255,216,77,0.45)'
              : 'rgba(191,216,255,0.15)',
            backgroundColor: isOpen
              ? 'rgba(255,216,77,0.10)'
              : 'rgba(201,168,78,0.04)',
          }}
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[#E8DEC2]/60"
        >
          <ChevronDown size={17} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { height: 0, opacity: 0 }
      }
      animate={
        reduceMotion
          ? { opacity: 1 }
          : { height: 'auto', opacity: 1 }
      }
      exit={
        reduceMotion
          ? { opacity: 0 }
          : { height: 0, opacity: 0 }
      }
      transition={{
        height: {
          duration: 0.20,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          duration: 0.12,
          ease: 'easeOut',
        },
      }}
      className="overflow-hidden"
    >
      <div className="relative px-5 pb-6 pl-[4.5rem] pr-12 sm:px-6 sm:pb-7 sm:pl-[4.75rem]">
        <div className="absolute bottom-7 left-[3.05rem] top-0 w-px bg-gradient-to-b from-[#FFD84D]/30 via-[#C9A84E]/20 to-transparent sm:left-[3.35rem]" />

        <p className="max-w-3xl text-sm leading-7 text-[#E8DEC2]/62 sm:text-[15px]">
          {item.a}
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="faq"
      className="relative isolate overflow-visible bg-[#030E35] py-24 sm:py-28 lg:py-32"
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

      {/* ───────────── FULL SECTION BLUE ATMOSPHERE ───────────── */}

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(0,119,255,0.25),transparent_31%),radial-gradient(circle_at_90%_22%,rgba(22,135,255,0.22),transparent_33%),radial-gradient(circle_at_50%_52%,rgba(0,102,255,0.14),transparent_44%),radial-gradient(circle_at_15%_88%,rgba(0,91,255,0.20),transparent_35%),radial-gradient(circle_at_85%_90%,rgba(0,153,255,0.17),transparent_36%)]" />

       

        <motion.div
          className="absolute -right-[18%] top-[35%] h-[540px] w-[68%] rounded-full bg-[radial-gradient(ellipse,rgba(22,135,255,0.30)_0%,rgba(0,102,255,0.13)_44%,transparent_76%)] blur-[60px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -70, 30, 0],
                  y: [0, -30, 45, 0],
                  scale: [1, 0.93, 1.08, 1],
                  opacity: [0.40, 0.66, 0.46, 0.40],
                }
          }
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-[15%] bottom-[-20%] h-[500px] w-[72%] rounded-full bg-[radial-gradient(ellipse,rgba(0,102,255,0.31)_0%,rgba(0,68,210,0.13)_44%,transparent_76%)] blur-[58px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [-35, 50, -15, -35],
                  scale: [1, 1.08, 0.95, 1],
                  opacity: [0.34, 0.58, 0.40, 0.34],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        /> <motion.div
          className="absolute -left-[18%] top-[10%] h-[500px] w-[64%] rounded-full bg-[radial-gradient(ellipse,rgba(0,119,255,0.31)_0%,rgba(0,102,255,0.13)_44%,transparent_76%)] blur-[55px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 75, -25, 0],
                  y: [0, 35, -18, 0],
                  scale: [1, 1.1, 0.96, 1],
                  opacity: [0.44, 0.70, 0.48, 0.44],
                }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ───────────── Background ───────────── */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(38,119,255,0.18),transparent_34%),radial-gradient(circle_at_88%_28%,rgba(25,91,220,0.14),transparent_34%),radial-gradient(circle_at_50%_72%,rgba(17,72,190,0.12),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(2,18,72,0.28),transparent_48%)]" />

        {/* Digital grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(104,157,255,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(104,157,255,0.055) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Warm ambient glow */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  opacity: [0.12, 0.23, 0.12],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-[#126BFF]/12 blur-[115px]"
        />

        {/* Gold ambient glow */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -30, 0],
                  y: [0, 25, 0],
                  opacity: [0.06, 0.14, 0.06],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-20 bottom-20 h-[28rem] w-[28rem] rounded-full bg-[#1E7BFF]/10 blur-[125px]"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0, 0.65, 0],
                    y: [-10, -60, -110],
                    x: [0, i % 2 === 0 ? 12 : -12, 0],
                  }
            }
            transition={{
              duration: 5 + (i % 4),
              delay: i * 0.22,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className={`absolute h-1 w-1 rounded-full ${
              i % 4 === 0
                ? 'bg-[#FFD84D]'
                : 'bg-[#C9A84E]'
            }`}
            style={{
              left: `${4 + ((i * 19) % 92)}%`,
              top: `${15 + ((i * 17) % 78)}%`,
            }}
          />
        ))}
      </div>

      <Watermark
        position="top-right"
        size={440}
        opacity={0.025}
        direction={-1}
      />

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

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">

        {/* ───────────── Header ───────────── */}

        <Reveal
          variant="rise"
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#FFD84D] to-[#C9A84E]" />

            <span className="font-display text-[10px] font-medium uppercase tracking-[0.24em] text-[#FFD84D]">
              FAQ / Knowledge Base
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#FFD84D] to-[#C9A84E]" />
          </div>

          <div className="mb-5 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A84E]/20 bg-[#C9A84E]/5 shadow-[0_0_35px_rgba(138,106,36,0.12)]">
              <HelpCircle
                size={27}
                className="text-[#FFD84D]"
              />
            </div>
          </div>

          <h2 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-[#FFE477] via-[#FFD21C] to-[#F4A900] bg-clip-text text-transparent">
              questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#E8DEC2]/55 sm:text-base">
            Everything you need to know about BVT Token and the
            BHAVISHYA Ecosystem.
          </p>
        </Reveal>

        {/* ───────────── FAQ List ───────────── */}

        <Reveal variant="rise" delay={0.1}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
            {QA.map((item, i) => (
              <Item
                key={item.q}
                item={item}
                index={i}
                isOpen={open === i}
                onToggle={() =>
                  setOpen(open === i ? -1 : i)
                }
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </Reveal>

        {/* ───────────── Bottom Info ───────────── */}

        <Reveal variant="rise" delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <div className="flex items-center gap-2 rounded-full border border-[#C9A84E]/15 bg-[#06133D]/50 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84E] shadow-[0_0_9px_rgba(201,168,78,0.8)]" />

              <span className="font-display text-[9px] font-medium uppercase tracking-[0.18em] text-[#E8DEC2]/40">
                BVT Token
              </span>
            </div>

            <div className="hidden h-px w-8 bg-[#C9A84E]/20 sm:block" />

            <div className="flex items-center gap-2 rounded-full border border-[#FFD84D]/15 bg-[#FFD84D]/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD84D] shadow-[0_0_9px_rgba(255,216,77,0.7)]" />

              <span className="font-display text-[9px] font-medium uppercase tracking-[0.18em] text-[#E8DEC2]/40">
                BHAVISHYA Ecosystem
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
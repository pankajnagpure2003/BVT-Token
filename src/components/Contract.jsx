import { motion, useReducedMotion } from 'framer-motion'
import { ShieldCheck, ExternalLink, Copy, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import Reveal from './Reveal'
import Watermark from './Watermark'

const DETAILS = [
  { label: 'Token Name', value: 'BVT TOKEN' },
  { label: 'Symbol', value: 'BVT' },
  { label: 'Network', value: 'TRON' },
  { label: 'Standard', value: 'BEB-20' },
  { label: 'Decimals', value: '6' },
  { label: 'Total Supply', value: '10,000,000,000 BVT' },
]

export default function Contract() {
  const reduceMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const contractAddress = 'Coming Soon — XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

  const handleCopy = async () => {
    if (contractAddress.includes('Coming Soon')) return

    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard unavailable
    }
  }

  return (
    <section
      id="contract"
      className="relative isolate overflow-visible bg-[#03103A] py-24 sm:py-28 lg:py-32"
    >
      {/* ───────────────── Blue Gradient — Section Start ───────────────── */}

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-40 h-28 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.30)_0%,rgba(22,135,255,0.17)_28%,rgba(0,102,255,0.055)_54%,transparent_80%)] blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50 h-10 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#1687FF]/[0.09] to-transparent"
        aria-hidden="true"
      />

      {/* ───────────────── Full Section Blue Brightness ───────────────── */}

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Overall blue wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(0,119,255,0.22),transparent_31%),radial-gradient(circle_at_90%_24%,rgba(22,135,255,0.19),transparent_33%),radial-gradient(circle_at_50%_52%,rgba(0,102,255,0.13),transparent_45%),radial-gradient(circle_at_18%_88%,rgba(0,91,255,0.18),transparent_35%),radial-gradient(circle_at_82%_90%,rgba(0,153,255,0.15),transparent_36%)]" />

        {/* Animated left energy */}
        <motion.div
          className="absolute -left-[18%] top-[12%] h-[520px] w-[62%] rounded-full bg-[radial-gradient(ellipse,rgba(0,119,255,0.22)_0%,rgba(0,102,255,0.09)_42%,transparent_75%)] blur-[55px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 80, -25, 0],
                  y: [0, 35, -18, 0],
                  scale: [1, 1.1, 0.96, 1],
                  opacity: [0.40, 0.68, 0.44, 0.40],
                }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated right energy */}
        <motion.div
          className="absolute -right-[18%] top-[38%] h-[560px] w-[66%] rounded-full bg-[radial-gradient(ellipse,rgba(22,135,255,0.30)_0%,rgba(0,102,255,0.09)_43%,transparent_76%)] blur-[60px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -70, 30, 0],
                  y: [0, -28, 48, 0],
                  scale: [1, 0.93, 1.09, 1],
                  opacity: [0.38, 0.64, 0.42, 0.38],
                }
          }
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Lower blue ambience */}
        <motion.div
          className="absolute left-[15%] bottom-[-20%] h-[500px] w-[72%] rounded-full bg-[radial-gradient(ellipse,rgba(0,102,255,0.21)_0%,rgba(0,68,210,0.09)_44%,transparent_76%)] blur-[58px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [-35, 50, -15, -35],
                  scale: [1, 1.08, 0.95, 1],
                  opacity: [0.32, 0.56, 0.38, 0.32],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Very subtle blue vertical light */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1687FF]/20 to-transparent" />
      </div>

      {/* ───────────────── Background Atmosphere ───────────────── */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(180,125,20,0.15),transparent_34%),radial-gradient(circle_at_85%_30%,rgba(212,160,45,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(255,210,28,0.13),transparent_35%)]" />

        <div
          className="absolute inset-0 opacity-[0.17]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,160,45,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,160,45,0.10) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Blue glow */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.18, 0.3, 0.18],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-[#C9952E]/12 blur-[110px]"
        />

        {/* Gold glow */}
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.08, 0.18, 0.08],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[8%] right-[10%] h-80 w-80 rounded-full bg-[#FFD21C]/12 blur-[120px]"
        />

        {/* Floating particles */}
        {[...Array(18)].map((_, i) => (
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
                    opacity: [0, 0.8, 0],
                    y: [-10, -70, -120],
                    x: [0, i % 2 === 0 ? 15 : -15, 0],
                  }
            }
            transition={{
              duration: 5 + (i % 4),
              delay: i * 0.25,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            className={`absolute h-1 w-1 rounded-full ${
              i % 3 === 0 ? 'bg-[#FFD84D]' : 'bg-[#D4A63A]'
            }`}
            style={{
              left: `${5 + ((i * 17) % 90)}%`,
              top: `${30 + ((i * 13) % 60)}%`,
            }}
          />
        ))}
      </div>

      <Watermark
        position="center"
        size={620}
        opacity={0.025}
        direction={1}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">

        {/* ───────────────── Header ───────────────── */}

        <Reveal variant="rise" className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-[#FFD84D] to-[#D4A63A]" />

            <span className="font-display text-[10px] uppercase tracking-[0.32em] text-[#FFD84D]">
              Contract Verification
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent via-[#FFD84D] to-[#D4A63A]" />
          </div>

          <h2 className="mb-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#FFE477] via-[#FFD21C] to-[#F4A900] bg-clip-text text-transparent">
              Verify.
            </span>{' '}
            <span className="text-white">Copy.</span>{' '}
            <span className="bg-gradient-to-r from-[#F4A900] via-[#FFD84D] to-[#FFF3A0] bg-clip-text text-transparent">
              Connect.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#D8E7FF]/75 sm:text-base">
            BVT is issued on the TRON Network using the BEB-20 token standard.
            Always verify the official contract address before interacting
            with the token.
          </p>
        </Reveal>

        {/* ───────────────── Main Card ───────────────── */}

        <Reveal variant="scale" delay={0.1}>
          <div className="relative overflow-hidden rounded-[28px] border border-[#D4A63A]/20 bg-[#07122F]/72 p-5 shadow-[0_0_80px_rgba(180,125,20,0.06)] backdrop-blur-2xl sm:p-7 lg:p-9">

            {/* Top glow line */}
            <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD84D] to-transparent opacity-70" />

            {/* Corner glows */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#B8862B]/10 blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#FFD21C]/5 blur-[80px]" />

            {/* ───────────────── Verification Header ───────────────── */}

            <div className="relative mb-7 flex flex-col gap-5 border-b border-[#D4A63A]/10 pb-7 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          boxShadow: [
                            '0 0 0 rgba(255,216,77,0)',
                            '0 0 28px rgba(255,216,77,0.25)',
                            '0 0 0 rgba(255,216,77,0)',
                          ],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD84D]/30 bg-[#FFD84D]/10"
                >
                  <ShieldCheck
                    size={24}
                    className="text-[#FFD84D]"
                  />
                </motion.div>

                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    BVT Smart Contract
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD84D] shadow-[0_0_8px_rgba(255,216,77,0.7)]" />
                    <span className="font-display text-[10px] uppercase tracking-[0.20em] text-[#D8E7FF]/60">
                      Verification Status
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#FFD84D]">
                      Pending Launch
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-full border border-[#D4A63A]/20 bg-[#D4A63A]/5 px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E6C875]">
                  TRON • BEB-20
                </span>
              </div>
            </div>

            {/* ───────────────── Token Details ───────────────── */}

            <div className="relative mb-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-display text-[10px] uppercase tracking-[0.24em] text-[#D8E7FF]/58">
                  Token Information
                </p>

                <span className="h-px flex-1 ml-5 bg-gradient-to-r from-[#D4A63A]/20 to-transparent" />
              </div>

              <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#D4A63A]/15 bg-[#030A22]/55 sm:grid-cols-3">
                {DETAILS.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            backgroundColor: 'rgba(212,160,45,0.05)',
                          }
                    }
                    className={`relative bg-[#0A1738]/62 px-4 py-5 transition-colors ${
                      index < 3
                        ? 'border-b border-[#D4A63A]/10'
                        : ''
                    } ${
                      index % 3 !== 2
                        ? 'sm:border-r sm:border-[#D4A63A]/10'
                        : ''
                    } ${
                      index % 2 !== 1
                        ? 'border-r border-[#D4A63A]/10 sm:border-r'
                        : ''
                    }`}
                  >
                    <p className="font-display text-[9px] uppercase tracking-[0.20em] text-[#D8E7FF]/48">
                      {detail.label}
                    </p>

                    <p className="mt-2 truncate font-display text-sm font-semibold text-[#FFE477]">
                      {detail.value}
                    </p>

                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#FFD84D]/15 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ───────────────── Contract Address ───────────────── */}

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-display text-[10px] uppercase tracking-[0.24em] text-[#D8E7FF]/58">
                  Official Contract Address
                </p>

                <span className="font-display text-[9px] uppercase tracking-[0.18em] text-[#FFD84D]/60">
                  Verify Before Transaction
                </span>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row">

                {/* Address */}
                <div className="group relative flex min-w-0 flex-1 items-center overflow-hidden rounded-2xl border border-[#D4A63A]/20 bg-[#030A22]/72">
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FFD84D] via-[#D4A63A] to-[#B8862B]" />

                  <div className="min-w-0 flex-1 px-5 py-4 pl-6">
                    <p className="truncate font-sans text-xs text-[#D8E7FF]/58 sm:text-sm">
                      {contractAddress}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={contractAddress.includes('Coming Soon')}
                    className="mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4A63A]/15 bg-[#06133D] text-[#E6C875] transition-all hover:border-[#FFD84D]/30 hover:text-[#FFD84D] disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Copy contract address"
                  >
                    {copied ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>

                {/* Explorer */}
                <a
                  href="#faq"
                  className="group flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-[#FFD84D]/25 bg-gradient-to-r from-[#FFD21C]/10 to-[#D4A63A]/5 px-6 py-4 text-sm font-medium text-[#FFE477] transition-all duration-300 hover:border-[#FFD84D]/50 hover:bg-[#FFD21C]/15 hover:shadow-[0_0_28px_rgba(255,216,77,0.12)] lg:min-w-[210px]"
                >
                  <ExternalLink
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />

                  <span>Explorer</span>

                  <span className="text-[#D8E7FF]/52">
                    Coming Soon
                  </span>
                </a>
              </div>
            </div>

            {/* ───────────────── Security Notice ───────────────── */}

            <div className="relative mt-7 overflow-hidden rounded-2xl border border-[#FFD84D]/15 bg-gradient-to-r from-[#FFD21C]/5 via-[#D4A63A]/5 to-transparent p-5">

              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#FFD84D] via-[#D4A63A] to-transparent" />

              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#FFD84D]/20 bg-[#FFD84D]/10">
                  <ShieldCheck
                    size={18}
                    className="text-[#FFD84D]"
                  />
                </div>

                <div>
                  <p className="mb-1 font-display text-sm font-semibold text-[#FFE477]">
                    Security & Verification
                  </p>

                  <p className="text-xs leading-6 text-[#D8E7FF]/68 sm:text-sm">
                    Smart Contract &amp; Audit is included in the 2026
                    roadmap. Always verify the official BVT contract
                    address through the project's official website before
                    making any transaction.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* ───────────────── Bottom Status ───────────────── */}

        <Reveal variant="rise" delay={0.2} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A63A] shadow-[0_0_10px_rgba(36,155,255,0.8)]" />
              <span className="font-display text-[9px] uppercase tracking-[0.18em] text-[#D8E7FF]/52">
                TRON Network
              </span>
            </div>

            <span className="hidden h-3 w-px bg-[#D4A63A]/20 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD84D] shadow-[0_0_10px_rgba(255,216,77,0.7)]" />
              <span className="font-display text-[9px] uppercase tracking-[0.18em] text-[#D8E7FF]/52">
                BEB-20 Standard
              </span>
            </div>

            <span className="hidden h-3 w-px bg-[#D4A63A]/20 sm:block" />

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFD84D] shadow-[0_0_10px_rgba(255,216,77,0.7)]" />
              <span className="font-display text-[9px] uppercase tracking-[0.18em] text-[#D8E7FF]/52">
                Official Source Only
              </span>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ───────────────── Blue Gradient — Section End ───────────────── */}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-32 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.31)_0%,rgba(22,135,255,0.17)_28%,rgba(0,102,255,0.055)_54%,transparent_82%)] blur-xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-50 h-px w-[76%] -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-transparent via-[#1687FF]/55 to-transparent shadow-[0_0_30px_rgba(22,135,255,0.48)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-14 translate-y-1/2 bg-gradient-to-b from-transparent via-[#0066FF]/[0.08] to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
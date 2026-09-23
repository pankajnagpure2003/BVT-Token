import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Globe, Shield, Zap, Gift, Monitor, TrendingUp, Clock, Wallet,
  ChevronRight, CheckCircle, AlertTriangle, Home, BookOpen, Briefcase,
  GraduationCap, Heart, Smartphone, Copy, ExternalLink,
  LockKeyhole, CircleDollarSign
} from 'lucide-react'
import Tokenomic from './Tokenomic'
import BuySection from './BuySection'
import logoImg from '../../../assets/logo.webp'
import { WHITEPAPER_URL } from '../../../constants/navigation'

const LOGO = logoImg


const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

function BackgroundFX({ dense = false }) {
  const particles = useMemo(
    () => Array.from({ length: dense ? 22 : 14 }, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      top: `${(i * 61) % 100}%`,
      delay: `${(i % 7) * 0.45}s`,
      duration: `${5 + (i % 5)}s`,
      size: `${2 + (i % 3)}px`
    })),
    [dense]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl animate-orb" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-orb-reverse" />
      <div className="absolute left-1/2 bottom-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-[#FFD700]/5 blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-70" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#FFD700]/50 animate-particle"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  )
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = Date.now() + 30 * 24 * 60 * 60 * 1000
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
      {[
        ['Days', timeLeft.days], ['Hours', timeLeft.hours],
        ['Minutes', timeLeft.minutes], ['Seconds', timeLeft.seconds]
      ].map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="glass-card px-2 py-3 sm:px-4 sm:py-3">
            <span className="gold-text text-xl sm:text-2xl md:text-3xl font-black tabular-nums">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</span>
        </div>
      ))}
    </div>
  )
}


function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <BackgroundFX dense />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
          <motion.div variants={fadeIn} className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFD700] shadow-lg shadow-[#D4AF37]/5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFD700]" /> Presale Is Live
          </motion.div>

         <motion.h1 variants={fadeIn} className="text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
  <span className="font-['Orbitron'] text-white font-extrabold tracking-wide">
  BVT TOKEN
</span>
<br />
<span
  className="font-['Orbitron'] font-extrabold 
             bg-[linear-gradient(94.58deg,_#B17E1C_3.26%,_#F2DE75_28.5%,_#C9A43E_95.37%)] 
             bg-clip-text text-transparent 
             animate-shine tracking-wider"
>
  PRESALE
</span>

</motion.h1>


          <motion.h2 variants={fadeIn} className="mt-5 text-lg font-bold text-[#D4AF37] sm:text-2xl">
            Be Part of the BHAVISHYA Ecosystem
          </motion.h2>

          <motion.p variants={fadeIn} className="mt-4 text-sm font-medium italic text-slate-400 sm:text-base">
           {/* <span className="mx-2 text-[#D4AF37]">•</span> BHAVISHYA Ecosystem <span className="mx-2 text-[#D4AF37]">•</span> 2026 */}
          </motion.p>

          <motion.p variants={fadeIn} className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
            BVT Token is a BEP-20 utility token built on the Blockchain Network, designed to power the growing BHAVISHYA Ecosystem.
            Join the BVT Presale and become an early participant in the ecosystem's journey across real estate, skills,
            employment, education, healthcare and digital services.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-300 lg:justify-start sm:text-sm">
            <span>Blockchain Network</span><b className="text-[#D4AF37]">•</b><span>BEP-20</span><b className="text-[#D4AF37]">•</b><span>10 Billion Total Supply</span>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a  href="#how-to-buy" className="btn-gold inline-flex items-center justify-center gap-2"><Wallet size={18} /> Buy BVT Now</a>
            <a  href={WHITEPAPER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center justify-center gap-2"><ExternalLink size={18} /> View Whitepaper</a>
          </motion.div>

           
        </motion.div>
    
        <motion.div initial={{ opacity: 0, scale: .82, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: .9, ease: 'easeOut' }} className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
          <div className="relative animate-float">
            <img src={LOGO} alt="Bhavishya Vision Token logo" className="relative z-10 mx-auto w-[78%] drop-shadow-[0_0_35px_rgba(212,175,55,.32)] sm:w-[86%]" />
            <div className="absolute inset-0 rounded-full border border-[#FFD700]/10" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ['10B', 'Total Supply'], ['BEP-20', 'Standard'], ['Blockchain ', 'Network']
            ].map(([v, l]) => (
              <div key={l} className="glass-card p-3 text-center">
                <div className="gold-text text-sm font-black sm:text-base">{v}</div>
                <div className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{eyebrow}</div>}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">{children}</p>}
    </div>
  )
}

 
function PresaleStatus() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setProgress(35), 250)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      id="presale"
      className="section-padding relative overflow-hidden"
    >
      <BackgroundFX />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0066FF]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-[#FFD700]/8 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="glass-card relative overflow-hidden p-5 sm:p-7 md:p-10">

          {/* Top shine */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-70" />

          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFD700]/20 bg-[#FFD700]/8">
                <Zap
                  size={20}
                  className="text-[#FFD700]"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                    BVT Presale
                  </h2>

                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Secure your position in the BHAVISHYA Ecosystem
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-xl border border-[#D4AF37]/15 bg-[#07111f]/60 px-4 py-2 sm:self-auto">
              <span className="text-xs text-slate-500">
                Current Stage
              </span>
              <span className="font-black text-[#FFD700]">
                02 / 04
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">

            {/* LEFT SIDE */}
            <div>

              <div className="mb-6">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                  Early Access Opportunity
                </p>

                <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                  Secure Your
                  <span className="gold-text"> BVT Tokens </span>
                  During the Presale
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  BVT Token is a BEP-20 utility token built on the Blockchain
                  Network, designed to power the growing BHAVISHYA Ecosystem.
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Join the BVT Presale and become an early participant in
                  the ecosystem's journey across real estate, skills,
                  employment, education, healthcare and digital services.
                </p>
              </div>

              {/* Progress */}
              <div className="rounded-2xl border border-white/8 bg-[#050d25]/70 p-5 sm:p-6">

                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Presale Progress
                    </p>

                    <p className="mt-1 text-lg font-black text-white">
                      Stage 2
                      <span className="ml-2 text-sm font-medium text-slate-500">
                        Community Round
                      </span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="gold-text text-2xl font-black">
                      35%
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Complete
                    </p>
                  </div>
                </div>

                <div className="relative h-3 overflow-hidden rounded-full bg-slate-900">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="relative h-full rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#FFF1A6] shadow-[0_0_25px_rgba(255,215,0,.4)]"
                  >
                    <div className="absolute right-0 top-0 h-full w-12 bg-white/30 blur-md" />
                  </motion.div>
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-medium text-slate-600 sm:text-xs">
                  <span>3.5B BVT Sold</span>
                  <span>10B Target</span>
                </div>
              </div>

              {/* Price Cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="group rounded-2xl border border-[#FFD700]/15 bg-gradient-to-br from-[#FFD700]/8 to-transparent p-5 transition-all duration-300 hover:border-[#FFD700]/35">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <CircleDollarSign
                      size={14}
                      className="text-[#FFD700]"
                    />
                    Current Price
                  </div>

                  <div className="gold-text text-2xl font-black sm:text-3xl">
                    $0.0025
                  </div>

                  <p className="mt-1 text-xs text-slate-600">
                    per BVT
                  </p>
                </div>

                <div className="group rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/8 to-transparent p-5 transition-all duration-300 hover:border-blue-400/25">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <TrendingUp
                      size={14}
                      className="text-blue-400"
                    />
                    Next Stage
                  </div>

                  <div className="text-2xl font-black text-white sm:text-3xl">
                    $0.0040
                  </div>

                  <p className="mt-1 text-xs text-slate-600">
                    per BVT
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              <div className="h-full rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-b from-[#0b1838]/90 to-[#050c22]/90 p-5 sm:p-7">

                {/* Countdown heading */}
                <div className="text-center">

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD700]/20 bg-[#FFD700]/8">
                    <Clock
                      size={21}
                      className="text-[#FFD700]"
                    />
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                    Limited Presale Window
                  </p>

                  <h4 className="mt-2 text-xl font-black text-white">
                    Presale Ends In
                  </h4>

                </div>

                {/* Countdown */}
                <div className="mt-6">
                  <CountdownTimer />
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

                {/* Network info */}
                <div className="space-y-3">

              
                </div>

                {/* CTA */}
                <a
                  href="#how-to-buy"
                  className="btn-gold group mt-6 flex w-full items-center justify-center gap-2"
                >
                  Participate Now

                  <ChevronRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-3 text-center text-[10px] leading-5 text-slate-600">
                  Participate responsibly. Always verify official
                  BVT information before sending funds.
                </p>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
 
 

function PresaleDetails() {
  const details = [
    ['Token Name', 'BVT TOKEN'], ['Symbol', 'BVT'], ['Blockchain', 'Blockchain'], ['Standard', 'BEP-20'],
    ['Total Supply', '10,000,000,000 BVT'], ['Decimals', '18'], ['Presale Allocation', 'To Be Announced'],
    ['Presale Price', '$0.0025'], ['Minimum Purchase', '100 TRX'], ['Maximum Purchase', '500,000 TRX'],
    ['Token Claim', 'After Presale Ends'], ['Listing Price', 'To Be Announced']
  ]
  const stages = [
    ['STAGE 01 — EARLY ACCESS', '$0.0015', '2,500,000,000 BVT', 'Completed'],
    ['STAGE 02 — COMMUNITY', '$0.0025', '2,500,000,000 BVT', 'Active'],
    ['STAGE 03 — PUBLIC PRESALE', '$0.0040', '2,500,000,000 BVT', 'Upcoming'],
    ['STAGE 04 — FINAL ROUND', '$0.0060', '2,500,000,000 BVT', 'Upcoming']
  ]

  return (
    <section className="section-padding">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="mb-6 text-3xl font-black sm:text-4xl">Presale <span className="gold-text">Details</span></h2>
          <div className="glass-card overflow-hidden">
            <div className="divide-y divide-[#D4AF37]/10">
              {details.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm sm:px-5">
                  <span className="text-slate-400">{label}</span><span className="text-right font-bold text-slate-100">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="mb-6 text-3xl font-black sm:text-4xl">Presale <span className="gold-text">Stages</span></h2>
          <div className="space-y-3">
            {stages.map(([stage, price, allocation, status], i) => (
              <motion.div key={stage} whileHover={{ x: 4 }} className={`glass-card relative p-4 sm:p-5 ${status === 'Active' ? 'border-[#D4AF37]/55 shadow-[0_0_25px_rgba(212,175,55,.08)]' : ''}`}>
                {status === 'Active' && <div className="absolute right-0 top-0 rounded-bl-lg bg-gradient-to-bl from-[#D4AF37] to-[#B8860B] px-3 py-1 text-[10px] font-black text-[#07111f]">ACTIVE</div>}
                <div className="flex flex-wrap items-start justify-between gap-2 pr-12">
                  <h3 className="text-sm font-black">{stage}</h3>
                  <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${status === 'Completed' ? 'bg-emerald-500/15 text-emerald-400' : status === 'Active' ? 'bg-[#D4AF37]/15 text-[#FFD700]' : 'bg-slate-500/15 text-slate-400'}`}>{status}</span>
                </div>
                <div className="mt-3 flex flex-col gap-1 text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-sm">
                  <span>Price: <b className="text-white">{price}</b></span><span>Allocation: <b className="text-white">{allocation}</b></span>
                </div>
              </motion.div>
            ))}
          </div>
          <a href="#presale" className="btn-gold mt-5 block w-full text-center">Buy Now</a>
        </motion.div>
      </div>
    </section>
  )
}

function Benefits() {
  const benefits = [
    [Zap, 'Early Ecosystem Access', 'Participate from the early stages of the BVT ecosystem development.'],
    [Gift, 'Community Rewards', 'Eligible participants may benefit from future community reward programs.'],
    [Monitor, 'Ecosystem Utility', 'BVT provides utility across future BHAVISHYA products and services.'],
    [Globe, 'Long-Term Ecosystem', 'Roadmap targets expansion across real estate, skills, employment, education & healthcare.']
  ]
  return (
    <section className="section-padding">
      <SectionTitle eyebrow="Why participate" title={<>Presale <span className="gold-text">Benefits</span></>} >Early participants receive exclusive access to ecosystem benefits.</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([Icon, title, desc], i) => (
          <motion.div key={title} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
            whileHover={{ y: -7, scale: 1.01 }} className="glass-card glass-card-hover p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10"><Icon size={27} className="text-[#FFD700]" /></div>
            <h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Ecosystem() {
  const services = [
    [Home, 'Real Estate', 'Property listings, booking and ecosystem services.'],
    [BookOpen, 'Skills', 'Online learning, technology courses and skill development.'],
    [Briefcase, 'Employment', 'Employment portal, placement and career opportunities.'],
    [GraduationCap, 'Education', 'Schools, colleges, scholarships and digital learning.'],
    [Heart, 'Healthcare', 'Health camps, telemedicine and healthcare initiatives.'],
    [Smartphone, 'Super App', 'A future BHAVISHYA Super App connecting all services.']
  ]
  return (
    <section id="ecosystem" className="relative overflow-hidden border-y border-[#D4AF37]/10">
      <BackgroundFX dense />
      <div className="section-padding relative z-10">
        <SectionTitle eyebrow="Built for utility" title={<>Why <span className="gold-text">BVT?</span></>} >
          One Token. A Growing Ecosystem. The roadmap progresses from 2026 foundation through real estate, skills,
          employment and the planned Super App.
        </SectionTitle>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 blur-sm" />
          {services.map(([Icon, title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
              whileHover={{ y: -6 }} className="glass-card glass-card-hover group relative overflow-hidden p-5 sm:p-6">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#D4AF37]/5 blur-2xl transition group-hover:bg-[#D4AF37]/15" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <Icon size={23} className="text-[#FFD700]" />
                </div>
                <div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{desc}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
 
function Tokenomics() {
  const allocations = [
    {
      label: "Ecosystem & User Rewards",
      percent: 25,
      color: "#FFD700",
    },
    {
      label: "Community & Growth",
      percent: 15,
      color: "#D4AF37",
    },
    {
      label: "Treasury / Ecosystem Dev",
      percent: 15,
      color: "#B8860B",
    },
    {
      label: "Liquidity",
      percent: 10,
      color: "#F0E68C",
    },
    {
      label: "Strategic Partnerships",
      percent: 10,
      color: "#3b82f6",
    },
    {
      label: "Team & Advisors",
      percent: 10,
      color: "#60a5fa",
    },
    {
      label: "Marketing & Adoption",
      percent: 7.5,
      color: "#93c5fd",
    },
    {
      label: "Reserve",
      percent: 7.5,
      color: "#1e3a8a",
    },
  ]

  const totalSupply = 10000000000

  const formatAmount = (percent) => {
    const amount = (totalSupply * percent) / 100

    if (amount >= 1000000000) {
      return `${amount / 1000000000}B`
    }

    if (amount >= 1000000) {
      return `${amount / 1000000}M`
    }

    return amount.toLocaleString()
  }

  return (
    <section
      id="tokenomics"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[#0066FF]/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-[5%] top-1/3 h-80 w-80 rounded-full bg-[#FFD700]/7 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Heading */}
        <SectionTitle
          eyebrow="Allocation"
          title={
            <>
              BVT <span className="gold-text">Tokenomics</span>
            </>
          }
        >
          A transparent allocation model designed to support ecosystem
          growth, community participation, liquidity and long-term
          development.
        </SectionTitle>

        {/* Main Card */}
        <div className="glass-card mx-auto max-w-6xl overflow-hidden p-4 sm:p-6 md:p-8">

          {/* Top Supply Banner */}
          <div className="relative mb-8 overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-r from-[#0a1838] via-[#08132f] to-[#0a1838] p-6 sm:p-8">

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FFD700]/10 blur-[70px]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  BVT Token
                </p>

                <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Total Token Supply
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <div className="gold-text text-3xl font-black tracking-tight sm:text-4xl">
                  10B
                </div>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  10,000,000,000 BVT
                </p>
              </div>

            </div>
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

            {/* =========================
                VISUAL CHART
            ========================= */}
            <div className="flex justify-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex h-[290px] w-[290px] items-center justify-center sm:h-[350px] sm:w-[350px]"
              >

                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10" />

                <div className="absolute inset-3 rounded-full border border-[#D4AF37]/10" />

                {/* Donut */}
                <div
                  className="absolute inset-8 rounded-full p-[14px] shadow-[0_0_80px_rgba(212,175,55,.08)]"
                  style={{
                    background: `conic-gradient(
                      ${allocations
                        .map((item, index) => {
                          const previous = allocations
                            .slice(0, index)
                            .reduce(
                              (sum, current) => sum + current.percent,
                              0
                            )

                          const start = previous * 3.6
                          const end =
                            (previous + item.percent) * 3.6

                          return `${item.color} ${start}deg ${end}deg`
                        })
                        .join(", ")}
                    )`,
                  }}
                >
                  {/* Inner Circle */}
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-white/5 bg-[#020B2D] text-center shadow-inner">

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      Total Supply
                    </span>

                    <span className="gold-text mt-1 text-3xl font-black sm:text-4xl">
                      10B
                    </span>

                    <span className="mt-1 text-xs font-medium text-slate-500">
                      BVT
                    </span>

                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 top-8 rounded-xl border border-[#FFD700]/20 bg-[#07142f]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:-right-5"
                >
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Allocated
                  </p>

                  <p className="text-sm font-black text-[#FFD700]">
                    100%
                  </p>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-2 -left-2 rounded-xl border border-blue-400/15 bg-[#07142f]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:-left-5"
                >
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Token
                  </p>

                  <p className="text-sm font-black text-white">
                    BEP-20
                  </p>
                </motion.div>

              </motion.div>
            </div>

            {/* =========================
                ALLOCATION CARDS
            ========================= */}
            <div>

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D4AF37]">
                    Distribution
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    Token Allocation
                  </h3>
                </div>

                <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 px-3 py-1 text-[10px] font-bold text-slate-500">
                  8 Categories
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {allocations.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/6 bg-[#07142f]/65 p-4 transition-all duration-300 hover:border-white/15 hover:bg-[#0a1938]"
                  >

                    {/* Accent */}
                    <div
                      className="absolute left-0 top-0 h-full w-[2px] opacity-70"
                      style={{
                        background: item.color,
                      }}
                    />

                    <div className="flex items-start gap-3">

                      {/* Dot */}
                      <div
                        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 10px ${item.color}80`,
                        }}
                      />

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-2">

                          <p className="text-xs font-bold leading-5 text-slate-300">
                            {item.label}
                          </p>

                          <span
                            className="shrink-0 text-sm font-black"
                            style={{
                              color: item.color,
                            }}
                          >
                            {item.percent}%
                          </span>

                        </div>

                        {/* Mini Progress */}
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-900">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${item.percent}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.06,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              background: item.color,
                              boxShadow: `0 0 10px ${item.color}60`,
                            }}
                          />
                        </div>

                        <div className="mt-2 flex items-center justify-between">

                          <span className="text-[10px] text-slate-600">
                            Allocation
                          </span>

                          <span className="text-[10px] font-bold text-slate-500">
                            {formatAmount(item.percent)} BVT
                          </span>

                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}

              </div>

              {/* Total */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="mt-4 flex items-center justify-between rounded-2xl border border-[#FFD700]/15 bg-gradient-to-r from-[#FFD700]/5 to-transparent px-5 py-4"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD700]/10">
                    <CheckCircle
                      size={16}
                      className="text-[#FFD700]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-300">
                      Total Allocation
                    </p>

                    <p className="text-[10px] text-slate-600">
                      Fully allocated token supply
                    </p>
                  </div>

                </div>

                <span className="gold-text text-xl font-black">
                  100%
                </span>

              </motion.div>

            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/6 pt-8 sm:grid-cols-4">

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-white">
                10B
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Total Supply
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-[#FFD700]">
                25%
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Largest Allocation
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-white">
                8
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Allocation Areas
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-blue-400">
                100%
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Distributed
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  )
}
 


function Security() {
  const tips = [
    'Verify the official BVT website.',
    'Verify the official BVT contract address.',
    'Check the network before confirming a transaction.',
    'Never share your private key or seed phrase.',
    'Beware of unofficial presale links and impersonators.',
    'Review the official presale terms before participating.'
  ]

  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(null)

  const contract = 'TXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contract)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {}
  }

  return (
    <section className="section-padding relative overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[35%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[100px] sm:h-[600px] sm:w-[600px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />

        <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

        <div className="absolute left-0 right-0 top-[70%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      </div>

      {/* =========================================================
          MAIN
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-7xl"
      >

        {/* =========================================================
            INTRO
        ========================================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#D4AF37] sm:w-12" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-[10px]">
                Security
              </span>

            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Security
              <span className="text-slate-500"> First.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              Your security matters. Before purchasing BVT:
            </motion.p>

          </div>

          {/* desktop identifier */}

          <div className="hidden lg:flex items-center gap-4">

            <div className="h-px w-12 bg-white/10 xl:w-16" />

            <div>

              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                BVT / SECURITY
              </div>

              <div className="mt-1 font-mono text-[10px] text-slate-500">
                VERIFY_BEFORE_TRANSACTION
              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            MAIN SECURITY LAYOUT
        ========================================================== */}

        <div className="mt-10 overflow-hidden border border-white/[0.07] bg-[#030A22]/70 sm:mt-12 lg:mt-14">

          <div className="grid lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.45fr)]">


            {/* =====================================================
                LEFT — SECURITY CORE
            ====================================================== */}

     

<div className="relative min-h-[400px] overflow-hidden border-b border-white/[0.07] bg-[#020824] sm:min-h-[460px] lg:min-h-[600px] lg:border-b-0 lg:border-r">

  {/* =====================================================
      SECURITY GRID BACKGROUND
  ====================================================== */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.18]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(212,175,55,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.12) 1px, transparent 1px)
      `,
      backgroundSize: "42px 42px"
    }}
  />

  {/* darker vignette */}

  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#020824_75%)]" />


  {/* =====================================================
      GOLD SECURITY AMBIENT GLOW
  ====================================================== */}

  <motion.div
    animate={{
      opacity: [0.08, 0.16, 0.08],
      scale: [0.9, 1.1, 0.9]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[280px]
      w-[280px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#D4AF37]
      blur-[100px]
    "
  />


  {/* =====================================================
      CORNER MARKS
  ====================================================== */}

  <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-[#D4AF37]/50" />
  <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[#D4AF37]/50" />
  <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#D4AF37]/50" />
  <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#D4AF37]/50" />


  {/* =====================================================
      TOP STATUS
  ====================================================== */}

  <div className="absolute left-6 top-6 z-30 flex items-center gap-3 sm:left-8 sm:top-8">

    <span className="relative flex h-2 w-2">

      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

    </span>

    <div>

      <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-[9px]">
        Security Network
      </p>

      <p className="mt-1 font-mono text-[7px] tracking-[0.18em] text-emerald-400/60">
        SYSTEM MONITORING ACTIVE
      </p>

    </div>

  </div>


  {/* =====================================================
      NETWORK CONNECTIONS
  ====================================================== */}

  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 600 600"
    preserveAspectRatio="none"
  >

    {/* left → center */}

    <motion.path
      d="M 40 170 L 180 250 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.22)"
      strokeWidth="1"
      strokeDasharray="5 8"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* right → center */}

    <motion.path
      d="M 560 190 L 420 255 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.18)"
      strokeWidth="1"
      strokeDasharray="5 8"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* bottom left */}

    <motion.path
      d="M 90 500 L 210 400 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.16)"
      strokeWidth="1"
      strokeDasharray="4 9"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* bottom right */}

    <motion.path
      d="M 510 500 L 390 400 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.16)"
      strokeWidth="1"
      strokeDasharray="4 9"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear"
      }}
    />

  </svg>


  {/* =====================================================
      NETWORK NODES
  ====================================================== */}

  {[
    "left-[11%] top-[27%]",
    "right-[11%] top-[30%]",
    "left-[17%] bottom-[24%]",
    "right-[17%] bottom-[23%]",
    "left-[30%] top-[42%]",
    "right-[30%] top-[43%]"
  ].map((position, index) => (

    <motion.div
      key={index}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 2 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${position} z-10 h-2 w-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,.65)]`}
    />

  ))}


  {/* =====================================================
      SMALL SECURITY DATA BLOCKS
  ====================================================== */}

  <div className="absolute left-5 top-[42%] z-20 hidden w-24 border border-white/[0.07] bg-[#020B2D]/80 p-3 backdrop-blur-sm sm:block">

    <p className="font-mono text-[7px] tracking-[0.18em] text-slate-600">
      NODE STATUS
    </p>

    <div className="mt-2 flex items-center gap-2">

      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

      <span className="font-mono text-[8px] text-emerald-400">
        VERIFIED
      </span>

    </div>

  </div>


  <div className="absolute right-5 top-[46%] z-20 hidden w-24 border border-white/[0.07] bg-[#020B2D]/80 p-3 text-right backdrop-blur-sm sm:block">

    <p className="font-mono text-[7px] tracking-[0.18em] text-slate-600">
      THREAT LEVEL
    </p>

    <p className="mt-2 font-mono text-[9px] text-emerald-400">
      LOW
    </p>

  </div>


  {/* =====================================================
      CENTRAL SECURITY SYSTEM
  ====================================================== */}

  <div className="absolute inset-0 flex items-center justify-center">


    {/* =================================================
        RADAR CIRCLE
    ================================================== */}

    <div className="absolute h-64 w-64 rounded-full border border-[#D4AF37]/10 sm:h-72 sm:w-72" />

    <div className="absolute h-48 w-48 rounded-full border border-[#D4AF37]/10 sm:h-56 sm:w-56" />

    <div className="absolute h-32 w-32 rounded-full border border-[#D4AF37]/10" />


    {/* =================================================
        ROTATING RADAR SWEEP
    ================================================== */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      className="
        absolute
        h-64
        w-64
        rounded-full
        sm:h-72
        sm:w-72
      "
    >

      <div className="absolute left-1/2 top-1/2 h-1/2 w-px origin-bottom -translate-x-1/2 bg-gradient-to-t from-[#D4AF37]/50 to-transparent" />

    </motion.div>


    {/* =================================================
        CENTER SECURITY CORE
    ================================================== */}

    <motion.div
      animate={{
        boxShadow: [
          "0 0 0 rgba(212,175,55,0)",
          "0 0 45px rgba(212,175,55,.18)",
          "0 0 0 rgba(212,175,55,0)"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="
        relative
        z-20
        flex
        h-28
        w-28
        items-center
        justify-center
        rounded-full
        border
        border-[#D4AF37]/50
        bg-[#020B2D]
        shadow-[inset_0_0_30px_rgba(212,175,55,.05)]
        sm:h-32
        sm:w-32
      "
    >

      {/* inner ring */}

      <div className="absolute inset-2 rounded-full border border-[#D4AF37]/20" />


      {/* logo */}

      <div className="relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/30  p-2 shadow-[0_0_30px_rgba(212,175,55,.2)] sm:h-[72px] sm:w-[72px]">

        <img
          src={LOGO}
          alt="BVT Security"
          className="h-full w-full object-contain"
        />

      </div>


      {/* core label */}

      <span className="absolute -bottom-6 whitespace-nowrap font-mono text-[7px] font-semibold tracking-[0.25em] text-[#D4AF37]/70">
        BVT SECURE CORE
      </span>

    </motion.div>


    {/* =================================================
        SECURITY PULSE
    ================================================== */}

    <motion.div
      animate={{
        scale: [1, 1.8],
        opacity: [0.35, 0]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeOut"
      }}
      className="absolute h-28 w-28 rounded-full border border-[#D4AF37]/30"
    />

  </div>


  {/* =====================================================
      LIVE SECURITY DATA
  ====================================================== */}

  <div className="absolute bottom-[82px] left-5 right-5 z-20 hidden sm:block">

    <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">

      <div className="flex items-center gap-4">

        <div>

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600">
            Encryption
          </p>

          <p className="mt-1 font-mono text-[8px] text-slate-400">
            VERIFIED
          </p>

        </div>

        <div className="h-5 w-px bg-white/[0.07]" />

        <div>

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600">
            Network
          </p>

          <p className="mt-1 font-mono text-[8px] text-slate-400">
            MONITORED
          </p>

        </div>

      </div>


      <div className="flex items-center gap-2">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-emerald-400/70">
          SECURE
        </span>

      </div>

    </div>

  </div>


  {/* =====================================================
      BOTTOM SECURITY INFO
  ====================================================== */}

  <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.06] bg-[#02071B]/95 px-6 py-5 backdrop-blur-md sm:px-8">

    <div className="flex items-center justify-between gap-4">

      <div>

        <p className="text-[8px] uppercase tracking-[0.22em] text-slate-600">
          Protection Layer
        </p>

        <p className="mt-1 text-sm font-bold text-white">
          Verification Required
        </p>

      </div>


      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.05]">

        <CheckCircle
          size={15}
          strokeWidth={1.7}
          className="text-emerald-400"
        />

      </div>

    </div>

  </div>

</div>
            {/* =====================================================
                RIGHT — VERIFICATION
            ====================================================== */}

            <div className="min-w-0 bg-[#020B2D]/50">


              {/* header */}

              <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-5 sm:px-7 md:px-8">

                <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                    Verification Path
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600 sm:text-xs">
                    Follow each step before purchasing BVT.
                  </p>

                </div>

                <span className="shrink-0 font-mono text-[8px] text-slate-700 sm:text-[9px]">
                  06 CHECKS
                </span>

              </div>


              {/* =================================================
                  CHECKS
              ================================================== */}

              <div>

                {tips.map((tip, i) => {

                  const isHovered = hovered === i

                  return (
                    <motion.div
                      key={tip}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      initial={{
                        opacity: 0,
                        x: 20
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.5
                      }}
                      className={`group relative flex min-h-[68px] items-center gap-3 border-b border-white/[0.06] px-4 transition-all sm:min-h-[72px] sm:gap-4 sm:px-7 md:px-8 ${
                        isHovered
                          ? 'bg-white/[0.025]'
                          : ''
                      }`}
                    >

                      {/* timeline */}

                      <div className="absolute bottom-0 left-[27px] top-0 w-px bg-white/[0.05] sm:left-[43px]" />


                      {/* number */}

                      <div
                        className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[9px] transition-all ${
                          isHovered
                            ? 'border-[#D4AF37]/60 bg-[#D4AF37] text-[#020B2D]'
                            : 'border-white/10 bg-[#020B2D] text-slate-600'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>


                      {/* check */}

                      <CheckCircle
                        size={17}
                        strokeWidth={1.5}
                        className={`relative z-10 shrink-0 transition-colors ${
                          isHovered
                            ? 'text-[#FFD700]'
                            : 'text-slate-600'
                        }`}
                      />


                      {/* text */}

                      <span
                        className={`min-w-0 flex-1 text-[11px] font-medium leading-5 transition-colors sm:text-xs sm:leading-6 md:text-sm ${
                          isHovered
                            ? 'text-white'
                            : 'text-slate-400'
                        }`}
                      >
                        {tip}
                      </span>


                      {/* hover line */}

                      <span
                        className={`hidden h-px w-8 shrink-0 transition-all sm:block ${
                          isHovered
                            ? 'bg-[#D4AF37]'
                            : 'bg-white/[0.06]'
                        }`}
                      />

                    </motion.div>
                  )
                })}

              </div>


              {/* =================================================
                  CONTRACT
              ================================================== */}

              <div className="p-4 sm:p-6 md:p-8">

                <div className="relative overflow-hidden border border-[#D4AF37]/20 bg-[#050F2B]">

                  {/* scanning line */}

                  <motion.div
                    animate={{
                      x: ['-100%', '500%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 2
                    }}
                    className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  />


                  <div className="p-4 sm:p-5 md:p-6">


                    {/* contract title */}

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]">

                          <LockKeyhole
                            size={16}
                            strokeWidth={1.5}
                            className="text-[#D4AF37]"
                          />

                        </div>

                        <div>

                          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
                            Smart Contract
                          </p>

                          <p className="mt-1 text-xs font-bold text-white">
                            Blockchain BEP-20
                          </p>

                        </div>

                      </div>


                      <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400/80">
                          Contract Identifier
                        </span>

                      </div>

                    </div>


                    {/* address */}

                    <div className="mt-5 flex min-w-0 items-center gap-2 border border-white/[0.06] bg-[#020B2D] p-2.5 sm:gap-3 sm:p-3">

                      <code className="min-w-0 flex-1 truncate font-mono text-[9px] text-slate-400 sm:text-[10px] md:text-xs">
                        {contract}
                      </code>

                      <button
                        onClick={copy}
                        className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/[0.07] text-slate-500 transition-all hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:text-[#FFD700] sm:h-9 sm:w-9"
                        aria-label="Copy contract"
                      >
                        {copied ? (
                          <CheckCircle
                            size={15}
                            className="text-emerald-400"
                          />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>

                    </div>


                    {/* copied */}

                    {copied && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -3
                        }}
                        animate={{
                          opacity: 1,
                          y: 0
                        }}
                        className="mt-2 text-right text-[9px] text-emerald-400"
                      >
                        Contract copied
                      </motion.div>
                    )}


                    {/* view contract */}

                    <button className="mt-4 flex min-h-[42px] w-full items-center justify-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/[0.04] py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#020B2D] sm:text-[10px]">

                      View Contract

                      <ExternalLink size={13} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            BOTTOM SECURITY LINE
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.3
          }}
          className="mt-4 flex flex-col gap-3 border-t border-white/[0.06] pt-4 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-5"
        >

          <div className="flex items-center gap-3">

            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10">

              <Shield
                size={11}
                className="text-[#D4AF37]"
              />

            </span>

            <span className="text-[8px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px] sm:tracking-[0.18em]">
              Verify every detail before confirming a transaction
            </span>

          </div>

          <div className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
            BVT • SECURE BY VERIFICATION
          </div>

        </motion.div>

      </motion.div>

    </section>
  )
}
function FAQ() {
  const [open, setOpen] = useState(null)
  const faqs = [
    ['What is BVT?', 'BVT is a BEP-20 utility token designed for the BHAVISHYA Ecosystem.'],
    ['Which blockchain is BVT built on?', 'BVT is built on the Blockchain Network using the BEP-20 standard.'],
    ['What is the total supply?', 'The total supply is 10 billion BVT.'],
    ['How can I purchase BVT?', 'Connect a supported Blockchain wallet, select the available presale option and complete the transaction according to the official presale instructions.'],
    ['When will I receive my BVT?', 'Token distribution/claim timing will follow the official presale terms and will be announced by the project.'],
    ['Is BVT an investment?', 'BVT is designed as a utility token. Purchasing tokens involves risk, and no profit or price appreciation is guaranteed.'],
    ['Where can I find the official contract?', 'The official contract address will be published on this website and verified through official BVT communication channels.'],
    ['Can I transfer my BVT immediately?', 'Transferability will depend on the official token and presale terms.']
  ]
  return (
    <section id="faq" className="section-padding">
      <SectionTitle eyebrow="Need to know" title={<>Presale <span className="gold-text">FAQ</span></>} >Frequently asked questions about the BVT presale.</SectionTitle>
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="glass-card overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5">
              <span className="text-sm font-bold sm:text-base">{q}</span>
              <ChevronRight size={18} className={`shrink-0 text-[#D4AF37] transition-transform ${open === i ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <div className="border-t border-[#D4AF37]/10 px-4 pb-5 pt-3 text-sm leading-6 text-slate-400 sm:px-5">{a}</div>
              </motion.div>}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="whitepaper" className="section-padding">
      <motion.div initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card gold-glow mx-auto max-w-4xl p-7 text-center sm:p-10 md:p-12">
        <img src={LOGO} alt="BVT" className="mx-auto mb-5 h-16 w-16 object-contain sm:h-20 sm:w-20" />
        <h2 className="text-3xl font-black sm:text-4xl">Ready to Join <span className="gold-text">BVT?</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Join the BHAVISHYA Ecosystem and be part of the early community building the foundation of a long-term blockchain-powered ecosystem.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a  href="#how-to-buy" className="btn-gold inline-flex items-center justify-center gap-2"><Wallet size={18} /> Buy BVT Now</a>
          <a href="#ecosystem" className="btn-outline inline-flex items-center justify-center gap-2"><Globe size={18} /> Join Community</a>
          <a href={WHITEPAPER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center justify-center gap-2"><BookOpen size={18} /> Read Whitepaper</a>
        </div>
        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500"><img src={LOGO} alt="" className="h-8 w-8 rounded-full object-contain" /> Blockchain • BEP-20 • 10 Billion BVT</div>
      </motion.div>
    </section>
  )
}

function Disclaimer() {
  return (
    <section className="section-padding pb-10">
      <div className="mx-auto max-w-5xl rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#D4AF37]" />
          <div>
            <h3 className="mb-2 text-sm font-black text-[#FFD700]">Presale Disclaimer</h3>
            <p className="text-xs leading-5 text-slate-400">
              BVT Token is intended as a utility token for the BHAVISHYA Ecosystem. Participation in the presale involves risks,
              including market, technology, regulatory and operational risks. Nothing on this page constitutes financial, investment,
              legal or tax advice or a guarantee of returns. Prospective participants should review the official terms and conduct
              their own research before participating. Presale availability, pricing, allocation, payment methods, vesting and
              token-claim conditions should be finalized and published by the project before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



export default function PresaleLanding({ buyProps }) {
  return (
    <div className="overflow-x-hidden bg-[#020B2D] text-white selection:bg-[#0066FF]/30">
      <Hero />
      <PresaleStatus />
      <BuySection {...buyProps} />
      <PresaleDetails />
      <Benefits />
      <Ecosystem />
      <Tokenomics />
      <Tokenomic />
      <Security />
      <FAQ />
      <CTA />
      <Disclaimer />
    </div>
  )
}
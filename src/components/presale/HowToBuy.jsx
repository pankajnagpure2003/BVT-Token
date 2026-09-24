import { Wallet, TrendingUp, CheckCircle, Gift } from 'lucide-react'
import Reveal from '../ui/Reveal'

const STEPS = [
  {
    Icon: Wallet,
    number: '01',
    title: 'Connect Wallet',
    desc: 'Connect your MetaMask wallet on the configured BNB Smart Chain network.',
  },
  {
    Icon: TrendingUp,
    number: '02',
    title: 'Approve USDT',
    desc: 'Approve USDT spending for the official BVT Presale contract.',
  },
  {
    Icon: CheckCircle,
    number: '03',
    title: 'Buy BVT',
    desc: 'Enter your USDT amount and confirm the buy transaction in your wallet.',
  },
  {
    Icon: Gift,
    number: '04',
    title: 'Receive Tokens',
    desc: 'BVT is sent to your wallet immediately after a successful purchase.',
  },
]

export default function HowToBuy() {
  return (
    <section className="rounded-[28px] border border-[#249BFF]/15 bg-[#06133D]/45 p-5 backdrop-blur-xl sm:p-6">
      <Reveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
          How to buy
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-white">
          4 simple steps
        </h2>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {STEPS.map(({ Icon, number, title, desc }, index) => (
          <Reveal key={title} delay={index * 0.06}>
            <div className="rounded-2xl border border-white/10 bg-[#020B2D]/55 p-4 transition hover:border-[#FFD84D]/25">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFD84D]/20 bg-[#FFD84D]/10">
                  <Icon size={18} className="text-[#FFD84D]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#BFD8FF]/45">
                    Step {number}
                  </p>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                </div>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#BFD8FF]/60">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

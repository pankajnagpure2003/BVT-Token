import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wallet,
  TrendingUp,
  CheckCircle,
  Gift,
  ArrowRight,
  ShieldCheck,
  Zap,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { appConfig } from '../../../config/appConfig'
import { fromWei, toWei } from '../../../lib/format'

const STEPS = [
  {
    Icon: Wallet,
    number: '01',
    title: 'Connect Wallet',
    desc: 'Connect MetaMask on the configured BNB Smart Chain network.',
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
    title: 'Confirm Buy',
    desc: 'Enter USDT amount and confirm the buy transaction in your wallet.',
  },
  {
    Icon: Gift,
    number: '04',
    title: 'Receive BVT',
    desc: 'Purchased BVT is sent to your wallet after a successful transaction.',
  },
]

export default function BuySection({
  account,
  connecting,
  busy,
  usdtBalance,
  tokenBalance,
  allowance,
  onConnect,
  onApprove,
  onBuy,
  message,
  stats,
  loadingStats,
  configReady,
}) {
  const [amount, setAmount] = useState('')

  const numericAmount = parseFloat(amount) || 0
  const bvtAmount =
    numericAmount > 0
      ? Math.floor(numericAmount * appConfig.tokensPerUsdt)
      : 0

  const needsApprove = useMemo(() => {
    try {
      const needed = toWei(amount || '0', appConfig.usdtDecimals)
      if (needed <= 0n) return true
      return allowance < needed
    } catch {
      return true
    }
  }, [amount, allowance])

  const handleAmountChange = (e) => {
    const value = e.target.value
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value)
    }
  }

  const handlePrimary = async () => {
    if (!account) {
      await onConnect()
      return
    }
    if (!amount || numericAmount <= 0) return
    if (needsApprove) {
      await onApprove(amount)
      return
    }
    await onBuy(amount)
  }

  const primaryLabel = (() => {
    if (connecting || busy) return 'PROCESSING...'
    if (!account) return 'CONNECT WALLET TO BUY'
    if (needsApprove) return `1. APPROVE ${appConfig.usdtSymbol}`
    return `2. BUY ${appConfig.tokenSymbol} NOW`
  })()

  return (
    <section
      id="how-to-buy"
      className="relative overflow-hidden bg-[#020B2D] py-10 sm:py-8 lg:py-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212,175,55,.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,.7) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
          }}
        />
        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/[0.07] blur-[100px]" />
        <div className="absolute left-1/2 top-[45%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/[0.05] blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] px-4 py-2">
            <Zap size={13} className="text-[#FFD700]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
              Simple process
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            How to Buy <span className="text-[#D4AF37]">BVT</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Follow these steps to secure your BVT tokens during the presale.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-7 text-[#FFD700] sm:text-base">
            Pay with {appConfig.usdtSymbol} — 1 {appConfig.usdtSymbol} ={' '}
            {appConfig.tokensPerUsdt} {appConfig.tokenSymbol}.
          </p>
        </motion.div>

        <div className="order-2 mt-10 mb-10 grid gap-4 md:order-1 md:mt-0 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ Icon, number, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden border border-white/[0.08] bg-[#07143A] p-6 transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-[#091A47]"
            >
              <div className="absolute right-5 top-5 font-mono text-[10px] font-bold tracking-[0.15em] text-[#D4AF37]/40">
                {number}
              </div>
              <div className="mb-7 flex h-12 w-12 items-center justify-center border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06]">
                <Icon size={22} strokeWidth={1.7} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-base font-black text-white">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 mx-auto mt-8 w-full max-w-4xl md:order-2 md:mt-0"
        >
          <div className="relative overflow-hidden border border-[#D4AF37]/20 bg-[#050F2B] shadow-[0_20px_80px_rgba(0,0,0,.25)]">
            <motion.div
              animate={{ x: ['-100%', '500%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1.5,
              }}
              className="absolute left-0 top-0 z-10 h-px w-28 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
            />

            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#D4AF37]/[0.035] blur-[70px]" />

            <div className="relative z-10 p-5 sm:p-7 lg:p-9">
              <div className="flex flex-col gap-4 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        account
                          ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.7)]'
                          : 'bg-[#D4AF37]'
                      }`}
                    />
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                      Purchase terminal
                    </p>
                  </div>
                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    BUY BVT TOKEN
                  </h3>
                  <p className="mt-1 text-[10px] text-slate-500">
                    {loadingStats
                      ? 'Loading sale status...'
                      : stats?.saleActive
                        ? 'Sale is live — secure your allocation'
                        : 'Sale currently paused'}
                  </p>
                </div>

                <div className="w-fit border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05] px-3 py-2 font-mono text-[8px] font-bold tracking-[0.12em] text-[#D4AF37]">
                  {appConfig.chainName.toUpperCase()}
                </div>
              </div>

              <button
                type="button"
                onClick={onConnect}
                disabled={connecting || Boolean(account)}
                className={`mt-6 flex min-h-[58px] w-full items-center justify-center gap-3 border px-4 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  account
                    ? 'border-emerald-400/30 bg-emerald-400/[0.06] text-emerald-400'
                    : 'border-[#D4AF37]/25 bg-[#D4AF37]/[0.04] text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10'
                }`}
              >
                {account ? (
                  <>
                    <CheckCircle size={17} />
                    {account.slice(0, 6)}...{account.slice(-4)}
                  </>
                ) : (
                  <>
                    <Wallet size={17} />
                    {connecting ? 'CONNECTING...' : 'CONNECT WALLET'}
                  </>
                )}
              </button>

              {account ? (
                <div className="mt-4 grid grid-cols-2 gap-3 text-[11px]">
                  <div className="border border-white/[0.07] bg-[#020B2D]/70 px-3 py-3">
                    <p className="text-[8px] uppercase tracking-wider text-slate-500">
                      Your {appConfig.usdtSymbol}
                    </p>
                    <p className="mt-1 font-bold text-white">
                      {fromWei(usdtBalance, appConfig.usdtDecimals, 4)}
                    </p>
                  </div>
                  <div className="border border-white/[0.07] bg-[#020B2D]/70 px-3 py-3">
                    <p className="text-[8px] uppercase tracking-wider text-slate-500">
                      Your {appConfig.tokenSymbol}
                    </p>
                    <p className="mt-1 font-bold text-white">
                      {fromWei(tokenBalance, appConfig.tokenDecimals, 4)}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Pay with
                  </p>
                  <span className="text-[8px] uppercase tracking-wider text-slate-600">
                    Fixed rate
                  </span>
                </div>

                <div className="flex items-center gap-3 border border-[#D4AF37]/35 bg-[#D4AF37]/[0.08] px-4 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#020B2D] text-xs font-black text-[#FFD700]">
                    $
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">{appConfig.usdtSymbol}</p>
                    <p className="text-[10px] text-slate-500">
                      1 {appConfig.usdtSymbol} = {appConfig.tokensPerUsdt}{' '}
                      {appConfig.tokenSymbol}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Amount ({appConfig.usdtSymbol})
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="0.00"
                  className="w-full border border-white/[0.08] bg-[#020B2D] px-4 py-4 text-lg font-bold text-white outline-none transition focus:border-[#D4AF37]/40"
                />
              </div>

              <div className="mt-4 flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">
                  You receive
                </span>
                <span className="font-black text-[#FFD700]">
                  {bvtAmount.toLocaleString()} {appConfig.tokenSymbol}
                </span>
              </div>

              {message?.text ? (
                <div
                  className={`mt-4 flex items-start gap-2 border px-3 py-3 text-xs ${
                    message.type === 'error'
                      ? 'border-red-400/30 bg-red-500/10 text-red-200'
                      : message.type === 'success'
                        ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200'
                        : 'border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] text-[#FFE477]'
                  }`}
                >
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  <span>{message.text}</span>
                </div>
              ) : null}

              {!configReady ? (
                <div className="mt-4 border border-red-400/30 bg-red-500/10 px-3 py-3 text-xs text-red-200">
                  Contract addresses missing. Fill `.env` then restart `npm run
                  dev`.
                </div>
              ) : null}

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={connecting || busy || !configReady}
                onClick={handlePrimary}
                className="mt-6 flex min-h-[56px] w-full items-center justify-center gap-2 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFD700] text-[10px] font-black uppercase tracking-[0.16em] text-[#020B2D] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {connecting || busy ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    PROCESSING...
                  </>
                ) : (
                  <>
                    {primaryLabel}
                    {account ? <ArrowRight size={15} /> : <Wallet size={15} />}
                  </>
                )}
              </motion.button>

              <div className="mt-6 border-t border-white/[0.06] pt-5">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Secured on-chain transaction
                  </span>
                </div>
                <p className="text-center text-[10px] text-slate-600">
                  Always verify official contract addresses before approving.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

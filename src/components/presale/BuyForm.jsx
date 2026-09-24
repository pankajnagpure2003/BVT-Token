import { useMemo, useState } from 'react'
import { appConfig } from '../../config/appConfig'
import { fromWei, toWei } from '../../lib/format'

const goldBtn =
  'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)'

export default function BuyForm({
  account,
  usdtBalance,
  tokenBalance,
  allowance,
  busy,
  onApprove,
  onBuy,
}) {
  const [amount, setAmount] = useState('3')

  const youGet = useMemo(() => {
    const n = Number(amount)
    if (!Number.isFinite(n) || n <= 0) return '0'
    return (n * appConfig.tokensPerUsdt).toLocaleString()
  }, [amount])

  const needsApprove = useMemo(() => {
    try {
      const needed = toWei(amount || '0', appConfig.usdtDecimals)
      if (needed <= 0n) return true
      return allowance < needed
    } catch {
      return true
    }
  }, [amount, allowance])

  return (
    <section className="rounded-[28px] border border-[#249BFF]/15 bg-[#06133D]/60 p-5 shadow-[0_0_60px_rgba(0,102,255,0.08)] backdrop-blur-xl sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
        Buy Tokens
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold text-white">
        Buy {appConfig.tokenSymbol}
      </h2>
      <p className="mt-1 text-sm text-[#BFD8FF]/60">
        Pay with {appConfig.usdtSymbol}. First Approve, then Buy.
      </p>

      <div className="mt-5 grid gap-3 text-sm text-[#DDEBFF] sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-[#020B2D]/50 px-4 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#BFD8FF]/45">
            Your {appConfig.usdtSymbol}
          </p>
          <p className="mt-1 font-medium text-white">
            {fromWei(usdtBalance, appConfig.usdtDecimals, 4)}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-[#020B2D]/50 px-4 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#BFD8FF]/45">
            Your {appConfig.tokenSymbol}
          </p>
          <p className="mt-1 font-medium text-white">
            {fromWei(tokenBalance, appConfig.tokenDecimals, 4)}
          </p>
        </div>
      </div>

      <label className="mt-5 block text-sm text-[#DDEBFF]">
        Amount ({appConfig.usdtSymbol})
        <input
          type="number"
          min="0"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-[#249BFF]/20 bg-[#020B2D]/70 px-4 py-3 text-white outline-none transition focus:border-[#FFD84D]/50"
          placeholder="e.g. 3"
        />
      </label>

      <p className="mt-3 text-sm text-[#BFD8FF]/60">
        You will receive approx.{' '}
        <span className="font-medium text-[#FFE477]">
          {youGet} {appConfig.tokenSymbol}
        </span>
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          disabled={!account || busy || !needsApprove}
          onClick={() => onApprove(amount)}
          className="flex-1 rounded-2xl border border-[#249BFF]/25 bg-[#020B2D]/50 px-4 py-3.5 text-sm font-medium text-[#DDEBFF] transition hover:border-[#FFD84D]/40 hover:text-[#FFE477] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {busy
            ? 'Please wait...'
            : needsApprove
              ? `1. Approve ${appConfig.usdtSymbol}`
              : 'Approved'}
        </button>

        <button
          type="button"
          disabled={!account || busy || needsApprove}
          onClick={() => onBuy(amount)}
          className="flex-1 rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#020B2D] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
          style={{ background: goldBtn }}
        >
          {busy ? 'Please wait...' : `2. Buy ${appConfig.tokenSymbol}`}
        </button>
      </div>

      {!account ? (
        <p className="mt-4 text-sm text-[#FFD84D]/80">Connect wallet to continue.</p>
      ) : null}
    </section>
  )
}

import { appConfig } from '../../config/appConfig'
import { shortAddress } from '../../lib/format'

const goldBtn =
  'linear-gradient(110deg, #8A6717 0%, #D9A934 22%, #F2DD9B 50%, #D9A934 78%, #8A6717 100%)'

export default function PresaleWalletBar({ account, onConnect, connecting }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFD84D]">
          Presale DApp
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
          {appConfig.appName}
        </h1>
        <p className="mt-2 text-sm text-[#BFD8FF]/60">
          {appConfig.chainName} · 1 {appConfig.usdtSymbol} = {appConfig.tokensPerUsdt}{' '}
          {appConfig.tokenSymbol}
        </p>
      </div>

      {account ? (
        <div className="rounded-full border border-[#249BFF]/25 bg-[#06133D]/80 px-5 py-2.5 font-mono text-sm text-[#DDEBFF]">
          {shortAddress(account)}
        </div>
      ) : (
        <button
          type="button"
          onClick={onConnect}
          disabled={connecting}
          className="rounded-full px-6 py-2.5 text-sm font-semibold text-[#020B2D] transition hover:-translate-y-0.5 disabled:opacity-60"
          style={{ background: goldBtn }}
        >
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  )
}

import { appConfig } from '../../config/appConfig'
import { fromWei } from '../../lib/format'

export default function PresaleStats({ stats, loading }) {
  const items = [
    {
      label: 'Raised USDT',
      value: fromWei(stats.raisedUsdt, appConfig.usdtDecimals, 2),
      suffix: appConfig.usdtSymbol,
      highlight: true,
    },
    {
      label: `Sold ${appConfig.tokenSymbol}`,
      value: fromWei(stats.soldTokens, appConfig.tokenDecimals, 2),
      suffix: appConfig.tokenSymbol,
    },
    {
      label: 'Available',
      value: fromWei(stats.availableTokens, appConfig.tokenDecimals, 2),
      suffix: appConfig.tokenSymbol,
    },
    {
      label: 'Sale status',
      value: stats.saleActive ? 'Live' : 'Paused',
      suffix: '',
    },
  ]

  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-2xl border px-4 py-5 backdrop-blur-md ${
            item.highlight
              ? 'border-[#FFD84D]/30 bg-gradient-to-br from-[#FFD21C]/10 to-[#06133D]/80'
              : 'border-[#249BFF]/15 bg-[#06133D]/65'
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFD84D]/80">
            {item.label}
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-white">
            {loading ? '...' : item.value}
            {item.suffix ? (
              <span className="ml-1 text-sm font-normal text-[#BFD8FF]/55">
                {item.suffix}
              </span>
            ) : null}
          </p>
        </div>
      ))}
    </section>
  )
}

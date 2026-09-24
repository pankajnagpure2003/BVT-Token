import { appConfig } from '../../config/appConfig'

/** Shows which contracts are loaded — easy to verify setup */
export default function ConfigPanel() {
  const rows = [
    ['Network', `${appConfig.chainName} (${appConfig.chainId})`],
    ['Token', appConfig.tokenAddress || 'Missing'],
    ['USDT', appConfig.usdtAddress || 'Missing'],
    ['Presale', appConfig.presaleAddress || 'Missing'],
  ]

  return (
    <section className="rounded-2xl border border-dashed border-[#249BFF]/20 bg-[#06133D]/40 p-4">
      <h3 className="text-sm font-medium text-[#DDEBFF]">Active contract setup</h3>
      <p className="mt-1 text-xs text-[#BFD8FF]/45">
        New deploy? Update values in <code className="text-[#FFE477]">.env</code> then restart{' '}
        <code className="text-[#FFE477]">npm run dev</code>.
      </p>
      <ul className="mt-3 space-y-2 text-xs text-[#BFD8FF]/55">
        {rows.map(([label, value]) => (
          <li key={label} className="break-all">
            <span className="text-[#BFD8FF]/35">{label}: </span>
            {value}
          </li>
        ))}
      </ul>
    </section>
  )
}

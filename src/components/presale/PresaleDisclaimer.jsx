import { AlertTriangle } from 'lucide-react'

export default function PresaleDisclaimer() {
  return (
    <div className="rounded-2xl border border-[#FFD84D]/20 bg-[#FFD21C]/[0.04] p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#FFD84D]" />
        <div>
          <p className="text-sm font-semibold text-[#FFE477]">Presale disclaimer</p>
          <p className="mt-2 text-xs leading-5 text-[#BFD8FF]/60">
            BVT is a utility token for the BHAVISHYA Ecosystem. Presale participation involves
            market, technology and operational risks. Always verify official contract addresses
            before approving or sending funds. This page is not financial advice.
          </p>
        </div>
      </div>
    </div>
  )
}

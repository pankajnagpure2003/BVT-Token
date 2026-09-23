import { PageShell } from '../components/layout'
import PresaleLanding from '../components/presale/landing/PresaleLanding'
import { usePresaleWallet } from '../hooks/usePresaleWallet'

export default function PresalePage() {
  const wallet = usePresaleWallet()

  const buyProps = {
    account: wallet.account,
    connecting: wallet.connecting,
    busy: wallet.busy,
    usdtBalance: wallet.usdtBalance,
    tokenBalance: wallet.tokenBalance,
    allowance: wallet.allowance,
    onConnect: wallet.connectWallet,
    onApprove: wallet.handleApprove,
    onBuy: wallet.handleBuy,
    message: wallet.message,
    stats: wallet.stats,
    loadingStats: wallet.loadingStats,
    configReady: wallet.configReady,
  }

  return (
    <PageShell>
      <PresaleLanding buyProps={buyProps} />
    </PageShell>
  )
}

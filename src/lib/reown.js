import { createAppKit } from '@reown/appkit'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { bsc, bscTestnet } from '@reown/appkit/networks'
import { appConfig } from '../config/appConfig'

let appKit

function getNetwork() {
  return appConfig.chainId === 56 ? bsc : bscTestnet
}

export function getReownAppKit() {
  if (appKit) return appKit

  const projectId = import.meta.env.VITE_REOWN_PROJECT_ID
  if (!projectId) {
    throw new Error('Reown project ID is missing. Set VITE_REOWN_PROJECT_ID in .env.')
  }

  appKit = createAppKit({
    adapters: [new EthersAdapter()],
    networks: [getNetwork()],
    projectId,
    metadata: {
      name: appConfig.appName,
      description: 'BVT Token presale',
      url: window.location.origin,
      icons: [`${window.location.origin}/favicon.ico`],
    },
    features: { analytics: false },
  })

  return appKit
}

export function getReownWalletProvider() {
  const provider = getReownAppKit().getWalletProvider()
  if (!provider) throw new Error('Connect a wallet to continue.')
  return provider
}
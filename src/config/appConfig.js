/**
 * Presale config — change .env values for new deploys.
 * Addresses missing hon to DEFAULTS me bhi set kar sakte ho.
 */

const num = (value, fallback) => {
  const n = Number(value)
  return Number.isFinite(n) ? n : fallback
}

export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME || 'BVT Presale',

  // Network (BSC Testnet = 97, BSC Mainnet = 56)
  chainId: num(import.meta.env.VITE_CHAIN_ID, 97),
  chainName: import.meta.env.VITE_CHAIN_NAME || 'BNB Smart Chain Testnet',
  rpcUrl: import.meta.env.VITE_RPC_URL || 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  explorerUrl: import.meta.env.VITE_EXPLORER_URL || 'https://testnet.bscscan.com',
  currencySymbol: import.meta.env.VITE_CURRENCY_SYMBOL || 'tBNB',

  tokenAddress: import.meta.env.VITE_TOKEN_ADDRESS || '',
  usdtAddress: import.meta.env.VITE_USDT_ADDRESS || '',
  presaleAddress: import.meta.env.VITE_PRESALE_ADDRESS || '',

  tokenName: import.meta.env.VITE_TOKEN_NAME || 'BVT Token',
  tokenSymbol: import.meta.env.VITE_TOKEN_SYMBOL || 'BVT',
  tokenDecimals: num(import.meta.env.VITE_TOKEN_DECIMALS, 18),
  usdtSymbol: import.meta.env.VITE_USDT_SYMBOL || 'USDT',
  usdtDecimals: num(import.meta.env.VITE_USDT_DECIMALS, 18),

  // 0.02 USDT / BVT => 50 BVT per 1 USDT
  tokensPerUsdt: num(import.meta.env.VITE_TOKENS_PER_USDT, 50),
}

export function isConfigReady() {
  return Boolean(
    appConfig.tokenAddress && appConfig.usdtAddress && appConfig.presaleAddress
  )
}

export function getWalletNetworkParams() {
  return {
    chainId: '0x' + appConfig.chainId.toString(16),
    chainName: appConfig.chainName,
    nativeCurrency: {
      name: appConfig.currencySymbol,
      symbol: appConfig.currencySymbol,
      decimals: 18,
    },
    rpcUrls: [appConfig.rpcUrl],
    blockExplorerUrls: [appConfig.explorerUrl],
  }
}

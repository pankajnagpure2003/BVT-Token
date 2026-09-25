import { BrowserProvider, Contract, JsonRpcProvider } from 'ethers'
import { appConfig, getWalletNetworkParams } from '../config/appConfig'
import { erc20Abi } from '../abi/erc20Abi'
import { presaleAbi } from '../abi/presaleAbi'
import { getReownWalletProvider } from './reown'

/** Read-only provider (stats without wallet) */
export function getReadProvider() {
  return new JsonRpcProvider(appConfig.rpcUrl, appConfig.chainId)
}

/** Browser provider backed by the wallet selected in Reown AppKit. */
export async function getBrowserProvider(walletProvider) {
  return new BrowserProvider(walletProvider || getReownWalletProvider())
}

export function getTokenContract(providerOrSigner) {
  return new Contract(appConfig.tokenAddress, erc20Abi, providerOrSigner)
}

export function getUsdtContract(providerOrSigner) {
  return new Contract(appConfig.usdtAddress, erc20Abi, providerOrSigner)
}

export function getPresaleContract(providerOrSigner) {
  return new Contract(appConfig.presaleAddress, presaleAbi, providerOrSigner)
}

/** Switch / add the configured chain in MetaMask */
export async function ensureCorrectNetwork(walletProvider) {
  const ethereum = walletProvider || getReownWalletProvider()

  const wanted = '0x' + appConfig.chainId.toString(16)

  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: wanted }],
    })
  } catch (error) {
    // 4902 = chain not added yet
    if (error.code === 4902) {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [getWalletNetworkParams()],
      })
      return
    }
    throw error
  }
}

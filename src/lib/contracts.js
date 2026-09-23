import { BrowserProvider, Contract, JsonRpcProvider } from 'ethers'
import { appConfig, getWalletNetworkParams } from '../config/appConfig'
import { erc20Abi } from '../abi/erc20Abi'
import { presaleAbi } from '../abi/presaleAbi'

/** Read-only provider (stats without wallet) */
export function getReadProvider() {
  return new JsonRpcProvider(appConfig.rpcUrl, appConfig.chainId)
}

/** MetaMask / injected wallet provider */
export async function getBrowserProvider() {
  if (!window.ethereum) {
    throw new Error('MetaMask not found. Please install MetaMask.')
  }
  return new BrowserProvider(window.ethereum)
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
export async function ensureCorrectNetwork() {
  const ethereum = window.ethereum
  if (!ethereum) throw new Error('MetaMask not found')

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

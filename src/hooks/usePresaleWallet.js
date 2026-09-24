/**
 * Presale wallet + contract interactions (shared by PresalePage).
 */
import { useCallback, useEffect, useState } from 'react'
import { MaxUint256 } from 'ethers'
import { appConfig, isConfigReady } from '../config/appConfig'
import {
  ensureCorrectNetwork,
  getBrowserProvider,
  getPresaleContract,
  getReadProvider,
  getTokenContract,
  getUsdtContract,
} from '../lib/contracts'
import { getErrorMessage, toWei } from '../lib/format'

const emptyStats = {
  saleActive: false,
  raisedUsdt: 0n,
  soldTokens: 0n,
  availableTokens: 0n,
}

export function usePresaleWallet() {
  const [account, setAccount] = useState('')
  const [connecting, setConnecting] = useState(false)
  const [busy, setBusy] = useState(false)
  const [loadingStats, setLoadingStats] = useState(true)
  const [stats, setStats] = useState(emptyStats)
  const [usdtBalance, setUsdtBalance] = useState(0n)
  const [tokenBalance, setTokenBalance] = useState(0n)
  const [allowance, setAllowance] = useState(0n)
  const [message, setMessage] = useState({ type: '', text: '' })

  const showMessage = (type, text) => setMessage({ type, text })

  const loadStats = useCallback(async () => {
    if (!isConfigReady()) {
      setLoadingStats(false)
      return
    }

    try {
      setLoadingStats(true)
      const provider = getReadProvider()
      const presale = getPresaleContract(provider)
      const [saleActive, raisedUsdt, soldTokens, availableTokens] = await Promise.all([
        presale.presaleActive(),
        presale.usdtBalance(),
        presale.totalBvtSold(),
        presale.remainingBvt(),
      ])
      setStats({ saleActive, raisedUsdt, soldTokens, availableTokens })
    } catch (error) {
      console.error(error)
      showMessage('error', getErrorMessage(error))
    } finally {
      setLoadingStats(false)
    }
  }, [])

  const loadWalletData = useCallback(async (walletAddress) => {
    if (!walletAddress || !isConfigReady()) return

    try {
      const provider = getReadProvider()
      const usdt = getUsdtContract(provider)
      const token = getTokenContract(provider)
      const [uBal, tBal, allow] = await Promise.all([
        usdt.balanceOf(walletAddress),
        token.balanceOf(walletAddress),
        usdt.allowance(walletAddress, appConfig.presaleAddress),
      ])
      setUsdtBalance(uBal)
      setTokenBalance(tBal)
      setAllowance(allow)
    } catch (error) {
      console.error(error)
      showMessage('error', getErrorMessage(error))
    }
  }, [])

  const refreshAll = useCallback(
    async (walletAddress = account) => {
      await loadStats()
      if (walletAddress) await loadWalletData(walletAddress)
    },
    [account, loadStats, loadWalletData]
  )

  useEffect(() => {
    loadStats()
    const timer = setInterval(loadStats, 15000)
    return () => clearInterval(timer)
  }, [loadStats])

  useEffect(() => {
    if (!window.ethereum) return undefined

    const onAccounts = (accounts) => {
      const next = accounts[0] || ''
      setAccount(next)
      if (next) loadWalletData(next)
      else {
        setUsdtBalance(0n)
        setTokenBalance(0n)
        setAllowance(0n)
      }
    }

    const onChain = () => refreshAll()

    window.ethereum.on('accountsChanged', onAccounts)
    window.ethereum.on('chainChanged', onChain)

    return () => {
      window.ethereum.removeListener('accountsChanged', onAccounts)
      window.ethereum.removeListener('chainChanged', onChain)
    }
  }, [loadWalletData, refreshAll])

  const connectWallet = async () => {
    try {
      setConnecting(true)
      showMessage('', '')
      await ensureCorrectNetwork()
      const provider = await getBrowserProvider()
      const accounts = await provider.send('eth_requestAccounts', [])
      const address = accounts[0]
      setAccount(address)
      await loadWalletData(address)
      showMessage('success', 'Wallet connected')
    } catch (error) {
      showMessage('error', getErrorMessage(error))
    } finally {
      setConnecting(false)
    }
  }

  const handleApprove = async () => {
    try {
      setBusy(true)
      showMessage('', '')
      await ensureCorrectNetwork()
      const provider = await getBrowserProvider()
      const signer = await provider.getSigner()
      const usdt = getUsdtContract(signer)
      const tx = await usdt.approve(appConfig.presaleAddress, MaxUint256)
      showMessage('info', 'Approve submitted... waiting confirmation')
      await tx.wait()
      await loadWalletData(account)
      showMessage('success', `${appConfig.usdtSymbol} approved for presale`)
    } catch (error) {
      showMessage('error', getErrorMessage(error))
    } finally {
      setBusy(false)
    }
  }

  const handleBuy = async (humanAmount) => {
    try {
      setBusy(true)
      showMessage('', '')
      await ensureCorrectNetwork()
      const amountWei = toWei(humanAmount, appConfig.usdtDecimals)
      if (amountWei <= 0n) {
        showMessage('error', 'Enter a valid USDT amount')
        return
      }
      const provider = await getBrowserProvider()
      const signer = await provider.getSigner()
      const presale = getPresaleContract(signer)
      const tx = await presale.buyWithUSDT(amountWei)
      showMessage('info', 'Buy submitted... waiting confirmation')
      await tx.wait()
      await refreshAll(account)
      showMessage('success', `Bought ${appConfig.tokenSymbol} successfully`)
    } catch (error) {
      showMessage('error', getErrorMessage(error))
    } finally {
      setBusy(false)
    }
  }

  return {
    account,
    connecting,
    busy,
    loadingStats,
    stats,
    usdtBalance,
    tokenBalance,
    allowance,
    message,
    connectWallet,
    handleApprove,
    handleBuy,
    refreshAll,
    configReady: isConfigReady(),
  }
}

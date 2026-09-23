import { formatUnits, parseUnits } from 'ethers'

/** Human number -> blockchain amount */
export function toWei(amount, decimals) {
  if (!amount && amount !== 0) return 0n
  return parseUnits(String(amount), decimals)
}

/** Blockchain amount -> readable string */
export function fromWei(amount, decimals, maxFraction = 4) {
  if (amount === undefined || amount === null) return '0'
  const full = formatUnits(amount, decimals)
  const num = Number(full)
  if (!Number.isFinite(num)) return full
  return num.toLocaleString(undefined, {
    maximumFractionDigits: maxFraction,
  })
}

export function shortAddress(address) {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function getErrorMessage(error) {
  if (!error) return 'Something went wrong'
  if (error.reason) return error.reason
  if (error.shortMessage) return error.shortMessage
  if (typeof error.message === 'string') {
    if (error.message.includes('user rejected')) return 'Transaction rejected in wallet'
    return error.message.slice(0, 180)
  }
  return 'Transaction failed'
}

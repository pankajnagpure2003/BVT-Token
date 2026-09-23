// Matches the verified mainnet BVTPresale (not Contracts/BVTPresale.sol)
export const presaleAbi = [
  'function presaleActive() view returns (bool)',
  'function totalBvtSold() view returns (uint256)',
  'function usdtBalance() view returns (uint256)',
  'function remainingBvt() view returns (uint256)',
  'function bvtPrice() view returns (uint256)',
  'function maxPurchasePerWallet() view returns (uint256)',
  'function purchasedBvt(address account) view returns (uint256)',
  'function getBvtAmount(uint256 usdtAmount) view returns (uint256)',
  'function getUsdtAmount(uint256 bvtAmount) view returns (uint256)',
  'function bvtToken() view returns (address)',
  'function usdtToken() view returns (address)',
  'function buyWithUSDT(uint256 usdtAmount) returns (uint256)',
]

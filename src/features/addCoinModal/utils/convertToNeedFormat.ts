import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import { CoinData } from '@/widgets/coinsTable/coinsTable/CoinsTable'
import { v4 as uuidv4 } from 'uuid'

export type CoinForModal = {
  amountCoin: number
  data: {
    additionData: string
    additionTime: string
  }
  id: string
  nameCoin: string
  price: string
  symbolCoin: string
}
export const convertToNeedFormat = (coin: CoinData): CoinForModal => {
  const currentData = new Date()

  return {
    amountCoin: 1,
    data: {
      additionData: currentData.toLocaleDateString(),
      additionTime: currentData.toLocaleTimeString(),
    },
    id: uuidv4(),
    nameCoin: coin.name,
    price: abbreviateNumber(coin.priceUsd),
    symbolCoin: coin.symbol,
  }
}

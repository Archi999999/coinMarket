import { CoinData } from '@/entities/coin/model/services/coins'
import { v4 as uuidv4 } from 'uuid'

export type CoinForModal = {
  amountCoin: number
  data: {
    additionData: string
    additionTime: string
  }
  idCoin: string
  idForModal: string
  nameCoin: string
  price: number
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
    idCoin: coin.id,
    idForModal: uuidv4(),
    nameCoin: coin.name,
    price: Number(coin.priceUsd),
    symbolCoin: coin.symbol,
  }
}

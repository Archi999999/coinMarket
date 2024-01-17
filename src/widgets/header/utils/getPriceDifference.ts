import { CoinData } from '@/entities/coin/model/services/coins'
import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

export const getPriceDifference = (currentPrice: CoinForModal[], newPrice: CoinData[] = []) => {
  if (currentPrice.length === 0) {
    return { delta: 'wallet is empty', totalPrice: `` }
  }

  const totalPrice = currentPrice.reduce((acc: number, el: CoinForModal) => {
    return el.price * el.amountCoin + acc
  }, 0)

  if (newPrice.length === 0) {
    return { delta: 'undefined', totalPrice: `${abbreviateNumber(totalPrice)} USD` }
  }

  const subtractionArray = currentPrice.map(preCoin => {
    const currentCoinPrice = newPrice
      .filter(el => el.id === preCoin.idCoin)
      .map(price => price.priceUsd)
      .join('')

    return Number(preCoin.amountCoin) * (preCoin.price - Number(currentCoinPrice))
  })
  const subtraction = subtractionArray.reduce((acc, el) => el + acc, 0)

  const percent = ((100 * subtraction) / totalPrice).toFixed(2)

  const resultObj = {
    delta:
      subtraction > 0
        ? `+${abbreviateNumber(subtraction)}+(${percent}%)`
        : `${abbreviateNumber(subtraction)}(${percent}%)`,
    totalPrice: `${abbreviateNumber(totalPrice)} USD`,
  }

  return resultObj
}

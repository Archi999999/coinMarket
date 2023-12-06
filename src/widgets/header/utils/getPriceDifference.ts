import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import { CoinData } from '@/widgets/coinsTable/coinsTable/CoinsTable'

export const getPriceDifference = (currentPrice: CoinForModal[], newPrice: CoinData[]) => {
  if (currentPrice.length === 0) {
    return 'portfolio is empty'
  }
  const totalPrice = currentPrice.reduce((acc: number, el: CoinForModal) => {
    return el.price * el.amountCoin + acc
  }, 0)

  const subtractionArray = currentPrice.map(preCoin => {
    const currentCoinPrice = newPrice
      .filter(el => el.id === preCoin.idCoin)
      .map(price => price.priceUsd)
      .join('')

    return Number(preCoin.amountCoin) * (preCoin.price - Number(currentCoinPrice))
  })
  const subtraction = subtractionArray.reduce((acc, el) => el + acc, 0)

  console.log(subtraction)
  const percent = ((100 * subtraction) / totalPrice).toFixed(2)

  return subtraction > 0
    ? `${abbreviateNumber(totalPrice)} USD +${abbreviateNumber(subtraction)}+(${percent}%)`
    : `${abbreviateNumber(totalPrice)} USD -${abbreviateNumber(subtraction)} (${percent}%)`
}

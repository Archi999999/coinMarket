import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'

export const getArrayOfUnique = (array: CoinForModal[]) => {
  const needCoinsArray = array.map((el: CoinForModal) => el.idCoin)

  const set = Array.from(new Set(needCoinsArray))

  const setOfString = set.join(',')

  return setOfString
}

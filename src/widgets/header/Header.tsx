import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Bitcoin } from '@/assets/icons/Bitcoin'
import { useGetCoinsQuery, useGetSomeCoinsQuery } from '@/entities/coin/model/services/coins'
import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { ShowPortfolioModal } from '@/features/showPortfolioModal/showPortfolioModal'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './Header.module.scss'

export const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [needCoins, setNeedCoins] = useState('')

  useEffect(() => {
    const getPortfolio = localStorage.getItem('portfolio')

    if (getPortfolio) {
      const currentAllObject = JSON.parse(getPortfolio)
      const totalPrice = currentAllObject.reduce((acc: number, el: CoinForModal) => {
        return el.price + acc
      }, 0)

      setTotalPrice(totalPrice)

      const needCoins = currentAllObject.map((el: CoinForModal) => el.idCoin)

      const set = Array.from(new Set(needCoins))

      setNeedCoins(set.join(','))
    }
  }, [totalPrice])

  const threePopularCoins = useGetCoinsQuery({ limit: 3 })

  const requestCoins = useGetSomeCoinsQuery({ ids: needCoins })

  const newTotalPrice =
    requestCoins &&
    requestCoins.data &&
    requestCoins.data.data.reduce((acc, el) => Number(el.priceUsd) + acc, 0)

  return (
    <header className={s.header}>
      <div>
        <Link className={s.headerLogo} to={'/'}>
          <Bitcoin />
          <Typography as={'h2'}>COINCHAIN</Typography>
        </Link>
      </div>
      <div className={s.headerCoins}>
        {threePopularCoins.data?.data.map(coin => {
          return (
            <Link className={s.coinLink} key={coin.id} to={`/coin/${coin.id}`}>
              <div className={s.coin}>
                <div>
                  {coin.name} ({coin.symbol}):
                </div>
                <div>{abbreviateNumber(coin.priceUsd)}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className={s.headerPortfolio} onClick={() => setShowModal(true)}>
        <Typography variant={'medium'}>
          {abbreviateNumber(totalPrice)}$ now: {newTotalPrice && abbreviateNumber(newTotalPrice)}
        </Typography>
      </div>
      {showModal && (
        <ShowPortfolioModal setShowPortfolioModal={setShowModal} showPortfolioModal={showModal} />
      )}
    </header>
  )
}

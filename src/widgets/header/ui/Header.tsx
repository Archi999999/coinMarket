import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '@/app/providers/store/store'
import { Bitcoin } from '@/assets/icons/Bitcoin'
import { useGetCoinsQuery, useGetSomeCoinsQuery } from '@/entities/coin/model/services/coins'
import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { ShowPortfolioModal } from '@/features/showPortfolioModal/showPortfolioModal'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import { getArrayOfUnique } from '@/widgets/header/utils/getArrayOfUnique'
import { getPriceDifference } from '@/widgets/header/utils/getPriceDifference'

import s from './Header.module.scss'

export const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const totalPrice = useSelector<RootState, CoinForModal[]>(state => state.portfolio)

  const needCoins = getArrayOfUnique(totalPrice)

  const threePopularCoins = useGetCoinsQuery({ limit: 3 })

  const requestCoins = useGetSomeCoinsQuery({ ids: needCoins })

  const newTotalPrice = requestCoins && requestCoins.data && requestCoins.data.data

  const portfolioTitle = getPriceDifference(totalPrice, newTotalPrice)

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
        <Typography as={'span'} variant={'medium'}>
          {portfolioTitle.totalPrice}
        </Typography>
        <Typography as={'span'} variant={'medium'}>
          {portfolioTitle.delta}
        </Typography>
      </div>
      {showModal && (
        <ShowPortfolioModal setShowPortfolioModal={setShowModal} showPortfolioModal={showModal} />
      )}
    </header>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Bitcoin } from '@/assets/icons/Bitcoin'
import { useGetCoinsQuery } from '@/entities/coin/model/services/coins'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal/Modal'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './Header.module.scss'

export const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const threePopularCoins = useGetCoinsQuery({ limit: 3 })

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
        <Typography variant={'medium'}>Here will be portfolio</Typography>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <div className={s.headerModal}>
          <span>Portfolio is empty</span>
          <Button onClick={() => setShowModal(false)}>Cancel</Button>
        </div>
      </Modal>
    </header>
  )
}

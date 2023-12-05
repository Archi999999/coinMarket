import { FC, useEffect, useState } from 'react'

import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Table } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import { CoinData } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './showPortfolioModal.module.scss'

type Props = {
  setShowPortfolioModal: (showAddCoinModal: boolean) => void
  showPortfolioModal: boolean
}
export const ShowPortfolioModal: FC<Props> = ({ setShowPortfolioModal, showPortfolioModal }) => {
  const [currentPortfolio, setCurrentPortfolio] = useState<CoinData[]>([])

  useEffect(() => {
    const getPortfolio = localStorage.getItem('portfolio')

    if (getPortfolio) {
      setCurrentPortfolio(JSON.parse(getPortfolio))
    }
  }, [])

  return (
    <Modal setShowModal={setShowPortfolioModal} showModal={showPortfolioModal}>
      <div className={s.root}>
        <Typography variant={'extra_large_bold'}>Your Portfolio: </Typography>
        {currentPortfolio.length === 0 ? (
          <Typography variant={'medium'}>
            Unfortunately, you have not purchased any coins yet
          </Typography>
        ) : (
          <Table.Root>
            <Table.Body>
              {currentPortfolio.map(coin => {
                return (
                  <Table.Row className={s.tableRow} key={coin.id}>
                    <Table.Cell className={s.tableCell}>
                      <div className={s.coinInfo}>
                        <Typography variant={'large_bold'}>
                          {coin.id} ({coin.symbol})
                        </Typography>
                        <Typography variant={'medium'}>Amount: 1</Typography>
                        <Typography variant={'medium'}>
                          {abbreviateNumber(coin.priceUsd)}
                        </Typography>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{coin.symbol}</Table.Cell>
                    <Button>Remove</Button>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table.Root>
        )}
        <Button
          onClick={() => {
            setShowPortfolioModal(false)
          }}
          variant={'primary'}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

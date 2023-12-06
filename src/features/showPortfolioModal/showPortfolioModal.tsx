import { FC, useEffect, useState } from 'react'

import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Table } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './showPortfolioModal.module.scss'

type Props = {
  setShowPortfolioModal: (showAddCoinModal: boolean) => void
  showPortfolioModal: boolean
}
export const ShowPortfolioModal: FC<Props> = ({ setShowPortfolioModal, showPortfolioModal }) => {
  const [currentPortfolio, setCurrentPortfolio] = useState<CoinForModal[]>([])

  useEffect(() => {
    const getPortfolio = localStorage.getItem('portfolio')

    if (getPortfolio) {
      setCurrentPortfolio(JSON.parse(getPortfolio))
    }
  }, [currentPortfolio])

  const removePurchase = (id: string) => {
    const withOutOnePurchase = currentPortfolio.filter(el => el.idForModal !== id)

    setCurrentPortfolio(withOutOnePurchase)
    localStorage.setItem('portfolio', JSON.stringify(withOutOnePurchase))
  }

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
                  <Table.Row className={s.tableRow} key={coin.idForModal}>
                    <Table.Cell className={s.tableCell}>
                      <div className={s.coinInfo}>
                        <Typography variant={'large_bold'}>
                          {coin.nameCoin} ({coin.symbolCoin})
                        </Typography>
                        <Typography as={'span'} variant={'medium'}>
                          Amount: {coin.amountCoin}
                        </Typography>
                        <Typography variant={'medium'}>${abbreviateNumber(coin.price)}</Typography>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      {coin.data.additionData} {coin.data.additionTime}
                    </Table.Cell>
                    <Button onClick={() => removePurchase(coin.idForModal)}>Remove</Button>
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

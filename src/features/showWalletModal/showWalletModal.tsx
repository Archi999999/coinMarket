import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/providers/store/store'
import { portfolioSlice } from '@/entities/coin/model/slice/portfolio.slice'
import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Table } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './showWalletModal.module.scss'

type Props = {
  setShowWalletModal: (showAddCoinModal: boolean) => void
  showWalletModal: boolean
}
export const ShowWalletModal: FC<Props> = ({ setShowWalletModal, showWalletModal }) => {
  const dispatch = useDispatch()

  const currentPortfolio = useSelector<RootState, CoinForModal[]>(state => state.portfolio)

  const removePurchase = (id: string) => {
    dispatch(portfolioSlice.actions.removeCoin({ idCoin: id }))
  }

  return (
    <Modal setShowModal={setShowWalletModal} showModal={showWalletModal}>
      <div className={s.root}>
        <Typography className={s.title} variant={'extra_large_bold'}>
          Your Wallet:{' '}
        </Typography>
        {currentPortfolio.length === 0 ? (
          <Typography variant={'medium'}>
            Unfortunately, you have not purchased any coins yet
          </Typography>
        ) : (
          <Table.Root>
            <Table.Body className={s.tableBody}>
              {currentPortfolio.map(coin => {
                return (
                  <Table.Row className={s.tableRow} key={coin.idForModal}>
                    <Table.Cell className={s.coinInfo}>
                      <div className={s.coinName}>
                      <Typography variant={'large_bold'}>
                        {coin.nameCoin}
                      </Typography>
                      <Typography variant={'large_bold'}>
                        ({coin.symbolCoin})
                      </Typography>
                      </div>
                      <Typography as={'span'} variant={'medium'}>
                        Amount: {coin.amountCoin}
                      </Typography>
                      <Typography variant={'medium'}>${abbreviateNumber(coin.price)}</Typography>
                    </Table.Cell>
                    <Table.Cell className={s.data}>
                      <Typography variant={'medium'}>{coin.data.additionData}</Typography>
                      <Typography variant={'medium'}>{coin.data.additionTime}</Typography>
                    </Table.Cell>
                    <Table.Cell className={s.tableButton}>
                      <Button onClick={() => removePurchase(coin.idForModal)}>X</Button>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table.Root>
        )}
        <Button
          onClick={() => {
            setShowWalletModal(false)
          }}
          variant={'primary'}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  )
}

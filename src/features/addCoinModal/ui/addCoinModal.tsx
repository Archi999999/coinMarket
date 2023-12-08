import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { portfolioSlice } from '@/entities/coin/model/slice/portfolio.slice'
import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { InputNumber } from '@/features/inputNumber/InputNumber'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'

import s from './addCoinModal.module.scss'

type Props = {
  coin: CoinForModal
  setShowAddCoinModal: (showAddCoinModal: boolean) => void
  showAddCoinModal: boolean
}
export const AddCoinModal: FC<Props> = ({ coin, setShowAddCoinModal, showAddCoinModal }) => {
  const [coinsQuantity, setCoinsQuantity] = useState(1)
  const dispatch = useDispatch()
  const addCoinToPortfolio = () => {
    dispatch(portfolioSlice.actions.addCoin({ newCoin: { ...coin, amountCoin: coinsQuantity } }))
    setShowAddCoinModal(false)
  }

  return (
    <Modal setShowModal={setShowAddCoinModal} showModal={showAddCoinModal}>
      <div className={s.root}>
        <Typography className={s.title} variant={'extra_large_bold'}>
          How many <span>{coin.nameCoin}</span> coins do you want to add to your Portfolio?
        </Typography>
        <InputNumber setValue={setCoinsQuantity} value={coinsQuantity} />
        <div className={s.buttons}>
          <Button onClick={addCoinToPortfolio} variant={'primary'}>
            Confirm
          </Button>
          <Button
            onClick={() => {
              setShowAddCoinModal(false)
            }}
            variant={'secondary'}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  )
}

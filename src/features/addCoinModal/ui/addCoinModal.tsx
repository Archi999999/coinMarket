import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { walletSlice } from '@/entities/coin/model/slice/wallet.slice'
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
  const addCoinToWallet = () => {
    dispatch(walletSlice.actions.addCoin({ newCoin: { ...coin, amountCoin: coinsQuantity } }))
    setShowAddCoinModal(false)
  }

  return (
    <Modal setShowModal={setShowAddCoinModal} showModal={showAddCoinModal}>
      <div className={s.root}>
        <Typography className={s.title} variant={'extra_large_bold'}>
          How many <span>{coin.nameCoin}</span> coins do you want to add to your wallet?
        </Typography>
        <InputNumber setValue={setCoinsQuantity} value={coinsQuantity} />
        <div className={s.buttons}>
          <Button onClick={addCoinToWallet} variant={'primary'}>
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

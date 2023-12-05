import { FC } from 'react'

import { InputNumber } from '@/features/inputNumber/InputNumber'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { Typography } from '@/shared/ui/typography'
import { CoinData } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './addCoinModal.module.scss'

type Props = {
  coin: CoinData
  setShowAddCoinModal: (showAddCoinModal: boolean) => void
  showAddCoinModal: boolean
}
export const AddCoinModal: FC<Props> = ({ coin, setShowAddCoinModal, showAddCoinModal }) => {
  const addCoinToPortfolio = () => {}

  return (
    <Modal setShowModal={setShowAddCoinModal} showModal={showAddCoinModal}>
      <div className={s.root}>
        <Typography className={s.title} variant={'extra_large_bold'}>
          How many <span>{coin.name}</span> coins do you want to add to your Portfolio?
        </Typography>
        <InputNumber />
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

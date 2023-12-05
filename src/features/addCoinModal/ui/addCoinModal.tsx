import { FC } from 'react'

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
  const addCoinToPortfolio = () => {
    const currentObject = localStorage.getItem('portfolio')

    const addedObject = currentObject ? JSON.parse(currentObject) : []

    localStorage.setItem('portfolio', JSON.stringify([...addedObject, coin]))
    setShowAddCoinModal(false)
  }

  return (
    <Modal setShowModal={setShowAddCoinModal} showModal={showAddCoinModal}>
      <div className={s.root}>
        <Typography className={s.title} variant={'extra_large_bold'}>
          How many <span>{coin.nameCoin}</span> coins do you want to add to your Portfolio?
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
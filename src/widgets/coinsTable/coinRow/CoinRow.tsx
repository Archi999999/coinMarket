import React, { FC, useState } from 'react'

import { AddCoinModal } from '@/features/addCoinModal/ui/addCoinModal'
import {
  CoinForModal,
  convertToNeedFormat,
} from '@/features/addCoinModal/utils/convertToNeedFormat'
import { Table } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import { CoinData } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './CoinRow.module.scss'

type Props = {
  coin: CoinData
}
export const CoinRow: FC<Props> = ({ coin }) => {
  const [showAddCoinModal, setShowAddCoinModal] = useState<boolean>(false)
  const [currentCoin, setCurrentCoin] = useState<CoinForModal>({} as CoinForModal)
  const handleRowClick = (coin: CoinData) => {
    //TODO navigate details
    console.log(coin)
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, coin: CoinData) => {
    e.stopPropagation()
    setShowAddCoinModal(true)
    setCurrentCoin(convertToNeedFormat(coin))
  }

  return (
    <>
      {showAddCoinModal && (
        <AddCoinModal
          coin={currentCoin}
          setShowAddCoinModal={setShowAddCoinModal}
          showAddCoinModal={showAddCoinModal}
        />
      )}
      <Table.Row
        key={coin.id}
        onClick={() => {
          handleRowClick(coin)
        }}
      >
        <Table.Cell>{coin.rank}</Table.Cell>
        <Table.Cell>{coin.symbol}</Table.Cell>
        <Table.Cell>Logo</Table.Cell>
        <Table.Cell>
          <Typography variant={'small'}>{abbreviateNumber(coin.priceUsd)}</Typography>
        </Table.Cell>
        <Table.Cell>{abbreviateNumber(coin.marketCapUsd)}</Table.Cell>
        <Table.Cell>{abbreviateNumber(coin.volumeUsd24Hr)}</Table.Cell>
        <Table.Cell>
          <button
            className={s.button}
            onClick={e => {
              handleButtonClick(e, coin)
            }}
          >
            +
          </button>
        </Table.Cell>
      </Table.Row>
    </>
  )
}

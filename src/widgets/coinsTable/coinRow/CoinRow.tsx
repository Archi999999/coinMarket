import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CoinData } from '@/entities/coin/model/services/coins'
import { AddCoinModal } from '@/features/addCoinModal/ui/addCoinModal'
import {
  CoinForModal,
  convertToNeedFormat,
} from '@/features/addCoinModal/utils/convertToNeedFormat'
import { Table } from '@/shared/ui/table'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './CoinRow.module.scss'
import { handleImageError } from '@/shared/utils/handleImageError'

type Props = {
  coin: CoinData
}

export const CoinRow: FC<Props> = ({ coin }) => {
  const [showAddCoinModal, setShowAddCoinModal] = useState<boolean>(false)
  const [currentCoin, setCurrentCoin] = useState<CoinForModal>({} as CoinForModal)
  const navigate = useNavigate()

  const handleRowClick = (coin: CoinData) => {
    navigate(`/coin/${coin.id}`)
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
        className={s.tableRow}
        key={coin.id}
        onClick={() => {
          handleRowClick(coin)
        }}
      >
        <Table.Cell>{coin.rank}</Table.Cell>
        <Table.Cell>{coin.symbol}</Table.Cell>
        <Table.Cell className={s.cellLogo}>
          <img
            alt={'Logo'}
            className={s.logo}
            height={30}
            onError={handleImageError}
            src={`/logo/${coin.symbol.toUpperCase()}.png`}
          />
        </Table.Cell>
        <Table.Cell>{abbreviateNumber(coin.priceUsd)}</Table.Cell>
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

import { FC } from 'react'

import { Table } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import { CoinData } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './CoinRow.module.scss'

type Props = {
  coin: CoinData
}
export const CoinRow: FC<Props> = ({ coin }) => {
  const handleRowClick = (coin: CoinData) => {
    //TODO navigate details
    console.log(coin)
  }

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, coin: CoinData) => {
    e.stopPropagation()
    console.log(coin)
    //TODO open modal
  }

  return (
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
  )
}

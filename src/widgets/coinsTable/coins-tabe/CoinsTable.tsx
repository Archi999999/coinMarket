import { FC } from 'react'

import { Table, TableHeader, TableHeaderProps } from '@/shared/ui/table'
import { CoinRow } from '@/widgets/coinsTable/coin-row/CoinRow'

const columns = [
  { key: 'rank', sortable: true, title: '#' },
  { key: 'symbol', sortable: false, title: 'Symbol' },
  { key: 'logo', sortable: false, title: 'Logo' },
  { key: 'priceUsd', sortable: true, title: 'Price' },
  { key: 'marketCapUsd', sortable: true, title: 'Market Cap ' },
  { key: 'volumeUsd24Hr', sortable: true, title: 'Volume(24h)' },
]

export type CoinData = {
  changePercent24Hr: null | string
  id: string
  marketCapUsd: string
  maxSupply: null | string
  name: string
  priceUsd: string
  rank: string
  supply: string
  symbol: string
  volumeUsd24Hr: string
  vwap24Hr: string
}

type Props = {
  data: CoinData[]
} & Pick<TableHeaderProps, 'onSort' | 'sort'>

export const CoinsTable: FC<Props> = ({ data, ...rest }) => {
  if (!data.length) {
    return <Table.Empty>No content...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={columns} {...rest} />
      <Table.Body>
        {data.map(coin => (
          <CoinRow coin={coin} key={coin.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}

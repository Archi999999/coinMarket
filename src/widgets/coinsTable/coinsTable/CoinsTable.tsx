import { FC, useCallback, useState } from 'react'

import { CoinData } from '@/entities/coin/model/services/coins'
import { Sort, Table, TableHeader, TableHeaderProps } from '@/shared/ui/table'
import { CoinRow } from '@/widgets/coinsTable/coinRow/CoinRow'

const columns = [
  { key: 'rank', sortable: true, title: '#' },
  { key: 'symbol', sortable: false, title: 'Symbol' },
  { key: 'logo', sortable: false, title: 'Logo' },
  { key: 'priceUsd', sortable: true, title: 'Price' },
  { key: 'marketCapUsd', sortable: true, title: 'Market Cap ' },
  { key: 'volumeUsd24Hr', sortable: true, title: 'Volume(24h)' },
]

type Props = {
  data: CoinData[]
} & Pick<TableHeaderProps, 'onSort' | 'sort'>

export const CoinsTable: FC<Props> = ({ data, ...rest }) => {
  const [sort, setSort] = useState<Sort>({ direction: 'asc', key: 'rank' })
  const sortCoinsData = useCallback(
    (data: CoinData[], sort: { direction: string; key: keyof CoinData }) => {
      const { direction, key } = sort
      const sortedData = [...data]

      sortedData.sort((a, b) => {
        if (direction === 'asc') {
          return Number(a[key]) - Number(b[key])
        } else {
          return Number(b[key]) - Number(a[key])
        }
      })

      return sortedData
    },
    [data, sort]
  )

  if (!data.length) {
    return <Table.Empty>No content...</Table.Empty>
  }

  return (
    <Table.Root>
      <TableHeader columns={columns} {...rest} onSort={setSort} sort={sort} />
      <Table.Body>
        {sortCoinsData(data, sort as { direction: string; key: keyof CoinData }).map(coin => (
          <CoinRow coin={coin} key={coin.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}

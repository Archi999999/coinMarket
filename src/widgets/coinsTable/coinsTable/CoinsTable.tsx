import { FC, useCallback, useState } from 'react'

import { CoinData, useGetCoinsQuery } from '@/entities/coin/model/services/coins'
import { TableContentLoader } from '@/features/loader/TableContentLoader'
import { Sort, Table, TableHeader, TableHeaderProps } from '@/shared/ui/table'
import { useDebounce } from '@/shared/utils/hooks/useDebounce/useDebounce'
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
  className: string
  currentPage: number
  limit: number
  search: string
  // data: CoinData[]
} & Pick<TableHeaderProps, 'onSort' | 'sort'>

export const CoinsTable: FC<Props> = ({ className, currentPage, limit, search, ...rest }) => {
  const [sort, setSort] = useState<Sort>({ direction: 'asc', key: 'rank' })

  const offset = (currentPage - 1) * limit
  const debouncedValue = useDebounce(search)
  const {
    data: coinData,
    isError,
    isLoading,
  } = useGetCoinsQuery({ limit, offset, search: debouncedValue })
  const data = coinData?.data

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

  if (isError) {
    return <Table.Empty>Error!</Table.Empty>
  }

  return (
    <Table.Root className={className}>
      <TableHeader columns={columns} {...rest} onSort={setSort} sort={sort} />
      <Table.Body>
        {isLoading || data === undefined ? (
          <TableContentLoader limit={limit} />
        ) : (
          sortCoinsData(data, sort as { direction: string; key: keyof CoinData }).map(coin => (
            <>
              <CoinRow coin={coin} key={coin.id} />
            </>
          ))
        )}
      </Table.Body>
    </Table.Root>
  )
}

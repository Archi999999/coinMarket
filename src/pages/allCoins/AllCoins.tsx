import { useState } from 'react'

import { useGetCoinsQuery } from '@/entities/coin/model/services/coins'
import { Pagination } from '@/shared/ui/pagination/Pagination'
import { Option, Select } from '@/shared/ui/select/Select'
import { CoinsTable } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './AllCons.module.scss'

const limitOptions: Option[] = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '100', value: '100' },
]

export const AllCoins = () => {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrenPage] = useState(1)
  const offset = (currentPage - 1) * limit
  const { data: coinsData, isLoading } = useGetCoinsQuery({ limit, offset })

  if (isLoading) {
    return <div>Loading....</div>
  }

  return (
    <section className={s.root}>
      {/*<FilterCoins/>*/}
      <div style={{ display: 'inline-block', width: '100px' }}>
        <Select
          currentValue={limit.toString()}
          options={limitOptions}
          setValue={limit => setLimit(Number(limit))}
        />
      </div>
      {coinsData?.data && <CoinsTable data={coinsData.data} />}
      <Pagination
        currentPage={currentPage}
        onPageChanged={setCurrenPage}
        pageSize={limit}
        totalItemsCount={2000}
      />
    </section>
  )
}

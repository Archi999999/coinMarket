import { useEffect, useState } from 'react'

import { useGetCoinsQuery } from '@/entities/coin/model/services/coins'
import { Loader } from '@/shared/ui/loader/Loader'
import { Pagination } from '@/shared/ui/pagination/Pagination'
import { useDebounce } from '@/shared/utils/hooks/useDebounce/useDebounce'
import { CoinsFilters } from '@/widgets/coinsFilter'
import { CoinsTable } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './AllCons.module.scss'

export const AllCoins = () => {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrenPage] = useState(1)
  const [search, setSearch] = useState('')
  const offset = (currentPage - 1) * limit
  const debouncedValue = useDebounce(search)
  const { data: coinsData, isLoading } = useGetCoinsQuery({ limit, offset, search: debouncedValue })

  useEffect(() => {
    setCurrenPage(1)
  }, [limit, search])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section className={s.root}>
      <CoinsFilters limit={limit} onChangeSearch={setSearch} search={search} setLimit={setLimit} />
      {coinsData?.data && <CoinsTable className={s.coinTable} data={coinsData.data} />}
      <Pagination
        currentPage={currentPage}
        onPageChanged={setCurrenPage}
        pageSize={limit}
        totalItemsCount={300}
      />
    </section>
  )
}

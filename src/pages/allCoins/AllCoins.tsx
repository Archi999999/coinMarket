import { useEffect, useState } from 'react'

import { Pagination } from '@/shared/ui/pagination/Pagination'
import { CoinsFilters } from '@/widgets/coinsFilter'
import { CoinsTable } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './AllCons.module.scss'

export const AllCoins = () => {
  const [limit, setLimit] = useState(10)
  const [currentPage, setCurrenPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setCurrenPage(1)
  }, [limit, search])

  return (
    <section className={s.root}>
      <CoinsFilters limit={limit} onChangeSearch={setSearch} search={search} setLimit={setLimit} />
      <CoinsTable className={s.coinTable} currentPage={currentPage} limit={limit} search={search} />
      <Pagination
        currentPage={currentPage}
        onPageChanged={setCurrenPage}
        pageSize={limit}
        totalItemsCount={300}
      />
    </section>
  )
}

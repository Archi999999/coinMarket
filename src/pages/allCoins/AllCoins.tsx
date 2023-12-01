import { useState } from 'react'

import { useGetCoinsQuery } from '@/entities/coin/model/services/coins'
import { Pagination } from '@/shared/ui/pagination/Pagination'
import { Sort } from '@/shared/ui/table'
import { CoinsTable } from '@/widgets/coinsTable/coinsTable/CoinsTable'

import s from './AllCons.module.scss'

// function reducer(
//   state: CoinData[],
//   action: { payload: { direction: string; key: keyof CoinData }; type: 'SORT' }
// ) {
//   const { direction, key } = action.payload
//
//   switch (action.type) {
//     case 'SORT':
//       return [...state].sort((a, b) => {
//         const valueA = a[key]
//         const valueB = b[key]
//
//         if (direction === 'asc') {
//           return Number(valueA) - Number(valueB)
//         } else if (direction === 'desc') {
//           return Number(valueB) - Number(valueA)
//         } else {
//           return 0
//         }
//       })
//
//     default:
//       return state
//   }
// }

export const AllCoins = () => {
  const limit = 10

  const [sort, setSort] = useState<Sort>({ direction: 'asc', key: 'rank' })

  const [currentPage, setCurrenPage] = useState(1)
  const offset = (currentPage - 1) * limit
  const coinsData = useGetCoinsQuery({ limit, offset })
  //const [state, dispatch] = useReducer(reducer, data)
  //const selectCoins = coinsAPI.endpoints.getCoins.select()

  // useEffect(() => {
  //   if (sort) {
  //     dispatch({
  //       payload: { direction: sort.direction, key: sort.key as keyof CoinData },
  //       type: 'SORT',
  //     })
  //   }
  // }, [sort])

  return (
    <section className={s.root}>
      {/*<FilterCoins/>*/}
      {coinsData?.data?.data && (
        <CoinsTable data={coinsData.data.data} onSort={setSort} sort={sort} />
      )}
      <Pagination
        currentPage={currentPage}
        onPageChanged={setCurrenPage}
        pageSize={limit}
        totalItemsCount={2000}
      />
    </section>
  )
}

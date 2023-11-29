import { Button } from '@/shared/ui/button'
import s from './Pagination.module.scss'

type Props = {
  pageSize: number
  totalItemsCount: number
  currentPage: number
  onPageChanged: (page: number) => void
}

export const Pagination = (props: Props) => {
  const { currentPage, pageSize, onPageChanged, totalItemsCount } = props
  const portionSize = 7

  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let paginationItems
  if (pages.length > portionSize) {
    const firstPart = [1, '...']
    const lastPart = ['...', pagesCount]

    if (currentPage <= 4) {
      paginationItems = [...pages.slice(0, 5), ...lastPart]
    } else if (currentPage >= pagesCount - 3) {
      paginationItems = [...firstPart, ...pages.slice(pagesCount - 5, pagesCount)]
    } else {
      paginationItems = [...firstPart, currentPage - 1, currentPage, currentPage + 1, ...lastPart]
    }
  } else {
    paginationItems = pages
  }

  const onClickButton = (p: number | string, index: number) => {
    if (p === currentPage) return
    if (typeof p === 'number') {
      if (onPageChanged) {
        onPageChanged(p)
      }
    } else {
      if (index === 1) {
        onPageChanged(currentPage - 2)
      }
      if (index === portionSize - 2) {
        onPageChanged(currentPage + 2)
      }
    }
  }
  return (
    <div className={s.pagination}>
      {paginationItems.map((el, index) => (
        <Button
          key={index}
          className={`${s.button} ${el === currentPage && s.currentPage}`}
          onClick={() => onClickButton(el, index)}
          variant={el === currentPage ? 'primary' : 'secondary'}
        >
          {el}{' '}
        </Button>
      ))}
    </div>
  )
}

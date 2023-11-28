import { Button } from '@/shared/ui/button'

type Props = {
  pageSize: number
  totalItemsCount: number
  currentPage: number
  onPageChanged?: (p: number) => void
  portionSize?: number
}

export const Pagination = (props: Props) => {
  const { currentPage, pageSize, portionSize = 7, onPageChanged, totalItemsCount } = props

  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let paginationItems = pages.length <= portionSize ? pages : new Array(portionSize)
  const firstPart = [1, '...']
  const lastPart = ['...', pagesCount]

  if (currentPage < 3) {
    paginationItems = [...pages.slice(0, 5), ...lastPart]
  } else if (currentPage >= pagesCount - 3) {
    paginationItems = [...firstPart, ...pages.slice(pagesCount - 5, pagesCount)]
  } else {
    paginationItems = [...firstPart, currentPage - 1, currentPage, currentPage + 1, ...lastPart]
  }

  const onClickButton = (p: number) => {
    if (onPageChanged) {
      onPageChanged(p)
    }
  }
  return (
    <div>
      {paginationItems.map(el => (
        <Button
          onClick={() => onClickButton(el)}
          variant={el === currentPage ? 'primary' : 'secondary'}
        >
          {el}{' '}
        </Button>
      ))}
    </div>
  )
}

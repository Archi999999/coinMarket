import { ComponentPropsWithoutRef } from 'react'

import { ArrowDown } from '@/assets/icons/ArrowDown'
import { ArrowUp } from '@/assets/icons/ArrowUp'
import { Table } from '@/shared/ui/table'
import { Typography } from '@/shared/ui/typography'
import { clsx } from 'clsx'

import s from './TableHeader.module.scss'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type TableHeaderProps = Omit<
  ComponentPropsWithoutRef<typeof Table.Head> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableHeader = ({ columns, onSort, sort, ...restProps }: TableHeaderProps) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <Table.Head {...restProps}>
      <Table.Row>
        {columns.map(({ key, sortable, title }) => {
          const headCellClasses = clsx(sortable && s.activeHeadCell)

          return (
            <Table.HeadCell
              className={headCellClasses}
              key={key}
              onClick={handleSort(key, sortable)}
            >
              <Typography className={s.sortCell} variant={'medium_bold'}>
                {title}
                {sort && sort.key === key && (
                  <>
                    {sort.direction === 'asc' && (
                      <ArrowDown className={s.sortIcon} height={'1.2rem'} width={'1.2rem'} />
                    )}
                    {sort.direction !== 'asc' && (
                      <ArrowUp className={s.sortIcon} height={'1.2rem'} width={'1.2rem'} />
                    )}
                  </>
                )}
              </Typography>
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}

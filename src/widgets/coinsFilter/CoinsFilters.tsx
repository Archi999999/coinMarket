import { memo } from 'react'

import { Input } from '@/shared/ui/input'
import { Option, Select } from '@/shared/ui/select'

import s from './CoinsFilters.module.scss'

type CoinsFiltersProps = {
  className?: string
  limit: number
  onChangeSearch: (value: string) => void
  search: string
  setLimit: (limit: number) => void
}

const limitOptions: Option[] = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '100', value: '100' },
]

export const CoinsFilters = memo((props: CoinsFiltersProps) => {
  const { className, limit, onChangeSearch, search, setLimit } = props

  return (
    <div className={s.wrapper + ' ' + className}>
      <Input
        className={s.input}
        onChange={event => {
          onChangeSearch(event.target.value)
        }}
        placeholder={'Search'}
        type={'search'}
        value={search}
      />
      <Select
        className={s.select}
        currentValue={limit.toString()}
        options={limitOptions}
        setValue={limit => setLimit(Number(limit))}
      />
    </div>
  )
})

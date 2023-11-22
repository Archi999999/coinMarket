import { FC, SyntheticEvent } from 'react'

import s from './SelectPeriod.module.scss'

type Props = {
  setValue: (value: string) => void
  value: string
}
export const SelectPeriod: FC<Props> = ({ setValue, value }) => {
  const onSelectHandler = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <select className={s.select} onChange={onSelectHandler} value={value}>
      <option className={s.value} value={1}>
        one day
      </option>
      <option className={s.value} value={7}>
        7 days
      </option>
      <option className={s.value} value={30}>
        1 month
      </option>
    </select>
  )
}

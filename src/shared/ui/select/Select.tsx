import { FC, SyntheticEvent } from 'react'

import s from './Select.module.scss'

export type Option = {
  label: string
  value: string
}

type Props = {
  currentValue: string
  options: Option[]
  setValue: (value: string) => void
}
export const Select: FC<Props> = ({ currentValue, options, setValue }) => {
  const onSelectHandler = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <select className={s.select} onChange={onSelectHandler} value={currentValue}>
      {options.map(option => (
        <option className={s.value} key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

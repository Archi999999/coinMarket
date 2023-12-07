import { FC, SyntheticEvent } from 'react'

import { ArrowDown } from '@/assets/icons/ArrowDown'

import s from './Select.module.scss'

export type Option = {
  label: string
  value: string
}

type Props = {
  className?: string
  currentValue: string
  options: Option[]
  setValue: (value: string) => void
}
export const Select: FC<Props> = ({ className, currentValue, options, setValue }) => {
  const onSelectHandler = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className={`${s.div} ${className}`}>
      <select className={s.select} onChange={onSelectHandler} value={currentValue}>
        {options.map(option => (
          <option className={s.value} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ArrowDown className={s.arrow} fill={'white'} />
    </div>
  )
}

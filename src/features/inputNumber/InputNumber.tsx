import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input/input'

import s from './InputNumber.module.scss'

type Props = {
  callback: (value: number) => void
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputNumber: FC<Props> = ({ callback, label }, props) => {
  const [value, setValue] = useState(0)

  callback(value)

  const handleDecrease = () => {
    if (value >= 1) {
      setValue(value - 1)
    } else {
      setValue(0)
    }
  }
  const handleIncrease = () => {
    if (value >= 0) {
      setValue(value + 1)
    } else {
      setValue(0)
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.currentTarget.value)
  }

  return (
    <div className={s.wrapper}>
      <Button onClick={handleDecrease}>-</Button>
      <Input
        className={s.input}
        label={label}
        onChange={onChangeHandler}
        type={'number'}
        value={value}
        {...props}
      />
      <Button onClick={handleIncrease}>+</Button>
    </div>
  )
}

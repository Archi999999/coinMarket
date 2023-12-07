import { ChangeEvent, FC, InputHTMLAttributes } from 'react'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

import s from './InputNumber.module.scss'

type Props = {
  label?: string
  setValue: (value: number) => void
  value: number
} & InputHTMLAttributes<HTMLInputElement>

export const InputNumber: FC<Props> = ({ label, setValue, value }, props) => {
  const handleDecrease = () => {
    if (value >= 2) {
      setValue(value - 1)
    } else {
      setValue(1)
    }
  }
  const handleIncrease = () => {
    if (value <= 100) {
      setValue(value + 1)
    } else {
      setValue(1)
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

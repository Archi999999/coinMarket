import { FC, InputHTMLAttributes, Ref, forwardRef } from 'react'

import Search from '@/assets/icons/Search'

import s from './Input.module.scss'

type Props = {
  className?: string
  id?: string
  label?: string
  placeholder?: string
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = forwardRef(
  (
    { className, id, label, placeholder, type = 'text', ...otherProps },
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={`${s.wrapper} ${className}`}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className={`${s.input} ${s[type]}`}
          id={id}
          placeholder={placeholder}
          type={type}
          {...otherProps}
          ref={ref}
        />
        {type === 'search' && <Search className={s.icon} />}
      </div>
    )
  }
)

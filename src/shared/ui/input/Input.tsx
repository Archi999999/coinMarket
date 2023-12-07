import { FC, InputHTMLAttributes, Ref, forwardRef } from 'react'

import Search from '@/assets/icons/Search'

import s from './Input.module.scss'

type Props = {
  className?: string
  label?: string
}

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = forwardRef(
  ({ className, label, type = 'text', ...otherProps }, ref: Ref<HTMLInputElement>) => {
    return (
      <div className={`${s.wrapper} ${className}`}>
        {label && (
          <label className={s.label} htmlFor={label}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            className={`${s.input} ${s[type]}`}
            id={label}
            type={type}
            {...otherProps}
            ref={ref}
          />
          {type === 'search' && <Search className={s.icon} />}
        </div>
      </div>
    )
  }
)

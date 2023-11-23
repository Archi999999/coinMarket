import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './Button.module.scss'

type Props<T extends ElementType = 'button'> = {
  className?: string
  variant?: 'primary' | 'secondary' | 'link'
  as?: T
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props
  return (
    <Component className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''}`} {...rest} />
  )
}

import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './Typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  children: ReactNode
  as?: T
  variant?:
    | 'extra_large'
    | 'large'
    | 'medium'
    | 'small'
    | 'extra_large_bold'
    | 'large_bold'
    | 'medium_bold'
    | 'small_bold'

  className?: string
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'span'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { variant = 'large', className, as: Component = 'span', ...rest } = props
  return <Component className={`${s[variant]} ${className}`} {...rest} />
}

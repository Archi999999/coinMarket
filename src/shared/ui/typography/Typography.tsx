import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string

  variant?:
    | 'extra_large'
    | 'extra_large_bold'
    | 'large'
    | 'large_bold'
    | 'medium'
    | 'medium_bold'
    | 'small'
    | 'small_bold'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'span'>(
  props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
  const { as: Component = 'span', className, variant = 'large', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}

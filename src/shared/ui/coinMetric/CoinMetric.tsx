import { FC } from 'react'

import { Typography } from '@/shared/ui/typography'

import s from './CoinMetric.module.scss'

type Props = {
  className?: string
  formatValue?: string
  name: string
  prefix?: string
  value?: string
}
export const CoinMetric: FC<Props> = ({ className, formatValue, name, prefix, value }) => {
  let formatNumber = formatValue ?? ''

  if (formatValue) {
    const number = +formatNumber

    if (number >= 1e9) {
      // Если число больше или равно миллиарду
      formatNumber = (number / 1e9).toFixed(2) + 'b'
    } else if (number >= 1e6) {
      // Если число больше или равно миллиону
      formatNumber = (number / 1e6).toFixed(2) + 'm'
    } else if (number >= 1e3) {
      // Если число больше или равно тысяче
      formatNumber = (number / 1e3).toFixed(2) + 'k'
    } else {
      formatNumber = number.toFixed(2)
    }
  }

  return (
    <div className={`${s.coinMetric} ${className}`}>
      <Typography variant={'small'}>{name} :</Typography>
      {value && <Typography variant={'small'}>{value}</Typography>}
      {formatValue && (
        <Typography variant={'small'}>
          {prefix ? prefix : ''} {formatNumber}
        </Typography>
      )}
    </div>
  )
}

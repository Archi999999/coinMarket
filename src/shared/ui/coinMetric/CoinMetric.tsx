import { FC } from 'react'

import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './CoinMetric.module.scss'

type Props = {
  className?: string
  formatValue?: null | string
  name: string
  prefix?: string
  value?: string
}
export const CoinMetric: FC<Props> = ({ className, formatValue, name, prefix, value }) => {
  if (formatValue !== undefined) {
    formatValue = abbreviateNumber(formatValue)
  }

  return (
    <div className={`${s.coinMetric} ${className}`}>
      <Typography variant={'small'}>{name} :</Typography>
      {value && <Typography variant={'small'}>{value}</Typography>}
      {formatValue && (
        <Typography variant={'small'}>
          {prefix ? prefix : ''} {formatValue}
        </Typography>
      )}
    </div>
  )
}

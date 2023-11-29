import { FC } from 'react'

import { Typography } from '@/shared/ui/typography'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'

import s from './CoinMetric.module.scss'

type Props = {
  className?: string
  name: string
  prefix?: string
  value: null | string
}
export const CoinMetric: FC<Props> = ({ className, name, prefix, value }) => {
  if (value === null || (value?.length && value.length > 4)) {
    value = abbreviateNumber(value)
  }

  return (
    <div className={`${s.coinMetric} ${className}`}>
      <Typography variant={'small'}>{name} :</Typography>
      <Typography variant={'small'}>
        {prefix ? prefix : ''} {value}
      </Typography>
    </div>
  )
}

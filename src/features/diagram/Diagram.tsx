import { FC, useMemo } from 'react'

import { useGetCoinHistoryQuery } from '@/entities/coin/model/services/coins'
import { Loader } from '@/shared/ui/loader/Loader'
import { abbreviateNumber } from '@/shared/utils/abbreviateNumber'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'

import s from './Diagram.module.scss'

type Props = {
  amountDays: string
  id: string
}

export const Diagram: FC<Props> = ({ amountDays, id }) => {
  const interval = +amountDays > 1 ? 'd1' : 'h1'
  const endDate = useMemo(() => new Date().setMinutes(0, 0, 0).toString(), [])
  const startDate = useMemo(
    () => (+endDate - 86400000 * +amountDays).toString(),
    [amountDays, endDate]
  )
  const {
    data: coinHistory,
    error,
    isLoading,
  } = useGetCoinHistoryQuery({
    end: endDate,
    id,
    interval,
    start: startDate,
  })

  if (isLoading) {
    return <Loader />
  }

  if (error || !coinHistory) {
    return <div>Error: Data not available</div>
  }

  const formattedData = coinHistory.data.map(el => {
    const date = new Date(el.date)
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()
    const hour = date.getHours()

    return {
      date: interval === 'd1' ? `${day}.${month}` : `${hour}:00`,
      priceUsd: el.priceUsd,
    }
  })

  return (
    <div className={s.diagram}>
      <ResponsiveContainer height={'100%'} width={'100%'}>
        <AreaChart data={formattedData}>
          <XAxis className={s.xAxis} dataKey={'date'} />
          <YAxis
            className={s.yAxis}
            domain={['dataMin', 'dataMax']}
            padding={{ bottom: 10, top: 10 }}
            tickFormatter={value => `$ ${abbreviateNumber(value)}`}
          />
          <Tooltip content={<CustomTooltip />} wrapperClassName={s.tooltip} />
          <CartesianGrid stroke={'#020'} strokeDasharray={'5 5'} />
          <Area dataKey={'priceUsd'} fill={'#171817'} stroke={'#82ca9d'} type={'monotone'} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

const CustomTooltip = ({ active, label, payload }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className={s.tooltip}>
        <p>
          {label.includes(':') ? 'time' : 'date'}:{label}
        </p>
        <p>$ {abbreviateNumber(payload[0].value)}</p>
      </div>
    )
  }
}

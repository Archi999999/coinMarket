import { FC } from 'react'

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

export const Diagram: FC<Props> = ({}) => {
  const data = [
    { date: '2022-11-23T00:00:00.000Z', priceUsd: '16485.9187904522945220', time: 1669161600000 },
    { date: '2022-11-24T00:00:00.000Z', priceUsd: '16622.1894904812232011', time: 1669248000000 },
    { date: '2022-11-25T00:00:00.000Z', priceUsd: '16521.7335921461074262', time: 1669334400000 },
    { date: '2022-11-26T00:00:00.000Z', priceUsd: '16595.8634477601480042', time: 1669420800000 },
    { date: '2022-11-27T00:00:00.000Z', priceUsd: '16583.2706419399947885', time: 1669507200000 },
    { date: '2022-11-28T00:00:00.000Z', priceUsd: '16244.4534804249545108', time: 1669593600000 },
    { date: '2022-11-29T00:00:00.000Z', priceUsd: '16426.6885772042469151', time: 1669680000000 },
  ]

  const formattedData = data.map(el => {
    const date = new Date(el.date)
    const month = date.getUTCMonth() + 1
    const day = date.getUTCDate()

    return {
      date: `${day}.${month}`,
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
        <p>date {label}</p>
        <p>$ {abbreviateNumber(payload[0].value)}</p>
      </div>
    )
  }
}

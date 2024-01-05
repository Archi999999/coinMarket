import { FC } from 'react'

import { CoinData } from '@/entities/coin/model/services/coins'
import { CoinMetric } from '@/shared/ui/coinMetric/CoinMetric'
import { Option, Select } from '@/shared/ui/select/Select'

import s from './CoinMetrics.module.scss'

type Props = {
  data: CoinData
  setValueSelect: (value: string) => void
  valueSelect: string
}
export const CoinMetrics: FC<Props> = ({ data, setValueSelect, valueSelect }) => {
  const options: Option[] = [
    {
      label: 'one day',
      value: '1',
    },
    {
      label: 'one week',
      value: '7',
    },
    {
      label: 'one month',
      value: '30',
    },
  ]

  return (
    <div className={s.coinInfo}>
      <div className={s.iconSvgName}>
        <div>
          <img
            alt={'Logo'}
            className={s.logo}
            height={30}
            src={`/logo/${data.symbol.toUpperCase()}.png`}
          />
        </div>
        <div className={s.name}>
          <div>{data.name}</div>
          <div>{data.symbol}</div>
        </div>
      </div>
      <div className={s.coinMetrics}>
        <CoinMetric name={`rank`} value={data.rank} />
        <CoinMetric name={'supply'} value={data.supply} />
        <CoinMetric name={'max supply'} value={data.maxSupply} />
        <CoinMetric name={'market cap'} value={data.marketCapUsd} />
        <CoinMetric name={'price'} prefix={'$'} value={data.priceUsd} />
        <Select currentValue={valueSelect} options={options} setValue={setValueSelect} />
      </div>
    </div>
  )
}

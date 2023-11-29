import { FC } from 'react'

import { CoinMetric } from '@/shared/ui/coinMetric/CoinMetric'
import { Option, Select } from '@/shared/ui/select/Select'

import s from '@/pages/oneCoin/OneCoin.module.scss'

type Props = {
  data: {
    changePercent24Hr: string
    id: string
    marketCapUsd: string
    maxSupply: null | string
    name: string
    priceUsd: string
    rank: string
    supply: string
    symbol: string
    volumeUsd24Hr: string
    vwap24Hr: string
  }
  setValueSelect: (value: string) => void
  valueSelect: string
}
export const CoinMetrics: FC<Props> = ({
  data: { marketCapUsd, maxSupply, name, priceUsd, rank, supply, symbol },
  setValueSelect,
  valueSelect,
}) => {
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
        <div>SVG</div>
        <div className={s.name}>
          <div>{name}</div>
          <div>{symbol}</div>
        </div>
      </div>
      <div className={s.coinMetrics}>
        <CoinMetric name={`rank`} value={rank} />
        <CoinMetric name={'supply'} value={supply} />
        <CoinMetric name={'max supply'} value={maxSupply} />
        <CoinMetric name={'market cap'} value={marketCapUsd} />
        <CoinMetric name={'price'} prefix={'$'} value={priceUsd} />
        <Select currentValue={valueSelect} options={options} setValue={setValueSelect} />
      </div>
    </div>
  )
}

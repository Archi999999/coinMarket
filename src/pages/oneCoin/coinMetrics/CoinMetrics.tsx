import { FC } from 'react'

import { SelectPeriod } from '@/pages/oneCoin/selectPeriod/SelectPeriod'
import { CoinMetric } from '@/shared/ui/coinMetric/CoinMetric'

import s from '@/pages/oneCoin/OneCoin.module.scss'

type Props = {
  data: {
    changePercent24Hr: string
    id: string
    marketCapUsd: string
    maxSupply: string
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
        <CoinMetric formatValue={supply} name={'supply'} />
        <CoinMetric formatValue={maxSupply} name={'max supply'} />
        <CoinMetric formatValue={marketCapUsd} name={'market cap'} />
        <CoinMetric formatValue={priceUsd} name={'price'} prefix={'$'} />
        <SelectPeriod setValue={setValueSelect} value={valueSelect} />
      </div>
    </div>
  )
}

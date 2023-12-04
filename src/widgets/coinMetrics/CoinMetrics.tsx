import { FC } from 'react'

import { useGetCoinQuery } from '@/entities/coin/model/services/coins'
import { CoinMetric } from '@/shared/ui/coinMetric/CoinMetric'
import { Loader } from '@/shared/ui/loader/Loader'
import { Option, Select } from '@/shared/ui/select/Select'

import s from './CoinMetrics.module.scss'

type Props = {
  id: string
  setValueSelect: (value: string) => void
  valueSelect: string
}
export const CoinMetrics: FC<Props> = ({ id, setValueSelect, valueSelect }) => {
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

  const { data, isLoading } = useGetCoinQuery({ id })

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return <div>Error: Data not available</div>
  }

  const coinData = data.data

  return (
    <div className={s.coinInfo}>
      <div className={s.iconSvgName}>
        <div>SVG</div>
        <div className={s.name}>
          <div>{coinData.name}</div>
          <div>{coinData.symbol}</div>
        </div>
      </div>
      <div className={s.coinMetrics}>
        <CoinMetric name={`rank`} value={coinData.rank} />
        <CoinMetric name={'supply'} value={coinData.supply} />
        <CoinMetric name={'max supply'} value={coinData.maxSupply} />
        <CoinMetric name={'market cap'} value={coinData.marketCapUsd} />
        <CoinMetric name={'price'} prefix={'$'} value={coinData.priceUsd} />
        <Select currentValue={valueSelect} options={options} setValue={setValueSelect} />
      </div>
    </div>
  )
}

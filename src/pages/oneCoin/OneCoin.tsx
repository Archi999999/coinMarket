import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CoinMetrics } from '@/pages/oneCoin/coinMetrics/CoinMetrics'
import { Schedule } from '@/pages/oneCoin/schedule/Schedule'
import { Button } from '@/shared/ui/button'

import s from './OneCoin.module.scss'

export const OneCoin = () => {
  const [valueSelect, setValueSelect] = useState('30')

  const navigate = useNavigate()

  const data = {
    changePercent24Hr: '-0.8101417214350335',
    id: 'bitcoin',
    marketCapUsd: '119179791817.6740161068269075',
    maxSupply: '21000000.0000000000000000',
    name: 'Bitcoin',
    priceUsd: '6931.5058555666618359',
    rank: '1',
    supply: '17193925.0000000000000000',
    symbol: 'BTC',
    volumeUsd24Hr: '2928356777.6066665425687196',
    vwap24Hr: '7175.0663247679233209',
  }

  return (
    <div className={s.coinCard}>
      <CoinMetrics data={data} setValueSelect={setValueSelect} valueSelect={valueSelect} />
      <Schedule id={data.id} value={valueSelect} />
      <div className={s.buttons}>
        <Button onClick={() => navigate('/')} variant={'secondary'}>
          Back
        </Button>
        <Button>Buy</Button>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetCoinQuery } from '@/entities/coin/model/services/coins'
import { Diagram } from '@/features/diagram/Diagram'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader/Loader'
import { CoinMetrics } from '@/widgets/coinMetrics/CoinMetrics'

import s from './OneCoin.module.scss'

export const OneCoin = () => {
  const [valueSelect, setValueSelect] = useState('30')
  const navigate = useNavigate()
  const { id } = useParams()

  const { data, isLoading } = useGetCoinQuery({ id: id! })

  if (isLoading) {
    return <Loader />
  }

  if (!data) {
    return <div>Error: Data not available</div>
  }

  const coinData = data.data

  return (
    <div className={s.coinCard}>
      <CoinMetrics data={coinData} setValueSelect={setValueSelect} valueSelect={valueSelect} />
      <Diagram amountDays={valueSelect} id={coinData.id} />
      <div className={s.buttons}>
        <Button onClick={() => navigate('/')} variant={'secondary'}>
          Back
        </Button>
        <Button>Buy</Button>
      </div>
    </div>
  )
}

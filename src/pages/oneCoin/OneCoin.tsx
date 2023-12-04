import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Diagram } from '@/features/diagram/Diagram'
import { Button } from '@/shared/ui/button'
import { Loader } from '@/shared/ui/loader/Loader'
import { CoinMetrics } from '@/widgets/coinMetrics/CoinMetrics'

import s from './OneCoin.module.scss'

export const OneCoin = () => {
  const [valueSelect, setValueSelect] = useState('30')
  const navigate = useNavigate()
  const { id } = useParams()

  if (!id) {
    return <Loader />
  }

  return (
    <div className={s.coinCard}>
      <CoinMetrics id={id} setValueSelect={setValueSelect} valueSelect={valueSelect} />
      <Diagram amountDays={valueSelect} id={id} />
      <div className={s.buttons}>
        <Button onClick={() => navigate('/')} variant={'secondary'}>
          Back
        </Button>
        <Button>Buy</Button>
      </div>
    </div>
  )
}

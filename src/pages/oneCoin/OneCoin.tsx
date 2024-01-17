import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useGetCoinQuery } from '@/entities/coin/model/services/coins'
import { AddCoinModal } from '@/features/addCoinModal/ui/addCoinModal'
import { convertToNeedFormat } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { Diagram } from '@/features/diagram/Diagram'
import { OneCoinContentLoader } from '@/features/loaders/OneCoinContentLoader'
import { Button } from '@/shared/ui/button'
import { CoinMetrics } from '@/widgets/coinMetrics/CoinMetrics'

import s from './OneCoin.module.scss'

export const OneCoin = () => {
  const [showAddCoinModal, setShowAddCoinModal] = useState<boolean>(false)
  const [valueSelect, setValueSelect] = useState('30')
  const navigate = useNavigate()
  const { id } = useParams()

  const { data, isLoading } = useGetCoinQuery({ id: id! })

  if (isLoading) {
    return (
      <div className={s.container}>
        <div className={s.coinCard}>
          <OneCoinContentLoader />
        </div>
      </div>
    )
  }

  if (!data) {
    return <div>Error: Data not available</div>
  }

  const coinData = data.data

  const addCoinToWallet = () => {
    setShowAddCoinModal(true)
  }

  return (
    <>
      {showAddCoinModal && (
        <AddCoinModal
          coin={convertToNeedFormat(coinData)}
          setShowAddCoinModal={setShowAddCoinModal}
          showAddCoinModal={showAddCoinModal}
        />
      )}
      <div className={s.container}>
        <div className={s.coinCard}>
          <CoinMetrics data={coinData} setValueSelect={setValueSelect} valueSelect={valueSelect} />
          <Diagram amountDays={valueSelect} id={coinData.id} />
          <div className={s.buttons}>
            <Button onClick={() => navigate('/')} variant={'secondary'}>
              Back
            </Button>
            <Button onClick={addCoinToWallet}>Buy</Button>
          </div>
        </div>
      </div>
    </>
  )
}

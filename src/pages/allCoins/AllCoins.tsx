import { useEffect, useReducer, useState } from 'react'

import { Sort } from '@/shared/ui/table'
import { CoinData, CoinsTable } from '@/widgets/coinsTable/coins-tabe/CoinsTable'

import s from './AllCons.module.scss'
const data: CoinData[] = [
  {
    changePercent24Hr: '-0.8101417214350335',
    id: 'bitcoin',
    marketCapUsd: '119150835874.4699281625807300',
    maxSupply: '21000000.0000000000000000',
    name: 'Bitcoin',
    priceUsd: '6929.8217756835584756',
    rank: '1',
    supply: '17193925.0000000000000000',
    symbol: 'BTC',
    volumeUsd24Hr: '2927959461.1750323310959460',
    vwap24Hr: '7175.0663247679233209',
  },
  {
    changePercent24Hr: '-0.0999626159535347',
    id: 'ethereum',
    marketCapUsd: '40967739219.6612727047843840',
    maxSupply: null,
    name: 'Ethereum',
    priceUsd: '404.9774667045200896',
    rank: '2',
    supply: '101160540.0000000000000000',
    symbol: 'ETH',
    volumeUsd24Hr: '1026669440.6451482672850841',
    vwap24Hr: '415.3288028454417241',
  },
  {
    changePercent24Hr: '-1.9518258685302665',
    id: 'ripple',
    marketCapUsd: '16517228249.2902868380922380',
    maxSupply: '100000000000.0000000000000000',
    name: 'XRP',
    priceUsd: '0.4202870472643482',
    rank: '3',
    supply: '39299874590.0000000000000000',
    symbol: 'XRP',
    volumeUsd24Hr: '149328134.5032677889393019',
    vwap24Hr: '0.4318239230821224',
  },
  {
    changePercent24Hr: '-1.5016094894459434',
    id: 'bitcoin-cash',
    marketCapUsd: '11902454455.1536127997298894',
    maxSupply: '21000000.0000000000000000',
    name: 'Bitcoin Cash',
    priceUsd: '688.8617162705108413',
    rank: '4',
    supply: '17278438.0000000000000000',
    symbol: 'BCH',
    volumeUsd24Hr: '287075418.5202079328968427',
    vwap24Hr: '711.6276356693412774',
  },
  {
    changePercent24Hr: '-0.2487845516123365',
    id: 'eos',
    marketCapUsd: '6327688685.5053582732768780',
    maxSupply: '1000000000.0000000000000000',
    name: 'EOS',
    priceUsd: '6.9823147841833210',
    rank: '5',
    supply: '906245118.0000000000000000',
    symbol: 'EOS',
    volumeUsd24Hr: '373717579.0872289136334689',
    vwap24Hr: '7.0345139617072947',
  },
  {
    changePercent24Hr: '-3.4735437955390772',
    id: 'stellar',
    marketCapUsd: '4395265468.8039656236913164',
    maxSupply: null,
    name: 'Stellar',
    priceUsd: '0.2341611226032443',
    rank: '6',
    supply: '18770261348.0000000000000000',
    symbol: 'XLM',
    volumeUsd24Hr: '28186508.6814478496347773',
    vwap24Hr: '0.2412082330289685',
  },
  {
    changePercent24Hr: '-1.3117992300270579',
    id: 'litecoin',
    marketCapUsd: '4234484929.6430299360674272',
    maxSupply: '84000000.0000000000000000',
    name: 'Litecoin',
    priceUsd: '73.3479339685586096',
    rank: '7',
    supply: '57731482.0000000000000000',
    symbol: 'LTC',
    volumeUsd24Hr: '226037979.6802283949921417',
    vwap24Hr: '75.1659221835912383',
  },
  {
    changePercent24Hr: '0.0079476596654900',
    id: 'cardano',
    marketCapUsd: '3342664439.1225859377289638',
    maxSupply: '45000000000.0000000000000000',
    name: 'Cardano',
    priceUsd: '0.1289256506716951',
    rank: '8',
    supply: '25927070538.0000000000000000',
    symbol: 'ADA',
    volumeUsd24Hr: '32741914.1355823452856056',
    vwap24Hr: '0.1310244403993645',
  },
  {
    changePercent24Hr: '0.1166673925934855',
    id: 'tether',
    marketCapUsd: '2439361941.9836262753306976',
    maxSupply: null,
    name: 'Tether',
    priceUsd: '1.0009115584940656',
    rank: '9',
    supply: '2437140346.0000000000000000',
    symbol: 'USDT',
    volumeUsd24Hr: '2257075318.3468977492592858',
    vwap24Hr: '1.0089194093830538',
  },
  {
    changePercent24Hr: '-5.2486878154413840',
    id: 'iota',
    marketCapUsd: '2403573545.0265314556170093',
    maxSupply: '2779530283.0000000000000000',
    name: 'IOTA',
    priceUsd: '0.8647409095440071',
    rank: '10',
    supply: '2779530283.0000000000000000',
    symbol: 'MIOTA',
    volumeUsd24Hr: '39603276.8327675426897915',
    vwap24Hr: '0.8988184197561133',
  },
  {
    changePercent24Hr: '-1.4317319488825126',
    id: 'tron',
    marketCapUsd: '1917190870.7283154920500970',
    maxSupply: null,
    name: 'TRON',
    priceUsd: '0.0291596339843186',
    rank: '11',
    supply: '65748111645.0000000000000000',
    symbol: 'TRX',
    volumeUsd24Hr: '97380139.3492488689277134',
    vwap24Hr: '0.0298449568758824',
  },
  {
    changePercent24Hr: '7.9255849247329682',
    id: 'ethereum-classic',
    marketCapUsd: '1872331046.2321777062805653',
    maxSupply: null,
    name: 'Ethereum Classic',
    priceUsd: '18.0749160481439673',
    rank: '12',
    supply: '103587261.0000000000000000',
    symbol: 'ETC',
    volumeUsd24Hr: '271312448.7837505736339966',
    vwap24Hr: '17.7522606149076111',
  },
]

function reducer(
  state: CoinData[],
  action: { payload: { direction: string; key: keyof CoinData }; type: 'SORT' }
) {
  const { direction, key } = action.payload

  switch (action.type) {
    case 'SORT':
      return [...state].sort((a, b) => {
        const valueA = a[key]
        const valueB = b[key]

        if (direction === 'asc') {
          return Number(valueA) - Number(valueB)
        } else if (direction === 'desc') {
          return Number(valueB) - Number(valueA)
        } else {
          return 0
        }
      })

    default:
      return state
  }
}

export const AllCoins = () => {
  const [sort, setSort] = useState<Sort>({ direction: 'asc', key: 'rank' })
  const [state, dispatch] = useReducer(reducer, data)

  useEffect(() => {
    if (sort) {
      dispatch({
        payload: { direction: sort.direction, key: sort.key as keyof CoinData },
        type: 'SORT',
      })
    }
  }, [sort])

  return (
    <section className={s.root}>
      {/*<FilterCoins/>*/}
      {data && <CoinsTable data={state} onSort={setSort} sort={sort} />}
      {/*<Pagination/>*/}
    </section>
  )
}

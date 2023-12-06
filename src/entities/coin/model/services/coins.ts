import { baseAPI } from '@/shared/api/baseAPI'

export const coinsAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getCoin: builder.query<CoinResponse, { id: string }>({
      providesTags: ['Coin'],
      query: ({ id }) => ({
        method: 'GET',
        url: `/assets/${id}`,
      }),
    }),
    getCoinHistory: builder.query<CoinHistoryResponse, CoinHistoryParams>({
      query: ({ end, id, interval, start }) => ({
        method: 'GET',
        params: { end, interval, start },
        url: `assets/${id}/history`,
      }),
    }),
    getCoins: builder.query<CoinsResponse, CoinsParams>({
      providesTags: ['Coins'],
      query: params => ({
        method: 'GET',
        params: params ?? {},
        url: `/assets`,
      }),
    }),
  }),
})

export const { useGetCoinHistoryQuery, useGetCoinQuery, useGetCoinsQuery } = coinsAPI

export type CoinData = {
  changePercent24Hr: null | string
  explorer: string
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

export type CoinResponse = {
  data: CoinData
  timestamp: number
}

export type CoinsResponse = {
  data: CoinData[]
  timestamp: number
}

export type CoinsParams = {
  ids?: string
  limit?: number
  offset?: number
  search?: string
} | void

type CoinHistoryItemWithSupply = {
  circulatingSupply: string
  date: string
  priceUsd: string
  time: number
}

type CoinHistoryItemWithoutSupply = {
  date: string
  priceUsd: string
  time: number
}

type CoinHistoryResponse = {
  data: (CoinHistoryItemWithSupply | CoinHistoryItemWithoutSupply)[]
  timestamp: number
}

export type CoinHistoryParams = {
  end?: string
  id: string
  interval: 'd1' | 'h1' | 'h2' | 'h6' | 'h12' | 'm1' | 'm5' | 'm15' | 'm30'
  start?: string
}

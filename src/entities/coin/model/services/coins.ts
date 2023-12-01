import { baseAPI } from '@/shared/api/baseAPI'

export const coinsAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getCoin: builder.query<CoinData, { id: string }>({
      providesTags: ['Coin'],
      query: ({ id }) => ({
        method: 'GET',
        url: `/assets/${id}`,
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

export const { useGetCoinQuery, useGetCoinsQuery } = coinsAPI

export type CoinData = {
  changePercent24Hr: null | string
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

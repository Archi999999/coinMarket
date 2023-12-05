import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coincap.io/v2',
    headers: {
      'Accept-Encoding': 'gzip, deflate',
      Authorization: '9779258a-55da-4761-bf17-e2f56fcb8722',
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseAPI',
  tagTypes: ['Coins', 'Coin', 'Header'],
})

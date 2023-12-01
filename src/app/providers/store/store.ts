import { coinsReducer } from '@/entities/coin/model/slice/coin.slice'
import { baseAPI } from '@/shared/api/baseAPI'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    coins: coinsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

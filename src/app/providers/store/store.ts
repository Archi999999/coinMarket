import { coinsReducer } from '@/entities/coin/model/slice/coin.slice'
import { walletReducer } from '@/entities/coin/model/slice/wallet.slice'
import { baseAPI } from '@/shared/api/baseAPI'
import { configureStore } from '@reduxjs/toolkit'

let preloadedState
const persistedWalletString = localStorage.getItem('wallet')

if (persistedWalletString) {
  preloadedState = {
    wallet: JSON.parse(persistedWalletString),
  }
}

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),

  preloadedState,
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    coins: coinsReducer,
    wallet: walletReducer,
  },
})
store.subscribe(() => {
  localStorage.setItem('wallet', JSON.stringify(store.getState().wallet))
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

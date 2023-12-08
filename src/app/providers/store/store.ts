import { coinsReducer } from '@/entities/coin/model/slice/coin.slice'
import { portfolioReducer } from '@/entities/coin/model/slice/portfolio.slice'
import { baseAPI } from '@/shared/api/baseAPI'
import { configureStore } from '@reduxjs/toolkit'

let preloadedState
const persistedPortfolioString = localStorage.getItem('portfolio')

if (persistedPortfolioString) {
  preloadedState = {
    portfolio: JSON.parse(persistedPortfolioString),
  }
}

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),

  preloadedState,
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    coins: coinsReducer,
    portfolio: portfolioReducer,
  },
})
store.subscribe(() => {
  localStorage.setItem('portfolio', JSON.stringify(store.getState().portfolio))
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

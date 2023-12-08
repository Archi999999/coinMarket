import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = [] as CoinForModal[]

export const portfolioSlice = createSlice({
  initialState,
  name: 'portfolio',
  reducers: {
    addCoin: (state, action: PayloadAction<{ newCoin: CoinForModal }>) => {
      state.push(action.payload.newCoin)
    },
    removeCoin: (state, action: PayloadAction<{ idCoin: string }>) => {
      return state.filter(el => el.idForModal !== action.payload.idCoin)
    },
  },
})

export const portfolioReducer = portfolioSlice.reducer

export const portfolioActions = portfolioSlice.actions

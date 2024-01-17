import { CoinForModal } from '@/features/addCoinModal/utils/convertToNeedFormat'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = [] as CoinForModal[]

export const walletSlice = createSlice({
  initialState,
  name: 'wallet',
  reducers: {
    addCoin: (state, action: PayloadAction<{ newCoin: CoinForModal }>) => {
      state.push(action.payload.newCoin)
    },
    removeCoin: (state, action: PayloadAction<{ idCoin: string }>) => {
      return state.filter(el => el.idForModal !== action.payload.idCoin)
    },
  },
})

export const walletReducer = walletSlice.reducer

export const walletActions = walletSlice.actions

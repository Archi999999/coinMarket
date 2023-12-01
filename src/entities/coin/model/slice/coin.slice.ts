import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    searchName: '',
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
}

const slice = createSlice({
  initialState,
  name: 'coins',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ newPage: number }>) => {
      state.pagination.currentPage = action.payload.newPage
    },
    setPageSize: (state, action: PayloadAction<{ newPageSize: number }>) => {
      state.pagination.pageSize = action.payload.newPageSize
    },
    setSearchName: (state, action: PayloadAction<{ newSearchName: string }>) => {
      state.filter.searchName = action.payload.newSearchName
    },
  },
})

export const coinsReducer = slice.reducer

export const coinsActions = slice.actions

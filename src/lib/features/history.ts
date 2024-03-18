import { createSlice } from '@reduxjs/toolkit'

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    orders: [],
  },
  reducers: {
    createOrder: (state, action) => {},
    clearHistory: (state) => {},
  },
})

export const { createOrder, clearHistory } = historySlice.actions

export default historySlice.reducer

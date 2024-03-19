import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from './cart'

type HistorySliceState = {
  orders: {
    timestamp: number
    items: CartItem[]
  }[]
}

const initialState: HistorySliceState = {
  orders: [],
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const cartItems = action.payload
      state.orders.push({
        timestamp: new Date().getTime(),
        items: cartItems,
      })
    },
    clearHistory: (state) => {
      state.orders = []
    },
  },
})

export const { createOrder, clearHistory } = historySlice.actions

export default historySlice.reducer

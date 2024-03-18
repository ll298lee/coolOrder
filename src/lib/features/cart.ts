import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
    clearCart: (state) => {},
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

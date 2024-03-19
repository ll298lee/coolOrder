import { createSlice } from '@reduxjs/toolkit'

export type CartItem = {
  count: number
  id: number
  name: string
}

type CartSliceState = {
  items: CartItem[]
}

const initialState: CartSliceState = {
  items: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const cartItemIndex = state.items.findIndex((cartItem) => cartItem.id === item.id)
      if (cartItemIndex > -1) {
        state.items[cartItemIndex].count++
      } else {
        state.items.push({
          count: 1,
          id: item.id,
          name: item.name,
        })
      }
    },
    removeItem: (state, action) => {
      const item = action.payload
      const cartItemIndex = state.items.findIndex((cartItem) => cartItem.id === item.id)
      if (cartItemIndex > -1) {
        state.items[cartItemIndex].count--
        if (state.items[cartItemIndex].count === 0) {
          state.items.splice(cartItemIndex, 1)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

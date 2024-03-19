import { createSlice } from '@reduxjs/toolkit'

export type Dish = {
  id: number
  name: string
  category: string
}

type MenuSliceState = { items: Dish[] }

const initialState: MenuSliceState = {
  items: [
    {
      id: 1,
      name: 'Spring Rolls',
      category: 'Appetizer',
    },
    {
      id: 2,
      name: 'Shrimp Cocktail',
      category: 'Appetizer',
    },
    {
      id: 3,
      name: 'Fries',
      category: 'Appetizer',
    },
    {
      id: 4,
      name: 'Chicken Wings',
      category: 'Appetizer',
    },
    {
      id: 5,
      name: 'Coffee',
      category: 'Drink',
    },
    {
      id: 6,
      name: 'Coke',
      category: 'Drink',
    },
    {
      id: 7,
      name: 'Beer',
      category: 'Drink',
    },
    {
      id: 8,
      name: 'Ice Cream',
      category: 'Dessert',
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      category: 'Dessert',
    },
    {
      id: 10,
      name: 'Crème Brûlée',
      category: 'Dessert',
    },
  ],
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
})

export default menuSlice.reducer

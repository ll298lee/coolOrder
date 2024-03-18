import { configureStore } from '@reduxjs/toolkit'
import cart from './features/cart'
import history from './features/history'
import menu from './features/menu'

export const makeStore = () => {
  return configureStore({
    reducer: {
      menu,
      cart,
      history,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

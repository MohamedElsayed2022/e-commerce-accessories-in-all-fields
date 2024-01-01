import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../RTK/Slices/counterSlice'
import userReducer from './Slices/fromSlice'
import productsSlice from './Slices/productsSlice'
import cartSlice from './Slices/cartSlice'
import showDetails from './Slices/showDetails'
import categorySlice from './Slices/categorySlice'
export const store = configureStore({
  reducer: {
    counter : counterReducer,
    users: userReducer,
    products:productsSlice,
    cart:cartSlice,
    show : showDetails,
    category : categorySlice
  },
})
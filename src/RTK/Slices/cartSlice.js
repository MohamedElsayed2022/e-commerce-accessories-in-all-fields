import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
  cart: [],
}

export const formSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart : (state , action)=>{
      const findedProduct = state.cart.find((cart)=>cart.id ===action.payload.id)
      if(findedProduct){
        findedProduct.quantity+=1
      }else{
        const clone = {...action.payload , quantity : 1}
        state.cart.push(clone)

      }
    },
    deleteCart : (state , action)=>{
      state.cart = state.cart.filter((cart)=>cart.id !== action.payload.id)
    }
  },
 
  
})

// Action creators are generated for each case reducer function
export const { addToCart , deleteCart } = formSlice.actions

export default formSlice.reducer
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  pro:[]
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addToCartCategory : (state , action)=>{
      const findedProduct = state.category.find((category)=>category.id ===action.payload.id)
      if(findedProduct){
        findedProduct.quantity+=1
      }else{
        const clone = {...action.payload , quantity : 1}
        state.category.push(clone)

      }
    },
    deleteCartCategory : (state , action)=>{
      state.category = state.category.filter((category)=>category.id !== action.payload.id)
    }
   
  },
 
  
})

// Action creators are generated for each case reducer function
export const { addToCartCategory , deleteCartCategory } = categorySlice.actions

export default categorySlice.reducer
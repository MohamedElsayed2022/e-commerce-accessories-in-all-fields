import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts', async () => {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = res.json()
      return data
    }
  )

const initialState = {
  products: [],
}

export const formSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(fetchAllProducts.fulfilled ,(state,action)=>{
      state.products = action.payload

    })
  }
  
})

// Action creators are generated for each case reducer function
export const { } = formSlice.actions

export default formSlice.reducer
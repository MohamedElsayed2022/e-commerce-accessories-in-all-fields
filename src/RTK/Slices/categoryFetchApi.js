import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const FetchAllCategory = createAsyncThunk(
    'products/FetchAllCategory', async () => {
      const res = await fetch(`https://dummyjson.com/products`)
      const data = res.json()
      return data
    }
  )

const initialState = {
  category: [],
}

export const formSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(FetchAllCategory.fulfilled ,(state,action)=>{
      state.category = action.payload

    })
  }
  
})

// Action creators are generated for each case reducer function
export const { } = formSlice.actions

export default formSlice.reducer
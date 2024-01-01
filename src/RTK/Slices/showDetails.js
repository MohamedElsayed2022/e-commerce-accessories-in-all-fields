import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  details: 0,
}

export const show = createSlice({
  name: 'showDetails',
  initialState,
  reducers: {
  
  },
 
  
})

// Action creators are generated for each case reducer function
export const {  showDetails } = show.actions

export default show.reducer
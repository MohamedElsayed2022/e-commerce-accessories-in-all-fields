import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addUser : (state , action)=>{
       state.data.push(action.payload)
    },
    deleteUser: (state, action) => {
      const idToDelete = action.payload.id;
      state.data = state.data.filter((user) => user.id !== idToDelete);
  }
  },
})

// Action creators are generated for each case reducer function
export const { addUser , deleteUser} = formSlice.actions

export default formSlice.reducer
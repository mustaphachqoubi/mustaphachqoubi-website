import { createSlice } from '@reduxjs/toolkit' 

const outOfInkBgSlice = createSlice({
  name: 'outOfInkBg',
  initialState: {outOfInkBg: ''},
  reducers: {
    setOutOfInkBg: (state, action) => {
      state.outOfInkBg = action.payload
    }
  }
})

export const { setOutOfInkBg } = outOfInkBgSlice.actions;
export default outOfInkBgSlice

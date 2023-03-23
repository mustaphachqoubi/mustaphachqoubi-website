import {createSlice} from '@reduxjs/toolkit'

const heroBannerHeightSlice = createSlice({
    name: 'heroBannerHeight',
    initialState: {heroBannerHeight: 0},
    reducers: {
        setHeroBannerHeight: (state, action) => {
            state.heroBannerHeight = action.payload
        }
    }
})

export const {setHeroBannerHeight} = heroBannerHeightSlice.actions
export default heroBannerHeightSlice
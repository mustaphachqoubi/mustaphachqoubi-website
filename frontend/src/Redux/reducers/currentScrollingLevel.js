import {createSlice} from '@reduxjs/toolkit'

const currentScrollingLevelSlice = createSlice({
    name: 'currentScrollingLevel',
    initialState: {currentScrollingLevel: 0},
    reducers: {
        setCurrentScrollingLevel: (state, action) => {
            state.currentScrollingLevel = action.payload
        }
    }
})

export const {setCurrentScrollingLevel} = currentScrollingLevelSlice.actions
export default currentScrollingLevelSlice
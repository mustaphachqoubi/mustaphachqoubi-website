import {createSlice} from '@reduxjs/toolkit'

const isStoryLinesDoneSlice = createSlice({
    name: 'isStoryLinesDone',
    initialState: {isStoryLinesDone: false},
    reducers: {
        setIsStoryLinesDone: (state, action) => {
            state.isStoryLinesDone = action.payload
        }
    }
})

export const {setIsStoryLinesDone} = isStoryLinesDoneSlice.actions
export default isStoryLinesDoneSlice
import {configureStore} from '@reduxjs/toolkit'
import { currentScrollingLevelSlice, isStoryLinesDoneSlice } from './reducers'

const store = configureStore({
    reducer:{
        currentScrollingLevel: currentScrollingLevelSlice.reducer,
        isStoryLinesDone: isStoryLinesDoneSlice.reducer,
    }
})

export default store
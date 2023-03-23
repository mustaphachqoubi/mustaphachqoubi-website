import {configureStore} from '@reduxjs/toolkit'
import { currentScrollingLevelSlice, isStoryLinesDoneSlice, heroBannerHeightSlice } from './reducers'

const store = configureStore({
    reducer:{
        currentScrollingLevel: currentScrollingLevelSlice.reducer,
        isStoryLinesDone: isStoryLinesDoneSlice.reducer,
        heroBannerHeight: heroBannerHeightSlice.reducer,
    }
})

export default store
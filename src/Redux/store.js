import {configureStore} from '@reduxjs/toolkit'
import { currentScrollingLevelSlice, heroBannerHeightSlice } from './reducers'

const store = configureStore({
    reducer:{
        currentScrollingLevel: currentScrollingLevelSlice.reducer,
        heroBannerHeight: heroBannerHeightSlice.reducer,
    }
})

export default store
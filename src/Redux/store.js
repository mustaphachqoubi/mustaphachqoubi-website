import {configureStore} from '@reduxjs/toolkit'
import { currentScrollingLevelSlice } from './reducers'

const store = configureStore({
    reducer:{
        currentScrollingLevel: currentScrollingLevelSlice.reducer,
    }
})

export default store
import { configureStore } from "@reduxjs/toolkit";
import {
  currentScrollingLevelSlice,
  heroBannerHeightSlice,
  outOfInkBgSlice,
} from "./reducers";

const store = configureStore({
  reducer: {
    currentScrollingLevel: currentScrollingLevelSlice.reducer,
    heroBannerHeight: heroBannerHeightSlice.reducer,
    outOfInkBg: outOfInkBgSlice.reducer,
  },
});

export default store;

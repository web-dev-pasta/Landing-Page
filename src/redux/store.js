import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../redux/features/data/dataSlice";
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import SampleSlice from "./modules/app";

const store = configureStore({
  reducer: {
    sample: SampleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

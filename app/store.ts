import { configureStore } from "@reduxjs/toolkit";
import vmixReducer from "../features/vmixSlice";

export const store = configureStore({
  reducer: {
    vmix: vmixReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

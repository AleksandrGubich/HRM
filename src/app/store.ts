import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/nav/navSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

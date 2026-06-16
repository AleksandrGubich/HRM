import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../features/nav/navSlice";
import authReducer from "../features/auth/authSlice";
import { coursesApi } from "../features/courses/coursesApi";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    auth: authReducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

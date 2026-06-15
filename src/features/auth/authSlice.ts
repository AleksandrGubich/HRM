import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  role: string;
};

type AuthState = {
  isAuth: boolean;
  user: User | null;
};

const initialState: AuthState = {
  isAuth: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : null,
  // userInfo: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("userinfo", JSON.stringify( action.payload));
      state.userInfo = action.payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.userInfo = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

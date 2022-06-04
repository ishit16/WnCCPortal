import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/api";

const initialState = {
  isAuthenticated: null,
  loading: false,
  profile: {},
};

export const loginAction = createAsyncThunk("auth/loginAction", API.auth.login);

export const logoutAction = createAsyncThunk(
  "auth/getAuthStatusAction",
  API.auth.logout
);

export const getAuthStatusAction = createAsyncThunk(
  "auth/getAuthStatusAction",
  API.auth.authenticate
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [loginAction.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
      console.log("login success");
    },
    [loginAction.pending]: (state) => {
      state.loading = true;
      console.log("loadin");
    },
    [loginAction.rejected]: (state) => {
      state.loading = false;
      console.log("Failed");
    },

    [logoutAction.fulfilled]: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
    [logoutAction.pending]: (state) => {
      state.loading = true;
    },
    [logoutAction.rejected]: (state) => {
      state.loading = false;
    },

    [getAuthStatusAction.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    [getAuthStatusAction.pending]: (state) => {
      state.loading = true;
    },
    [getAuthStatusAction.rejected]: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const selectAuthLoading = (state) => state.auth.loading;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;

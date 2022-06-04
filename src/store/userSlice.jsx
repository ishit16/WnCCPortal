import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import API from "../api/api";

export const getProfileAction = createAsyncThunk(
  "user/getProfileAction",
  API.profile.read
);

export const updateProfileAction = createAsyncThunk(
  "user/updateProfileAction",
  API.profile.update
);

export const deleteProfileAction = createAsyncThunk(
  "user/deleteProfileAction",
  API.profile.delete
);

const userSlice = createSlice({
  name: "user",

  initialState: {
    id: null,
    name: null,
    email: null,
    ldapId: null,
    profilePicture: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProfileAction.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        state.ldapId = payload.ldapId;
        state.profilePicture = payload.profilePicture;
      })

      .addCase(getProfileAction.rejected, (state) => {
        state.loading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.loading = true;
        }
      );
  },
});

export const selectUserProfile = (state) => state.user;
export const selectUserLoading = (state) => state.user.loading;

export default userSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";

export const reducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["settings"],
};

export const persistedReducer = persistReducer(persistConfig, reducer);

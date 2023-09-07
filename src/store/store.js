// store.js

import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Slices/apiSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    // Add other reducers if needed
  },
});

export default store;

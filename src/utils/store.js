// This file sets up the global store for the Redux application using configureStore
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.js";
import searchSlice from "./searchSlice.js";

// configuring redux store with reducers
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});
export default store;

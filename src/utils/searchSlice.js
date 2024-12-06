// This slice manages cached search results, which can improve performance by reducing duplicate API calls.
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {

  },
  reducers:{
    // Reducer function for handling actions in search Slice.
    cacheResults: (state, action) => {
      // state = { ...state, ...action.payload};
      state = Object.assign(state, action.payload);
    }
  }
})
export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;
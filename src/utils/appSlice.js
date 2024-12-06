// This slice manages the application menu's open/close state.
import { createSlice } from  "@reduxjs/toolkit";

const appSlice = createSlice({
  name : "app",
  initialState : {
    isMenuOpen : true,
  }
  ,
  reducers : {
    // Reducer functions for handling actions in the app slice.
    toggleMenu : (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu : (state) => {
      state.isMenuOpen = false
    },
    openMenu : (state) => {
      state.isMenuOpen = true
    }
  }
})

export const {toggleMenu, closeMenu, openMenu} = appSlice.actions;
export default appSlice.reducer
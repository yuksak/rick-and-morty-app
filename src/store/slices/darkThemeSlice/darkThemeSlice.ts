import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { darkMode: boolean } = {
  darkMode: Boolean(localStorage.getItem('darkMode')),
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;

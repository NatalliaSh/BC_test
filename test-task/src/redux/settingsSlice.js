import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workMode: 0, //0-infiniteLoading, 1-pagination
  page: null,
  pages: null,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setWorkMode: (state, action) => {
      state.workMode = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPagesInfo: (state, action) => {
      state.pages = action.payload;
    },
  },
});

export const { setWorkMode, setPage, setPagesInfo } = settingsSlice.actions;

export default settingsSlice.reducer;

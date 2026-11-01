import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    viewGptSearch: false,
  },
  reducers: {
    toggleGptSearchPage:(state) =>{
      state.viewGptSearch = !state.viewGptSearch;
    },
  },
});

export const {toggleGptSearchPage } = gptSlice.actions;
export default gptSlice.reducer;
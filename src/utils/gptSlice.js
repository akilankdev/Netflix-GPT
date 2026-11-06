import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    viewGptSearch: false,
    //To store the gemini recommendations
    recommendations: null,
  },
  reducers: {
    toggleGptSearchPage:(state) =>{
      state.viewGptSearch = !state.viewGptSearch;
    },
    addRecommendations: (state,action) => {
      state.recommendations = action.payload;
    }
  },
});

export const {toggleGptSearchPage,addRecommendations } = gptSlice.actions;
export default gptSlice.reducer;
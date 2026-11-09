import { createSlice } from "@reduxjs/toolkit";


//To store TV shows data
const showsSlice = createSlice({
  name: "shows",
  initialState: {
    ratedShows: null,
    showDetails: null,
    trailerVideo: null,
    similarShows: null,
  },
  reducers: {
    addRatedShows:(state,action) => {
      state.ratedShows = action.payload;
    },
    addTrailerVideo:(state,action) => {
      state.trailerVideo = action.payload;
    },
    addShowDetails:(state,action) => {
      state.showDetails = action.payload;
    },
    addSimilarShows:(state,action) => {
      state.similarShows = action.payload;
    },
  },
});

export const {addRatedShows,addTrailerVideo,addShowDetails,addSimilarShows} = showsSlice.actions;
export default showsSlice.reducer;
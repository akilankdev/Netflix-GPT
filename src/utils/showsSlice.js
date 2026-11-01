import { createSlice } from "@reduxjs/toolkit";


//To store TV shows data
const showsSlice = createSlice({
  name: "shows",
  initialState: {
    ratedShows: null,
    brbaShowDetails: null,
    trailerVideo: null,
  },
  reducers: {
    addRatedShows:(state,action) => {
      state.ratedShows = action.payload;
    },
    addTrailerVideo:(state,action) => {
      state.trailerVideo = action.payload;
    },
    addBrbaShowDetails:(state,action) => {
      state.brbaShowDetails = action.payload;
    }
  },
});

export const {addRatedShows,addTrailerVideo,addBrbaShowDetails} = showsSlice.actions;
export default showsSlice.reducer;
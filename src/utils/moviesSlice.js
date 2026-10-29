import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    ratedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state,action)=> {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state,action) => {
      state.trailerVideo = action.payload;
    },
    addRatedMovies: (state,action) => {
      state.ratedMovies = action.payload;
    }
  }
});

export const { addNowPlayingMovies,addTrailerVideo,addRatedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
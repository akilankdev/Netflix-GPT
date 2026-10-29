import { createSlice } from "@reduxjs/toolkit";

//To store TV shows data
const showsSlice = createSlice({
  name: "shows",
  initialState: {
    ratedShows: null,
  },
  reducers: {
    addRatedShows:(state,action) => {
      state.ratedShows = action.payload;
    },
  },
});

export const {addRatedShows} = showsSlice.actions;
export default showsSlice.reducer;
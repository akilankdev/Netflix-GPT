import { createSlice } from "@reduxjs/toolkit";

const userConfigSlice = createSlice({
  name: "userConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state,action) => {
      state.lang = action.payload;
    },
  },
});

export const {changeLanguage} = userConfigSlice.actions;
export default userConfigSlice.reducer;
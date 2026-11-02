import { createSlice } from "@reduxjs/toolkit";

const userConfigSlice = createSlice({
  name: "userConfig",
  initialState: {
    langValue: "en",
  },
  reducers: {
    changeLanguage: (state,action) => {
      state.langValue = action.payload;
    },
  },
});

export const {changeLanguage} = userConfigSlice.actions;
export default userConfigSlice.reducer;
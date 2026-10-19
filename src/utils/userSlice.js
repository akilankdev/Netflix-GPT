import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    //After login or Signup,this action dispatches
    addUser: (state,action) => {
      //After return,the initialState will become action.payload
      return action.payload;
    },
    //Signout or deleting a user
    removeUser: (state,action) => {
      return null;
    },
  },
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;

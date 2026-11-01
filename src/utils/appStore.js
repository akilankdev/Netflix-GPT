import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import showsReducer from './showsSlice';
import gptReducer from './gptSlice';
const appStore = configureStore({
  reducer:{
    user: userReducer,
    movies: moviesReducer,
    shows: showsReducer,
    gpt: gptReducer,
  }
});

export default appStore;
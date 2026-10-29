import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import showsReducer from './showsSlice';
const appStore = configureStore({
  reducer:{
    user: userReducer,
    movies: moviesReducer,
    shows: showsReducer,
  }
});

export default appStore;
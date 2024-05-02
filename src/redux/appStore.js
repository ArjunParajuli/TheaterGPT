import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import aiReducer from './aiSlice';
import langReducer from './langSlice';

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        ai: aiReducer,
        lang: langReducer,
    },
})

export default appStore;
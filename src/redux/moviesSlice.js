import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieTrailer: null,
        eachMovieDetails: null,
        showTrailerMovieDetails: false,
    },
    reducers:{
        toggleShowTrailerMovieDetails:  (state, action)=>{
            state.showTrailerMovieDetails = action.payload;
        },
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload
        },
        addMovieTrailer: (state, action) =>{
            state.movieTrailer = action.payload
        },
        addEachMovieDetails: (state, action) =>{
            state.eachMovieDetails = action.payload
        },
    }
})

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addEachMovieDetails, toggleShowTrailerMovieDetails} = moviesSlice.actions;
export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name: 'ai',
    initialState: {
        aiSearchSelected: false,
        recommendedMovieNames: null,
        recommendedMovieDetails: null,
    },
    reducers: {
        toggleAISearchSelected: (state) =>{
            state.aiSearchSelected = !state.aiSearchSelected;
        },
        addRecommendedMovies: (state, action) =>{
            const {movieNames, movieDetails} = action.payload;
            state.recommendedMovieNames = movieNames;
            state.recommendedMovieDetails = movieDetails;
        }
    }
})

export const { toggleAISearchSelected, addRecommendedMovies } = aiSlice.actions;
export default aiSlice.reducer;
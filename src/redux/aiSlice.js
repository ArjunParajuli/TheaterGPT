import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name: 'ai',
    initialState: {
        showAISearch: false,  // initially don't show 
    },
    reducers: {
        toggleAISearchView: (state)=>{  // used to show and hide gptSearch view
            state.showAISearch = !state.showAISearch;
        }
    }
})

export const { toggleAISearchView } = aiSlice.actions;
export default aiSlice.reducer;
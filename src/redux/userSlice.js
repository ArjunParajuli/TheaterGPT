import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,  // initially no user
    reducers:{
        addUser: (state, action) =>{
            return action.payload;  // after user signs in, store the passed user data inside our state
        },
        removeUser: (state, action) =>{
            return null;  // after user signs out, remove user data from state
        },
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:"user",
    initialState:{
        username:""
    },
    reducers:{
        login(state,action){
            state.username = action.payload
        },
    },

})

export const {login} = userSlice.actions
export default userSlice.reducer
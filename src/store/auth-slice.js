import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth:false,
    user:null,
    email:''
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        setAuth:(state,action)=>
        {
            const user = action.payload;
            if(user===null)
                state.isAuth = false
            else
                state.isAuth = true
            state.user = user;
        },
        setEmail:(state,action)=>
        {
            const email = action.payload;
            state.email = email;
        }
    }
})

export const {setAuth,setEmail} = authSlice.actions;
export default authSlice.reducer;
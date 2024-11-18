import {createSlice } from "@reduxjs/toolkit"

const intialState ={
    user:null,
    isAdmin:false,
    loader:true,
}

const authSlice =createSlice({
    name:"auth",
    intialState,
    reducers:{
        userExits:(state,action)=>{
            state.user=action.payload;
            state.loader=false;
        },
        userNotExits:(state)=>{
            state.user=null;
            state.loader=false;
        },
    }
});

export default authSlice.reducer
export const { userExists, userNotExists } = authSlice.actions
 import { createSlice } from "@reduxjs/toolkit";

 const initalState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
 };

 const autherSlice = createSlice({
    name: 'auth',
    initalState,
    reducers: {},
 });

//  export const {} = authSlic.actions;
 export default autherSlice.reducer;
 
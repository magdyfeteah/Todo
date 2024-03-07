import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {isDark:false },
  reducers: {
   getDark(state,action){
state.isDark = !state.isDark
   }
  
  }
});

export const uiActions = uiSlice.actions
export default uiSlice
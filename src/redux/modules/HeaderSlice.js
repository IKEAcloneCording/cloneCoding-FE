import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
  name: "sideSign",
  initialState:{isOpen:false,},
  reducers: {
    sideOpen: (state, action) => {
      // console.log(state.isOpen)
      // return {isOpen : state.isOpen};
      state.isOpen = action.payload;
    },
  },
  
});

export const { sideOpen } = HeaderSlice.actions;
export default HeaderSlice.reducer;
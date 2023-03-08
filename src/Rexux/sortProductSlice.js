import { createSlice } from "@reduxjs/toolkit";
import { plants } from "./../data";

const initialState = plants;

const sortProductSlice = createSlice({
  name: "sortProduct",
  initialState,
  reducers: {
    sortProduct(state, action) {
      if (action.payload === "up" || action.payload === "down") {
        state = state.sort((a, b) => {
          if (action.payload === "up") {
            return b.price - a.price;
          }
          if (action.payload === "down") {
            return a.price - b.price;
          }
        });
      }
      // if (action.payload === "bestseller") {
      //   return (state = state.filter((item) => item.bestseller === true));
      // }
      // if (action.payload === "new") {
      //   return (state = state.filter((item) => item.new === true));
      // }
      
    },
  },
});

export const { sortProduct, sortProduct2 } = sortProductSlice.actions;
export default sortProductSlice.reducer;

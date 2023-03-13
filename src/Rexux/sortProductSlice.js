import { createSlice } from "@reduxjs/toolkit";
import { plants, pots } from "./../data";

const initialState = {
  plants: plants,
  pots: pots
};

const sortProductSlice = createSlice({
  name: "sortProduct",
  initialState,
  reducers: {
    sortProduct(state, action) {
      if (action.payload === "up" || action.payload === "down") {
        state.plants = state.plants.sort((a, b) => {
          if (action.payload === "up") {
            return b.price - a.price;
          }
          if (action.payload === "down") {
            return a.price - b.price;
          }
        });
      }
      if (action.payload === "up" || action.payload === "down") {
        state.pots = state.pots.sort((a, b) => {
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

export const { sortProduct } = sortProductSlice.actions;
export default sortProductSlice.reducer;

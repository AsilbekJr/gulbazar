import { createSlice } from "@reduxjs/toolkit";
import { plants, pots } from "./../data";

const initialState = {
  plants: plants,
  pots: pots,
  cart:[]
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
    },
    addToCart(state, action){
     let findSomeIndex  = state.cart.findIndex((item) => item.id === action.payload.id)
     if(findSomeIndex >= 0 ){
      state.cart[findSomeIndex].quantity +=1;
     }
     else{
      state.cart.push(action.payload)
     }
    }
  },
});

export const { sortProduct, addToCart } = sortProductSlice.actions;
export default sortProductSlice.reducer;

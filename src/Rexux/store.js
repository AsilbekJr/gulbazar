import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './sortProductSlice';



export const store = configureStore({
    reducer:{
        sortProduct:sortReducer,
    }
})
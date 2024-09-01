import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slicer/bookingCartSlicer";



export const store = configureStore({
    reducer: {
        bookingCart: cartReducer
    }
});
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

// Global Store
export const store = configureStore({
    reducer: {
        cartState: cartReducer
    }
});
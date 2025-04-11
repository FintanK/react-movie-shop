const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: []
    },
    reducers: {
        add(state, action) {
            const updatedCartList = state.cartList.concat(action.payload);
            return { ...state, cartList: updatedCartList };
        },
        remove(state, action) {
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return { ...state, cartList: updatedCartList };
        },
        emptyCart(state) {
            return { ...state, cartList: [] }
        }
    }
});

export const { add, remove, emptyCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
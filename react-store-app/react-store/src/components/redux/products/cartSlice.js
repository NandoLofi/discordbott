import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
}
export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        getCart: (state, action) => {
            state.cartItems = action.payload
        },
    }
})

export const cartActions = cartSlice.actions

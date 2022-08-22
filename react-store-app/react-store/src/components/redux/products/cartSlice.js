import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        getCart: (state, action) => {
            state.cartItems = action.payload
        },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice
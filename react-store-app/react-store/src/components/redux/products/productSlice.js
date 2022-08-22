import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product: [],
    productDetail: []
}
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        getProduct: (state, action) => {
            state.product = action.payload
        },

    }
})

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState: initialState,
    reducers: {
        getProductDetail: (state, action) =>{
        state.productDetail = action.payload
        },
    }
})

export const productActions = productSlice.actions
export const productDetailActions = productDetailSlice.actions
export default [productDetailSlice.reducer, productSlice.reducer]

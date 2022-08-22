import * as actionTypes from '../actions/productActions'
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product: []
}
const createSlice = createSlice({
    product: "product",
    initialState: initialState,
    reducers: {
        getProduct: (state, action) => {
            state.actionTypes.getProducts
        },
        getProductDetail: (state, action) =>{
            state.actionTypes.getProductDetails
        }
    }
})
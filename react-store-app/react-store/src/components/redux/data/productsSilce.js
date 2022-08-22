import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const createSlice = createSlice()
import axios from "axios";
import { act } from "react-dom/test-utils";

const initialState = {
    loading: false,
    products:[],
    error: ''
}

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", ()=>{
    axios.get("https://lofi-store.herokuapp.com/products")
    .then(response => response)

})

const productsSlice = createSlice({
    name: productData,
    initialState: initialState,
    extraReducers: builder=> {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})
export default productsSlice.reducer 
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productSlice , productDetailSlice } from './products/productSlice'
import { cartSlice } from './products/cartSlice'
import * as productReducers from './data/productsSilce'

export const allReducers = combineReducers({
    product: productSlice,
    productDetail: productDetailSlice,
    cart: cartSlice,
    productData: productReducers
})


 const store = configureStore({
    reducer: allReducers
 });

export default store;
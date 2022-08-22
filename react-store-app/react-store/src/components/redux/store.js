import { configureStore } from "@reduxjs/toolkit";
import { product , productDetail } from './products/productSlice'
import { cart } from './products/cartSlice'
import * as productReducers from './data/productsSilce'




 const store = configureStore({
    reducer: { 
       product: product,
       productDetail: productDetail,
       cart: cart,
       productData: productReducers
    }
 });

export default store;
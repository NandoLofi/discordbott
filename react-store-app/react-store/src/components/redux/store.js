import { configureStore } from "@reduxjs/toolkit";
import { product , productDetail } from './products/productSlice'
import { cart } from './products/cartSlice'




 const store = configureStore({
    reducer: { 
       product: product,
       productDetail: productDetail,
       cart: cart
    }
 });

export default store;
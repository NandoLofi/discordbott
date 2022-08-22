import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducers"
import { getProductDetailsReducer, getProductReducer} from "./reducers/productReducers"




 const store = configureStore({
    reducer: { 
        getProducts : getProductReducer,
        cart: cartReducer,
        getProductDetailsReducer: getProductDetailsReducer,
    }
 });

export default store;
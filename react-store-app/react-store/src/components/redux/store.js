import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducers"
import { getProductDetailsReducer, getProductReducer} from "./reducers/productReducers"

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetailsReducer: getProductDetailsReducer
})

 const store = configureStore({
    reducer: {reducer},
 })

export default store;
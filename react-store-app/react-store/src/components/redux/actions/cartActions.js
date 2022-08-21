import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`https://lofi-store.herokuapp.com/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imgUrl: data.imgUrl,
            price: data.price,
            InStock: data.InStock,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify())
}
export const removeFromCart = ()=> (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}
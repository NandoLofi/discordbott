import React from 'react'
import CartItem from '../components/CartItem'
import "./CartScreen.css"
export default function CartScreen() {
  return (
    <div className='cartscreen'>
    <div className='cartscreen__left'>
      <h2> Shopping Cart</h2>

      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
    </div>
    <div className='cartscreen__right'>
      <div className="cartscreen__info">
        <p>Subtotal(0) items </p>
        <p>$500</p>
      </div>
      <div>
        <button> Proceed to Checkout </button>
      </div>
    </div>
    </div>
  )
}

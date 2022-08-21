import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div className='product'>
        <img src='https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black.2.png?v=1637980017"' alt="product 1"/>
        <div className="product__info">
            <p className='info__name'>Product 1</p>
            <p className='info__description'>
            this that and the other of others within?
            </p>
            <p className='info__price'>$500</p>
            <Link to={`/product/${111}`}className='info__button'>
                View
            </Link>
        </div>
    </div>
  )
}

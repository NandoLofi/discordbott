import React from 'react'
import "./ProductScreen.css"


export default function ProductScreen() {
  return (
    <div className='productscreen'>
      <div className="productscreen__left">
        <div className='left__image'>
          <img src='https://cdn.shopify.com/s/files/1/0588/8075/3851/products/black.2.png?v=1637980017"' alt='product'/>
        </div>
        <div className="left__info">
          <p className='left__name'>Product 1</p>
          <p>Proce:$500</p>
          <p>Description:</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className='right__info'>
          <p>
            Price: <span> $500</span>
          </p>
          <p>
            Status <span>In Stock</span>
          </p>
          <p>
            Qty
            
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add To Cart</button>
          </p>
        </div>
      </div>  
    </div>
  )
}

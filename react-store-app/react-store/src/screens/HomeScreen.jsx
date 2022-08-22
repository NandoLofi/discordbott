import React from 'react'
import "./HomeScreen.css"
import Product from '../components/Product'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts, productsSlice } from '../components/redux/data/productsSilce'



export default function HomeScreen() {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productData)
  

  useEffect(()=> {
    dispatch(fetchProducts())

  }, [])


 
  return (
    <div className='homescreen'>
        <h2 className='homescreen__title'>Latest Products</h2>
        <div className='homescreen__products'>
        <div> {productData}</div>
        {/* {getProducts.map((products)=> 
        <Product key={products._id } productId={products._id} 
        name={products.name} price={products.price} description={products.description}
        imageUrl={products.imageUrl}
        />
        )} */}
        </div>
    </div>
  )
}


import React from 'react'
import "./HomeScreen.css"
import Product from '../components/Product'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts as listProducts} from "../components/redux/actions/productActions"



export default function HomeScreen() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.reducer.getProducts )
  const products  = getProducts

  useEffect(()=> {
    dispatch(listProducts())

  }, [dispatch])


  return (
    <div className='homescreen'>
        <h2 className='homescreen__title'>Latest Products</h2>
        <div className='homescreen__products'>
        {products.map((product)=> 
        <Product key={product._id } productId={product._id} 
        name={product.name} price={product.price} description={product.description}
        imageUrl={product.imageUrl}
        />
        )}
        </div>
    </div>
  )
}

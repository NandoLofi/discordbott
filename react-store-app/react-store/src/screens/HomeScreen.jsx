import React from 'react'
import "./HomeScreen.css"
import Product from '../components/Product'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts as listProducts} from "../components/redux/actions/productActions"



export default function HomeScreen() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.reducer.getProducts.products.data )
  const products  = getProducts

  useEffect(()=> {
    dispatch(listProducts())

  }, [dispatch])

  console.log(products)
  return (
    <div className='homescreen'>
        <h2 className='homescreen__title'>Latest Products</h2>
        <div className='homescreen__products'>
        {getProducts.map((products)=> 
        <Product key={products._id } productId={products._id} 
        name={products.name} price={products.price} description={products.description}
        imageUrl={products.imageUrl}
        />
        )}
        </div>
    </div>
  )
}


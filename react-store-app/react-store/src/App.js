import React from "react"
import "./App.css"
import { Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import { useState } from "react"

import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import Backdrop from "./components/Backdrop"
import SideDrawer from "./components/SideDrawer"

function App() {
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <>
      <Navbar click={()=> setSideToggle(true)}/>
      <Backdrop show={sideToggle} click={()=> setSideToggle(false)}/>
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
      <main>
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/product/:id/" element={<ProductScreen/>} />
        <Route path="/cart" element={<CartScreen/>} />
      </Routes>
      </main>
    </>
  
  );
}

export default App;

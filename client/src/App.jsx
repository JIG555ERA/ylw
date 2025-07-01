import { useState } from 'react'
import { MasterPage } from './components/MasterPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage/homePageComponents/HomePage'
import { CategoryPage } from './components/homePage/homePageComponents/CategoryPage/CategoryPage'
import ProductDisplayPage from './components/homePage/productDisplayPage/ProductDisplayPage'
import LikePage from './components/homePage/homePageComponents/likePage/LikePage'
import CartPage from './components/homePage/homePageComponents/cartPage/CartPage'
// import './App.css'

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/category' element={<CategoryPage />} /> 
        <Route path='/product' element={<ProductDisplayPage />} /> 
        <Route path="/liked" element={<LikePage />} />
        <Route path="/cart" element={<CartPage />} />
     </Routes>
    </>
  )
}

export default App

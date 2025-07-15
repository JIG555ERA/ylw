import { useState } from 'react'
import { MasterPage } from './components/MasterPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage/homePageComponents/HomePage'
import { CategoryPage } from './components/homePage/homePageComponents/CategoryPage/CategoryPage'
import ProductDisplayPage from './components/homePage/productDisplayPage/ProductDisplayPage'
import LikePage from './components/homePage/homePageComponents/likePage/LikePage'
import CartPage from './components/homePage/homePageComponents/cartPage/CartPage'
import ProductPage from './components/homePage/homePageComponents/productPage/ProductPage'
import AuthSignUP from './globalComponents/auth/AuthSignUP'
import AuthLogIN from './globalComponents/auth/AuthLogIN'
// import './App.css'

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/categories' element={<CategoryPage />} /> 
        {/* <Route path='/product' element={<ProductDisplayPage />} />  */}
        <Route path="/liked" element={<LikePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path='/auth/signup' element={<AuthSignUP />} />
        <Route path='/auth/login' element={<AuthLogIN />} />
     </Routes>
    </>
  )
}

export default App

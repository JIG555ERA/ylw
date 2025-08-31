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
import Publications from './components/publications/Publications'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaymentPage from './components/paymentPage/PaymentPage'
import OrderConfirmation from './components/orderConfirmation/OrderConfirmation'
import NotFound from './globalComponents/notFound/NotFound'

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/categories' element={<CategoryPage />} /> 
        <Route path="/liked" element={<LikePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/publications" element={<Publications />} />
        <Route path='/auth/signup' element={<AuthSignUP />} />
        <Route path='/auth/login' element={<AuthLogIN />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/order' element={<OrderConfirmation />} />
        <Route path='/*' element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App

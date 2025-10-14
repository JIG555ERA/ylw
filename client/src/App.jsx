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
import CustomCursor from './globalComponents/CustomCursor'
import Cart from '../src/components/homePage/homePageComponents/cartPage/NewCartPage'
import { CartProvider } from './globalComponents/CartContext'
import SignUp  from './globalComponents/auth/SignUP'
import TermsAndConditions from './components/legalities/TermsAndConditions'
import PrivacyPolicy from './components/legalities/PrivacyPolicy'
import RefundAndCancellationPolicy from './components/legalities/RefundAndCancellationPolicy'
import ReturnPolicy from './components/legalities/ReturnPolicy'
import ShippingPolicy from './components/legalities/ShippingPolicy'
import NotFound02 from './globalComponents/notFound/NotFound02'
import TechnicalError from './globalComponents/notFound/TechnicalError'

function App() {
  return (
    <>
     {/* <CustomCursor /> */}
     <CartProvider >
      <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/categories' element={<CategoryPage />} /> 
          <Route path="/liked" element={<LikePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/publications" element={<Publications />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/auth/login' element={<AuthLogIN />} />
          {/* <Route path='/payment' element={<PaymentPage />} /> */}
          <Route path='/order' element={<OrderConfirmation />} />
          <Route path='/termsAndConditions' element={<TermsAndConditions />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/refundAndCancellationPolicy' element={<RefundAndCancellationPolicy />} />
          <Route path='/returnPolicy' element={<ReturnPolicy />} />
          <Route path='/shippingPolicy' element={<ShippingPolicy />} />
          <Route path='/*' element={<NotFound02 />} />
          <Route path='/tech-error' element={<TechnicalError />} />
      </Routes>
    </CartProvider>
    </>
  )
}

export default App

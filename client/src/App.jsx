import { useState } from 'react'
import { MasterPage } from './components/MasterPage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage/homePageComponents/HomePage'
import { CategoryPage } from './components/homePage/homePageComponents/CategoryPage/CategoryPage'
import ProductDisplayPage from './components/homePage/productDisplayPage/ProductDisplayPage'
// import './App.css'

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/category' element={<CategoryPage />} /> 
        <Route path='/product' element={<ProductDisplayPage />} /> 
     </Routes>
    </>
  )
}

export default App

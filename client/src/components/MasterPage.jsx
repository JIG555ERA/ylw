import React from 'react'
import { TopSection } from './homePage/homePageComponents/topSection/topSection'
import { MidSection } from './homePage/homePageComponents/midSection/midSection'
import { CategoryPage } from './homePage/homePageComponents/CategoryPage/CategoryPage'
import ProductDisplayPage from './homePage/productDisplayPage/ProductDisplayPage'

export const MasterPage = () => {
  return (
    <div
      className="
        pt-0 mt-0 box-border
        mx-4
        sm:mx-10
        xl:mx-[120px]
        2xl:mx-[160px]
      "
    >
      <TopSection />
      <MidSection />
      {/* <CategoryPage /> */}
      {/* <ProductDisplayPage /> */}
    </div>
  )
}

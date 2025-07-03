import React from 'react'
import { Navbar } from './navBar/navbar'
import Carousel01 from './carousel/Carousel'

export const TopSection = () => {
  return (
    <div
      className="pt-0 mt-0 flex justify-center box-border bg-[#F9F9F9]"
    >
      <Navbar active='Home'/>
      <Carousel01 />

    </div>
  )
}

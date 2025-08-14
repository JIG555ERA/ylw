import React from 'react'
import { Navbar } from './navBar/navbar'
import Carousel01 from './carousel/Carousel'
import Carousel02 from './carousel/Carousel02'
import bookStoreLogo from '../../../../assets/logos/bookStoreLogo.svg'

export const TopSection = () => {
  return (
    <div className="pt-0 mt-0 flex flex-col items-center box-border bg-[#F9F9F9]">
      {/* Mobile-only logo */}
      <a href="/" className="block lg:hidden w-full py-4">
        <div className="flex justify-center items-center">
          <img
            src={bookStoreLogo}
            alt="Book Store Logo"
            className="h-[72px] w-auto" // Adjust size as needed
          />
        </div>
      </a>

      {/* These stay visible on all screen sizes unless you add visibility classes */}
      <Navbar active="Home" />
      <Carousel02 />
    </div>


  )
}

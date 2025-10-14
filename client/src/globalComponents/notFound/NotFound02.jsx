import React from 'react'
import { Navbar } from '../../components/homePage/homePageComponents/topSection/navBar/navbar'
import PhoneNavBar from '../../components/homePage/homePageComponents/topSection/navBar/PhoneNavBar'
import cat_plant from '../../assets/backgroundImages/optimized_cat_plant.png'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'

const NotFound02 = () => {
    return (
        <div
        className='w-full h-screen flex flex-col justify-center items-center font-[Poppins]'>
          <Navbar />
          {/* Mobile-only logo */}
                <a href="/" className="block lg:hidden w-full py-4 absolute top-6">
                  <div className="flex justify-center items-center">
                    <img
                      src={bookStoreLogo}
                      alt="Book Store Logo"
                      className="h-[72px] w-auto" // Adjust size as needed
                    />
                  </div>
                </a>
          <img src={cat_plant} alt="" className='h-[160px] md:h-[280px] ' />
          <h1 className='md:text-[42px] text-3xl font-bold mt-12 text-center bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-transparent bg-clip-text'>404<br /> Story Interrupted</h1>
          <p className='text-[24px] mt-4 text-[#7C7C7C] font-medium'>The page you’re looking for is currently lost.</p>
          <PhoneNavBar />
        </div>
    )
}

export default NotFound02

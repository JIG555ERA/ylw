import React from 'react'
import Navbar from '../../components/homePage/homePageComponents/topSection/navBar/navbar'
import PhoneNavBar from '../../components/homePage/homePageComponents/topSection/navBar/PhoneNavBar'
import cat_plant from '../../assets/backgroundImages/optimized_cat_plant.png'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'

const TechnicalError = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center font-[Poppins]'>
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
            {/* <p className='text-lg mt-4 text-center'>
                Oops! Something went wrong. <br />
                We’re working to get everything back online.
            </p> */}
            <h1 className='md:text-[42px] text-3xl font-bold mt-[20px] text-center bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-transparent bg-clip-text'>500</h1>
            <p className='md:text-[42px] text-3xl mt-[0px] text-center font-semibold bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-transparent bg-clip-text'>
                Page Paused <br /> 
            </p>
            <p className='text-[24px] mt-[40px] text-center text-[#7C7C7C] font-medium'>Our Shelves are being updated</p>
            <PhoneNavBar />
        </div>
    )
}

export default TechnicalError

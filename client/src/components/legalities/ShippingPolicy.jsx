import React, { useState } from 'react'
import Navbar from '../homePage/homePageComponents/topSection/navBar/navbar'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'
import PhoneNavBar from '../homePage/homePageComponents/topSection/navBar/PhoneNavBar';

const ShippingPolicy = () => {

    const [ isChecked, setIsChecked ] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className='w-full min-h-screen h-auto bg-gradient-to-br from-blue-100 via-white to-purple-100 font-[Poppins]'>
            <Navbar />
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
            <div
            className='w-full mb-[80px] h-auto flex flex-col 2xl:px-[120px] lg:px-[80px] md:px-[40px] px-[16px] items-center md:pt-[100px]'>
                <h2 className="md:text-[54px] text-[32px] font-bold my-4 ">Shipping Policy</h2>

                <section className="max-w-4xl mx-auto p-6">
                    <div id="return-policy" className="bg-white p-6 rounded-lg shadow mb-6">
                        {/* <h2 className="text-2xl font-bold mb-4 underline">Shipping Policy</h2> */}
                            <p className="list-disc pl-6 mt-2 space-y-1">
                                The orders for the user are shipped through registered domestic courier companies and/or speed post
                                only. Orders are shipped within <b>1 days</b> from the date of the order and/or payment or as per the delivery
                                date agreed at the time of order confirmation and delivering of the shipment, subject to courier company /
                                post office norms. Platform Owner shall not be liable for any delay in delivery by the courier company /
                                postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of
                                purchase. Delivery of our services will be confirmed on your email ID as specified at the time of
                                registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be),
                                the same is not refundable.
                            </p>
                    </div>
                </section>
                {/* <div className='fixed bottom-0 w-full h-[80px] flex justify-center items-center bg-[#FFFFFF] '>
                    <input 
                    className={`md:w-5 md:h-5 w-4 h-4 mr-2 border-2 rounded-full ${isChecked ? 'border-blue-500' : 'border-gray-400'}`}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    type="checkbox" />
                    <p className='md:text-[16px] text-[14px] font-semibold'> I agree to the above Return Policy</p>
                </div> */}
            </div>
            <PhoneNavBar />
        </div>
    )
}

export default ShippingPolicy

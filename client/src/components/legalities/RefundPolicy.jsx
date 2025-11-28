import React, { useState } from 'react'
import Navbar from '../homePage/homePageComponents/topSection/navBar/navbar'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'
import PhoneNavBar from '../homePage/homePageComponents/topSection/navBar/PhoneNavBar';

const RefundPolicy = () => {

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
            className='w-full h-auto mb-[80px] flex flex-col 2xl:px-[120px] lg:px-[80px] md:px-[40px] px-[16px] items-center md:pt-[100px]'>
                <h2 className="md:text-[54px] text-[32px] font-bold my-4 ">Refund Policy</h2>

                <section className="max-w-4xl mx-auto p-6">
                <div id="refund-cancellation-policy" className="bg-white p-6 rounded-lg shadow mb-6">
                    {/* <h2 className="text-2xl font-bold mb-4 underline">Refund and Cancellation Policy</h2> */}
                    <p className='pb-[12px]'>
                        This cancellation policy outlines about how you can cancel or seek a refund for a product / service that you have purchased through the Platform: 
                    </p>

                    <ol className="list-decimal pl-6 space-y-3">
                    <li>
                        Under this policy:Cancellations will only be considered if the request is made before the delivery partner has been assigned. 
                    </li>

                    <li>
                        However, cancellation request may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. 

                    </li>

                    <li>
                         In such an event, you may choose to reject the product at the doorstep.  
                    </li>

                    <li>
                       However, exchange can be made if the user establishes that product delivered is damaged.In case of receipt of damaged or defective items, please report to our customer service team. 
                    </li>
                    <li>
                       The request would be entertained once the quality team has checked and determined the same at its own end. 
                    </li>
                    <li>
                         This should be reported once product is delivered with supporting images and videos. 
                    </li>
                    <li>
                        In case you feel that the product received is not as shown on the site, you must bring it to the notice of our customer service within 24 hours  receiving the product.  
                    </li>
                    <li>
                        The customer service team after looking into your complaint will take an appropriate decision. 
                    </li>
                    <li>
                        In case of any refunds approved by support team it  will take 5-7 business days] for the refund to be processed. . 
                    </li>
                    </ol>
                </div>
                </section>

                {/* <div className='fixed bottom-0 w-full h-[80px] flex justify-center items-center bg-[#FFFFFF] '>
                    <input 
                    className={`md:w-5 md:h-5 w-4 h-4 mr-2 border-2 rounded-full ${isChecked ? 'border-blue-500' : 'border-gray-400'}`}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    type="checkbox" />
                    <p className='md:text-[16px] text-[14px] font-semibold'> I agree to the above Refund Policy</p>
                </div> */}
            </div>
            <PhoneNavBar />
        </div>
    )
}

export default RefundPolicy;

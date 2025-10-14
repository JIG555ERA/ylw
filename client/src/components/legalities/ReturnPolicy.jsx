import React, { useState } from 'react'
import { Navbar } from '../homePage/homePageComponents/topSection/navBar/navbar'
import bookStoreLogo from '../../assets/logos/bookStoreLogo.svg'
import PhoneNavBar from '../homePage/homePageComponents/topSection/navBar/PhoneNavBar';

const ReturnPolicy = () => {

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
                <h2 className="md:text-[54px] text-[32px] font-bold my-4 ">Return Policy</h2>

                <section className="max-w-4xl mx-auto p-6">
                    <div id="return-policy" className="bg-white p-6 rounded-lg shadow mb-6">
                        {/* <h2 className="text-2xl font-bold mb-4 underline">Return Policy</h2> */}
                            <p className="list-disc pl-6 mt-2 space-y-1">
                                We offer refund / exchange within first <b>3 days</b> from the date of your purchase. If <b>3 days</b> have passed
                                since your purchase, you will not be offered a return, exchange or refund of any kind. In order to become
                                eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as
                                you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale,
                                then the item may not be eligible for a return / exchange. Further, only such items are replaced by us
                                (based on an exchange request), if such items are found defective or damaged.

                            </p>
                            <p className="list-disc pl-6 mt-2 space-y-1">
                                You agree that there may be a certain category of products / items that are exempted from returns or
                                refunds. Such categories of the products would be identified to you at the item of purchase. For exchange
                                / return accepted request(s) (as applicable), once your returned product / item is received and inspected
                                by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further.
                                If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will
                                be processed in accordance with our policies.
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

export default ReturnPolicy

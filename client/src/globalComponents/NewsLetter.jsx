import React, { useState } from 'react'
import { Sparkles, Mail } from "lucide-react"

const NewsLetter = () => {

    const [ email, setEmail ] = useState('');

    const handleSubmit = () => {
        setEmail('');
    }

    return (
        <div
        className='w-full h-auto flex flex-col justify-center items-center font-[Poppins] xl:pt-[100px] md:pt-[70px] pt-[40px] pb-[120px]'>
            {/* tag */}
            <div className='px-[12px] h-[50px] flex justify-center items-center gap-[8px] rounded-3xl shadow:md hover:shadow-lg  shadow-gray-300 hover:scale-105 cursor-pointer bg-white'>
                <Sparkles className='w-5 h-5 text-teal-400' />
                <p className='text-[16px] font-medium'>Stay Updated</p>
            </div>

            <h1
            className='md:text-[36px] text-[24px] bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent font-semibold text-center mt-[16px]'>
                Never Miss a Great Book
            </h1>

            <div
            className='md:text-[16px] text-[14px] font-medium text-[#7C7C7C]/60 md:w-[50vw] mt-[8px] w-full md:px-[0px] px-[12px]'>
                <p className='text-center'>Subscribe to our newsletter and get the latest book recommendations, exclusive deals, and author insights delivered to your inbox.</p>
            </div>

            <div
            className='lg:w-[40vw] md:w-[55vw] md:h-[58px] h-[50px] flex md:flex-row flex-col gap-[20px] mt-[24px] w-full px-[16px] items-center'>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                className='w-full focus:outline-gray-200 border-2  h-[58px] rounded-3xl text-[16px] text-[#7C7C7C]/75 font-medium md:px-[18px] px-[16px] flex items-center shadow-lg shadow-gray-300 active:border-white border-white '
                type="email"
                placeholder='Enter your email address'
                value={email}
                />

                <button
                className='md:px-[18px] px-[12px] md:h-[58px] h-[58px] w-[150px] rounded-2xl bg-gradient-to-br md:mx-auto from-blue-300 via-blue-500 to-purple-400 flex justify-center items-center gap-[8px] cursor-pointer hover:scale-105 hover:shadow-gray-300 hover:shadow-md'
                onClick={handleSubmit}>
                    <Mail className='md:w-4.5 md:h-4.5 w-4 h-4 text-white font-semibold' />
                    <p className='text-white font-medium md:text-[16px] text-[14px]'>Subscribe</p>
                </button>
            </div>
        </div>
    )
}

export default NewsLetter

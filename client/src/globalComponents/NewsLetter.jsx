import React, { useState } from 'react'
import { Sparkles, Mail } from "lucide-react"

const NewsLetter = () => {

    const [ email, setEmail ] = useState('');

    const handleSubmit = () => {
        setEmail('');
    }

    return (
        <div
        className='w-full h-auto flex flex-col justify-center items-center font-[Poppins] lg:py-[100px] md:py-[60px] py-[24px]'>
            {/* tag */}
            <div className='px-[12px] h-[50px] flex justify-center items-center gap-[8px] rounded-3xl shadow:md hover:shadow-lg  shadow-gray-300 hover:scale-105 cursor-pointer bg-white'>
                <Sparkles className='w-5 h-5 text-teal-400' />
                <p className='text-[16px] font-medium'>Stay Updated</p>
            </div>

            <h1
            className='md:text-[36px] bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent font-semibold text-center mt-[16px]'>
                Never Miss a Great Book
            </h1>

            <div
            className='text-[16px] font-medium text-[#7C7C7C]/60 md:w-[50vw] mt-[8px] w-full '>
                <p className='text-center'>Subscribe to our newsletter and get the latest book recommendations, exclusive deals, and author insights delivered to your inbox.</p>
            </div>

            <div
            className='lg:w-[40vw] md:w-[55vw] h-[50px] flex gap-[20px] mt-[24px]'>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                className='w-full h-[50px] rounded-3xl text-[14px] text-[#7C7C7C]/75 font-medium px-[16px] flex items-center shadow-lg shadow-gray-300 active:border-white border-white border-0'
                type="email"
                placeholder='Enter your email address'
                value={email}
                />

                <button
                className='px-[12px] rounded-2xl bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 flex justify-center items-center gap-[8px] cursor-pointer '
                onClick={handleSubmit}>
                    <Mail className='w-4.5 h-4.5 text-white font-semibold' />
                    <p className='text-white font-medium text-[16px]'>Subscribe</p>
                </button>
            </div>
        </div>
    )
}

export default NewsLetter

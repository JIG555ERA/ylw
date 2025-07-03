import React from 'react'

const AboutPublication = ({context=""}) => {
    return (
        <div
        className='w-full h-auto flex flex-col px-[80px] mt-[50px]'>
            <h1
            className='text-[24px] font-semibold text-[#121212]'>
                About publication
            </h1>
            <p
            className='text-[14px] font-normal text-[#7C7C7C] mt-[15px]'>
                {context}
            </p>
        </div>
    )
}

export default AboutPublication

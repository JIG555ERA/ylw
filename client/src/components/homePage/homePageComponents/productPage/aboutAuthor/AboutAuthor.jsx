import React from 'react'

const AboutAuthor = ({context=""}) => {
    return (
        <div
        className='w-full h-auto flex flex-col px-[80px] mt-[40px]'>
            <div className="w-full  border-t-[3px] border-dashed border-[#D1D1D1] "/>
            <h1
            className='text-[24px] font-semibold text-[#121212] mt-[30px]'>
                About author
            </h1>
            <p
            className='text-[14px] font-normal text-[#7C7C7C] mt-[15px]'>
                {context}
            </p>
        </div>
    )
}

export default AboutAuthor

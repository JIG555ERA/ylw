import React from 'react'
import authBg from '../../assets/backgroundImages/authBg.svg'
import formBg from '../../assets/backgroundImages/formBg.svg'
import LogIN from './LogIN'

const AuthLogIN = () => {
    return (
        <div
        className='w-full h-[100vh] bg-[#F9F9F9] flex justify-center items-center font-[Poppins]'>
            <div
            className='w-[1080px] h-[750px] relative rounded-[24px] overflow-hidden'>
                <img 
                className='w-[1080px] h-[750px] absolute z-10'
                src={authBg} 
                alt={authBg} />

                <div
                className='absolute z-20 w-[1080px] h-[750px] flex justify-between px-[36px] py-[44px]'>
                    <div
                    className='w-[365px] h-full rounded-[18px] flex flex-col'>
                        <h1
                        className='text-[32px] font-semibold text-[#111111] mt-[100px]'>
                            Connect with us
                        </h1>
                        <p
                        className='text-[24px] font-normal text-[#111111]'>
                            Access to thousands of books by authors title 
                        </p>
                    </div>
                    <div
                    className='w-[580px] h-full  rounded-[18px] relative'>
                        <img 
                        className='w-full h-full absolute z-20'
                        src={formBg} 
                        alt={formBg} />

                        <LogIN />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLogIN

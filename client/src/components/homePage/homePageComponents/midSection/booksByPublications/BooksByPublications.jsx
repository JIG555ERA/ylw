import React from 'react'
import { Sparkles, Building2 } from 'lucide-react'
import PublicationCard from './PublicationCard'

const BooksByPublications = () => {
    return (
        <div
        className='w-full h-auto'>
            <div
            className='lg:px-[80px] md:px-[40px] px-[16px] flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 py-[100px]'>
                {/* description & tags */}
                <div
                className='flex flex-col w-full justify-center items-center'>
                    <div className='h-[50px] flex justify-center items-center rounded-3xl bg-white/75 px-[16px] gap-[8px] shadow-gray-400 hover:scale-105 shadow-2xl hover:shadow-2xl cursor-pointer'><Building2 className='h-5 w-5 text-cyan-500'/><h1 className='text-[16px] font-medium'>Trusted Publishers</h1></div>
                    <h1 className='bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 bg-clip-text text-transparent font-bold text-[48px] py-[16px]'>Books By Publications</h1>
                    <p className='text-gray-500/80 text-[16px] font-medium lg:w-[35vw] flex text-center'>Discover exceptional literature from world-renowned publishers. From academic excellence to popular fiction, explore curated collections from the industry's most trusted names.</p>
                    <div className='flex py-[16px] gap-[16px]'>
                        <div className='h-[40px] flex justify-center items-center rounded-3xl bg-white/75 px-[16px] gap-[8px] shadow-gray-300 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer'><Sparkles className='h-5 w-5 text-purple-400'/><h1 className='text-[14px] font-medium'>Trusted Publishers</h1></div>
                        <div className='h-[40px] flex justify-center items-center rounded-3xl bg-white/75 px-[16px] gap-[8px] shadow-gray-300 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer'><Building2 className='h-5 w-5 text-blue-400'/><h1 className='text-[14px] font-medium'>Trusted Publishers</h1></div>
                    </div>
                </div>
                {/* cards */}
                <div>
                    <PublicationCard />
                </div>
            </div>
        </div>
    )
}

export default BooksByPublications

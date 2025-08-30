import React from 'react'
import { BookOpen, TrendingUp } from 'lucide-react'
import author01 from '../../../../../assets/authorImages/author01.svg'
import author02 from '../../../../../assets/authorImages/author02.svg'

const context = [
    {id: 0, img: author01 , name: 'Sarah Chen', description: "arah's parents moved the family back and forth between the United States, Canada, and Taiwan throughout Sarah's childhood, but her mother always made sure that Sarah and her brother continued learning Chinese.", books: 8},
    {id: 1, img: author02 , name: 'Sarah Chen', description: 'Bestselling author of ', books: 8},
]

const AuthorCard = ({ context=context[0] }) => {
    return (
        <div
        className='md:w-[300px] w-[200px] h-[400px] md:h-[450px] rounded-3xl flex flex-col flex-shrink-0 bg-[#f9f9f9] overflow-hidden md:gap-[20px] group font-[Poppins] shadow hover:shadow-md hover:shadow-gray-300 cursor-pointer'>
            <div
            className='h-[180px] w-full overflow-hidden'>
                <img 
                className='w-full bg-cover group-hover:scale-125 transition-all delay-200 duration-600 linear'
                src={context.img} 
                alt={context.img} />
            </div>
            <div
            className='w-full flex flex-col h-[170px] items-center lg:px-[24px] md:px-[20px] px-[16px]'>
                <h1 className='md:text-[24px] text-[20px] md:py-[2px] py-[4px] font-medium bg-clip-text text-transparent bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 text-center'> {context.name} </h1>
                <p className='md:text-[14px] text-[12px] text-[#7C7C7C]/60 font-medium line-clamp-3 text-center md:my-[12px] my-[8px]'> {context.description} </p>
                <div
                className='flex flex-col justify-between'>
                    <div
                    className='flex gap-[4px] justify-center items-center'>
                        <BookOpen className="w-4 h-4 text-blue-500" /> 
                        <p className='text-[16px] font-semibold'> {context.books} </p>
                    </div>
                    <h1 className='text-[12px] font-light text-[#7C7C7C] pt-[4px]'> Books </h1>
                </div>
            </div>
            <div
            className='w-full flex flex-col lg:px-[24px] h-auto px-[24px]'>
                <button className="w-full h-8 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-400 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-2xl flex justify-center items-center gap-[8px] font-medium md:my-[0px] my-[8px]">
                    <TrendingUp className="w-4 h-4 text-white" /> Explore Books
                </button>
            </div>
            
        </div>
    )
}

export default AuthorCard

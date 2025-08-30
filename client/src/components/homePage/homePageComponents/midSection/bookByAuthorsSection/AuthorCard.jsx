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
            className="group w-[160px] group-hover:w-[240px] lg:h-[42px] h-[32px] 
                        border border-blue-500 font-semibold flex justify-center items-center 
                        rounded-[30px]  translate-y-[-8px] lg:text-[14px] text-[12px] cursor-pointer 
                        transition-all duration-1000 ease-in-out mx-auto 
                        bg-white relative overflow-hidden md:mt-[0px] translate "
            >
            <span
                className="bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                        bg-clip-text text-transparent transition-all duration-1000 ease-in-out 
                        group-hover:text-white group-hover:bg-none flex md:gap-2 gap-1 justify-center items-center"
            >
                <TrendingUp className="w-4 h-4 text-blue-400 group-hover:text-white" /> Explore Books
            </span>

            {/* Hover gradient background overlay */}
            <div
                className="absolute inset-0 rounded-[30px] 
                        bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                        opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
            />
            </div>
            
        </div>
    )
}

export default AuthorCard

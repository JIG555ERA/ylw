import React, { useRef } from 'react'
import author01 from '../../../../../assets/authorImages/author01.svg'
import author02 from '../../../../../assets/authorImages/author02.svg'
import author03 from '../../../../../assets/authorImages/author03.svg'
import author04 from '../../../../../assets/authorImages/author07.jpeg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'
import AuthorCard from './AuthorCard'
import './Scrollbar.css'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const BookByAuthorsSection = () => {

    const authorInfo = [
         {id: 0, img: author01, name: 'Sarah Chen', description: "Sarah's parents moved the family back and forth between the United States, Canada, and Taiwan throughout Sarah's childhood, but her mother always made sure that Sarah and her brother continued learning Chinese.", books: 8},
         {id: 1, img: author02, name: 'Marcus Thompson', description: "Marcus Thompson is a contemporary fiction writer known for his sharp storytelling and deep character explorations. His works often blend emotional depth with real-world themes, creating narratives that resonate with readers across generations.", books: 8},
         {id: 2, img: author03, name: 'Elena Rodriguez', description: "Elena Rodriguez is a passionate storyteller whose novels celebrate culture, identity, and human connection. With a flair for weaving rich settings and heartfelt emotions, her writing transports readers into worlds both familiar and new.", books: 8},
         {id: 3, img: author04, name: 'Dr. Adien Kumar', description: "Dr. Adien Kumar is an acclaimed author and researcher who bridges science and storytelling. His works combine academic insight with accessible prose, inspiring readers to explore knowledge, philosophy, and the human spirit.", books: 8},
         {id: 4, img: author02, name: 'Marcus Thompson', description: "Marcus Thompson is a contemporary fiction writer known for his sharp storytelling and deep character explorations. His works often blend emotional depth with real-world themes, creating narratives that resonate with readers across generations.", books: 8},
         {id: 5, img: author03, name: 'Elena Rodriguez', description: "Elena Rodriguez is a passionate storyteller whose novels celebrate culture, identity, and human connection. With a flair for weaving rich settings and heartfelt emotions, her writing transports readers into worlds both familiar and new.", books: 8},
         {id: 6, img: author04, name: 'Dr. Adien Kumar', description: "Dr. Adien Kumar is an acclaimed author and researcher who bridges science and storytelling. His works combine academic insight with accessible prose, inspiring readers to explore knowledge, philosophy, and the human spirit.", books: 8},
         {id: 7, img: author02, name: 'Marcus Thompson', description: "Marcus Thompson is a contemporary fiction writer known for his sharp storytelling and deep character explorations. His works often blend emotional depth with real-world themes, creating narratives that resonate with readers across generations.", books: 8},
         {id: 8, img: author03, name: 'Elena Rodriguez', description: "Elena Rodriguez is a passionate storyteller whose novels celebrate culture, identity, and human connection. With a flair for weaving rich settings and heartfelt emotions, her writing transports readers into worlds both familiar and new.", books: 8},
         {id: 9, img: author04, name: 'Dr. Adien Kumar', description: "Dr. Adien Kumar is an acclaimed author and researcher who bridges science and storytelling. His works combine academic insight with accessible prose, inspiring readers to explore knowledge, philosophy, and the human spirit.", books: 8},
    ]

    const scrollRef = useRef(null)
    
      const handleScroll = (direction) => {
        if (scrollRef.current) {
          const { scrollLeft, clientWidth } = scrollRef.current
          const scrollAmount = clientWidth / 2 
          scrollRef.current.scrollTo({
            left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
            behavior: "smooth",
          })
        }
      }

     return (
        <div className="lg:mx-[80px] md:mx-[40px] mx-[16px] lg:mt-[28px] md:mt-[24px] mt-[16px] font-[Poppins]">
        <div className="w-full border-t-[2px] border-dashed border-[#D1D1D1] lg:block hidden" />

        <div className="books-listing-title-section flex justify-between md:mt-[64px] mt-[16px]">
            <p className=" lg:text-[32px] text-[24px] text-[#111111] font-semibold">
                Book by Authors
            </p>
            <div className="lg:flex hidden gap-3">
            <button
                        onClick={() => handleScroll("left")}
                        className="relative rounded-full cursor-pointer w-[40px] h-[40px] border-2 border-blue-400 flex justify-center items-center overflow-hidden group hover:border-white"
                      >
                        {/* Gradient overlay */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            
                        {/* Icon */}
                        <IoIosArrowBack className="relative z-10 w-8 h-8 font-semibold mr-1 text-blue-400 group-hover:text-white transition-colors duration-300" />
                      </button>
            
                      <button
                        onClick={() => handleScroll("right")}
                        className="relative rounded-full cursor-pointer w-[40px] h-[40px] border-2 border-blue-400 flex justify-center items-center overflow-hidden group hover:border-white"
                      >
                        {/* Gradient overlay */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            
                        {/* Icon */}
                        <IoIosArrowForward className="relative z-10 w-8 h-8 font-semibold ml-1 text-blue-400 group-hover:text-white transition-colors duration-300" />
                      </button>
            </div>
        </div>

        {/* Scrollable container */}
        <div
        ref={scrollRef}
        className="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-hide lg:mt-[28px] md:mt-[24px] mt-[16px] gap-6 scroll-smooth lg:pb-[20px] md:pb-[16px] pb-[12px]"
        >
        {authorInfo.map((author) => (
            <AuthorCard key={author.id} context={author} />
        ))}
        </div>

        </div>
  )
}

export default BookByAuthorsSection

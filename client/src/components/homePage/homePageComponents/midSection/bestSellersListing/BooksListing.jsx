import React, { useRef } from 'react'
import BookCard from '../bookListings/card'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'
import { booksData0 } from '../../../../../globalComponents/booksData'
import './Scrollbar.css'

const BooksListing = ({sectionName}) => {
  const booksData = booksData0
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

      <div className="books-listing-title-section flex justify-between md:mt-[24px] mt-[16px]">
        <p className=" lg:text-[32px] text-[24px] text-[#111111] font-semibold">
          {sectionName}
        </p>
        <div className="lg:flex hidden gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="rounded-full cursor-pointer w-[40px] h-[40px] "
          >
            <img src={leftScrollButton} alt="left scroll" className='bg-cover w-full h-full' />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="rounded-full cursor-pointer w-[40px] h-[40px]"
          >
            <img src={rightScrollButton} alt="right scroll " className='bg-cover w-full h-full' />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-1px lg:gap-6 md:gap-4 gap-2 scroll-smooth lg:pb-[20px] md:pb-[16px] pb-[12px]"
      >
        {booksData.map((book) => (
          <div key={book.id} className="min-w-[180px] flex-shrink-0">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BooksListing

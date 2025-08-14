import React from 'react'
import author01 from '../../../../../assets/authorImages/author01.svg'
import author02 from '../../../../../assets/authorImages/author02.svg'
import author03 from '../../../../../assets/authorImages/author03.svg'
import author04 from '../../../../../assets/authorImages/author07.jpeg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'

const BookByAuthorsSection = () => {

    const authorInfo = [
        {id: 0, name: 'Mark Twain', img: author01},
        {id: 1, name: 'Paulo Coelho', img: author02},
        {id: 2, name: 'Chetan Bhagat', img: author03},
        {id: 3, name: 'Devdutt Pattanaik', img: author04},
        // {id: 4, name: 'Devdutt Pattanaik', img: author04},
    ]

    const handleViewAll = () => {

    }    

    return (
        <div className="lg:mx-[80px] mx-[16px] lg:mt-[40px] mt-[16px] font-[Poppins]">
            <div className="w-full border-t-[2px] border-dashed border-[#D1D1D1] lg:block hidden"/>
            <div className="books-listing-title-section flex justify-between mt-[30px]">
                <div className="selected-categroy-title-section">
                    <p className="translate-y-[4px] lg:text-[24px] text-[18px] text-[#111111] font-semibold">
                        Book by Authors
                    </p>
                </div>
                <div className="flex justify-between">
                    <div 
                    onClick={handleViewAll}
                    className="view-all-button">
                        <div
                        className="view-all-button0">
                            <p
                            className="view-all-text">
                                View All
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:block hidden">
                        <div className="scroll-button">
                            <img
                                className="left-scroll-button-image"
                                src={leftScrollButton}
                                alt="left scroll"
                            />
                        </div>
                        <div className="scroll-button">
                            <img
                                className="right-scroll-button-image"
                                src={rightScrollButton}
                                alt="right scroll"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-2 w-full lg:h-[225px] lg:gap-[293px] gap-[16px] lg:translate-x-[-12px] mt-[50px]">
                {authorInfo.map((author, index, array) => (
                    <div
                    key={author.id}
                    className='lg:w-[200px] w-[156px] lg:h-[225px] h-[200px] flex flex-col'>
                        <div
                        className='lg:w-[200px] lg:h-[200px] w-[156px] h-[166px]'>
                            <img 
                            className='lg:w-[200px] lg:h-[200px] w-[156px] h-[166px] rounded-[12px]'
                            src={author.img} 
                            alt={author.name} />
                        </div>
                        <p
                        className='mx-auto text-[#121212] font-semibold text-[16px] mt-[8px]'>
                            {author.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookByAuthorsSection

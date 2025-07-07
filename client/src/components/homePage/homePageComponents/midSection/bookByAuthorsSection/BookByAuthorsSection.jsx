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
        {id: 4, name: 'Devdutt Pattanaik', img: author04},
    ]

    const handleViewAll = () => {

    }    

    return (
        <div className="mx-[80px] mt-[40px] pb-[300px]">
            <div className="w-full  border-t-[2px] border-dashed border-[#D1D1D1] "/>
            <div className="books-listing-title-section flex justify-between mt-[30px]">
                <div className="selected-categroy-title-section">
                    <p className="translate-y-[20px] text-[24px] text-[#111111] font-semibold">
                        Book by Authors
                    </p>
                </div>
                <div className="books-listing-title-buttons-section">
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
                    <div className="scroll-button-section">
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
            <div className="grid grid-cols-6 w-full h-[225px] gap-[293px] translate-x-[-12px] mt-[50px]">
                {authorInfo.map((author, index, array) => (
                    <div
                    key={author.id}
                    className='w-[200px] h-[225px] flex flex-col'>
                        <div
                        className='w-[200px] h-[200px]'>
                            <img 
                            className='w-[200px] h-[200px] rounded-[12px]'
                            src={author.img} 
                            alt={author.name} />
                        </div>
                        <p
                        className='mx-auto text-[#121212] font-semibold text-[16px]'>
                            {author.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookByAuthorsSection

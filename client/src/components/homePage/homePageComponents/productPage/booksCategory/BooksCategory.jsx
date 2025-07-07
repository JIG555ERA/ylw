import React, { useState } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'

const BooksCategory = () => {
    const [category, setSelectedCategory] = useState();

    const categoryItems = [
        { category_: 'Fiction' },
        { category_: 'Non Fiction' },
        { category_: 'Romance' },
        { category_: 'Young Adult' },
        { category_: 'Featured' },
    ];

    const booksData = [
        { id: 0, bookCoverPage: img01 },
        { id: 1, bookCoverPage: img02 },
        { id: 2, bookCoverPage: img03 },
        { id: 3, bookCoverPage: img04 },
    ];

    const handleViewAll = () => {

    }

    return (
        <div className="w-full px-[80px] flex flex-col justify-between mt-[40px]">
            <div className="books-listing-title-section flex flex-col justify-between ">
                <div className="w-full  border-t-[2px] border-dashed border-[#D1D1D1] "/>
                <div className="selected-categroy-title-section mt-[30px]">
                    <p className="translate-y-[20px] text-[#121212] font-semibold text-[24px]">
                        Books By Category
                    </p>
                </div>
                {/* <div className="books-listing-title-buttons-section">
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
                </div> */}
            </div>
            <div className="h-[185px] flex justify-between whitespace-nowrap mt-[40px]">
                {categoryItems.map((cat) => {
                    const isActive = category === cat.category_;
                    return (
                        <div
                            key={cat.category_}
                            onClick={() => setSelectedCategory(cat.category_)}
                            className={`overflow-hidden relative font-exo w-[172px] h-[185px] bg-[#F4F4F4]/50 flex-shrink-0 rounded-md transition-transform duration-300 ease-in-out cursor-pointer 
                            ${isActive ? '' : ''} hover:scale-105`}
                        >
                            {/* Grid Book Cover Section with optional opacity layer */}
                            <div className="relative h-full">
                                {isActive && (
                                    <div className="" />
                                )}

                                <div className="grid grid-cols-2 grid-rows-2 gap-[4px] p-[8px] h-full z-0 relative">
                                    {booksData.map((book, idx) => (
                                        <div key={idx} className="mx-auto w-[65px] h-full flex items-center justify-center">
                                            <ImageSection bookCoverPage={book.bookCoverPage} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Active Overlay */}
                            {/* {isActive && (
                                <div className="absolute inset-0 flex items-center justify-center z-20 bg-white/90">
                                    <img
                                        src="../src/assets/icons/checkCircleIcon.svg"
                                        alt="check"
                                        className="w-6 h-6 "
                                    />
                                    <p className="font-semibold text-[20px] text-[#064FA4] text-center">
                                        {cat.category_}
                                    </p>
                                </div>
                            )} */}

                            {/* Inactive Category Footer */}
                            {!isActive && (
                                <div className="absolute bottom-0 w-full h-[47px] bg-[#F4F4F4]/60 bg-opacity-70 flex items-center pl-3 z-10">
                                    <p className="text-[#121212] text-[14px] font-semibold z-20">
                                        {cat.category_}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BooksCategory

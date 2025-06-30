import React, { useState } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";

export const CategorySection = () => {
    const [category, setSelectedCategory] = useState('Fiction');

    const categoryItems = [
        { category_: 'Fiction' },
        { category_: 'Non Fiction' },
        { category_: 'Romance' },
        { category_: 'Young Adult' },
        { category_: 'Featured' },
    ];

    const booksData = [
        { id: 0, bookCoverPage: '../src/assets/bookCoverPages/coverPage01.svg' },
        { id: 1, bookCoverPage: '../src/assets/bookCoverPages/coverPage02.svg' },
        { id: 2, bookCoverPage: '../src/assets/bookCoverPages/coverPage03.svg' },
        { id: 3, bookCoverPage: '../src/assets/bookCoverPages/coverPage04.svg' },
    ];

    return (
        <div className="w-full h-[185px] mt-20 flex justify-between whitespace-nowrap">
            {categoryItems.map((cat) => {
                const isActive = category === cat.category_;
                return (
                    <div
                        key={cat.category_}
                        onClick={() => setSelectedCategory(cat.category_)}
                        className={`overflow-hidden relative font-exo w-[172px] h-[185px] flex-shrink-0 rounded-md transition-transform duration-300 ease-in-out cursor-pointer 
                        ${isActive ? 'bg-[#F5E3B1]/50' : 'bg-[#F4F4F4]/50'} hover:scale-105`}
                    >
                        {/* Grid Book Cover Section with optional opacity layer */}
                        <div className="relative h-full">
                            {isActive && (
                                <div className="absolute inset-0 bg-white/50 z-10 pointer-events-none" />
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
                        {isActive && (
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
                        )}

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
    );
};

import React, { useState } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'

// ✅ Import your card
import CategoryCard from "./CategoryCard";

export const CategorySection = () => {
    const [category, setSelectedCategory] = useState();

    const categoryItems = [
        { category_: 'Fiction' },
        { category_: 'Non Fiction' },
        { category_: 'Romance' },
        { category_: 'Young Adult' },
        { category_: 'Featured' },
    ];

    const booksData = [
        { id: 0, title: "Book 1", author: "Author 1", image: img01 },
        { id: 1, title: "Book 2", author: "Author 2", image: img02 },
        { id: 2, title: "Book 3", author: "Author 3", image: img03 },
        { id: 3, title: "Book 4", author: "Author 4", image: img04 },
    ];

    // ✅ Extended category config
    const categoryConfig = [
        {
            name: "Fiction",
            color: "from-pink-50 to-pink-200",
            accent: "pink-100",
            icon: "📚",
            description: "Immerse yourself in captivating stories"
        },
        {
            name: "Non Fiction",
            color: "from-blue-50 to-blue-200",
            accent: "blue-100",
            icon: "🔍",
            description: "Discover facts and real-world insights"
        },
        {
            name: "Romance",
            color: "from-purple-50 to-purple-200",
            accent: "purple-100",
            icon: "💕",
            description: "Fall in love with heartwarming tales"
        },
        {
            name: "Young Adult",
            color: "from-green-50 to-green-200",
            accent: "green-100",
            icon: "🌱",
            description: "Stories for teens and young adults"
        },
        {
            name: "Featured",
            color: "from-orange-50 to-orange-200",
            accent: "orange-100",
            icon: "⭐",
            description: "Highlighted must-read picks"
        }
    ];

    return (
        <div className="w-full lg:px-[80px] px-[16px] flex flex-col justify-between font-[Poppins] xl:mt-[90px] mt-[480px]">
            <div className="books-listing-title-section flex justify-between ">
                <div className="selected-categroy-title-section flex">
                    <p className="text-[#121212] font-semibold lg:text-[32px] text-[24px] md:mt-[28px]">
                        Books By Category
                    </p>
                </div>
                <div className="flex justify-between">
                    {/* Buttons/icons can go here */}
                </div>
            </div>

            {/* ✅ Category Cards */}
            <div className="md:h-[560px] h-[540px] flex justify-between overflow-x-scroll overflow-hidden xl:gap-6 md:gap-4 gap-3 [&::-webkit-scrollbar]:hidden scrollbar-hide whitespace-nowrap mt-[20px]">
                {categoryConfig.map((cat, index) => (
                    <CategoryCard
                        key={index}
                        category={cat}
                        books={booksData}
                        count={booksData.length}
                        onClick={() => setSelectedCategory(cat.name)}
                    />
                ))}
            </div>
        </div>
    );
};

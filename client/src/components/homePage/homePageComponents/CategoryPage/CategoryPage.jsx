import React, { useState } from "react";
import BookCard from "../midSection/bookListings/card";
import { IoClose } from "react-icons/io5";

import categoryIcon from '../../../../assets/tagIcons/tag01.svg';
import authorIcon from '../../../../assets/tagIcons/tag02.svg';
import priceIcon from '../../../../assets/tagIcons/tag03.svg';
import languageIcon from '../../../../assets/tagIcons/tag04.svg';
import img01 from '../../../../assets/bookCoverPages/coverPage01.svg';
import img02 from '../../../../assets/bookCoverPages/coverPage02.svg';
import img03 from '../../../../assets/bookCoverPages/coverPage03.svg';
import img04 from '../../../../assets/bookCoverPages/coverPage04.svg';
import img05 from '../../../../assets/bookCoverPages/coverPage05.svg';
import img06 from '../../../../assets/bookCoverPages/coverPage06.svg';


import './CategoryPage.css';
import { Carousel } from "./Carousel";

export const CategoryPage = () => {

  const [activePage, setActivePage] = useState('Categories')
  
  const navItems = [
    { name: 'Home', icon: 'homeIcon', selectedIcon: 'selectedHomeIcon', link: `/`},
    { name: 'Categories', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/category`},
    { name: 'Product', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/product`},
    { name: 'Liked', icon: 'favouriteIcon', selectedIcon: 'selectedFavouriteIcon', link: `/liked`},
    { name: 'Profile', icon: 'userProfileIcon', selectedIcon: 'selectedUserProfileIcon', link: `/profile`},
  ]

  const booksData = [
    { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
    { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
    { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199 },
    { id: 3, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299 },
    { id: 4, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299 },
    { id: 5, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129 },
    { id: 6, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
    { id: 7, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
    { id: 8, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199 },
    { id: 9, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299 },
    { id: 10, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299 },
    { id: 11, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129 },
    { id: 12, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
    { id: 13, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
    { id: 14, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199 },
    { id: 15, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299 },
    { id: 16, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299 },
    { id: 17, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129 },
  ];

  const tagOptions = {
    Category: [...new Set(booksData.map(book => book.category))],
    Author: [...new Set(booksData.map(book => book.bookAuthor))],
    // Price: ['< 150', '150 - 250', '> 250'],
    Title: [...new Set(booksData.map(book => book.bookTitle))],
  };

  const tagIcons = {
    Category: categoryIcon,
    Author: authorIcon,
    // Price: priceIcon,
    language: languageIcon,
  };

  const [selectedFilters, setSelectedFilters] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleFilterChange = (tag, option) => {
    setSelectedFilters(prev => {
      const updated = { ...prev };
      const current = updated[tag] || [];
      updated[tag] = current.includes(option)
        ? current.filter(o => o !== option)
        : [...current, option];

      if (updated[tag].length === 0) delete updated[tag];
      return updated;
    });
  };

  const getFilteredBooks = () => {
    return booksData.filter(book => {
      const categoryFilter = selectedFilters.Category?.length
        ? selectedFilters.Category.includes(book.category)
        : true;

      const authorFilter = selectedFilters.Author?.length
        ? selectedFilters.Author.includes(book.bookAuthor)
        : true;

    //   const priceFilter = selectedFilters.Price?.length
    //     ? selectedFilters.Price.some(price => {
    //       if (price === '< 150') return book.bookPrice < 150;
    //       if (price === '150 - 250') return book.bookPrice >= 150 && book.bookPrice <= 250;
    //       if (price === '> 250') return book.bookPrice > 250;
    //       return false;
    //     })
    //     : true;

      const titleFilter = selectedFilters.Title?.length
        ? selectedFilters.Title.includes(book.bookTitle)
        : true;

      return categoryFilter && authorFilter && titleFilter;
    });
  };

  const heroSectionInfo = [
    {displayId: 0, displayBook: ''},
  ]

  return (
    <div className="mx-[80px]">
        {/* Navbar */}
        <div className="w-full flex flex-col items-center justify-evenly mt-4">
          {/* Logo Section */}
          <div className="flex justify-center items-center mb-[30px]">
            <img
              className="h-auto w-auto"
              src="../src/assets/logos/yourLiteraryWorldIcon.svg"
              alt="Your Literary World Logo"
            />
          </div>

          {/* Navigation Items */}
          <ul className="w-full flex justify-between items-center mb-5 pt-0 mt-0 box-border">
            {navItems.map((item) => (
              <a 
              key={item.name}
              href={item.link}>
              <li
                key={item.name}
                className={`
                  flex items-center justify-between px-5 cursor-pointer transition-all duration-300 ease-in-out
                  ${activePage === item.name
                    ? 'bg-[#064FA4] text-[#f0f0f0] font-normal text-base rounded-md animate-slide-in py-2.5'
                    : 'text-[#8C8C8C] py-2.5'}
                `}
                onClick={() => setActivePage(item.name)}
              >
                <img
                  className="mr-2"
                  src={`../src/assets/icons/${
                    activePage === item.name ? item.selectedIcon : item.icon
                  }.svg`}
                  alt={`${item.name} Icon`}
                />
                <p>{item.name}</p>
              </li>
              </a>
            ))}
          </ul>

          {/* Header Text
          <div className="flex justify-center">
            <h1 className="text-[54px] text-[#064FA4] font-medium font-['Exo_2']">
              Your Literary World
            </h1>
          </div> */}
        </div>


        <Carousel />

        <div className="px-6 mb-10">
        {/* Filters Section */}
        <div className="mb-10 relative">
            <p className="text-xl font-semibold mb-4">Filters</p>
            <div className="flex flex-wrap gap-6">
            {Object.keys(tagOptions).map(tag => (
                <div key={tag} className="relative">
                <button
                    className="border px-4 py-2 rounded-md shadow flex items-center gap-2"
                    onClick={() => setOpenDropdown(openDropdown === tag ? null : tag)}
                >
                    <img src={tagIcons[tag]} alt={`${tag} icon`} className="w-4 h-4" />
                    {tag}
                </button>
                {openDropdown === tag && (
                    <div
                    className="absolute bg-white mt-2 border border-[#B6D6FC] rounded-md p-4 shadow-lg z-20"
                    style={{ minWidth: '250px' }}
                    >
                    {tagOptions[tag].map(option => (
                        <label key={option} className="block text-sm">
                        <input
                            type="checkbox"
                            checked={(selectedFilters[tag] || []).includes(option)}
                            onChange={() => handleFilterChange(tag, option)}
                        />{' '}
                        {option}
                        </label>
                    ))}
                    </div>
                )}
                </div>
            ))}
            </div>

            {/* Hashtags Display */}
            <div className="mt-4 flex flex-wrap gap-3">
            {Object.entries(selectedFilters).flatMap(([tag, options]) =>
                options.map(option => (
                <span
                    key={`${tag}-${option}`}
                    className="flex items-center gap-2 bg-gray-100 text-sm px-3 py-1 rounded-full border border-gray-300"
                >
                    <img src={tagIcons[tag]} alt={`${tag} icon`} className="w-4 h-4" />
                    #{option}
                    <IoClose
                    className="ml-1 cursor-pointer text-red-500"
                    onClick={() => handleFilterChange(tag, option)}
                    />
                </span>
                ))
            )}
            </div>
        </div>

        {/* Book Listing Title */}
        <div className="books-listing-title-section flex justify-between mt-10">
            <p className="text-2xl font-bold">
            {selectedFilters.Category?.length === 1
                ? `${selectedFilters.Category[0]} Collection`
                : selectedFilters.Category?.length > 1
                ? 'Mixed Collection'
                : 'All Books'}
            </p>
            {/* <button className="text-blue-500 underline">View All</button> */}
        </div>

        {/* Book Listing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
            {getFilteredBooks().map(book => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
        </div>
    </div>
  );
};

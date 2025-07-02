import React, { useState, useEffect, useRef } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";

// icon imports
import searchIcon from "../../../../../assets/icons/searchIcon.svg";
import heartIcon from "../../../../../assets/icons/heartIcon.svg";

// cover images
import img01 from "../../../../../assets/bookCoverPages/coverPage01.svg";
import img02 from "../../../../../assets/bookCoverPages/coverPage02.svg";
import img03 from "../../../../../assets/bookCoverPages/coverPage03.svg";
import img04 from "../../../../../assets/bookCoverPages/coverPage04.svg";
import img05 from "../../../../../assets/bookCoverPages/coverPage05.svg";

export const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef(null);

  const suggestionSectionCard = [
    { bookId: 0, bookName: "Klara and the sun", authorName: "Kazuo Ishihuro", bookImage: img01, languageTag: 'English', genreTag: 'Fiction', price: 199 },
    { bookId: 1, bookName: "Save me the waltz", authorName: "Zelda Fitzgerald", bookImage: img02, languageTag: 'English', genreTag: 'Romance', price: 99 },
    { bookId: 2, bookName: "In a thousand different ways", authorName: "Cecelia Ahern", bookImage: img03, languageTag: 'English', genreTag: 'Classics', price: 229 },
    { bookId: 3, bookName: "The covenant of water", authorName: "Abraham Verghese", bookImage: img04, languageTag: 'English', genreTag: 'Non Fiction', price: 349 },
    { bookId: 4, bookName: "Premchandra Sahitya Rachnavli", authorName: "James Baldwin", bookImage: img05, languageTag: 'Hindi', genreTag: 'Regional', price: 369 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCards = suggestionSectionCard;

  return (
    <div className="relative w-full">
      {/* Blur Background Overlay */}
      {active && (
        <div 
        onClick={() => setActive(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9] transition-all duration-300"></div>
      )}

      {/* Search Wrapper */}
      <div
        ref={wrapperRef}
        className={`fixed left-1/2 -translate-x-1/2 ${
          active ? "translate-y-[-17vh] z-50" : "relative top-0 z-0"
        } transition-all duration-500 w-full flex flex-col items-center`}
      >
        {/* Search Input */}
        <div className="flex justify-center items-center w-full">
          <div
            className={`flex h-[50px] ${
              active ? "w-[1000px] shadow-none" : "w-[300px] shadow-md"
            } rounded-full bg-gradient-to-r from-[#F3CD00] to-[#064FA4] transition-all duration-500 items-center justify-center mr-2`}
          >
            <input
              type="text"
              className={`text-sm h-[48px] rounded-full px-5 outline-none text-gray-500 ${
                active ? "w-[998px]" : "w-[298px]"
              } transition-all duration-500 bg-white`}
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => setActive(true)}
            />
          </div>
          <div
            className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#F3CD00] to-[#064FA4] rounded-full shadow-md ${
              active ? "" : ""
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
              <img src={searchIcon} alt="search icon" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Suggestions */}
        {active && (
          <div className="w-[1050px] bg-white z-50 rounded-2xl mt-5 shadow-lg p-5 transition-all duration-500 ease-in-out">
            <div className="flex flex-col mt-5 gap-4">
              {filteredCards.length === 0 ? (
                <p className="text-center italic text-gray-500">
                  No books found matching your criteria.
                </p>
              ) : (
                filteredCards.map((card) => (
                  <div
                    key={card.bookId}
                    className="flex justify-between border-b border-gray-300 pb-2"
                  >
                    {/* Left */}
                    <div className="flex w-[40%]">
                      <div className="w-full sm:w-[40px] h-[60px] aspect-[3/4]">
                        <ImageSection bookCoverPage={card.bookImage} />
                      </div>
                      <div className="ml-4">
                        <p className="text-[#064FA4] font-medium text-base">
                          {card.bookName}
                        </p>
                        <p className="text-gray-500 text-sm">{card.authorName}</p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-between w-[50%] h-full gap-4 mr-6">
                      <div className="flex gap-2 h-full justify-center items-center">
                        <p className="text-blue-600 text-xs bg-[#EFF6FF] border border-[#D9E3FC] px-2 py-1 rounded">
                          {card.languageTag}
                        </p>
                        <p className="text-purple-700 text-xs bg-[#FAF5FF] border border-[#EEDCFB] px-2 py-1 rounded">
                          {card.genreTag}
                        </p>
                      </div>
                      <p className="text-base font-medium text-black">₹ {card.price}</p>
                      <p className="bg-[#064FA4] text-white text-xs px-3 py-2 rounded-[12px] font-semibold cursor-pointer">
                        Add To Cart
                      </p>
                      <img src={heartIcon} alt="like" className="w-5 h-5" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

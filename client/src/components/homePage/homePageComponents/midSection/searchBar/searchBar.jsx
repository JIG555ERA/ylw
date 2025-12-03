import React, { useState, useEffect, useRef } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";

// icons
import searchIcon from "../../../../../assets/icons/searchIcon.svg";
import heartIcon from "../../../../../assets/icons/heartIcon.svg";

// images
import img01 from "../../../../../assets/bookCoverPages/coverPage01.svg";
import img02 from "../../../../../assets/bookCoverPages/coverPage02.svg";
import img03 from "../../../../../assets/bookCoverPages/coverPage03.svg";
import img04 from "../../../../../assets/bookCoverPages/coverPage04.svg";
import img05 from "../../../../../assets/bookCoverPages/coverPage05.svg";

export const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestionSectionCard = [
    { bookId: 0, bookName: "Klara and the sun", authorName: "Kazuo Ishihuro", bookImage: img01, languageTag: "English", genreTag: "Fiction", price: 199 },
    { bookId: 1, bookName: "Save me the waltz", authorName: "Zelda Fitzgerald", bookImage: img02, languageTag: "English", genreTag: "Romance", price: 99 },
    { bookId: 2, bookName: "In a thousand different ways", authorName: "Cecelia Ahern", bookImage: img03, languageTag: "English", genreTag: "Classics", price: 229 },
    { bookId: 3, bookName: "The covenant of water", authorName: "Abraham Verghese", bookImage: img04, languageTag: "English", genreTag: "Non Fiction", price: 349 },
    { bookId: 4, bookName: "Premchandra Sahitya Rachnavli", authorName: "James Baldwin", bookImage: img05, languageTag: "Hindi", genreTag: "Regional", price: 369 },
  ];

  // Delay showing suggestions for smoother animation
  useEffect(() => {
    let timer;
    if (active) {
      timer = setTimeout(() => setShowSuggestions(true), 200);
    } else {
      setShowSuggestions(false);
    }
    return () => clearTimeout(timer);
  }, [active]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (active && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  const filteredCards = suggestionSectionCard;

  return (
    <div className="relative w-full 2xl:translate-y-[-13vh] [2000px]:translate-y-[-10vh] z-100">
      {/* BACKDROP */}
      {active && (
        <div
          onClick={() => setActive(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] transition-all duration-300"
        />
      )}

      {/* SEARCH WRAPPER */}
      <div
        ref={wrapperRef}
        className={`fixed left-1/2 -translate-x-1/2 top-10 sm:top-16 transition-all duration-500 ${
          active ? "z-[50]" : "z-0"
        } w-full max-w-[1000px] px-4`}
      >
        {/* SEARCH INPUT */}
        <div className="flex justify-center items-center w-full">
          <div
            className={`flex h-[48px] rounded-full bg-white ${
              active ? "w-full shadow-none" : "w-[75vw] md:w-[480px] shadow-md"
            } transition-all duration-500 items-center mr-2`}
          >
            <input
              type="text"
              className="text-sm h-[48px] rounded-full px-5 outline-none text-gray-700 w-full"
              placeholder="Search books..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => setActive(true)}
            />
          </div>

          <button className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#F3CD00] to-[#064FA4] rounded-full shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full">
              <img src={searchIcon} alt="search" className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* SUGGESTIONS BOX */}
        {showSuggestions && (
          <div className="w-full max-w-[1000px] mx-auto bg-white rounded-2xl mt-4 shadow-lg p-5 z-[50] transition-all">
            <div className="flex flex-col mt-2 gap-4">
              {filteredCards.length === 0 ? (
                <p className="text-center italic text-gray-500">No books found.</p>
              ) : (
                filteredCards.map((card) => (
                  <div
                    key={card.bookId}
                    className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-3"
                  >
                    {/* LEFT */}
                    <div className="flex gap-4 w-full sm:w-[40%]">
                      <div className="w-[40px] sm:w-[55px]">
                        <ImageSection bookCoverPage={card.bookImage} />
                      </div>
                      <div>
                        <p className="text-[#064FA4] font-semibold">{card.bookName}</p>
                        <p className="text-gray-500 text-sm">{card.authorName}</p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center justify-between w-full sm:w-[55%] gap-4 mt-3 sm:mt-0">
                      <div className="flex gap-2">
                        <p className="text-blue-600 text-xs bg-[#EFF6FF] border border-[#D9E3FC] px-2 py-1 rounded">
                          {card.languageTag}
                        </p>
                        <p className="text-purple-700 text-xs bg-[#FAF5FF] border border-[#EEDCFB] px-2 py-1 rounded">
                          {card.genreTag}
                        </p>
                      </div>

                      <p className="text-base font-semibold text-black whitespace-nowrap">₹ {card.price}</p>

                      <button className="bg-[#064FA4] text-white text-xs px-3 py-2 rounded-lg font-semibold whitespace-nowrap">
                        Add To Cart
                      </button>

                      <img src={heartIcon} alt="like" className="w-5 h-5 cursor-pointer" />
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

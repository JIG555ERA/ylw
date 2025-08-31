import React, { useEffect, useRef, useState } from "react";
import BookCard from "../bookListings/card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { booksData0, booksDataFetcher } from "../../../../../globalComponents/booksData.js";
import "./Scrollbar.css";

const BooksListing = ({ sectionName, collection }) => {
  const scrollRef = useRef(null);
  const [books, setBooks] = useState([]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const loadBooks = async () => {
      const data = await booksDataFetcher({collection});
      setBooks(data);
    };
    loadBooks();
  }, []); // ✅ only runs once

  return (
    <div className="lg:mx-[80px] md:mx-[40px] mx-[16px] lg:mt-[28px] md:mt-[24px] mt-[16px] font-[Poppins]">
      <div className="w-full border-t-[2px] border-dashed border-[#D1D1D1] lg:block hidden" />

      <div className="books-listing-title-section flex justify-between md:mt-[24px] mt-[16px]">
        <p className=" lg:text-[32px] text-[24px] text-[#111111] font-semibold">
          {sectionName}
        </p>
        <div className="lg:flex hidden gap-3">
          {/* Left scroll */}
          <button
            onClick={() => handleScroll("left")}
            className="relative rounded-full cursor-pointer w-[40px] h-[40px] border-2 border-gray-500 flex justify-center items-center overflow-hidden group hover:border-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <IoIosArrowBack className="relative z-10 w-8 h-8 font-semibold mr-1 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </button>

          {/* Right scroll */}
          <button
            onClick={() => handleScroll("right")}
            className="relative rounded-full cursor-pointer w-[40px] h-[40px] border-2 border-gray-500 flex justify-center items-center overflow-hidden group hover:border-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-300 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            <IoIosArrowForward className="relative z-10 w-8 h-8 font-semibold ml-1 text-gray-700 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-1px lg:gap-6 md:gap-4 gap-2 scroll-smooth lg:pb-[20px] md:pb-[16px] pb-[12px]"
      >
        {/* {books.map((book, index) => {
          const formattedBook = {
            id: index,
            category: book.volumeInfo.categories?.[0] || "Unknown",
            bookCoverPage: book.volumeInfo.imageLinks.smallThumbnail || "", // image
            bookTitle: book.volumeInfo.title || "Untitled",
            bookAuthor: book.volumeInfo.authors?.join(", ") || "Unknown Author",
            bookPrice: Math.round(book.saleInfo?.listPrice?.amount || 0),
            releaseYear: book.volumeInfo.publishedDate
              ? book.volumeInfo.publishedDate.slice(0, 4)
              : "Unknown",
            publication: book.volumeInfo.publisher || "Unknown Publisher",
          };
          
          
          return (
            <div key={formattedBook.id} className="min-w-[180px] flex-shrink-0">
              <BookCard book={formattedBook} />
            </div>
          );

          

        })} */}

        {booksData0.map((booksData) => {
          const formattedBook0 = booksData

          return (
            <div key={formattedBook0.id} className="min-w-[180px] flex-shrink-0">
              <BookCard book={formattedBook0} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default BooksListing;

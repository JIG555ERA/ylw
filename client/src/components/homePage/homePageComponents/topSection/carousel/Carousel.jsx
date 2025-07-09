import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageSection from "../../../../../globalComponents/ImageSection";
import { SearchBar } from "../../midSection/searchBar/searchBar";

import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg';
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg';
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg';
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg';
import img05 from '../../../../../assets/bookCoverPages/coverPage05.svg';
import img06 from '../../../../../assets/bookCoverPages/coverPage06.svg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const booksData = [
  { id: 0, bookCoverPage: img01 },
  { id: 1, bookCoverPage: img02 },
  { id: 2, bookCoverPage: img03 },
  { id: 3, bookCoverPage: img04 },
  { id: 4, bookCoverPage: img05 },
  { id: 5, bookCoverPage: img06 },
  { id: 6, bookCoverPage: img01 },
  { id: 7, bookCoverPage: img02 },
  { id: 8, bookCoverPage: img03 },
  { id: 9, bookCoverPage: img04 },
];

const Carousel01 = () => {
  const carouselRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % booksData.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const getHeightClass = (index) => {
    const centerIndex = (currentSlide + Math.floor(itemsPerSlide / 2)) % booksData.length;
    const offset = Math.abs(index - centerIndex);
    const relativeOffset = Math.min(offset, booksData.length - offset); 

    switch (relativeOffset) {
      case 0:
        return "h-[260px] opacity-100 ";
      case 1:
        return "h-[185px] mt-[32px] opacity-70 ";
      case 2:
        return "h-[135px] mt-[50px] opacity-50";
      case 3:
        return "h-[70px] mt-[80px] opacity-30";
      default:
        return "h-[70px] mt-[80px] opacity-30";
    }
  };

  const getWidthClass = (index) => {
    const centerIndex = (currentSlide + Math.floor(itemsPerSlide / 2)) % booksData.length;
    const offset = Math.abs(index - centerIndex);
    const relativeOffset = Math.min(offset, booksData.length - offset); // handle wrap-around

    switch (relativeOffset) {
      case 0:
        return "w-[180px] ";
      case 1:
        return "w-[130px]";
      case 2:
        return "w-[100px]";
      case 3:
        return "w-[60px]";
      default:
        return "w-[60px]";
    }
  };

  return (
    <div className="w-full mx-[80px] h-[615px] flex flex-col items-center rounded-[32px] mt-[140px] bg-gradient-to-br from-pink-100 via-white to-indigo-100 shadow-md">
      <h1 className="text-[44px] font-semibold text-[#121212] text-center mt-[50px]">
        Your Literary World
      </h1>

      <div className="w-full flex justify-center mt-[40px]">
        <SearchBar />
      </div>

      <div className="w-[80vw] h-[345px] mx-auto  pointer-events-none">
        <Carousel
          ref={carouselRef}
          autoPlay={true}
          swipeable={false}
          responsive={responsive}
          infinite={true}
          centerMode={false}
          arrows={false}
          autoPlaySpeed={1500}
          transitionDuration={500}
          beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
        >
          {booksData.map((book, index) => (
            <div
              key={book.id}
              className={`px-2 cursor-pointer transition-transform ease-in-out flex justify-center items-start mx-auto ${getHeightClass}`}
            >
              <div className={`${getWidthClass} aspect-[3/4] ${getHeightClass(index)} transition-all duration-500 ease-in-out`}
            >
                <ImageSection bookCoverPage={book.bookCoverPage}  />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel01;

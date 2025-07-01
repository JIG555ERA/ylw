import React, { useRef } from 'react';
import { SearchBar } from '../../midSection/searchBar/searchBar';
import ImageSection from '../../../../../globalComponents/ImageSection';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Image imports
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg';
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg';
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg';
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg';
import img05 from '../../../../../assets/bookCoverPages/coverPage05.svg';
import img06 from '../../../../../assets/bookCoverPages/coverPage06.svg';

// Reusable responsive config
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const booksData = [
  { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
  { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
  { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199 },
  { id: 3, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299 },
  { id: 4, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a Thousand Different Ways', bookAuthor: 'Cecelia Ahern', bookPrice: 299 },
  { id: 5, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129 },
  // Duplicates for demo scrolling
  { id: 6, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
  { id: 7, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
  { id: 8, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199 },
  { id: 9, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299 },
];

const Carousel01 = () => {
  const carouselRef = useRef();

  const handleBookClick = (index) => {
    carouselRef.current?.goToSlide(index, false);
  };

  return (
    <div className="w-full mx-[80px] h-[615px]  flex flex-col items-center rounded-[32px] mt-[140px] bg-gradient-to-br from-pink-100 via-white to-indigo-100 shadow-md">
      
      {/* Title */}
      <h1 className="text-[44px] font-semibold text-[#121212] text-center mt-[50px]">
        Your Literary World
      </h1>

      {/* Search */}
      <div className="w-full flex justify-center mt-[40px] focus:translate-y-[200px]">
        <SearchBar />
      </div>

      {/* Carousel */}
      <div className="w-[1070px] h-[345px] mx-auto mt-[70px]">
        <Carousel
          ref={carouselRef}
          autoPlay={true}
          swipeable={true}
          responsive={responsive}
          infinite={true}
          centerMode={true}
          arrows={false}
          autoPlaySpeed={1500}
          transitionDuration={500}
        >
          {booksData.map((book, index) => (
            <div
              key={book.id}
              className="px-2 cursor-pointer transition-transform duration-300 hover:scale-105 ease-in-out"
              onClick={() => handleBookClick(index)}
            >
              <div className="w-[140px] sm:w-[140px] aspect-[3/4] mx-auto">
                <ImageSection bookCoverPage={book.bookCoverPage} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousel01;

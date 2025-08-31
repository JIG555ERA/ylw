import React, { useState, useRef, useEffect } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import likeIcon from "../../../../../assets/displayIcons/heartIcon.svg";
import ColorThief from "colorthief";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const BookCard = ({ book }) => {
  const [colors, setColors] = useState([
    [255, 255, 255],
    [200, 200, 200],
  ]);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const colorThief = new ColorThief();

    const handleLoad = () => {
      if (img && img.complete) {
        try {
          const palette = colorThief.getPalette(img, 2);
          setColors(palette);
        } catch (err) {
          console.error("ColorThief error:", err);
        }
      }
    };

    if (img) {
      img.crossOrigin = "Anonymous";
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
        return () => img.removeEventListener("load", handleLoad);
      }
    }
  }, [book.bookCoverPage]);

  const rgba = (arr, alpha = 0.3) =>
    `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, ${alpha})`;
  const gradient = `linear-gradient(135deg, ${rgba(colors[0])}, ${rgba(
    colors[1]
  )})`;

  const handleAddToCart = () => {
  };

  return (
    <div className="block group relative lg:w-[210px] lg:h-[370px] w-[156px] h-[275px] lg:mt-[32px] md:mt-[24px] mt-[16px] font-[Poppins] group">

      {/* ✅ Main Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-start border-2 border-[#EDEDED] rounded-3xl mx-auto transition-transform duration-1000 delay-100 ease-in-out bg-white">

        <div
        className="w-full md:h-[250px] h-[200px]  overflow-hidden">
            {/* Hidden img for color extraction */}
            <img
            ref={imgRef}
            src={book.bookCoverPage}
            alt=""
            className="hidden"
            crossOrigin="anonymous"
          />

          <div
            className="absolute w-full h-[200px] inset-0 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity p-3 duration-1000 delay-100 ease-in-out z-0 [background-image] "
            style={{
              backgroundImage: gradient,
            }}
          />

          <img
            className="xl:h-[24px] xl:w-[24px] md:w-[20px] md:h-[20px] w-[16px] h-[16px] text-[#064FA4] absolute md:top-4 md:right-4 top-3 right-3"
            src={likeIcon}
            alt="like"
          />

          {/* Book image */}
          <div className="lg:w-[130px] w-[90px] h-auto aspect-[3/4] mx-auto md:mt-6 mt-3">
            <ImageSection bookCoverPage={book.bookCoverPage} />
          </div>
        </div>

        {/* Book info */}
        <div className="text-sm md:h-[200px] lg:mt-[36px] font-medium space-y-0.5 flex flex-col md:px-[16px] px-[12px]">
          <div
          className="flex md:mt-[8px] mt-[4px]">
            <div
            className="xl:w-[55%] md:w-[45%] w-[75%]">
              <p className="text-[#064FA4] lg:text-[16px] text-[14px] font-semibold line-clamp-2 mr-3">
                {book.bookTitle}
              </p>
            </div>
            <div
            className="flex flex-col md:w-[100px] w-[75px] top-[8px] right-[8px]">
              <p className="font-[Roboto] xl:text-[18px] bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 bg-clip-text text-transparent font-semibold text-[16px]">₹ {book.bookPrice}</p> 
              <p className="text-[12px] text-[#7C7C7C]/75 line-through"><span className="font-[Roboto]">₹</span> {Math.round(book.bookPrice + book.bookPrice/10)}</p>
            </div>
          </div>
          <p className="text-[#8C8C8C] xl:text-[14px] text-[12px] font-medium line-clamp-1">
            {book.bookAuthor}
          </p>
          <div className="w-full flex md:mt-1 items-center">
            <Rating value={3.5} readOnly style={{ maxWidth: 80 }} />
            <p className="xl:text-[12px] text-[10px] text-[#7C7C7C]/75 ml-1.5">4.6 (1840)</p>
          </div>
        </div>

        {/* Add to Cart button */}
        <div
          onClick={handleAddToCart}
          className="group w-[130px] group-hover:w-[170px] xl:h-[52px] md:h-[40px] h-[32px] 
                    border border-blue-500 font-semibold flex justify-center items-center 
                    rounded-[30px] xl:translate-y-[-16px] md:translate-y-[-12px] translate-y-[-8px] lg:text-[14px] text-[12px] cursor-pointer 
                    transition-all duration-1000 ease-in-out mx-auto 
                    bg-white relative overflow-hidden md:mt-[0px] mt-[12px] hover:shadow-md hover:shadow-gray-400 hover:scale-105"
        >
          <span
            className="bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                      bg-clip-text text-transparent transition-all duration-1000 ease-in-out 
                      group-hover:text-white group-hover:bg-none"
          >
            Add to Cart
          </span>

          {/* Hover gradient background overlay */}
          <div
            className="absolute inset-0 rounded-[30px] 
                      bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                      opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
          />
        </div>


      </div>
    </div>
  );
};

export default BookCard;

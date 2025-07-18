import React, { useState, useRef, useEffect } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import likeIcon from "../../../../../assets/displayIcons/heartIcon.svg";
import ColorThief from "colorthief";

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
    <div className="block group relative w-[210px] h-[350px] mt-[40px] font-[Poppins]">

      {/* ✅ Gradient Overlay */}
      <div
        className="absolute  w-[210px] h-[350px] inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity p-3 duration-1000 delay-100 ease-in-out z-0 [background-image] "
        style={{
          backgroundImage: gradient,
        }}
      />

      {/* ✅ Main Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-start border-2 border-[#EDEDED] rounded-xl mx-auto p-3 transition-transform duration-1000 delay-100 ease-in-out ">

        {/* Hidden img for color extraction */}
        <img
          ref={imgRef}
          src={book.bookCoverPage}
          alt=""
          className="hidden"
          crossOrigin="anonymous"
        />

        {/* Like icon */}
        <img
          className="h-[24px] w-[24px] text-[#064FA4] translate-x-[150px]"
          src={likeIcon}
          alt="like"
        />

        {/* Book image */}
        <div className="w-[140px] sm:w-[130px] h-auto aspect-[3/4] mx-auto">
          <ImageSection bookCoverPage={book.bookCoverPage} />
        </div>

        {/* Book info */}
        <div className="text-sm font-medium space-y-1 text-center flex flex-col justify-center mx-auto ">
          <p className="text-[#064FA4] text-[16px] font-semibold line-clamp-1">
            {book.bookTitle}
          </p>
          <p className="text-[#8C8C8C] text-[14px] font-medium line-clamp-1">
            {book.bookAuthor}
          </p>
          <p className="text-[#111111] text-[18px] font-medium flex mx-auto">
            <p className="font-[Roboto]">₹ {book.bookPrice}</p> 
          </p>
        </div>

        {/* Add to Cart button */}
        <div
          onClick={handleAddToCart}
          className="w-[130px] group-hover:w-[170px]  h-[37px] text-[#064FA4] bg-white border border-[#064FA4] font-semibold flex justify-center items-center rounded-[30px] mt-[9px] text-[14px] cursor-pointer group-hover:bg-[#043c7d] group-hover:text-white transition-all duration-1000 ease-in-out mx-auto"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default BookCard;

import React, { useState, useRef, useEffect } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import likeIcon from '../../../../../assets/displayIcons/heartIcon.svg';
import ColorThief from "colorthief";

const BookCard = ({ book }) => {
  const handleAddToCart = () => {
    // Add-to-cart logic
  };

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

  const rgba = (arr, alpha = 0.3) => `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, ${alpha})`;
   const gradient = `linear-gradient(135deg, ${rgba(colors[0], 0.3)}, ${rgba(colors[1], 0.3)})`;



  return (
    <div className="block group transition-all duration-500 ease-in-out">
      <div
        className="w-[210px] h-[350px] flex flex-col items-start shadow-lg rounded-xl mx-auto p-3 group-hover:scale-105 transition-all duration-500 ease-in-out group-hover:[background-image:var(--card-gradient)] "
        style={{
          "--card-gradient": gradient,
        }}
      >
        {/* Hidden img to extract color */}
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
        <div className="text-sm font-medium space-y-1 text-center flex flex-col justify-center mx-auto">
          <p className="text-[#064FA4] font-['Georama'] text-[16px] font-semibold">
            {book.bookTitle}
          </p>
          <p className="text-[#8C8C8C] font-['Exo_2'] text-[14px] font-medium">
            {book.bookAuthor}
          </p>
          <p className="text-[#111111] font-['Exo_2'] text-[18px] font-medium">
            ₹ {book.bookPrice}
          </p>
        </div>

        {/* Add to Cart */}
        <div
          onClick={handleAddToCart}
          className="w-[170px] h-[37px] text-[#064FA4] bg-white border border-[#064FA4] font-['Georama'] font-semibold flex justify-center items-center rounded-[18px] mt-[9px] text-[14px] cursor-pointer group-hover:bg-[#043c7d] group-hover:text-white transition-all duration-300 ease-in-out mx-auto"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default BookCard;

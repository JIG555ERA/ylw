import React, { useState, useRef, useEffect } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import likeIcon from "../../../../../assets/displayIcons/heartIcon.svg";
import ColorThief from "colorthief";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LikeMark from "../../../../../globalComponents/LikeMark";
import { useCart } from "../../../../../globalComponents/CartContext";
import { Minus, Plus } from "lucide-react";

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

  const { cartItems, addToCart, updateQuantity } = useCart();

  // ✅ check if this book is already in cart
  const cartItem = cartItems.find((item) => item.id === book.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(book); // start with quantity = 1
  };

  const handleIncrease = () => {
    if (quantity < 3) {
      updateQuantity(book.id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(book.id, quantity - 1);
    } else if (quantity === 1) {
      // if 0 → remove and back to Add to Cart
      updateQuantity(book.id, 0);
    }
  };

  return (
    <div className="block group relative lg:w-[210px] lg:h-[370px] w-[156px] h-[275px] lg:mt-[32px] md:mt-[24px] mt-[16px] font-[Poppins] group">
      
        {/* ✅ Main Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-start border-2 border-[#EDEDED] rounded-3xl mx-auto transition-transform duration-1000 delay-100 ease-in-out bg-white">
        <div className="w-full md:h-[250px] h-[200px] overflow-hidden">
          {/* Hidden img for color extraction */}
          
          <img
            ref={imgRef}
            src={book.bookCoverPage}
            alt=""
            className="hidden"
            crossOrigin="anonymous"
          />
          <div
            className="absolute w-full h-[200px] inset-0 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity p-3 duration-1000 delay-100 ease-in-out z-0"
            style={{
              backgroundImage: gradient,
            }}
          />

          <div className="absolute md:top-3 md:right-3 top-2.5 right-2.5 w-auto h-auto">
            <LikeMark />
          </div>

          {/* Book image */}
          <a href={`/product/${book.id}`}>
          <div className="lg:w-[130px] w-[90px] h-auto aspect-[3/4] mx-auto md:mt-6 mt-3">
            <ImageSection bookCoverPage={book.bookCoverPage} />
          </div>
          </a>
        </div>

        {/* Book info */}
        <div className="text-sm md:h-[200px] lg:mt-[36px] font-medium space-y-0.5 flex flex-col mx-auto md:px-[16px] px-[12px]">
          <div className="flex md:mt-[8px] mt-[4px]">
            <div className="flex ">
              <div className="flex flex-col w-[65%]">
                <p className="text-[#064FA4] lg:text-[16px] text-[14px] font-semibold line-clamp-2 mr-3">
                  {book.bookTitle}
                </p>
                <p className="text-[#8C8C8C] xl:text-[14px] text-[12px] font-medium line-clamp-1">
                  {book.bookAuthor}
                </p>
              </div>
              <div className="relative ml-auto flex flex-col items-end text-right">
                <p className="font-[Roboto] xl:text-[18px] bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 bg-clip-text text-transparent font-semibold text-[16px]">
                  ₹{book.bookPrice}
                </p>
                <p className="text-[12px] text-[#7C7C7C]/75 line-through">
                  <span className="font-[Roboto]">₹</span>
                  {Math.round(book.bookPrice + book.bookPrice / 10)}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex md:mt-1 items-center">
            <Rating value={3.5} readOnly style={{ maxWidth: 80 }} />
            <p className="xl:text-[12px] text-[10px] text-[#7C7C7C]/75 ml-1.5">
              4.6 (1840)
            </p>
          </div>
        </div>

        {/* ✅ Cart Button / Quantity Toggle */}
        {quantity === 0 ? (
          // Add to Cart button
          <div
            onClick={handleAddToCart}
            className="group w-[130px] group-hover:w-[170px] xl:h-[52px] md:h-[48px] h-[36px] 
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
            <div
              className="absolute inset-0 rounded-[30px] 
                bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
            />
          </div>
        ) : (
          // Quantity selector
          <div className="flex items-center xl:h-[52px] md:h-[48px] h-[36px]  xl:translate-y-[-16px] md:translate-y-[-12px] translate-y-[-8px] gap-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 border-blue-500 border-0 rounded-2xl justify-evenly w-[130px] mx-auto mt-2">
            <button
              onClick={handleDecrease}
              className="h-8 w-10 flex items-center justify-center cursor-pointer"
            >
              <Minus className="h-5 w-5 text-white" />
            </button>
            <div className="w-2 text-center text-[20px] text-white font-normal">
              {quantity}
            </div>
            <button
              onClick={handleIncrease}
              disabled={quantity >= 3}
              className={`h-8 w-10 flex items-center justify-center cursor-pointer ${
                quantity >= 3 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Plus className="h-5 w-5 text-white" />
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default BookCard;

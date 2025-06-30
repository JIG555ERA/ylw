import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";
import './ImageSection.css'


const ImageSection = ({ bookCoverPage, className = "" }) => {
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
  }, [bookCoverPage]);

  return (
    <div className={`relative w-full h-[90%] flex items-center justify-center ${className}`}>
      {/* Back cover */}
      <div
        className="absolute z-[2] w-[80%] h-[85%] rounded-bl-md"
        style={{ backgroundColor: `rgb(${colors[0].join(",")})` }}
      ></div>

      {/* White inner page */}
      <div className="absolute z-[4] w-[76%] h-[85%] border border-gray-300 rounded-tr-sm rounded-br-sm bg-white"></div>

      {/* Page lines */}
      <div className="absolute z-[6] w-[0.5%] h-[85%] bg-gray-300 translate-x-[31%]"></div>
      <div className="absolute z-[6] w-[0.5%] h-[85%] bg-gray-300 translate-x-[29.5%]"></div>

      {/* Horizontal line */}
      {/* <div className="absolute z-[6] w-[95%] h-[0.5%] bg-gray-300 translate-y-[40%]"></div> */}

      {/* Bookmark */}
      <div className="absolute z-[5] w-[12%] h-[8%] bg-yellow-400 right-[60%] bottom-[2%] clip-path-bookmark"></div>

      {/* Front Cover */}
      <div
        className="absolute z-[8] w-[75%] h-[85%] rounded-tl-md shadow-lg"
        style={{
          backgroundColor: `rgb(${colors[0].join(",")})`,
          transform: "translateX(-3%)",
        }}
      ></div>

      {/* Vertical stripe */}
      <div
        className="absolute z-[9] w-[3%] h-[85%] mr-[68%]"
        style={{
          backgroundColor: `rgb(${colors[1].join(",")})`,
          transform: "translateX(-33%)",
        }}
      ></div>

      {/* Book cover image */}
      <img
        ref={imgRef}
        src={bookCoverPage}
        alt="book cover"
        className="absolute w-[65%] h-[82%] z-9 translate-x-[3%]"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default ImageSection;

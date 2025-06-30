import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSection from "../../../../globalComponents/ImageSection";
import ColorThief from "colorthief";

export const Carousel = () => {
  const [colors, setColors] = useState([
    [64, 144, 212], // Default blue color
    [76, 81, 191],  // Default indigo color
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const imgRef = useRef(null);

  const booksData = [
    {
      id: 0,
      bookCoverPage: "../src/assets/bookCoverPages/coverPage01.svg",
      bookTitle: "Brida",
      bookAuthor: "Paulo Coelho",
      authorImage: "../src/assets/authorImages/author01.svg",
      bookPrice: 149,
      bookDescription: "A mystical tale of a young Irish girl's journey into the world of magic and self-discovery."
    },
    {
      id: 1,
      bookCoverPage: "../src/assets/bookCoverPages/coverPage02.svg",
      bookTitle: "Veronica Decides to Die",
      bookAuthor: "Paulo Coelho",
      authorImage: "../src/assets/authorImages/author02.svg",
      bookPrice: 99,
      bookDescription: "A story about a young woman who finds meaning in life after a suicide attempt."
    },
    {
      id: 2,
      bookCoverPage: "../src/assets/bookCoverPages/coverPage03.svg",
      bookTitle: "The Great Gatsby",
      bookAuthor: "F. Scott Fitzgerald",
      authorImage: "../src/assets/authorImages/author03.svg",
      bookPrice: 199,
      bookDescription: "A portrait of the Jazz Age in all of its decadence and excess."
    },
    {
      id: 3,
      bookCoverPage: "../src/assets/bookCoverPages/coverPage04.svg",
      bookTitle: "Norwegian Wood",
      bookAuthor: "Haruki Murakami",
      authorImage: "../src/assets/authorImages/author01.svg",
      bookPrice: 299,
      bookDescription: "A nostalgic story of loss and burgeoning sexuality set in 1960s Tokyo."
    },
    {
      id: 4,
      bookCoverPage: "../src/assets/bookCoverPages/coverPage05.svg",
      bookTitle: "In a Thousand Different Ways",
      bookAuthor: "Cecelia Ahern",
      authorImage: "../src/assets/authorImages/author02.svg",
      bookPrice: 299,
      bookDescription: "A novel about a woman who sees emotions as colors and must navigate life's challenges."
    },
    {
      id: 5,
      bookCoverPage: "../src/assets/bookCoverPages/coverPage06.svg",
      bookTitle: "If Beale Street Could Talk",
      bookAuthor: "James Baldwin",
      authorImage: "../src/assets/authorImages/author03.svg",
      bookPrice: 129,
      bookDescription: "A powerful story of love and injustice in 1970s Harlem."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="custom-dots-container">
        <ul className="m-0 p-0 flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="custom-dot"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const colorThief = new ColorThief();
    img.crossOrigin = "Anonymous";

    const handleLoad = () => {
      try {
        const palette = colorThief.getPalette(img, 2);
        setColors(palette);
      } catch (err) {
        console.error("ColorThief error:", err);
        // Fallback colors
        setColors([
          [64, 144, 212],
          [76, 81, 191]
        ]);
      }
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener("load", handleLoad);
      return () => img.removeEventListener("load", handleLoad);
    }
  }, [currentSlide]);

  const getBackgroundStyle = () => {
    const [color1, color2] = colors;
    return {
      background: `linear-gradient(135deg, rgba(${color1.join(',')}, 0.9), rgba(${color2.join(',')}, 0.9))`,
      boxShadow: `0 10px 30px -5px rgba(${color2.join(',')}, 0.3)`
    };
  };

  return (
    <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-hidden">
      <Slider {...settings} className="w-full rounded-xl overflow-hidden">
        {booksData.map((book, index) => (
          <div key={book.id} className="w-full h-[70vh] my-5">
            {/* Hidden img for ColorThief */}
            {index === currentSlide && (
              <img
                ref={imgRef}
                src={book.bookCoverPage}
                alt="Hidden Cover for Color Analysis"
                crossOrigin="anonymous"
                style={{ display: "none" }}
                onError={(e) => {
                  console.error("Error loading image:", book.bookCoverPage);
                  e.target.style.display = 'none';
                }}
              />
            )}

            {/* Slide Content */}
            <div 
              className="w-full h-full grid grid-rows-2 gap-6 rounded-xl p-6 transition-all duration-500"
              style={index === currentSlide ? getBackgroundStyle() : {}}
            >
              {/* Top Section - Book Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="flex flex-col justify-center px-4 md:px-8">
                  <div className="mb-4">
                    <span className="text-white bg-black/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                      Bestseller
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[Georama]">
                    {book.bookTitle}
                  </h1>
                  <p className="text-white/90 font-[Georama] text-lg mb-6 line-clamp-3">
                    {book.bookDescription}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 hover:scale-[1.03] transition-all duration-200 shadow-lg">
                      Add To Cart - ₹ {book.bookPrice}
                    </button>
                    <button className="px-6 py-2 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 hover:scale-[1.03] transition-all duration-200">
                      Preview
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <div className="flex items-center bg-black/20 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <img
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                      src={book.authorImage}
                      alt="Author"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a8a1e2a0a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a8a1e2a0a%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
                      }}
                    />
                    <div className="ml-4">
                      <h1 className="font-bold text-xl text-white">{book.bookAuthor}</h1>
                      <p className="font-medium text-white/80">Author</p>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Book Covers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  
                  <div className="hidden sm:block transform transition-all hover:scale-105 hover:z-10 hover:shadow-2xl">
                    <div className="aspect-[3/4] w-auto h-48">
                      {index > 0 && (
                        <ImageSection 
                          bookCoverPage={booksData[index - 1].bookCoverPage} 
                          className="rounded-lg shadow-md"
                        />
                      )}
                    </div>
                  </div>
                  

                  <div className="transform transition-all hover:scale-105 hover:z-10 hover:shadow-2xl">
                    <div className="aspect-[3/4] w-auto h-64">
                      <ImageSection 
                        bookCoverPage={book.bookCoverPage} 
                        className="rounded-lg shadow-xl"
                      />
                    </div>
                  </div>

                  {index + 1 < booksData.length && (
                    <div className="hidden sm:block transform transition-all hover:scale-105 hover:z-10 hover:shadow-2xl">
                      <div className="aspect-[3/4] w-auto h-48">
                        <ImageSection 
                          bookCoverPage={booksData[index + 1].bookCoverPage} 
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="hidden md:flex items-center justify-end">
                  <div className="bg-black/10 backdrop-blur-sm p-6 rounded-xl max-w-md">
                    <h3 className="text-white text-xl font-bold mb-2">Reader Reviews</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white text-sm">4.8/5 from 1,240 reviews</span>
                    </div>
                    <p className="text-white/80 italic text-sm">
                      "One of the most captivating books I've read this year. The storytelling is impeccable and the characters feel so real."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .custom-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }
        
        .slick-active .custom-dot {
          background-color: white;
          transform: scale(1.2);
        }
        
        .slick-dots li button:before {
          content: none;
        }
      `}</style>
    </div>
  );
};
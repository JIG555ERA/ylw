import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSection from "../../../../../globalComponents/ImageSection";
import { SearchBar } from "../../midSection/searchBar/searchBar";
import ColorThief from "colorthief";
import SearchBar02 from "../../../../../globalComponents/SearchBar02";
import { TrendingUp, Sparkles, Badge } from "lucide-react";
import GradientText from "../../../../../globalComponents/GradientText";

import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg';
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg';
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg';
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg';
import img05 from '../../../../../assets/bookCoverPages/coverPage05.svg';
import img06 from '../../../../../assets/bookCoverPages/coverPage06.svg';
import { icon } from "leaflet";

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

const Carousel02 = () => {
  const [colors, setColors] = useState([
    [255, 255, 255],
    [200, 200, 200],
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 7;

  useEffect(() => {
    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = booksData[(currentSlide + Math.floor(itemsPerSlide / 2)) % booksData.length].bookCoverPage;

    img.onload = () => {
      try {
        const palette = colorThief.getPalette(img, 2);
        setColors(palette);
      } catch (err) {
        console.error("ColorThief error:", err);
      }
    };
  }, [currentSlide]);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: itemsPerSlide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const getHeightClass = (index) => {
  const centerIndex = (currentSlide + Math.floor(itemsPerSlide / 2)) % booksData.length;
  const offset = Math.abs(index - centerIndex);
  const relativeOffset = Math.min(offset, booksData.length - offset);

  // Directional horizontal shift
  const direction =
    index < centerIndex
      ? "translate-x-[-15px]" 
      : index > centerIndex
      ? "translate-x-[30px]"
      : "translate-x-[-20px]"; 

  const direction01 =
    index < centerIndex
      ? "translate-x-[20px]" 
      : index > centerIndex
      ? "translate-x-[20px]"
      : "translate-x-[-20px]"; 

  const direction02 =
    index < centerIndex
      ? "translate-x-[90px]" 
      : index > centerIndex
      ? "translate-x-[-2px]"
      : "translate-x-[-20px]"; 

  const direction03 =
    index < centerIndex
      ? "translate-x-[90px]" 
      : index > centerIndex
      ? "translate-x-[-2px]"
      : "translate-x-[-20px]"; 

  switch (relativeOffset) {
    case 0:
      return `lg:h-[300px] lg:opacity-100 h-[120px] ${direction}`;
    case 1:
      return `lg:h-[205px] lg:mt-[32px] lg:opacity-70 h-[150px] ${direction}`;
    case 2:
      return `lg:h-[165px] lg:mt-[50px] lg:opacity-50 h-[120px] ${direction01}`;
    case 3:
      return `lg:h-[100px] lg:mt-[80px] lg:opacity-30 h-[120px] ${direction02}`;
    default:
      return `lg:h-[100px] lg:mt-[80px] lg:opacity-30 ${direction03}`;
  }
};


  const getWidthClass = (index) => {
    const centerIndex = (currentSlide + Math.floor(itemsPerSlide / 2)) % booksData.length;
    const offset = Math.abs(index - centerIndex);
    const relativeOffset = Math.min(offset, booksData.length - offset);

    switch (relativeOffset) {
      case 0:
        return "lg:w-[200px]";
      case 1:
        return "lg:w-[150px]";
      case 2:
        return "lg:w-[120px]";
      case 3:
        return "lg:w-[80px]";
      default:
        return "lg:w-[80px]";
    }
  };

  const tagContexts = [
    {id: 0, tagName: '50000+ books', icon: TrendingUp, color: "text-green-400"},
    {id: 1, tagName: 'Award Winners', icon: Badge, color: "text-amber-400"},
    {id: 2, tagName: 'Daily Updates', icon: Sparkles, color: "text-purple-400"},
  ]

  return (
    <div
      className="w-full 2xl:h-screen lg:h-[780px] md:h-[680px] h-[520px] items-center  mt-[80px] xl:py-[50px]  md:py-[40px]  xl:translate-y-[0px] md:translate-y-[-100px] translate-y-[-140px] opacity-100 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col justify-between"
      // style={{
      //   transition: "background 0.8s ease-in-out",
      //   background: `linear-gradient(to right, rgba(${colors[0].join(",")}, 0.3), rgba(${colors[1].join(",")}, 0.3))`,
      // }}
    >
      {/* Title */}
      <h1 className="xl:text-[56px] md:text-[44px] text-[24px] font-extrabold text-center">
        <GradientText>
          Your Literary World
        </GradientText>
      </h1>

      {/* Search Bar */}
      
        {/* <SearchBar /> */}
      <SearchBar02 />
      <div
      className="w-full h-auto items-center lg:gap-8 md:gap-6 flex justify-center">
        {tagContexts.map((badge) => (
          <div
          key={badge.id}
          className="lg:h-[50px] md:h-[40px] flex justify-center items-center px-[12px] rounded-3xl bg-white/75 hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer">
            <badge.icon className={`lg:w-5 md:w-4 lg:h-5 md:h-4 lg:mr-2 mr-1 ${badge.color}`} />
            <p className="lg:text-[16px] md:text-[14px] font-medium">{badge.tagName}</p>
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div className="w-[80vw] lg:h-[345px] mx-auto pointer-events-none ">
        <Slider {...settings}>
          {booksData.map((book, index) => (
            <div key={book.id} className="flex justify-center items-start px-2 gap-[20px]">
              <div
                className={`${getWidthClass(index)} ${getHeightClass(index)} aspect-[3/4] transition-all duration-500 ease-in-out`}
              >
                <ImageSection bookCoverPage={book.bookCoverPage} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel02;

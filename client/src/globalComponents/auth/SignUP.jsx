import React from 'react';
import { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InternalSignUP from './InternalSignUP';
import img01 from '../../assets/carouselImages/img01.jpg'
import img02 from '../../assets/carouselImages/img02.jpg'
import img03 from '../../assets/carouselImages/img03.jpg'
import img04 from '../../assets/carouselImages/img04.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const images = [
    {id: 0, img: img01},
    {id: 1, img: img02},
    {id: 2, img: img03},
    {id: 3, img: img04},
]

const SignUp = ({ deviceType = "desktop" }) => {
  return (
    <div className='w-screen h-screen  flex justify-center items-center font-[Poppins]'>
      
      <div className='2xl:mx-60 xl:mx-50 lg:mx-40 md:mx-10 sm:mx-8 mx-6 w-full h-[90vh] bg-black/50 relative z-10 rounded-2xl grid md:grid-cols-2'>
        
        {/* Carousel Column */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-[90%] h-[90%] rounded-2xl overflow-hidden">
            <h1 className='z-30 absolute font-semibold text-3xl text-white ml-6 mt-5 text-shadow-gray-900 shadow-2xl'>YLW</h1>
            <Carousel
              swipeable={false}
              draggable={false}
              arrows={false}
              showDots={false}
              keyBoardControl={false}
              autoPlay={true}
              responsive={responsive}
              ssr
              infinite
              autoPlaySpeed={3000}
              customTransition="all .5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              deviceType={deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-100px"
              
            >
              {images.map((img, index, arr) => (
                <img key={img.id} className='object-cover w-full h-[80vh] rounded-2xl' src={img.img} alt={img.img} />
              ))}
            </Carousel>
          </div>
        </div>

        {/* Form Column */}
        <div className='flex justify-center items-center'>
          <div className='w-[90%] h-[90%]'>
              <InternalSignUP />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default SignUp

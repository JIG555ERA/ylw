import React, { useState, useRef } from 'react';
import ImageSection from '../../../globalComponents/ImageSection';
import StarRating from './StarDisplay';
import BookCard from '../homePageComponents/midSection/bookListings/card';
import './ProductDisplayPage.css'

const ProductDisplayPage = () => {

  const [activePage, setActivePage] = useState('Product')

   const navItems = [
    { name: 'Home', icon: 'homeIcon', selectedIcon: 'selectedHomeIcon', link: `/`},
    { name: 'Categories', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/category`},
    { name: 'Product', icon: 'categoryIcon', selectedIcon: 'selectedCategoryIcon', link: `/product`},
    { name: 'Liked', icon: 'favouriteIcon', selectedIcon: 'selectedFavouriteIcon', link: `/liked`},
    { name: 'Profile', icon: 'userProfileIcon', selectedIcon: 'selectedUserProfileIcon', link: `/profile`},
  ]

  const booksData = [
    { id: 0, bookCoverPage: '../src/assets/bookCoverPages/coverPage01.svg', bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
    { id: 1, bookCoverPage: '../src/assets/bookCoverPages/coverPage02.svg', bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
    { id: 2, bookCoverPage: '../src/assets/bookCoverPages/coverPage03.svg', bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199 },
    { id: 3, bookCoverPage: '../src/assets/bookCoverPages/coverPage04.svg', bookTitle: 'Murakami', bookAuthor: 'Norweign Wood', bookPrice: 299 },
    {
      id: 4,
      bookCoverPage: '../src/assets/bookCoverPages/coverPage05.svg',
      bookTitle: 'In A Thousand Different Ways',
      bookAuthor: 'Cecelia Ahern',
      bookPrice: 299,
      bookDescription: 'The gripping and emotional novel from the million-copy bestselling author of PS, I Love You She knows your secrets. Now discover hers ',
      averageRating: 4.1,
      noOfRatings: 12,
      tags: [{ language: 'English' }, { genre: 'Fiction' }, { type: 'Paperback' }],
    },
    { id: 5, bookCoverPage: '../src/assets/bookCoverPages/coverPage06.svg', bookTitle: 'If beale street could talk', bookAuthor: 'James Baldwin', bookPrice: 129 },
    { id: 0, bookCoverPage: '../src/assets/bookCoverPages/coverPage01.svg', bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149 },
    { id: 1, bookCoverPage: '../src/assets/bookCoverPages/coverPage02.svg', bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99 },
    { id: 2, bookCoverPage: '../src/assets/bookCoverPages/coverPage03.svg', bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199 },
    { id: 3, bookCoverPage: '../src/assets/bookCoverPages/coverPage04.svg', bookTitle: 'Murakami', bookAuthor: 'Norweign Wood', bookPrice: 299 },
    
  ];

  const iconsImages = [
    { id: 0, img: '../src/assets/displayIcons/heartIcon.svg' },
    { id: 1, img: '../src/assets/displayIcons/shareIcon.svg' },
    { id: 2, img: '../src/assets/displayIcons/notebookIcon.svg' },
  ];

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const quantities = [1, 2, 3, '+'];
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = scrollRef.current?.offsetWidth || 300;
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const scrollAmount = scrollRef.current?.offsetWidth || 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };


  const handlePurchase = () => {
    console.log(`Purchasing ${selectedQuantity} items.`);
  };

  return (
    <div className='mx-[80px]'>
      {/* Navbar */}
      <div className="w-full flex flex-col items-center justify-evenly mt-4">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-[30px]">
          <img
            className="h-auto w-auto"
            src="../src/assets/logos/yourLiteraryWorldIcon.svg"
            alt="Your Literary World Logo"
          />
        </div>

        {/* Navigation Items */}
        <ul className="w-full flex justify-between items-center mb-5 pt-0 mt-0 box-border">
          {navItems.map((item) => (
            <a 
            key={item.name}
            href={item.link}>
            <li
              key={item.name}
              className={`
                flex items-center justify-between px-5 cursor-pointer transition-all duration-300 ease-in-out
                ${activePage === item.name
                  ? 'bg-[#064FA4] text-[#f0f0f0] font-normal text-base rounded-md animate-slide-in py-2.5'
                  : 'text-[#8C8C8C] py-2.5'}
              `}
              onClick={() => setActivePage(item.name)}
            >
              <img
                className="mr-2"
                src={`../src/assets/icons/${
                  activePage === item.name ? item.selectedIcon : item.icon
                }.svg`}
                alt={`${item.name} Icon`}
              />
              <p>{item.name}</p>
            </li>
            </a>
          ))}
        </ul>

        {/* Header Text
        <div className="flex justify-center">
          <h1 className="text-[54px] text-[#064FA4] font-medium font-['Exo_2']">
            Your Literary World
          </h1>
        </div> */}
      </div>

      <div className='flex flex-col justify-center items-end my-5 w-full overflow-hidden rounded-2xl'>
        {/* Product Display */}
        <div className='grid grid-rows-3 w-full translate-x-[100px] h-[500px] bg-gradient-to-t from-[#EFF7FF] to-[#FFFEF7] rounded-2xl'>
          <div>
            <div className='w-full sm:w-[225px] h-auto aspect-[3/4] translate-y-[120px] translate-x-[-110px]'>
              <ImageSection bookCoverPage={booksData[4].bookCoverPage} />
            </div>
          </div>

          <div className='flex-col justify-between items-start ml-40 translate-y-[-30px] w-[630px]'>
            <div className='font-[Exo_2] text-[#064FA4] text-2xl font-semibold '>
              <p className='text-shadow-lg shadow-gray-500'>{booksData[4].bookTitle}</p>
            </div>
            <div className='text-[16px] font-[Georama] text-[#8C8C8C] my-5'>
              "{booksData[4].bookDescription}"
            </div>

            <div className='grid grid-cols-3'>
              {/* stars */}
              <div>
                <StarRating rating={booksData[4].averageRating} />
              </div>
              {/* rating description */}
              <div className='font-[Georama] text-[15px] text-[#8C8C8C] translate-x-[-80px]'>
                {booksData[4].averageRating} ({booksData[4].noOfRatings} Ratings)
              </div>
              {/* tags */}
              <div className='flex gap-3 translate-x-[-160px]'>
                <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#EFF6FF] border border-[#D9E3FC] text-[13px] text-[#1447E7] flex justify-center items-center rounded-2xl pb-2'>
                  {booksData[4].tags[0].language}
                </div>
                <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#FAF5FF] border border-[#EEDCFB] text-[13px] text-[#8101DB] flex justify-center items-center rounded-2xl pb-2'>
                  {booksData[4].tags[1].genre}
                </div>
                <div className='font-[Exo_2] h-[21px] w-fit py-2 px-3 bg-[#FEFCE8] border border-[#F6E4BA] text-[13px] text-[#884B00] flex justify-center items-center rounded-2xl pb-2'>
                  {booksData[4].tags[2].type}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className='font-semibold text-[#121212] text-2xl mt-5'>
              ₹ {booksData[4].bookPrice}
            </div>

            {/* Quantity Section */}
            <p className='font-[Georama] text-[14px] text-[#8C8C8C] ml-[120px]'>Quantity</p>
            <div className='flex w-[300px] h-[40px]'>
              <div
                className='w-[150px] h-[40px] hover:bg-[#064FA4] flex justify-center items-center text-[14px] hover:text-white rounded-3xl cursor-pointer font-semibold px-2 bg-white hover:scale-[1.1] hover:shadow-gray-400 shadow-lg shadow-gray-300 text-[#064FA4] border-2 hover:border-[#064FA4] border-[#fff]'
                onClick={handlePurchase}
              >
                Add To Cart
              </div>
              <div className='w-full h-[40px] gap-3 flex justify-start items-center ml-5'>
                {quantities.map((qty) => (
                  <div
                    key={qty}
                    className={`w-[32px] h-[32px] rounded-full border font-semibold flex justify-center items-center cursor-pointer ${
                      selectedQuantity === qty
                        ? 'text-[#064FA4] border-[#064FA4] shadow-lg shadow-gray-300'
                        : 'text-[#064FA4] border-[#D9E3FC]'
                    }`}
                    onClick={() => setSelectedQuantity(qty)}
                  >
                    {qty}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* button section */}
          <div className='flex flex-col w-[50px] h-[200px] justify-between translate-x-[1300px] translate-y-[-180px]'>
            {iconsImages.map((icon) => (
              <div
                key={icon.id}
                className='w-[50px] h-[50px] rounded-full bg-white border border-[#B6D6FC] flex justify-center items-center'
              >
                <img src={icon.img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* You may also like section */}
        <div className='flex justify-between items-center mt-10 w-full'>
          <p className='text-[16px] font-semibold text-[#121212]'>You may also like</p>
          <div className='flex gap-2'>
            <button
              onClick={scrollLeft}
              className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-gray-100 transition'
            >
              <img src="../src/assets/icons/leftScrollButton.svg" alt="Scroll Left" />
            </button>
            <button
              onClick={scrollRight}
              className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-gray-100 transition'
            >
              <img src="../src/assets/icons/rightScrollButton.svg" alt="Scroll Right" />
            </button>
          </div>
        </div>

        {/* Scrollable books listing */}
        <div
          ref={scrollRef}
          className='mt-5 flex gap-4 overflow-x-auto scroll-smooth no-scrollbar mb-10'
        >
          {booksData.map((book) => (
            <div key={book.id} className='flex-shrink-0 w-[200px]'>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDisplayPage;

import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import BookCard from "../midSection/bookListings/card";
import { Navbar } from "../topSection/navBar/navbar";
import filledCheck from '../../../../assets/icons/filledCheck.svg';
import emptyCheck from '../../../../assets/icons/emptyCheck.svg';
import author01 from '../../../../assets/authorImages/author01.svg';
import author02 from '../../../../assets/authorImages/author02.svg';
import author03 from '../../../../assets/authorImages/author03.svg';
import author04 from '../../../../assets/authorImages/author04.svg';
import './CategoryPage.css'
import PhoneNavBar from '../../../../components/homePage/homePageComponents/topSection/navBar/PhoneNavBar'
import bookStoreLogo from '../../../../assets/logos/bookStoreLogo.svg'
import filterIcon from '../../../../assets/icons/filterIcon.svg'

// dataset import
import { booksData0 } from "../../../../globalComponents/booksData";
import Advertisements from "../../../../globalComponents/advertisements/Advertisements";

export const CategoryPage = ({ collection = "Fiction" }) => {
  const [openCard, setOpenCard] = useState({});
  const [category, setCategory] = useState({});
  const [author, setAuthor] = useState({});
  const [publication, setPublication] = useState({});
  const [priceRange, setPriceRange] = useState([150, 1200]);
  const [yearRange, setYearRange] = useState([1920, 2000]);

  const toggleCard = (id) => {
    setOpenCard(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleCategory = (id) => setCategory(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleAuthor = (id) => setAuthor(prev => ({ ...prev, [id]: !prev[id] }));
  const togglePublication = (id) => setPublication(prev => ({ ...prev, [id]: !prev[id] }));

  const handlePriceChange = (e, val) => setPriceRange(val);
  const handleYearChange = (e, val) => setYearRange(val);

  const filterCards = [
    { id: 0, name: "Category" },
    { id: 1, name: "Author" },
    { id: 2, name: "Publications" },
    { id: 3, name: "Price range" },
    { id: 4, name: "Book by year" },
  ];

  const categoryFilter = [
    { categoryId: 0, name: "Fiction" },
    { categoryId: 1, name: "Non-fiction" },
    { categoryId: 2, name: "Romance" },
    { categoryId: 3, name: "Horror" },
    { categoryId: 4, name: "Mystery" },
  ];

  const authorFilter = [
    { authorId: 0, name: "Thomas Erikson", img: author01 },
    { authorId: 1, name: "William Shakespeare", img: author02 },
    { authorId: 2, name: "J.K. Rowling", img: author03 },
    { authorId: 3, name: "Stephen King", img: author04 },
    { authorId: 4, name: "Rabindranath Tagore", img: author01 },
    { authorId: 5, name: "George Orwell", img: author02 },
    { authorId: 6, name: "Jane Austen", img: author03 },
    { authorId: 7, name: "Agatha Christie", img: author04 },
    { authorId: 8, name: "Paulo Coelho", img: author01 },
    { authorId: 9, name: "Ernest Hemingway", img: author02 },
    { authorId: 10, name: "Haruki Murakami", img: author03 },
    { authorId: 11, name: "Leo Tolstoy", img: author04 },
    { authorId: 12, name: "Dan Brown", img: author01 },
    { authorId: 13, name: "Mark Twain", img: author02 },
    { authorId: 14, name: "Chetan Bhagat", img: author03 },
  ];

  const publicationFilter = [
    { publicationId: 0, name: "Penguin Random House" },
    { publicationId: 1, name: "HarperCollins" },
    { publicationId: 2, name: "Simon & Schuster" },
    { publicationId: 3, name: "Hachette Book Group" },
    { publicationId: 4, name: "Macmillan Publishers" },
    { publicationId: 5, name: "Scholastic" },
    { publicationId: 6, name: "Pearson" },
    { publicationId: 7, name: "Oxford University Press" },
    { publicationId: 8, name: "Cambridge University Press" },
    { publicationId: 9, name: "Bloomsbury Publishing" },
    { publicationId: 10, name: "Wiley" },
    { publicationId: 11, name: "Springer Nature" },
    { publicationId: 12, name: "Taylor & Francis" },
    { publicationId: 13, name: "Zubaan Books" },
    { publicationId: 14, name: "Rupa Publications" },
    { publicationId: 15, name: "SAGE Publications" }
  ];

  const booksData = booksData0

  const filteredBooks = booksData.filter(book => {
    const categoryActive = Object.values(category).some(Boolean);
    const authorActive = Object.values(author).some(Boolean);
    const publicationActive = Object.values(publication).some(Boolean);

    const matchesCategory = !categoryActive || categoryFilter.some(c => category[c.categoryId] && c.name === book.category);
    const matchesAuthor = !authorActive || authorFilter.some(a => author[a.authorId] && a.name === book.bookAuthor);
    const matchesPublication = !publicationActive || publicationFilter.some(p => publication[p.publicationId] && p.name === book.publication);
    const matchesPrice = book.bookPrice >= priceRange[0] && book.bookPrice <= priceRange[1];
    const matchesYear = book.releaseYear >= yearRange[0] && book.releaseYear <= yearRange[1];

    return matchesCategory && matchesAuthor && matchesPublication && matchesPrice && matchesYear;
  });

  return (
    <div className="bg-[#FaFaFa] font-[Poppins]">
      <Navbar active="Categories" />
      {/* <a href="/" className="block lg:hidden w-full py-2">
        <div className="flex justify-center items-center">
          <img
            src={bookStoreLogo}
            alt="Book Store Logo"
            className="h-[72px] w-auto" // Adjust size as needed 
          />
        </div>
      </a>
      <div
      className="block lg:hidden w-full px-[16px] py-3">
        <div
        className="w-full flex justify-between">
          <h1
          className="text-[24px] font-semibold text-[#121212]">
            Collections
          </h1>
          <div
          className="w-[140px] h-[35px] flex justify-evenly items-center rounded-[20px] border-1 bg-[#ffffff] border-[#064FA4] font-medium">
            <img
            className="" 
            src={filterIcon} 
            alt="" />
            <p
            className="text-[14px] text-[#064FA4]">
              Filter Result
            </p>
          </div>
        </div>
      </div> */}
      <div className="w-full h-screen lg:px-[80px] px-[16px] grid grid-cols-[325px_1fr] gap-[80px] lg:pt-[140px]">
        
        <div className="hidden sm:block w-[325px] h-full pb-[80px] overflow-y-auto pr-2 overflow-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">

          <h1 className="text-[32px] font-semibold text-[#000000] mb-[10px] ">{collection} Collection</h1>

          {/* filters */}
                    {filterCards.map((card) => (
                        <div
                        key={card.id}
                        className="w-full h-auto bg-white p-[16px] mt-[20px] text-[16px] font-semibold text-[#000000]"> 
                            <div
                            className="flex justify-between">
                                <p>
                                    {card.name}
                                </p>
                                <div 
                                onClick={() => toggleCard(card.id)} 
                                className="cursor-pointer">
                                  {openCard[card.id] ? (
                                    <IoChevronUp className="w-[20px] h-[20px]" />
                                  ) : (
                                    <IoChevronDown className="w-[20px] h-[20px]" />
                                  )}
                                </div>
                            </div>

                            {openCard[card.id] && (
                                <div
                                className="w-full h-auto">
                                  {card.id === 0 && (
                                      <div>
                                        <div className="border-t-[2px] border-dashed border-[#D1D1D1] mt-5 "></div>
                                        <div
                                        className="w-full grid grid-cols-2 h-auto mt-3">

                                          {categoryFilter.map((item) => (
                                            <div
                                            key={item.categoryId}
                                            onClick={() => toggleCategory(item.categoryId)}
                                            className="flex mt-5 pr-[10px]">
                                              <div 
                                              className="cursor-pointer">
                                                {category[item.categoryId] ? (
                                                  <img src={filledCheck} alt="" className="w-[20px] h-[20px]" />
                                                ) : (
                                                  <img src={emptyCheck} alt="" className="w-[20px] h-[20px]"/>
                                                )}
                                              </div>
                                              <p
                                              className=" ml-2 line-clamp-1 cursor-pointer">
                                                {category[item.categoryId] ? (
                                                  <p className="text-[14px] font-semibold text-[#064FA4]">{item.name}</p>
                                                ) : (
                                                  <p className="text-[14px] font-semibold text-[#444444]">{item.name}</p>
                                                )}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                  )}

                                  {card.id === 1 && (
                                      <div>
                                        <div className="border-t-[2px] border-dashed border-[#D1D1D1] mt-5 "></div>
                                        <div
                                        className="w-full grid grid-cols-1 h-[420px] overflow-y-scroll scrollbar-2px mt-3">

                                          {authorFilter.map((item) => (
                                            <div
                                            key={item.authorId}
                                            onClick={() => toggleAuthor(item.authorId)}
                                            className={`flex mt-2 pr-[10px] items-center `}>
                                              <div 
                                              className="cursor-pointer">
                                                {author[item.authorId] ? (
                                                  <div
                                                  className="bg-[#EBF4FF] pl-2 py-2 rounded-l-3xl">
                                                    <img src={filledCheck} alt="" className="w-[28px] h-[28px] rounded-full" />
                                                  </div>
                                                ) : (
                                                  <div
                                                  className="pl-2 py-2 rounded-l-3xl">
                                                    <img src={item.img} alt="" className="w-[28px] h-[28px] rounded-full"/>
                                                  </div>
                                                )}
                                              </div>
                                              <p
                                              className=" line-clamp-1 cursor-pointer">
                                                {author[item.authorId] ? (
                                                  <p className="text-[14px] font-semibold text-[#064FA4] bg-[#EBF4FF] pl-2 py-3 pr-4 rounded-r-3xl">{item.name}</p>
                                                ) : (
                                                  <p className="text-[14px] font-semibold text-[#444444] py-3 pr-4 pl-2">{item.name}</p>
                                                )}
                                              </p>
                                            </div>
                                          ))}
                                        </div>

                                      </div>
                                  )}

                                  {card.id === 2 && (
                                      <div>
                                        <div className="border-t-[2px] border-dashed border-[#D1D1D1] mt-5 "></div>
                                        <div
                                        className="w-full grid grid-cols-2 h-auto mt-3">

                                          {publicationFilter.map((item) => (
                                            <div
                                            key={item.publicationId}
                                            onClick={() => togglePublication(item.publicationId)}
                                            className="flex mt-5 pr-[10px]">
                                              <div 
                                              className="cursor-pointer">
                                                {publication[item.publicationId] ? (
                                                  <img src={filledCheck} alt="" className="w-[30px] h-[20px]" />
                                                ) : (
                                                  <img src={emptyCheck} alt="" className="w-[30px] h-[20px]"/>
                                                )}
                                              </div>
                                              <p
                                              className="pl-2 line-clamp-1 cursor-pointer overflow-hidden">
                                                {publication[item.publicationId] ? (
                                                  <p className="text-[14px] font-semibold text-[#064FA4]">{item.name}</p>
                                                ) : (
                                                  <p className="text-[14px] font-semibold text-[#444444]">{item.name}</p>
                                                )}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                  )}

                                  {card.id === 3 && (
                                    <div>
                                        <div className="border-t-[2px] border-dashed border-[#D1D1D1] mt-5 "></div>
                                        <div className="w-full p-4 mt-4">
                                          <Box sx={{ width: '100%' }}>
                                            <Slider
                                              getAriaLabel={() => 'Price range'}
                                              value={priceRange}
                                              onChange={handlePriceChange}
                                              min={50}
                                              max={2000}
                                              step={50}
                                              valueLabelDisplay="off"
                                              sx={{
                                                color: '#064FA4',
                                                '& .MuiSlider-thumb': {
                                                  backgroundColor: '#4B6CB7',
                                                },
                                                '& .MuiSlider-track': {
                                                  backgroundColor: '#064FA4',
                                                },
                                                '& .MuiSlider-rail': {
                                                  backgroundColor: '#E5E5E5',
                                                },
                                              }}
                                            />
                                            <div className="flex justify-between mt-4 text-[#444444] text-sm font-medium">
                                              <span className="text-[16px] font-semibold">₹50</span>
                                              <span className="text-[#7C7C7C] font-normal text-[14px]">₹{priceRange[0]}</span>
                                              <span className="text-[#7C7C7C] font-normal text-[14px]">₹{priceRange[1]}</span>
                                              <span className="text-[16px] font-semibold">₹2,000</span>
                                            </div>
                                          </Box>
                                        </div>
                                    </div>
                                  )}

                                  {card.id === 4 && (
                                      <div>
                                        <div className="border-t-[2px] border-dashed border-[#D1D1D1] mt-5 "></div>
                                        <div className="w-full p-4 mt-4">
                                          <Box sx={{ width: '100%' }}>
                                            <Slider
                                              getAriaLabel={() => 'Price range'}
                                              value={yearRange}
                                              onChange={handleYearChange}
                                              min={1880}
                                              max={2025}
                                              step={1}
                                              valueLabelDisplay="off"
                                              sx={{
                                                color: '#064FA4',
                                                '& .MuiSlider-thumb': {
                                                  backgroundColor: '#4B6CB7',
                                                },
                                                '& .MuiSlider-track': {
                                                  backgroundColor: '#064FA4',
                                                },
                                                '& .MuiSlider-rail': {
                                                  backgroundColor: '#E5E5E5',
                                                },
                                              }}
                                            />
                                            <div className="flex justify-between mt-4 text-[#444444] text-sm font-medium">
                                              <span className="text-[16px] font-semibold">1880</span>
                                              <span className="text-[#7C7C7C] font-normal text-[14px]">{yearRange[0]}</span>
                                              <span className="text-[#7C7C7C] font-normal text-[14px]">{yearRange[1]}</span>
                                              <span className="text-[16px] font-semibold">2025</span>
                                            </div>
                                          </Box>
                                        </div>
                                    </div>
                                  )}

                                </div>
                                
                            )}
                        </div>
                    ))}
        </div>

        <div className="w-full h-full overflow-y-auto pr-2 overflow-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide">
          <a href="/" className="block lg:hidden w-full py-2">
            <div className="flex justify-center items-center">
              <img
                src={bookStoreLogo}
                alt="Book Store Logo"
                className="h-[72px] w-auto" // Adjust size as needed 
              />
            </div>
          </a>
          <div
          className="block lg:hidden w-full py-3">
            <div
            className="w-full flex justify-between">
              <h1
              className="text-[24px] font-semibold text-[#121212]">
                Collections
              </h1>
              <div
              className="w-[140px] h-[35px] flex justify-evenly items-center rounded-[20px] border-1 bg-[#ffffff] border-[#064FA4] font-medium">
                <img
                className="" 
                src={filterIcon} 
                alt="" />
                <p
                className="text-[14px] text-[#064FA4]">
                  Filter Result
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* Selected Tags Section */}
            <div className="w-full flex flex-wrap gap-2 mb-4">
              {[
                ...categoryFilter
                  .filter((c) => category[c.categoryId])
                  .map((c) => ({ section: "Category", name: c.name, id: c.categoryId, type: "category" })),
                ...authorFilter
                  .filter((a) => author[a.authorId])
                  .map((a) => ({ section: "Author", name: a.name, id: a.authorId, type: "author" })),
                ...publicationFilter
                  .filter((p) => publication[p.publicationId])
                  .map((p) => ({ section: "Publication", name: p.name, id: p.publicationId, type: "publication" })),
              ]
                .reduce((acc, curr) => {
                  const existing = acc.find((t) => t.section === curr.section);
                  if (existing) {
                    existing.items.push(curr);
                  } else {
                    acc.push({ section: curr.section, items: [curr] });
                  }
                  return acc;
                }, [])
                .map((group) => {
                  const names = group.items.map((t) => t.name);
                  let displayNames = names;

                  if (names.length > 2) {
                    const extraCount = names.length - 2;
                    displayNames = [...names.slice(0, 2), `+${extraCount}`];
                  }

                  return (
                    <div
                      key={group.section}
                      className="flex items-center bg-[#EBF4FF] text-[#064FA4] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {group.section}: {displayNames.join(", ")}
                      <button
                        onClick={() => {
                          group.items.forEach((tag) => {
                            if (tag.type === "category") toggleCategory(tag.id);
                            if (tag.type === "author") toggleAuthor(tag.id);
                            if (tag.type === "publication") togglePublication(tag.id);
                          });
                        }}
                        className="ml-2 text-[#064FA4] hover:text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
            </div>


          </div>
          <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-[16px] lg:pt-[0px] pb-[100px]">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
      <Advertisements />
      <PhoneNavBar />
    </div>
  );
};

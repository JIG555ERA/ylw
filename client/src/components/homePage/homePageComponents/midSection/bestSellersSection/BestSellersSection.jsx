import React from 'react'
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import ImageSection from '../../../../../globalComponents/ImageSection'
import bestSellerBg from '../../../../../assets/backgroundImages/bestSellerBg.svg'
import bestSellerPhoneBg from '../../../../../assets/backgroundImages/bestSellerPhoneBg.svg'


const BestSellersSection = () => {

    const trendingBooks = [
        { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, tags:['Adventure ', 'Thriller', 'comic']},
        { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, tags:['Adventure', 'Thriller', 'horror'] },
        { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, tags:['Adventure', 'Thriller', 'sci-fi'] },
    ]

    const handleAddToCart = () => {};

    return (
        <div
        className='w-full xl:h-[420px] h-[320px] flex flex-col justify-evenly md:pt-0 relative font-[Poppins]'>
            <div
            className='w-full h-[460px] absolute z-0 '>
                <img 
                className="w-full bg-cover"
                src={bestSellerBg} alt="" />
            </div>
            <div
            className='flex mx-auto flex-col relative'>
                <h1
                className='lg:text-[32px] text-[24px] font-semibold text-[#121212] text-center'>
                    Bestsellers
                </h1>
                <p
                className='font-normal text-[#8C8C8C] lg:text-[18px] text-[16px] text-center'>
                    YLW brings a special bestseller <span className='block sm:inline'></span> collection for you
                </p>
            </div>
            <div
            className='lg:h-[225px] w-full lg:px-[80px] md:px-[40px] px-[16px] h-[180px] mx-auto grid grid-cols-1 xl:flex justify-between  relative'>
                {trendingBooks.map((book, index, array) => (
                    <div
                    key={book.id}
                    className='lg:w-[420px] lg:h-[225px] w-[300px] h-[180px] flex group cursor-pointer'>
                        <div
                        className='lg:h-[225px] h-[180px] flex justify-center items-center w-[180px]'>
                            <div
                            className='lg:h-[210px] lg:w-[150px] w-[130px] aspect-[3/4] mx-auto'>
                                <ImageSection bookCoverPage={book.bookCoverPage} />
                            </div>
                        </div>
                        <div
                        className='lg:w-[180px] w-[150px] h-full flex flex-col justify-between lg:py-8 py-6 lg:translate-y-[0px] translate-y-[-8px]'>
                            <p
                            className='lg:text-[18px] text-[16px] font-semibold text-[#064FA4] line-clamp-1'>
                                {book.bookTitle}
                            </p>

                            <p
                            className='lg:text-[16px] text-[14px] font-semibold text-[#8C8C8C] line-clamp-1'>
                                {book.bookAuthor}
                            </p>

                            <p
                            className='text-[18px] font-semibold bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 
                            bg-clip-text text-transparent'>
                                <span className='font-[Roboto]'>₹</span>{book.bookPrice}
                            </p>

                            <div className="flex flex-row mb-4 gap-2 overflow-hidden">
                                {book.tags.slice(0, 2).map((tag, index) => (
                                    <div
                                    key={index}
                                    className="text-xs bg-white/60 border cursor-pointer border-gray-100 flex justify-center items-center rounded-2xl px-2 py-1 hover:shadow-md shadow-gray-300 backdrop-blur-sm"
                                    >
                                    {tag}
                                    </div>
                                ))}
                                {book.tags.length > 2 && (
                                    <div
                                        className="text-xs bg-white/60 border border-gray-100  rounded-2xl px-2 py-1 hover:shadow-md shadow-gray-300 backdrop-blur-sm"
                                        >
                                        +{book.tags.length - 2}
                                    </div>
                                )}
                            </div>

                            <div
                            onClick={handleAddToCart}
                            className="group w-[130px] group-hover:w-[170px] lg:h-[37px] h-[30px] 
                                        border border-blue-500 font-semibold flex justify-center items-center 
                                        rounded-[30px] lg:text-[14px] text-[12px] cursor-pointer 
                                        transition-all duration-1000 ease-in-out mx-auto 
                                         relative overflow-hidden md:mt-[0px] mt-[12px]"
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
                ))}

            </div>
            
        </div>
    )
}

export default BestSellersSection

import React from 'react'
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import ImageSection from '../../../../../globalComponents/ImageSection'
import bestSellerBg from '../../../../../assets/backgroundImages/bestSellerBg.svg'
import bestSellerPhoneBg from '../../../../../assets/backgroundImages/bestSellerPhoneBg.svg'


const BestSellersSection = () => {

    const trendingBooks = [
        { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, tags:['Adventure ', 'Thriller']},
        { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, tags:['Adventure', 'Thriller'] },
        { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, tags:['Adventure', 'Thriller'] },
    ]

    return (
        <div
        className='w-full h-[460px] pt-[60px] flex flex-col relative font-[Poppins]'>
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
                className='font-normal text-[#8C8C8C] lg:text-[18px] text-[16px] text-center lg:mt-[0px] mt-[8px]'>
                    YLW brings a special bestseller <span className='block sm:inline'></span> collection for you
                </p>
            </div>
            <div
            className='lg:h-[225px] w-full lg:px-[80px] md:px-[40px] px-[16px] h-[180px] mx-auto grid grid-cols-1 xl:flex justify-between mt-[40px] relative'>
                {trendingBooks.map((book, index, array) => (
                    <div
                    key={book.id}
                    className='lg:w-[360px] lg:h-[225px] w-[300px] h-[180px] flex '>
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
                            className='text-[14px] font-semibold text-[#064FA4] line-clamp-1'>
                                {book.bookTitle}
                            </p>

                            <p
                            className='text-[14px] font-semibold text-[#8C8C8C] line-clamp-1'>
                                {book.bookAuthor}
                            </p>

                            <p
                            className='text-[18px] font-normal text-[#111111]'>
                                ₹{book.bookPrice}
                            </p>

                            <p
                            className='text-[#E4854C] text-[12px] font-semibold flex mt-[10px]'>
                                {book.tags[0]}, {book.tags[1]}
                            </p>

                            <div
                            className='lg:w-[170px] w-[104px] lg:h-[37px] h-[33px] border-1 border-[#064FA4] flex justify-center items-center rounded-[18px] mt-[10px]'>
                                <p
                                className='text-[#064FA4] text-[14px] font-semibold '>
                                    Add to Cart
                                </p>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
            
        </div>
    )
}

export default BestSellersSection

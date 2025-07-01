import React from 'react'
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import ImageSection from '../../../../../globalComponents/ImageSection'


const BestSellersSection = () => {

    const trendingBooks = [
        { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, tags:['Adventure ', 'Thriller']},
        { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, tags:['Adventure', 'Thriller'] },
        { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, tags:['Adventure', 'Thriller'] },
    ]

    return (
        <div
        className='w-full h-[460px] py-[60px]  mt-[40px] flex flex-col '>
            <div
            className='flex mx-auto flex-col'>
                <h1
                className='text-[32px] font-semibold text-[#121212] text-center'>
                    Bestsellers
                </h1>
                <p
                className='font-normal text-[#8C8C8C] text-[18px] text-center'>
                    YLW brings a special bestseller collection for you
                </p>
            </div>
            <div
            className='w-[1280px] h-[225px] mx-auto flex justify-between mt-[40px]'>
                {trendingBooks.map((book, index, array) => (
                    <div
                    className='w-[360px] h-[225px] flex '>
                        <div
                        className='h-[225px] flex justify-center items-center w-[180px]'>
                            <div
                            className='h-[210px] w-[150px] aspect-[3/4] mx-auto'>
                                <ImageSection bookCoverPage={book.bookCoverPage} />
                            </div>
                        </div>
                        <div
                        className='w-[180px] h-full flex flex-col justify-between py-8'>
                            <p
                            className='text-[14px] font-semibold text-[#064FA4]'>
                                {book.bookTitle}
                            </p>

                            <p
                            className='text-[14px] font-semibold text-[#8C8C8C]'>
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
                            className='w-[170px] h-[37px] border-2 border-[#064FA4] bg-white flex justify-center items-center rounded-[18px] mt-[10px]'>
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

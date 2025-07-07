import React from 'react'
import { Navbar } from '../topSection/navBar/navbar'
import StarRating from '../../productDisplayPage/StarDisplay'
import ImageSection from '../../../../globalComponents/ImageSection'
import img01 from '../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../assets/bookCoverPages/coverPage04.svg'
import img05 from '../../../../assets/bookCoverPages/coverPage05.svg'
import img06 from '../../../../assets/bookCoverPages/coverPage06.svg'
import author01 from '../../../../assets/authorImages/author01.svg'
import heartIcon01 from '../../../../assets/icons/heartIcon01.svg'
import SimilarToBook from './similarToBook/SimilarToBook'
import SimilarToAuthor from './similarToAuthor/SimilarToAuthor'
import SimilarToCollection from './similarToCollection/SimilarToCollection'
import BooksCategory from './booksCategory/BooksCategory'
import AboutAuthor from './aboutAuthor/AboutAuthor'
import AboutPublication from './aboutPublication/AboutPublication'
import CommonFAQs from './commonFAQs/CommonFAQs'

const ProductPage = () => {

    const booksData = [
        { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 110, discountPercentage: 10 },
        { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 110, discountPercentage: 10, rating: 4.1, authorImg: author01, tags:['Self-help', 'English', 'Paperback'], description: "Do you ever think you’re the only one making any sense? Or tried  to reason with your partner with disastrous results? Do long, rambling  answers drive you crazy? Or does your colleague’s abrasive manner rub  you the wrong way? You are not alone. After a disastrous meeting with a  highly successful entrepreneur, who was genuinely convinced he was  ‘surrounded by idiots’, communication expert and bestselling author. Surrounded by Idiots is an international phenomenon, selling over 1.5  million copies worldwide. It offers a simple, yet ground-breaking method for assessing the personalities of people we communicate with - in and  out of the office - based on four personality types (Red, Blue, Green  and Yellow), and provides insights into how we can adjust the way we  speak and share information. ", aboutAuthor: "Do you ever think you’re the only one making any sense? Or tried  to reason with your partner with disastrous results? Do long, rambling  answers drive you crazy? Or does your colleague’s abrasive manner rub  you the wrong way? You are not alone. After a disastrous meeting with a  highly successful entrepreneur, who was genuinely convinced he was  ‘surrounded by idiots’, communication expert and bestselling author.", aboutPublication: "Do you ever think you’re the only one making any sense? Or tried  to reason with your partner with disastrous results? Do long, rambling  answers drive you crazy? Or does your colleague’s abrasive manner rub  you the wrong way? You are not alone. After a disastrous meeting with a  highly successful entrepreneur, who was genuinely convinced he was  ‘surrounded by idiots’, communication expert and bestselling author." },
        { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, discountedPrice: 110, discountPercentage: 10 },
        { id: 3, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299, discountedPrice: 110, discountPercentage: 10 },
        { id: 4, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299, discountedPrice: 110, discountPercentage: 10 },
        { id: 5, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129, discountedPrice: 110, discountPercentage: 10 },
        { id: 6, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 110, discountPercentage: 10 },
        { id: 7, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 110, discountPercentage: 10 },
        { id: 8, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, discountedPrice: 110, discountPercentage: 10 },
        { id: 9, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299, discountedPrice: 110, discountPercentage: 10 },
        { id: 10, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299, discountedPrice: 110, discountPercentage: 10 },
        { id: 11, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129, discountedPrice: 110, discountPercentage: 10 },
        { id: 12, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 110, discountPercentage: 10 },
        { id: 13, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 110, discountPercentage: 10 },
        { id: 14, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, discountedPrice: 110, discountPercentage: 10 },
        { id: 15, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Murakami', bookPrice: 299, discountedPrice: 110, discountPercentage: 10 },
        { id: 16, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299, discountedPrice: 110, discountPercentage: 10 },
        { id: 17, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129, discountedPrice: 110, discountPercentage: 10 },
    ];

    return (
        <div
        className='flex flex-col justify-between items-center font-[Poppins] text-[#000000] bg-[#F9F9F9]'>
            <Navbar active=''/>
            <div
            className='flex w-full h-[470px] mt-[140px] px-[80px]'>
                <div className="w-[313px] sm:w-[313px] h-[470px] aspect-[3/4] mx-auto ">
                    <ImageSection bookCoverPage={booksData[1].bookCoverPage} />
                </div>
                <div
                className='w-full h-[470px] flex  flex-col items-start text-[42px] font-semibold  py-[25px] ml-[20px]'>
                    <h1>{booksData[1].bookTitle}</h1>
                    <div
                    className='flex h-auto justify-center items-center'>
                        <h1
                        className='text-[28px] font-semibold flex'>
                            <p className='font-[Roboto]'>₹ {booksData[1].discountedPrice}</p> 
                        </h1>
                        <h1
                        className='text-[18px] font-normal stroke-1 text-[#7D7D7D] ml-[10px] line-through flex '>
                            <p className='font-[Roboto]'>₹{booksData[1].bookPrice}</p>
                        </h1>
                        <p
                        className='ml-[10px] text-[#1038FF] text-[14px] font-medium'>
                            {booksData[1].discountPercentage}% off
                        </p>
                    </div>
                    <div
                    className='flex mt-[10px] h-auto justify-center items-center'>
                       <StarRating rating={booksData[1].rating}/>
                       <p
                       className='text-[14px] font-normal text-[#7C7C7C] ml-[10px]'>
                            {booksData[1].rating} (YLW Review)
                       </p>
                    </div>
                    <div
                    className='flex mt-[15px] h-auto justify-center items-center'>
                        <img 
                        className='w-[38px] h-[38px] bg-cover rounded-full'
                        src={booksData[1].authorImg} alt="" />
                        <p
                        className='text-[16px] font-semibold text-[#121212] ml-[10px]'>
                            {booksData[1].bookAuthor}  
                        </p>
                        {/* tags */}
                        <p
                        className='text-[#E4854C] text-[18px] font-semibold ml-[20px]'>
                            {booksData[1].tags[0]} 
                        </p>
                        <p className='text-[28px] font-extralight ml-[10px] text-[#C4C4C4]'>|</p>
                        <p
                        className='text-[#B28ABA] text-[18px] font-semibold ml-[10px]'>
                            {booksData[1].tags[1]} 
                        </p>
                        <p className='text-[28px] font-extralight ml-[10px] text-[#C4C4C4]'>|</p>
                        <p
                        className='text-[#E9B552] text-[18px] font-semibold ml-[10px]'>
                            {booksData[1].tags[2]} 
                        </p>
                    </div>
                    <div>
                        <p
                        className='text-[14px] mt-[10px] text-[#7C7C7C] font-normal line-clamp-5'>
                            {booksData[1].description}
                        </p>
                    </div>
                    <div
                    className='flex mt-[15px] h-auto justify-center items-center'>
                        <a 
                        className=''
                        href="">
                            <div
                            className='w-[190px] h-[50px] bg-[#064FA4] rounded-[18px] flex justify-center items-center'>
                                <p className='text-white text-[16px] font-semibold'>Add to cart</p>
                            </div>
                        </a>
                        <a 
                        className='rounded-[12px] border-[#EDEDED] shadow-md bg-white w-[60px] h-[50px] flex justify-center items-center ml-[30px]'
                        href="">
                            <img 
                            className=''
                            src={heartIcon01} 
                            alt="" />
                        </a>

                    </div>
                </div>
            </div>
            <SimilarToBook context={booksData[1].bookTitle}/>
            <SimilarToAuthor context={booksData[1].bookAuthor}/>
            <SimilarToCollection context={`${booksData[1].tags[0]} collection`} />
            <BooksCategory />
            <AboutAuthor context={booksData[1].aboutAuthor}/>
            <AboutPublication context={booksData[1].aboutAuthor}/>
            <CommonFAQs />
        
        </div>
    )
}

export default ProductPage

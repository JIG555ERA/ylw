import React from 'react'
import BookCard from '../bookListings/card'
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg'
import img05 from '../../../../../assets/bookCoverPages/coverPage05.svg'
import img06 from '../../../../../assets/bookCoverPages/coverPage06.svg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'


const FictionCollection = () => {

    const booksData = [
        {id: 1, bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99},
        {id: 0, bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149},
        {id: 3, bookCoverPage: img04, bookTitle: 'Murakami', bookAuthor: 'Norweign Wood', bookPrice: 299},
        {id: 2, bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199},
        // {id: 5, bookCoverPage: img06, bookTitle: 'If beale street co...', bookAuthor: 'James Baldwin', bookPrice: 129},
        // {id: 4, bookCoverPage: img05, bookTitle: 'In a thousand diff...', bookAuthor: 'Cecelia Ahern', bookPrice: 299},
    ];
    
    const handleViewAll = () => {
    
    }

    return (
        <div className="lg:mx-[80px] mx-[16px] lg:mt-[40px] mt-[16px] font-[Poppins]">
            <div className="w-full border-t-[2px] border-dashed border-[#D1D1D1] flex lg:block hidden"/>
            <div className="books-listing-title-section flex justify-between mt-[30px]">
                <div className="selected-categroy-title-section flex">
                    <p className="translate-y-[4px] lg:text-[24px] text-[18px] text-[#111111] font-semibold flex">
                        Best of fiction collection
                    </p>
                </div>
                <div className="flex justify-between">
                    <div 
                    onClick={handleViewAll}
                    className="view-all-button">
                        <div
                        className="view-all-button0">
                            <p
                            className="view-all-text">
                                View All
                            </p>
                        </div>
                    </div>
                    <div className="lg:flex hidden">
                        <div className="scroll-button">
                            <img
                                className="left-scroll-button-image"
                                src={leftScrollButton}
                                alt="left scroll"
                            />
                        </div>
                        <div className="scroll-button">
                            <img
                                className="right-scroll-button-image"
                                src={rightScrollButton}
                                alt="right scroll"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-2 w-full lg:gap-12 gap-[16px] lg:translate-x-[-12px]">
                {booksData.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default FictionCollection

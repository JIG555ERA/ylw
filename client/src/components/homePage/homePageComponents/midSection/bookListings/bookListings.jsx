import React from "react";
import BookCard from "./card"; 
import './bookListings.css';
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg'
import img05 from '../../../../../assets/bookCoverPages/coverPage05.svg'
import img06 from '../../../../../assets/bookCoverPages/coverPage06.svg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'


export const BookListings = () => {
    const booksData = [
        {id: 1, bookCoverPage: img01, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99},
        {id: 2, bookCoverPage: img02, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199},
        {id: 0, bookCoverPage: img03, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149},
        {id: 3, bookCoverPage: img04, bookTitle: 'Murakami', bookAuthor: 'Norweign Wood', bookPrice: 299},
        {id: 4, bookCoverPage: img05, bookTitle: 'In a thousand diff...', bookAuthor: 'Cecelia Ahern', bookPrice: 299},
        {id: 5, bookCoverPage: img06, bookTitle: 'If beale street co...', bookAuthor: 'James Baldwin', bookPrice: 129}
    ];

    const handleViewAll = () => {

    }

    return (
        <div className="mx-[80px] mt-[40px]">
            <div className="w-full  border-t-[2px] border-dashed border-[#D1D1D1] "/>
            <div className="books-listing-title-section flex justify-between mt-[30px]">
                <div className="selected-categroy-title-section">
                    <p className="translate-y-[20px] text-[24px] font-semibold">
                        Best of non-fiction collection
                    </p>
                </div>
                <div className="books-listing-title-buttons-section">
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
                    <div className="scroll-button-section">
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
            <div className="grid grid-cols-6 w-full mt-5 gap-12 translate-x-[-12px]">
                {booksData.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

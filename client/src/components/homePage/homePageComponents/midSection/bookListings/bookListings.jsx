import React from "react";
import BookCard from "./card"; 
import './bookListings.css';

export const BookListings = () => {
    const booksData = [
        {id: 0, bookCoverPage: '../src/assets/bookCoverPages/coverPage01.svg', bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149},
        {id: 1, bookCoverPage: '../src/assets/bookCoverPages/coverPage02.svg', bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99},
        {id: 2, bookCoverPage: '../src/assets/bookCoverPages/coverPage03.svg', bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199},
        {id: 3, bookCoverPage: '../src/assets/bookCoverPages/coverPage04.svg', bookTitle: 'Murakami', bookAuthor: 'Norweign Wood', bookPrice: 299},
        {id: 4, bookCoverPage: '../src/assets/bookCoverPages/coverPage05.svg', bookTitle: 'In a thousand different ways', bookAuthor: 'Cecelia Ahern', bookPrice: 299},
        {id: 5, bookCoverPage: '../src/assets/bookCoverPages/coverPage06.svg', bookTitle: 'If beale street could talk', bookAuthor: 'James Baldwin', bookPrice: 129}
    ];

    const handleViewAll = () => {

    }

    return (
        <div className="book-listings-main ">
            <div className="books-listing-title-section flex justify-between mt-10">
                <div className="selected-categroy-title-section">
                    <p className="selected-category-title translate-y-[20px]">
                        Fiction Collection
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
                                src="../src/assets/icons/leftScrollButton.svg"
                                alt="left scroll"
                            />
                        </div>
                        <div className="scroll-button">
                            <img
                                className="right-scroll-button-image"
                                src="../src/assets/icons/rightScrollButton.svg"
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

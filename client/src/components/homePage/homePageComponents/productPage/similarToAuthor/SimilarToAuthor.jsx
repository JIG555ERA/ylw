import React from 'react'
import img01 from '../../../../../assets/bookCoverPages/coverPage01.svg'
import img02 from '../../../../../assets/bookCoverPages/coverPage02.svg'
import img03 from '../../../../../assets/bookCoverPages/coverPage03.svg'
import img04 from '../../../../../assets/bookCoverPages/coverPage04.svg'
import img05 from '../../../../../assets/bookCoverPages/coverPage05.svg'
import img06 from '../../../../../assets/bookCoverPages/coverPage06.svg'
import BookCard from '../../midSection/bookListings/card'

const SimilarToAuthor = ({context=''}) => {

    const booksData = [
        {id: 0, bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149},
        {id: 2, bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott FitzerALD', bookPrice: 199},
        {id: 1, bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99},
        {id: 4, bookCoverPage: img05, bookTitle: 'In a thousand diff...', bookAuthor: 'Cecelia Ahern', bookPrice: 299},
        {id: 3, bookCoverPage: img04, bookTitle: 'Murakami', bookAuthor: 'Norweign Wood', bookPrice: 299},
        {id: 5, bookCoverPage: img06, bookTitle: 'If beale street co...', bookAuthor: 'James Baldwin', bookPrice: 129}
    ];
    
    
    const handleViewAll = () => {
    
    }

    return (
        <div className="px-[80px] mt-[50px] w-full">
            <div className="books-listing-title-section flex justify-between ">
                <div className="selected-categroy-title-section">
                    <p className="translate-y-[20px] text-[24px] text-[#111111] font-semibold">
                        Most of {context}
                    </p>
                </div>
                {/* <div className="books-listing-title-buttons-section">
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
                </div> */}
            </div>
            <div className="grid grid-cols-6 w-full gap-12 translate-x-[-12px]">
                {booksData.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}

export default SimilarToAuthor

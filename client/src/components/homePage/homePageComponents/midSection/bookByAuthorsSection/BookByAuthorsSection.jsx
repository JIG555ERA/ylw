import React from 'react'
import author01 from '../../../../../assets/authorImages/author01.svg'
import author02 from '../../../../../assets/authorImages/author02.svg'
import author03 from '../../../../../assets/authorImages/author03.svg'
import author04 from '../../../../../assets/authorImages/author07.jpeg'
import leftScrollButton from '../../../../../assets/icons/leftScrollButton.svg'
import rightScrollButton from '../../../../../assets/icons/rightScrollButton.svg'
import AuthorCard from './AuthorCard'

const BookByAuthorsSection = () => {

    const authorInfo = [
         {id: 0, img: author01, name: 'Sarah Chen', description: "Sarah's parents moved the family back and forth between the United States, Canada, and Taiwan throughout Sarah's childhood, but her mother always made sure that Sarah and her brother continued learning Chinese.", books: 8},
         {id: 1, img: author02, name: 'Marcus Thompson', description: "Marcus Thompson is a contemporary fiction writer known for his sharp storytelling and deep character explorations. His works often blend emotional depth with real-world themes, creating narratives that resonate with readers across generations.", books: 8},
         {id: 2, img: author03, name: 'Elena Rodriguez', description: "Elena Rodriguez is a passionate storyteller whose novels celebrate culture, identity, and human connection. With a flair for weaving rich settings and heartfelt emotions, her writing transports readers into worlds both familiar and new.", books: 8},
         {id: 3, img: author04, name: 'Dr. Adien Kumar', description: "Dr. Adien Kumar is an acclaimed author and researcher who bridges science and storytelling. His works combine academic insight with accessible prose, inspiring readers to explore knowledge, philosophy, and the human spirit.", books: 8},
    ]
    

    const handleViewAll = () => {

    }    

    return (
        <div className="lg:mx-[80px] mx-[16px] lg:mt-[40px] mt-[16px] font-[Poppins]">
            <div className="w-full border-t-[2px] border-dashed border-[#D1D1D1] lg:block hidden"/>
            <div className="books-listing-title-section flex justify-between mt-[30px]">
                <div className="selected-categroy-title-section">
                    <p className="translate-y-[4px] lg:text-[24px] text-[18px] text-[#111111] font-semibold">
                        Book by Authors 
                    </p>
                </div>
                <div className="flex justify-between">
                    {/* <div 
                    onClick={handleViewAll}
                    className="view-all-button">
                        <div
                        className="view-all-button0">
                            <p
                            className="view-all-text">
                                View All
                            </p>
                        </div>
                    </div> */}
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
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full lg:justify-between lg:h-[450px] lg:gap-[32px] md:px-0 px-[16px] gap-[16px] lg:translate-x-[-12px] mt-[50px]">
                {authorInfo.map((author, index, array) => (
                    <AuthorCard context={author} />
                ))}
            </div>
        </div>
    )
}

export default BookByAuthorsSection

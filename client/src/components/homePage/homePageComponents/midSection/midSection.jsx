import React from "react";
import { CategorySection } from './categorySection/categorySection'
import { BookListings } from './bookListings/bookListings'
import { AuthorSection } from './authorSection/authorSection'
import BestSellersSection from "./bestSellersSection/BestSellersSection";
import BestSellersListing from "./bestSellersListing/BestSellersListing";
import FictionCollection from "./fictionCollection/FictionCollection";
import BookByAuthorsSection from "./bookByAuthorsSection/BookByAuthorsSection";
import BooksByPublications from "./booksByPublications/BooksByPublications";
import NewsLetter from "../../../../globalComponents/NewsLetter";

export const MidSection = () => {
    return (
        <div className="main-section bg-[#F9F9F9]">
            <BestSellersSection />
            <CategorySection />
            <BookByAuthorsSection />
            <BestSellersListing />
            <FictionCollection />
            <BookListings />
            <BooksByPublications />
            <NewsLetter />
            {/* <AuthorSection /> */}
        </div>
    )
}
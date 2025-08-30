import React from "react";
import { CategorySection } from './categorySection/categorySection'
import { BookListings } from './bookListings/bookListings'
import { AuthorSection } from './authorSection/authorSection'
import BestSellersSection from "./bestSellersSection/BestSellersSection";
import BestSellersListing from "./bestSellersListing/BooksListing";
import FictionCollection from "./fictionCollection/FictionCollection";
import BookByAuthorsSection from "./bookByAuthorsSection/BookByAuthorsSection";
import BooksByPublications from "./booksByPublications/BooksByPublications";
import NewsLetter from "../../../../globalComponents/NewsLetter";
import BooksListing from "./bestSellersListing/BooksListing";

export const MidSection = () => {
    return (
        <div className="main-section bg-[#F9F9F9]">
            <BestSellersSection />
            <CategorySection />
            <BookByAuthorsSection />
            <BooksListing sectionName={"Bestseller"} /> 
            <BooksListing sectionName={"Best of fiction collection"} /> 
            <BooksListing sectionName={"Best of non-fiction collection"} /> 
            <BooksByPublications />
            <NewsLetter />
            {/* <AuthorSection /> */}
        </div>
    )
}
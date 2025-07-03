import React from "react";
import './midSection.css'
import { CategorySection } from './categorySection/categorySection'
import { BookListings } from './bookListings/bookListings'
import { AuthorSection } from './authorSection/authorSection'
import BestSellersSection from "./bestSellersSection/BestSellersSection";
import BestSellersListing from "./bestSellersListing/BestSellersListing";
import FictionCollection from "./fictionCollection/FictionCollection";
import BookByAuthorsSection from "./bookByAuthorsSection/BookByAuthorsSection";

export const MidSection = () => {
    return (
        <div className="main-section bg-[#F9F9F9]">
            <BestSellersSection />
            <CategorySection />
            <BestSellersListing />
            <FictionCollection />
            <BookListings />
            {/* <AuthorSection /> */}
            <BookByAuthorsSection />
        </div>
    )
}
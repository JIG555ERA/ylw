import React from "react";
import './midSection.css'
import { SearchBar } from './searchBar/searchBar'
import { CategorySection } from './categorySection/categorySection'
import { BookListings } from './bookListings/bookListings'
import { AuthorSection } from './authorSection/authorSection'

export const MidSection = () => {
    return (
        <div className="main-section">
            <SearchBar />
            <CategorySection />
            <BookListings />
            <AuthorSection />
        </div>
    )
}
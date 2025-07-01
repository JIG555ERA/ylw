import React, { useState, useEffect, useRef } from "react";
import ImageSection from "../../../../../globalComponents/ImageSection";
import searchIcon from '../../../../../assets/icons/searchIcon.svg'
import './searchBar.css';

export const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);
  const wrapperRef = useRef(null);

  const tags = [
    { tagId: 1, tagName: "Book Name" },
    { tagId: 2, tagName: "Author" },
    { tagId: 3, tagName: "Genre" },
    { tagId: 4, tagName: "Language" },
  ];

  const suggestionSectionCard = [
    { bookId: 0, bookName: "Klara and the sun", authorName: "Kazuo Ishihuro", bookImage: '../src/assets/bookCoverPages/coverPage01.svg', languageTag: 'English', genreTag: 'Fiction', price: 199 },
    { bookId: 1, bookName: "Save me the waltz", authorName: "Zelda Fitzgerald", bookImage: '../src/assets/bookCoverPages/coverPage02.svg', languageTag: 'English', genreTag: 'Romance', price: 99 },
    { bookId: 2, bookName: "In a thousand different ways", authorName: "Cecelia Ahern", bookImage: '../src/assets/bookCoverPages/coverPage03.svg', languageTag: 'English', genreTag: 'Classics', price: 229 },
    { bookId: 3, bookName: "The covenant of water", authorName: "Abraham Verghese", bookImage: '../src/assets/bookCoverPages/coverPage04.svg', languageTag: 'English', genreTag: 'Non Fiction', price: 349 },
    { bookId: 4, bookName: "Premchandra Sahitya Rachnavli", authorName: "James Baldwin", bookImage: '../src/assets/bookCoverPages/coverPage05.svg', languageTag: 'Hindi', genreTag: 'Regional', price: 369 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getOptionsByTag = (tagName) => {
    switch (tagName) {
      case "Book Name":
        return [...new Set(suggestionSectionCard.map((book) => book.bookName))];
      case "Author":
        return [...new Set(suggestionSectionCard.map((book) => book.authorName))];
      case "Genre":
        return [...new Set(suggestionSectionCard.map((book) => book.genreTag))];
      case "Language":
        return [...new Set(suggestionSectionCard.map((book) => book.languageTag))];
      default:
        return [];
    }
  };

  const handleFilterChange = (tagName, option) => {
    setSelectedFilters((prev) => {
      const current = prev[tagName] || [];
      const updated = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [tagName]: updated };
    });
  };

  const isFiltered = (book) => {
    return Object.entries(selectedFilters).every(([tagName, values]) => {
      if (values.length === 0) return true;
      switch (tagName) {
        case "Book Name":
          return values.includes(book.bookName);
        case "Author":
          return values.includes(book.authorName);
        case "Genre":
          return values.includes(book.genreTag);
        case "Language":
          return values.includes(book.languageTag);
        default:
          return true;
      }
    });
  };

  const filteredCards = suggestionSectionCard.filter(isFiltered);

  const toggleDropdown = (tagId) => {
    setOpenDropdown(prev => (prev === tagId ? null : tagId));
  };

  return (
    <div className="search-wrapper mt-5" ref={wrapperRef} style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Search Input */}
      <div className={`container ${active ? "active" : ""}`}>
        <div className="search-section">
          <div className={`search-container ${active ? "active" : ""} bg-white`} onClick={() => setActive(true)}>
            <input
              className={`search-bar ${active ? "active" : ""} bg-white`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="search-button">
            <div className="button-container">
              <img className="search-icon" src={searchIcon} alt="search icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {active && (
        <div className="search-suggestion active" style={{ position: "absolute", top: "60px", width: "1000px", background: "white", zIndex: 10, borderRadius: "20px", boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", padding: "20px" }}>
          {/* Filter Tags */}
          <div className="tags-section active" style={{ display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
            {tags.map((tag) => (
              <div key={tag.tagId} className="tag active py-1.5" style={{ position: 'relative' }}>
                <div
                  onClick={() => toggleDropdown(tag.tagId)}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <img className="tag-img active" src={`../src/assets/tagIcons/tag0${tag.tagId}.svg`} alt={tag.tagName} />
                  <p className="tag-name active" style={{ marginLeft: '8px' }}>{tag.tagName}</p>
                </div>

                {openDropdown === tag.tagId && (
                  <div className="dropdown-options" style={{
                    marginTop: '10px',
                    position: 'absolute',
                    background: 'white',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    zIndex: 20,
                    width: '200px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(80px)',
                    width: '250px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    {getOptionsByTag(tag.tagName).map((option) => (
                      <label key={option} style={{ display: 'block', fontSize: '14px' }}>
                        <input
                          type="checkbox"
                          value={option}
                          checked={(selectedFilters[tag.tagName] || []).includes(option)}
                          onChange={() => handleFilterChange(tag.tagName, option)}
                        />{" "}
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Selected Tags as #tags
            <div style={{ maxWidth: '300px' }}>
              <h4 style={{ marginBottom: '8px' }}>Selected:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.entries(selectedFilters).flatMap(([key, values]) =>
                  values.map((value) => (
                    <span key={`${key}-${value}`} style={{ background: '#d0e6ff', padding: '4px 8px', borderRadius: '10px', fontSize: '13px' }}>
                      #{value}
                    </span>
                  ))
                )}
              </div>
            </div> */}
          </div>

          {/* Selected Tags as #tags */}
            <div style={{ maxWidth: '800px' }}>
              <h4 style={{ marginBottom: '8px' }}>Selected:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.entries(selectedFilters).flatMap(([key, values]) =>
                  values.map((value) => (
                    <span key={`${key}-${value}`} style={{ background: '#d0e6ff', padding: '4px 8px', borderRadius: '10px', fontSize: '13px' }}>
                      #{value}
                    </span>
                  ))
                )}
              </div>
            </div>

          {/* Cards */}
          <div className="suggestion-section active" style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            {filteredCards.map((card) => (
              <div key={card.bookId} className="suggestion-card active" style={{ display: "flex", borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                <div className="left-section active" style={{ display: 'flex', flexDirection: 'row', width: '40%' }}>
                  <div className="image-section active">
                    <div className="w-full sm:w-[180px] h-auto aspect-[3/4]">
                      <ImageSection bookCoverPage={card.bookImage} />
                    </div>
                  </div>
                  <div className="description-section active mt-10">
                    <p className="book-name active">{card.bookName}</p>
                    <p className="author-name active">{card.authorName}</p>
                  </div>
                </div>
                <div className="right-section active" style={{ width: "60%", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="suggestion-tags-section active" style={{ display: 'flex', gap: '10px' }}>
                    <p className="tag-01-text active">{card.languageTag}</p>
                    <p className="tag-02-text active">{card.genreTag}</p>
                  </div>
                  <p className="price_ active">₹ {card.price}</p>
                  <p className="add-to-cart-text_ active">Add To Cart</p>
                  <img className="heart-image active" src='../src/assets/icons/heartIcon.svg' alt="like" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

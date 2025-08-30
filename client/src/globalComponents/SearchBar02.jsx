import { useState, useEffect, useRef } from "react";
import { Search, Sparkles, TrendingUp } from "lucide-react";

const searchSuggestions = [
  "Search book by name...",
  "Search book by author...",
  "Find your next great read...",
  "Discover bestselling books...",
  "Explore new releases...",
  "Search by genre or category...",
];

const popularSearches = [
  "Fiction", "Self-Help", "Psychology", "Science Fiction",
  "Biography", "Thriller", "History", "Finance"
];

const SearchBar02 = ({ searchQuery, onSearchChange, onSearchClick, books = [], authors = [] }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const inputRef = useRef(null);
  const [ searchQuey, setSearchQuery ] = useState('');

  useEffect(() => {
    if (!isFocused && !searchQuery) {
      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % searchSuggestions.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isFocused, searchQuery]);

  const filteredBookSuggestions = books
    .filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3);

  const filteredAuthorSuggestions = authors
    .filter(author =>
      author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      author.genre.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3);

  const handleFocus = () => {
    setIsFocused(true);
    if (!searchQuery) setShowSuggestions(true);
  };

  const handleClick = () => {
    onSearchClick();
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
      setShowSuggestions(false);
    }, 200);
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
    onSearchClick();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    onSearchClick();
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto ">
      <form onSubmit={handleSearchSubmit} className="relative group">
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-vibrant-purple/30 via-vibrant-pink/30 to-vibrant-blue/30 rounded-2xl blur-xl transition-all duration-500 ${
              isFocused ? "scale-105 opacity-100" : "scale-100 opacity-60"
            }`}
          ></div>

          <div
            className="lg:w-full w-[85vw] lg:mx-0 mx-2 relative bg-white/75 lg:h-auto h-15 flex  items-center backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl transition-all duration-300 hover:shadow-3xl cursor-pointer"
            onClick={handleClick}
          >
            <div className="flex lg:justify-between items-center p-2 w-full">
              <div className="flex items-center justify-center w-14 h-14 ml-2">
                <div
                  className={`lg:w-12 lg:h-12 h-8 w-8 rounded-full bg-gradient-to-r bg-white flex items-center justify-center transition-all duration-300 lg:translate-x-[0px] translate-x-[-4px] ${
                    isFocused ? "scale-110 shadow-lg" : "scale-100"
                  }`}
                >
                  <Search className="h-[32px] w-[32px] text-[#444444]" />
                </div>
              </div>

              <input
                ref={inputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={searchSuggestions[currentPlaceholder]}
                className="flex-1 border-0 bg-transparent lg:text-lg text-md lg:px-4 px-2 lg:py-6 py-3 placeholder:text-muted-foreground/70 focus:outline-none transition-all duration-300 cursor-pointer"
              />

              <button
                type="submit"
                className="mr-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-white border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 lg:px-8 px-1 lg:py-3 py-1 rounded-2xl flex lg:text-lg text-sm items-center lg:translate-x-[0px] translate-x-[-60px] font-semibold"
              >
                {/* <Sparkles className="h-4 w-4 lg:mr-2 mr-1 lg:text-xl" /> */}
                <p className="text-[20px]">Search</p>
              </button>
            </div>
          </div>
        </div>

        {showSuggestions && !searchQuery && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/50 backdrop-blur-xl rounded-2xl shadow-2xl z-50 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-vibrant-orange" />
                <span className="text-sm font-semibold text-muted-foreground">Popular Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSuggestionClick(search)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text- rounded-full text-sm font-medium hover:from-purple-400 hover:to-pink-400 hover:text-white transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar02;
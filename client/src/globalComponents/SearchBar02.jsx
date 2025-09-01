import { useState, useEffect, useRef } from "react";
import { Search, TrendingUp } from "lucide-react";

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

const SearchBar02 = ({
  searchQuery: externalSearchQuery,
  onSearchChange: externalOnSearchChange,
  onSearchClick = () => {},
  books = [],
  authors = [],
}) => {
  const [internalQuery, setInternalQuery] = useState("");
  const searchQuery = externalSearchQuery !== undefined ? externalSearchQuery : internalQuery;
  const onSearchChange = externalOnSearchChange || setInternalQuery;

  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const rowRef = useRef(null);
  const [rowH, setRowH] = useState(0);

  // Measure row height
  useEffect(() => {
    const measure = () => {
      const h = inputRef.current?.offsetHeight || rowRef.current?.offsetHeight || 48;
      setRowH(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Roll placeholder every 2.5s
  useEffect(() => {
    if (!isFocused && !searchQuery) {
      const id = setInterval(() => {
        setIndex((prev) => (prev + 1) % searchSuggestions.length);
      }, 2500);
      return () => clearInterval(id);
    }
  }, [isFocused, searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    setShowSuggestions(false);
    onSearchClick(searchQuery);
  };

  const handleSuggestionClick = (value) => {
    onSearchChange(value);
    setErrorMessage(false);
    setShowSuggestions(false);
    onSearchClick(value);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearchSubmit} className="relative group">
        <div className="relative">
          {/* Glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-400/30 to-blue-400/30 rounded-2xl blur-xl transition-all duration-500 ${
              isFocused ? "scale-105 opacity-100" : "scale-100 opacity-60"
            }`}
          />

          {/* Search box */}
          <div
            className={`lg:w-full w-[85vw] mx-2 relative flex items-center backdrop-blur-xl rounded-2xl border shadow-2xl transition-all duration-300 hover:shadow-3xl ${
              errorMessage ? "border-red-500 bg-white/75" : "border-white/30 bg-white/75"
            }`}
          >
            <div className="flex items-center p-2 w-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 ml-2">
                <div
                  className={`lg:w-12 lg:h-12 w-8 h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
                    isFocused ? "scale-110 shadow-lg" : "scale-100"
                  }`}
                >
                  <Search className="h-6 w-6 lg:h-8 lg:w-8 text-[#444444]" />
                </div>
              </div>

              {/* Input + rolling placeholder */}
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (errorMessage) setErrorMessage(false);
                  }}
                  onFocus={() => {
                    setIsFocused(true);
                    if (!searchQuery) setShowSuggestions(true);
                  }}
                  onBlur={() =>
                    setTimeout(() => {
                      setIsFocused(false);
                      setShowSuggestions(false);
                    }, 200)
                  }
                  className="w-full border-0 bg-transparent xl:text-[20px] md:text-[16px] px-2 lg:px-4 py-3 lg:py-6 placeholder-transparent focus:outline-none"
                />

                {/* Rolling placeholder */}
                {!searchQuery && (
                  <div
                    className="pointer-events-none absolute left-2 lg:left-4 top-0 right-4 overflow-hidden text-gray-500 xl:text-[20px] md:text-[16px]"
                    style={{ height: rowH || 48 }}
                    aria-hidden="true"
                  >
                    <div
                      className="transition-transform duration-1000 ease-in-out"
                      style={{ transform: `translateY(-${index * (rowH || 48)}px)` }}
                    >
                      {searchSuggestions.map((s, i) => (
                        <div
                          key={i}
                          ref={i === 0 ? rowRef : null}
                          className="flex items-center"
                          style={{ height: rowH || 48 }}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mr-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 px-4 lg:px-8 py-2 lg:py-3 rounded-2xl font-semibold text-sm lg:text-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Error */}
      {errorMessage && (
        <div className="mt-2 text-center text-red-600 text-sm lg:text-base">
          Kindly enter your request
        </div>
      )}

      {/* Popular searches */}
      {showSuggestions && !searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/50 backdrop-blur-xl rounded-2xl shadow-2xl z-50">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700">
                Popular Searches
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSuggestionClick(s)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar02;

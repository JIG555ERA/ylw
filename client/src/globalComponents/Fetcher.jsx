import React, { useState, useEffect} from 'react'
import { booksDataFetcher} from "./booksData.js"

const Fetcher = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await booksDataFetcher();
      setBooks(data);
    };
    loadBooks();
  }, []);
    return (
        <div
        className='w-full h-screen bg-[#121212] text-[12px] text-[#f9f9f9] font-normal'>
            <p
            className=''>
                {JSON.stringify(books)}
            </p>
        </div>
    )
}

export default Fetcher

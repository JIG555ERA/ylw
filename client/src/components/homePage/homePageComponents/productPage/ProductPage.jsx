import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Navbar from '../topSection/navBar/navbar.jsx';
import StarRating from '../../productDisplayPage/StarDisplay';
import ImageSection from '../../../../globalComponents/ImageSection';
// Import all your book cover and author images directly
import img01 from '../../../../assets/bookCoverPages/coverPage01.svg';
import img02 from '../../../../assets/bookCoverPages/coverPage02.svg';
import img03 from '../../../../assets/bookCoverPages/coverPage03.svg';
import img04 from '../../../../assets/bookCoverPages/coverPage04.svg';
import img05 from '../../../../assets/bookCoverPages/coverPage05.svg';
import img06 from '../../../../assets/bookCoverPages/coverPage06.svg';
import author01 from '../../../../assets/authorImages/author01.svg';
import SimilarToBook from './similarToBook/SimilarToBook';
import SimilarToAuthor from './similarToAuthor/SimilarToAuthor';
import SimilarToCollection from './similarToCollection/SimilarToCollection';
import BooksCategory from './booksCategory/BooksCategory';
import AboutAuthor from './aboutAuthor/AboutAuthor';
import AboutPublication from './aboutPublication/AboutPublication';
import CommonFAQs from './commonFAQs/CommonFAQs';
import BooksListing from '../../homePageComponents/midSection/bestSellersListing/BooksListing.jsx';
import { CategorySection } from '../../homePageComponents/midSection/categorySection/categorySection.jsx';
import NewsLetter from '../../../../globalComponents/NewsLetter.jsx';
import LikeMark from '../../../../globalComponents/LikeMark.jsx';
import { useCart } from '../../../../globalComponents/CartContext'; // Assuming you use CartContext here too
import { Minus, Plus } from 'lucide-react';


const ProductPage = () => {
    const { id } = useParams(); // Get the 'id' from the URL
    const [book, setBook] = useState(null); // State to store the fetched book
    const [loading, setLoading] = useState(true); // Loading state

    // Your dummy booksData - ideally, this would come from an API
    const allBooksData = [
        { id: 0, category: 'Fiction', bookCoverPage: img01, bookTitle: 'Brida', bookAuthor: 'Paulo Coelho', bookPrice: 149, discountedPrice: 110, discountPercentage: 10, rating: 4.0, authorImg: author01, tags:['Fantasy', 'English', 'Paperback'], description: "Brida, a young Irish girl, is searching for knowledge. On her journey, she meets a wise old magician and a powerful Witch, who teach her about love, passion, and the hidden wisdom of the soul. But Brida must choose between her quest for knowledge and her desire for true love. Paulo Coelho's enchanting novel delves into the mysteries of spirituality, destiny, and the power of love, inviting readers to explore the magic within themselves and the world around them.", aboutAuthor: "Paulo Coelho is a Brazilian lyricist and novelist. He has received numerous international awards for his works, including The Alchemist and Brida. He is one of the most widely read authors in the world, with his books translated into 80 languages and selling over 210 million copies.", aboutPublication: "HarperOne is a leading publisher of books for people who are interested in exploring their faith and spirituality, understanding their history, and improving their lives. It is an imprint of HarperCollins Publishers." },
        { id: 1, category: 'Romance', bookCoverPage: img02, bookTitle: 'Veronica Decides to Die', bookAuthor: 'Paulo Coelho', bookPrice: 99, discountedPrice: 80, discountPercentage: 19, rating: 4.1, authorImg: author01, tags:['Self-help', 'English', 'Paperback'], description: "Do you ever think you’re the only one making any sense? Or tried  to reason with your partner with disastrous results? Do long, rambling  answers drive you crazy? Or does your colleague’s abrasive manner rub  you the wrong way? You are not alone. After a disastrous meeting with a  highly successful entrepreneur, who was genuinely convinced he was  ‘surrounded by idiots’, communication expert and bestselling author. Surrounded by Idiots is an international phenomenon, selling over 1.5  million copies worldwide. It offers a simple, yet ground-breaking method for assessing the personalities of people we communicate with - in and  out of the office - based on four personality types (Red, Blue, Green  and Yellow), and provides insights into how we can adjust the way we  speak and share information. ", aboutAuthor: "Paulo Coelho is a Brazilian lyricist and novelist. He has received numerous international awards for his works, including The Alchemist and Brida. He is one of the most widely read authors in the world, with his books translated into 80 languages and selling over 210 million copies.", aboutPublication: "HarperOne is a leading publisher of books for people who are interested in exploring their faith and spirituality, understanding their history, and improving their lives. It is an imprint of HarperCollins Publishers." },
        { id: 2, category: 'Non Fiction', bookCoverPage: img03, bookTitle: 'The Great Gatsby', bookAuthor: 'F. Scott Fitzgerald', bookPrice: 199, discountedPrice: 150, discountPercentage: 25, rating: 4.5, authorImg: author01, tags:['Classic', 'English', 'Hardcover'], description: "The Great Gatsby, F. Scott Fitzgerald's masterpiece, is a poignant tale of love, illusion, and the American Dream. Set in the roaring twenties, it follows the enigmatic millionaire Jay Gatsby and his pursuit of the beautiful Daisy Buchanan. Through lavish parties and illicit affairs, Fitzgerald paints a vivid picture of an era defined by materialism and moral decay.", aboutAuthor: "F. Scott Fitzgerald was an American novelist and short story writer. He is widely regarded as one of the greatest American writers of the 20th century. His works, including The Great Gatsby, captured the essence of the Jazz Age and explored themes of wealth, class, and the American Dream.", aboutPublication: "Scribner is an American publishing company, founded in 1846 by Charles Scribner. It is known for publishing works by acclaimed authors such as Ernest Hemingway, F. Scott Fitzgerald, and Thomas Wolfe. Scribner is an imprint of Simon & Schuster." },
        { id: 3, category: 'Young Adult', bookCoverPage: img04, bookTitle: 'Norwegian Wood', bookAuthor: 'Haruki Murakami', bookPrice: 299, discountedPrice: 220, discountPercentage: 26, rating: 4.3, authorImg: author01, tags:['Coming-of-age', 'English', 'Paperback'], description: "Norwegian Wood tells the story of Toru, a quiet and introspective college student in 1960s Tokyo, as he navigates love, loss, and the complexities of human relationships. Haunted by the suicide of his best friend, Toru finds himself drawn to two contrasting women: the enigmatic and troubled Naoko, and the vibrant and independent Midori. Murakami's evocative prose explores themes of memory, desire, and the search for meaning in a tumultuous world.", aboutAuthor: "Haruki Murakami is a Japanese writer. His novels, essays, and short stories have been translated into over 50 languages and have sold millions of copies worldwide. He is known for his surrealist and melancholic themes, often incorporating elements of magical realism.", aboutPublication: "Vintage Books is a paperback imprint of Penguin Random House, one of the world's largest trade book publishers. Vintage publishes a wide range of fiction and non-fiction, including literary classics, contemporary fiction, and popular non-fiction titles." },
        { id: 4, category: 'Featured', bookCoverPage: img05, bookTitle: 'In a thousand dif...', bookAuthor: 'Cecelia Ahern', bookPrice: 299, discountedPrice: 250, discountPercentage: 16, rating: 4.2, authorImg: author01, tags:['Fantasy', 'English', 'Paperback'], description: "Alice is living a life she never asked for. Trapped in a job she hates, she wishes for something more. One day, she stumbles upon a mysterious book that transports her to a world where wishes come true. But as Alice discovers, every wish has a consequence, and some consequences can be deadly. Cecelia Ahern's enchanting novel explores the power of wishes, the complexities of fate, and the true meaning of happiness.", aboutAuthor: "Cecelia Ahern is an Irish novelist, known for her romantic and contemporary fiction. Her works, including P.S. I Love You and Where Rainbows End, have been translated into numerous languages and have sold millions of copies worldwide.", aboutPublication: "HarperCollins Publishers is one of the world's largest publishing companies. It publishes a broad range of books, including fiction, non-fiction, children's books, and religious works. HarperCollins is a subsidiary of News Corp." },
        { id: 5, category: 'Fiction', bookCoverPage: img06, bookTitle: 'If Beale Street Could Talk', bookAuthor: 'James Baldwin', bookPrice: 129, discountedPrice: 100, discountPercentage: 22, rating: 4.6, authorImg: author01, tags:['Drama', 'English', 'Paperback'], description: "If Beale Street Could Talk is a poignant and powerful novel about love, injustice, and resilience. Set in 1970s Harlem, it tells the story of Tish, a young black woman who is pregnant with the child of her fiancé, Fonny, who has been falsely accused of rape. As Tish fights to prove Fonny's innocence, she reflects on their love story and the challenges they face in a prejudiced society. James Baldwin's lyrical prose explores themes of racial injustice, systemic oppression, and the enduring power of love.", aboutAuthor: "James Baldwin was an American novelist, playwright, essayist, poet, and activist. His works, including Go Tell It on the Mountain and If Beale Street Could Talk, explored complex social and psychological pressures, particularly concerning race, sexuality, and class in Western societies.", aboutPublication: "Penguin Random House is a multinational conglomerate publishing company, formed in 2013 by the merger of Penguin Group and Random House. It is the largest general-interest paperback publisher in the world." },
        // ... add more books with complete details
    ];

    useEffect(() => {
        // In a real application, you would fetch this from an API
        // Example: fetch(`/api/books/${id}`)
        setLoading(true);
        const foundBook = allBooksData.find(b => b.id === parseInt(id));
        if (foundBook) {
            setBook(foundBook);
        } else {
            setBook(null); // Or handle "book not found" state
        }
        setLoading(false);
    }, [id]); // Re-run when the 'id' parameter changes

    const { cartItems, addToCart, updateQuantity } = useCart();
    const cartItem = cartItems.find((item) => item.id === book?.id); // Use optional chaining
    const quantity = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        if (book) { // Ensure book data is loaded before adding to cart
            addToCart(book);
        }
    };

    const handleIncrease = () => {
        if (book && quantity < 3) {
            updateQuantity(book.id, quantity + 1);
        }
    };

    const handleDecrease = () => {
        if (book && quantity > 1) {
            updateQuantity(book.id, quantity - 1);
        } else if (book && quantity === 1) {
            updateQuantity(book.id, 0); // Removes from cart
        }
    };


    if (loading) {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <p className='text-lg'>Loading book details...</p>
            </div>
        );
    }

    if (!book) {
        return (
            <div className='flex flex-col justify-center items-center h-screen'>
                <p className='text-lg'>Book not found!</p>
                <p className='text-sm text-gray-500'>Please check the URL or go back to the home page.</p>
            </div>
        );
    }

    // Now 'book' contains the details of the currently selected book
    return (
        <div
        className='flex flex-col justify-between items-center font-[Poppins] text-[#000000] bg-[#F9F9F9]'>
            <Navbar active=''/>
            <div
            className='flex w-full h-auto min-h-[470px] mt-[140px] px-[80px] flex-wrap md:flex-nowrap'> {/* Adjusted height to auto and added flex-wrap for responsiveness */}
                <div className="w-full md:w-[313px] h-[470px] aspect-[3/4] mx-auto mb-8 md:mb-0"> {/* Added mb for mobile spacing */}
                    <ImageSection bookCoverPage={book.bookCoverPage} />
                </div>
                <div
                className='w-full md:w-auto md:flex-grow flex flex-col items-start lg:text-[32px] text-[24px] font-semibold py-[25px] ml-[20px]'>
                    <h1 className='text-3xl lg:text-4xl font-bold text-gray-900'>{book.bookTitle}</h1> {/* Larger title */}
                    <div
                    className='flex h-auto justify-center items-center mt-2'>
                        <h1
                        className='text-[24px] font-semibold flex bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 bg-clip-text text-transparent'>
                            <p className=''><span className='font-[Roboto]'>₹</span>{book.discountedPrice}</p>
                        </h1>
                        <h1
                        className='text-[18px] font-normal stroke-1 text-[#7D7D7D] ml-[10px] line-through flex '>
                            <p className='font-[Roboto]'>₹{book.bookPrice}</p>
                        </h1>
                        <p
                        className='ml-[10px] text-[#1038FF] text-[14px] font-medium'>
                            {book.discountPercentage}% off
                        </p>
                    </div>
                    <div
                    className='flex mt-[10px] h-auto justify-center items-center'>
                       <StarRating rating={book.rating}/>
                       <p
                       className='text-[14px] font-normal text-[#7C7C7C] ml-[10px]'>
                            {book.rating} (YLW Review)
                       </p>
                    </div>
                    <div
                    className='flex mt-[15px] h-auto justify-center items-center flex-wrap'> {/* Added flex-wrap here too */}
                        <img
                        className='w-[38px] h-[38px] bg-cover rounded-full mr-3' // Added margin right
                        src={book.authorImg} alt="" />
                        <p
                        className='text-[16px] font-semibold text-[#121212] mr-4'> {/* Increased margin right */}
                            {book.bookAuthor}
                        </p>
                        {/* tags */}
                        {book.tags && book.tags.map((tag, index) => (
                            <React.Fragment key={index}>
                                <p
                                className={`text-[18px] font-semibold ${
                                    index === 0 ? 'text-[#E4854C]' : // First tag color
                                    index === 1 ? 'text-[#B28ABA]' : // Second tag color
                                    'text-[#E9B552]' // Third tag color
                                } ${index > 0 ? 'ml-[20px]' : ''}`}>
                                    {tag}
                                </p>
                                {index < book.tags.length - 1 && (
                                    <p className='text-[28px] font-extralight ml-[10px] text-[#C4C4C4]'>|</p>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='mt-[20px]'> {/* Adjusted margin top */}
                        <h2 className='text-lg font-semibold mb-2'>About the Book</h2>
                        <p
                        className='text-[14px] text-[#7C7C7C] font-normal'>
                            {book.description}
                        </p>
                    </div>
                    <div
                    className='flex mt-[32px] h-auto items-center flex-wrap'> {/* Added flex-wrap */}
                        {quantity === 0 ? (
                            <div
                                onClick={handleAddToCart}
                                className="group w-[160px] xl:h-[45px] md:h-[40px] h-[32px]
                                            border border-blue-500 font-semibold flex justify-center items-center
                                            rounded-[30px] lg:text-[14px] text-[12px] cursor-pointer
                                            transition-all duration-1000 ease-in-out
                                            bg-white relative overflow-hidden mr-4 hover:shadow-md hover:shadow-gray-400 hover:scale-105"
                            >
                                <span
                                    className="bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300
                                            bg-clip-text text-transparent transition-all duration-1000 ease-in-out
                                            group-hover:text-white group-hover:bg-none"
                                >
                                    Add to Cart
                                </span>
                                <div
                                    className="absolute inset-0 rounded-[30px]
                                            bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300
                                            opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out -z-10"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center xl:h-[45px] md:h-[40px] h-[32px] gap-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 border-blue-500 border-0 rounded-2xl justify-evenly w-[160px] mr-4">
                                <button
                                    onClick={handleDecrease}
                                    className="h-8 w-10 flex items-center justify-center cursor-pointer"
                                >
                                    <Minus className="h-5 w-5 text-white" />
                                </button>
                                <div className="w-2 text-center text-[20px] text-white font-normal">
                                    {quantity}
                                </div>
                                <button
                                    onClick={handleIncrease}
                                    disabled={quantity >= 3}
                                    className={`h-8 w-10 flex items-center justify-center cursor-pointer ${
                                        quantity >= 3 ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <Plus className="h-5 w-5 text-white" />
                                </button>
                            </div>
                        )}
                        <div
                        className='rounded-[12px] border-[#EDEDED] shadow-md  bg-white w-[60px] h-[50px] flex justify-center items-center'>
                           <LikeMark />
                        </div>
                    </div>
                </div>
            </div>
            <div
            className='px-[1px] overflow-hidden w-full'>
                <BooksListing sectionName={`Similar to ${book.bookTitle}`} books={allBooksData.filter(b => b.category === book.category && b.id !== book.id)} /> {/* Filter similar books */}
                <BooksListing sectionName={`Most of ${book.bookAuthor}`} books={allBooksData.filter(b => b.bookAuthor === book.bookAuthor && b.id !== book.id)} /> {/* Filter by author */}
                {book.tags && book.tags[0] && (
                    <BooksListing sectionName={`Best of ${book.tags[0]} collection`} books={allBooksData.filter(b => b.tags?.includes(book.tags[0]) && b.id !== book.id)} />
                )}
            </div>
            <div className="w-[90vw] border-t-2 border-dashed border-[#D1D1D1] hidden lg:block translate-y-[64px]" />

            <CategorySection />
            <AboutAuthor context={book.aboutAuthor}/>
            <AboutPublication context={book.aboutPublication}/>
            <CommonFAQs />
            <NewsLetter />

        </div>
    )
}

export default ProductPage;
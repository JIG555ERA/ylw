// components/Book.js
// Example "Book" data structure for testing

export const sampleBook = {
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  image: "/covers/gatsby.jpg", // replace with a real image path
  rating: 4.5,
  reviewCount: 1200,
  price: 9.99,
  originalPrice: 14.99,
  category: "Classic",
  publishYear: 1925,
  isNew: true,
  isOnSale: true,
};

// Optional: an array of multiple books
export const sampleBooks = [
  sampleBook,
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    image: "/covers/1984.jpg",
    rating: 4.8,
    reviewCount: 2000,
    price: 7.99,
    originalPrice: 12.99,
    category: "Dystopian",
    publishYear: 1949,
    isNew: false,
    isOnSale: false,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/covers/atomic-habits.jpg",
    rating: 4.9,
    reviewCount: 5000,
    price: 11.99,
    originalPrice: 16.99,
    category: "Self-Help",
    publishYear: 2018,
    isNew: true,
    isOnSale: true,
  },
];

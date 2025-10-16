import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Star, BookOpen, ShoppingCart, Minus, Plus } from "lucide-react"; // Import Minus and Plus icons
import { useCart } from '../../../../../globalComponents/CartContext'; // Adjust path as necessary

const popularBookData = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Sarah Chen",
    coverColor: "from-indigo-600 via-purple-600 to-pink-600",
    thumbnail:
      "https://images.unsplash.com/photo-1720338099381-a942574719a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.6,
    price: 18.99,
    pages: [
      "Every life is different, yet every life is the same...",
      "Between life and death there is a library...",
      "The library exists in the space between...",
    ],
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "Priya Patel",
    coverColor: "from-emerald-600 via-teal-600 to-cyan-600",
    thumbnail:
      "https://images.unsplash.com/photo-1605444610001-15c877be632a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.9,
    price: 22.5,
    pages: [
      "Every action you take is a vote for the type of person...",
      "Success is the product of daily habits...",
      "You do not rise to the level of your goals...",
    ],
  },
  {
    id: 12, // Changed ID to avoid conflict with `id: 2` in `trendingBooks` in BestSellersSection (if they were to be combined or shared context)
    title: "Thinking, Fast and Slow",
    author: "Marcus Thompson",
    coverColor: "from-orange-600 via-red-600 to-pink-600",
    thumbnail:
      "https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.4,
    price: 25.0,
    pages: [
      "The human mind is a machine for jumping to conclusions...",
      "System 1 is fast, intuitive, and emotional...",
      "Nothing in life is as important as you think it is...",
    ],
  },
  {
    id: 3,
    title: "Dune",
    author: "Luna Martinez",
    coverColor: "from-amber-600 via-yellow-500 to-orange-600",
    thumbnail:
      "https://images.unsplash.com/photo-1583405520753-70e6e8719ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.8,
    price: 30.0,
    pages: [
      "Fear is the mind-killer. Fear is the little-death...",
      "He who controls the spice controls the universe...",
      "The beginning is a very delicate time...",
    ],
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Luna Martinez",
    coverColor: "from-blue-600 via-indigo-600 to-purple-600",
    thumbnail:
      "https://images.unsplash.com/photo-1527766833261-b09c3163a791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    rating: 4.7,
    price: 27.75,
    pages: [
      "Space is big. Really big. You just won't believe...",
      "Science is about testing ideas and learning...",
      "Sometimes the universe has a sense of humor...",
    ],
  },
];

function TrendingBooks({ onBookClick }) { // Removed onAddToCart from props as we're using CartContext directly
  const [hoveredBook, setHoveredBook] = useState(null);
  const [expandedBook, setExpandedBook] = useState(null); // mobile expand
  const [isMobile, setIsMobile] = useState(false);

  // Use Cart Context
  const { cartItems, addToCart, updateQuantity } = useCart();

  // Check window width for mobile/desktop
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const getBookData = (bookId) => {
    const book = popularBookData.find((b) => b.id === bookId);
    return { book };
  };

  return (
    <section className="w-full font-[Poppins]">
      <div className="container mx-auto px-[24px] xl:px-[260px] md:px-[80px] w-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-12 w-full">
            {popularBookData.map((popularData, index) => {
              const { book } = getBookData(popularData.id);
              if (!book) return null;

              // Cart logic for each book
              const cartItem = cartItems.find((item) => item.id === book.id);
              const quantity = cartItem?.quantity || 0;

              const handleAddToCart = () => {
                addToCart(book); // Start with quantity = 1
              };

              const handleIncrease = () => {
                if (quantity < 3) { // Max quantity of 3
                  updateQuantity(book.id, quantity + 1);
                }
              };

              const handleDecrease = () => {
                if (quantity > 1) {
                  updateQuantity(book.id, quantity - 1);
                } else if (quantity === 1) {
                  // If 1, remove from cart
                  updateQuantity(book.id, 0);
                }
              };

              const isHovered = hoveredBook === popularData.id;
              const isExpanded = expandedBook === popularData.id;

              return (
                <motion.div
                  key={popularData.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    damping: 20,
                  }}
                  onHoverStart={() =>
                    !isMobile && setHoveredBook(popularData.id)
                  }
                  onHoverEnd={() => !isMobile && setHoveredBook(null)}
                  onClick={() => {
                    if (isMobile) {
                      setExpandedBook(isExpanded ? null : popularData.id);
                    } else {
                      onBookClick?.(book);
                    }
                  }}
                >
                  {/* Book Cover */}
                  <motion.div
                    className="relative w-32 h-44 md:w-34 md:h-46"
                    animate={{
                      rotateY: isHovered ? 15 : 0,
                      scale: isHovered ? 1.05 : 1,
                      z: isHovered ? 20 : 0,
                    }}
                    transition={{ duration: 0.4, type: "spring", damping: 20 }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    <motion.div
                      className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <img
                        src={popularData.thumbnail}
                        alt={`${popularData.title} book cover`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
                      <div className="absolute inset-0 p-4 w-full flex flex-col justify-between text-white">
                        <h3 className="font-bold leading-tight mb-2 line-clamp-2">
                          {popularData.title}
                        </h3>
                        <div className="text-xs opacity-90 mb-3 font-medium">
                          by {popularData.author}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Desktop Hover Panel */}
                  {!isMobile && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className="absolute left-full top-[-12px] xl:translate-x-[0px] md:translate-x-[-56px] ml-2 w-64 z-20 hidden lg:block"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="h-5 w-5 text-purple-500" />
                          <span className="font-semibold text-purple-500">
                            Book Preview
                          </span>
                        </div>
                        <div className="space-y-3 mb-4">
                          {popularData.pages.slice(0, 2).map((page, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-gray-50 rounded-lg"
                            >
                              <p className="text-xs text-gray-700 font-[Merriweather] leading-relaxed">
                                "{page.substring(0, 50)}..."
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-foreground">
                            <span className="font-[Roboto]">₹</span>
                            {book.price}
                          </div>

                          {/* Desktop CTA (Add to Cart / Quantity) */}
                          {quantity === 0 ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart();
                              }}
                              className="flex items-center gap-1 px-3 py-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 text-white font-medium rounded-2xl hover:shadow-lg transition-all duration-200"
                            >
                              <ShoppingCart className="h-3 w-3" />
                              Add to Cart
                            </button>
                          ) : (
                            <div className="flex items-center gap-2 bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 border-blue-500 border-0 rounded-2xl justify-evenly w-32 py-1.5">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDecrease();
                                    }}
                                    className="h-6 w-8 flex items-center justify-center cursor-pointer"
                                >
                                    <Minus className="h-4 w-4 text-white" />
                                </button>
                                <div className="w-2 text-center text-sm text-white font-normal">
                                    {quantity}
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleIncrease();
                                    }}
                                    disabled={quantity >= 3}
                                    className={`h-6 w-8 flex items-center justify-center cursor-pointer ${
                                        quantity >= 3 ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <Plus className="h-4 w-4 text-white" />
                                </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Mobile Expanded Panel */}
                  {isMobile && isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 w-full"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-md border border-white/20">
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="h-4 w-4 text-purple-500" />
                          <span className="font-semibold text-purple-500 text-sm">
                            Book Preview
                          </span>
                        </div>
                        <div className="space-y-2 mb-3">
                          {popularData.pages.slice(0, 2).map((page, idx) => (
                            <div
                              key={idx}
                              className="p-2 bg-gray-50 rounded-lg"
                            >
                              <p className="text-xs text-gray-700 font-[Merriweather] leading-relaxed">
                                "{page.substring(0, 50)}..."
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-foreground">
                            <span className="font-[Roboto]">₹</span>
                            {book.price}
                          </div>

                          {/* Mobile CTA (Add to Cart / Quantity) */}
                          {quantity === 0 ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart();
                              }}
                              className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-br rounded-[30px] from-blue-300 via-blue-500 to-purple-300 border-blue text-white font-medium  hover:shadow-md transition-all duration-200 text-sm"
                            >
                              <ShoppingCart className="h-3 w-3" />
                              Add
                            </button>
                          ) : (
                            <div className="flex items-center gap-1 rounded-[30px] bg-gradient-to-br from-blue-300 via-blue-500 to-purple-300 border-blue-500 border-0  justify-evenly w-28 py-1">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDecrease();
                                    }}
                                    className="h-6 w-8 flex items-center justify-center cursor-pointer"
                                >
                                    <Minus className="h-4 w-4 text-white" />
                                </button>
                                <div className="w-2 text-center text-sm text-white font-normal">
                                    {quantity}
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleIncrease();
                                    }}
                                    disabled={quantity >= 3}
                                    className={`h-6 w-8 flex items-center justify-center cursor-pointer ${
                                        quantity >= 3 ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <Plus className="h-4 w-4 text-white" />
                                </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Info Below */}
                  <div className="mt-6 text-center w-full mx-auto md:translate-x-[-40px]">
                    <h4 className="font-semibold text-foreground mb-1 line-clamp-1">
                      {popularData.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {popularData.author}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span className="font-medium">{book.rating}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="font-semibold text-vibrant-purple">
                        <span className="font-[Roboto]">₹</span>
                        {book.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingBooks;
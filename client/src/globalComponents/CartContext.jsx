// globalComponents/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === book.id);
      if (exists) {
        return prev.map((item) =>
          item.id === book.id
            ? { ...item, quantity: Math.min(3, (item.quantity || 1) + 1) }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === bookId
            ? { ...item, quantity: Math.max(0, Math.min(3, newQuantity)) }
            : item
        )
        .filter((item) => item.quantity > 0) // auto-remove if 0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

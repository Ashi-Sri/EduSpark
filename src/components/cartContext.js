// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  const handleRemoveFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
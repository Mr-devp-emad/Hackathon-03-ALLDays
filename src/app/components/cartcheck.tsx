"use client";

import React, { createContext, useContext, useState } from "react";

// Define the structure of each cart item
interface CartItem {
  id: string; // Unique identifier for the item
  title: string; // Name of the product
  price: number; // Price per item
  quantity: number; // Quantity of the item in the cart
  image: string; // URL of the product image
}

// Define the structure of the cart context
interface CartContextProps {
  cart: CartItem[]; // The current cart state
  addToCart: (item: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (id: string) => void; // Function to remove an item from the cart
  clearCart: () => void; // Function to clear all items in the cart
}

// Create a context with an undefined initial value
const CartContext = createContext<CartContextProps | undefined>(undefined);

// CartProvider component to wrap the app with cart functionality
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]); // Initialize the cart state as an empty array

  // Add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        // Update the quantity if the item already exists in the cart
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      }
      // Add the new item to the cart
      return [...prevCart, item];
    });
  };

  // Remove an item from the cart by its ID
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

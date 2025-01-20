"use client";

import React from "react";
import { useCart } from "@/app/components/cartcheck";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart is empty</h1>
        <p className="text-gray-600">
          Browse our <a href="/" className="text-blue-500 hover:underline">store</a> to add items to your cart.
        </p>
      </div>
    );

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="col-span-2">
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-4 border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 rounded-md object-cover border"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm text-gray-500">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline mt-2 block"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Items ({cart.length}):</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <p>Total:</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>

          <button className="bg-yellow-500 text-black w-full py-2 mt-4 rounded hover:bg-yellow-600">
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="bg-gray-200 text-black w-full py-2 mt-2 rounded hover:bg-gray-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

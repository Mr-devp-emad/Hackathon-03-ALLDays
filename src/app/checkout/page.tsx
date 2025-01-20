"use client";

import React, { useState } from "react";
import { useCart } from "../components/cartcheck";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order submission
    console.log("Order submitted:", { cart, userDetails });
    clearCart(); // Clear cart after submission
    setShowThankYou(true); // Show thank-you message
  };

  if (showThankYou) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
        <p className="text-lg text-gray-700 mb-6">Your order has been placed successfully.</p>
        <button
          onClick={() => router.push("/")}
          className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-gray-600">
          Please <a href="/" className="text-blue-500 hover:underline">shop now</a> to add items to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* User Details Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Full Name:</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Shipping Address:</label>
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Payment Method:</label>
          <select
            name="paymentMethod"
            value={userDetails.paymentMethod}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          >
            <option value="">Select Payment Method</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="amazon_pay">Amazon Pay</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-black w-full py-3 rounded hover:bg-yellow-600"
        >
          Complete Checkout
        </button>
      </form>

      {/* Cart Summary */}
      <div className="mt-8 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.title} (x{item.quantity})</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex justify-between font-bold text-lg border-t pt-2">
          <p>Total:</p>
          <p>
            ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

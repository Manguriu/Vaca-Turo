"use client"

import React, { useEffect, useState } from "react";

interface CartItem {
  pickUpDate: string;
  ReturnDate: string;
  pickUpTime: string;
  ReturnTime: string;
  location: string;
  phoneNumber: string;
}

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Checkout</h1>
      {cartItems.length === 0 ? (
        <p className="text-2xl">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="">
              <h2 className="text-xl">Car Rental Details:</h2>
              <p>Pick-Up Date: {item.pickUpDate}</p>
              <p>Return Date: {item.ReturnDate}</p>
              <p>Pick-Up Time: {item.pickUpTime}</p>
              <p>Return Time: {item.ReturnTime}</p>
              <p>Location: {item.location}</p>
              <p>Phone Number: {item.phoneNumber}</p>
            </div>
          ))}
          {/* Clear button */}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

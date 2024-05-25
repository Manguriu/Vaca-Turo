// import React, { useEffect, useState } from "react";

// interface CartItem {
//   pickUpDate: string;
//   returnDate: string;
//   pickUpTime: string;
//   returnTime: string;
//   location: string;
//   phoneNumber: string;
//   name: string;
//   price: string;
//   totalCost: number;
//   image: string;
// }

// export default function page() {


//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(cart);
//   }, []);

//   const handleRemoveItem = (index: number) => {
//     const updatedCartItems = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCartItems);
//     localStorage.setItem("cart", JSON.stringify(updatedCartItems));
//   };
//   return (
//     <div>
//       <div className="py-6 w-full border px-3 spacing-5 max-md:w-auto h-full bg-white shadow-sm rounded pt-6 pb-8 mb-4">
//       <h1 className="font-extrabold text-[24px] mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index} className="mb-4 p-4 border rounded shadow-sm">
//             <img src={item.image} alt={item.name} className="h-40 w-full object-cover mb-4" />
//             <div className="flex justify-between mb-2">
//               <span className="font-bold">{item.name}</span>
//               <span>${item.price} per day</span>
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Pick-Up Date:</span> {item.pickUpDate}
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Return Date:</span> {item.returnDate}
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Pick-Up Time:</span> {item.pickUpTime}
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Return Time:</span> {item.returnTime}
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Location:</span> {item.location}
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Phone Number:</span> {item.phoneNumber}
//             </div>
//             <div className="mb-2">
//               <span className="font-bold">Total Cost:</span> ${item.totalCost}
//             </div>
//             <button
//               onClick={() => handleRemoveItem(index)}
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
      
//     </div>
//   )
// }
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

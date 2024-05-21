// import React, { useState } from "react";

// interface Errors {
//   pickUpDate?: string;
//   ReturnDate?: string;
//   pickUpTime?: string;
//   ReturnTime?: string;
//   phoneNumber?: string;
//   location?: string;
// }

// interface Location {
//   id: number;
//   name: string;
//   price?: string;
//   address?: string;
// }

// export default function DateComponent() {
//   const [pickUpDate, setPickUpDate] = useState("");
//   const [ReturnDate, setReturnDate] = useState("");
//   const [pickUpTime, setPickUpTime] = useState("");
//   const [ReturnTime, setReturnTime] = useState("");
//   const [errors, setErrors] = useState<Errors>({});
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
//     null
//   );
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const locations: Location[] = [
//     { id: 1, name: "Woodford Green, GB IG89QY", price: "Free" },
//     { id: 2, name: "London Southend Airport", price: "£120" },
//     { id: 3, name: "London City Airport", price: "£120" },
//     { id: 4, name: "Gatwick Airport", price: "£120" },
//     {
//       id: 5,
//       name: "Oxfor Circus Underground Station",
//       address: "Oxford Street, London, England W1B 3AG",
//       price: "£80",
//     },
//     {
//       id: 6,
//       name: "Kings Cross",
//       address: "Euston Road, London, England N1 9AL",
//       price: "£80",
//     },
//   ];

//   const handleLocationSelect = (location: Location) => {
//     setSelectedLocationId(location.id);
//     setIsOpen(false);
//     setErrors((prevState) => ({ ...prevState, location: "" })); // Clear location error if selected
//     console.log("Selected Location:", location);
//   };
  

//   const getSelectedLocationName = () => {
//     const selectedLocation = locations.find(
//       (location) => location.id === selectedLocationId
//     );
//     return selectedLocation ? selectedLocation.name : "";
//   };

//   const handlePickUpDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPickUpDate(e.target.value);
//     setErrors((prevState) => ({ ...prevState, pickUpDate: "" }));
//   };

//   const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setReturnDate(e.target.value);
//     setErrors((prevState) => ({ ...prevState, ReturnDate: "" }));
//   };

//   const handlePickUpTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPickUpTime(e.target.value);
//     setErrors((prevState) => ({ ...prevState, pickUpTime: "" }));
//   };

//   const handleReturnTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setReturnTime(e.target.value);
//     setErrors((prevState) => ({ ...prevState, ReturnTime: "" }));
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhoneNumber(e.target.value);
//     setErrors((prevState) => ({ ...prevState, phoneNumber: "" }));
//   };

//   const handleSubmit = () => {
//     let formErrors = {};

//     // Date format validation (YYYY-MM-DD)
//     const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//     if (!pickUpDate.match(dateRegex)) {
//       formErrors = { ...formErrors, pickUpDate: "Invalid date format" };
//     }
//     if (!ReturnDate.match(dateRegex)) {
//       formErrors = { ...formErrors, ReturnDate: "Invalid date format" };
//     }

//     // Time format validation (HH:MM)
//     const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
//     if (!pickUpTime.match(timeRegex)) {
//       formErrors = { ...formErrors, pickUpTime: "Invalid time format" };
//     }
//     if (!ReturnTime.match(timeRegex)) {
//       formErrors = { ...formErrors, ReturnTime: "Invalid time format" };
//     }
//     // Location selection validation
//     if (!selectedLocationId) {
//       formErrors = { ...formErrors, location: "Location is required" };
//     }

//     // Phone number format validation
//     const phoneRegex = /^\d{10}$/; //  10 digits for a phone number
//     if (!phoneNumber.match(phoneRegex)) {
//       formErrors = { ...formErrors, phoneNumber: "Invalid phone number" };
//     }

//     // Set errors if any
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     console.log("Submitted Data:");
//     console.log("Check-in Date:", pickUpDate);
//     console.log("Check-out Date:", ReturnDate);
//     console.log("Check-in Time:", pickUpTime);
//     console.log("Check-out Time:", ReturnTime);
//     console.log("Selected Location:", getSelectedLocationName());
//     console.log("Phone Number:", phoneNumber);
//   };

//   return (
//     <div className="py-6 w-full max-md:w-auto h-full bg-white shadow-sm rounded px-1 pt-6 pb-8 mb-4">
//       <div className="w-full gap-2">
//         <div className="flex gap-2">
//           <div className="mb-4 w-[60%]">
//             <label
//               htmlFor="checkInDate"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Pick-Up Date
//             </label>
//             <input
//               type="date"
//               id="checkInDate"
//               name="checkInDate"
//               value={pickUpDate}
//               onChange={handlePickUpDateChange}
//               className="h-[36px] mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-slate-800"
//             />
//             {errors.pickUpDate && (
//               <span className="text-red-500">{errors.pickUpDate}</span>
//             )}
//           </div>
//           <div className="mb-4 w-[40%]">
//             <label
//               htmlFor="checkInTime"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Pick-up Time
//             </label>
//             <input
//               type="time"
//               id="checkInTime"
//               name="checkInTime"
//               value={pickUpTime}
//               onChange={handlePickUpTimeChange}
//               className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
//             />
//             {errors.pickUpTime && (
//               <span className="text-red-500">{errors.pickUpTime}</span>
//             )}
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <div className="mb-4 w-[60%]">
//             <label
//               htmlFor="checkOutDate"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Return-Date
//             </label>
//             <input
//               type="date"
//               id="checkOutDate"
//               name="checkOutDate"
//               value={ReturnDate}
//               onChange={handleReturnDateChange}
//               className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
//             />
//             {errors.ReturnDate && (
//               <span className="text-red-500">{errors.ReturnDate}</span>
//             )}
//           </div>

//           <div className="mb-4 w-[40%]">
//             <label
//               htmlFor="checkOutTime"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Return-Time
//             </label>
//             <input
//               type="time"
//               id="checkOutTime"
//               name="checkOutTime"
//               value={ReturnTime}
//               onChange={handleReturnTimeChange}
//               className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
//             />
//             {errors.ReturnTime && (
//               <span className="text-red-500">{errors.ReturnTime}</span>
//             )}
//           </div>
//         </div>

//         <div className=" py-2 mb-3">
//           <div className="location-picker-container">
//             <label
//               htmlFor="location-picker"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Pickup & return location
//             </label>
//             <div className="relative">
//               <button
//                 id="location-picker"
//                 aria-controls="locations"
//                 aria-expanded={isOpen}
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="location-picker-btn border border-gray-300 bg-white rounded-md shadow-sm py-2 px-4 w-full flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//               >
//                 {selectedLocationId
//                   ? getSelectedLocationName()
//                   : "Select Location"}
//               </button>

//               {isOpen && (
//                 <div
//                   id="locations"
//                   className="absolute mt-1 w-full z-10 bg-white border border-gray-300 shadow-lg rounded-md"
//                 >
//                   {locations.map((location) => (
//                     <button
//                       key={location.id}
//                       type="button"
//                       onClick={() => handleLocationSelect(location)}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                     >
//                       <p>{location.name}</p>
//                       {location.price && (
//                         <p className="text-gray-500 text-xs">
//                           {location.price}
//                         </p>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//             {errors.location && (
//               <span className="text-red-500">{errors.location}</span>
//             )}
//           </div>
//         </div>

//         <div className="mb-2">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Enter Phone Number
//           </label>
//           <input
//             type="phone"
//             id="Phone"
//             name="phoneNumber"
//             value={phoneNumber}
//             onChange={handlePhoneChange}
//             className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
//           />
//           {errors.phoneNumber && (
//             <span className="text-red-500">{errors.phoneNumber}</span>
//           )}
//         </div>

//         <div className="mb-4 mt-5 w-full">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-md:w-full"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Errors {
  pickUpDate?: string;
  ReturnDate?: string;
  pickUpTime?: string;
  ReturnTime?: string;
  phoneNumber?: string;
  location?: string;
}

interface Location {
  id: number;
  name: string;
  price?: string;
  address?: string;
}

interface CartItem {
  pickUpDate: string;
  ReturnDate: string;
  pickUpTime: string;
  ReturnTime: string;
  location: string;
  phoneNumber: string;
}


export default function DateComponent() {
  const router = useRouter();
  const [pickUpDate, setPickUpDate] = useState("");
  const [ReturnDate, setReturnDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [ReturnTime, setReturnTime] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const locations: Location[] = [
    { id: 1, name: "Woodford Green, GB IG89QY", price: "Free" },
    { id: 2, name: "London Southend Airport", price: "£120" },
    { id: 3, name: "London City Airport", price: "£120" },
    { id: 4, name: "Gatwick Airport", price: "£120" },
    {
      id: 5,
      name: "Oxfor Circus Underground Station",
      address: "Oxford Street, London, England W1B 3AG",
      price: "£80",
    },
    {
      id: 6,
      name: "Kings Cross",
      address: "Euston Road, London, England N1 9AL",
      price: "£80",
    },
  ];

  const handleLocationSelect = (location: Location) => {
    setSelectedLocationId(location.id);
    setIsOpen(false);
    setErrors((prevState) => ({ ...prevState, location: "" })); // Clear location error if selected
    console.log("Selected Location:", location);
  };

  const getSelectedLocationName = () => {
    const selectedLocation = locations.find(
      (location) => location.id === selectedLocationId
    );
    return selectedLocation ? selectedLocation.name : "";
  };

  const handlePickUpDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickUpDate(e.target.value);
    setErrors((prevState) => ({ ...prevState, pickUpDate: "" }));
  };

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value);
    setErrors((prevState) => ({ ...prevState, ReturnDate: "" }));
  };

  const handlePickUpTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickUpTime(e.target.value);
    setErrors((prevState) => ({ ...prevState, pickUpTime: "" }));
  };

  const handleReturnTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnTime(e.target.value);
    setErrors((prevState) => ({ ...prevState, ReturnTime: "" }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setErrors((prevState) => ({ ...prevState, phoneNumber: "" }));
  };

  const handleAddToCart = () => {
    let formErrors = {};

    // Date format validation (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!pickUpDate.match(dateRegex)) {
      formErrors = { ...formErrors, pickUpDate: "Invalid date format" };
    }
    if (!ReturnDate.match(dateRegex)) {
      formErrors = { ...formErrors, ReturnDate: "Invalid date format" };
    }

    // Time format validation (HH:MM)
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!pickUpTime.match(timeRegex)) {
      formErrors = { ...formErrors, pickUpTime: "Invalid time format" };
    }
    if (!ReturnTime.match(timeRegex)) {
      formErrors = { ...formErrors, ReturnTime: "Invalid time format" };
    }
    // Location selection validation
    if (!selectedLocationId) {
      formErrors = { ...formErrors, location: "Location is required" };
    }

    // Phone number format validation
    const phoneRegex = /^\d{10}$/; //  10 digits for a phone number
    if (!phoneNumber.match(phoneRegex)) {
      formErrors = { ...formErrors, phoneNumber: "Invalid phone number" };
    }

    // Set errors if any
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Save the data to localStorage (or another storage method)
    const cartItem = {
      pickUpDate,
      ReturnDate,
      pickUpTime,
      ReturnTime,
      location: getSelectedLocationName(),
      phoneNumber,
    };
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Navigate to the checkout page
    router.push("/CarCheckOut"); // Replace with your actual checkout page route
  };

  return (
    <div className="py-6 w-full max-md:w-auto h-full bg-white shadow-sm rounded px-1 pt-6 pb-8 mb-4">
      <div className="w-full gap-2">
        <div className="flex gap-2">
          <div className="mb-4 w-[60%]">
            <label
              htmlFor="checkInDate"
              className="block text-sm font-medium text-gray-700"
            >
              Pick-Up Date
            </label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              value={pickUpDate}
              onChange={handlePickUpDateChange}
              className="h-[36px] mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.pickUpDate && (
              <span className="text-red-500">{errors.pickUpDate}</span>
            )}
          </div>
          <div className="mb-4 w-[40%]">
            <label
              htmlFor="checkInTime"
              className="block text-sm font-medium text-gray-700"
            >
              Pick-up Time
            </label>
            <input
              type="time"
              id="checkInTime"
              name="checkInTime"
              value={pickUpTime}
              onChange={handlePickUpTimeChange}
              className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.pickUpTime && (
              <span className="text-red-500">{errors.pickUpTime}</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mb-4 w-[60%]">
            <label
              htmlFor="checkOutDate"
              className="block text-sm font-medium text-gray-700"
            >
              Return-Date
            </label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              value={ReturnDate}
              onChange={handleReturnDateChange}
              className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.ReturnDate && (
              <span className="text-red-500">{errors.ReturnDate}</span>
            )}
          </div>

          <div className="mb-4 w-[40%]">
            <label
              htmlFor="checkOutTime"
              className="block text-sm font-medium text-gray-700"
            >
              Return-Time
            </label>
            <input
              type="time"
              id="checkOutTime"
              name="checkOutTime"
              value={ReturnTime}
              onChange={handleReturnTimeChange}
              className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.ReturnTime && (
              <span className="text-red-500">{errors.ReturnTime}</span>
            )}
          </div>
        </div>

        <div className=" py-2 mb-3">
          <div className="location-picker-container">
            <label
              htmlFor="location-picker"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pickup & return location
            </label>
            <div className="relative">
              <button
                id="location-picker"
                aria-controls="locations"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="location-picker-btn border border-gray-300 bg-white rounded-md shadow-sm py-2 px-4 w-full flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {selectedLocationId
                  ? getSelectedLocationName()
                  : "Select Location"}
              </button>

              {isOpen && (
                <div
                  id="locations"
                  className="absolute mt-1 w-full z-10 bg-white border border-gray-300 shadow-lg rounded-md"
                >
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      type="button"
                      onClick={() => handleLocationSelect(location)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <p>{location.name}</p>
                      {location.price && (
                        <p className="text-gray-500 text-xs">
                          {location.price}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {errors.location && (
              <span className="text-red-500">{errors.location}</span>
            )}
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Phone Number
          </label>
          <input
            type="phone"
            id="Phone"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="mb-4 mt-5 w-full">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-md:w-full"
          >
            Add to Cart and Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}


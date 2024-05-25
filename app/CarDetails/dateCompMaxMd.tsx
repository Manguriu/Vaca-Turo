import React, { useState } from "react";

interface Errors {
  pickUpDate?: string;
  returnDate?: string;
  pickUpTime?: string;
  returnTime?: string;
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
  returnDate: string;
  pickUpTime: string;
  returnTime: string;
  location: string;
  phoneNumber: string;
  name: string;
  price: string;
  totalCost: number;
  image: string;
}

interface DateComponentProps {
  price: string;
  name: string;
  oImg1: string;
}

export default function dateCompMaxMd({
  price,
  name,
  oImg1,
}: DateComponentProps) {
  const [pickUpDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(
    null
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLocationSelect = (location: Location) => {
    setSelectedLocationId(location.id);
    setErrors((prevState) => ({ ...prevState, location: "" })); // Clear location error if selected
  };

  const handleInputChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      field: keyof Errors
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setErrors((prevState) => ({ ...prevState, [field]: "" }));
    };

  const calculateTotalCost = (
    startDate: string,
    endDate: string,
    dailyRate: number
  ) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // Include the pickup day
    return daysDiff * dailyRate;
  };
  const handleAddToCart = () => {
    let formErrors: Errors = {};

    // Date format validation (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!pickUpDate.match(dateRegex)) {
      formErrors.pickUpDate = "Invalid date format";
    }
    if (!returnDate.match(dateRegex)) {
      formErrors.returnDate = "Invalid date format";
    }

    // Time format validation (HH:MM)
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!pickUpTime.match(timeRegex)) {
      formErrors.pickUpTime = "Invalid time format";
    }
    if (!returnTime.match(timeRegex)) {
      formErrors.returnTime = "Invalid time format";
    }

    // Location selection validation
    if (!selectedLocationId) {
      formErrors.location = "Location is required";
    }

    // Phone number format validation
    const phoneRegex = /^\d{10}$/; // 10 digits for a phone number
    if (!phoneNumber.match(phoneRegex)) {
      formErrors.phoneNumber = "Invalid phone number";
    }

    // Set errors if any
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Calculate total cost
    const dailyRate = parseFloat(price);
    const totalCost = calculateTotalCost(pickUpDate, returnDate, dailyRate);

    // Log the information to the console
    console.log("Pick-Up Date:", pickUpDate);
    console.log("Return Date:", returnDate);
    console.log("Pick-Up Time:", pickUpTime);
    console.log("Return Time:", returnTime);
    console.log("Selected Location ID:", selectedLocationId);
    console.log("Phone Number:", phoneNumber);
    console.log("Car Name:", name);
    console.log("Price per Day:", price);
    console.log("Total Cost:", totalCost);
    console.log("Image:", oImg1);
  };

  return (
    <div className="py-6 w-full border px-3 spacing-5 max-md:w-auto h-full bg-white shadow-sm rounded pt-6 pb-8 mb-4">
      <div className="w-full gap-2">
        <div className="flex justify-between flex-col">
          <img
            src={oImg1}
            alt={name}
            className="h-40 w-full object-cover mb-4"
          />
          <div className="flex justify-between">
            <h1 className="font-extrabold text-[20px]">{name}</h1>
            <h1 className="font-extrabold text-[20px]">${price} per day</h1>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="mb-4 w-[60%]">
            <label
              htmlFor="pickUpDate"
              className="block text-sm font-medium text-gray-700"
            >
              Pick-Up Date
            </label>
            <input
              type="date"
              id="pickUpDate"
              name="pickUpDate"
              value={pickUpDate}
              onChange={handleInputChange(setPickUpDate, "pickUpDate")}
              className="h-[36px] mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.pickUpDate && (
              <span className="text-red-500">{errors.pickUpDate}</span>
            )}
          </div>
          <div className="mb-4 w-[40%]">
            <label
              htmlFor="pickUpTime"
              className="block text-sm font-medium text-gray-700"
            >
              Pick-up Time
            </label>
            <input
              type="time"
              id="pickUpTime"
              name="pickUpTime"
              value={pickUpTime}
              onChange={handleInputChange(setPickUpTime, "pickUpTime")}
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
              htmlFor="returnDate"
              className="block text-sm font-medium text-gray-700"
            >
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={returnDate}
              onChange={handleInputChange(setReturnDate, "returnDate")}
              className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.returnDate && (
              <span className="text-red-500">{errors.returnDate}</span>
            )}
          </div>
          <div className="mb-4 w-[40%]">
            <label
              htmlFor="returnTime"
              className="block text-sm font-medium text-gray-700"
            >
              Return Time
            </label>
            <input
              type="time"
              id="returnTime"
              name="returnTime"
              value={returnTime}
              onChange={handleInputChange(setReturnTime, "returnTime")}
              className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            {errors.returnTime && (
              <span className="text-red-500">{errors.returnTime}</span>
            )}
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange(setPhoneNumber, "phoneNumber")}
            className="h-[36px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber}</span>
          )}
        </div>
        <div className="mb-4 mt-5 w-full flex items-center justify-center">
         
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-md:w-full"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

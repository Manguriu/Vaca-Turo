"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  countryCode: string;
  checkInDate: string;
  checkOutDate: string;
};

export default function HouseForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+1",
    checkInDate: "",
    checkOutDate: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [numDays, setNumDays] = useState(0);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startDate = new Date(formData.checkInDate);
    const endDate = new Date(formData.checkOutDate);
    const diffDays = Math.round(
      Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
    );
    const dailyRate = 24;
    const calculatedPrice = dailyRate * diffDays;
    setTotalPrice(calculatedPrice);
    setNumDays(diffDays);
    console.log("Form submitted with data:", formData);
    console.log("Total Price:", calculatedPrice);
    console.log("Number of Days:", diffDays);


    const formErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required";
    }
    if (!formData.checkInDate.trim()) {
      formErrors.checkInDate = "Check-in date is required";
    }
    if (!formData.checkOutDate.trim()) {
      formErrors.checkOutDate = "Check-out date is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return; // Stop form submission if there are errors
    }

   
  };

  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/${formData.countryCode.replace("+", "")}${formData.phone}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className=" py-6 w-full h-full border-[2px] bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
        <div>
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="king logo"
              width={250}
              height={100}
              className="object-contain"
            />
          </Link>
          <h2 className="mt-5 items-center flex font-Josefin ">
            {" "}
            <span className="text-xl font-bold font-Josefin ">23 </span>$/day
          </h2>
        </div>

        <form onSubmit={handleFormSubmit} className="mt-4 ">
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`rounded-2xl mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-1 focus:ring-slate-800 font-Josefin ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`rounded-2xl mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-slate-800 font-Josefin  ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>


          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={`rounded-2xl mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 font-Josefin   ${
                errors.phone ? 'border-red-500' : ''
              }`}
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div className="flex justify-evenly gap-2">
            <div className="mb-4 w-full">
              <label
                htmlFor="checkInDate"
                className="block text-sm font-medium text-gray-700 font-Josefin text-[15px]"
              >
                Check-in Date
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className={`h-[70px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 font-Josefin ${
                    errors.checkInDate ? 'border-red-500' : ''
                  }`}
                
              />
               {errors.checkInDate && <p className="text-red-500 mt-1">{errors.checkInDate}</p>}
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="checkOutDate"
                className="block text-sm font-medium text-gray-700 font-Josefin text-[15px]"
              >
                Check-out Date
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className={`h-[70px] mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 font-Josefin ${
                    errors.checkOutDate ? 'border-red-500' : ''
                  }`}
              />
              {errors.checkOutDate && <p className="text-red-500 mt-1">{errors.checkOutDate}</p>}
            </div>
          </div>

          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 font-Josefin "
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="What would you like to know?"
            onChange={handleChange}
            className="font-Josefin mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            rows={4}
          ></textarea>

          <div className="mt-4">
            <h1  className="font-Poetsen text-[18px] font-bold">Estimated Price:</h1>
            {totalPrice > 0 && (
              <div className="mt-2 ">
                <p className="font-Poetsen text-[18px]">Total Price: ${totalPrice}</p>
                <p className="font-Poetsen text-[18px]">Number of Days: {numDays}</p>
              </div>
            )}
          </div>
          <button
            type="submit" 
            className="font-Poetsen mt-4 w-full bg-[#3559E0] text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2  focus:ring-green-500 font-Poetsen"
        >
          Communicate via WhatsApp
        </button>
      </div>
    </div>
  );
}

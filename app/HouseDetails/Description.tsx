"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";

const houseImageURL =
  "https://a0.muscache.com/im/pictures/1ff6d909-5ba6-42f3-9d2c-fa2327780936.jpg";
const houseImageURL1 =
  "https://a0.muscache.com/im/pictures/51e33425-79b4-4ab7-9600-de1f1b4cdfe4.jpg?im_w=1200";
const houseImageURL2 =
  "https://a0.muscache.com/im/pictures/miso/Hosting-43553913/original/a288ddd5-4b20-4b75-8eae-165a74770d20.jpeg?im_w=1440";
const houseImageURL3 =
  "https://a0.muscache.com/im/pictures/miso/Hosting-43553913/original/fc20193d-f10d-40af-b33e-da913670e85e.jpeg?im_w=1440";
const houseImageURL4 =
  "https://a0.muscache.com/im/pictures/miso/Hosting-43553913/original/67dc8594-64f2-4c08-bf44-8867638414a7.jpeg?im_w=1440";
const houseImageURL5 =
  "https://a0.muscache.com/im/pictures/8545d69a-3527-4096-b04e-7c4387fc2ae0.jpg?im_w=1440";
const houseImageURL6 =
  "https://a0.muscache.com/im/pictures/miso/Hosting-43553913/original/f7390cc0-818f-41c0-a8f3-cd719ce7ea9f.jpeg?im_w=1440";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  countryCode: string;
};

const countryCodes = [
  { code: "+1", name: "Us" },
  { code: "+44", name: "Uk" },
  { code: "+254", name: "KE" },
  { code: "+86", name: "CH" },
  { code: "+91", name: "IN" },
  { code: "+33", name: "Fr" },
  { code: "+81", name: "JN" },
  { code: "+49", name: "GE" },
  { code: "+7", name: "RA" },
  { code: "+55", name: "Br" },
  { code: "+61", name: "Au" },
];

export default function Description() {
  const [mainImage, setMainImage] = useState(houseImageURL);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+1",
  });

  const handleImageClick = (newImageURL: string) => {
    if (newImageURL === mainImage) {
      setShowModal(true); // Show modal only when main image is clicked
    }
    setMainImage(newImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // to Addform submission logic later
  };

  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/${formData.countryCode.replace("+", "")}${formData.phone}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-full h-full">
            <div className="relative h-full max-w-full">
              <button
                className="absolute top-2 right-2 text-white text-lg bg-transparent border-0"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <img
                className="h-full w-full object-contain"
                src={mainImage}
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto w-full flex flex-col justify-center items-center">
        <div className="sm:px-16 px-6 mx-auto flex flex-row gap-4 w-full">
          <div className="flex flex-col gap-2 w-3/4">
            <img
              className="h-[500px] w-full rounded-xl"
              alt=""
              src={mainImage}
              onClick={() => handleImageClick(mainImage)}
            />
            <div className="flex gap-3">
              <img
                className="h-[100px] w-[163px] rounded-xl cursor-pointer"
                alt=""
                src={houseImageURL1}
                onClick={() => handleImageClick(houseImageURL1)}
              />
              <img
                className="h-[100px] w-[163px] rounded-xl cursor-pointer"
                alt=""
                src={houseImageURL2}
                onClick={() => handleImageClick(houseImageURL2)}
              />
              <img
                className="h-[100px] w-[163px] rounded-xl cursor-pointer"
                alt=""
                src={houseImageURL3}
                onClick={() => handleImageClick(houseImageURL3)}
              />
              <img
                className="h-[100px] w-[163px] rounded-xl cursor-pointer"
                alt=""
                src={houseImageURL4}
                onClick={() => handleImageClick(houseImageURL4)}
              />
              <img
                className="h-[100px] w-[163px] rounded-xl cursor-pointer"
                alt=""
                src={houseImageURL5}
                onClick={() => handleImageClick(houseImageURL5)}
              />
              <img
                className="h-[100px] w-[163px] rounded-xl cursor-pointer"
                alt=""
                src={houseImageURL6}
                onClick={() => handleImageClick(houseImageURL6)}
              />
            </div>
          </div>
          <div className="px-6 py-6 w-1/4 border-2 border-slate-200 rounded-xl bg-[#f0fdfa]">
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="/logo.png"
                alt="king logo"
                width={250}
                height={100}
                className="object-contain"
              />
            </Link>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className=" rounded-2xl mt-1 px-3 py-2 w-full border-t focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-2xl mt-1 px-3 py-2 w-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4 flex items-center">
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="mt-1 px-1 py-1  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {`${country.name} (${country.code})`}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className=" w-10 mt-1 px-2 py-1 flex-1 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="What would you like to know?"
                  onChange={handleChange}
                  className="mt-1 px-3 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full items-center justify-center flex gap-2"
              >
                <span>
                  <img src="/message.gif" className="w-8" />
                </span>
                Message
              </button>
              <button
                type="button"
                onClick={handleWhatsApp} 
                className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 items-center justify-center flex gap-2"
              >
                <span>
                  <img src="/whatsapp.png" className="w-7" />
                </span>
                Communicate via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

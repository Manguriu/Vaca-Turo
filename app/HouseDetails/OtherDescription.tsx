"use client";

import React from "react";
import HouseForm from "./HouseForm";
import { useState } from "react";
import { motion } from "framer-motion";

const Description = () => {
  const [showBasicInfoModal, setShowBasicInfoModal] = useState(false);
  const [showOffersModal, setShowOffersModal] = useState(false);

  const toggleBasicInfoModal = () => {
    setShowBasicInfoModal(!showBasicInfoModal);
  };

  const toggleOffersModal = () => {
    setShowOffersModal(!showOffersModal);
  };

  return (
    <div className=" relative w-full sm:px-16 px-6">
      <div className=" lg:gap-12 flex justify-between items-start max-lg:flex-col">
        <div className="py-4 w-[60%] max-lg:w-auto">
          <div>
            <h2 className="text-xl font-semibold font-Poetsen">
              6 Bed House with En Suite at Runda
            </h2>
            <div className="leading-8">
              <ul className="flex gap-1 items-center">
                <li>
                  2 guests <span>.</span>
                </li>
                <li>
                  1 bedroom <span>.</span>
                </li>
                <li>
                  1 bed <span>.</span>
                </li>
                <li>1 bath</li>
              </ul>
              <div>
                <span className="flex text-xl items-center gap-1">
                  <ul className="flex gap-1 items-center">
                    <li>
                      <img src="/star.png" alt="" className="h-5" />
                    </li>
                    <li>.</li>
                    <li className="font-bold font-Briem">4.5</li>
                    <li>.</li>
                    <li className="underline font-Josefin">16 reviews</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <hr className="border-t-1 border-gray-300 my-2" />
            <div className="flex items-center mb-4 mt-6">
              <img
                className="w-12 h-12 me-4 rounded-full object-cover"
                src="/person.png"
                alt=""
              />
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  Hosted By KingVac
                </p>
                <p className="block text-sm text-gray-500 dark:text-gray-400">
                  Superhost : 2 Years Hosting
                </p>
              </div>
            </div>
            <hr className="border-t-1 border-gray-300 my-2 mt-6" />
          </div>

          {/* description modal */}
          <div className="sm:w-full">
            <div className="mt-4">
              <div className="">
                <p className="font-Josefin">
                  This executive Six-bedroom house located in Runda is a
                  luxurious and spacious property, perfect for those seeking a
                  comfortable and stylish living environment...
                </p>
                <button
                  className="text-gray-500 font-semibold underline flex items-center gap-1"
                  onClick={toggleBasicInfoModal}
                >
                  <h3> Show More</h3>
                  <span>
                    <img src="/right.png" className="h-[10px] " />
                  </span>
                </button>
              </div>
            </div>
            {showBasicInfoModal && (
              <motion.div
                initial={{ opacity: 0, y: "100vh" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100vh" }}
                transition={{ duration: 0.3 }}
                className="sm:w-full fixed z-10 inset-0 overflow-y-auto"
              >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-100 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <p className="font-Josefin">
                        This executive Six-bedroom house located in Runda is a
                        luxurious and spacious property, perfect for those
                        seeking a comfortable and stylish living environment.
                        Here's a detailed description of the property Property
                        Type Residential House Location Runda Nairobi Kenya
                        Rent: 500,000 per month Key Features Six Bedrooms This
                        house boasts four generously.This executive Six-bedroom
                        house located in Runda is a luxurious and spacious
                        property, perfect for those seeking a comfortable and
                        stylish living environment. Here's a detailed
                        description of the property Property Type Residential
                        House Location Runda Nairobi Kenya Rent: 500,000 per
                        month Key Features Six Bedrooms This house boasts four
                        generouslyThis executive Six-bedroom house located in
                        Runda is a luxurious and spacious property, perfect for
                        those seeking a comfortable and stylish living
                        environment. Here's a detailed description of the
                        property Property Type Residential House Location Runda
                        Nairobi Kenya Rent: 500,000 per month Key Features Six
                        Bedrooms This house boasts four generously
                      </p>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={toggleBasicInfoModal}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <hr className="border-t-1 border-gray-300 my-2 mt-6" />
          </div>

          {/* Place offer Modal */}
          <div className="mt-4">
            <h2 className="mt-4 text-xl font-semibold font-Poetsen">
              What this place Offers
            </h2>
            <div className="mt-2 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <img src="/Kitchen.png" className="h-7" />
                </div>
                <div>
                  <h1 className="font-semibold">Kitchen </h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img src="/Kitchen.png" className="h-7" />
                </div>
                <div>
                  <h1 className="font-semibold">Wifi </h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img src="/Kitchen.png" className="h-7" />
                </div>
                <div>
                  <h1 className="font-semibold">Dedicated works place </h1>
                </div>
              </div>
              <button
                className="max-lg:w-full lg:w-1/3 py-2 px-2 rounded-xl border border-gray-400 font-bold"
                onClick={toggleOffersModal}
              >
                Show more
              </button>
            </div>

            {showOffersModal && (
              <div className="fixed z-10 inset-0 lg:w-full overflow-y-auto lg:h-auto">
                {/* Modal content */}
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-lg lg:w-full max-lg:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div>
                        <h2 className="text-2xl font-semibold mb-4">
                          What this place Offers
                        </h2>

                        <ul className="mt-8">
                          <li>
                            <h3 className="text-md font-semibold mb-4">
                              Bedroom and Laundry
                            </h3>
                            <ul className="ml-6 mt-10">
                              <div className="mt-2 flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                  <div>
                                    <img src="/Kitchen.png" className="h-7" />
                                  </div>
                                  <div>
                                    <h1 className="font-semibold">Kitchen </h1>
                                  </div>
                                </div>
                                <hr className="border-t-1 border-gray-300 my-2" />
                                <div className="flex items-center gap-4">
                                  <div>
                                    <img src="/Kitchen.png" className="h-7" />
                                  </div>
                                  <div>
                                    <h1 className="font-semibold">Wifi </h1>
                                  </div>
                                </div>
                                <hr className="border-t-1 border-gray-300 my-2" />
                                <div className="flex items-center gap-4">
                                  <div>
                                    <img src="/Kitchen.png" className="h-7" />
                                  </div>
                                  <div>
                                    <h1 className="font-semibold">
                                      Dedicated works place
                                    </h1>
                                  </div>
                                </div>
                                <hr className="border-t-1 border-gray-300 my-2" />
                              </div>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        onClick={toggleOffersModal}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <hr className="border-t-1 border-gray-300 my-2 mt-6" />
          </div>

          <h2 className="mt-10 text-2xl font-semibold font-Poetsen">Near by</h2>
          <div className="mt-4">
            <div className="">
              <p className="font-Josefin">
                This executive Six-bedroom house Located in Runda is a luxurious
                and spacious property, perfect for those seeking a comfortable
                and stylish living environment. Heres a detailed description of
                the property Property Type Residential House Location Runda
                Nairobi Kenya Rent: 500,000 per month Key Features Six Bedrooms
                This house boasts four generously
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-2xl font-semibold font-Poetsen">Reviews</h2>
          <div className="mt-4">
            <div className="">
              <p className="font-Josefin">
                This executive Six-bedroom house Located in Runda is a luxurious
                and spacious property, perfect for those seeking a comfortable
                and stylish living environment. Heres a detailed description of
                the property Property Type Residential House Location Runda
                Nairobi Kenya Rent: 500,000 per month Key Features Six Bedrooms
                This house boasts four generously
              </p>
            </div>
          </div>

          <h2 className="mt-10 text-2xl font-semibold font-Poetsen">
            Comments
          </h2>
          <div className="mt-4">
            <div className="">
              <p className="font-Josefin">
                {" "}
                This executive Six-bedroom house Located in Runda is a luxurious
                and spacious property, perfect for those seeking a comfortable
                and stylish living environment. Heres a detailed description of
                the property Property Type Residential House Location Runda
                Nairobi Kenya Rent: 500,000 per month Key Features Six Bedrooms
                This house boasts four generously{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%] py-4 max-lg:w-full">
          <HouseForm />
        </div>
      </div>
    </div>
  );
};

export default Description;

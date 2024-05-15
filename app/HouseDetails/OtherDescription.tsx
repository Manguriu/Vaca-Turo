"use client";

import React from "react";
import HouseForm from "./HouseForm";
import DescriptionH from "./modals/DescriptionH";
import OffersM from "./modals/OffersM";
import Comments from "./modals/Comments";
import Reviews from "./modals/Reviews";

const Description = () => {
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
          <DescriptionH />
          <hr className="border-t-1 border-gray-300 my-2 mt-6" />

          {/* Place offer Modal */}
          <OffersM />
          <hr className="border-t-1 border-gray-300 my-2 mt-8" />

          <div className="w-[40%] py-4 max-lg:w-full lg:hidden">
            <HouseForm />
            <hr className="border-t-1 border-gray-300 my-2 mt-8" />
          </div>
          <Reviews />
          <hr className="border-t-1 border-gray-300 my-2 mt-8" />

          <Comments />
          <hr className="border-t-1 border-gray-300 my-2 mt-8" />

         
        </div>
        <div className="w-[40%] py-4 max-lg:w-full max-lg:hidden">
          <HouseForm />
          <hr className="border-t-1 border-gray-300 my-2 mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Description;

"use client";
import React, { useState, useEffect } from "react";

import "react-phone-input-2/lib/style.css";
import HouseForm from "./HouseForm";

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

export default function Description() {
  const [mainImage, setMainImage] = useState(houseImageURL);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (newImageURL: string) => {
    if (newImageURL === mainImage) {
      setShowModal(true); // Show modal only when main image is clicked
    }
    setMainImage(newImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-full h-full  max-lg:h-auto max-lg:w-auto">
            <div className="relative h-full max-w-full">
              <button
                className="absolute top-2 right-2 text-white text-lg bg-transparent border-0"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <img
                className="h-full w-full object-contain max-lg:h-auto max-lg:w-auto"
                src={mainImage}
                alt=""
              />
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto w-full flex flex-col justify-center items-center">
        <div className="sm:px-16 lg:px-6 mx-auto flex flex-row gap-4 w-full max-lg:flex-col">
          <div className="flex flex-col gap-2 max-lg:w-full">
            <img
              className="h-[500px] w-full rounded-xl max-md:rounded-none  max-lg:h-auto"
              alt=""
              src={mainImage}
              onClick={() => handleImageClick(mainImage)}
            />
            <div
              className="flex gap-3"
              style={{ overflowX: "scroll", maxHeight: "300px" }}
            >
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL1}
                onClick={() => handleImageClick(houseImageURL1)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL2}
                onClick={() => handleImageClick(houseImageURL2)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL3}
                onClick={() => handleImageClick(houseImageURL3)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL4}
                onClick={() => handleImageClick(houseImageURL4)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL5}
                onClick={() => handleImageClick(houseImageURL5)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL6}
                onClick={() => handleImageClick(houseImageURL6)}
              />
                <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL5}
                onClick={() => handleImageClick(houseImageURL5)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL6}
                onClick={() => handleImageClick(houseImageURL6)}
              />
                  <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL5}
                onClick={() => handleImageClick(houseImageURL5)}
              />
              <img
                className="flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                alt=""
                src={houseImageURL6}
                onClick={() => handleImageClick(houseImageURL6)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

"use client";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { DetailsImages } from "@/types"; // Adjust the import path as needed

interface DescriptionProps {
  detailsImages: DetailsImages;
}

export default function Description({ detailsImages }: DescriptionProps) {
  const [mainImage, setMainImage] = useState<string>(detailsImages.HouseImg1);
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

  // Extract image URLs
  const imageUrls = Object.values(detailsImages).filter((url) =>
    url.startsWith("http")
  );

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="max-w-full h-full max-lg:h-auto max-lg:w-auto">
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
              className="h-[500px] w-full rounded-xl max-md:rounded-none max-lg:h-auto object-cover"
              alt=""
              src={mainImage}
              onClick={() => handleImageClick(mainImage)}
            />
            <div className="flex gap-3 overflow-x-scroll max-h-[300px]">
              {imageUrls.map((imageURL, index) => (
                <img
                  key={index}
                  className="object-cover flex-shrink-0 h-[100px] w-[163px] rounded-xl cursor-pointer max-md:h-[94px] max-md:w-[98px]"
                  alt={`house-${index}`}
                  src={imageURL as string}
                  onClick={() => handleImageClick(imageURL as string)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

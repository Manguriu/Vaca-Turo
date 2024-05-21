"use client";

import React, { useEffect, useState } from "react";
import Description from "../Description";
import ModalC from "../modalPop/ModalC";
import { useCarDetails } from "../content/CarDetailsContext";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CarDetailsProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

// CarDetails Component
export default function CarDetails() {
  const { id } = useParams();
  const { carDetails } = useCarDetails();
  const [details, setDetails] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    console.log("Car Details PAGE NEW:", carDetails);
    console.log("Search Params ID:", id);

    if (carDetails.length > 0 && id) {
      const car = carDetails.find(
        (car: any) => car.id === parseInt(id as string)
      );
      if (car) {
        console.log("Found Car:", car);
        setDetails(car);
      } else {
        console.log("Car not found with ID:", id);
      }
    }
  }, [carDetails, id]);

  if (!details) {
    return (
      <div className="flex flex-col gap-1 justify-center items-center h-auto w-auto">
        <Skeleton width={800} height={300} />
        <Skeleton width={800} height={20} />
        <Skeleton width={800} height={10} />
        <Skeleton width={800} height={10} />
        <Skeleton width={800} height={10} />
        <Skeleton width={800} height={10} />
      </div>
    );
  }

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  const {
    details: {
      Name,
      price,
      oImg1,
      oImg2,
      oImg3,
      rating,
      overview,
      features,
      location,
      Comments,
    },
  } = details;

  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="sm:px-16 lg:px-6 mx-auto flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          <div className="w-[75%] max-lg:w-full relative">
            <div className="relative">
              <img
                className="h-[427px] w-full lg:rounded-s-xl  max-lg:object-fit max-lg:h-auto cursor-pointer object-cover"
                alt=""
                src={oImg1}
              />
              <div className=" absolute bottom-0 right-0 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-1 py-1 text-center inline-flex items-center">
                <ModalC />
              </div>
            </div>
          </div>

          <div className="gap-3 flex flex-col w-1/4 justify-center max-lg:hidden relative">
            <div>
              <img
                className="h-[215px] w-full object-cover rounded-e-xl cursor-pointer"
                alt=""
                src={oImg2}
                onClick={() => openModal(oImg2)}
              />
            </div>
            <div className="relative">
              <img
                className="h-[200px] w-full object-cover rounded-e-xl cursor-pointer"
                alt=""
                src={details.details.oImg3}
                onClick={() => openModal(oImg3)}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Description
         
         name={Name}
         price={price}
         rating={rating}
         overview={overview}
         features={features}
         location={location.location}
         comments={{
           name: Comments.Name,
           updateTime: Comments.updateTime,
           rating: Comments.rating,
           photo: Comments.Photo,
           dateLocation: Comments.DateLocation,
           comment: Comments.comment,
         }}
          
          />
          <hr className="border-t-1 border-gray-300 my-2" />
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative max-w-full">
            <button
              className="absolute top-2 right-2 text-white text-lg bg-transparent border-0"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              className="h-full w-full object-contain"
              src={selectedImage}
              alt=""
            />
          </div>
        </div>
      )}
    </main>
  );
}

CarDetails.displayName = "CarDetails";
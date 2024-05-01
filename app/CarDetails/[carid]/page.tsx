"use client";
import React, { useState } from "react";
import Description from "../Description";

interface ModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

// Modal Component
const Modal: React.FC<ModalProps> = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative max-w-full">
        <button
          className="absolute top-2 right-2 text-white text-lg bg-transparent border-0"
          onClick={onClose}
        >
          &times;
        </button>
        <img className="h-full w-full object-contain" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

// CarDetails Component
export default function CarDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const carImageURL =
    "https://images.turo.com/media/vehicle/images/Tlhf9YyOT2OVd3k6QrKayQ.480x270.jpg";
  const carImageURL1 =
    "https://images.turo.com/media/vehicle/images/n1CoFyN7SBipATkgsqqu2Q.768x432.jpg";
  const carImageURL2 =
    "https://images.turo.com/media/vehicle/images/K-j3mlSkRIGNgcwncTmeGQ.768x432.jpg";

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="sm:px-16 px-6 mx-auto flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          <div className="w-[75%]">
            <img
              className="h-[427px] w-full rounded-s-xl cursor-pointer"
              alt=""
              src={carImageURL}
              onClick={() => openModal(carImageURL)}
            />
          </div>
          <div className="gap-3 flex flex-col w-1/4 justify-center">
            <div>
              <img
                className="h-[215px] object-cover rounded-e-xl cursor-pointer"
                alt=""
                src={carImageURL1}
                onClick={() => openModal(carImageURL1)}
              />
            </div>
            <div>
              <img
                className="h-[200px] object-cover rounded-e-xl cursor-pointer"
                alt=""
                src={carImageURL2}
                onClick={() => openModal(carImageURL2)}
              />
            </div>
          </div>
        </div>
        <div className="">
          <Description />
        </div>
      </div>
      {/* Modal */}
      <Modal isOpen={modalOpen} imageUrl={selectedImage} onClose={closeModal} />
    </main>
  );
}

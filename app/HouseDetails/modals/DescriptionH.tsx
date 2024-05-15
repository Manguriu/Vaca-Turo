import React from "react";
import { useRef } from "react";

export default function DescriptionH() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <p className="font-Josefin">
        This executive Six-bedroom house located in Runda is a luxurious and
        spacious property, perfect for those seeking a comfortable and stylish
        living environment...
      </p>
      <button
        className="mt-2 text-gray-500 font-semibold underline flex items-center gap-1"
        onClick={openModal}
      >
        <h3> Show More</h3>
        <span>
          <img src="/right.png" className="h-[10px] " />
        </span>
      </button>

      <dialog id="my_modal_4" ref={modalRef} className="modal">
        <div className="modal-box lg:w-1/2">
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="p-4">
            <p className="font-Josefin py-4">
              This executive Six-bedroom house located in Runda is a luxurious
              and spacious property, perfect for those seeking a comfortable and
              stylish living environment. Heres a detailed description of the
              property Property Type Residential House Location Runda Nairobi
              Kenya Rent: 500,000 per month Key Features Six Bedrooms This house
              boasts four generously.This executive Six-bedroom house located in
              Runda is a luxurious and spacious property, perfect for those
              seeking a comfortable and stylish living environment. Heres a
              detailed description of the property Property Type Residential
              House Location Runda Nairobi Kenya Rent: 500,000 per month Key
              Features Six Bedrooms This house boasts four generouslyThis
              executive Six-bedroom house located in Runda is a luxurious and
              spacious property, perfect for those seeking a comfortable and
              stylish living environment. Heres a detailed description of the
              property Property Type Residential House Location Runda Nairobi
              Kenya Rent: 500,000 per month Key Features Six Bedrooms This house
              boasts four generously
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

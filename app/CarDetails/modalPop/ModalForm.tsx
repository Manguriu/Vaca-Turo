import React, { useState } from "react";
import DateComponent from "../DateComponent";

export default function ModalForm() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {modalOpen && (
        <div
          id="static-modal"
          data-modal-backdrop="static"
          aria-hidden="true"
          className="fixed inset-0 overflow-y-auto z-60 bg-gray-900 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white h-auto w-[80%] rounded-lg max-w-lg p-6">
            <div className="flex flex-row justify-between items-center border-b-2 border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Static modal
              </h3>
            </div>
            <div className="mt-6 overflow-y-auto">
              <p className="text-gray-700">
                <DateComponent />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

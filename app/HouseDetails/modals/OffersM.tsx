import { useRef } from "react";

const OffersM = ({Amenities}:{Amenities:any}) => {
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
    <div className="mt-4">
      <h2 className="mt-4 text-xl font-semibold font-Poetsen">
        What this place Offers
      </h2>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div>
            <img src="/Kitchen.png" className="h-7" />
          </div>
          <div>
            <h1 className="font-semibold">{Amenities.Amenities1} </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img src="/Kitchen.png" className="h-7" />
          </div>
          <div>
            <h1 className="font-semibold">{Amenities.Amenities2} </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img src="/Kitchen.png" className="h-7" />
          </div>
          <div>
            <h1 className="font-semibold">{Amenities.Amenities3} </h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img src="/Kitchen.png" className="h-7" />
          </div>
          <div>
            <h1 className="font-semibold">{Amenities.Amenities4} </h1>
          </div>
        </div>
        <button
          className="max-lg:w-full lg:w-1/3 py-2 px-2 rounded-xl border border-gray-400 font-bold"
          onClick={openModal}
        >
          Show more
        </button>
      </div>

      <dialog id="my_modal_4" ref={modalRef} className="modal ">
        
        <div className="modal-box lg:w-11/12 lg:max-w-5xl ">
     
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>


          <div className="p-10 ">
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
                        <h1 className="font-semibold">{Amenities.Amenities3} </h1>
                      </div>
                    </div>
                    <hr className="border-t-1 border-gray-300 my-2" />
                    <div className="flex items-center gap-4">
                      <div>
                        <img src="/Kitchen.png" className="h-7" />
                      </div>
                      <div>
                        <h1 className="font-semibold">{Amenities.Amenities1} </h1>
                      </div>
                    </div>
                    <hr className="border-t-1 border-gray-300 my-2" />
                    <div className="flex items-center gap-4">
                      <div>
                        <img src="/Kitchen.png" className="h-7" />
                      </div>
                      <div>
                        <h1 className="font-semibold">{Amenities.Amenities1}</h1>
                      </div>
                    </div>
                    <hr className="border-t-1 border-gray-300 my-2" />
                  </div>
                </ul>
              </li>
            </ul>       
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OffersM;



import React from "react";

export default function ModalC() {
  return (
    <div className="">
      <a href="#my_modal_8">
        <button
          type="button"
          className="text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
        >
          <img src="/imgLogo.png" className="h-8" alt="View more" />
          View more
        </button>
      </a>

      <div className="modal max-md:px-2 p-8" role="dialog" id="my_modal_8">
        <div className="h-[90%] w-[80%] max-lg:h-auto max-lg:w-auto bg-white overflow-y-auto px-2 py-2 rounded-2xl">
          <div className=" w-full rounded-xl bg-white ">
            <h3 className="font-bold text-lg py-4 max-md:py-1 font-Briem">Tesla Model 3 2021</h3>
            <hr className="border-t-2 border-gray-200 my-2" />
          </div>
          <div className="max-h-[calc(90%-3rem)] overflow-y-auto pb-2">
            <div className="grid max-md:grid-cols-2 gap-2">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/Ea38kHxjS36oRCjmnZ3ONA.1440x700.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/Wz069of4Rd6boWFZSpiy3A.1440x700.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/Xr7RBqTKSc2yAOUznTRqKQ.1440x700.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/TTy0n3I-QU-mNoK1syUH4Q.1440x700.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/OhPhU4ekS_2RAYJe0VKd0Q.1440x700.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/HpEv-AfDSKmrF0XDzYT7YQ.1440x700.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.turo.com/media/vehicle/images/LMRt87JxTOiw7Nja13PQqA.1440x700.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <hr className="border-t-2 border-gray-200 my-2" />
          <div className="modal-action max-md:px-4 max-md:pb-4">
            <a href="#" className="btn font-Briem max-md:text-[18px]">
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// import DateComponent from "../DateComponent";
// import Comments from "../Comments";

// export default function ModalForm() {
//   const openModal = () => {
//     const modal = document.getElementById(
//       "ThisModal"
//     ) as HTMLDialogElement | null;
//     if (modal) {
//       console.log("Modal element found:", modal);
//       modal.showModal();
//     } else {
//       console.error("Modal element not found!");
//     }
//   };

//   return (
//     <div className="">
//       <button
//         onClick={openModal}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full flex  max-lg:w-auto"
//       >
//         Rent Now
//       </button>    
//       <dialog id="ThisModal" className="modal">
//         <div className="modal-box w-11/12 max-w-5xl">
//           <h3 className="font-bold text-lg">Car Rental Form</h3>
//           <DateComponent />
//           <div className="modal-action">
//             <button
//               className="btn"
//               onClick={() => {
//                 const modal = document.getElementById(
//                   "ThisModal"
//                 ) as HTMLDialogElement | null;
//                 if (modal) modal.close();
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// }

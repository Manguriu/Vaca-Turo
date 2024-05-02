// "use client";
// import React from "react";
// import "./cars.css";
// import { useRouter } from "next/navigation";
// import { CarMakeList } from "@/constants";

// const CarsMakeCard = () => {
//   const router = useRouter();

//   return (
//     <>
//       {CarMakeList.map((details) => (
//         <button
//           onClick={() => router.push("/ExploreCarsMake")}
//           type="button"
//           className="card card-compact w-60 bg-base-100 shadow-xl"
//           key={details.id} // Add a unique key for each iteration
//         >
//           <figure>
//             <img
//               src={details.makeImage}
//               alt="Cars"
//               className="w-48 h-32 object-cover" // Set fixed width and height
//             />
//           </figure>
//           <div className="card-body">
//             <h2 className="font-bold text-xl">{details.make}</h2>
//           </div>
//         </button>
//       ))}
//     </>
//   );
// };

// export default CarsMakeCard;

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CarMakeList } from "@/constants";

const CarsMakeCard = () => {
  const router = useRouter();

  return (
    <div className="snap-x overflow-x-auto px-4 py-4">
      {CarMakeList.map((details) => (
        <div key={details.id} className="scroll-ml-6 snap-start flex-shrink-0">
          <button
            onClick={() => router.push("/ExploreCarsMake")}
            type="button"
            className="card card-compact w-60 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={details.makeImage}
                alt="Cars"
                className="w-48 h-32 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-xl">{details.make}</h2>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarsMakeCard;

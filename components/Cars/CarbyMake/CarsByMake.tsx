// "use client";

// import React from "react";
// // import CarsMakeCard from "./CarsMakeCard";
// import { useRouter } from "next/navigation";
// import { CarMakeList } from "@/constants";

// const CarsByMake = () => {
//   const router = useRouter();
//   return (
//     <div
//       className="mt-10 max-lg:mt-20 padding-x padding-y max-width"
//       id="discover"
//     >
//       <div className="home__text-container justify-center items-center max-md:flex max-md:flex-col">
//         <h1 className="text-4xl font-extrabold font-Poetsen">
//           Browse cars by make.
//         </h1>
//         <p className="font-Josefin text-[19px] text-wrap">
//           Some of our best cars with your desired model enjoy our services
//         </p>
//       </div>
//       <div className="">
//         <div className="flex flex-wrap gap-4 mt-10 justify-center">
//           <div className="snap-x overflow-x-auto px-4 py-4 gap-4">
//             {CarMakeList.map((details) => (
//               <div
//                 key={details.id}
//                 className="scroll-ml-1 snap-start flex-shrink-0 "
//               >
//                 <button
//                   onClick={() => router.push("/ExploreCarsMake")}
//                   type="button"
//                   className="card card-compact w-60 bg-base-100 shadow-xl flex flex-col justify-center items-center"
//                 >
//                   <figure>
//                     <img
//                       src={details.makeImage}
//                       alt="Cars"
//                       className="w-48 h-32 object-cover"
//                     />
//                   </figure>
//                   <div className="card-body">
//                     <h2 className="font-bold text-xl font-Briem">
//                       {details.make}
//                     </h2>
//                   </div>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarsByMake;


"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CarMakeList } from "@/constants";

const CarsByMake = () => {
  const router = useRouter();

  const handleMakeClick = (make: string) => {
    router.push(`/ExploreCarsMake?make=${make}`);
  };

  return (
    <div
      className="mt-10 max-lg:mt-20 padding-x padding-y max-width"
      id="discover"
    >
      <div className="home__text-container justify-center items-center max-md:flex max-md:flex-col">
        <h1 className="text-4xl font-extrabold font-Poetsen">
          Browse cars by make.
        </h1>
        <p className="font-Josefin text-[19px] text-wrap">
          Some of our best cars with your desired model enjoy our services
        </p>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <div className="snap-x overflow-x-auto px-4 py-4 gap-4">
            {CarMakeList.map((details) => (
              <div
                key={details.id}
                className="scroll-ml-1 snap-start flex-shrink-0 "
              >
                <button
                  onClick={() => handleMakeClick(details.make)}
                  type="button"
                  className="card card-compact w-60 bg-base-100 shadow-xl flex flex-col justify-center items-center"
                >
                  <figure>
                    <img
                      src={details.makeImage}
                      alt="Cars"
                      className="w-48 h-32 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-xl font-Briem">
                      {details.make}
                    </h2>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsByMake;


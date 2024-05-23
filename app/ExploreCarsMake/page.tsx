// "use client";

// import React, { Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import ExploreCarsMakeContent from "./otherDetails/ExploreCarsMakeClient";

// export default function ExploreCarsMake() {
//   const searchParams = useSearchParams();
//   const selectedMake = searchParams.get("make");

//   return (
//     <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center">
//       <div className="lg:mt-20 text-center max-md:mt-[4rem]">
//         <h2 className="font-bold px-4 max-md:text-[20px]">
//           Discover KingVac Rentals the worlds largest Car Renting marketplace
//         </h2>
//         <h1 className="text-4xl mt-4 font-bold">Rent a {selectedMake}</h1>
//       </div>
//       <div className="flex gap-6 justify-center items-center mt-8">
//         <div className="flex justify-center items-center lg:px-4">
//           <Suspense fallback={<div>Loading...</div>}>
//             <ExploreCarsMakeContent selectedMake={selectedMake} />
//           </Suspense>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Dynamically import the client-side component
const ExploreCarsMakeClient = dynamic(
  () => import("./otherDetails/ExploreCarsMakeClient"),
  {
    ssr: false,
  }
);

export default function ExploreCarsMake() {
  const searchParams = useSearchParams();
  const selectedMake = searchParams.get("make");
  return (
    <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center">
      <div className="lg:mt-20 text-center max-md:mt-[4rem]">
        <h2 className="font-bold px-4 max-md:text-[20px]">
          Discover KingVac Rentals the worlds largest car sharing marketplace
        </h2>
      </div>
      <div className="flex gap-6 justify-center items-center mt-8">
        <div className="flex justify-center items-center lg:px-4">
          <Suspense
            fallback={
              <div>
                <Skeleton />
                <Skeleton count={5} /> Loading...
              </div>
            }
          >
            <div className="flex flex-col">
            <h1 className=" flex items-center justify-center text-4xl mt-4 font-bold">Rent a {selectedMake}</h1>
            <ExploreCarsMakeClient />
            </div>
            
          </Suspense>
        </div>
      </div>
    </main>
  );
}

"use client";

// import React from "react";
// import "./cars.css";
// import Link from "next/link";
// import router from "next/router";

// const CarsMakeCard = () => {
//   return (
//     <button onClick={() => router.push("/byMake")} type="button">
//       <div className="card card-compact w-60 bg-base-100 shadow-xl">
//         <figure>
//           <img
//             src="https://static.autox.com/uploads/2021/03/Jeep-Wrangler-Image-4-.jpg"
//             alt="Cars"
//           />
//         </figure>
//         <div className="card-body">
//           <button className="card-title">Jeep</button>
//         </div>
//       </div>
//     </button>
//   );
// };

// export default CarsMakeCard;

import React from "react";
import "./cars.css";
import { useRouter } from "next/navigation";

const CarsMakeCard = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/ExploreCarsMake")}
      type="button"
      className="card card-compact w-60 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src="https://static.autox.com/uploads/2021/03/Jeep-Wrangler-Image-4-.jpg"
          alt="Cars"
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-xl">Jeep</h2>
      </div>
    </button>
  );
};

export default CarsMakeCard;

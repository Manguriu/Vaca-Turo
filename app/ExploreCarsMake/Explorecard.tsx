import React from "react";

const Explorecard = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.turo.com/media/vehicle/images/GVHAxJVFQ1OzX2rEEcSdTw.328x176.jpg"
          alt="category"
          className="object-cover w-full h-full rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">Jeep Wrangler 4xe 2021</h2>
        <h1 className="flex text-xl items-center gap-1">
          <span className="font-bold">4.5</span>
          <span>
            <img src="/star.png" alt="" className="h-5" />
          </span>
          <span>(106 trips)</span>
        </h1>
        <hr className="border-t-2 border-gray-200 my-4" />
        <div className="card-actions justify-end">
          <h1 className="text-xl">
            <span className="font-extrabold"> $53</span>
            <span> / day</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Explorecard;

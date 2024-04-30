import React from "react";
import Description from "../Description";
import OtherDescription from "../OtherDescription";

export default function HouseDetails() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <div className="px-14 flex flex-row justify-between mt-10">
        <div className="px-4 py-4 ">
          <h1 className="text-2xl font-bold">
            6 Bed House with En Suite at Runda
          </h1>
        </div>
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold">
            <span className="line-through text-gray-600"> $590</span>
            <span className="font-extrabold"> $530</span>
            <span className="font-thin text-xl"> /day</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-6  py-2 mt-5">
        <Description />
      </div>
      <div className="mt-10">
        <OtherDescription />
      </div>
    </main>
  );
}

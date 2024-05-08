import React from "react";
import Description from "../DescriptionImage";
import OtherDescription from "../OtherDescription";

export default function HouseDetails() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="sm:px-16 px-6 mx-auto flex max-md:flex-col gap-2 lg:justify-between">
        <div className="px-4 py-4 ">
          <h1 className="text-2xl max-md:text-[20px] font-bold">
            6 Bed House with En Suite at Runda
          </h1>
        </div>
        <div className="px-4 py-4">
          <h1 className="text-2xl  font-bold">
            <span className="line-through text-gray-600 max-md:text-[20px]"> $590</span>
            <span className="font-extrabold max-md:text-[25px]"> $530</span>
            <span className="font-thin text-xl max-md:text-[20px]"> /day</span>
          </h1>
        </div>
      </div>

      <div className="flex gap-6 py-2 lg:mt-5 ">
        <Description />
      </div>
      <div className="lg:mt-10">
        <OtherDescription />
      </div>
    </main>
  );
}

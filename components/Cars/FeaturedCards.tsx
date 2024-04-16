import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

const FeaturedCards = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white  rounded-xl shadow-sm sm:flex">
        <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
          <Image
            fill
            className="object-contain"
            src="/image1.jpg"
            alt="Image Description"
          />
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 flex flex-col h-full sm:p-7  justify-center items-center">
            <h3 className="text-3xl font-extrabold text-gray-800">Find the <span className="text-indigo-700">Perfect car</span> to unwind for the weekend</h3>
            <p className="mt-5 text-gray-500">
            From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.
            </p>
            <CustomButton
              title="Browse Cars"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;

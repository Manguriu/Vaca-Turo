import React from "react";
import CarsMakeCard from "./CarsMakeCard";

const CarsByMake = () => {
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
          <CarsMakeCard />
        </div>
      </div>
    </div>
  );
};

export default CarsByMake;

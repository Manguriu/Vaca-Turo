import React from "react";
import CarsMakeCard from "./CarsMakeCard";

const CarsByMake = () => {
  return (
    <div
      className="mt-10 max-lg:mt-20 padding-x padding-y max-width"
      id="discover"
    >
      <div className="home__text-container justify-center items-center">
        <h1 className="text-4xl font-extrabold"> Browse cars by make. </h1>
        <p>
          Here are some of our best cars with your desired model enjoy our
          services
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
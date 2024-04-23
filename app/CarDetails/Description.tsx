import React from "react";

const Description = () => {
  return (
    <div className="flex justify-between">
    <div className="px-4 py-4 ">
        <h1 className="text-4xl font-bold">Tesla Model 3 2021</h1>
        <h4 className="mt-2">Standard Range Plus</h4>
        <h1 className="flex text-xl mt-2 items-center gap-1">
          <span className="font-bold">
          4.5
          </span>
          <span>
            <img src="/star.png" alt="" className="h-5" />
          </span>
          <span>(106 trips)</span>
        </h1>
        <div className=" flex justify-between mt-2">
          <div className="flex gap-1">
            <img src="/Carseat.png" alt="" className="h-5"/>
            <h2> 5 Seats</h2>
          </div>
          <div className="flex gap-1">
          <img src="/Cardoor.png" alt="" className="h-5"/>
            <h2>5 Doors</h2>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 w-[30%]">
        <h1 className="text-xl">
          <span className="line-through"> $59</span>
          <span className="font-extrabold"> $53</span>
          <span> / day</span>
        </h1>
        <div>
          <div><h4>Trip start</h4></div>
          <div><h4>Trip end</h4></div>
          <div><h4>Pick up & Return location</h4></div>
        </div>
      </div>
    </div>
  );
};

export default Description;

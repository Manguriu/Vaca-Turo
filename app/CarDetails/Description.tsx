import React from "react";
import DateComponent from "./DateComponent";
import Reviews from "./Reviews";
import Comments from "./Comments";
import ModalForm from "./modalPop/ModalForm";

const Description = () => {
  return (
    <div className="flex justify-between max-lg:flex-wrap">
      <div className="px-4 py-4">
        <h1 className="text-4xl font-bold ">Tesla Model 3 2021</h1>
        <h4 className="mt-2">Standard Range Plus</h4>
        <h1 className="flex text-xl mt-2 items-center gap-1">
          <span className="font-bold">4.5</span>
          <span>
            <img src="/star.png" alt="" className="h-5" />
          </span>
          <span>(106 trips)</span>
        </h1>

        <h2 className="mt-10 text-2xl font-semibold">Cars Make</h2>
        <div>
          <p>Tesla</p>
        </div>
        <h2 className="mt-10 text-2xl font-semibold">Overview</h2>
        <div>
          <p>
            We hire 5 Seater Toyota Voxy & Noah Vans in Nairobi at affordable
            prices. The 5 Seater Toyota Voxy / Noah Van is a multi passenger van
            with balanced combination of economy, luxury and performance. The
            vans pleasing interior, relaxed cabin, space, safety features makes
            it an attractive solution to many of todays traffic and
            environmental problems. Quick acceleration, excellent handling and a
          </p>
        </div>

        <h2 className="mt-10 text-2xl underline font-semibold">
          {" "}
          Car Features
        </h2>
        <div className=" grid grid-cols-4 gap-4 justify-between mt-4 max-lg:grid-cols-3">
          <div className="flex gap-1">
            <img src="/AWD.png" alt="" className="h-5" />
            <h2> AWD </h2>
          </div>
          <div className="flex gap-1">
            <img src="/Fuel.png" alt="" className="h-5" />
            <h2> Electric </h2>
          </div>
          <div className="flex gap-1">
            <img src="/Carseat.png" alt="" className="h-5" />
            <h2> Heated Seats</h2>
          </div>
          <div className="flex gap-1">
            <img src="/Gps.png" alt="" className="h-5" />
            <h2> Gps</h2>
          </div>
          <div className="flex gap-1">
            <img src="/Carseat.png" alt="" className="h-5" />
            <h2> 5 Seats</h2>
          </div>
          <div className="flex gap-1">
            <img src="/Cardoor.png" alt="" className="h-5" />
            <h2>5 Doors</h2>
          </div>
          <div className="flex gap-1">
            <img src="/SunRoof.png" alt="" className="h-5" />
            <h2>Sunroof</h2>
          </div>
          <div className="flex gap-1">
            <img src="/Bluetooth.png" alt="" className="h-5" />
            <h2>Bluetooth</h2>
          </div>
          <div className="flex gap-1">
            <img src="/Camera.png" alt="" className="h-5" />
            <h2>Backup camera</h2>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Location</h2>
        <div>
          <p>Tesla</p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">Reviews</h2>
        <div className="mt-4">
          <div className="">
            {" "}
            <Reviews />
          </div>
        </div>

        <h2 className="max-lg:hidden mt-10 text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          <div className="">
            <Comments />
          </div>
        </div>
      </div>
      <div className="px-4 py-4 w-[30%]">
        <h1 className="text-xl">
          <span className="line-through"> $59</span>
          <span className="font-extrabold"> $53</span>
          <span> / day</span>
        </h1>
        <div className="mt-5">
          <div className="mb-4 mt-4">
            <h4 className="text-xl text-cyan-400">Trip start & Trip end </h4>
          </div>
          <ModalForm />
          <DateComponent />
        </div>
      </div>
    </div>
  );
};

export default Description;

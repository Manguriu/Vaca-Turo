import React from "react";
import DateComponent from "./DateComponent";
import Reviews from "./Reviews";
import Comments from "./Comments";
import { useState } from "react";
import LocationMap from "./MapDetails/LocationMap";

const Description = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleView = () => {
    setShowFullText(!showFullText);
  };

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  const features = [
    { icon: "/AWD.png", text: "AWD" },
    { icon: "/Fuel.png", text: "Electric" },
    { icon: "/Carseat.png", text: "Heated Seats" },
    { icon: "/Gps.png", text: "Gps" },
    { icon: "/Carseat.png", text: "5 Seats" },
    { icon: "/Cardoor.png", text: "5 Doors" },
    { icon: "/SunRoof.png", text: "Sunroof" },
    { icon: "/Bluetooth.png", text: "Bluetooth" },
    { icon: "/Camera.png", text: "Backup camera" },
  ];

  return (
    <div className="flex justify-between max-lg:flex-wrap">
      <div className=" py-4 w-[60%] max-md:w-auto lg:px-4">
        <h1 className="text-4xl font-bold font-Briem max-md:px-2">Tesla Model 3 2021</h1>
        
        <h1 className="text-xl lg:hidden mt-4 mb-4 lg:px-1 max-md:px-3">
          <span className="line-through font-Poetsen"> $59</span>
          <span className="font-extrabold font-Briem text-[24px]"> $53</span>
          <span className="font-Josefin"> /day</span>
        </h1>
        <div className="lg:hidden max-md:px-2">
          <DateComponent />
        </div>
        {/* <h4 className="mt-2 font-Josefin max-md:text-[18px] max-md:hidden">
          Standard Range Plus
        </h4> */}
        <h1 className="flex text-xl mt-2 items-center gap-1 max-md:px-3">
          <span className="font-bold font-Briem  ">4.5</span>
          <span>
            <img src="/star.png" alt="" className="h-5" />
          </span>
          <span className="font-Briem">(106 trips)</span>
        </h1>

        <h2 className=" max-md:hidden mt-10 text-2xl font-semibold font-Briem first-letter:">
          Cars Make
        </h2>
        <div className="max-md:hidden">
          <p className="font-Josefin max-md:text-[18px]">Tesla</p>
        </div>
        <h2 className="mt-10 text-2xl font-semibold font-Briem max-md:px-3">Overview</h2>
        <p className="font-Josefin max-md:text-[18px] max-md:px-3">
          {showFullText ? (
            <>
              We hire 5 Seater Toyota Voxy & Noah Vans in Nairobi at affordable
              prices. The 5 Seater Toyota Voxy / Noah Van is a multi-passenger
              van with a balanced combination of economy, luxury, and
              performance. We hire 5 Seater Toyota Voxy & Noah Vans in Nairobi
              at affordable prices. The 5 Seater Toyota Voxy / Noah Van is a
              multi-passenger van with a balanced combination of economy,
              luxury, and performance. We hire 5 Seater Toyota Voxy & Noah Vans
              in Nairobi at affordable prices. The 5 Seater Toyota Voxy / Noah
              Van is a multi-passenger van with a balanced combination of
              economy, luxury, and performance. We hire 5 Seater Toyota Voxy &
              Noah Vans in Nairobi at affordable prices. The 5 Seater Toyota
              Voxy / Noah Van is a multi-passenger van with a balanced
              combination of economy, luxury, and performance.
            </>
          ) : (
            <>
              We hire 5 Seater Toyota Voxy & Noah Vans in Nairobi at affordable
              prices.
            </>
          )}
        </p>
        <button
          className="p-1 italic mb-2 text-[18px] mt-2 underline max-md:px-3"
          onClick={toggleView}
        >
          {showFullText ? "Less.." : "More.."}
        </button>

        <h2 className="mt-10 text-2xl underline font-semibold font-Briem max-md:px-3">
          Car Features
        </h2>
        <div className="max-md:px-3"> 
          {" "}
          <div className=" grid grid-cols-4 gap-4 justify-between mt-4 max-lg:grid-cols-3">
            {showAllFeatures
              ? features.map((feature, index) => (
                  <div key={index} className="flex gap-1">
                    <img src={feature.icon} alt="" className="h-5" />
                    <h2 className="font-Josefin max-md:text-[18px]">
                      {feature.text}
                    </h2>
                  </div>
                ))
              : features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex gap-1">
                    <img src={feature.icon} alt="" className="h-5" />
                    <h2 className="font-Josefin max-md:text-[18px]">
                      {feature.text}
                    </h2>
                  </div>
                ))}
          </div>
          <button
            className="p-1 italic mb-2 mt-2 text-[18px] underline"
            onClick={toggleFeatures}
          >
            {showAllFeatures ? "Less.." : "More.."}
          </button>
        </div>

        <h2 className="mt-10 text-2xl font-semibold font-Briem max-md:px-2">Location</h2>
        <div className="">
          <p><LocationMap /> </p>
        </div>
        

        <h2 className="mt-10 text-2xl font-semibold font-Briem max-md:px-3">Reviews</h2>
        <div className="mt-4">
          <div className="max-md:px-2">
            <Reviews />
          </div>
        </div>
        <h2 className=" mt-10 text-2xl font-semibold font-Briem max-md:px-3">Comments</h2>
        <div className="mt-4">
          <div className="max-md:px-2">
            <Comments />
          </div>
        </div>
      </div>
      <div className="px-4 py-4 w-[40%]">
        <h1 className="text-xl max-lg:hidden">
          <span className="line-through"> $59</span>
          <span className="font-extrabold"> $53</span>
          <span> / day</span>
        </h1>
        <div className="mt-5">
          <div className="mb-4 mt-4 max-lg:hidden">
            <h4 className="max-lg:text-2xl text-xl text-cyan-400 max-lg:w-fit font-Josefin">
              Trip start & Trip end{" "}
            </h4>
          </div>
          <div className=" py-4 max-lg:w-full max-lg:hidden">
            <DateComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

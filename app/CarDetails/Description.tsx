import React from "react";
import DateComponent from "./DateComponent";
import Reviews from "./Reviews";
import Comments from "./Comments";
import { useState } from "react";

interface Features {
  type: string;
  doors: string;
  passengers: string;
  luggage: string;
  drive: string;
}

interface Comments {
  name: string;
  updateTime: string;
  rating: string;
  photo: string;
  dateLocation: string;

}

interface DescriptionProps {
  make:string;
  name: string;
  price: string;
  rating: string;
  overview: string;
  features: Features;
  location: string;
}

const Description = ({
  make,
  name,
  price,
  rating,
  overview,
  features,
  location,
 
}: {
  make:any;
  name: any;
  price: any;
  rating: any;
  overview: any;
  features: any;
  location: any;
 
}) => {
  const [showFullText, setShowFullText] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleView = () => {
    setShowFullText(!showFullText);
  };

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };



  return (
    <div className="flex justify-between max-lg:flex-wrap">
      <div className=" py-4 lg:w-[60%] max-lg:w-auto lg:px-4">
        <h1 className="text-4xl font-bold font-Briem max-md:px-2">{name}</h1>

        <h1 className="text-xl lg:hidden mt-4 mb-4 lg:px-1 max-md:px-3">
          <span className="line-through font-Poetsen"> $59</span>
          <span className="font-extrabold font-Briem text-[24px]">
            {price}
          </span>
          <span className="font-Josefin"> /day</span>
        </h1>
        <h1 className="flex text-xl mt-2 items-center gap-1 max-md:px-3">
          <span>
            <img src="/star.png" alt="" className="h-5" />
          </span>
          <span className="font-bold font-Briem  ">{rating}</span>
        </h1>

        <h2 className=" max-md:hidden mt-10 text-2xl font-semibold font-Briem first-letter:">
          Cars Make
        </h2>
        <div className="">
          <h1 className="font-Josefin max-md:text-[18px]">{make}</h1>
        </div>

        <h2 className="mt-10 text-2xl font-semibold font-Briem max-md:px-3">
          Overview
        </h2>
        <p className="font-Josefin max-md:text-[18px] max-md:px-3">
          {overview}
        </p>

        <h2 className="mt-10 text-2xl underline font-semibold font-Briem max-md:px-3">
          Car Features
        </h2>
        <div className="max-md:px-3">
          {" "}
          <div className="justify-between mt-4 max-lg:grid-cols-3 w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <li className="flex items-center">
                <img src="/gear.png" alt="Type" className="w-6 h-6 mr-2" />
                <span>
                  <strong>Type:</strong> {features.type}
                </span>
              </li>
              <li className="flex items-center">
                <img src="/Cardoor.png" alt="Doors" className="w-6 h-6 mr-2" />
                <span>
                  <strong>Doors:</strong> {features.doors}
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="/Carseat.png"
                  alt="Passengers"
                  className="w-6 h-6 mr-2"
                />
                <span>
                  <strong>Passengers:</strong> {features.passengers}
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="/SunRoof.png"
                  alt="Luggage"
                  className="w-6 h-6 mr-2"
                />
                <span>
                  <strong>lagauge:</strong> {features.luggage}
                </span>
              </li>
              <li className="flex items-center">
                <img src="/AWD.png" alt="Drive" className="w-6 h-6 mr-2" />
                <span>
                  <strong>Drive:</strong> {features.drive}
                </span>
              </li>
            </ul>
          </div>
          <button
            className="p-1 italic mb-2 mt-2 text-[18px] underline"
            onClick={toggleFeatures}
          >
            {showAllFeatures ? "Less.." : "More.."}
          </button>
        </div>

        <div className="px-4 py-4 lg:hidden ">
          <h1 className="text-xl max-lg:hidden">
            <span className="line-through"> $59</span>
            <span className="font-extrabold">{price}</span>
            <span> / day</span>
          </h1>
          <div className="mt-5 max-lg:w-full">
            <div className="mb-4 mt-4 ">
              <h4 className="max-lg:text-2xl text-xl  max-lg:w-fit font-Josefin">
                Book A car With Us
              </h4>
            </div>
            <div className="py-4 ">
              <DateComponent />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="max-md:px-2">
            <Reviews />
          </div>
        </div>
        <h2 className=" mt-10 text-2xl font-semibold font-Briem max-md:px-3">
          Comments
        </h2>
        <div className="mt-4">
          <div className="max-md:px-2">
            <Comments />
          </div>
        </div>
      </div>
      <div className="px-4 py-4 w-[40%]">
        <h1 className="text-xl max-lg:hidden">
          <span className="line-through"> $59</span>
          <span className="font-extrabold">{price}</span>
          <span> / day</span>
        </h1>
        <div className="mt-5 max-lg:w-full">
          <div className="mb-4 mt-4 max-lg:hidden">
            <h4 className="max-lg:text-2xl text-xl text-cyan-400 max-lg:w-fit font-Josefin">
              Trip start & Trip end{" "}
            </h4>
          </div>
          <div className="py-4 max-lg:hidden">
            <DateComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

"use client";
import React from "react";
import { CustomFilter, SearchBar } from "../Index";
import CarCard from "./CarCard";
import Link from "next/link";

const FeaturedCars = () => {
  return (
    <div
      className="mt-10 max-lg:mt-20 padding-x padding-y max-width"
      id="discover"
    >
      <div className="home__text-container justify-center items-center max-md:flex max-md:flex-col">
        <h1 className="text-4xl font-extrabold font-Poetsen"> Featured cars </h1>
        <p className="font-Josefin text-[19px]">Here are some of our best cars </p>
      </div>
      <div>
        <CarCard />
      </div>
    </div>
  );
};

export default FeaturedCars;

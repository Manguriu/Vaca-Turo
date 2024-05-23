"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Description from "../DescriptionImage";
import { HouseDetailsList } from "@/constants";
import OtherDescription from "../OtherDescription";
import { HouseDetails as HouseDetailsType } from "@/types/index";


export default function HouseDetails() {
  const params = useParams();
  const { id } = params;
  const [house, setHouse] = useState<HouseDetailsType | null>(null);

  useEffect(() => {
    // Ensure id is a string
    if (!id || Array.isArray(id)) {
      return;
    }

    // Debugging: log the retrieved id
    console.log("Retrieved id from URL:", id);

    // Find the house details based on the id
    const foundHouse = HouseDetailsList.find((house) => house.id === parseInt(id, 10)) as HouseDetailsType;

    // Debugging: log the found house details
    console.log("Found house:", foundHouse);

    if (foundHouse) {
      setHouse(foundHouse);
    }
  }, [id]);

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="sm:px-16 px-6 mx-auto flex max-md:flex-col gap-2 lg:justify-between">
        <div className="lg:px-4 lg:py-4">
          <h1 className="text-2xl max-md:text-[18px] font-bold font-Poetsen">
            {house.detailsImages.Name}
          </h1>
        </div>
        <div className="lg:px-4 lg:py-4">
          <h1 className="lg:text-2xl font-bold">
            <span className="line-through text-gray-600 max-md:text-[18px] font-Briem">
              {house.detailsImages.price.split(' ')[0]}
            </span>
            <span className="font-extrabold max-md:text-[20px] font-Briem">
              {house.detailsImages.price.split(' ')[1]}
            </span>
            <span className="font-thin text-xl max-md:text-[18px] font-Briem"> /day</span>
          </h1>
        </div>
      </div>
      <div className="flex py-2 lg:mt-5">
        <Description detailsImages={house.detailsImages} />
      </div>
      <div className="lg:mt-10">
        <OtherDescription OtherDetails={house.OtherDetails} />
      </div>
    </main>
  );
}

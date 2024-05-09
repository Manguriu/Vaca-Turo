"use client";
import Link from "next/link";
import React from "react";
import { HouseDetailsList } from "@/constants";
import { useRouter } from "next/navigation";

const HostCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center gap-2 max-lg:gap-10">
      {HouseDetailsList.map((details) => (
        <Link href={`/HouseDetails/${details.id}`} key={details.id}>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={details.HouseDetailsListimage} alt="house" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-Briem">
                {details.HouseName}
                <div className="badge badge-secondary">New</div>
              </h2>
              <p className="max-lg:hidden lg:font-Josefin lg:text-[18px]">{details.Shortdescription}</p>
              <div className="card-actions justify-end mt-2">
                <button
                  onClick={() => router.push(`/HouseDetails/${details.id}`)}
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className=" font-Josefin max-md:text-[14px] max-lg:w-full max-lg:justify-center mb-2 flex rounded bg-[#1da1f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HostCard;


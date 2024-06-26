"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { featuredCarsList } from "@/constants";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Define the type for the model objects
type CarModel = {
  id: number;
  make: string;
  photo: string;
  title: string;
  price: string;
  type: string;
  details: {
    rating: string;
  };
};

const ExploreCarsMakeClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedMake = searchParams.get("make");
  const [filteredModels, setFilteredModels] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!selectedMake) {
  //     const models = featuredCarsList.filter((model) =>
  //       model.make.includes(selectedMake)
  //     ) as unknown as CarModel[];
  //     setFilteredModels(models);
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //     router.push("/"); // Redirect to home if no make is selected
  //   }
  // }, [selectedMake, router]);

  // if (loading) {
  //   return (
  //     <div>
  //       <Skeleton />
  //       <Skeleton count={5} />
  //     </div>
  //   );
  // }

  useEffect(() => {
    if (!selectedMake) {
      setLoading(false);
      router.push("/"); // Redirect to home if no make is selected
    } else {
      setLoading(true);
      // Simulate a delay to illustrate loading state change
      setTimeout(() => {
        const models = featuredCarsList.filter((model) =>
          model.make.includes(selectedMake)
        ) as unknown as CarModel[];
        setFilteredModels(models);
        setLoading(false);
      }, 500); // Adjust delay as needed
    }
  }, [selectedMake, router]);

  if (loading) {
    return (
      <div className="flex gap-2">
        <div>
          <Skeleton />
          <Skeleton width={300} height={200} />
          <Skeleton />
          <Skeleton />
          Loading...
        </div>
        <div>
          <Skeleton />
          <Skeleton width={300} height={200} />
          <Skeleton />
          <Skeleton />
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div>
      {" "}
      <h1 className="flex justify-center text-4xl mt-4 font-bold">
        Rent a {selectedMake}
      </h1>
      <div className="flex justify-center gap-3 flex-wrap pt-4">
        {filteredModels.length > 0 ? (
          filteredModels.map((details) => (
            <Link href={`/CarDetails/${details.id}`} key={details.id}>
              <div className="card card-compact w-72 bg-base-100 shadow-xl mb-4 py-5">
                <figure>
                  <img
                    src={details.photo}
                    alt="category"
                    className="object-cover w-full h-36 rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-lg font-bold">{details.title}</h2>
                  <h1 className="flex text-lg items-center gap-1">
                    <span className="font-bold">{details.details.rating}</span>
                    <span>
                      <img src="/star.png" alt="" className="h-5" />
                    </span>
                  </h1>
                  <hr className="border-t-2 border-gray-200 my-2" />
                  <div className="flex justify-between items-center">
                    <div className="card-actions justify-start">
                      <button className="btn btn-link font-bold">
                        Book Now
                      </button>
                    </div>
                    <div className="card-actions justify-end">
                      <h1 className="text-lg">
                        <span className="font-extrabold">{details.price}</span>
                        <span> / day</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center h-[50vh]">
            <img src="/notfound.jpg" className="mt-5" />
            <h2 className=" mt-5 text-2xl font-bold">
              {selectedMake} not found
            </h2>
            <p>We couldnt find any cars for the selected make.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCarsMakeClient;

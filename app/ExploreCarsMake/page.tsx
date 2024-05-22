"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { featuredCarsList } from "@/constants";
import Link from "next/link";

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

export default function ExploreCarsMake() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedMake = searchParams.get("make");
  const [filteredModels, setFilteredModels] = useState<CarModel[]>([]);

  useEffect(() => {
    if (!selectedMake) {
      router.push("/"); // Redirect to home if no make is selected
    } else {
      const models = featuredCarsList.filter((model) => model.make.includes(selectedMake)
      ) as unknown as CarModel[];
      setFilteredModels(models);
    }
  }, [selectedMake, router]);

  return (
    <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center">
      <div className="lg:mt-20 text-center max-md:mt-[4rem]">
        <h2 className="font-bold px-4 max-md:text-[20px]">
          Discover KingVac Rentals the worlds largest car sharing marketplace
        </h2>
        <h1 className="text-4xl mt-4 font-bold">Rent a {selectedMake}</h1>
      </div>
      <div className="flex gap-6 justify-center items-center mt-8">
        <div className="flex justify-center items-center lg:px-4">
          <div className="flex justify-center gap-3 flex-wrap pt-4">
            {filteredModels.map((details) => (
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
                          <span className="font-extrabold">
                            {details.price}
                          </span>
                          <span> / day</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

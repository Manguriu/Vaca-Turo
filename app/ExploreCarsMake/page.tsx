"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Dynamically import the client-side component
const ExploreCarsMakeClient = dynamic(
  () => import("./otherDetails/ExploreCarsMakeClient"),
  {
    ssr: false,
  }
);

export default function ExploreCarsMake() {

  return (
    <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center">
      <div className="lg:mt-20 text-center max-md:mt-[4rem]">
        <h2 className="font-bold px-4 max-md:text-[20px]">
          Discover KingVac Rentals the worlds largest car sharing marketplace
        </h2>
      </div>
      <div className="flex gap-6 justify-center items-center mt-8">
        <div className="flex justify-center items-center lg:px-4">
          <Suspense
            fallback={
              <div>
                <Skeleton />
                <Skeleton count={5} />{" "}
                Loading...
              </div>
            }
          >
            <ExploreCarsMakeClient />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

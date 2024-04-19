"use client";
import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="hero">
      <div className="flex-1 pt-20 xl:pt-10 padding-x">
        <h1 className="hero__title">
          Find your drive Car rentals from trusted, local hosts
        </h1>
        <p className="hero__subtitle">
          Get the best experience in the car rental business with us King vaca
          Car rentals
        </p>

        <button
          className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => router.push("/ExploreCars")}
        >
          Explore Cars
        </button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

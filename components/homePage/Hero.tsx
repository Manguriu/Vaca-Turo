"use client";
import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};

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
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
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

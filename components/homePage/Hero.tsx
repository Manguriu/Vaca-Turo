"use client";
// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const Hero = () => {
//   const router = useRouter();

//   // Function to handle smooth scroll to a specific element
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto items-center">
//       <div className="flex-1 sm:px-16 px-6">
//         <h1 className="2xl:text-[60px] sm:text-[64px] text-[50px] font-extrabold">
//           Find your drive Car rentals from trusted, local hosts
//         </h1>
//         <p className="text-[27px]  font-light mt-5">
//           Get the best experience in the car rental business with us King vaca
//           Car rentals
//         </p>

//         <button
//           className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//           onClick={() => scrollToSection("cars")}
//         >
//           Explore Cars
//         </button>
//       </div>
//       <div className=" relative xl:flex-[1.5] flex xl:justify-end items-end w-full xl:h-screen">
//         <div className=" xl:w-full w-[90%] xl:h-full h-[590px] z-0">
//           <Image src="/hero.png" alt="hero" fill className="object-contain" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  // Function to handle smooth scroll to a specific element
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col xl:flex-row gap-5 relative z-0 max-w-[1440px] mx-auto items-center justify-center ">
      <div className="flex-1 sm:px-16 px-6 text-center xl:text-left">
        <h1 className="2xl:text-[60px] sm:text-[64px] text-[50px] font-extrabold">
          Find your drive Car rentals from trusted, local hosts
        </h1>
        <p className="text-[27px] font-light mt-5">
          Get the best experience in the car rental business with us King vaca
          Car rentals
        </p>

        <button
          className="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => scrollToSection("cars")}
        >
          Explore Cars
        </button>
      </div>
      <div className="relative xl:flex-1 flex justify-center items-center xl:justify-end w-full xl:h-[590px]">
        <div className="w-[90%] xl:w-full h-full xl:mt-[15rem]">
          <Image
            src="/hero.png"
            alt="hero"
            layout="responsive"
            width={1200}
            height={800}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

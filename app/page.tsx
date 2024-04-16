import { CarsByMake, FeaturedCars } from "@/components/Index";
import { Hero } from "@/components/Index";
import FeaturedSlider from "@/components/Cars/FeaturedSlider";


import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div>
        <Hero />
      </div>

      <div className="bg-slate-200 ">
        <FeaturedSlider />
      </div>

      <div className="">
        <FeaturedCars />
      </div>

      <div>
      <CarsByMake  />
      </div>
    </main>
  );
}

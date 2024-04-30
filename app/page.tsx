import { CarsByMake, FeaturedCars, Host } from "@/components/Index";
import { Hero } from "@/components/Index";
// import FeaturedSlider from "@/components/Cars/FeaturedSlider";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="bg-slate-100 h-screen">
        <Hero />
      </div>

      {/* <div className="bg-slate-200 ">
        <FeaturedSlider />
      </div> */}

      <div className="bg-slate-100 h-screen" id="FeaturedCars">
        <FeaturedCars />
      </div>

      <div className="bg-slate-100" id="cars">
        <CarsByMake />
      </div>

      <div className="bg-slate-100" id="FeaturedHomes">
        <Host />
      </div>
    </main>
  );
}

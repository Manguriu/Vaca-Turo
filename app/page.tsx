import { CarsByMake, FeaturedCars, Host } from "@/components/Index";
import { Hero } from "@/components/Index";
import FeaturedSlider from "@/components/Cars/FeaturedSlider";



export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="bg-slate-100">
        <Hero />
      </div>

      <div className="bg-slate-200 ">
        <FeaturedSlider />
      </div>

      <div className="bg-slate-100">
        <FeaturedCars />
      </div>

      <div className="bg-slate-100">
      <CarsByMake  />
      </div>

      <div className="bg-slate-100">
      <Host />
      </div>
    </main>
  );
}

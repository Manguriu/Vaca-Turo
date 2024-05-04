import { CarsByMake, FeaturedCars, Host } from "@/components/Index";
import { Hero } from "@/components/Index";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <div className="xl:pt-5">
        <Hero />
      </div>

      <div className="xl:pt-5" id="FeaturedCars">
        <FeaturedCars />
      </div>

      <div className="xl:pt-5" id="cars">
        <CarsByMake />
      </div>

      <div className="xl:pt-5" id="FeaturedHomes">
        <Host />
      </div>
    </main>
  );
}

import Explorecard from "./Explorecard";

export default function ExploreCarsMake() {
  return (
    <main className="max-w-screen-xl mx-auto h-screen">
      <div className="">
        <div className="flex flex-col justify-center items-center mt-20">
          <h2 className="font-bold">
            Discover Turo, the world's largest car sharing marketplace
          </h2>
          <h1 className="text-4xl mt-4 font-bold">Rent a Jeep</h1>
        </div>
        <div className="flex gap-6 justify-center items-center mt-[10rem]">
          <div>
            <Explorecard />
          </div>
          <div>
            <Explorecard />
          </div>
          <div>
            <Explorecard />
          </div>
        </div>
      </div>
    </main>
  );
}

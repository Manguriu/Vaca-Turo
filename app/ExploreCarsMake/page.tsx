import { CarbymakeListDetails } from "@/constants";
import Link from "next/link";

export default function ExploreCarsMake() {
  return (
    <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center ">
      <div className=" lg:mt-20 text-center max-md:mt-[4rem]">
        <h2 className="font-bold px-4 max-md:text-[20px]">
          Discover KingVac Rentals the worlds largest car sharing marketplace
        </h2>
        <h1 className="text-4xl mt-4 font-bold">Rent a Jeep</h1>
      </div>
      <div className="flex gap-6 justify-center items-center mt-8">
        <div className="flex justify-center items-center lg:px-4">
          <div className="flex justify-center gap-3 flex-wrap pt-4" >
            {CarbymakeListDetails.map((details) => (
              <Link href="/CarDetails/id" key={details.id}>
                <div className="card card-compact w-72 bg-base-100 shadow-xl mb-4 py-5">
                  <figure>
                    <img
                      src={details.CrbymakeImage}
                      alt="category"
                      className="object-cover w-full h-36 rounded-t-lg"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-lg font-bold">{details.CrmakeName}</h2>
                    <h1 className="flex text-lg items-center gap-1">
                      <span className="font-bold">{details.CarmakeRating}</span>
                      <span>
                        <img src="/star.png" alt="" className="h-5" />
                      </span>
                      <span>({details.carmakeTrips}) Trips</span>
                    </h1>
                    <hr className="border-t-2 border-gray-200 my-2" />
                    <div className="flex justify-between items-center">
                      <div className="card-actions justify-start">
                        <button className="btn btn-link font-blold">
                          Book Now
                        </button>
                      </div>
                      <div className="card-actions justify-end">
                        <h1 className="text-lg">
                          <span className="font-extrabold">
                            ${details.CarmakePrice}
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




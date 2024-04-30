import React from "react";
import "./card.css";
import { featuredCarsList } from "@/constants";
import { title } from "process";
import { useRouter } from "next/navigation";

const CarCard = () => {
  const router = useRouter();
  return (
    <div className="container page-wrapper ">
      <div className="page-inner ">
        <div className="flex flex-wrap justify-between ">
          {featuredCarsList.map((details) => (
            <div key={title} className="el-wrapper">
              <div className="box-up">
                <img className="img object-cover" src={details.photo} alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{details.title}</span>
                    <span className="p-company">{details.drive}</span>
                  </div>
                  <div className="a-size">
                    Available : <span className="size">{details.type}</span>
                  </div>
                </div>
              </div>

              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>

                <a
                  className="cart rounded-lg"
                  href={`/CarDetails/${details.id}`}
                >
                  <span className="price">{details.price}</span>
                  <span className="add-to-cart">
                    <button
                      onClick={() => router.push(`/CarDetails/${details.id}`)}
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 flex rounded bg-[#1da1f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      BOOK
                    </button>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCard;

{
  /* <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
                       
                      </span> */
}

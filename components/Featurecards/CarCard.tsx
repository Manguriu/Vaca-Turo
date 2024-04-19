import React from "react";
import Image from "next/image";
import "./card.css";
import { featuredCarsList } from "@/constants";
import CustomButton from "../CustomButton";
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
                <img className="img" src={details.photo} alt="" />
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

                <a className="cart rounded-lg" href="#">
                  <span className="price">{details.price}</span>
                  <span className="add-to-cart">
                    {/* <button
                      onClick={() => router.push("/CarDetails")}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Book
                    </button> */}

                    <button
                      onClick={() => router.push("/CarDetails")}
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 flex rounded bg-[#1da1f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      {/* <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
                       
                      </span> */}
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

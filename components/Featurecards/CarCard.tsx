import React from "react";
import Image from "next/image";
import "./card.css";
import { featuredCarsList } from "@/constants";
import CustomButton from "../CustomButton";

const CarCard = () => {
  return (
    <div className="container page-wrapper ">
      <div className="page-inner ">
        <div className="flex flex-wrap justify-between ">
          {featuredCarsList.map((details) => (
            <div className="el-wrapper">
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
                    <CustomButton
                      title="Book"
                      btnType="button"
                      containerStyles="rounded-full bg-white min-w-[30px]"
                    />
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

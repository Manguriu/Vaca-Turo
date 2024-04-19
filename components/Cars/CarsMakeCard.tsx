import React from "react";
import "./cars.css";
import Link from "next/link";

const CarsMakeCard = () => {
  return (
  
     
        <div className="card card-compact w-60 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://static.autox.com/uploads/2021/03/Jeep-Wrangler-Image-4-.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jeep</h2>
          </div>
        </div>
     
  );
};

export default CarsMakeCard;


import { useCarDetails } from "@/app/CarDetails/content/CarDetailsContext";
import React from "react";
import { featuredCarsList } from "@/constants";
import { useRouter } from "next/navigation";
import "./card.css";


const CarCard = () => {
  const router = useRouter();
  const { carDetails, setCarDetails } = useCarDetails();

  const handleClick = (details: any) => {
    console.log("Setting car details:", details.details);
    setCarDetails((prevDetails) => {
      const newDetails = [...prevDetails, details];
      console.log("Updated car details in context:", newDetails);

      return newDetails;
    });

    // Log what is being pushed to the CarDetails page
    console.log("Navigating to:", `/CarDetails/${details.id}`);
    console.log("Details being pushed:", details);

    router.push(`/CarDetails/${details.id}`);
  };


  return (
    <div className="container max-md:px-0 page-wrapper mt-5">
      {featuredCarsList.map((details: any) => (
        <div key={details.id} className="el-wrapper">
          <div className="box-up">
            <img className="img object-cover" src={details.photo} alt="" />
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">
                  <h1 className="font-Poetsen max-md:text-[25px] lg:text-[20px]">
                    {details.title}
                  </h1>
                </span>
                <span className="p-company">
                  <h1 className="font-Poetsen max-md:text-[20px] text-[#1da1f2]">
                    {details.drive}
                  </h1>
                </span>
              </div>
              <div className="a-size flex items-center justify-center gap-2">
                <h1 className="font-Briem font-extrabold max-md:text-[20px]">
                  Available:
                </h1>
                <span className="size">
                  <h1 className="font-Josefin text-[18px]">{details.type}</h1>
                </span>
              </div>
            </div>
          </div>

          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>

            <a className="cart rounded-lg">
              <span className="price font-Josefin">
                <p className="max-md:text-[22px] lg:text-[20px] font-Poetsen">
                  {details.price}
                  <span className="max-md:text-[18px] font-Josefin"> /day</span>
                </p>
              </span>
              <span className="add-to-cart">
                <button
                  onClick={() => handleClick(details)}
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="font-Josefin max-md:text-[13px] mb-2 flex rounded bg-[#1da1f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  BOOK
                </button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;

